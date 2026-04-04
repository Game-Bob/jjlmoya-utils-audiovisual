import { extractExif, createCleanImage } from './logic';
import type { ExifCleanerUI } from './index';

export interface ExifEls {
    initial: HTMLElement;
    processing: HTMLElement;
    result: HTMLElement;
    preview: HTMLImageElement;
    download: HTMLElement;
    reset: HTMLElement;
    list: HTMLElement;
    input: HTMLInputElement;
}

function renderLog(tags: Record<string, string | number | boolean | undefined>, list: HTMLElement, riskTitle: string) {
    if (!list) return;
    const keys = Object.keys(tags);
    if (keys.length === 0) {
        list.innerHTML = `<div style="display: flex; align-items: center; justify-content: center; height: 100%; color: #94a3b8"><p>No se encontraron metadatos.</p></div>`;
        return;
    }

    let html = `<div style="color: var(--accent); font-weight: 700; margin-bottom: 0.5rem">${riskTitle}</div><ul style="list-style: none; padding: 0; margin-bottom: 1rem">`;
    if (tags.GPSLocation) html += `<li style="color: var(--primary-base); font-weight: 700; display: flex; justify-content: space-between"><span>GPS:</span> <span style="font-size: 0.6rem; text-align: right">${tags.GPSLocation}</span></li>`;
    if (tags.Model) html += `<li style="color: var(--accent); display: flex; justify-content: space-between"><span>CAMARA:</span> <span>${tags.Model}</span></li>`;
    if (tags.DateTimeOriginal) html += `<li style="color: var(--cyan); display: flex; justify-content: space-between"><span>FECHA:</span> <span>${tags.DateTimeOriginal}</span></li>`;
    list.innerHTML = html + "</ul>";
}

function handleDownload(file: File, blob: Blob | null) {
    if (blob) {
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `CLEAN_${file.name.split(".")[0]}.webp`;
        a.click();
        setTimeout(() => URL.revokeObjectURL(url), 100);
    }
}

async function processAndClean(file: File, els: ExifEls, labels: ExifCleanerUI) {
    els.processing.classList.remove("hidden");
    els.initial.classList.add("hidden");

    const reader = new FileReader();
    reader.onload = async (e) => {
        const metadata = await extractExif(file);
        const img = new Image();
        img.onload = async () => {
            if (els.preview) els.preview.src = img.src;
            renderLog(metadata, els.list, labels.privacyRiskTitle);
            const blob = await createCleanImage(img);
            
            els.download.onclick = () => handleDownload(file, blob);
            
            els.processing.classList.add("hidden");
            els.result.classList.remove("hidden");
            setTimeout(() => els.result.classList.remove("opacity-0"), 50);
        };
        img.src = e.target?.result as string;
    };
    reader.readAsDataURL(file);
}

function setupEvents(root: HTMLElement, els: ExifEls, labels: ExifCleanerUI) {
    root.onclick = (e) => {
        const isButton = (e.target as HTMLElement).closest('button') || (e.target as HTMLElement).closest('label');
        if (!isButton && els.result.classList.contains('hidden')) {
            els.input.click();
        }
    };

    root.ondragover = (e) => {
        e.preventDefault();
        root.classList.add("drop-zone-active");
    };

    root.ondragleave = () => root.classList.remove("drop-zone-active");
    root.ondrop = (e: DragEvent) => {
        e.preventDefault();
        root.classList.remove("drop-zone-active");
        if (e.dataTransfer?.files[0]) processAndClean(e.dataTransfer.files[0], els, labels);
    };

    els.input.onchange = () => {
        if (els.input.files?.[0]) processAndClean(els.input.files[0], els, labels);
    };

    els.reset.onclick = () => {
        els.result.classList.add("opacity-0");
        setTimeout(() => {
            els.result.classList.add("hidden");
            els.initial.classList.remove("hidden");
            els.input.value = "";
        }, 300);
    };
}

export const initExifCleaner = () => {
    const root = document.getElementById('exif-cleaner-root');
    if (!root) return;

    const labels = JSON.parse(root.dataset.ui || '{}') as ExifCleanerUI;

    const els: ExifEls = {
        initial: root.querySelector("#initial-state")!,
        processing: root.querySelector("#processing-state")!,
        result: root.querySelector("#result-state")!,
        preview: root.querySelector("#result-preview") as HTMLImageElement,
        download: root.querySelector("#download-btn")!,
        reset: root.querySelector("#reset-button")!,
        list: root.querySelector("#metadata-list")!,
        input: root.querySelector("#file-upload") as HTMLInputElement
    };

    setupEvents(root, els, labels);
};
