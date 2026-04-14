import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { SubtitleSyncUI, SubtitleSyncLocaleContent } from '../index';

const slug = 'srt-subtitle-synchronize-online-韓国語-adjust-timing-free';
const title = 'SRT 자막 온라인 동기화: 간편한 타이밍 조정';
const description = 'SRT 자막의 시간을 앞당기거나 늦출 수 있는 온라인 도구입니다. 자막 싱크 오차를 쉽게 수정하고 즉시 다운로드하세요.';

const ui: SubtitleSyncUI = {
    dropTitle: ".SRT 파일을 여기로 드래그하세요",
    dropSubtitle: "또는 클릭하여 파일 선택",
    adjustTitle: "시간 조정",
    offsetLabel: "오프셋 (초)",
    offsetHelp: "앞당기려면 음수 값(예: -1.5), 늦추려면 양수 값을 사용하세요.",
    linesStat: "줄 수",
    firstStat: "첫 자막",
    lastStat: "마지막 자막",
    originalLabel: "원본",
    resultLabel: "결과",
    downloadButton: "수정된 자막 다운로드",
    previewBadge: "미리보기",
    unitSeconds: "초"
};

const faq: SubtitleSyncLocaleContent['faq'] = [
    {
        question: "오디오가 자막보다 먼저 나올 때 어떻게 동기화하나요?",
        answer: "소리가 텍스트보다 먼저 나온다면 자막을 늦춰야 합니다. 도구에 양수 값(예: 2초를 늦추려면 2.0)을 입력하세요.",
    },
    {
        question: "어떤 파일 형식을 지원하나요?",
        answer: "현재 이 도구는 동영상 플레이어와 스트리밍 플랫폼에서 가장 널리 사용되는 .SRT (SubRip) 파일에 최적화되어 있습니다.",
    },
    {
        question: "내 자막 파일을 업로드하는 것이 안전한가요?",
        answer: "네, 모든 처리가 사용자의 기기에서 100% 로컬로 이루어집니다. 파일은 서버로 전송되지 않으며 동기화 작업은 브라우저 내에서 직접 수행됩니다.",
    },
    {
        question: "파일의 일부만 동기화할 수 있나요?",
        answer: "아니요, 이 도구는 파일 전체에 일정한 오프셋을 적용합니다. 싱크 오차가 점진적으로 커지는 경우에는 더 고급 편집 기능이 필요할 수 있습니다.",
    },
];

const howTo: SubtitleSyncLocaleContent['howTo'] = [
    {
        name: "SRT 파일 업로드",
        text: "수정하려는 자막 파일을 업로드 영역으로 드래그하세요.",
    },
    {
        name: "오차 확인",
        text: "플레이어에서 오디오를 기준으로 자막이 얼마나 늦거나 빠른지 측정하세요.",
    },
    {
        name: "오프셋 조정",
        text: "제어판에 늦출 시간(양수) 또는 앞당길 시간(음수)을 입력하세요.",
    },
    {
        name: "파일 다운로드",
        text: "미리보기에서 시간이 맞는지 확인하고 다운로드를 클릭하여 새 SRT 파일을 받으세요.",
    },
];

const bibliography: SubtitleSyncLocaleContent['bibliography'] = [
    {
        name: "SubRip (SRT) 형식 사양",
        url: "https://matroska.org/technical/subtitles.html#srt-subtitles",
    },
    {
        name: "MDN Web Docs - FileReader API",
        url: "https://developer.mozilla.org/ko/docs/Web/API/FileReader",
    },
];

const seo: SubtitleSyncLocaleContent['seo'] = [
    {
        type: 'summary',
        title: '전문적인 자막 동기화',
        items: [
            '오디오-자막 오차 즉시 수정',
            '표준 SRT (SubRip) 파일 지원',
            '100% 로컬 처리 - 완벽한 프라이버시 보호',
            '설치 및 가입 불필요, 완전 무료'
        ]
    },
    { type: 'title', text: '완벽한 SRT 자막 동기화', level: 2 },
    { type: 'paragraph', html: '영상을 볼 때 목소리와 맞지 않는 대사를 보는 것만큼 답답한 일은 없습니다. 자막 싱크 오차는 주로 프레임레이트 차이, 광고 삽입, 제작사 로고 유무, 압축 방식 변화 등 영상 버전의 차이로 인해 발생합니다. 이 도구를 사용하면 몇 초 만에 문제를 해결할 수 있습니다.' },

    { type: 'stats', items: [
        { value: '100%', label: '로컬 처리', icon: 'mdi:shield' },
        { value: '밀리초 단위', label: '정밀도', icon: 'mdi:clock-outline' },
        { value: '제한 없음', label: '파일 용량 무관', icon: 'mdi:file-document' }
    ], columns: 3 },

    { type: 'title', text: '당기기 vs 미루기: 실전 가이드', level: 3 },
    { type: 'paragraph', html: '첫 번째 단계는 오차의 유형을 정확히 파악하는 것입니다. 논리는 다음과 같습니다.' },
    { type: 'list', items: [
        '<strong>미루기 (양수 값):</strong> 소리가 나오기 전에 텍스트가 먼저 보일 때. 자막이 너무 빠릅니다. 예: +2.0초',
        '<strong>당기기 (음수 값):</strong> 소리가 나온 후에 텍스트가 보일 때. 자막이 늦습니다. 예: -2.0초',
        '<strong>테스트 및 조정:</strong> 0.5초 등 작은 단위부터 시작하여 미리보기로 확인하세요.'
    ], icon: 'mdi:arrow-right' },

    { type: 'card', title: '전문가 수준의 프라이버시 보호', html: '클라이언트 측 JavaScript를 통해 파일을 처리하므로 자막 내용이 사용자의 컴퓨터를 절대 떠나지 않습니다. 기밀 자료를 다루는 번역가나 NDA(비밀유지계약) 하의 전문가들에게 필수적인 보안을 제공합니다.' },

    { type: 'title', text: '주요 활용 사례', level: 3 },
    { type: 'comparative', items: [
        {
            title: '번역가 및 자막 제작자',
            description: '여러 영상 버전에 맞춰 번역 타이밍을 일괄 동기화',
            icon: 'mdi:translate',
            points: [
                '다양한 출처의 SRT 파일 관리',
                '극장판 vs 스트리밍판 등 버전 관리',
                '도구 전환 없이 신속한 작업 완료'
            ]
        },
        {
            title: '콘텐츠 제작자',
            description: '다른 프레임레이트로 인코딩된 영상에 기존 자막을 적용',
            icon: 'mdi:video',
            points: [
                '기존 자막 재사용',
                '해상도 변경(720p에서 1080p) 대응',
                '수천 줄의 수동 타이밍 작업을 자동화'
            ],
            highlight: true
        },
        {
            title: '일반 사용자',
            description: '다운로드한 자막이 영상과 미세하게 맞지 않을 때 수정',
            icon: 'mdi:account',
            points: [
                '일반적인 자막 싱크 안 맞음 현상',
                '지역별 버전 차이(PAL vs NTSC)',
                '편집된 스트리밍 버전에 맞춤'
            ]
        }
    ], columns: 3 },

    { type: 'title', text: '자막 싱크가 어긋나는 이유', level: 3 },
    { type: 'table', headers: ['주요 원인', '기술적 배경', '해결책'], rows: [
        ['프레임레이트 차이', '23.976 fps vs 25 fps - 누적된 오차', '일정 오프셋 조정 (본 도구)'],
        ['편집 내용 차이', '광고 컷 또는 추가/삭제된 장면', '수동 계산 + 부분 동기화'],
        ['지역별 버전', 'PAL(유럽 25fps) vs NTSC(미국 29.97fps)', '단순 수학적 오프셋 적용'],
        ['해상도 및 인코딩', '처리 속도가 다른 재인코딩 방식', '원본 파일의 재계산']
    ] },

    { type: 'diagnostic', variant: 'info', title: '기술적 제한 사항', icon: 'mdi:information', badge: '중요', html: '이 도구는 파일 전체에 <strong>일정한</strong> 오프셋을 적용합니다. 오차가 <strong>점진적</strong>(처음엔 맞지만 갈수록 어긋남)인 경우 프레임레이트 근본 차이를 의미하며, 이 경우 전문 편집 소프트웨어에서 재처리가 필요합니다.' },

    { type: 'proscons', items: [
        {
            pro: '초고속 처리 - 대용량 파일도 수 밀리초 만에 처리',
            con: '고정된 오차만 조정 가능 (점진적 오차 비지원)'
        },
        {
            pro: '완벽한 프라이버시 - 내용이 브라우저 외부로 유출되지 않음',
            con: 'JavaScript가 활성화된 최신 브라우저 필요'
        },
        {
            pro: '범용성 - 모든 표준 SRT 파일 지원',
            con: '기타 형식(ASS, VTT, SCC 등)은 비지원'
        },
        {
            pro: '완전 무료, 광고 없음, 추적 없음',
            con: '수정 이력이나 버전 관리 기능은 없음'
        }
    ], proTitle: '장점', conTitle: '제한 사항' },

    { type: 'glossary', items: [
        {
            term: 'SRT (SubRip)',
            definition: '가장 보편적인 자막 형식. 순번, 시간(hh:mm:ss,mmm), 텍스트로 구성된 파일. 플랫폼 공용 표준.'
        },
        {
            term: '오프셋 (Offset)',
            definition: '파일의 모든 시간값에 더하거나 빼는 고정된 시간량. 양수(늦춤) 또는 음수(앞당김) 단위.'
        },
        {
            term: '프레임레이트 (fps)',
            definition: '초당 프레임 수. 24p(영화), 25p(유럽), 29.97p(미국) 등. 이 차이가 누적 오차를 유발함.'
        },
        {
            term: 'NTSC vs PAL',
            definition: '지역별 방송 규격. PAL(25fps)과 NTSC(29.97fps)는 약 4%의 속도 차이가 있음.'
        },
        {
            term: '점진적 오차 (Progressive Offset)',
            definition: '처음엔 맞지만 시간이 흐를수록 싱크가 어긋나는 현상. 프레임레이트 불일치가 원인.'
        }
    ] },

    { type: 'message', title: '원하는 대로 제어하는 전문가용 편집', ariaLabel: '동기화 관련 기술 정보', html: '간결하지만 강력한 방식: 오프셋 한 번으로 즉시 적용하며, 100% 브라우저 내에서 처리합니다. 클라우드도, 저장소도, 추적도 없습니다. 업로드하고, 조정하고, 다운로드하세요. 당신의 콘텐츠를 완벽히 제어할 수 있습니다.' },

    { type: 'title', text: '결론: 중단 없는 영화 감상', level: 3 },
    { type: 'paragraph', html: '품질 높은 시청 경험을 위해 완벽한 자막 싱크는 필수입니다. 이 도구를 사용하여 복잡한 소프트웨어 없이도 완벽한 영화의 밤을 즐겨보세요.' }
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

export const content: SubtitleSyncLocaleContent = {
    slug,
    title,
    description,
    ui,
    seo,
    faq,
    faqTitle: '자막 동기화에 관한 자주 묻는 질문',
    bibliography,
    bibliographyTitle: '자막 형식 관련 기술 리소스',
    howTo,
    schemas: [faqSchema as any, howToSchema as any, appSchema],
};
