import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { AudioDelayUI } from '../ui';
import type { ToolLocaleContent, FAQItem, HowToStep } from '../../../types';

const slug = 'audio-delay-distance-calculator';
const title = '거리 및 온도 기준 오디오 딜레이 계산기';
const description = 'PA 딜레이 타워의 음향 지연 시간, 공기 중 음속, 위상 오프셋, 디지털 샘플 수 및 SPL 감쇄량을 계산합니다.';

const ui: AudioDelayUI = {
  title: '거리 및 온도 기준 오디오 딜레이 계산기',
  subtitle: 'PA 딜레이 스피커의 음파 전파 지연 시간, 음향 위상 오프셋, 샘플 수 및 SPL 감쇄를 계산합니다.',
  unitSystemLabel: '단위계',
  unitMetric: '미터법 (m, °C)',
  unitImperial: '야드·파운드법 (ft, °F)',
  distanceLabel: '딜레이 스피커까지의 거리',
  temperatureLabel: '주위 공기 온도',
  humidityLabel: '상대 습도',
  sampleRateLabel: '콘솔 샘플 레이트',
  presetsTitle: '빠른 시나리오 프리셋',
  presetSummerFestival: '야외 여름 페스티벌 (35°C, 40m)',
  presetIndoorConcert: '실내 홀 콘서트 (20°C, 25m)',
  presetTheater: '음향 극장 (22°C, 15m)',
  presetWinterOutdoor: '겨울 야외 이벤트 (5°C, 50m)',
  resultDelayMs: '지연 시간',
  resultSamples: '디지털 샘플 수',
  resultSpeed: '음속',
  resultSplLoss: 'SPL 감쇄량',
  phaseStatusLabel: '음향 위상 정렬 상태',
  statusDirectZone: '직접 파면 동기화',
  statusHaasZone: '하스 효과 영역',
  statusEchoZone: '인지 가능한 에코 영역',
  statusExtremeZone: '심각한 딜레이 편차',
  advicePhaseAligned: '신호가 5ms 이내로 음향적으로 동기화되었습니다. 최소한의 딜레이 조정만 필요합니다.',
  adviceMinorHaas: '음향이 하스 영역(5-35ms) 내에 도착합니다. 자연스러운 음상은 메인 무대에 유지됩니다.',
  adviceHaasDelayNeeded: '분리된 에코 인지를 방지하기 위해 딜레이 타워에 정확한 시간 오프셋이 필요합니다.',
  adviceCriticalDelayNeeded: '큰 딜레이 오프셋입니다. 콤 필터링을 방지하기 위해 정확한 샘플 딜레이를 적용하십시오.',
  unitMeters: 'm',
  unitFeet: 'ft',
  unitCelsius: '°C',
  unitFahrenheit: '°F',
  mainSpeakerLabel: '메인 PA',
  delaySpeakerLabel: '딜레이 타워',
  audienceLabel: '관객 구역',
  haasZoneLegend: '하스 영역 (5-35ms)',
};

const faq: FAQItem[] = [
  {
    question: '오디오 딜레이 계산 시 공기 온도가 중요한 이유는 무엇인가요?',
    answer: '공기 중 음속은 온도의 영향을 직접 받습니다. 섭씨 0도에서 음속은 초당 331.3m이지만 섭씨 30도에서는 약 349m로 빨라집니다. 주위 온도를 무시하면 위상 상쇄와 콤 필터링이 발생합니다.',
  },
];

const howTo: HowToStep[] = [
  {
    name: '물리적 거리 측정',
    text: '레이저 거리 측정기를 사용하여 메인 PA와 딜레이 타워 사이의 거리를 측정합니다.',
  },
];

const seo: ToolLocaleContent<AudioDelayUI>['seo'] = [
  {
    type: 'summary',
    title: '음향 딜레이 정렬 기능',
    items: [
      '온도 및 습도 기반 정확한 음속 계산',
      '디지털 콘솔 샘플 수로 즉시 변환',
      '하스 효과 영역 및 위상 정렬 평가',
    ],
  },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howTo.map((step) => ({
    '@type': 'HowToStep',
    name: step.name,
    text: step.text,
  })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'ko',
};

export const content: ToolLocaleContent<AudioDelayUI> = {
  slug,
  title,
  description,
  ui,
  seo,
  faq,
  bibliography,
  howTo,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};
