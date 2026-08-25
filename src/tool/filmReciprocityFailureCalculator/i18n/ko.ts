import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { FAQItem, HowToStep, ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';
import type { FilmReciprocityFailureCalculatorUI } from '../ui';

const slug = 'film-reciprocity-failure-calculator';
const title = '필름 상반칙 불행 계산기 (슈바르츠실트 효과)';
const description = 'ILFORD 및 KENTMERE의 공식 계수를 바탕으로 장시간 노출 시 필름의 상반칙 불행 현상을 보정 계산합니다.';

const ui: FilmReciprocityFailureCalculatorUI = {
  faqTitle: '필름 상반칙 불행 관련 자주 묻는 질문',
  bibliographyTitle: '참고 자료',
  studyLabel: '장시간 노출 보정 연구',
  studyTitle: '필름 유제에 충분한 시간을 부여하세요',
  studyText: '노출계는 순간적으로 도달하는 광량을 측정합니다. 필름 유제는 장시간 노출 시 동일한 농도를 얻기 위해 더 긴 시간을 필요로 합니다.',
  filmLabel: '필름 종류 선택',
  filmHint: '선택한 ILFORD 또는 KENTMERE 필름의 공식 계수를 적용합니다.',
  measuredTimeLabel: '노출계 측정 시간 입력',
  measuredTimeHint: '1초를 초과하는 노출부터 보정이 적용됩니다.',
  secondsUnit: '초',
  filmMenuLabel: '필름 목록 메뉴',
  presetsLabel: '촬영 조건 프리셋',
  presetShort: '보정 시작 임계점',
  presetNight: '야간 거리',
  presetDeepNight: '깊은 밤 풍경',
  resultLabel: '보정된 노출 시간',
  correctedTimeLabel: '권장 최종 노출 시간',
  addedTimeLabel: '추가 필요 시간',
  correctionStopsLabel: '노출 증가량 (EV 스톱)',
  correctionFactorLabel: '필름 보정 계수',
  noCorrection: '보정 불필요',
  correctionNeeded: '상반칙 불행 보정 활성화',
  longExposure: '장시간 노출 영역',
  meterTimeLabel: '노출계 측정값',
  filmTimeLabel: '보정 후 시간',
  exposurePathLabel: '노출 시간 시각적 시퀀스',
  exposurePathText: '필름 스트립이 측정한 시간에서 최종 보정 시간까지 늘어납니다.',
  formulaLabel: '계산 수식',
  formulaText: '보정 시간 = 측정 시간 <sup>필름 보정 계수</sup>.',
  manufacturerNote: 'HARMAN 공식 기술 자료 기반 계수입니다. 계산 결과는 실전 촬영의 기준점으로 활용하세요.',
  resetLabel: '계산 리셋',
  invalidTime: '0초보다 큰 값을 입력하세요.',
  sourceLabel: '제조사 기술 참고',
};

const faq: FAQItem[] = [
  {
    question: '필름 카메라의 상반칙 불행 현상이란 무엇인가요?',
    answer: '상반칙 불행(슈바르츠실트 효과)은 야간이나 셔터 속도가 길어질 때 필름 유제의 감도 효율이 떨어지는 현상입니다. 노출계가 나타내는 시간이 물리적으로 맞아도 화학적으로는 부족하므로 더 긴 시간이 필요합니다.',
  },
  {
    question: '이 계산기는 보정 시간을 어떻게 산출하나요?',
    answer: 'HARMAN 공식 수식(보정 시간 Tc = 측정 시간 Tm <sup>P</sup>)을 사용합니다. P는 각 필름 고유의 계수입니다. 1초 이하의 노출은 보정하지 않습니다.',
  },
  {
    question: '왜 필름마다 보정 계수가 다른가요?',
    answer: '필름 유제마다 할로겐화은 입자의 반응 특성이 다르기 때문입니다. HARMAN은 HP5+, FP4+, DELTA, KENTMERE 등 제품별로 별도의 보정 계수를 제공합니다.',
  },
  {
    question: '계산된 시간으로 촬영하면 항상 완벽한 네거티브가 나오나요?',
    answer: '아닙니다. 장시간 노출은 측광 정확도, 현상 온도, 현상액 교반 및 장면의 대비에 따라 달라집니다. 계산된 결과를 기준점으로 삼고 브래키팅 촬영을 권장합니다.',
  },
];

const howTo: HowToStep[] = [
  { name: '필름 선택', text: '카메라에 장착된 필름을 선택하여 전용 보정 계수를 적용합니다.' },
  { name: '측정 시간 입력', text: '노출계가 측정한 시간(초)을 입력하거나 프리셋을 선택합니다.' },
  { name: '보정 노출 확인', text: '계산된 최종 노출 시간으로 셔터를 설정합니다.' },
  { name: '단계 노출(브래키팅) 실시', text: '매우 긴 야간 촬영 시 계산된 시간을 중심으로 전후 노출을 추가 촬영합니다.' },
];

const seo: ToolLocaleContent<FilmReciprocityFailureCalculatorUI>['seo'] = [
  {
    type: 'summary',
    title: '공식 데이터 기반의 장시간 노출 보정',
    items: [
      '11종의 ILFORD 및 KENTMERE 흑백 필름 공식 보정 계수 적용',
      '노출계 측정값과 필름 유제가 실제 필요로 하는 시간 비교',
      '추가 필요 시간, 스톱(EV) 보정량, 시각적 시간 연장 시퀀스 표시',
      '야간 촬영 환경에 유용한 3가지 필드 프리셋 제공',
    ],
  },
  { type: 'title', text: '장시간 노출 시 상반칙 불행 보정이 필요한 이유', level: 2 },
  {
    type: 'paragraph',
    html: '일반적인 셔터 속도에서는 광량과 시간이 비례하는 상반칙이 성립하지만, 장시간 노출 시 필름 유제는 잠상을 형성하는 화학적 반응성이 낮아집니다. 노출계가 알려주는 시간대로 촬영하면 네거티브가 노출 부족이 됩니다.',
  },
  { type: 'title', text: '계산의 기반이 되는 제조사 수식', level: 2 },
  {
    type: 'table',
    headers: ['필름 제품', '공식 보정 계수', '10초 측정 시 보정 결과'],
    rows: [
      ['ILFORD HP5+', '1.31', '20.4초'],
      ['ILFORD FP4+', '1.26', '18.2초'],
      ['ILFORD SFX 200', '1.43', '26.9초'],
      ['KENTMERE 400', '1.30', '20.0초'],
    ],
  },
  {
    type: 'paragraph',
    html: '본 계산기는 Tc = Tm<sup>P</sup> 공식을 적용합니다. Tm은 초 단위 측정 시간, Tc는 보정된 시간, P는 HARMAN이 제공하는 계수입니다. 1초 이하에서는 보정이 필요하지 않습니다.',
  },
  {
    type: 'tip',
    title: '계산 결과를 실전 촬영의 기준점으로 활용',
    html: '장시간 노출은 측광 방식, 피사체 contrast, 현상 조건 등 다양한 변수의 영향을 받습니다. 중요한 컷은 산출된 시간을 기준으로 단계 노출 촬영을 진행하세요.',
  },
  { type: 'title', text: '필름 상반칙 보정 적용 시 유의사항', level: 2 },
  {
    type: 'list',
    items: [
      '<strong>공식 기술 데이터 사용:</strong> 필름 종류와 제조사 제공 계수를 일치시킵니다.',
      '<strong>일관된 현상 유지:</strong> 현상액 종류, 액온, 교반 주기가 네거티브 농도에 영향을 줍니다.',
      '<strong>긴 노출 시 브래키팅 수행:</strong> 노출 시간이 길어질수록 테스트 및 추가 스톱 촬영이 유용합니다.',
    ],
  },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })),
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

export const content: ToolLocaleContent<FilmReciprocityFailureCalculatorUI> = {
  slug,
  title,
  description,
  ui,
  seo,
  faq,
  bibliography,
  howTo,
  schemas: [appSchema, faqSchema, howToSchema],
};
