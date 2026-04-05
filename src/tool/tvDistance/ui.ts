import { calculateViewingDistance, getDimensionsFromDiagonal, type TVSpecs } from './logic';
import type { TvDistanceUI } from './index';

export function initTvDistance() {
    const root = document.getElementById('tv-distance-root');
    if (!root) return;

    const labels = JSON.parse(root.dataset.ui || '{}') as TvDistanceUI;

    const diagonalSlider = root.querySelector('#diagonal-slider') as HTMLInputElement;
    const diagonalValDisplay = root.querySelector('#diagonal-val-display') as HTMLElement;
    const resButtons = root.querySelectorAll('.res-btn') as NodeListOf<HTMLButtonElement>;

    const tvVisual = root.querySelector('#tv-visual') as HTMLElement;
    const tvWidthDisplay = root.querySelector('#tv-width-display') as HTMLElement;
    const distanceLine = root.querySelector('#distance-line') as HTMLElement;
    const userVisual = root.querySelector('#user-visual') as HTMLElement;
    const distanceBubbleVal = root.querySelector('#distance-bubble-val') as HTMLElement;

    const minVal = root.querySelector('#min-val') as HTMLElement;
    const optVal = root.querySelector('#opt-val') as HTMLElement;
    const maxVal = root.querySelector('#max-val') as HTMLElement;

    let currentRes: TVSpecs['resolution'] = "4k";

    const updateUI = () => {
        const diagonal = parseInt(diagonalSlider.value);
        diagonalValDisplay.textContent = `${diagonal}"`;

        const specs: TVSpecs = {
            diagonalInches: diagonal,
            resolution: currentRes,
            aspectRatio: 16 / 9
        };

        const dist = calculateViewingDistance(specs);
        const dims = getDimensionsFromDiagonal(diagonal);

        // Update Text
        minVal.textContent = `${dist.min.toFixed(2)}${labels.unitMeters}`;
        optVal.textContent = `${dist.optimal.toFixed(2)}${labels.unitMeters}`;
        maxVal.textContent = `${dist.max.toFixed(2)}${labels.unitMeters}`;
        distanceBubbleVal.textContent = `${dist.optimal.toFixed(2)}${labels.unitMeters}`;
        tvWidthDisplay.textContent = `${Math.round(dims.width)} ${labels.unitCm}`;

        // Update Simulation
        const scale = 1.8;
        tvVisual.style.width = `${dims.width * scale}px`;
        tvVisual.style.height = `${dims.height * scale}px`;

        const gapHeight = dist.optimal * 80; // Arbitrary pixels per meter
        distanceLine.style.height = `${gapHeight}px`;

        // Update Active Button
        resButtons.forEach(btn => {
            if (btn.dataset.res === currentRes) btn.classList.add('active');
            else btn.classList.remove('active');
        });
    };

    diagonalSlider.oninput = updateUI;
    resButtons.forEach(btn => {
        btn.onclick = () => {
            currentRes = btn.dataset.res as TVSpecs['resolution'];
            updateUI();
        };
    });

    updateUI();
}
