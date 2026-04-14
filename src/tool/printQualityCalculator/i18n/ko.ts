import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { PrintQualityCalculatorUI, PrintQualityCalculatorLocaleContent } from '../index';

const slug = 'print-quality-calculator-pixels-to-cm-dpi';
const title = '인쇄 품질 계산기: 픽셀을 CM 및 DPI로 변환';
const description = '사진의 해상도를 바탕으로 최대 인쇄 크기를 계산합니다. 픽셀을 센티미터와 인치로 변환하여 전문적인 인쇄 품질을 보장하세요.';

const ui: PrintQualityCalculatorUI = {
    dropTitle: "해상도 분석",
    dropSubtitle: "이미지를 드래그하여 인쇄 크기를 계산하세요.",
    resultsTitle: "파일 사양",
    dpiDensityLabel: "원하는 인쇄 밀도 (DPI)",
    dpiPointsLabel: "인치당 도트 수",
    maxPrintTitle: "최대 인쇄 크기",
    standardFormatsTitle: "지원되는 표준 형식",
    formatColumn: "형식",
    measureColumn: "치수",
    supportColumn: "지원 여부",
    qualityExcellent: "최상급 품질",
    qualityGood: "우수한 품질",
    qualityFair: "화면용 품질",
    qualityPoor: "적합하지 않음",
    qualityExcellentDesc: "미술 잡지, 사진집 및 근접 감상용으로 이상적입니다.",
    qualityGoodDesc: "포스터 및 중간 거리 감상용으로 충분합니다.",
    qualityFairDesc: "디지털 감상 또는 멀리 떨어진 광고판용으로 적합합니다.",
    qualityPoorDesc: "이미지가 픽셀화되어 보입니다. 인쇄를 권장하지 않습니다.",
    unitCm: "cm",
    unitInches: "인치",
    dpiScreenLabel: "화면",
    dpiNewspaperLabel: "신문",
    dpiPrintLabel: "일반 인쇄",
    dpiFineArtLabel: "파인 아트",
    formatPostal: "엽서",
    formatQuartilla: "4절지",
    formatFolio: "폴리오",
    formatDoubleFolio: "더블 폴리오",
    formatSmallPoster: "소형 포스터",
    formatLargePoster: "대형 포스터",
    formatPlane: "도면",
    supportedText: "예 (충족)",
    notSupportedPrefix: "아니요 (",
    invalidImageError: "유효한 이미지를 선택하세요",
    faqTitle: "자주 묻는 질문",
    bibliographyTitle: "참고 문헌"
};

const faq: PrintQualityCalculatorLocaleContent['faq'] = [
    {
        question: "DPI란 무엇이며 왜 중요한가요?",
        answer: "DPI(Dots Per Inch)는 프린터가 직선 1인치에 찍는 잉크 점의 수를 나타냅니다. DPI가 높을수록 이미지가 더 선명해지지만, 픽셀이 덮을 수 있는 총 물리적 크기는 작아집니다.",
    },
    {
        question: "사진 인쇄에 가장 적합한 DPI는 얼마인가요?",
        answer: "우수한 사진 품질을 위한 산업 표준은 300 DPI입니다. 멀리서 보게 될 대형 인쇄물의 경우 150 DPI로도 충분할 수 있습니다.",
    },
    {
        question: "이미지의 품질 저하 없이 DPI를 높일 수 있나요?",
        answer: "아니요. 픽셀을 변경하지 않고 DPI만 높이면 인쇄 크기가 줄어들 뿐입니다. 소프트웨어를 사용하여 픽셀을 '생성'하는 방식(업스케일링)은 이미지를 흐릿하게 만들 수 있습니다.",
    },
];

const howTo: PrintQualityCalculatorLocaleContent['howTo'] = [
    {
        name: "이미지 업로드",
        text: "인쇄하려는 사진을 업로드하여 픽셀 단위의 치수를 확인하세요.",
    },
    {
        name: "DPI 조정",
        text: "슬라이더를 움직여 도트 밀도(72~600 DPI)에 따라 최종 크기가 어떻게 변하는지 확인하세요.",
    },
    {
        name: "형식 확인",
        text: "표준 형식 표(A4, A3 등)를 참고하여 해상도가 원하는 종이 크기를 충족하는지 확인하세요.",
    },
    {
        name: "품질 확인",
        text: "인쇄를 맡기기 전에 표시기에 '최상급 품질'이 뜨는지 확인하세요.",
    },
];

const bibliography: PrintQualityCalculatorLocaleContent['bibliography'] = [
    {
        name: "국제 종이 크기 (ISO 216)",
        url: "https://www.iso.org/standard/36631.html",
    },
    {
        name: "이미지 해상도 가이드 - Adobe",
        url: "https://www.adobe.com/kr/creativecloud/photography/discover/image-resolution.html",
    },
];

const seo: PrintQualityCalculatorLocaleContent['seo'] = [
    {
        type: 'summary',
        title: '전문적인 인쇄 해상도 계산',
        items: [
            '픽셀을 센티미터와 인치로 정확하게 변환',
            '원하는 DPI에 따른 최대 크기 계산',
            '표준 형식(A4, A3 등)과의 호환성 확인',
            '최상급부터 부적합까지 4단계 품질 가이드'
        ]
    },
    { type: 'title', text: '인쇄 품질 및 DPI에 관한 결정판 가이드', level: 2 },
    { type: 'paragraph', html: '사진을 인쇄했을 때 이미지가 흐릿하거나 픽셀이 깨져 보인 적이 있나요? 그 비밀은 <strong>픽셀</strong>과 <strong>DPI</strong>(Dots Per Inch) 사이의 수학적 관계에 있습니다. 이 도구는 전문적인 품질을 유지하면서 이미지를 인쇄할 수 있는 정확한 최대 크기를 계산합니다.' },

    { type: 'stats', items: [
        { value: '300', label: '전문 표준 DPI', icon: 'mdi:target' },
        { value: '100%', label: '정확한 계산', icon: 'mdi:check' },
        { value: 'ISO 216', label: '표준 규격 지원', icon: 'mdi:file-document' }
    ], columns: 3 },

    { type: 'title', text: 'DPI 이해하기: 픽셀 vs 도트', level: 3 },
    { type: 'paragraph', html: 'DPI와 픽셀을 동일한 것으로 혼동하는 경우가 많지만, 그렇지 않습니다. 픽셀은 디지털 파일 \'안\'에 들어있는 데이터 양입니다. DPI는 프린터가 그것을 종이 위의 잉크로 어떻게 변환하는지를 나타냅니다.' },
    { type: 'list', items: [
        '<strong>DPI (Dots Per Inch):</strong> 프린터가 직선 1인치(2.54 cm)에 배치하는 잉크 점의 수.',
        '<strong>픽셀:</strong> 디지털 파일의 작은 데이터 사각형. 3000x2000 픽셀 사진은 DPI와 상관없이 고유한 정보량을 가집니다.',
        '<strong>계산 공식:</strong> 인쇄 크기(인치) = 픽셀 수 / DPI. 예: 3000 픽셀 / 300 DPI = 10 인치(25.4 cm)'
    ], icon: 'mdi:check' },

    { type: 'title', text: 'DPI 품질 단계 설명', level: 3 },
    { type: 'table', headers: ['DPI', '시각적 품질', '활용 사례', '감상 거리'], rows: [
        ['600+ DPI', '최상급 (완벽)', '미술 도록, 고급 잡지, 파인 아트 사진', '10cm 미만'],
        ['300-400 DPI', '최상급 (전문가용)', '사진, 서적, 기업 카탈로그', '20-30cm (손안)'],
        ['150-200 DPI', '우수 (일반 인쇄)', '포스터, 달력, 중간 거리 감상', '1-2미터'],
        ['72-100 DPI', '화면용 (보통)', '광고판, 멀리 있는 현수막', '5미터 이상'],
        ['10-30 DPI', '낮음 (부적합)', '거대 광고판, 매우 먼 거리 감상', '50미터 이상']
    ] },

    { type: 'card', title: '300 DPI의 황금률', html: '사진 및 전문 출판 인쇄의 경우 산업 표준은 <strong>300 DPI</strong>입니다. 이는 정상적인 감상 거리(20-30 cm)에서 사람의 눈이 개별 잉크 점을 인지하지 못하도록 보장합니다. 300 DPI 미만이 되면 픽셀 격자가 보이기 시작할 수 있습니다.' },

    { type: 'comparative', items: [
        {
            title: '손에 들고 보는 사진 (10x15 사진)',
            description: '300 DPI 필수 - 가까이서 감상',
            icon: 'mdi:image',
            points: [
                '3000x2000 픽셀 기준 ＝ 최대 10x6.7 인치',
                '최상의 품질 보장',
                '앨범 및 선물용 표준'
            ]
        },
        {
            title: '벽걸이 포스터 A3 (30x42 cm)',
            description: '150 DPI로 충분 - 떨어져서 감상',
            icon: 'mdi:wall-fire',
            points: [
                '1~2미터 거리에서 감상',
                '필요한 픽셀 수가 적음',
                '카메라 성능을 효율적으로 활용'
            ],
            highlight: true
        },
        {
            title: '대형 광고판 (200x300 cm)',
            description: '15-30 DPI - 아주 멀리서 감상',
            icon: 'mdi:sign',
            points: [
                '20미터 이상의 거리에서 관찰',
                '저해상도임에도 깨끗하게 보임',
                '대용량 파일 최적화'
            ]
        }
    ], columns: 3 },

    { type: 'title', text: '전문 인쇄를 위한 파일 준비', level: 3 },
    { type: 'proscons', items: [
        {
            pro: 'CMYK vs RGB: 프린터는 잉크(CMYK)를 사용하고 화면은 빛(RGB)을 사용합니다. 색상 왜곡을 피하려면 변환을 고려하세요.',
            con: '변환 시 색상이 변할 수 있으므로 반드시 미리보기를 확인하세요.'
        },
        {
            pro: '도련(Bleed): 이미지가 종이 끝까지 인쇄되어야 하는 경우 각 면에 3mm의 여유를 추가하세요.',
            con: '도련이 없으면 재단 시 가장자리에 흰색 선이 남을 수 있습니다.'
        },
        {
            pro: '업스케일링은 해결책이 아닙니다: 포토샵에서 픽셀을 늘리는 것은 가짜 정보를 추가하여 이미지를 뭉개뜨리는 것과 같습니다.',
            con: '크게 인쇄하려면 원본 고해상도 사진이 필요합니다.'
        },
        {
            pro: '형식: 사진에는 무압축 TIFF 또는 고품질 JPEG를 사용하고, 로고에는 벡터(AI, EPS)를 사용하세요.',
            con: '대부분의 인쇄소에서 PNG는 기본적으로 CMYK를 지원하지 않습니다.'
        }
    ], proTitle: '권장 사항', conTitle: '주의 사항' },

    { type: 'diagnostic', variant: 'warning', title: '흔한 실수: 업스케일링의 환상', icon: 'mdi:alert', badge: '중요', html: '<strong>픽셀 수를 바꾸지 않고 포토샵에서 DPI 설정값만 올리지 마세요.</strong> 72 DPI에서 300 DPI로 변경하는 것은 물리적인 인쇄 크기를 줄이는 것일 뿐입니다. 보간법을 통해 \'픽셀을 추가\'하면 이미지가 흐릿해 보이거나 뭉개집니다. 소스에서 제공하는 \'진짜 픽셀\'이 필요합니다.' },

    { type: 'glossary', items: [
        {
            term: 'DPI (Dots Per Inch)',
            definition: '인쇄 해상도 단위: 직선 1인치(2.54 cm)당 인크 점의 수. 300 DPI ＝ 제곱인치당 90,000개의 점.'
        },
        {
            term: 'CMYK',
            definition: '인쇄 시 사용되는 색 공간: 사이언, 마젠타, 옐로우, 블랙. 감산 혼합 방식의 잉크를 기반으로 합니다. 화면의 RGB(가산 혼합 빛)와는 다릅니다.'
        },
        {
            term: '도련 (Bleed)',
            definition: '재단 오차를 방지하기 위해 작업 사이즈 바깥쪽으로 그려지는 추가 영역(보통 3mm). 흰 여백 없이 이미지가 끝까지 인쇄되도록 합니다.'
        },
        {
            term: '네이티브 해상도',
            definition: '조작 없이 카메라가 포착한 실제 픽셀 수입니다. 픽셀 변경 없이 DPI 설정만 바꾼 것은 네이티브 해상도가 아닙니다.'
        },
        {
            term: '보간 (Interpolation)',
            definition: '기존 픽셀을 바탕으로 새로운 픽셀을 생성하는 알고리즘입니다. 약간의 확대에는 유용하지만, 무리한 확대 시 선명도가 떨어집니다.'
        }
    ] },

    { type: 'message', title: '전문적인 결과를 위한 기술적 정밀도', ariaLabel: '인쇄 계산에 관한 정보', html: '본 계산기는 국제 표준(종이의 ISO 216)을 고려하여 픽셀을 센티미터로 변환합니다. 단순한 계산기가 아니라, 해당 사진이 전문적인 품질을 유지하면서 해당 인쇄 크기에 적합한지 검증하는 도구입니다.' },

    { type: 'title', text: '결론: 실패 없는 인쇄를 위해', level: 3 },
    { type: 'paragraph', html: '성공적인 인쇄물과 실망스러운 결과물의 차이는 픽셀과 DPI의 관계를 이해하느냐에 달려 있습니다. 인쇄소에 가기 전에 이 계산기로 파일을 검증하세요. 이를 통해 불필요한 비용과 실망스러운 결과를 피할 수 있습니다.' }
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

export const content: PrintQualityCalculatorLocaleContent = {
    slug,
    title,
    description,
    ui,
    seo,
    faqTitle: "자주 묻는 질문",
    faq,
    bibliographyTitle: "참고 문헌",
    bibliography,
    howTo,
    schemas: [faqSchema as any, howToSchema as any, appSchema],
};
