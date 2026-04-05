import { extractPalette, type ColorSwatch } from './logic';
import type { ChromaticLensUI } from './index';

export function initChromaticLens() {
    const root = document.getElementById('chromatic-lens-root');
    if (!root) return;

    const labels = JSON.parse(root.dataset.ui || '{}') as ChromaticLensUI;
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d', { willReadFrequently: true })!;

    const fileInput = root.querySelector('#file-input') as HTMLInputElement;
    const dropArea = root.querySelector('#drop-area') as HTMLElement;
    const workspace = root.querySelector('#workspace-area') as HTMLElement;
    const emptyState = root.querySelector('#empty-state') as HTMLElement;
    const loader = root.querySelector('#loader-overlay') as HTMLElement;
    const previewImg = root.querySelector('#preview-image') as HTMLImageElement;
    const paletteGrid = root.querySelector('#swatches-grid') as HTMLElement;
    const colorCountSelect = root.querySelector('#color-count') as HTMLSelectElement;

    let currentImageData: Uint8ClampedArray | null = null;
    let isProcessing = false;

    const processPalette = () => {
        if (!currentImageData || isProcessing) return;
        isProcessing = true;
        loader.classList.remove('hidden');
        paletteGrid.classList.add('hidden');

        const colorCount = parseInt(colorCountSelect.value);

        requestAnimationFrame(() => {
            setTimeout(() => {
                const palette = extractPalette(currentImageData!, colorCount);
                renderPalette(palette);
                loader.classList.add('hidden');
                paletteGrid.classList.remove('hidden');
                isProcessing = false;
            }, 50);
        });
    };

    const renderPalette = (palette: ColorSwatch[]) => {
        paletteGrid.innerHTML = "";
        palette.forEach((swatch) => {
            const swatchEl = document.createElement('div');
            swatchEl.className = "swatch";
            swatchEl.innerHTML = `
                <div class="swatch-color" style="background-color: ${swatch.hex}"></div>
                <div class="swatch-info">
                    <span class="swatch-hex">${swatch.hex}</span>
                    <div class="swatch-action">
                        <span class="action-text">${labels.copyLabel}</span>
                    </div>
                </div>
            `;
            
            swatchEl.onclick = () => {
                navigator.clipboard.writeText(swatch.hex);
                const actionText = swatchEl.querySelector('.action-text')!;
                const originalText = actionText.textContent;
                actionText.textContent = labels.copiedLabel;
                swatchEl.classList.add('copied');
                
                setTimeout(() => {
                    actionText.textContent = originalText;
                    swatchEl.classList.remove('copied');
                }, 2000);
            };

            paletteGrid.appendChild(swatchEl);
        });
    };

    const handleFile = (file: File) => {
        const reader = new FileReader();
        reader.onload = (e) => {
            const img = new Image();
            img.onload = () => {
                canvas.width = img.naturalWidth;
                canvas.height = img.naturalHeight;
                ctx.drawImage(img, 0, 0);
                currentImageData = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
                
                previewImg.src = img.src;
                emptyState.classList.add('hidden');
                workspace.classList.remove('hidden');
                processPalette();
            };
            img.src = e.target?.result as string;
        };
        reader.readAsDataURL(file);
    };

    dropArea.onclick = () => fileInput.click();
    fileInput.onchange = () => {
        if (fileInput.files?.[0]) handleFile(fileInput.files[0]);
    };

    colorCountSelect.onchange = processPalette;

    root.ondragover = (e) => { e.preventDefault(); dropArea.classList.add('drop-area-active'); };
    root.ondragleave = () => { dropArea.classList.remove('drop-area-active'); };
    root.ondrop = (e: DragEvent) => {
        e.preventDefault();
        dropArea.classList.remove('drop-area-active');
        if (e.dataTransfer?.files[0]) handleFile(e.dataTransfer.files[0]);
    };
}
