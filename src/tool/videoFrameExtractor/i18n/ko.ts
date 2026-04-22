import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { VideoFrameExtractorUI, VideoFrameExtractorLocaleContent } from '../index';

const slug = 'online-video-frame-extractor-capture-hd-stills';
const title = '비디오 프레임 추출기: HD 스틸 이미지 캡처';
const description = '비디오에서 개별 이미지를 프레임 단위의 정밀도로 추출하세요. 완벽한 순간을 HD 화질로 로컬에서 무료로 안전하게 캡처합니다.';

const ui: VideoFrameExtractorUI = {
    uploadTitle: "비디오 파일 업로드",
    uploadFormats: "MP4, WebM, MOV 또는 MKV (최대 500MB)",
    privacyNote: "비디오는 인터넷에 업로드되지 않으며 브라우저 내에서 로컬로 처리됩니다.",
    playLabel: "재생",
    pauseLabel: "일시정지",
    captureBtn: "프레임 캡처",
    prevFrame: "-1F",
    nextFrame: "+1F",
    batchTitle: "자동 추출",
    batchEvery: "간격:",
    batchStart: "시퀀스 시작",
    batchProcessing: "추출 중...",
    galleryTitle: "캡처된 프레임",
    galleryEmpty: "캡처한 이미지가 여기에 표시됩니다.",
    downloadAll: "모두 다운로드",
    downloadHD: "HD 이미지 다운로드",
    resetBtn: "다른 비디오 업로드"
};

const faq: VideoFrameExtractorLocaleContent['faq'] = [
    {
        question: "긴 비디오에서도 프레임을 추출할 수 있나요?",
        answer: "네, 브라우저에 비디오를 로드할 수 있는 충분한 RAM이 있다면 가능합니다. 원활한 성능을 위해 500MB 이하의 파일을 권장합니다.",
    },
    {
        question: "캡처된 이미지는 어떤 해상도로 저장되나요?",
        answer: "원본 비디오의 네이티브 해상도로 캡처됩니다. 비디오가 4K라면 고화질 4K 이미지를 얻을 수 있습니다.",
    },
];

const howTo: VideoFrameExtractorLocaleContent['howTo'] = [
    {
        name: "비디오 업로드",
        text: "기기에서 비디오 파일을 선택합니다. 서버로 업로드되지 않고 로컬에서 처리됩니다.",
    },
    {
        name: "정확한 순간으로 이동",
        text: "타임라인 바나 ±1 프레임 버튼을 사용하여 정밀하게 프레임을 조정하세요.",
    },
    {
        name: "프레임 캡처",
        text: "캡처 버튼을 눌러 아래 갤러리에 해당 순간을 저장합니다.",
    },
    {
        name: "고화질 다운로드",
        text: "개별 이미지 또는 전체 세션을 최적화된 WebP 형식으로 다운로드합니다.",
    },
];

const seo: VideoFrameExtractorLocaleContent['seo'] = [
    {
        type: 'summary',
        title: '전문 비디오 프레임 추출 도구',
        items: [
            '완벽한 순간을 포착하는 단일 프레임 정밀도(±1 프레임)',
            'MP4, WebM, MOV, MKV 지원(최대 500MB)',
            '원본 비디오 해상도 유지(SD, HD, 4K 지원)',
            '사용자 지정 간격의 자동 일괄 추출 기능'
        ]
    },
    { type: 'title', text: '프레임 추출: 비디오의 한 순간을 멈추다', level: 2 },
    { type: 'paragraph', html: '때로는 사진 한 장이 천 마디 말보다 큰 의미를 가집니다. 전문 소프트웨어 없이 브라우저의 로컬 성능만으로 정밀한 프레임을 추출하세요.' },

    { type: 'stats', items: [
        { value: '±1', label: '단일 프레임 정밀도', icon: 'mdi:target' },
        { value: '100%', label: '원본 해상도 유지', icon: 'mdi:video-high-definition' },
        { value: '500MB', label: '지원 파일 용량', icon: 'mdi:file-video' }
    ], columns: 3 },

    { type: 'title', text: '주요 활용 사례', level: 3 },
    { type: 'comparative', items: [
        {
            title: '영화 및 사진',
            description: '시각적 참조 또는 구도 확인을 위한 프레임 캡처',
            icon: 'mdi:film',
            points: [
                '마케팅용 스틸 이미지 추출',
                '장면 구도 레퍼런스 확보',
                '프레임 단위 정밀 분석'
            ]
        },
        {
            title: '디지털 콘텐츠',
            description: 'SNS용 썸네일 및 커버 이미지 제작',
            icon: 'mdi:youtube',
            points: [
                '고해상도 유튜브 썸네일 제작',
                'SNS 커버 및 홍보 이미지',
                '프레젠테이션용 시각 자료'
            ],
            highlight: true
        },
        {
            title: '기술 문서 및 교육',
            description: '튜토리얼 비디오에서 단계별 이미지 추출',
            icon: 'mdi:book-open',
            points: [
                '조작법 단계별 캡처 이미지',
                '시각화된 가이드라인 제작',
                '실시간 동작 분석'
            ]
        },
        {
            title: '스포츠 및 액션',
            description: '결정적인 동작의 순간 포착',
            icon: 'mdi:dumbbell',
            points: [
                '스포츠 기술 프레임 분석',
                '최고의 순간 캡처',
                '동작 연구용 자료'
            ]
        }
    ], columns: 2 },

    { type: 'title', text: '지원하는 비디오 포맷', level: 3 },
    { type: 'table', headers: ['포맷', '확장자', '호환성', '참고'], rows: [
        ['MPEG-4', 'MP4', '보편적 지원 (100%)', '가장 널리 사용되는 압축 방식'],
        ['WebM', 'WebM', '최신 브라우저', '우수한 압축률 및 적은 용량'],
        ['QuickTime', 'MOV', 'Safari 및 일부 플레이어', 'Apple 표준 방식'],
        ['Matroska', 'MKV', '최신 브라우저', '유연한 컨테이너 방식']
    ] },

    { type: 'card', title: '단일 프레임 정밀 제어', html: '한 프레임씩 앞뒤로 이동(±1 프레임)하는 기능은 완벽한 순간(점프, 미소, 제스처 등)을 포착하는 데 필수적입니다. 저희 도구는 밀리미터 단위의 정밀한 제어를 제공합니다.' },

    { type: 'proscons', items: [
        {
            pro: '완벽한 개인정보 보호: 비디오는 브라우저 로컬에서만 처리됨',
            con: '기기의 가용 RAM 용량에 제한을 받음(약 500MB 권장)'
        },
        {
            pro: '원본 해상도 유지: 재압축 없이 SD, HD, 4K 고화질 유지',
            con: 'HTML5 Video를 지원하는 최신 브라우저 필요'
        },
        {
            pro: '사용자 지정 간격 자동 일괄 추출 기능',
            con: '편집(컷, 병합) 작업은 별도 편집기 필요'
        },
        {
            pro: '최적화된 WebP 또는 원본 PNG 형식 저장 지원',
            con: '자동 GIF 애니메이션 생성 기능은 비포함'
        }
    ], proTitle: '장점', conTitle: '제한 사항' },

    { type: 'diagnostic', variant: 'info', title: '해상도 및 프레임 속도', icon: 'mdi:information', badge: '기술 정보', html: '최종 추출물 해상도는 원본 비디오에 따릅니다. 업스케일링 없이 원본 정보 그대로를 보존합니다.' },

    { type: 'glossary', items: [
        {
            term: '프레임 (Frame)',
            definition: '비디오 시퀀스를 구성하는 개별 정지 영상. 24fps 비디오는 초당 24개의 프레임을 포함함.'
        },
        {
            term: 'FPS (초당 프레임 수)',
            definition: '초당 프레임 개수. 영상의 부드러움을 결정함.'
        },
        {
            term: '비디오 코덱',
            definition: '압축 알고리즘 (H.264, VP9, HEVC 등). 파일 크기와 화질을 결정함.'
        },
        {
            term: '비트레이트 (Bitrate)',
            definition: '초당 처리되는 데이터 양. 높을수록 고화질을 보장함.'
        },
        {
            term: '비디오 해상도',
            definition: '픽셀 크기 (720p, 1080p, 4K, 8K 등).'
        }
    ] },

    { type: 'message', title: '전문적인 프레임 추출 경험', ariaLabel: '비디오 추출 기술 정보', html: '복잡한 온라인 변환기나 고가의 소프트웨어가 필요 없습니다. 업로드, 이동, 캡처 - 단 세 번의 클릭으로 완벽한 스틸 이미지를 얻으세요.' },

    { type: 'title', text: '비디오의 순간을 영원히 기록하세요', level: 3 },
    { type: 'paragraph', html: '모든 비디오에는 수백 개의 프레임이 있습니다. 품질 저하 없이 프레임을 추출하여 소중한 순간을 완벽하게 소장해 보세요.' }
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

export const content: VideoFrameExtractorLocaleContent = {
    slug,
    title,
    description,
    ui,
    seo,
    faq,
    faqTitle: '비디오 프레임 추출에 관한 자주 묻는 질문',
    bibliography: '비디오 캡처 기술 표준',
    howTo,
    schemas: [faqSchema as any, howToSchema as any, appSchema],
};
