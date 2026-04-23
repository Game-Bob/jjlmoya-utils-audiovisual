import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ChromaticLensUI, ChromaticLensLocaleContent } from '../index';

const slug = 'chromatic-lens-color-palette-extraction-online';
const title = 'Chromatic Lens: 온라인 컬러 팔레트 추출';
const description = '어떤 이미지에서든 전문적인 컬러 팔레트를 무료로 추출하세요. 수학적 알고리즘을 사용하여 사진 속 지배적인 색상을 식별합니다.';

const ui: ChromaticLensUI = {
    dropTitle: "색상 분석",
    dropSubtitle: "이미지를 드래그하여 색채 DNA를 추출하세요.",
    processingLabel: "팔레트 추출 중...",
    paletteTitle: "추출된 팔레트",
    copyLabel: "HEX 복사",
    copiedLabel: "복사 완료!",
    colorCountLabel: "색상 수",
    changeImage: "이미지 변경",
};

const faq: ChromaticLensLocaleContent['faq'] = [
    {
        question: "색상 추출은 어떻게 작동하나요?",
        answer: "RGB 색 공간에서의 근접성에 따라 이미지 픽셀을 그룹화하여 가장 대표적인 톤을 찾는 '메디안 컷(Median Cut)' 알고리즘을 사용합니다.",
    },
    {
        question: "디자인 에디터로 색상을 복사할 수 있나요?",
        answer: "네, 각 색상을 클릭하면 HEX 코드가 자동으로 클립보드에 복사되어 Photoshop, Figma 또는 CSS에 바로 붙여넣을 수 있습니다.",
    },
    {
        question: "어떤 유형의 이미지를 분석할 수 있나요?",
        answer: "모든 JPG, PNG 또는 WebP 파일을 분석할 수 있습니다. 처리는 로컬에서 이루어지므로 대용량 이미지도 네트워크 데이터 소모 없이 빠르게 분석됩니다.",
    },
];

const howTo: ChromaticLensLocaleContent['howTo'] = [
    {
        name: "이미지 업로드",
        text: "색채적 영감을 얻고 싶은 사진을 업로드하세요.",
    },
    {
        name: "정밀도 조절",
        text: "도구가 식별할 지배적 색상의 수(3~12개)를 선택하세요.",
    },
    {
        name: "결과 분석",
        text: "해당 16진수(HEX) 코드와 함께 팔레트가 즉시 나타납니다.",
    },
    {
        name: "복사 및 사용",
        text: "톤을 클릭하여 저장하고 디자인 프로젝트에 적용하세요.",
    },
];

const seo: ChromaticLensLocaleContent['seo'] = [
    {
        type: 'summary',
        title: '지능형 컬러 팔레트 추출',
        items: [
            '색상 분석을 위한 전문적인 메디안 컷 알고리즘',
            '모든 이미지에서 3~12개의 지배적 색상 추출',
            '클립보드로 직접 복사 가능한 HEX 코드',
            '100% 로컬 처리 - 크리에이티브 작업에 이상적'
        ]
    },
    { type: 'title', text: '컬러 팔레트 추출: 과학과 디자인', level: 2 },
    { type: 'paragraph', html: '영화 속 장면이 왜 그렇게 조화롭게 느껴지는지 궁금한 적이 있나요? 그것은 우연이 아니라 색채 이론이 적용된 결과입니다. Chromatic Lens를 사용하면 픽셀에서 직접 그 조화를 추출하여 디자인 프로젝트에서 사용할 수 있는 HEX 코드로 변환할 수 있습니다.' },

    { type: 'stats', items: [
        { value: '즉시', label: '색상 분석', icon: 'mdi:lightning-bolt' },
        { value: '100%', label: '로컬 개인정보 보호', icon: 'mdi:lock' },
        { value: 'RGB', label: '정밀한 색 공간', icon: 'mdi:palette' }
    ], columns: 3 },

    { type: 'title', text: '메디안 컷 알고리즘 설명', level: 3 },
    { type: 'paragraph', html: '지능형 팔레트 추출은 단순히 픽셀을 무작위로 샘플링하는 것이 아닙니다. 재귀적 분할 기법인 메디안 컷 알고리즘을 사용하여 충실한 재현을 보장합니다.' },
    { type: 'list', items: [
        '<strong>재귀적 분할:</strong> 이미지의 RGB \"컬러 큐브\"를 더 작은 박스로 재귀적으로 나눕니다.',
        '<strong>부피 균형:</strong> 각 파티션은 유사한 부피를 가진 동일한 색 공간의 픽셀들을 그룹화하려고 시도합니다.',
        '<strong>가중 평균:</strong> 각 박스의 결과 색상은 그 안에 포함된 모든 픽셀의 평균값이 됩니다.',
        '<strong>충실한 재현:</strong> 지배적인 색상은 단순한 샘플이 아니라 이미지의 실제 시각적 분위기를 반영합니다.'
    ], icon: 'mdi:check' },

    { type: 'card', title: '크리에이티브 워크플로우', html: '웹 개발자, UX/UI 디자이너, 디지털 아티스트 및 사진, 영화 또는 시각적 레퍼런스의 본질을 즉시 포착하여 인터페이스, 일러스트레이션 또는 브랜드 팔레트에 적용하려는 크리에이터에게 이상적입니다.' },

    { type: 'title', text: '디지털 디자인 활용 사례', level: 3 },
    { type: 'comparative', items: [
        {
            title: 'UX/UI 디자이너',
            description: '히어로 이미지에서 팔레트를 추출하여 화합된 인터페이스 제작',
            icon: 'mdi:palette',
            points: [
                '조화로운 배경색',
                '버튼 및 보조 요소',
                '자동으로 계산된 대비'
            ]
        },
        {
            title: '웹 개발자',
            description: '시각적 레퍼런스에서 바로 CSS 스타일시트 생성',
            icon: 'mdi:code-braces',
            points: [
                'HEX를 CSS로 직접 복사',
                'SCSS/CSS의 컬러 변수 활용',
                '사전 디자인 없이도 일관된 테마'
            ],
            highlight: true
        },
        {
            title: '디지털 아티스트 및 일러스트레이터',
            description: '영화, 자연 또는 예술에서 색채 레퍼런스 포착',
            icon: 'mdi:brush',
            points: [
                '거장의 작품에서 레퍼런스 팔레트 추출',
                '시네마틱 컬러 연구',
                '즉각적인 시각적 영감'
            ]
        },
        {
            title: '브랜딩 전문가',
            description: '가이드 사진을 기반으로 시각적 정체성 개발',
            icon: 'mdi:tag-multiple',
            points: [
                '이미지에서 브랜드 컬러 추출',
                '전문적인 색채 가이드 제작',
                '시각적 일관성 확보'
            ]
        }
    ], columns: 2 },

    { type: 'title', text: '응용 색채 이론', level: 3 },
    { type: 'table', headers: ['색상 개념', '정의', '실질적 적용'], rows: [
        ['색채 조화', '시각적으로 균형 잡힌 색상 조합', 'UI의 일관된 시각적 정체성'],
        ['대비 (Contrast)', '색상 간의 밝기 차이', '가독성 및 시각적 계층 구조'],
        ['채도 (Saturation)', '톤의 색상 강도', '전문성(낮음) vs 에너지(높음)'],
        ['색 온도', '따뜻한 색(빨강) vs 차가운 색(파랑)', '디자인의 감성 심리학'],
        ['단색 팔레트', '단일 톤의 변형', '우아함과 미니멀리즘']
    ] },

    { type: 'proscons', items: [
        {
            pro: '추출 시 수학적 정밀함 - 대략적인 시각적 선택이 아님',
            con: '픽셀 수가 많을 경우 거의 보이지 않는 색상이 포함될 수 있음'
        },
        {
            pro: '클립보드 즉시 복사 - 워크플로우와의 완벽한 통합',
            con: 'Canvas API와 호환되는 최신 브라우저 필요'
        },
        {
            pro: '완벽한 개인정보 보호 - 데이터 전송 없는 100% 로컬 분석',
            con: '이전 분석 기록이 저장되지 않음'
        },
        {
            pro: '모든 디지털 이미지 형식과 호환',
            con: '최종 색상은 이미지 압축 및 품질에 따라 달라짐'
        }
    ], proTitle: '장점', conTitle: '제한 사항' },

    { type: 'diagnostic', variant: 'success', title: '현실적인 색상 재현', icon: 'mdi:check-circle-outline', badge: '고급 알고리즘', html: '단순히 무작위 픽셀을 샘플링하는 도구와 달리, 당사의 시스템은 각 톤의 전체 픽셀 수를 가중치로 두는 메디안 컷 알고리즘을 사용하여 추출된 팔레트가 원본 이미지의 시각적 분위기와 색채 심리를 충실히 반영하도록 합니다.' },

    { type: 'glossary', items: [
        {
            term: '메디안 컷',
            definition: 'RGB 공간을 박스로 재귀적으로 나누어 균등한 분포를 보장하는 컬러 양자화 알고리즘입니다. 역사적으로 GIF 및 인덱스 컬러 기술에서 사용되었습니다.'
        },
        {
            term: 'RGB 색 공간',
            definition: '빨강, 초록, 파랑을 기반으로 하는 컬러 모델입니다. 각 색상은 이 세 가지 값(0-255)의 조합으로 표현됩니다. 디지털 화면과 웹의 표준입니다.'
        },
        {
            term: 'HEX 코드',
          definition: '웹에서 색상을 나타내는 6자리 16진수 표기법(#RRGGBB)입니다: #FF0000(빨강), #00FF00(초록), #0000FF(파랑) 등. CSS, Figma, Adobe에서 공통적으로 사용됩니다.'
        },
        {
            term: '색 채도',
            definition: '색의 강도 또는 순도입니다. 높은 채도 = 선명한 색, 낮은 채도 = 회색조 색. 디자인의 감성적 인지에 영향을 미칩니다.'
        },
        {
            term: '색채 조화',
            definition: '시각적으로 즐거운 결과를 가져오는 색상의 선택과 조합입니다. 단색, 보색, 유사색, 3색 조합 등이 있습니다.'
        }
    ] },

    { type: 'message', title: '전문적인 색채 분석', ariaLabel: '색채 분석에 관한 기술 정보', html: 'Chromatic Lens는 수동적인 시각 분석을 알고리즘적 정밀함으로 변환합니다. 단순히 색상을 추출하는 것이 아니라 이미지의 감성적, 시각적 본질을 포착하여 바로 사용할 수 있는 HEX 코드로 클립보드에 전달합니다. 완전한 개인정보 보호와 분석량 제한 없는 자유를 누리세요.' },

    { type: 'title', text: '시각적 영감으로부터의 디자인', level: 3 },
    { type: 'paragraph', html: '최고의 컬러 팔레트는 레퍼런스의 시각적 의도를 포착한 것입니다. Chromatic Lens는 관찰, 분석, 기록이라는 과거의 수동 프로세스를 자동화합니다. 이제 이미지를 드래그하기만 하면 몇 초 만에 전문적인 HEX 코드를 얻을 수 있습니다.' }
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

export const content: ChromaticLensLocaleContent = {
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
