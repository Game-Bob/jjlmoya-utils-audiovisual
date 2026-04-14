import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ImageCompressorUI, ImageCompressorLocaleContent } from '../index';

const slug = 'online-image-compressor-reduce-file-size-no-quality-loss';
const title = '온라인 이미지 압축기: 품질 저하 없이 파일 용량 감소';
const description = 'JPG, PNG 및 WebP 사진을 무료로 최적화하고 압축하세요. 파일 크기를 줄여 로컬에서 웹 로딩 속도를 향상시킵니다.';

const ui: ImageCompressorUI = {
    dropTitle: "이미지 최적화",
    dropSubtitle: "사진을 드래그하여 즉시 용량을 줄이세요.",
    settingsTitle: "압축 설정",
    qualityLabel: "시각적 품질",
    widthLabel: "최대 너비 (픽셀)",
    convertToWebpLabel: "WebP로 변환",
    compressionLabel: "압축",
    compressBtn: "이미지 압축",
    processingLabel: "처리 중...",
    resultsTitle: "최적화된 이미지",
    originalSizeLabel: "원본 크기",
    newSizeLabel: "새 크기",
    reductionLabel: "절감액",
    downloadBtn: "다운로드",
    addMoreBtn: "추가하기",
    browseFilesBtn: "파일 찾기",
    processedFilesTitle: "처리된 파일",
    downloadAllBtn: "모두 다운로드",
    adjustThisImage: "이 이미지 조정",
    downloadTitle: "다운로드",
    maxWidthLabel: "최대 너비 (px)",
    closeBtn: "닫기",
    totalSavingsLabel: "총 절감량",
    noSavings: "순 절감액 없음",
    faqTitle: "자주 묻는 질문",
    bibliographyTitle: "참고 문헌"
};

const faq: ImageCompressorLocaleContent['faq'] = [
    {
        question: "무손실 압축은 어떻게 작동하나요?",
        answer: "불필요한 메타데이터를 제거하고 픽셀 인코딩을 최적화하는 알고리즘을 사용합니다. WebP를 선택하면 기존 형식보다 더 발전된 압축 기술이 사용됩니다.",
    },
    {
        question: "제 이미지가 서버에 업로드되나요?",
        answer: "아니요. 모든 처리는 브라우저에서 100% 이루어집니다 (Client-Side). 사진은 컴퓨터를 떠나지 않으므로 절대적인 프라이버시가 보장됩니다.",
    },
    {
        question: "왜 WebP로 변환해야 하나요?",
        answer: "WebP는 웹을 위한 현대적인 표준 형식입니다. JPG 및 PNG보다 우수한 품질을 제공하면서도 용량은 최대 30% 적어 페이지 로딩 속도를 높여줍니다.",
    },
];

const howTo: ImageCompressorLocaleContent['howTo'] = [
    {
        name: "이미지 업로드",
        text: "압축하려는 파일(JPG, PNG 또는 WebP)을 업로드하세요.",
    },
    {
        name: "품질 조정",
        text: "슬라이더를 사용하여 파일 크기와 시각적 품질 사이의 완벽한 균형을 찾으세요(권장: 75 85%).",
    },
    {
        name: "크기 조정 (선택 사항)",
        text: "이미지가 매우 큰 경우 최대 너비를 지정하여 해상도를 줄일 수 있습니다.",
    },
    {
        name: "결과 다운로드",
        text: "다운로드 버튼을 눌러 바로 사용할 수 있는 최적화된 이미지를 받으세요.",
    },
];

const bibliography: ImageCompressorLocaleContent['bibliography'] = [
    {
        name: "WebP: 웹을 위한 이미지 형식",
        url: "https://developers.google.com/speed/webp",
    },
    {
        name: "SEO를 위한 이미지 최적화의 중요성",
        url: "https://developers.google.com/search/docs/appearance/google-images",
    },
];

const seo: ImageCompressorLocaleContent['seo'] = [
    {
        type: 'summary',
        title: '전문적인 웹 이미지 최적화',
        items: [
            '지능형 JPG, PNG 및 WebP 압축',
            '시각적 품질을 유지하면서 용량 50-80% 감소',
            '100% 로컬 처리 - 개인정보 보호 보장',
            'Core Web Vitals 및 SEO 순위 향상'
        ]
    },
    { type: 'title', text: '이미지 최적화: 웹 속도 및 Core Web Vitals', level: 2 },
    { type: 'paragraph', html: '디지털 즉각성의 시대에 느린 웹사이트는 사용자를 잃습니다. 최적화되지 않은 이미지는 웹 페이지 전체 용량의 60-70%를 차지합니다. 이미지를 최적화하는 것은 Google 메트릭(LCP, CLS)과 검색 결과 순위를 향상시키는 첫 번째 단계입니다.' },

    { type: 'stats', items: [
        { value: '50-80%', label: '일반적인 용량 감소', icon: 'mdi:trending-down' },
        { value: '100%', label: '로컬 프라이버시', icon: 'mdi:lock' },
        { value: '+30%', label: 'JPG보다 빠름', icon: 'mdi:speedometer' }
    ], columns: 3 },

    { type: 'title', text: '압축 형식 설명', level: 3 },
    { type: 'table', headers: ['형식', '압축 방식', '활용 사례', '호환성'], rows: [
        ['JPEG', '손실 압축 50-90%', '카메라 사진, 편집 콘텐츠', '유니버설 (100%)'],
        ['PNG', '무손실 압축 30-50%', '그래픽, 로고, 투명도', '유니버설 (100%)'],
        ['WebP', '손실/무손실 25-35% 추가 절감', '현대식 웹, 소셜 네트워크', '95% 현대식 브라우저'],
        ['AVIF', '손실/무손실 20% 향상', '차세대 웹', '최신 브라우저 전용']
    ] },

    { type: 'card', title: 'WebP가 미래인 이유', html: 'Google은 웹을 위해 특별히 WebP를 개발했습니다. JPEG 및 PNG보다 우수한 압축률을 제공하면서 시각적 품질을 유지하거나 향상시킵니다. 동일한 JPEG보다 25-35% 작습니다. 현대식 브라우저의 95%가 이를 지원합니다.' },

    { type: 'title', text: '손실 압축 vs 무손실 압축', level: 3 },
    { type: 'comparative', items: [
        {
            title: '손실 압축 (Lossy)',
            description: 'JPG, WebP - 인지할 수 없는 시각 정보를 제거',
            icon: 'mdi:compress',
            points: [
                '원본 용량의 70-90% 감소',
                '품질이 75% 이상 유지되면 육안으로 식별 불가',
                '사실적인 사진에 이상적',
                '로고나 선명한 텍스트에는 권장하지 않음'
            ],
            highlight: true
        },
        {
            title: '무손실 압축 (Lossless)',
            description: 'PNG, WebP 무손실 - 시각 데이터 100% 유지',
            icon: 'mdi:shield',
            points: [
                '용량 20-50% 감소',
                '완벽한 품질, 저하 없음',
                '그래픽, 로고, 투명도에 이상적',
                '손실 압축보다 파일이 무거움'
            ]
        }
    ], columns: 2 },

    { type: 'title', text: 'SEO 및 전환율에 미치는 영향', level: 3 },
    { type: 'list', items: [
        '<strong>Core Web Vitals:</strong> Google은 느린 사이트에 불이익을 줍니다. 최적화된 이미지는 LCP(Largest Contentful Paint)를 직접 개선합니다.',
        '<strong>이탈률:</strong> 1초의 지연마다 이탈률 7% 증가. 빠른 이미지는 이탈 사용자를 줄여줍니다.',
        '<strong>검색 순위:</strong> 속도는 순위 결정 요소입니다. 이미지 최적화는 순위를 높여줍니다.',
        '<strong>전환율:</strong> 빠른 로딩 시간은 더 많은 전환으로 이어집니다. 연구에 따르면 최적화를 통해 전환율이 10% 향상됩니다.'
    ], icon: 'mdi:check' },

    { type: 'proscons', items: [
        {
            pro: '완전한 프라이버시: 100% 로컬 처리, 클라우드 서버 없음',
            con: 'Canvas API 지원 브라우저 필요 (범용적임)'
        },
        {
            pro: 'WebP는 동일 품질에서 JPEG보다 25-35% 작음',
            con: '구형 Safari 및 IE는 WebP 미지원 (대체 수단 제공)'
        },
        {
            pro: '여러 이미지 즉시 처리',
            con: '매우 큰 이미지(50MB 이상)는 대기 시간이 필요할 수 있음'
        },
        {
            pro: '선택적 크기 조정: 압축과 더불어 해상도 감소 가능',
            con: '크기 조정은 정보를 잃음 - 원본에서 해상도를 최적화하는 것이 가장 좋음'
        }
    ], proTitle: '장점', conTitle: '제한 사항' },

    { type: 'diagnostic', variant: 'warning', title: '주의: 과도한 압축은 품질 저하를 초래', icon: 'mdi:alert', badge: '품질', html: '사진의 경우 품질 >75%, 편집 콘텐츠의 경우 >85%를 유지하세요. 그 미만에서는 압축 아티팩트(얼룩, 밴딩 현상)가 보일 수 있습니다. 미리보기에서 좋아 보이는 이미지가 크게 보면 나빠 보일 수 있습니다.' },

    { type: 'glossary', items: [
        {
            term: '손실 압축 (Lossy)',
            definition: '인간의 눈이 \"노이즈\"로 인식하는 시각 데이터를 제거합니다. 사진에 이상적입니다. JPEG, 손실 WebP, HEIC가 이에 해당합니다.'
        },
        {
            term: '무손실 압축 (Lossless)',
            definition: '시각 정보 손실 없이 크기를 줄입니다. PNG 및 무손실 WebP가 이에 해당합니다. 그래픽, 로고, 투명도에 이상적입니다.'
        },
        {
            term: 'Core Web Vitals (Google)',
            definition: '사용자 경험 지표: LCP(로딩 속도), FID(상호작용 지연), CLS(시각적 안정성). SEO 순위에 영향을 미칩니다.'
        },
        {
            term: 'WebP',
            definition: 'Google에서 개발한 형식. JPEG보다 25-35% 작음. 구형 IE를 제외한 현대식 브라우저의 95%에서 지원.'
        },
        {
            term: '압축 아티팩트 (Artifacts)',
            definition: '과도한 압축으로 인한 시각적 결함: 얼룩, 색상 밴딩, 흐릿한 가장자리. 품질 75% 이상에서는 거의 보이지 않음.'
        }
    ] },

    { type: 'message', title: '전문적인 웹 최적화', ariaLabel: 'SEO를 위한 이미지 최적화 정보', html: '단순한 기술적 허영심이 아닙니다. 이미지를 압축하는 것은 사용자 경험과 Google 순위에 대한 직접적인 투자입니다. 모바일에서는 모든 킬로바이트가 중요합니다. 당사 도구는 전문 소프트웨어($$$)가 필요했던 작업을 클릭 3번으로 끝나는 무료 프로세스로 바꿔줍니다.' },

    { type: 'title', text: '현대적인 웹을 위한 준비', level: 3 },
    { type: 'paragraph', html: '지능형 압축과 WebP 형식을 사용하여 온라인 인지도를 빠르고 반응적이며 검색 경쟁력 있게 만드세요. 전문적인 품질, 최소 용량, 즉각적인 로딩.' }
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

export const content: ImageCompressorLocaleContent = {
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
