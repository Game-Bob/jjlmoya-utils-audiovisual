import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { DepthOfFieldUI, DepthOfFieldLocaleContent } from '../index';

const slug = 'depth-of-field-calculator';
const title = '피사체 깊이 계산기: 모든 카메라를 위한 실시간 DoF 계산';
const description = '피사체 깊이, 과초점 거리, 초점 범위를 실시간으로 계산하세요. 모든 센서 크기를 지원하며 1/3 스탑 조리개 정밀도를 제공합니다.';

const ui: DepthOfFieldUI = {
    title: '피사체 깊이 계산기',
    paramsTitle: '설정 파라미터',
    sensorLabel: '카메라 센서',
    moreLabel: '기타 센서…',
    apertureLabel: '조리개값 (Aperture)',
    focalLabel: '초점 거리 (Focal Length)',
    distanceLabel: '피사체 거리',
    metersLabel: 'm',
    feetLabel: 'ft',
    resultsTitle: '계산 결과',
    totalDofLabel: '전체 피사체 깊이',
    infiniteLabel: '무한대',
    nearLimitLabel: '전방 한계 지점',
    farLimitLabel: '후방 한계 지점',
    hyperfocalLabel: '과초점 거리',
    cocLabel: '허용 착란원 (CoC)',
    cocUnit: 'mm',
    showDetailsLabel: '기술 세부 정보 표시',
    hideDetailsLabel: '기술 세부 정보 숨기기',
    errorBelowFocal: '피사체 거리는 초점 거리보다 커야 합니다.',
};

const faq: DepthOfFieldLocaleContent['faq'] = [
    {
        question: '피사체 깊이란 무엇인가요?',
        answer: '피사체 깊이(DoF)는 사진에서 초점이 맞은 것으로 간주되는 전후방 거리의 범위를 말합니다. 조리개, 초점 거리, 촬영 거리, 센서 크기에 의해 결정됩니다.',
    },
    {
        question: '과초점 거리란 무엇인가요?',
        answer: '무한대에 있는 물체가 허용 가능한 선명도로 촬영되는 가장 가까운 초점 거리입니다. 이 거리에 초점을 맞추면 피사체 깊이를 극대화할 수 있습니다.',
    },
    {
        question: '조리개를 수치가 작게 설정하면 왜 깊이가 얕아지나요?',
        answer: '조리개를 크게 열면 렌즈의 넓은 영역을 통해 빛이 들어오며, 초점에서 벗어난 지점의 착란원이 커지게 되어 선명하게 보이는 범위가 좁아집니다.',
    },
    {
        question: '센서 크기가 피사체 깊이에 어떤 영향을 주나요?',
        answer: '대형 센서는 허용 착란원 임계값이 더 큽니다. 하지만 동일한 화각을 비교할 때 대형 센서는 더 긴 초점 거리가 필요하므로 결과적으로 더 얕은 깊이를 만듭니다.',
    },
];

const howTo: DepthOfFieldLocaleContent['howTo'] = [
    {
        name: '카메라 센서 선택',
        text: '사용 중인 카메라 본체에 맞는 센서 포맷을 선택하세요. 이는 계산에 사용될 허용 착란원(CoC) 값을 결정합니다.',
    },
    {
        name: '조리개 및 초점 거리 설정',
        text: '1/3 스탑 단위로 조리개값을 선택하세요. 초점 거리 슬라이더는 로그 스케일을 사용하여 광각 영역에서 세밀한 조절이 가능합니다.',
    },
    {
        name: '피사체 거리 조절',
        text: '카메라와 주 피사체 사이의 거리를 설정하세요. 필요에 따라 미터와 피트 단위를 전환할 수 있습니다.',
    },
    {
        name: '결과 확인',
        text: '포커스 바를 통해 피사체 주변의 선명한 구역을 시각적으로 확인하세요. 전후방 한계점은 정확한 초점 범위를 보여줍니다.',
    },
];

const seo: DepthOfFieldLocaleContent['seo'] = [
    { type: 'title', text: '사진과 영상에서의 피사체 깊이 이해', level: 2 },
    { type: 'paragraph', html: '피사체 깊이는 사진가와 영상 작가에게 가장 강력한 창의적 도구 중 하나입니다. <strong>얕은 피사체 깊이</strong>는 피사체를 배경으로부터 분리시키며, <strong>깊은 피사체 깊이</strong>는 풍경 전체를 선명하게 유지합니다.' },

    { type: 'title', text: '피사체 깊이를 결정하는 세 가지 변수', level: 3 },
    { type: 'table', headers: ['변수', '변경 시 효과 →', '피사체 깊이에 미치는 영향'], rows: [
        ['조리개', 'f/1.4 → f/16', '조리개를 열수록 깊이가 얕아짐'],
        ['초점 거리', '24mm → 200mm', '초점 거리가 길수록 동일 거리에서 얕아짐'],
        ['피사체 거리', '1m → 10m', '피사체가 멀어질수록 깊이가 깊어짐'],
    ]},

    { type: 'title', text: '과초점 거리: 선명도의 극대화', level: 3 },
    { type: 'paragraph', html: '<strong>과초점 거리</strong>에 초점을 맞추면 해당 거리의 절반부터 무한대까지 모든 곳이 선명하게 표현됩니다. 풍경 사진에서 전경과 원경을 모두 살릴 때 주로 사용됩니다.' },
    { type: 'tip', title: '실전 팁', html: '스트릿 사진 촬영 시 초점을 과초점 거리에 고정해 보세요. APS-C 35mm 렌즈 f/8 설정 시 과초점 거리는 약 <strong>4미터</strong>입니다. 2m부터 무한대까지 모두 선명하게 촬영됩니다.' },

    { type: 'title', text: '센서 크기와 허용 착란원', level: 3 },
    { type: 'paragraph', html: '<strong>허용 착란원 (CoC)</strong>은 "선명함"을 결정하는 임계값입니다. 풀프레임은 0.030mm, 스마트폰은 약 0.006mm를 기준으로 합니다. CoC 값이 작을수록 더 엄격한 선명도가 요구됩니다.' },
    { type: 'stats', columns: 3, items: [
        { label: '풀프레임', value: '0.030 mm', icon: 'mdi:camera' },
        { label: 'APS-C', value: '0.019 mm', icon: 'mdi:camera-outline' },
        { label: '스마트폰', value: '0.006 mm', icon: 'mdi:cellphone' },
    ]},

    { type: 'title', text: '시네마에서의 DoF: 초점 거리 vs 센서', level: 3 },
    { type: 'paragraph', html: '슈퍼 35(APS-C와 유사)로 촬영하는 작가들은 원근감을 압축하여 "시네마틱 룩"을 만들기 위해 망원 렌즈를 자주 사용합니다. 밝은 85mm 렌즈 촬영이 대표적인 예입니다.' },
    { type: 'diagnostic', variant: 'success', title: '초점 분포의 법칙', icon: 'mdi:lightbulb-outline', badge: '프로 테크닉', html: '풀프레임 50mm, f/2.8 설정으로 3미터 피사체를 촬영할 때, 피사체 뒷부분의 선명한 영역은 항상 앞부분보다 넓으며 그 비율은 대략 <strong>2:1</strong>이 됩니다.' },
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

export const content: DepthOfFieldLocaleContent = {
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
