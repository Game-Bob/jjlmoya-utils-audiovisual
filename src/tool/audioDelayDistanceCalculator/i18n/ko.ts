import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { AudioDelayUI } from '../ui';
import type { ToolLocaleContent, FAQItem, HowToStep } from '../../../types';

const slug = 'audio-delay-distance-calculator';
const title = '거리 및 온도 기반 오디오 딜레이 계산기';
const description = 'PA 딜레이 타워의 음향 딜레이 시간, 공기 중 음속, 위상 편이, 디지털 샘플 수 및 SPL 감쇠량을 정확하게 계산합니다.';

const ui: AudioDelayUI = {
  title: '거리 및 온도 기반 오디오 딜레이 계산기',
  subtitle: 'PA 딜레이 스피커의 음파 전파 딜레이 시간, 위상 편이, 샘플 수 및 SPL 감쇠량을 계산합니다.',
  unitSystemLabel: '단위계',
  unitMetric: '미터법 (m, °C)',
  unitImperial: '야드·파운드법 (ft, °F)',
  distanceLabel: '딜레이 타워까지의 거리',
  temperatureLabel: '주위 기온',
  humidityLabel: '상대 습도',
  sampleRateLabel: '콘솔 샘플링 레이트',
  presetsTitle: '빠른 시나리오 프리셋',
  presetSummerFestival: '여름 페스티벌 (35°C, 40m)',
  presetIndoorConcert: '실내 콘서트홀 (20°C, 25m)',
  presetTheater: '음향 극장 (22°C, 15m)',
  presetWinterOutdoor: '겨울 야외 이벤트 (5°C, 50m)',
  resultDelayMs: '딜레이 시간',
  resultSamples: '디지털 샘플 수',
  resultSpeed: '음속',
  resultSplLoss: 'SPL 감쇠량',
  phaseStatusLabel: '음향 위상 동기화 상태',
  statusDirectZone: '직접파 파면 동기화',
  statusHaasZone: '하스 효과 우선 영역',
  statusEchoZone: '인지 가능한 에코 영역',
  statusExtremeZone: '심각한 딜레이 편차',
  advicePhaseAligned: '신호가 5ms 이내로 음향적으로 동기화되었습니다. 최소한의 딜레이 보정만 필요합니다.',
  adviceMinorHaas: '음향이 하스 영역(5-35ms) 내에 도달합니다. 자연스러운 음상 정위가 메인 무대에 유지됩니다.',
  adviceHaasDelayNeeded: '독립적인 에코 인지를 방지하기 위해 딜레이 타워의 정확한 시간 오프셋이 필요합니다.',
  adviceCriticalDelayNeeded: '딜레이 편차가 큽니다. 빗살 필터링 현상을 방지하기 위해 정확한 샘플 딜레이를 적용하세요.',
  unitMeters: 'm',
  unitFeet: 'ft',
  unitCelsius: '°C',
  unitFahrenheit: '°F',
  mainSpeakerLabel: '메인 PA',
  delaySpeakerLabel: '딜레이 타워',
  audienceLabel: '관객 영역',
  haasZoneLegend: '하스 영역 (5-35ms)',
};

const faq: FAQItem[] = [
  {
    question: '오디오 딜레이 계산 시 공기 온도가 중요한 이유는 무엇인가요?',
    answer: '공기 중 음속은 온도의 영향을 직접 받습니다. 섭씨 0도에서 음속은 초당 331.3미터이지만 섭씨 30도에서는 초당 약 349미터로 증가합니다. 기온을 고려하지 않으면 위상 상쇄와 빗살 필터링이 발생합니다.',
  },
  {
    question: '라이브 음향에서 하스 효과란 무엇인가요?',
    answer: '하스 효과(우선 효과)는 동일한 음향 신호가 5~35밀리초 이내에 비슷한 크기로 도달할 때 인간의 청각이 가장 먼저 도달한 음원의 방향으로 음상을 정위하는 현상입니다.',
  },
  {
    question: '딜레이 시간을 디지털 콘솔 샘플 수로 변환하는 방법은?',
    answer: '딜레이 시간(초)에 디지털 콘솔의 샘플링 레이트를 곱합니다. 예를 들어 48kHz에서 50밀리초 딜레이는 0.05×48000 = 2400 디지털 샘플이 됩니다.',
  },
];

const howTo: HowToStep[] = [
  {
    name: '물리적 거리 측정',
    text: '레이저 거리 측정기를 사용하여 메인 PA와 딜레이 타워 사이의 물리적 거리를 측정합니다.',
  },
  {
    name: '주위 기온 확인',
    text: '정확한 음속 산출을 위해 현장의 현재 공기 온도를 입력합니다.',
  },
  {
    name: '콘솔 샘플링 레이트 선택',
    text: '사용 중인 디지털 콘솔의 동작 샘플링 레이트(44.1kHz, 48kHz, 96kHz, 192kHz)를 설정합니다.',
  },
  {
    name: '계산된 딜레이 적용',
    text: '스피커 프로세서 또는 출력 매트릭스에 딜레이 시간(ms) 또는 샘플 수를 입력합니다.',
  },
];

const seo: ToolLocaleContent<AudioDelayUI>['seo'] = [
  {
    type: 'summary',
    title: '음향 딜레이 정렬 기능',
    items: [
      '온도 및 습도 기반의 정밀한 음속 계산',
      '디지털 콘솔 샘플 수 즉시 변환 (44.1k, 48k, 96k, 192k)',
      '하스 효과 영역 및 위상 정렬 평가 기능',
      '역제곱 법칙 기반의 음압 레벨(SPL) 감쇠량 추정',
    ],
  },
  { type: 'title', text: '음파 전파와 대기 열역학', level: 2 },
  {
    type: 'paragraph',
    html: '음파는 공기라는 매질을 통해 전파되는 기계적 압력파입니다. 음속은 주로 공기 온도의 영향을 받으며 <code>c = 331.3 * sqrt(1 + T / 273.15)</code> 공식으로 계산됩니다.',
  },
  {
    type: 'stats',
    items: [
      { value: '343.2 m/s', label: '20°C에서의 표준 음속', icon: 'mdi:speedometer' },
      { value: '5-35 ms', label: '하스 우선 영역 창', icon: 'mdi:timer-sand' },
      { value: '48/96 kHz', label: '콘솔 샘플 정밀도', icon: 'mdi:sine-wave' },
    ],
    columns: 3,
  },
  { type: 'title', text: '음향 위상 정렬 및 빗살 필터링 방지', level: 3 },
  {
    type: 'paragraph',
    html: '공간적으로 떨어진 두 스피커가 정밀한 시간 보정 없이 동일한 신호를 출력하면 파면이 겹치면서 위상차로 인한 빗살 필터링(Comb Filtering) 현상이 발생합니다.',
  },
  {
    type: 'list',
    items: [
      '<strong>시간 정렬:</strong> 메인 PA 도달 시간에 맞춰 보조 타워를 지연시킵니다.',
      '<strong>빗살 필터 방지:</strong> 가청 주파수 대역의 위상 상쇄 현상을 제거합니다.',
      '<strong>하스 정위:</strong> 음상 정위 감각을 메인 무대에 자연스럽게 유지시킵니다.',
      '<strong>샘플 정밀도:</strong> 출력 매트릭스 설정을 위한 정밀한 디지털 샘플 값을 제공합니다.',
    ],
    icon: 'mdi:check-circle',
  },
  {
    type: 'comparative',
    items: [
      {
        title: '다이렉트 PA 정렬',
        description: '거리 이동 시간에 일치시키는 동기화 보정',
        icon: 'mdi:target',
        points: ['완벽한 위상 코히어런스', '인필 스피커에 최적', '빗살 필터링 완전 방지'],
      },
      {
        title: '하스 오프셋 정렬',
        description: '물리 딜레이에 5~15ms 우선 오프셋 추가',
        icon: 'mdi:music-clef-treble',
        points: ['무대 위 자연스러운 음상 정위', '음성 명료도 향상', '딜레이 타워에 최적'],
        highlight: true,
      },
    ],
    columns: 2,
  },
  {
    type: 'table',
    headers: ['음향 보정 시나리오', '거리 (m)', '온도 (°C)', '딜레이 시간 (ms)', '샘플 수 (48kHz)'],
    rows: [
      ['극장 발코니 인필', '15 m', '22 °C', '43.5 ms', '2,090 샘플'],
      ['실내 콘서트홀', '25 m', '20 °C', '72.8 ms', '3,494 샘플'],
      ['페스티벌 메인 무대', '40 m', '35 °C', '113.6 ms', '5,453 샘플'],
      ['겨울 야외 이벤트', '50 m', '5 °C', '149.5 ms', '7,176 샘플'],
    ],
  },
  {
    type: 'proscons',
    items: [
      {
        pro: '디지털 콘솔을 위한 밀리초 미만 샘플 정밀도 계산',
        con: '정확한 물리적 거리 측정이 필요함',
      },
      {
        pro: '주위 기온 및 상대 습도를 완벽 고려',
        con: '야외 바람 변화 시 지속적인 모니터링 필요',
      },
    ],
    proTitle: '장점',
    conTitle: '고려사항',
  },
  {
    type: 'glossary',
    items: [
      {
        term: '하스 효과',
        definition: '가장 먼저 도달한 음파 방향으로 인간의 청각이 음상을 인식하는 심리음향 현상.',
      },
      {
        term: '빗살 필터링',
        definition: '원본 신호와 지연 신호의 간섭으로 주파수 응답이 빗살 모양으로 왜곡되는 현상.',
      },
      {
        term: '샘플링 레이트',
        definition: '디지털 콘솔이나 DSP가 초당 처리하는 음향 디지털 샘플 수.',
      },
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
