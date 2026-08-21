import {
  getDepthOfFieldEffect,
  getMotionEffect,
  getNoiseEffect,
  formatShutter,
} from './logic';

export interface VisualRenderParams {
  iso: number;
  aperture: number;
  shutter: number;
  ev: number;
}

export function renderTriangleSVG(params: VisualRenderParams): string {
  const { iso, aperture, shutter, ev } = params;
  const dofText = getDepthOfFieldEffect(aperture);
  const motionText = getMotionEffect(shutter);
  const noiseText = getNoiseEffect(iso);

  return `
    <svg viewBox="0 0 400 320" class="exposure-triangle-svg" aria-label="Exposure Triangle Visualization">
      <defs>
        <linearGradient id="triGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="var(--n-primary, #6366f1)" stop-opacity="0.15" />
          <stop offset="100%" stop-color="var(--n-accent, #8b5cf6)" stop-opacity="0.05" />
        </linearGradient>
      </defs>
      
      <polygon points="200,30 50,270 350,270" fill="url(#triGrad)" stroke="var(--n-border, #cbd5e1)" stroke-width="2" />
      
      <circle cx="200" cy="30" r="14" fill="var(--n-primary, #6366f1)" />
      <text x="200" y="34" text-anchor="middle" fill="#fff" font-size="10" font-weight="bold">f/</text>
      <text x="200" y="14" text-anchor="middle" fill="var(--n-text, #1e293b)" font-size="12" font-weight="600">Aperture: f/${aperture}</text>
      
      <circle cx="50" cy="270" r="14" fill="var(--n-accent, #8b5cf6)" />
      <text x="50" y="274" text-anchor="middle" fill="#fff" font-size="9" font-weight="bold">SH</text>
      <text x="50" y="295" text-anchor="middle" fill="var(--n-text, #1e293b)" font-size="12" font-weight="600">${formatShutter(shutter)}</text>
      
      <circle cx="350" cy="270" r="14" fill="var(--n-success, #10b981)" />
      <text x="350" y="274" text-anchor="middle" fill="#fff" font-size="9" font-weight="bold">ISO</text>
      <text x="350" y="295" text-anchor="middle" fill="var(--n-text, #1e293b)" font-size="12" font-weight="600">ISO ${iso}</text>

      <rect x="140" y="140" width="120" height="40" rx="8" fill="var(--n-surface, #ffffff)" stroke="var(--n-border, #cbd5e1)" />
      <text x="200" y="158" text-anchor="middle" fill="var(--n-primary, #6366f1)" font-size="14" font-weight="bold">EV ${ev}</text>
      <text x="200" y="172" text-anchor="middle" fill="var(--n-text-muted, #64748b)" font-size="10">Target Value</text>

      <line x1="200" y1="44" x2="200" y2="140" stroke="var(--n-primary, #6366f1)" stroke-dasharray="3,3" />
      <line x1="64" y1="260" x2="140" y2="170" stroke="var(--n-accent, #8b5cf6)" stroke-dasharray="3,3" />
      <line x1="336" y1="260" x2="260" y2="170" stroke="var(--n-success, #10b981)" stroke-dasharray="3,3" />
    </svg>
    <div class="effects-summary">
      <div class="effect-chip">${dofText}</div>
      <div class="effect-chip">${motionText}</div>
      <div class="effect-chip">${noiseText}</div>
    </div>
  `;
}
