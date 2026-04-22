import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { TimelapseUI, TimelapseLocaleContent } from '../index';

const slug = 'timelapse-hyperlapse-calculator-perfect-intervals';
const title = '타임랩스 및 하이퍼랩스 계산기: 완벽한 촬영 간격 설정';
const description = '사진 촬영 간격, 총 소요 시간, 데이터 저장 용량을 정확하게 계산하세요. 사진작가를 위한 타임랩스 필수 도구입니다.';

const ui: TimelapseUI = {
    title: "타임랩스 계산기",
    paramsTitle: "설정 파라미터",
    eventDuration: "실제 이벤트의 총 지속 시간은?",
    hours: "시간",
    minutes: "분",
    videoDuration: "최종 결과물 영상의 길이는?",
    seconds: "영상 시간 (초)",
    fps: "FPS",
    resultsTitle: "계산 결과",
    intervalLabel: "인터벌로미터(촬영 간격) 설정값:",
    secondsUnit: "초",
    totalPhotos: "총 사진 매수",
    speed: "배속(속도)",
    shutterSpeed: "셔터 스피드",
    storage: "예상 용량 (RAW)",
    rule180Info: "180도 규칙에 따르면 부드러운 모션 블러를 위해 셔터 스피드를 촬영 간격의 절반으로 설정하는 것이 좋습니다.",
};

const faq: TimelapseLocaleContent['faq'] = [
    {
        question: "타임랩스 촬영을 위한 올바른 간격은 어떻게 선택하나요?",
        answer: "담으려는 피사체의 움직임 속도에 달려 있습니다. 빠르게 움직이는 구름은 2~3초, 태양이나 별의 움직임은 15~30초, 식물의 성장이나 건축 현장은 5~15분 정도가 적당합니다.",
    },
    {
        question: "1분짜리 영상을 만들려면 사진이 몇 장 필요한가요?",
        answer: "표준 영상은 초당 24 또는 30프레임(fps)을 사용합니다. 24fps로 1분 영상을 만들려면 정확히 1440장의 사진(60초 * 24장/초)이 필요합니다.",
    },
    {
        question: "플리커(Flicker) 현상이란 무엇이며 어떻게 방지하나요?",
        answer: "사진 간의 미세한 노출 차이로 인해 화면이 깜빡이는 현상입니다. 이를 방지하려면 항상 수동 모드(M), 고정 화이트 밸런스를 사용하고, 수동 조리개 조절이 가능한 렌즈를 사용하는 것이 좋습니다.",
    },
    {
        question: "셔터 스피드가 왜 중요한가요?",
        answer: "움직임이 매끄럽게 보이려면(180도 규칙) 셔터 스피드가 촬영 간격의 약 절반 정도여야 합니다. 예를 들어 간격이 2초라면, 자연스러운 모션 블러를 위해 1초 정도로 촬영해 보세요.",
    },
];

const howTo: TimelapseLocaleContent['howTo'] = [
    {
        name: "최종 영상 길이 정의",
        text: "결과물 영상이 몇 초 또는 몇 분 동안 지속되기를 원하는지 입력하세요(예: 인스타그램용 10초).",
    },
    {
        name: "출력 FPS 선택",
        text: "영상의 부드러움을 선택하세요: 24 (영화), 30 (웹), 또는 60 (매끄러운 슬로우 모션).",
    },
    {
        name: "촬영 간격 조정",
        text: "장면의 속도에 맞춰 카메라가 몇 초마다 촬영할지 설정하세요.",
    },
    {
        name: "저장 공간 확인",
        text: "계산기가 전체 세션에 필요한 예상 용량(GB)을 알려줍니다. 시작 전 SD 카드의 여유 공간을 확인하세요.",
    },
];

const seo: TimelapseLocaleContent['seo'] = [
    { type: 'title', text: '타임랩스 및 하이퍼랩스 촬영 간격 완벽 가이드', level: 2 },
    { type: 'paragraph', html: '단순한 고속 영상과 <strong>시네마틱 타임랩스</strong>의 수학적 차이는 단 하나의 요소, 바로 <strong>촬영 간격(인터벌)</strong>에 있습니다. 이 계산기는 추측에 의존하지 않고 일출, 도심 교통, 은하수 등을 완벽한 부드러움으로 담을 수 있도록 정밀한 계획을 도와줍니다.' },
    
    { type: 'title', text: '추천 촬영 간격 표 (치트 시트)', level: 3 },
    { type: 'paragraph', html: '피사체에 따라 인터벌로미터를 설정할 때 아래의 퀵 레퍼런스 표를 활용하세요. 목표는 움직임이 인지되면서도 매끄럽게 이어지도록 담는 것입니다.' },
    { type: 'table', headers: ['피사체 / 장면', '추천 간격', '이벤트 지속 시간 (최소)'], rows: [
        ['빠른 구름 / 폭풍', '1 - 2 초', '20 - 30 분'],
        ['도심 교통 / 사람 (블러 효과)', '0.5 - 2 초', '15 - 20 분'],
        ['일몰 / 일출 (홀리 그레일)', '5 - 10 초', '1.5 - 2.5 시간'],
        ['느린 구름 / 그림자', '10 - 15 초', '2 - 3 시간'],
        ['별 / 은하수 (천체)', '15 - 30 초*', '3 - 5 시간'],
        ['건설 현장 / 식물 성장', '5 - 15 분', '수일 / 수주']
    ]},
    { type: 'tip', title: '천체 촬영 참고', html: '촬영 간격은 보통 빛을 담는 데 필요한 노출 시간(500 규칙 등)에 메모리 카드 쓰기 버퍼 시간 1~2초를 더한 값으로 결정됩니다.' },

    { type: 'title', text: '180도 규칙 (모션 블러)', level: 3 },
    { type: 'paragraph', html: '타임랩스에서 흔히 하는 실수는 영상이 뚝뚝 끊겨 보이는 것입니다. 매끄러운 시네마틱 룩을 얻으려면 <strong>모션 블러</strong>가 필요합니다.' },
    { type: 'card', title: '황금 규칙', icon: 'mdi:information', html: '셔터 스피드는 촬영 간격의 딱 절반이어야 합니다. <br /><br /> <em>예시:</em> <strong>4초</strong>마다 촬영한다면 노출은 <strong>2초</strong>여야 합니다. 이를 통해 사진 사이의 시간적 공백을 채워 자동차의 궤적이나 흐르는 물을 부드럽게 표현할 수 있습니다.' },

    { type: 'title', text: '플리커 현상과 수동 조리개', level: 3 },
    { type: 'paragraph', html: '"플리커"는 촬영 시마다 조리개 값이 미세하게 변하면서 발생하는 불편한 깜빡임입니다.' },
    { type: 'list', items: [
        '<strong>렌즈 트위스트:</strong> DSLR 등에서 렌즈를 살짝 돌려 전자식 접점을 끊고 조리개를 기계적으로 고정하는 테크닉입니다.',
        '<strong>완전 수동 설정:</strong> ISO, 화이트 밸런스, 초점은 반드시 고정해야 합니다. 자동 모드는 절대 사용하지 마세요.',
        '<strong>RAW 촬영 권장:</strong> 이미지 파손 없이 후보정 단계에서 노출과 색상을 정밀하게 수정하기 위해 필수입니다.'
    ]},

    { type: 'diagnostic', variant: 'success', title: '고급 테크닉: "홀리 그레일"', icon: 'mdi:crown', badge: '프로 테크닉', html: '"홀리 그레일(Holy Grail)"은 낮에서 밤(또는 그 반대)으로 부드럽게 전환되는 촬영을 의미합니다. 광량이 드라마틱하게 변하므로 가장 어려운 기술적 도전 중 하나입니다.' },
    
    { type: 'stats', columns: 3, items: [
        { label: 'Bulb Ramping', value: '점진적 노출 조정', icon: 'mdi:brightness-6' },
        { label: 'Post-Pro', value: 'LRTimelapse 활용', icon: 'mdi:television-guide' },
        { label: 'Strategy', value: '야간 인터벌 전략', icon: 'mdi:weather-night' }
    ]},

    { type: 'title', text: '결론: 단순한 기계학의 미학', level: 3 },
    { type: 'paragraph', html: '타임랩스를 마스터하는 것은 인터벌로미터 뒤에 숨겨진 수학적 원리를 이해하는 것에서 시작됩니다.' }
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

export const content: TimelapseLocaleContent = {
    slug,
    title,
    description,
    ui,
    seo,
    faq,
    faqTitle: '타임랩스 제작에 관한 자주 묻는 질문',
    bibliography: '타임랩스 이론 및 관련 리소스',
    howTo,
    schemas: [faqSchema as any, howToSchema as any, appSchema],
};
