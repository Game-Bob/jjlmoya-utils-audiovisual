export interface ExifTags extends Record<string, string | number | boolean | undefined> {
    GPSDetected?: boolean;
    GPSLocation?: string;
    Model?: string;
    Software?: string;
    DateTimeOriginal?: string;
}

interface MetaParams {
    view: DataView;
    tiffStart: number;
    offset: number;
    littleEndian: boolean;
    tags: ExifTags;
}

const getBytesPerComponent = (type: number): number => {
    const map: Record<number, number> = { 1: 1, 2: 1, 7: 1, 3: 2, 4: 4, 9: 4, 5: 8, 10: 8 };
    return map[type] || 0;
};

const readString = (view: DataView, offset: number, length: number): string => {
    let str = "";
    for (let n = 0; n < length && n < 100; n++) {
        const charCode = view.getUint8(offset + n);
        if (charCode === 0) break;
        str += String.fromCharCode(charCode);
    }
    return str.trim();
};

const readRational = (view: DataView, offset: number, numValues: number, littleEndian: boolean): number[] => {
    const values = [];
    for (let i = 0; i < numValues; i++) {
        const num = view.getUint32(offset + i * 8, littleEndian);
        const den = view.getUint32(offset + i * 8 + 4, littleEndian);
        values.push(den === 0 ? 0 : Math.round((num / den) * 1000) / 1000);
    }
    return values;
};

const getGPSCoord = (view: DataView, tiffStart: number, entryOffset: number, littleEndian: boolean): { tag: number, val: number | number[] | string | null } => {
    const tag = view.getUint16(entryOffset, littleEndian);
    const type = view.getUint16(entryOffset + 2, littleEndian);
    const numValues = view.getUint32(entryOffset + 4, littleEndian);
    const dataSize = numValues * getBytesPerComponent(type);
    const valOffset = dataSize > 4 ? tiffStart + view.getUint32(entryOffset + 8, littleEndian) : entryOffset + 8;

    if (tag === 1 || tag === 3) return { tag, val: String.fromCharCode(view.getUint8(valOffset)) };
    if (tag === 2 || tag === 4) return { tag, val: readRational(view, valOffset, 3, littleEndian) };
    return { tag, val: null };
};

const parseGPS = (view: DataView, tiffStart: number, offset: number, littleEndian: boolean): string | null => {
    const numEntries = view.getUint16(offset, littleEndian);
    let lat: number[] | null = null, latRef = "N", lon: number[] | null = null, lonRef = "E";

    for (let i = 0; i < numEntries; i++) {
        const { tag, val } = getGPSCoord(view, tiffStart, offset + 2 + i * 12, littleEndian);
        if (tag === 1) latRef = val as string;
        else if (tag === 2) lat = val as number[];
        else if (tag === 3) lonRef = val as string;
        else if (tag === 4) lon = val as number[];
    }
    return lat && lon ? `${lat[0]}° ${lat[1]}' ${lat[2]}" ${latRef}, ${lon[0]}° ${lon[1]}' ${lon[2]}" ${lonRef}` : null;
};

const processIFDEntry = (params: MetaParams) => {
    const { view, tiffStart, offset, littleEndian, tags } = params;
    const tag = view.getUint16(offset, littleEndian);
    const type = view.getUint16(offset + 2, littleEndian);
    const numValues = view.getUint32(offset + 4, littleEndian);
    const dataSize = numValues * getBytesPerComponent(type);
    const valOffset = dataSize > 4 ? tiffStart + view.getUint32(offset + 8, littleEndian) : offset + 8;

    if (tag === 0x8825) {
        tags.GPSDetected = true;
        const gps = parseGPS(view, tiffStart, tiffStart + view.getUint32(offset + 8, littleEndian), littleEndian);
        if (gps) tags.GPSLocation = gps;
    } else if (tag === 0x0110) tags.Model = readString(view, valOffset, numValues);
    else if (tag === 0x9003) tags.DateTimeOriginal = readString(view, valOffset, numValues);
};

const parseIFD = (params: MetaParams) => {
    const { view, offset, littleEndian } = params;
    const numEntries = view.getUint16(offset, littleEndian);
    for (let i = 0; i < numEntries; i++) {
        processIFDEntry({ ...params, offset: offset + 2 + i * 12 });
    }
};

const findExifHeader = (view: DataView): ExifTags | null => {
    let off = 2;
    while (off + 4 < view.byteLength) {
        if (view.getUint8(off) !== 0xff) break;
        if (view.getUint8(off + 1) === 0xe1) {
            const tStart = off + 10;
            const le = view.getUint16(tStart, false) === 0x4949;
            const tags: ExifTags = {};
            parseIFD({ view, tiffStart: tStart, offset: tStart + view.getUint32(tStart + 4, le), littleEndian: le, tags });
            return tags;
        }
        const sLen = view.getUint16(off + 2, false);
        if (sLen < 2) break;
        off += 2 + sLen;
    }
    return null;
};

export const extractExif = async (file: File): Promise<ExifTags> => {
    return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                if (!e.target?.result) return resolve({});
                const view = new DataView(e.target.result as ArrayBuffer);
                if (view.getUint16(0, false) !== 0xffd8) return resolve({});
                resolve(findExifHeader(view) || {});
            } catch {
                resolve({});
            }
        };
        reader.readAsArrayBuffer(file.slice(0, 65536));
    });
};

export const createCleanImage = async (img: HTMLImageElement): Promise<Blob | null> => {
    const canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;
    const ctx = canvas.getContext("2d");
    if (!ctx) return null;
    ctx.drawImage(img, 0, 0);
    return new Promise((resolve) => canvas.toBlob(resolve, "image/webp"));
};
