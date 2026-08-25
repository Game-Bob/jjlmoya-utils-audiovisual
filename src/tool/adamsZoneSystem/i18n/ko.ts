import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { FAQItem, HowToStep, ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';
import type { AdamsZoneSystemUI } from '../ui';

const slug = 'ansel-adams-zone-system-visualizer-exposure-zones';
const title = '안셀 아담스 존 시스템 시각화 노출 존';
const description = '존 0부터 IX까지 시각적으로 탐색하고 측정된 톤을 정확한 스톱 변화로 배치하며 일반, N 마이너스, N 플러스 현상 결정을 연결합니다.';

const ui: AdamsZoneSystemUI = {
  faqTitle: '존 시스템 자주 묻는 질문',
  bibliographyTitle: '참고 문헌',
  orientationTitle: '존 배치 설정',
  orientationText: '피사체에서 측정한 톤을 선택하고 해당 톤이 위치하길 원하는 존을 지정하면 필요한 스톱 수치가 표시됩니다. 현상 안내는 하이라이트 손실이나 암부 뭉침을 방지하는 기준이 됩니다.',
  measuredToneLabel: '피사체 측정 톤',
  targetPlacementLabel: '목표 배치 존',
  developmentLabel: '현상 처리 의도',
  normalDevelopment: '일반 현상',
  minusDevelopment: 'N 마이너스',
  plusDevelopment: 'N 플러스',
  presetsLabel: '필드 노트 프리셋',
  presetShadow: '질감이 있는 암부',
  presetSkin: '밝은 피부톤',
  presetSnow: '햇빛 아래 눈',
  presetNight: '야간 그림자',
  zoneStripLabel: '검은색부터 흰색까지 존 차트',
  meterBaselineLabel: '노출계 기준: 존 V',
  selectedToneLabel: '측정된 톤',
  placementResultLabel: '배치 결과',
  exposureShiftLabel: '표준 회색 대비 노출 이동량',
  tonalDistanceLabel: '측정 톤으로부터의 거리',
  luminanceLabel: '상대 휘도',
  stopsFromMiddleLabel: '존 V 기준 스톱 수',
  developmentAdviceLabel: '네거티브 평가',
  techniqueLabel: '암실 작업 지침',
  resetLabel: '설정 초기화',
  meterAssumption: '반사광 노출계는 보정을 적용하지 않는 한 측정한 모든 대상을 존 V(18% 중간 회색)로 인식합니다.',
  zonePrefix: '존',
  zoneNames: '순수한 검은색|검은색에 가까움|깊은 암부|질감이 있는 암부|어두운 중간톤|중간 회색|밝은 중간톤|질감이 있는 명부|밝은 하이라이트|순백에 가까움',
  zoneDescriptions: '질감이 전혀 없는 최대 검은색.|검은색과의 첫 분리로 디테일이 거의 없음.|중요한 어두운 암부에서 질감의 첫 징후.|프린트에서 인화 가능한 유용한 암부 질감.|명확한 형태를 가진 개방된 암부와 어두운 나뭇잎.|노출계가 지시하는 중립적 기준점.|밝은 피부, 풍화된 돌, 밝은 나뭇잎.|디테일을 유지해야 하는 밝은 질감.|디테일이 거의 남아있지 않은 매우 밝은 톤.|약간의 구분만 남아있는 순백에 가까운 톤.',
  increaseExposure: '지정된 스톱만큼 노출을 열어 측정값을 목표 존으로 올립니다.',
  decreaseExposure: '지정된 스톱만큼 노출을 조여 측정값을 목표 존에 유지합니다.',
  holdExposure: '목표가 존 V이므로 노출계 측정값을 그대로 유지합니다.',
  protectHighlights: '하이라이트 보호',
  openShadows: '암부 계조 확보',
  balancedPlacement: '균형 잡힌 배치',
  normalAdvice: '일반 현상은 피사체의 대비를 측정된 범위 그대로 유지합니다.',
  minusAdvice: 'N 마이너스 현상은 대비가 강한 피사체의 범위를 압축하여 하이라이트를 보호합니다.',
  plusAdvice: 'N 플러스 현상은 대비가 약한 피사체의 범위를 확장하여 암부 계조를 명확히 합니다.',
};

const faq: FAQItem[] = [
  {
    question: '존 시스템은 무엇을 측정하고 관리하나요?',
    answer: '존 시스템은 사진에서 깊은 검은색부터 밝은 흰색까지의 명암 계조를 시각화하고 제어하는 방법입니다. 피사체의 휘도를 최종 존 및 현상 결정과 연결합니다.',
  },
  {
    question: '노출계는 왜 존 V를 기준으로 하나요?',
    answer: '반사광 노출계는 측정 결과의 평균을 18% 중간 회색(존 V)으로 처리하도록 보정되어 있기 때문입니다. 암부를 어둡게 하거나 밝은 피사체를 밝게 유지하려면 노출 보정이 필요합니다.',
  },
  {
    question: '각 존 사이는 몇 스톱 차이가 나나요?',
    answer: '인접한 전체 존은 정확히 1스톱(1EV) 차이가 납니다. 존 V에서 존 VII로 배치를 변경하려면 2스톱 더 노출을 늘려야 합니다.',
  },
  {
    question: 'N 마이너스와 N 플러스 현상의 의미는 무엇인가요?',
    answer: '피사체의 대비를 조절하기 위한 현상 제어 방식입니다. N 마이너스는 대비가 강한 피사체의 필름 대비를 낮추고, N 플러스는 대비가 약한 피사체의 대비를 높여줍니다.',
  },
];

const howTo: HowToStep[] = [
  { name: '측정 톤 선택', text: '노출계로 측정한 피사체 부위에 가장 가까운 존을 선택합니다.' },
  { name: '목표 존 배치', text: '최종 인화물에서 해당 톤이 위치하길 원하는 존을 선택합니다.' },
  { name: '노출 보정 적용', text: '표시된 스톱 차이에 따라 조리개나 셔터 속도를 조절합니다.' },
  { name: '현상 처리 결정', text: '안내에 따라 암실에서의 현상 시간을 조정합니다.' },
];

const seo: ToolLocaleContent<AdamsZoneSystemUI>['seo'] = [
  {
    type: 'summary',
    title: '존 시스템 시각적 필드 가이드',
    items: [
      '존 0부터 존 IX까지의 모든 계조를 직관적인 차트로 확인',
      '목표 존 배치에 필요한 노출 보정 수치를 존 V 기준으로 즉시 계산',
      '측정된 피사체 휘도와 최종 인화물에서 표현할 톤을 비교',
      'N 마이너스, 일반, N 플러스 현상을 유용한 대비 제어 도구로 활용',
    ],
  },
  { type: 'title', text: '안셀 아담스 존 시스템의 작동 원리', level: 2 },
  {
    type: 'paragraph',
    html: '존 시스템은 연속적인 피사체 밝기를 10단계의 참조 존으로 나눕니다. 존 V는 노출계가 지시하는 표준 회색입니다.',
  },
  { type: 'title', text: '존 차트에 따른 노출 보정', level: 2 },
  {
    type: 'table',
    headers: ['목표 배치', '시각적 표현', '노출계 보정 작동'],
    rows: [
      ['존 II', '디테일이 겨우 보이는 깊은 암부', '존 V 기준 3스톱 감소(조임)'],
      ['존 III', '디테일이 유지되어야 하는 중요한 암부', '존 V 기준 2스톱 감소(조임)'],
      ['존 V', '표준 18% 중립 회색 기준', '노출계 측정값 그대로 적용'],
      ['존 VI', '밝은 피부톤과 같은 밝은 중간톤', '존 V 기준 1스톱 증가(개방)'],
      ['존 VII', '디테일을 유지해야 하는 밝은 하이라이트', '존 V 기준 2스톱 증가(개방)'],
    ],
  },
  {
    type: 'tip',
    title: '존 배치를 창의적 표현 기법으로 활용하기',
    html: '노출계 지시대로 모든 대상을 회색으로 만들 필요는 없습니다. 디테일과 표현의 중심이 되는 톤을 결정하고 의도적으로 배치하세요.',
  },
  { type: 'title', text: '현상 처리를 통한 대비 제어', level: 2 },
  {
    type: 'list',
    items: [
      '<strong>일반 현상:</strong> 피사체의 일반적인 대비를 필름에 그대로 기록합니다.',
      '<strong>N 마이너스 현상:</strong> 강한 대비를 압축하여 하이라이트 손실을 방지합니다.',
      '<strong>N 플러스 현상:</strong> 약한 대비를 확장하여 암부 계조를 명확히 나눕니다.',
    ],
  },
  {
    type: 'glossary',
    items: [
      { term: '존(Zone)', definition: '1스톱(1EV) 노출 차이마다 구분되는 실용적 명암 계조 단위.' },
      { term: '배치(Placement)', definition: '측정된 피사체의 밝기를 최종 목표 존에 할당하는 결정.' },
      { term: '중간 회색', definition: '반사광 노출계가 기준 삼는 존 V의 중립 톤.' },
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
  step: howTo.map((step) => ({ '@type': 'HowToStep', name: step.name, text: step.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'PhotographyApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'ko',
};

export const content: ToolLocaleContent<AdamsZoneSystemUI> = {
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
