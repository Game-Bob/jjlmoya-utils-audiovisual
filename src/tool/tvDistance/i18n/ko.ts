import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { TvDistanceUI, TvDistanceLocaleContent } from '../index';

const slug = 'tv-viewing-distance-calculator-thx-4k-optimal-screen';
const title = 'TV 시청 거리 계산기: THX 및 4K 최적 화면 설정';
const description = 'TV 크기와 해상도에 따른 이상적인 시청 거리를 계산하세요. THX 및 SMPTE 표준을 기반으로 홈 시네마 환경을 최적화합니다.';

const ui: TvDistanceUI = {
    specTitle: "제품 사양 설정",
    diagonalLabel: "화면 크기(대각선)",
    resolutionLabel: "해상도",
    thxRecommendation: "THX 추천 사양",
    thxDescription: "THX는 몰입감 있는 영화적 경험을 위해 시야각 40도를 확보할 수 있는 거리를 권장합니다.",
    simulationBadge: "실시간 시뮬레이션",
    tvWidthLabel: "cm (가로 폭)",
    userLocationLabel: "사용자 위치",
    minLimitLabel: "최소 한계 거리",
    optimalLimitLabel: "최적 시청 거리",
    maxLimitLabel: "최대 한계 거리",
    unitMeters: "m",
    unitCm: "cm"
};

const faq: TvDistanceLocaleContent['faq'] = [
    {
        question: "거리를 계산할 때 해상도가 왜 중요한가요?",
        answer: "4K나 8K와 같은 고해상도에서는 픽셀 크기가 더 작습니다. 따라서 화면에 더 가까이 앉아도 픽셀 격자가 보이지 않으며, 화질 저하 없이 몰입감을 높일 수 있습니다.",
    },
    {
        question: "40도 시야각이란 무엇인가요?",
        answer: "전문 영화관에서 느끼는 경험과 유사하게 화면이 사용자의 주변 시야 대부분을 차지하도록 THX에서 권장하는 표준 규격입니다.",
    },
    {
        question: "권장 거리보다 더 멀리 앉아도 되나요?",
        answer: "네, 가능하지만 고해상도의 이점을 잃게 됩니다. 4K TV에서 너무 멀리 앉으면 사람의 눈은 세부 디테일을 구분하지 못해 결국 1080p(Full HD) 수준으로 보게 됩니다.",
    },
];

const howTo: TvDistanceLocaleContent['howTo'] = [
    {
        name: "인치 선택",
        text: "슬라이더를 움직여 현재 보유 중이거나 구매 예정인 TV의 크기를 선택하세요.",
    },
    {
        name: "해상도 선택",
        text: "시각적 식별 한계를 조정하기 위해 1080p, 4K, 8K 중 하나를 선택하세요.",
    },
    {
        name: "시뮬레이션 확인",
        text: "다이어그램을 통해 사용자와 화면 사이의 크기 관계가 어떻게 변하는지 확인하세요.",
    },
    {
        name: "소파 위치 조정",
        text: "영화관 같은 몰입감을 극대화하려면 좌석을 '최적 시청 거리' 범위 내에 배치하세요.",
    },
];

const bibliography: TvDistanceLocaleContent['bibliography'] = [
    {
        name: "THX - HDTV Set Up Guide",
        url: "https://www.thx.com/questions/what-is-the-best-viewing-distance-for-my-tv/",
    },
    {
        name: "SMPTE - Standards Documentation",
        url: "https://www.smpte.org/",
    },
];

const seo: TvDistanceLocaleContent['seo'] = [
    {
        type: 'summary',
        title: '해상도와 크기에 따른 최적의 TV 시청 거리',
        items: [
            '몰입감 넘치는 영화 경험을 위한 THX 표준(40°) 준수',
            '1080p, 4K, 8K를 위한 초정밀 계산',
            '설정 상태를 실시간으로 보여주는 시각적 시뮬레이션',
            '눈의 피로를 방지하고 콘텐츠 몰입도 극대화'
        ]
    },
    { type: 'title', text: '몰입의 과학: 최적의 TV 시청 거리', level: 2 },
    { type: 'paragraph', html: '단순히 편안함의 문제가 아니라 인간의 시각 생리학에 기반한 과학입니다. 눈에는 해상도를 식별할 수 있는 한계치가 있습니다. 4K 화면에서 너무 멀리 앉으면 시력이 감지하지 못하는 픽셀에 돈을 낭비하는 셈입니다. 반대로 너무 가까이 앉으면 눈의 피로를 유발합니다.' },

    { type: 'stats', items: [
        { value: '40°', label: '이상적 THX 각도', icon: 'mdi:eye' },
        { value: '100%', label: '픽셀 활용도', icon: 'mdi:video-high-definition' },
        { value: '제로', label: '시각적 피로도', icon: 'mdi:heart-pulse' }
    ], columns: 3 },

    { type: 'title', text: '두 가지 전문 표준: THX vs SMPTE', level: 3 },
    { type: 'paragraph', html: '시청 경험을 최적화하기 위해 시각 미디어 산업에서 정의한 두 가지 주요 기준이 있습니다.' },
    { type: 'comparative', items: [
        {
            title: 'THX 표준',
            description: '시야각 40도 - 극강의 몰입감',
            icon: 'mdi:filmstrip',
            points: [
                '화면이 주변 시야를 더 많이 채움',
                '몰입감 있는 영화관 경험 제공',
                '액션 영화, 스포츠 생중계에 최적화',
                '더 넓은 공간 확보 필요'
            ],
            highlight: true
        },
        {
            title: 'SMPTE 표준',
            description: '시야각 30도 - 편안한 시청',
            icon: 'mdi:television',
            points: [
                '더욱 여유로운 시청 거리 확보',
                '전통적이고 보수적인 전문가 권장 사양',
                '다양한 콘텐츠(뉴스, 시리즈) 시청에 적합',
                '좁은 공간에 유리함'
            ]
        }
    ], columns: 2 },

    { type: 'title', text: '해상도가 계산 방식을 바꾸는 이유', level: 3 },
    { type: 'table', headers: ['해상도', '55인치 TV 기준', '최소 거리 (픽셀이 보이지 않는 거리)', '최적 THX 거리'], rows: [
        ['1080p (Full HD)', '55 인치', '2.0 m', '2.3 m'],
        ['4K (Ultra HD)', '55 인치', '1.2 m', '1.5 m'],
        ['8K', '55 인치', '0.8 m', '1.0 m']
    ] },

    { type: 'paragraph', html: '보시다시피 고해상도일수록 픽셀 구조를 느끼지 못하고 더 가까이 앉을 수 있습니다. 4K TV는 1.2미터 거리부터 즐길 수 있지만, 1080p는 최소 2미터가 필요합니다.' },

    { type: 'card', title: '인간의 시력 한계치', html: '사람의 눈은 해상도를 구분할 수 있는 한계 능력이 있습니다. 일정 거리 이상 떨어지면 8K 화면이라도 그 이상의 디테일을 구분하지 못합니다. 저희 계산기는 눈의 에너지를 낭비하지 않고 픽셀을 100% 활용할 수 있는 "최적의 구역"을 제안합니다.' },

    { type: 'diagnostic', variant: 'info', title: '눈의 피로와 거리', icon: 'mdi:information', badge: '시력 건강', html: '너무 가까우면 눈이 극단적인 각도에 계속 적응해야 하므로 피로도가 높아집니다. 너무 멀면 디테일을 보려고 눈에 힘을 주게 됩니다. 저희 계산기는 눈에 스트레스를 주지 않으면서 자연스럽게 시야를 채우는 "스위트 스팟"(THX 40°)을 찾아줍니다.' },

    { type: 'proscons', items: [
        {
            pro: 'THX 40° 기준은 전문 영화관과 같은 진정한 몰입감을 선사함',
            con: '더 많은 실내 여유 공간이 필요함'
        },
        {
            pro: '4K는 1080p보다 가까이 앉을 수 있어 좁은 공간 활용에 유리함',
            con: '추가 픽셀의 이점을 보려면 최소 거리 근처에 있어야 함'
        },
        {
            pro: '올바른 배치를 통해 장시간 시청 시 발생하는 눈의 피로 방지',
            con: '일반적인 가정집 거실 구조가 이 표준을 따르지 않는 경우가 많음'
        },
        {
            pro: '현재 TV 위치가 적절한지 객관적으로 검증 가능',
            con: '배치가 잘못된 경우 가구 배치를 옮겨야 할 수도 있음'
        }
    ], proTitle: '장점', conTitle: '한계점' },

    { type: 'glossary', items: [
        {
            term: '시야각 (Viewing Angle)',
            definition: '사용자 위치에서 화면이 차지하는 시각적 각도. 40° = 높은 몰입도(주변 시각 장악); 20° = 단순 배경 콘텐츠(몰입도 낮음).'
        },
        {
            term: 'THX',
            definition: '루카스필름이 설립한 영상/음향 품질 인증 규격. 영화관과 홈 시어터의 표준을 정의하며 40도를 주요 권장 수치로 함.'
        },
        {
            term: 'SMPTE',
            definition: '영화 텔레비전 기술자 협회. 영화 및 비디오 기술 표준을 제정하는 단체로 30도를 보수적인 전문 거리로 권장.'
        },
        {
            term: '인간의 시력 (Visual Acuity)',
            definition: '미세한 디테일을 구분하는 눈의 능력. 개별 픽셀은 특정 거리 이상 떨어지면 인지할 수 없음.'
        },
        {
            term: '4K (Ultra HD)',
            definition: '약 3840x2160 픽셀의 해상도. 1080p보다 4배 많은 픽셀을 보유하여 더 가까이서 봐도 선명함.'
        }
    ] },

    { type: 'message', title: '전문적인 시청 공간 최적화', ariaLabel: 'TV 설정 표준 관련 정보', html: '전문 영화관은 거리, 각도, 조명이 완벽한 환경을 위해 막대한 비용을 투자합니다. 본 계산기는 그와 동일한 원리를 여러분의 집으로 구현해 드립니다.' },

    { type: 'title', text: '우리 집 거실을 전문 영화관처럼 꾸미기', level: 3 },
    { type: 'paragraph', html: '시청 거리는 화면 크기나 해상도만큼이나 "매우 중요"합니다. 이 표준들을 따라 거실을 진정한 홈 시네마로 변신시켜 보세요.' }
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

export const content: TvDistanceLocaleContent = {
    slug,
    title,
    description,
    ui,
    seo,
    faq,
    faqTitle: 'TV 시청 거리에 관한 자주 묻는 질문',
    bibliography,
    bibliographyTitle: '전문화된 TV 배치 표준 규격',
    howTo,
    schemas: [faqSchema as any, howToSchema as any, appSchema],
};
