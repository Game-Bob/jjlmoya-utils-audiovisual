import { calculatePrintSize, getQualityLevel, checkFormatSupport, PAPER_FORMATS } from './logic';
import type { PrintQualityCalculatorUI } from './index';

export function initPrintQualityCalculator() {
    const root = document.getElementById('print-quality-root');
    if (!root) return;

    const labels = JSON.parse(root.dataset.ui || '{}') as PrintQualityCalculatorUI;

    const fileInput = root.querySelector('#file-input') as HTMLInputElement;
    const dropZone = root.querySelector('#drop-zone') as HTMLElement;
    const resultsArea = root.querySelector('#results-area') as HTMLElement;
    const emptyState = root.querySelector('#empty-state') as HTMLElement;

    const previewImg = root.querySelector('#preview-img') as HTMLImageElement;
    const fileNameEl = root.querySelector('#file-name') as HTMLElement;
    const pixelDimsEl = root.querySelector('#pixel-dims') as HTMLElement;
    const fileSizeEl = root.querySelector('#file-size') as HTMLElement;
    
    const dpiSlider = root.querySelector('#dpi-slider') as HTMLInputElement;
    const dpiInput = root.querySelector('#dpi-input') as HTMLInputElement;
    const presets = root.querySelectorAll('.preset-btn') as NodeListOf<HTMLButtonElement>;

    const outputCm = root.querySelector('#output-cm') as HTMLElement;
    const outputIn = root.querySelector('#output-in') as HTMLElement;
    const qualityLevel = root.querySelector('#quality-level') as HTMLElement;
    const qualityDesc = root.querySelector('#quality-description') as HTMLElement;
    const formatsBody = root.querySelector('#formats-body') as HTMLElement;

    let currentPixels = { w: 0, h: 0 };

    const updateUI = () => {
        const dpi = parseInt(dpiInput.value) || 300;
        const size = calculatePrintSize(currentPixels.w, currentPixels.h, dpi);
        
        outputCm.textContent = `${size.cmW.toFixed(1)} x ${size.cmH.toFixed(1)} ${labels.unitCm}`;
        outputIn.textContent = `${size.inW.toFixed(1)} x ${size.inH.toFixed(1)} ${labels.unitInches}`;

        const level = getQualityLevel(dpi);
        const levelKey = level.charAt(0).toUpperCase() + level.slice(1);
        
        qualityLevel.textContent = labels[`quality${levelKey}`] || '';
        qualityDesc.textContent = labels[`quality${levelKey}Desc`] || '';

        renderFormats(size.cmW, size.cmH);
    };

    const renderFormats = (cmW: number, cmH: number) => {
        formatsBody.innerHTML = "";
        PAPER_FORMATS.forEach((paper) => {
            const { supported, percentage } = checkFormatSupport(cmW, cmH, paper);
            const row = document.createElement('tr');
            row.innerHTML = `
                <td class="format-name">${paper.name}</td>
                <td class="format-measure">${paper.w} x ${paper.h} cm</td>
                <td>
                    <div class="support-status ${supported ? 'status-yes' : 'status-no'}">
                        ${supported ? '✓' : '×'}
                        <span>${supported ? 'YES' : `${percentage.toFixed(0)}%`}</span>
                    </div>
                </td>
            `;
            formatsBody.appendChild(row);
        });
    };

    const handleFile = (file: File) => {
        const reader = new FileReader();
        reader.onload = (e) => {
            const img = new Image();
            img.onload = () => {
                currentPixels = { w: img.naturalWidth, h: img.naturalHeight };
                previewImg.src = img.src;
                fileNameEl.textContent = file.name;
                pixelDimsEl.textContent = `${img.naturalWidth} x ${img.naturalHeight} PX`;
                fileSizeEl.textContent = `${(file.size / (1024 * 1024)).toFixed(2)} MB`;

                resultsArea.classList.remove('hidden');
                emptyState.classList.add('hidden');
                updateUI();
                resultsArea.scrollIntoView({ behavior: 'smooth', block: 'start' });
            };
            img.src = e.target?.result as string;
        };
        reader.readAsDataURL(file);
    };

    dropZone.onclick = () => fileInput.click();
    fileInput.onchange = () => {
        if (fileInput.files?.[0]) handleFile(fileInput.files[0]);
    };

    dpiSlider.oninput = () => {
        dpiInput.value = dpiSlider.value;
        presets.forEach(p => p.classList.remove('active'));
        updateUI();
    };

    dpiInput.oninput = () => {
        dpiSlider.value = dpiInput.value;
        presets.forEach(p => p.classList.remove('active'));
        updateUI();
    };

    presets.forEach(btn => {
        btn.onclick = () => {
            const val = btn.dataset.val!;
            dpiInput.value = val;
            dpiSlider.value = val;
            presets.forEach(p => p.classList.remove('active'));
            btn.classList.add('active');
            updateUI();
        };
    });

    // Drag & Drop
    root.ondragover = (e) => { e.preventDefault(); dropZone.classList.add('drop-zone-active'); };
    root.ondragleave = () => { dropZone.classList.remove('drop-zone-active'); };
    root.ondrop = (e: DragEvent) => {
        e.preventDefault();
        dropZone.classList.remove('drop-zone-active');
        if (e.dataTransfer?.files[0]) handleFile(e.dataTransfer.files[0]);
    };
}
