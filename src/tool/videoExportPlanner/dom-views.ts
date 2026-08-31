import type { CodecId, ExportResult } from './logic';

export function formatNumber(value: number, maximumFractionDigits = 2): string {
  return new Intl.NumberFormat('en-US', { maximumFractionDigits }).format(value);
}

export function formatFileSize(bytes: number): string {
  if (bytes < 1_000_000) return `${formatNumber(bytes / 1_000, 1)} KB`;
  if (bytes < 1_000_000_000) return `${formatNumber(bytes / 1_000_000, 1)} MB`;
  return `${formatNumber(bytes / 1_000_000_000, 2)} GB`;
}

function createCell(text: string): HTMLTableCellElement {
  const cell = document.createElement('td');
  cell.textContent = text;
  return cell;
}

export function renderComparison(tableBody: HTMLElement, result: ExportResult, labels: Record<CodecId, string>): void {
  tableBody.replaceChildren();
  result.codecPlans.forEach((plan) => {
    const row = document.createElement('tr');
    row.append(createCell(labels[plan.codec]), createCell(`${formatNumber(plan.suggestedVideoBitrateMbps, 1)} Mbps`), createCell(formatFileSize(plan.estimatedFileSizeBytes)));
    tableBody.append(row);
  });
}

export function renderScene(scene: SVGSVGElement, result: ExportResult): void {
  const total = Math.max(result.fileSizeBytes, 1);
  const segments = [
    { value: result.videoBytes, color: 'var(--n-video)' },
    { value: result.audioBytes, color: 'var(--n-audio)' },
    { value: result.overheadBytes, color: 'var(--n-overhead)' },
  ];
  const line = segments.map((segment, index) => {
    const start = segments.slice(0, index).reduce((sum, current) => sum + current.value, 0);
    const x = 34 + start / total * 332;
    const width = Math.max(segment.value / total * 332, segment.value > 0 ? 2 : 0);
    return `<rect x="${x.toFixed(2)}" y="66" width="${width.toFixed(2)}" height="76" rx="7" fill="${segment.color}" />`;
  }).join('');
  const ticks = Array.from({ length: 9 }, (_, index) => {
    const x = 34 + index * 41.5;
    return `<path d="M ${x} 52v-9 M ${x} 152v9" stroke="var(--n-tick)" stroke-width="2" />`;
  }).join('');
  scene.innerHTML = `<path d="M34 52h332M34 161h332" stroke="var(--n-track)" stroke-width="2" />${ticks}${line}<circle cx="34" cy="104" r="5" fill="var(--n-ink)" /><circle cx="366" cy="104" r="5" fill="var(--n-ink)" />`;
}
