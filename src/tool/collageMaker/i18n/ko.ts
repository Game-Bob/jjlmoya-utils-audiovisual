import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { CollageMakerUI, CollageMakerLocaleContent } from '../index';

const slug = 'free-online-photo-collage-maker-professional-compositions';
const title = '온라인 콜라주 메이커: 전문적인 구도 디자인';
const description = '몇 초 만에 무료로 사진 콜라주를 만드세요. 다양한 레이아웃 중에서 선택하고, 테두리를 조정하며, 워터마크 없이 고화질로 다운로드하세요.';

const ui: CollageMakerUI = {
    dropTitle: "여기에 이미지를 드래그하세요",
    dropSub: "또는 {link} - 최소 2개, 최대 9개",
    dropLink: "파일 선택",
    imgsLoaded: "로드된 이미지",
    layoutLabel: "레이아웃",
    settingsLabel: "설정",
    borderLabel: "테두리",
    borderColorLabel: "테두리 색상",
    bgColorLabel: "배경",
    downloadBtn: "다운로드",
    previewTitle: "미리보기",
    needsImgs: "이미지 {n}개가 더 필요합니다",
    errorMin: "최소 2개의 이미지가 필요합니다",
    errorMax: "최대 9개까지만 허용됩니다",
    errorLoad: "이미지를 로드하는 중 오류가 발생했습니다",
    faqTitle: "자주 묻는 질문": "참고 문헌"
};

const faq: CollageMakerLocaleContent['faq'] = [
    {
        question: "사진 순서를 어떻게 바꿀 수 있나요?",
        answer: "사진은 로드된 이미지 목록에 표시된 순서대로 콜라주에 배치됩니다. 하나를 삭제하고 다시 업로드하여 위치를 조정할 수 있습니다.",
    },
    {
        question: "콜라주의 출력 형식은 무엇인가요?",
        answer: "콜라주는 고해상도 WebP 형식으로 다운로드됩니다. 이는 선명도를 유지하면서 소셜 네트워크에 공유하기에 이상적입니다.",
    },
];

const howTo: CollageMakerLocaleContent['howTo'] = [
    {
        name: "사진 업로드",
        text: "파일 탐색기에서 2개 이상 9개 이하의 이미지를 선택하세요.",
    },
    {
        name: "레이아웃 선택",
        text: "업로드한 사진 수에 가장 적합한 그리드를 선택하세요.",
    },
    {
        name: "스타일 맞춤 설정",
        text: "전문적인 마무리를 위해 테두리 두께와 색상을 조정하세요.",
    },
    {
        name: "다운로드 및 공유",
        text: "만들기 버튼을 누르고 완성된 결과물을 즉시 다운로드하세요.",
    },
];

const seo: CollageMakerLocaleContent['seo'] = [
    {
        type: 'summary',
        title: '전문 온라인 콜라주 메이커',
        items: [
            '다양한 레이아웃과 미리 정의된 그리드',
            '테두리 및 배경색 맞춤 설정',
            '소셜 네트워크에 적합한 1200px 고해상도',
            '사용 제한 없는 즉각적인 처리'
        ]
    },
    { type: 'title', text: '콜라주 디자인: 이야기를 담은 구도', level: 2 },
    { type: 'paragraph', html: '콜라주는 단순한 사진의 조합 이상입니다. 감정과 맥락을 전달하는 시각적 서사입니다. 당사의 도구를 사용하면 Photoshop이나 비싼 소프트웨어 없이도 Instagram, Facebook, Pinterest 또는 개인 프로젝트를 위한 전문적인 기하학적 구도를 만들 수 있습니다.' },

    { type: 'stats', items: [
        { value: '2-9', label: '장당 이미지 수', icon: 'mdi:image-multiple' },
        { value: '1200px', label: 'HD 해상도', icon: 'mdi:video-high-definition' },
        { value: '즉시', label: '생성', icon: 'mdi:lightning-bolt' }
    ], columns: 3 },

    { type: 'title', text: '시각적 구도: 디자인 원칙', level: 3 },
    { type: 'paragraph', html: '구도는 보는 이의 시선을 유도하고 의도를 전달하는 방식으로 시각적 요소를 구성하는 예술입니다. 좋은 콜라주는 다음의 균형을 유지합니다.' },
    { type: 'list', items: [
        '<strong>균형:</strong> 시각적 무게감의 분배 (밝은 이미지 vs 어두운 이미지, 큰 것 vs 작은 것).',
        '<strong>시각적 흐름:</strong> 시선이 끊김 없이 구도 안에서 자연스럽게 이동해야 합니다.',
        '<strong>대비:</strong> 주의를 끄는 색상, 크기, 모양의 변화.',
        '<strong>통일성:</strong> 주제적 일관성 - 이미지들이 같은 이야기에 대해 함께 \"말해야\" 합니다.'
    ], icon: 'mdi:check' },

    { type: 'card', title: '스마트하고 유연한 디자인', html: '당사의 시스템은 사진 수에 따라 최적의 공간 배분을 자동으로 계산합니다. 사진 2장은 대칭 그리드, 5장은 균형 잡힌 비대칭 배분으로 구성됩니다. 각 그리드는 시각적 임팩트를 극대화하도록 설계되었습니다.' },

    { type: 'comparative', items: [
        {
            title: '소셜 네트워크용',
            description: 'Instagram, TikTok, Facebook - 정사각형 형식',
            icon: 'mdi:share-all',
            points: [
                '1200px는 Instagram 피드에 완벽합니다',
                '정사각형 형식은 게시 시 잘리는 현상을 방지합니다',
                '브랜딩을 위한 맞춤형 테두리'
            ],
            highlight: true
        },
        {
            title: '포트폴리오용',
            description: '사진가 및 디자이너를 위한 시각적 쇼케이스',
            icon: 'mdi:briefcase-outline',
            points: [
                '프로젝트의 다양한 각도 표시',
                '응집력 있는 시각적 서사',
                '전문적인 디지털 북 인쇄'
            ]
        },
        {
            title: '개인용 선물',
            description: '인쇄물, 액자 및 디지털 앨범',
            icon: 'mdi:gift-outline',
            points: [
                '이벤트 추억 (결혼식, 여행)',
                '인쇄 가능한 고해상도',
                '수작업 없는 즉각적인 디자인'
            ]
        }
    ], columns: 3 },

    { type: 'title', text: '맞춤 설정: 테두리 및 색상', level: 3 },
    { type: 'table', headers: ['요소', '시각적 효과', '권장 사항'], rows: [
        ['흰색 테두리', '깔끔함, 미니멀함, 모던함', '소셜 네트워크, 디지털 포트폴리오'],
        ['검은색 테두리', '극적임, 전문적임, 예술적임', '예술 사진, 패션, 럭셔리'],
        ['중성색 테두리 (회색)', '다재다능함, 학술적임, 기업용', '비즈니스, 교육, 중립성'],
        ['테두리 없음', '융합, 연속성, 몰입감', '균일한 배경, 흐르는 듯한 사진']
    ] },

    { type: 'proscons', items: [
        {
            pro: '전문적이고 미리 정의된 디자인 - 구도 지식이 필요 없음',
            con: '옵션이 미리 설정된 그리드에 한정됨'
        },
        {
            pro: '리사이징 없이 소셜 네트워크에 바로 쓰는 1200px 해상도',
            con: 'Photoshop만큼 자유로운 맞춤 설정은 불가함'
        },
        {
            pro: '100% 로컬 처리 - 개인정보 보호, 속도, 무제한',
            con: '최신 브라우저가 필요함'
        },
        {
            pro: '완전 무료, 워터마크 없음, 광고 없음',
            con: '개별 편집 옵션(자르기, 회전) 없음'
        }
    ], proTitle: '장점', conTitle: '제한 사항' },

    { type: 'diagnostic', variant: 'success', title: '소셜 네트워크 준비 완료', icon: 'mdi:check-circle-outline', badge: '최적화됨', html: '1200x1200px는 Instagram에 가장 이상적인 해상도입니다. 모든 화면 비율을 지원하지만, 정사각형 출력은 피드 임팩트를 극대화하고 자동 자르기를 방지하며 데스크톱, 태블릿, 모바일 어디에서나 멋지게 보입니다.' },

    { type: 'glossary', items: [
        {
            term: '시각적 구도',
            definition: '보는 이의 시선을 유도하고 감정적 의도를 전달하기 위해 요소(색상, 모양, 공간)를 구성하는 예술입니다.'
        },
        {
            term: '3분할 법칙',
            definition: '구도 원칙: 이미지를 9개의 동일한 영역(3x3)으로 나눕니다. 피사체를 교차선에 배치하여 임팩트를 극대화합니다.'
        },
        {
            term: '대칭 그리드',
            definition: '동일한 공간 분할입니다. 안정적이고 질서 정연합니다. 사진 두 장 또는 짝수 장에 이상적입니다.'
        },
        {
            term: '비대칭 그리드',
            definition: '불균등한 분할입니다. 역동적이고 흥미로우며 시각적인 재미를 줍니다. 다양한 크기의 사진 5장 이상에 이상적입니다.'
        },
        {
            term: '시각적 균형',
            definition: '시각적 무게감의 지각적 평형입니다. 밝은 이미지 + 어두운 이미지 = 균형, 큰 것 + 작은 것 = 균형.'
        }
    ] },

    { type: 'message', title: '즉각적인 시각적 서사', ariaLabel: '구도 및 콜라주에 관한 정보', html: '모든 콜라주는 이야기를 담고 있습니다. 당사의 자동 디자이너는 여러분의 시각적 서사가 균형 잡히고 전문적이며 세상에 나갈 준비가 되도록 보장합니다. 그래픽 디자이너를 기다릴 필요가 없습니다.' },

    { type: 'title', text: '만들고, 공유하고, 영감을 주세요', level: 3 },
    { type: 'paragraph', html: '잘 만들어진 콜라주는 잊혀질 게시물과 팔로워가 기억하고 공유할 게시물의 차이를 만듭니다. 여러분의 시각적 서사가 임팩트를 줄 수 있도록 스마트한 구도를 사용하세요.' }
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

export const content: CollageMakerLocaleContent = {
    slug,
    title,
    description,
    ui,
    seo,
    faqTitle: "자주 묻는 질문",
    faq: "참고 문헌",
    bibliography,
    howTo,
    schemas: [faqSchema as any, howToSchema as any, appSchema],
};
