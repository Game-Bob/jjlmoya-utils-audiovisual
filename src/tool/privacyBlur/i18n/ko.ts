import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { PrivacyBlurUI, PrivacyBlurLocaleContent } from '../index';

const slug = 'online-privacy-editor-pixelate-blur-faces-photos';
const title = '온라인 프라이버시 에디터: 사진 속 얼굴 모자이크 및 숨기기';
const description = '사진의 민감한 부분을 검열하여 신원을 보호하세요. 얼굴 모자이크, 문서 블러 처리 또는 개인 정보 가리기를 100% 로컬 환경에서 수행합니다.';

const ui: PrivacyBlurUI = {
    toolPixel: "모자이크",
    toolBlur: "블러",
    toolSolid: "색 채우기",
    intensityLabel: "강도",
    undoButton: "되돌리기",
    downloadButton: "저장하기",
    dropTitle: "프라이버시 에디터",
    dropSubtitle: "이미지를 여기로 드래그하거나 클릭하여 시작하세요",
    privacySecureLabel: "100% 로컬",
    offlineLabel: "오프라인",
    autoDetectFaces: "자동 감지",
    loadingModels: "모델 로드 중...",
    noFacesDetected: "자동으로 감지된 얼굴이 없습니다.",
};

const faq: PrivacyBlurLocaleContent['faq'] = [
    {
        question: "내 사진이 서버에 업로드되나요?",
        answer: "아니요. 프라이버시 에디터는 브라우저 내부에서만 작동합니다. 모든 수정 작업은 로컬에서 이루어지며 기기 외부로 데이터가 전송되지 않습니다.",
    },
    {
        question: "자동 얼굴 감지는 어떻게 작동하나요?",
        answer: "외부 연결 없이 안면 특징을 식별하기 위해 브라우저에서 실행되는 경량 신경망(TinyFaceDetector)을 사용합니다.",
    },
];

const howTo: PrivacyBlurLocaleContent['howTo'] = [
    {
        name: "사진 업로드",
        text: "숨기고 싶은 민감한 정보가 포함된 이미지를 드래그하거나 선택하세요.",
    },
    {
        name: "도구 선택",
        text: "필요한 개인정보 보호 수준에 따라 모자이크, 블러 또는 색 채우기 중 하나를 선택하세요.",
    },
    {
        name: "영역 표시",
        text: "보호하려는 구역(얼굴, 번호판, 이름 등)을 클릭하고 드래그하세요.",
    },
    {
        name: "결과 저장",
        text: "원본 데이터를 복구할 수 없는 상태로 처리된 이미지를 다운로드하세요.",
    },
];

const seo: PrivacyBlurLocaleContent['seo'] = [
    {
        type: 'summary',
        title: '프라이버시 에디터: 모자이크, 블러 및 가리기',
        items: [
            '세 가지 도구: 모자이크, 블러, 색 채우기',
            'AI 기반 자동 얼굴 감지(TinyFaceDetector)',
            '100% 로컬 처리 - 사진이 브라우저를 떠나지 않음',
            '워터마크 없음, 제한 없음, 완전 무료'
        ]
    },
    { type: 'title', text: '디지털 프라이버시: 시각적 데이터를 보호하는 방법', level: 2 },
    { type: 'paragraph', html: '소셜 미디어 시대에 무분별한 사진 공유는 민감한 개인 정보를 노출할 수 있습니다. 당사의 도구는 사진을 인터넷에 올리기 전 중요한 정보(얼굴, 번호판, 이름, 주소)를 숨길 수 있게 하여 개인 정보를 완벽하게 제어할 수 있도록 돕습니다.' },

    { type: 'stats', items: [
        { value: '3', label: '차단 방식', icon: 'mdi:tools' },
        { value: '100%', label: '로컬 프라이버시', icon: 'mdi:shield-check' },
        { value: 'AI', label: '얼굴 감지', icon: 'mdi:brain' }
    ], columns: 3 },

    { type: 'title', text: '세 가지 차단 방식 설명', level: 3 },
    { type: 'comparative', items: [
        {
            title: '모자이크 (Pixelate)',
            description: '영역을 격자로 나누어 식별이 불가능하게 만듦',
            icon: 'mdi:blur',
            points: [
                '최대의 비가역적 난독화',
                '얼굴 인식 기술로부터 가장 안전함',
                '무언가 가려졌음이 시각적으로 명확함',
                '권장: 공공장소 사진 속 얼굴'
            ]
        },
        {
            title: '블러 (Blur)',
            description: '가우시안 평활화 - 더 자연스러운 외형',
            icon: 'mdi:blur-off',
            points: [
                '더 우아하고 시각적인 외관',
                '색조의 일관성 유지',
                '수학적으로 (이론상) 가역적일 수 있음',
                '권장: 덜 민감한 정보'
            ],
            highlight: true
        },
        {
            title: '색 채우기 (Solid)',
            description: '불투명한 색상 블록 - 최대 프라이버시',
            icon: 'mdi:rectangle',
            points: [
                '시각적으로 노골적인 숨김',
                '가장 높은 법적/기술적 보안 수준',
                '사진의 전체적인 구도를 바꿈',
                '권장: 문서, 매우 민감한 데이터'
            ]
        }
    ], columns: 3 },

    { type: 'title', text: 'AI를 이용한 자동 얼굴 감지', level: 3 },
    { type: 'paragraph', html: '당사의 도구는 브라우저 내부에서 얼굴을 자동으로 식별하는 컴팩트한 신경망인 TinyFaceDetector를 사용합니다.' },
    { type: 'list', items: [
        '<strong>100% 로컬:</strong> AI 모델이 외부 서버가 아닌 사용자의 GPU/CPU에서 직접 실행됩니다.',
        '<strong>오프라인 작동:</strong> 최초 로드 후에는 인터넷 연결 없이도 작동합니다.',
        '<strong>프라이버시 보장:</strong> Google이나 OpenAI, 그리고 당사를 포함하여 누구도 얼굴을 볼 수 없습니다.',
        '<strong>원클릭 자동화:</strong> 얼굴을 감지하고 클릭 한 번으로 숨길 영역을 선택할 수 있습니다.'
    ], icon: 'mdi:check' },

    { type: 'card', title: 'Privacy by Design', html: '브라우저의 로컬 GPU와 CPU를 사용하여 이미지를 처리함으로써 원본 사진이 사용자의 기기를 절대 떠나지 않음을 보장합니다. 작업 중에 마음이 바뀌더라도 어떠한 데이터도 전송되지 않습니다. 이것이 디지털 프라이버시의 최고 기준입니다.' },

    { type: 'title', text: '프라이버시 활용 사례', level: 3 },
    { type: 'table', headers: ['민감 정보', '권장 방식', '시급성'], rows: [
        ['타인의 얼굴', '모자이크 또는 블러', '치명적'],
        ['차량 번호판', '모자이크 (비가역적)', '치명적'],
        ['신분증 문서', '색 채우기 또는 모자이크', '치명적'],
        ['기록된 이름/주소', '색 채우기 또는 모자이크', '높음'],
        ['전화번호', '모자이크 또는 색 채우기', '높음'],
        ['의료 정보', '색 채우기', '치명적'],
        ['노출된 WiFi 비번 등', '모자이크', '중간']
    ] },

    { type: 'proscons', items: [
        {
            pro: '완벽한 프라이버시: 100% 로컬 처리, 서버 없음, 저장 없음',
            con: 'Canvas 및 WebGL을 지원하는 현대적인 브라우저 필요'
        },
        {
            pro: '자동 얼굴 감지로 수작업 시간 절약',
            con: 'AI가 완벽하지 않음 - 측면 얼굴이나 가려진 얼굴은 감지되지 않을 수 있음'
        },
        {
            pro: '보안과 미관 사이에서 세 가지 방식 선택 가능',
            con: '고급 옵션(스마트 왜곡, 주변 채우기 등)은 없음'
        },
        {
            pro: '완전 무료, 광고 없음, 제한 없음',
            con: '포토샵과 같은 전문 소프트웨어의 대체용은 아님'
        }
    ], proTitle: '장점', conTitle: '제한 사항' },

    { type: 'diagnostic', variant: 'warning', title: '경고: 블러 처리는 100% 안전하지 않습니다', icon: 'mdi:alert', badge: '보안', html: '가우시안 블러는 정교한 알고리즘을 통해 수학적으로 복구될 수 있는 가능성이 있습니다. 정보가 매우 중요하다면(법적 문서, 신원 정보) <strong>모자이크 또는 색 채우기</strong>를 사용하세요. 블러는 보기에는 좋지만 보안성은 상대적으로 낮습니다.' },

    { type: 'glossary', items: [
        {
            term: '모자이크 (Pixelation)',
            definition: '영역을 균일한 색상 블록으로 나누어 해상도를 낮추는 방식입니다. 비가역적이며 AI 얼굴 인식에 대한 최대 방어 수단입니다.'
        },
        {
            term: '가우시안 블러 (Gaussian Blur)',
            definition: '정규 분포에 기반한 수학적 평활화 기법입니다. 이론적으로는 복구가 가능하지만 실제로는 매우 어렵습니다.'
        },
        {
            term: '색 채우기 (Solid Cover)',
            definition: '균일한 색상의 불투명 블록입니다. 최고의 보안과 법적 프라이버시를 제공하지만 시각적으로는 투박할 수 있습니다.'
        },
        {
            term: 'TinyFaceDetector',
            definition: '얼굴 감지를 위한 경량 합성곱 신경망(CNN)입니다. 외부 서버 없이 브라우저 내에서 직접 실행됩니다.'
        },
        {
            term: '프라이버시 설계 (Privacy by Design, PbD)',
            definition: '프라이버시를 나중에 추가하는 것이 아니라 시스템 설계 단계부터 통합하는 접근 방식입니다. 당사의 로컬 처리 방식이 이에 해당합니다.'
        }
    ] },

    { type: 'message', title: '사용자가 제어하는 프라이버시', ariaLabel: '개인정보 보호 정보', html: '당사는 사용자의 사진을 외부 서버에 저장하거나 처리하지 않습니다. 추적용 쿠키도, 편집 내역도 없습니다. 당사는 사용자의 이미지를 볼 수 없으므로 무엇을 숨겼는지 알지 못합니다. 완전한 통제, 완전한 프라이버시, 완전한 자유를 누리세요.' },

    { type: 'title', text: 'SNS에 안전하게 공유하기', level: 3 },
    { type: 'paragraph', html: '인터넷에 사진을 올리기 전 스스로에게 물어보세요. "공개하고 싶지 않은 정보가 포함되어 있나요?" 아이의 얼굴, 번호판, 주소, 문서 번호 등. 지금 2분만 프라이버시 관리에 투자하면 장래의 문제를 예방할 수 있습니다.' }
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

export const content: PrivacyBlurLocaleContent = {
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
