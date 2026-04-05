import { parseSRT, shiftSubtitles, generateSRT, msToTime, type SrtItem } from './logic';

interface Elements {
    dropZone: HTMLElement;
    fileInput: HTMLInputElement;
    controls: HTMLElement;
    offsetInput: HTMLInputElement;
    downloadBtn: HTMLButtonElement;
    fileName: HTMLElement;
    statLines: HTMLElement;
    statFirst: HTMLElement;
    statLast: HTMLElement;
    previewOriginal: HTMLElement;
    previewModified: HTMLElement;
}

function escapeHtml(text: string): string {
    const map: { [key: string]: string } = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;",
    };
    return text.replace(/[&<>"']/g, (m) => map[m]);
}

function renderPreview(container: HTMLElement | null, items: SrtItem[]) {
    if (!container) return;
    container.innerHTML = "";
    items.slice(0, 5).forEach((item) => {
        const div = document.createElement("div");
        div.className = "preview-item";
        div.innerHTML = `
            <p class="preview-item-time">${msToTime(item.start)} --> ${msToTime(item.end)}</p>
            <p class="preview-item-text">${escapeHtml(item.text)}</p>
        `;
        container.appendChild(div);
    });
}

function handleDownload(fileName: string, items: SrtItem[]) {
    const content = generateSRT(items);
    const blob = new Blob([content], { type: "text/srt" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    
    const parts = fileName.split(".");
    if (parts.length > 1) {
        const ext = parts.pop();
        a.download = `${parts.join(".")}_fixed.${ext}`;
    } else {
        a.download = `${fileName}_fixed.srt`;
    }
    
    a.click();
    setTimeout(() => URL.revokeObjectURL(url), 100);
}

export function initSubtitleSync() {
    const root = document.getElementById('subtitle-sync-root');
    if (!root) return;

    const els: Elements = {
        dropZone: root.querySelector('#drop-zone') as HTMLElement,
        fileInput: root.querySelector('#file-input') as HTMLInputElement,
        controls: root.querySelector('#controls-section') as HTMLElement,
        offsetInput: root.querySelector('#offset-input') as HTMLInputElement,
        downloadBtn: root.querySelector('#download-btn') as HTMLButtonElement,
        fileName: root.querySelector('#file-name') as HTMLElement,
        statLines: root.querySelector('#stat-lines') as HTMLElement,
        statFirst: root.querySelector('#stat-first') as HTMLElement,
        statLast: root.querySelector('#stat-last') as HTMLElement,
        previewOriginal: root.querySelector('#preview-original') as HTMLElement,
        previewModified: root.querySelector('#preview-modified') as HTMLElement,
    };

    if (!els.dropZone || !els.fileInput) return;

    let originalItems: SrtItem[] = [];
    let currentFileName = "subtitles.srt";

    const updateUI = () => {
        if (!els.offsetInput || !els.statLines) return;
        
        const offsetSec = parseFloat(els.offsetInput.value) || 0;
        const offsetMs = offsetSec * 1000;
        const modifiedItems = shiftSubtitles(originalItems, offsetMs);

        els.statLines.textContent = modifiedItems.length.toString();
        if (modifiedItems.length > 0) {
            if (els.statFirst) els.statFirst.textContent = msToTime(modifiedItems[0].start);
            if (els.statLast) els.statLast.textContent = msToTime(modifiedItems[modifiedItems.length - 1].end);
        }

        renderPreview(els.previewOriginal, originalItems);
        renderPreview(els.previewModified, modifiedItems);

        if (els.downloadBtn) {
            els.downloadBtn.onclick = () => handleDownload(currentFileName, modifiedItems);
        }
    };

    els.dropZone.onclick = (e) => {
        if ((e.target as HTMLElement).id !== 'file-input') els.fileInput.click();
    };

    els.dropZone.ondragover = (e) => {
        e.preventDefault();
        els.dropZone.classList.add('drop-zone-active');
    };

    els.dropZone.ondragleave = () => els.dropZone.classList.remove('drop-zone-active');
    
    els.dropZone.ondrop = (e: DragEvent) => {
        e.preventDefault();
        els.dropZone.classList.remove('drop-zone-active');
        const file = e.dataTransfer?.files[0];
        if (file) processFile(file);
    };

    els.fileInput.onchange = () => {
        const file = els.fileInput.files?.[0];
        if (file) processFile(file);
    };

    if (els.offsetInput) {
        els.offsetInput.oninput = updateUI;
    }

    const processFile = (file: File) => {
        currentFileName = file.name;
        if (els.fileName) {
            els.fileName.textContent = file.name;
            els.fileName.classList.remove('hidden');
        }

        const reader = new FileReader();
        reader.onload = (e) => {
            const text = e.target?.result;
            if (typeof text !== 'string') return;
            
            originalItems = parseSRT(text);
            if (originalItems.length > 0 && els.controls) {
                els.controls.classList.remove('hidden');
                updateUI();
            }
        };
        reader.readAsText(file);
    };
}
