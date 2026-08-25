import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { EquivalentExposureUI } from '../ui';
import type { ToolLocaleContent, FAQItem, HowToStep } from '../../../types';

const slug = 'equivalent-exposure-calculator';
const title = '동가 노출 계산기 노출의 삼각형과 상반칙';
const description = '조리개, 셔터 스피드, ISO 감도의 동등한 노출 설정을 계산하여 EV 값을 일정하게 유지합니다.';

const ui: EquivalentExposureUI = {
  "title": "동가 노출 계산기",
  "subtitle": "조리개, 셔터 스피드, ISO의 상반 매개변수를 계산하여 일정한 노출 값을 유지합니다.",
  "baseSettingsTitle": "기본 노출 설정",
  "targetSettingsTitle": "목표 동가 설정",
  "lockModeLabel": "자동 계산 모드",
  "isoLabel": "ISO 감도",
  "apertureLabel": "조리개 (f-스톱)",
  "shutterLabel": "셔터 스피드",
  "lockIsoOption": "ISO 계산 (조리개 및 셔터 고정)",
  "lockApertureOption": "조리개 계산 (ISO 및 셔터 고정)",
  "lockShutterOption": "셔터 스피드 계산 (ISO 및 조리개 고정)",
  "presetsTitle": "빠른 프리셋",
  "presetSunny16": "Sunny 16 법칙",
  "presetOvercast": "흐린 날",
  "presetIndoor": "실내 조명",
  "presetNight": "야경 촬영",
  "targetEvLabel": "목표 EV"
};

const faq: FAQItem[] = [
  {
    "question": "노출 값(EV)이란 무엇이며 어떻게 계산하나요?",
    "answer": "EV는 ISO 100에서 조리개와 셔터 스피드의 조합을 나타내는 로그 수치입니다. 공식은 EV = log2(N^2 / t) 입니다."
  },
  {
    "question": "동가 노출은 어떻게 이미지 밝기를 유지하나요?",
    "answer": "ISO, 셔터 스피드, 조리개 간의 스톱을 상쇄하여 센서에 도달하는 빛의 총량을 일정하게 유지합니다."
  },
  {
    "question": "Sunny 16 법칙이란 무엇인가요?",
    "answer": "맑은 날 f/16에서 적정 셔터 스피드는 ISO 감도의 역수가 됩니다 (예: ISO 100은 1/100초)."
  },
  {
    "question": "조리개 선택은 피사계 심도를 어떻게 바꾸나요?",
    "answer": "조리개를 개방하면 피사계 심도가 얕아져 피사체를 부드러운 배경 흐림으로 강조합니다."
  }
];

const howTo: HowToStep[] = [
  {
    "name": "기본 설정 선택",
    "text": "촬영 장면의 기준이 되는 ISO, 조리개, 셔터 스피드를 선택합니다."
  },
  {
    "name": "계산 모드 선택",
    "text": "자동으로 계산할 변수를 선택합니다."
  },
  {
    "name": "목표 매개변수 조정",
    "text": "목표 값을 변경하여 상반칙 계산 결과를 즉시 확인합니다."
  },
  {
    "name": "시각적 효과 평가",
    "text": "벡터 다이어그램으로 피사계 심도와 노이즈를 확인합니다."
  }
];

const seo: ToolLocaleContent<EquivalentExposureUI>['seo'] = [
  {
    type: 'summary',
    title: '노출 상반칙 계산 특징',
    items: [
      "ISO, 조리개, 셔터 스피드 간의 정확한 1/3 EV 스톱 계산",
      "인터랙티브 노출의 삼각형 SVG 벡터 시각화",
      "피사계 심도, 모션 블러, 센서 노이즈에 대한 실시간 피드백",
      "Sunny 16, 흐린 날, 야경을 위한 원클릭 프리셋"
    ],
  },
  { type: 'title', text: '노출의 삼각형 이해하기', level: 2 },
  {
    type: 'paragraph',
    html: '사진에서 노출은 조리개, 셔터 스피드, ISO 감도의 3가지 요소의 상호작용에 의해 결정됩니다. 하나의 요소를 변경하는 경우 동일한 EV 밝기를 유지하기 위해서는 다른 수치를 상반 조절해야 합니다.',
  },
  {
    type: 'stats',
    items: [
      { value: 'EV 15', label: '맑은 날 기준 (Sunny 16)', icon: 'mdi:white-balance-sunny' },
      { value: '1/3 EV', label: '정밀한 1/3 스톱 해상도', icon: 'mdi:tune-vertical' },
      { value: '2:1 DOF', label: '표준 초점 배분 비율', icon: 'mdi:camera-iris' },
    ],
    columns: 3,
  },
  { type: 'title', text: '촬영 의도', level: 3 },
  {
    type: 'table',
    headers: [
      "촬영 의도",
      "조리개 조절",
      "셔터 조절",
      "ISO 조절",
      "시각적 결과"
    ],
    rows: [
      [
        "동작 정지",
        "개방 (f/2.8)",
        "빠르게 (1/1000s)",
        "고정 유지",
        "얕은 피사계 심도"
      ],
      [
        "풍경 선명도",
        "조임 (f/11)",
        "느리게 (1/30s)",
        "고정 유지",
        "삼각대 필요"
      ],
      [
        "어두운 곳 손촬영",
        "최대 개방 (f/1.4)",
        "손촬영 한계 (1/60s)",
        "인상 (ISO 3200)",
        "노이즈 증가"
      ],
      [
        "스튜디오 최고화질",
        "최적 조리개 (f/8)",
        "동조 속도 (1/200s)",
        "기준 ISO 100",
        "최대 다이내믹 레인지"
      ]
    ],
  },
  { type: 'title', text: '동가 설정의 창의적 영향', level: 3 },
  {
    type: 'paragraph',
    html: '동일한 노출 값(EV)으로 설정하여 센서에 도달하는 총 광량을 일정하게 유지하더라도, 사진의 시각적 표현 및 이미지 결과물은 피사계 심도와 운동감에 따라 크게 달라집니다:',
  },
  {
    type: 'list',
    items: [
      "<strong>조리개:</strong> 피사계 심도와 배경 흐림을 제어합니다.",
      "<strong>셔터 스피드:</strong> 피사체의 움직임 정지 및 블러를 제어합니다.",
      "<strong>ISO 감도:</strong> 노이즈를 대가로 센서 신호를 증폭합니다."
    ],
    icon: 'mdi:check-circle',
  },
  {
    type: 'comparative',
    items: [
      {
        title: '배경 흐림 설정',
        description: '인물 촬영용 대구경 설정',
        icon: 'mdi:account-box-outline',
        points: [
          "f/1.4 에서 f/2.8 조리개",
          "빠른 셔터 스피드",
          "부드러운 보케"
        ],
      },
      {
        title: '깊은 풍경 설정',
        description: '전체 선명도를 위한 설정',
        icon: 'mdi:image-filter-hdr',
        points: [
          "최적 화질 f/8 에서 f/11",
          "삼각대 사용 느린 셔터",
          "최대 해상력"
        ],
        highlight: true,
      },
    ],
    columns: 2,
  },
  {
    type: 'proscons',
    items: [
      {
        pro: '카메라 다이얼과 일치하는 1/3 스톱 정밀도',
        con: '필름의 상반칙 불완전성이나 T-스톱 미반영',
      },
      {
        pro: '선명도 상태를 보여주는 실시간 SVG 시각화',
        con: '센서 크기 크롭 인자 수동 계산 필요',
      },
    ],
    proTitle: '기술적 장점',
    conTitle: '물리적 한계',
  },
  {
    type: 'glossary',
    items: [
      {
        "term": "노출 값 (EV)",
        "definition": "조리개와 셔터 스피드를 조합한 로그 수치."
      },
      {
        "term": "상반칙",
        "definition": "노출량이 빛의 세기와 시간의 곱에 비례한다는 법칙."
      },
      {
        "term": "노출 스톱 (Stop)",
        "definition": "광량이 2배 또는 1/2배가 되는 상대적 단위."
      }
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

export const content: ToolLocaleContent<EquivalentExposureUI> = {
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
