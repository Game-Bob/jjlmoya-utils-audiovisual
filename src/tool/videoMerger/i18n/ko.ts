import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { VideoMergerUI, VideoMergerLocaleContent } from '../index';

const slug = 'merge-videos-online';
const title = '동영상 병합 온라인: 여러 동영상을 빠르고 무료로 합치기';
const description = '여러 동영상을 무료로 온라인에서 로컬로 하나로 병합하고 연결합니다. 워터마크 없음, 업로드 없음, 브라우저에서 100% 비공개로 처리됩니다.';

const ui: VideoMergerUI = {
    uploadTitle: "동영상 파일 업로드",
    uploadFormats: "여러 동영상을 드래그 앤 드롭하거나 클릭하여 선택하세요",
    privacyNote: "동영상은 100% 로컬에서 처리됩니다. 인터넷에 아무것도 업로드되지 않습니다.",
    addMoreBtn: "동영상 더 추가하기",
    mergeBtn: "지금 동영상 병합하기",
    mergingStatus: "동영상 병합 중...",
    downloadBtn: "병합된 동영상 다운로드",
    resetBtn: "처음부터 다시 시작",
    emptyList: "동영상을 드래그하거나 선택하여 병합을 시작하세요.",
    listTitle: "병합할 동영상 순서",
    optionsTitle: "출력 설정",
    optionResolution: "해상도",
    optionFps: "초당 프레임(FPS)",
    optionsQualityNote: "최종 해상도는 동영상의 크기가 다른 경우 원래 가로세로 비율을 유지하면서 레터박스 형식으로 조정됩니다.",
    faqTitle: "동영상 병합에 대해 자주 묻는 질문",
    bibliographyTitle: "참고 문헌 및 링크",
    resolutionWarning: "주의: 일부 동영상의 해상도가 다르며 자동으로 조정됩니다."
};

const faq: VideoMergerLocaleContent['faq'] = [
    {
        question: "이 도구에 동영상을 업로드하는 것이 안전한가요?",
        answer: "예, 완전히 안전합니다. 이 도구는 브라우저에서 100% 로컬로 작동합니다. 동영상은 절대 인터넷을 통해 전송되거나 어떤 서버에도 저장되지 않습니다.",
    },
    {
        question: "동영상의 크기가 다르면 어떻게 되나요?",
        answer: "저희 도구는 선택한 출력 해상도에 맞게 동영상의 크기를 자동으로 조정합니다. 비율이 정확히 일치하지 않는 경우 원래 가로세로 비율을 유지하기 위해 검은색 여백(레터박스)이 추가됩니다.",
    },
    {
        question: "병합할 때 동영상의 오디오는 유지되나요?",
        answer: "예. 각 동영상의 오디오 트랙이 추출되어 각 영상 세그먼트와 완벽하게 동기화되어 순차적으로 믹스됩니다.",
    },
];

const howTo: VideoMergerLocaleContent['howTo'] = [
    {
        name: "동영상 선택 또는 드래그",
        text: "병합할 모든 동영상 파일을 컴퓨터나 스마트폰에서 직접 로드하세요.",
    },
    {
        name: "순서 정렬하기",
        text: "목록의 위아래 버튼을 사용하여 업로드된 동영상을 정렬하여 재생 순서를 결정합니다.",
    },
    {
        name: "옵션 조정하기",
        text: "병합된 동영상의 출력 해상도와 초당 프레임(FPS)을 선택합니다.",
    },
    {
        name: "병합 및 내보내기",
        text: "병합 버튼을 누릅니다. 실시간 처리가 완료될 때까지 기다린 다음 결과 파일을 다운로드합니다.",
    },
];

const seo: VideoMergerLocaleContent['seo'] = [
    {
        type: 'summary',
        title: '100% 로컬 전문 동영상 병합',
        items: [
            '브라우저에서 직접 실시간 처리',
            '다양한 크기 및 형식(MP4, WEBM, MOV)의 여러 동영상 지원',
            '선택 가능한 출력 해상도(720p, 1080p, 2K, 4K)',
            '오디오 트랙을 완벽하게 순차적으로 결합'
        ]
    },
    { type: 'title', text: '동영상을 무료로 온라인에서 병합하세요: 무한한 단순함과 개인정보 보호', level: 2 },
    { type: 'paragraph', html: '복잡한 과정 없이 <strong>두 개의 동영상을 하나로 합치는 방법</strong>이 궁금하신가요? 더 이상 무거운 소프트웨어나 유료 앱을 다운로드할 필요가 없습니다. <strong>무료로 온라인에서 동영상을 병합</strong>하는 도구를 사용하면 필요한 모든 클립을 몇 초 만에 연결하고 합칠 수 있습니다. 100% 로컬로 작동하므로 파일을 어떤 서버에도 업로드할 필요가 없어 절대적인 개인정보 보호를 보장하며, 업로드 대기 시간 없이 <strong>대용량 동영상을 병합</strong>할 수 있습니다.' },
    
    { type: 'title', text: '워터마크 없이 동영상 합치기', level: 3 },
    { type: 'paragraph', html: '다른 앱의 가장 큰 단점 중 하나는 콘텐츠를 망친다는 것입니다. 저희와 함께라면 <strong>워터마크 없이 온라인에서 동영상을 병합</strong>할 수 있습니다. 다운로드하는 파일은 유튜브, 인스타그램, 틱톡에서 공유하거나 개인 용도로 사용할 수 있도록 깔끔하고 전문적인 상태 그대로의 창작물입니다.' },

    { type: 'stats', items: [
        { value: '100%', label: '비공개 및 로컬', icon: 'mdi:shield-check' },
        { value: '0MB', label: '업로드 데이터 없음', icon: 'mdi:upload-off' },
        { value: '4K', label: '최대 해상도', icon: 'mdi:video-high-definition' }
    ], columns: 3 },

    { type: 'title', text: '동영상 병합을 위한 일반적인 사용 사례', level: 3 },
    { type: 'comparative', items: [
        {
            title: '소셜 미디어',
            description: '스토리, 틱톡 또는 릴스를 하나의 동영상으로 빠르게 병합',
            icon: 'mdi:instagram',
            points: [
                '스마트폰으로 녹화한 짧은 클립 병합',
                '인스타그램이나 유튜브를 위한 연속 콘텐츠 준비',
                '성가신 워터마크 없이 병합'
            ]
        },
        {
            title: '프레젠테이션',
            description: '인트로와 데모 녹화본을 하나의 파일로 결합',
            icon: 'mdi:presentation',
            points: [
                '애니메이션 인트로를 프레젠테이션 본문과 병합',
                '짧은 소프트웨어 데모 결합',
                '표준 MP4/WEBM 형식으로 깔끔하게 내보내기'
            ],
            highlight: true
        },
        {
            title: '가족 추억 모음',
            description: '휴가나 축하 행사에서 찍은 여러 동영상을 병합',
            icon: 'mdi:home-heart',
            points: [
                '파티의 모든 순간을 하나의 동영상으로 만들기',
                '여행 추억을 시간순으로 그룹화하기',
                '하나의 파일로 되어 있어 공유하기 쉬움'
            ]
        },
        {
            title: '교육용 동영상',
            description: '짧은 교육 챕터나 강의 연결',
            icon: 'mdi:school',
            points: [
                '작고 독립적인 튜토리얼을 그룹화하기',
                '강의에 마무리 클립 추가하기',
                '전문적으로 코스 구성하기'
            ]
        }
    ], columns: 2 },

    { type: 'title', text: '브라우저에서 동영상을 병합하는 최고의 앱', level: 2 },
    { type: 'paragraph', html: '이것은 단순한 웹페이지가 아닙니다. 최신 HTML5 비디오 API 덕분에 브라우저에서 직접 작동하는 진정한 <strong>동영상 병합 앱</strong>입니다. <strong>MP4 동영상</strong>, WEBM 등을 <strong>병합</strong>하고, 해상도를 혼합하며(크기가 다를 경우 시스템이 자동으로 레터박스를 적용함) 최종 출력의 초당 프레임(FPS)을 선택할 수 있습니다.' },

    { type: 'title', text: '병합 방식 비교', level: 3 },
    { type: 'table', headers: ['기능', '우리의 로컬 도구', '기존 온라인 변환기', '전문 편집기'], rows: [
        ['개인정보 보호', '완전함 (기기에서 처리됨)', '낮음 (서버에 파일 업로드 필요)', '완전함 (기기에 설치됨)'],
        ['네트워크 소비', '없음 (기가바이트 단위 업로드 없음)', '매우 높음 (업로드 및 다운로드)', '없음'],
        ['워터마크', '없음 (100% 깨끗함)', '있음 (무료 버전의 경우)', '없음 (라이선스 구매 시)'],
        ['가격', '100% 무료', '제한적으로 무료 또는 구독형', '보통 비쌈'],
        ['학습 곡선', '매우 낮음 (드래그, 정렬, 병합)', '낮음', '매우 높음 (교육 필요)']
    ] },

    { type: 'proscons', items: [
        {
            pro: '개인정보 보호 보장: 어떤 파일도 기기를 벗어나지 않으므로 보안이 완벽합니다',
            con: '대용량 동영상을 병합하는 속도는 로컬 컴퓨터의 RAM 및 프로세서에 따라 다릅니다'
        },
        {
            pro: '전문적인 결과물: 100% 무료, 가입 불필요, 워터마크 없음',
            con: '비율이 다른 동영상(세로 vs 가로)을 결합할 때 검은색 여백(레터박스)이 적용됩니다'
        },
        {
            pro: '다재다능함: 웹 및 소셜 미디어 사용에 최적화된 효율적인 인코딩으로 빠른 내보내기',
            con: '클립 간에 복잡한 전환(3D 페이드)이나 영화 같은 시각 효과를 추가할 수 없습니다'
        }
    ], title: '장점 및 고려 사항' },

    { type: 'title', text: '지금 바로 동영상 병합을 시작하세요', level: 2 },
    { type: 'paragraph', html: '정리되지 않은 수백 개의 동영상 조각들을 그대로 둘 변명은 더 이상 없습니다. 파일을 업로드하고 원하는 순서대로 배치한 다음 버튼을 누르세요. <strong>온라인에서 동영상을 병합</strong>하는 가장 빠르고 안전하며 가장 프라이빗한 방법을 만나보세요.' }
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

export const content: VideoMergerLocaleContent = {
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
