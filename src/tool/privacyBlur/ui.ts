import { PrivacyBlurEngine, type ToolType } from './logic';
import type { PrivacyBlurUI } from './index';

export function initPrivacyBlur() {
    const root = document.getElementById('privacy-blur-root');
    if (!root) return;

    const labels = JSON.parse(root.dataset.ui || '{}') as PrivacyBlurUI;
    const canvas = root.querySelector('#editor-canvas') as HTMLCanvasElement;
    const engine = new PrivacyBlurEngine(canvas);

    const fileInput = root.querySelector('#file-input') as HTMLInputElement;
    const emptyState = root.querySelector('#empty-state') as HTMLElement;
    const canvasContainer = root.querySelector('#canvas-container') as HTMLElement;
    const undoBtn = root.querySelector('#undo-btn') as HTMLButtonElement;
    const downloadBtn = root.querySelector('#download-btn') as HTMLButtonElement;
    const intensityRange = root.querySelector('#intensity-range') as HTMLInputElement;
    const btnAutoFace = root.querySelector('#btnAutoFace') as HTMLButtonElement;
    const loaderOverlay = root.querySelector('#loader-overlay') as HTMLElement;
    const loaderText = root.querySelector('#loader-text') as HTMLElement;

    const toolBtns = root.querySelectorAll('.tool-btn-orig');

    const updateControls = () => {
        undoBtn.disabled = !engine.hasLayers();
        downloadBtn.disabled = !engine.hasLayers();
    };

    const handleFile = (file: File) => {
        const reader = new FileReader();
        reader.onload = (e) => {
            const img = new Image();
            img.onload = () => {
                engine.setImage(img);
                emptyState.classList.add('hidden');
                canvasContainer.classList.remove('hidden');
                updateControls();
            };
            img.src = e.target?.result as string;
        };
        reader.readAsDataURL(file);
    };

    fileInput.onchange = () => {
        if (fileInput.files?.[0]) handleFile(fileInput.files[0]);
    };

    emptyState.onclick = () => fileInput.click();

    // Drag and Drop
    root.ondragover = (e) => {
        e.preventDefault();
        root.classList.add('dragging');
    };
    root.ondragleave = () => root.classList.remove('dragging');
    root.ondrop = (e) => {
        e.preventDefault();
        root.classList.remove('dragging');
        if (e.dataTransfer?.files[0]) handleFile(e.dataTransfer.files[0]);
    };

    toolBtns.forEach(btn => {
        (btn as HTMLElement).onclick = () => {
            toolBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            engine.updateLastLayerTool((btn as HTMLElement).dataset.tool as ToolType);
        };
    });

    intensityRange.oninput = () => {
        engine.setIntensity(parseInt(intensityRange.value));
    };

    undoBtn.onclick = () => {
        engine.undo();
        updateControls();
    };

    downloadBtn.onclick = () => {
        const link = document.createElement('a');
        link.download = `privacy_protected_${Date.now()}.webp`;
        link.href = engine.getCanvasData();
        link.click();
    };

    btnAutoFace.onclick = async () => {
        loaderOverlay.classList.remove('hidden');
        try {
            const found = await engine.detectFaces((text) => {
                loaderText.textContent = text;
            });
            if (!found) {
                alert(labels.noFacesDetected);
            }
            updateControls();
        } catch (err) {
            console.error(err);
            alert("Error in detection");
        } finally {
            loaderOverlay.classList.add('hidden');
        }
    };

    // Canvas Events
    canvas.onmousedown = (e) => engine.startDragging(e.clientX, e.clientY);
    window.onmousemove = (e) => engine.updateDragging(e.clientX, e.clientY);
    window.onmouseup = () => {
        if (engine.endDragging()) updateControls();
    };

    // Touch support
    canvas.addEventListener('touchstart', (e) => {
        e.preventDefault();
        engine.startDragging(e.touches[0].clientX, e.touches[0].clientY);
    }, { passive: false });

    canvas.addEventListener('touchmove', (e) => {
        e.preventDefault();
        engine.updateDragging(e.touches[0].clientX, e.touches[0].clientY);
    }, { passive: false });

    canvas.addEventListener('touchend', () => {
        if (engine.endDragging()) updateControls();
    });

    updateControls();
}
