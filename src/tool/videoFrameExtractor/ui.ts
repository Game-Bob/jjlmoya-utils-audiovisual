import { captureFrameFromVideo, captureFrameAtTime, formatTime, type CapturedFrame } from './logic';
import type { VideoFrameExtractorUI } from './index';

export function initVideoFrameExtractor() {
    const root = document.getElementById('video-extractor-root');
    if (!root) return;

    const labels = JSON.parse(root.dataset.ui || '{}') as VideoFrameExtractorUI;

    const videoInput = root.querySelector('#video-input') as HTMLInputElement;
    const uploadSection = root.querySelector('#upload-section') as HTMLElement;
    const playerArea = root.querySelector('#player-area') as HTMLElement;
    const video = root.querySelector('#mainVideo') as HTMLVideoElement;
    
    const playBtn = root.querySelector('#play-btn') as HTMLElement;
    const playLabel = root.querySelector('#play-label') as HTMLElement;
    const playIcon = root.querySelector('#play-icon') as HTMLElement;
    
    const captureBtn = root.querySelector('#capture-btn') as HTMLElement;
    const nextFrameBtn = root.querySelector('#next-frame-btn') as HTMLElement;
    const prevFrameBtn = root.querySelector('#prev-frame-btn') as HTMLElement;
    
    const scrubber = root.querySelector('#scrubber') as HTMLInputElement;
    const timeNow = root.querySelector('#time-now') as HTMLElement;
    const timeTotal = root.querySelector('#time-total') as HTMLElement;
    
    const batchInterval = root.querySelector('#batch-interval') as HTMLInputElement;
    const batchStartBtn = root.querySelector('#batch-start-btn') as HTMLButtonElement;
    const batchLabel = root.querySelector('#batch-label') as HTMLElement;
    
    const framesGrid = root.querySelector('#frames-grid') as HTMLElement;
    const galleryEmpty = root.querySelector('#gallery-empty') as HTMLElement;
    const downloadAllBtn = root.querySelector('#download-all-btn') as HTMLElement;
    const resetBtn = root.querySelector('#reset-btn') as HTMLElement;

    const lightbox = document.getElementById('lightbox') as HTMLElement;
    const lightboxImg = document.getElementById('lightbox-img') as HTMLImageElement;
    const lightboxDown = document.getElementById('lightbox-down') as HTMLAnchorElement;

    let captured: CapturedFrame[] = [];
    const FRAME_STEP = 1 / 24;

    const updateControls = () => {
        timeNow.textContent = formatTime(video.currentTime);
        scrubber.value = video.currentTime.toString();
    };

    const handleVideoSelect = (file: File) => {
        const url = URL.createObjectURL(file);
        video.src = url;
        uploadSection.classList.add('hidden');
        playerArea.classList.remove('hidden');
        video.load();
    };

    const addFrameToUI = (frame: CapturedFrame) => {
        captured.push(frame);
        galleryEmpty.classList.add('hidden');
        downloadAllBtn.classList.remove('hidden');

        const card = document.createElement('div');
        card.className = "frame-card";
        card.innerHTML = `
            <img src="${frame.url}" class="frame-thumb" alt="Frame ${frame.timestamp}" />
            <button class="del-btn-mini" data-id="${frame.id}">×</button>
            <div class="frame-info">
                <span class="frame-time">${formatTime(frame.timestamp)}</span>
                <a href="${frame.url}" download="frame_${frame.timestamp.toFixed(2)}.webp" class="frame-download">
                    <svg style="width: 1.25rem; height: 1.25rem;" viewBox="0 0 24 24"><path fill="currentColor" d="M19,3H5V5H19V3M19,19H5V21H19V19M12,17L18,11H14V7H10V11H6L12,17Z" /></svg>
                </a>
            </div>
        `;

        (card.querySelector('.frame-thumb') as HTMLElement).onclick = () => {
            lightboxImg.src = frame.url;
            lightboxDown.href = frame.url;
            lightbox.classList.add('active');
        };

        const delBtn = card.querySelector('.del-btn-mini') as HTMLElement;
        delBtn.onclick = (e) => {
           e.stopPropagation();
           captured = captured.filter(f => f.id !== delBtn.dataset.id);
           card.remove();
           if (captured.length === 0) {
               galleryEmpty.classList.remove('hidden');
               downloadAllBtn.classList.add('hidden');
           }
        };

        framesGrid.prepend(card);
    };

    video.onloadedmetadata = () => {
        timeTotal.textContent = formatTime(video.duration);
        scrubber.max = video.duration.toString();
    };

    video.ontimeupdate = updateControls;

    scrubber.oninput = () => {
        video.currentTime = parseFloat(scrubber.value);
    };

    playBtn.onclick = () => {
        if (video.paused) {
            video.play();
            playIcon.classList.add('hidden');
            playLabel.textContent = labels.pauseLabel;
        } else {
            video.pause();
            playIcon.classList.remove('hidden');
            playLabel.textContent = labels.playLabel;
        }
    };

    captureBtn.onclick = () => {
        const frame = captureFrameFromVideo(video);
        if (frame) addFrameToUI(frame);
    };

    nextFrameBtn.onclick = () => {
        video.pause();
        video.currentTime = Math.min(video.duration, video.currentTime + FRAME_STEP);
    };

    prevFrameBtn.onclick = () => {
        video.pause();
        video.currentTime = Math.max(0, video.currentTime - FRAME_STEP);
    };

    batchStartBtn.onclick = async () => {
        const interval = parseFloat(batchInterval.value);
        if (isNaN(interval) || interval <= 0) return;

        batchStartBtn.disabled = true;
        const originalText = batchLabel.textContent;
        batchLabel.textContent = labels.batchProcessing;

        const duration = video.duration;
        for (let t = 0; t <= duration; t += interval) {
            const frame = await captureFrameAtTime(video, t);
            if (frame) addFrameToUI(frame);
        }

        batchStartBtn.disabled = false;
        batchLabel.textContent = originalText;
    };

    downloadAllBtn.onclick = () => {
        captured.forEach((frame, i) => {
            setTimeout(() => {
                const link = document.createElement('a');
                link.href = frame.url;
                link.download = `frame_${i}.webp`;
                link.click();
            }, i * 200);
        });
    };

    resetBtn.onclick = () => {
        video.pause();
        video.src = "";
        playerArea.classList.add('hidden');
        uploadSection.classList.remove('hidden');
        captured = [];
        framesGrid.innerHTML = "";
        galleryEmpty.classList.remove('hidden');
        downloadAllBtn.classList.add('hidden');
    };

    uploadSection.onclick = () => videoInput.click();
    videoInput.onchange = () => {
        if (videoInput.files?.[0]) handleVideoSelect(videoInput.files[0]);
    };

    (root.querySelector('.lightbox-close') as HTMLElement).onclick = () => lightbox.classList.remove('active');
    lightbox.onclick = (e) => { if (e.target === lightbox) lightbox.classList.remove('active'); };
}
