import { calculateTimelapse, type TimelapseResult } from './logic';
import type { TimelapseUI } from './index';

interface Elements {
    hours: HTMLInputElement;
    minutes: HTMLInputElement;
    seconds: HTMLInputElement;
    fps: HTMLSelectElement;
    interval: HTMLElement;
    photos: HTMLElement;
    storage: HTMLElement;
    speed: HTMLElement;
    shutter: HTMLElement;
}

export function initTimelapseCalculator() {
    const root = document.getElementById('timelapse-calculator-root');
    if (!root) return;

    const els: Elements = {
        hours: root.querySelector('#event-hours') as HTMLInputElement,
        minutes: root.querySelector('#event-minutes') as HTMLInputElement,
        seconds: root.querySelector('#video-seconds') as HTMLInputElement,
        fps: root.querySelector('#fps-select') as HTMLSelectElement,
        interval: root.querySelector('#result-interval')!,
        photos: root.querySelector('#result-photos')!,
        storage: root.querySelector('#result-storage')!,
        speed: root.querySelector('#result-speed')!,
        shutter: root.querySelector('#result-shutter')!,
    };

    const updateResults = (results: TimelapseResult) => {
        if (els.interval) {
            els.interval.innerText = results.interval < 1 ? results.interval.toFixed(2) : results.interval.toFixed(1);
        }
        if (els.photos) {
            els.photos.innerText = results.totalFrames.toLocaleString(document.documentElement.lang || 'es-ES');
        }
        if (els.storage) {
            els.storage.innerText = `~${results.storageGB.toFixed(1)} GB`;
        }
        if (els.speed) {
            els.speed.innerText = `${results.speedFactor.toFixed(0)}x`;
        }
        if (els.shutter) {
            const ss = results.shutterSpeed;
            els.shutter.innerText = ss < 1 ? `1/${Math.round(1 / ss)}s` : `${ss.toFixed(1)}s (180°)`;
        }
    };

    const recalculate = () => {
        const h = parseFloat(els.hours?.value) || 0;
        const m = parseFloat(els.minutes?.value) || 0;
        const s = parseFloat(els.seconds?.value) || 0;
        const f = parseInt(els.fps?.value) || 24;

        const results = calculateTimelapse(h * 3600 + m * 60, s, f);
        updateResults(results);
    };

    [els.hours, els.minutes, els.seconds, els.fps].forEach((el) => {
        el?.addEventListener('input', recalculate);
        el?.addEventListener('change', recalculate);
    });

    recalculate();
}
