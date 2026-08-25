import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { FilmDevelopmentTemperatureUI } from '../ui';
import { bibliography } from '../bibliography';

const ui: FilmDevelopmentTemperatureUI = {
  faqTitle: '필름 현상 온도 관련 자주 묻는 질문',
  bibliographyTitle: '주요 참고 문헌',
  chooseDocumentedCombination: '공식 데이터가 있는 필름 및 현상액 조합 선택',
  filmLabel: '필름 종류',
  developerLabel: '현상액',
  dilutionLabel: '희석비',
  temperatureLabel: '현상액 온도',
  temperatureHelp: '탱크에 담긴 현상액의 실제 측정한 온도를 입력하세요. 가이드는 20 °C 기준 시간을 기반으로 합니다.',
  unitSwitchLabel: '온도 단위',
  metricLabel: '섭씨 °C',
  imperialLabel: '화씨 °F',
  currentReadingLabel: '암실 측정값',
  baseTimeLabel: '20 °C 기준',
  adjustedTimeLabel: '보정된 현상 시작 시간',
  temperatureGuideLabel: '온도별 보정 가이드',
  temperatureGuideHelp: '측정된 온도를 중심으로 한 실용적인 시간 가이드입니다. 강조된 행이 현재 입력값입니다.',
  sourceLabel: '확인된 조합 데이터',
  eiLabel: '감도 설정 EI',
  statusCool: '낮은 온도 현상',
  statusSteady: '표준 온도 근처',
  statusWarm: '높은 온도 현상',
  warningShortTime: '현상 시간이 5분 미만이면 얼룩이 생길 위험이 높아집니다. 공식 데이터에 따르거나 검증된 테스트를 거쳐 진행하세요.',
  warningOutOfRange: '권장 온도 범위를 벗어난 경계 지역입니다. 현상액 온도를 최대한 안정되게 유지하고 제조사 문서를 확인하세요.',
  guideNotice: '이 결과는 시작을 위한 참고용 가이드입니다. 교반 방식, 현상 탱크 구조, 목표 대비에 따라 결과가 달라집니다.',
  resetLabel: '첫 번째 표준 조합으로 복원',
  minutesLabel: '분',
  secondsLabel: '초',
  currentBadge: '현재값',
  belowFiveMinutes: '5분 미만 주의',
  tableTemperature: '온도',
  tableTime: '가이드 시간',
  tableDifference: '20 °C 대비 차이',
  currentRow: '현재값',
};

const softwareApplication: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: '온도별 필름 현상 시간 계산기',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  description: '측정한 현상액 온토에 맞춰 흑백 필름의 현상 시간을 보정 계산합니다.',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
};

const faqPage: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: '이 계산기는 어떤 온도를 기준 기본값으로 사용하나요?', acceptedAnswer: { '@type': 'Answer', text: '제조사가 명시한 20 °C에서의 표준 현상 시간을 기준으로 측정한 액온에 맞춰 보정 시간을 계산합니다.' } },
    { '@type': 'Question', name: '계산된 현상 시간이 완벽히 보장되나요?', acceptedAnswer: { '@type': 'Answer', text: '아닙니다. 실용적인 작업 시작을 위한 참고 지표입니다. 교반 강도, 탱크 구조, 약품의 보관 상태에 따라 결과가 변합니다.' } },
    { '@type': 'Question', name: '왜 5분 미만의 현상 시간에서 경고가 표시되나요?', acceptedAnswer: { '@type': 'Answer', text: '현상 시간이 너무 짧으면 용액을 붓고 빼는 시간 비중이 커져 필름 전체에 불균일한 현상 얼룩이 생기기 쉽기 때문입니다.' } },
    { '@type': 'Question', name: '목록에 없는 필름과 현상액은 어떻게 해야 하나요?', acceptedAnswer: { '@type': 'Answer', text: '필름 및 현상액 제조사의 기술 데이터 시트나 검증된 현상 데이터표를 참조하세요.' } },
  ],
};

const howTo: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: '온도에 따른 필름 현상 시간 보정 방법',
  step: [
    { '@type': 'HowToStep', name: '필름 선택', text: '현상 탱크에 장착된 흑백 필름 종류를 선택합니다.' },
    { '@type': 'HowToStep', name: '현상액 및 희석비 맞추기', text: '사용할 현상액과 데이터표에 명시된 희석비를 선택합니다.' },
    { '@type': 'HowToStep', name: '현상액 온도 측정', text: '현상 시작 직전 현상액의 실제 온도를 측정하여 입력합니다.' },
    { '@type': 'HowToStep', name: '보정 시간 확인', text: '계산된 보정 시간을 바탕으로 암실 현상 타이머를 설정합니다.' },
  ],
};

export const content: ToolLocaleContent<FilmDevelopmentTemperatureUI> = {
  slug: 'film-development-time-temperature-compensation-calculator',
  title: '온도별 필름 현상 시간 계산기',
  description: '측정한 현상액 온토에 맞춰 흑백 필름의 현상 시간을 보정 계산하고 명확한 참고 가이드를 제공합니다.',
  ui,
  seo: [
    { type: 'title', level: 2, text: '현상액 온도 변화에 따른 필름 현상 시간 보정 방법' },
    { type: 'paragraph', html: '공식 표에 명시된 정확한 필름, 현상액, 희석비 조합을 선택한 후 준비된 현상액의 측정 온도를 입력하세요. 계산기는 20 °C 기준 공식 시간을 바탕으로 현재 액온에 적합한 현상 시간을 도출합니다.' },
    { type: 'title', level: 3, text: '보정된 현상 시간을 탐색의 시작점으로 활용하기' },
    { type: 'paragraph', html: '온도 변화는 화학 반응 속도에 직접적인 영향을 줍니다. 액온이 높으면 현상 시간이 줄어들고, 낮으면 더 긴 현상 시간이 필요합니다. 가이드 표를 통해 액온 변화에 따른 시간 경향을 한눈에 확인할 수 있습니다.' },
    { type: 'tip', title: '암실 작업의 일관성을 높이기 위한 주의사항', html: '계산된 시간을 절대적인 공식으로 과신하지 마세요. 교반 주기, 탱크 모양, 약품 사용 기한 및 원하는 대비 도출을 위한 개인 테스트가 항상 중요합니다.' },
    { type: 'title', level: 3, text: '검증된 공식 데이터를 기준으로 삼아야 하는 이유' },
    { type: 'list', items: ['필름과 현상액의 조합은 입자감, 선명도, 실효 감도를 결정합니다.', '희석비가 달라지면 반응 양상이 바뀌므로 다른 비율에서 임의로 추정할 수 없습니다.', '5분 미만의 현상 시간은 용액 투입 및 배출 작업 시 얼룩이 생길 위험이 커지므로 주의해야 합니다.'] },
  ],
  faq: [
    { question: '이 계산기는 어떤 온도를 기준 기본값으로 사용하나요?', answer: '제조사가 명시한 20 °C에서의 표준 현상 시간을 기준으로 측정한 액온에 맞춰 보정 시간을 계산합니다.' },
    { question: '계산된 현상 시간이 완벽히 보장되나요?', answer: '아닙니다. 실용적인 작업 시작을 위한 참고 지표입니다. 교반 강도, 탱크 구조, 약품의 보관 상태에 따라 결과가 변합니다.' },
    { question: '왜 5분 미만의 현상 시간에서 경고가 표시되나요?', answer: '현상 시간이 너무 짧으면 용액을 붓고 빼는 시간 비중이 커져 필름 전체에 불균일한 현상 얼룩이 생기기 쉽기 때문입니다.' },
    { question: '목록에 없는 필름과 현상액은 어떻게 해야 하나요?', answer: '필름 및 현상액 제조사의 기술 데이터 시트나 검증된 현상 데이터표를 참조하세요.' },
  ],
  bibliography,
  howTo: [
    { name: '필름 선택', text: '현상 탱크에 장착된 흑백 필름 종류를 선택합니다.' },
    { name: '현상액 및 희석비 맞추기', text: '사용할 현상액과 데이터표에 명시된 희석비를 선택합니다.' },
    { name: '현상액 온도 측정', text: '현상 시작 직전 현상액의 실제 온도를 측정하여 입력합니다.' },
    { name: '보정 시간 확인', text: '계산된 보정 시간을 바탕으로 암실 현상 타이머를 설정합니다.' },
  ],
  schemas: [softwareApplication, faqPage, howTo],
};
