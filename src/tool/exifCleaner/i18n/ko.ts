import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ExifCleanerUI, ExifCleanerLocaleContent } from '../index';

const slug = 'exif-metadata-cleaner-remove-gps-photo-privacy';
const title = 'EXIF 메타데이터 클리너: 사진에서 GPS 및 숨겨진 데이터 삭제';
const description = '공유하기 전 이미지에서 EXIF 메타데이터, GPS 좌표 및 카메라 사양을 삭제하는 무료 온라인 도구입니다. 100% 프라이빗: 인터넷에 사진을 업로드하지 않고 작동합니다.';

const ui: ExifCleanerUI = {
    dropTitle: "여기에 이미지를 드래그하세요",
    dropSubtitle: "GPS 메타데이터, 카메라 모델 및 숨겨진 설정을 제거합니다.",
    dropLocalInfo: "100% 로컬 처리. 클라우드에 아무것도 업로드되지 않습니다.",
    selectButton: "이미지 선택",
    processingText: "메타데이터 클리닝 중...",
    analysisCompleted: "분석 완료",
    downloadButton: "클린한 이미지 다운로드",
    resetButton: "다른 이미지 클리닝",
    privacyRiskTitle: "개인정보 위험 감지됨:",
    gpsLabel: "GPS:",
    gpsDetected: "감지됨",
    gpsNotFound: "찾을 수 없음",
    cameraLabel: "카메라:",
    softwareLabel: "소프트웨어:",
    dateLabel: "날짜:",
    otherTechnicalDetails: "기타 기술 세부 정보",
    noMetadataFound: "읽을 수 있는 EXIF 메타데이터를 찾을 수 없습니다.",
    alreadyCleanInfo: "이미지가 이미 깨끗할 수 있습니다.",
    previewLabel: "미리보기",
    faqTitle: "사진 개인정보 보호에 관한 자주 묻는 질문": "리소스 및 기술 EXIF 문서",
};

const faq: ExifCleanerLocaleContent['faq'] = [
    {
        question: "EXIF 메타데이터란 무엇인가요?",
        answer: "EXIF(Exchangeable Image File Format)는 카메라나 휴대폰이 모든 사진 내부에 저장하는 숨겨진 정보입니다. 정확한 날짜, 기기 모델, 촬영 설정(ISO, 조리개) 및 가장 중요하게는 사진이 촬영된 위치의 GPS 좌표가 포함됩니다.",
    },
    {
        question: "이 온라인 도구를 사용하는 것이 안전한가요?",
        answer: "네, 처리가 브라우저 내에서 100% 로컬로 이루어지기 때문입니다. 사진은 서버에 업로드되지 않으며, 클리닝은 기기의 메모리에서 직접 수행되므로 절대적인 개인정보 보호가 보장됩니다.",
    },
    {
        question: "클리너는 어떤 특정 데이터를 제거하나요?",
        answer: "모든 EXIF 태그(GPS, 카메라 브랜드, 일련번호), IPTC(저작권, 저자) 및 XMP(편집 이력)를 삭제합니다. 이미지는 시각적 픽셀만 보존된 '깨끗한' 상태가 됩니다.",
    },
    {
        question: "메타데이터 클리닝 시 화질이 저하되나요?",
        answer: "아니요. 파일의 기술 데이터 '헤더'만 제거합니다. 이미지 데이터(픽셀)는 동일하게 유지되므로 시각적 품질에는 전혀 영향을 미치지 않습니다.",
    },
];

const howTo: ExifCleanerLocaleContent['howTo'] = [
    {
        name: "이미지 선택",
        text: "사진을 드래그하거나 파일 탐색기에서 선택하세요. 한 번에 여러 장을 처리할 수 있습니다.",
    },
    {
        name: "현재 데이터 분석",
        text: "도구가 어떤 민감한 정보가 감지되었는지 보여줍니다(예: 'GPS 좌표 감지됨').",
    },
    {
        name: "처리 및 클리닝",
        text: "클리닝 버튼을 클릭하여 모든 메타데이터 태그를 즉시 제거하세요.",
    },
    {
        name: "안전한 사진 다운로드",
        text: "익명화되어 소셜 미디어에 안전하게 공유할 수 있게 된 새로운 버전의 이미지를 저장하세요.",
    },
];

const seo: ExifCleanerLocaleContent['seo'] = [
    {
        type: 'summary',
        title: 'EXIF 메타데이터 클리너: 개인정보 보호',
        items: [
            '사진에서 GPS 좌표 및 위치 정보를 즉시 제거',
            '카메라 모델, 일련번호 및 기술 정보 삭제',
            '100% 브라우저 기반 처리 - 이미지가 기기를 떠나지 않음',
            '화질 유지 - 숨겨진 데이터만 제거'
        ]
    },
    { type: 'title', text: '디지털 사진의 개인정보 보호 및 EXIF 메타데이터 가이드', level: 2 },
    { type: 'paragraph', html: '소셜 미디어에 사진을 올릴 때 얼마나 많은 개인정보가 공유되는지 생각해 본 적 있나요? EXIF 메타데이터는 <strong>보이지 않는 지문</strong>과 같아서 집 주소부터 카메라 장비 가격까지 모든 것을 드러낼 수 있습니다. 이 가이드는 개인정보를 효과적으로 보호하는 방법을 설명합니다.' },

    { type: 'stats', items: [
        { value: '100%', label: '프라이버시 - 로컬 처리', icon: 'mdi:shield-check' },
        { value: '0%', label: '서버 저장 데이터 없음', icon: 'mdi:database' },
        { value: '즉시', label: '메타데이터 제거', icon: 'mdi:lightning-bolt' }
    ], columns: 3 },

    { type: 'title', text: '사진 속에 숨겨진 정보는 무엇인가요?', level: 3 },
    { type: 'paragraph', html: '디지털 사진의 90% 이상에는 보안을 위협할 수 있는 민감한 정보가 포함되어 있습니다. 공개될 수 있는 데이터는 다음과 같습니다.' },
    { type: 'list', items: [
        '<strong>GPS 좌표:</strong> 촬영이 이루어진 정확한 위도와 경도(집, 직장, 자주 방문하는 장소).',
        '<strong>장비 식별:</strong> 카메라나 스마트폰의 제조사, 모델 및 일련번호(귀중한 정보).',
        '<strong>기술 설정:</strong> ISO, 조리개(f/), 노출 시간 및 초점 거리(특정 장비 식별 가능).',
        '<strong>정확한 날짜 및 시간:</strong> 일상 활동의 전체 타임라인.',
        '<strong>편집 이력:</strong> 사용된 소프트웨어, 편집 도구 및 최종 수정일.',
        '<strong>저작권 데이터:</strong> 사진가, 저작권 및 개인 메모.'
    ] },

    { type: 'title', text: '실제 보안 위험: 활용 사례', level: 3 },
    { type: 'comparative', items: [
        {
            title: '전문 사진가',
            description: '일련번호로 식별된 고가 장비의 도난 위험',
            icon: 'mdi:camera',
            points: [
                '절도범은 값비싼 장비를 가진 사진가를 찾음',
                'GPS는 소유자의 집 주소를 식별함',
                '일련번호는 다크웹에서의 재판매를 용이하게 함'
            ]
        },
        {
            title: '학부모 및 인플루언서',
            description: '극도로 위험: 자녀의 실시간 위치 노출',
            icon: 'mdi:alert',
            points: [
                '범죄자는 OSINT를 사용하여 위치를 추적함',
                '일상적인 동선이 파악될 수 있음',
                '스토킹 및 물리적 추적 위험'
            ],
            highlight: true
        },
        {
            title: '소셜 미디어 사용자',
            description: '개인 및 직업적 프라이버시 노출',
            icon: 'mdi:share-variant',
            points: [
                '사무실에서 올린 게시물은 직장 위치를 드러냄',
                '지오로케이션으로 대략적인 수입 추정 가능',
                '공개된 데이터로 타겟 프로파일링 가능'
            ]
        },
        {
            title: '여행자 및 노마드',
            description: '비어 있는 집의 도난 위험',
            icon: 'mdi:map',
            points: [
                '게시된 GPS는 여행 중 비어 있는 집을 나타냄',
                '장비 데이터는 범죄자를 유인함',
                '여행 기록은 일정과 패턴을 드러냄'
            ]
        }
    ], columns: 2 },

    { type: 'title', text: '도구 작동 방식', level: 3 },
    { type: 'list', items: [
        '<strong>1. 이미지 선택:</strong> 사진을 드래그하거나 선택기를 사용하세요. 한 번에 여러 장 처리가 가능합니다.',
        '<strong>2. 자동 분석:</strong> 도구가 존재하는 모든 메타데이터(GPS, 카메라 모델, 날짜 등)를 감지하고 표시합니다.',
        '<strong>3. 즉시 클리닝:</strong> 클릭 한 번으로 유해한 메타데이터를 100% 제거합니다.',
        '<strong>4. 안전한 다운로드:</strong> 위험 없이 소셜에 공유할 수 있는 익명화된 이미지를 받습니다.',
        '<strong>5. 잔여물 없음:</strong> 클린한 이미지는 원래의 시각적 품질을 모두 유지합니다.'
    ], icon: 'mdi:check' },

    { type: 'card', title: '프라이버시 기술', icon: 'mdi:shield-check', html: '이 도구는 <strong>브라우저의 Canvas API</strong>를 사용하여 이미지를 픽셀 단위로 깨끗하게 복사합니다. 이를 통해 다음을 보장합니다.<br><br>- 서버로 데이터가 전송되지 않음<br>- 이미지가 기기를 떠나지 않음<br>- 100% 익명 및 안전한 처리<br>- 초기 로드 후에는 인터넷 연결 없이도 사용 가능' },

    { type: 'title', text: '구체적으로 어떤 데이터가 제거되나요?', level: 3 },
    { type: 'table', headers: ['메타데이터 유형', '예시', '위험도'], rows: [
        ['EXIF (교환 가능)', 'GPS, ISO, 조리개, 셔터 속도, 카메라 모델', '치명적'],
        ['IPTC (출판)', '저작권, 저자, 키워드, 장면 위치', '높음'],
        ['XMP (XML)', '편집 이력, 사용 소프트웨어, 수정 사항', '중간'],
        ['기본 파일 데이터', '생성 날짜, 정확한 시간, 기기', '높음']
    ] },

    { type: 'proscons', items: [
        {
            pro: '완전한 프라이버시 - 100% 브라우저 기반 처리',
            con: 'JavaScript를 지원하는 최신 브라우저 필요'
        },
        {
            pro: '즉각적 - 사진 한 장 클리닝에 1초 미만 소요',
            con: '대용량 사진 처리는 구형 기기에서 느릴 수 있음'
        },
        {
            pro: '화질 저하 제로 - 기술 데이터만 제거, 픽셀은 보존',
            con: '이미지 편집(자르기, 회전 등)은 수행하지 않음'
        },
        {
            pro: '제한 없는 완전 무료 - 무제한 사진 처리 가능',
            con: '프리미엄 지원이나 클라우드 저장 공간 없음'
        }
    ], proTitle: '주요 장점', conTitle: '제한 사항' },

    { type: 'tip', title: '디지털 보안 팁', html: '소셜 네트워크에 게시하기 <strong>전에</strong> 사진을 클리닝하세요. 게시물을 삭제하더라도 메타데이터는 이미 검색 엔진이나 아카이브에 인덱싱되었을 수 있습니다. 예방이 최선입니다. 습관으로 만드세요. <br><br><em>사진 → EXIF 클리닝 → 게시</em>' },

    { type: 'diagnostic', variant: 'warning', title: '클리닝하지 않을 때의 실제 위험', icon: 'mdi:alert-circle', badge: '중대한 보안', html: '<strong>확인된 사례:</strong><br>- 자녀 사진을 올린 부모 - 범죄자가 GPS 추적<br>- 여행 중인 사진가 - 자리를 비운 사이 빈집 털이 발생<br>- 인플루언서 - 열성 팬에 의해 거주지 노출<br><br>과도한 걱정이 아닙니다. 2026년을 살아가는 기본적인 디지털 에티켓입니다.' },

    { type: 'glossary', items: [
        {
            term: 'EXIF',
            definition: 'Exchangeable Image File Format. 이미지 파일에 GPS, 카메라 데이터, 노출 설정과 같은 기술적 메타데이터를 저장하는 표준입니다. 사용자 의도와 상관없이 디지털 사진의 약 90%에 포함되어 있습니다.'
        },
        {
            term: 'GPS 좌표',
            definition: '사진이 촬영된 정확한 지점의 위도와 경도입니다. 소셜 미디어와 결합하면 인물의 물리적 추적이 가능해집니다.'
        },
        {
            term: 'IPTC',
            definition: 'International Press Telecommunications Council. 저작권, 저자, 키워드, 설명 등 읽기 가능한 출판 메타데이터입니다. 전문 사진 분야의 표준입니다.'
        },
        {
            term: 'XMP',
            definition: 'Extensible Metadata Platform. Lightroom이나 Photoshop 같은 소프트웨어에서의 편집 이력을 기록하는 XML 형식입니다. 수행된 모든 수정을 드러낼 수 있습니다.'
        },
        {
            term: 'OSINT',
            definition: 'Open Source Intelligence(오픈 소스 인텔리전스). 소셜 미디어, 메타데이터, 기록 등 공개된 정보를 수집하여 본인 모르게 인물 프로파일링을 수행하는 기법입니다.'
        },
        {
            term: '디지털 익명화',
            definition: '위치, 기기, 행동 패턴과 같은 식별 가능한 정보를 제거하거나 가리는 프로세스입니다. 온라인 개인정보 보호에 필수적입니다.'
        }
    ] },

    { type: 'message', title: '개인정보 보호는 당신의 책임입니다', ariaLabel: '개인정보 및 데이터 권리에 관한 정보', html: '당사는 귀하의 이미지를 저장, 처리 또는 공유하지 않습니다. <strong>귀하가 모든 권한을 갖습니다.</strong> 모든 작업은 브라우저에서만 이루어집니다. 이 탭을 닫으면 활동 기록이 남지 않습니다. 이것이 인터넷에서 프라이버시를 지키는 방법입니다. 귀하의 데이터를 존중하는 도구를 사용하세요.' },

    { type: 'title', text: '결론: 흔적 없이 공유하세요', level: 3 },
    { type: 'paragraph', html: '디지털 정체성을 보호하는 것은 작은 디테일에서 시작됩니다. 게시 전 사진을 클리닝하는 것은 2026년의 <strong>필수적인 디지털 위생 습관</strong>입니다. 이는 단순한 위치 정보뿐만 아니라 가족, 자산, 전문적인 프라이버시를 보호합니다. 아무런 해가 없어 보이는 사진 한 장이 당신에 대해 상상 이상의 많은 것을 드러낼 수 있습니다.' }
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

export const content: ExifCleanerLocaleContent = {
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
