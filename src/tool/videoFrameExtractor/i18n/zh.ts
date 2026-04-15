import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { VideoFrameExtractorUI, VideoFrameExtractorLocaleContent } from '../index';

const slug = 'online-video-frame-extractor-capture-hd-stills';
const title = '视频帧提取器：高清静态图像捕获';
const description = '以单帧精度从视频中提取个人图像。在本地免费捕捉高清的完美瞬间。';

const ui: VideoFrameExtractorUI = {
    uploadTitle: "上传视频文件",
    uploadFormats: "MP4, WebM, MOV 或 MKV (最大 500MB)",
    privacyNote: "视频不会上传到互联网，它在您的浏览器中进行本地处理。",
    playLabel: "播放",
    pauseLabel: "暂停",
    captureBtn: "捕获帧",
    prevFrame: "-1帧",
    nextFrame: "+1帧",
    batchTitle: "自动提取",
    batchEvery: "每隔",
    batchStart: "开始序列",
    batchProcessing: "提取中...",
    galleryTitle: "捕获的帧",
    galleryEmpty: "捕获的图像将显示在这里。",
    downloadAll: "下载全部",
    downloadHD: "下载高清图像",
    resetBtn: "上传另一个视频"
};

const faq: VideoFrameExtractorLocaleContent['faq'] = [
    {
        question: "我可以从长视频中提取帧吗？",
        answer: "可以，只要您的浏览器有足够的内存来加载视频。为了获得最佳性能，我们建议文件大小不超过 500MB。",
    },
    {
        question: "捕获的图像以什么分辨率保存？",
        answer: "捕获是以原始视频的原始分辨率进行的。如果您的视频是 4K 的，您将获得高质量的 4K 图像。",
    },
];

const howTo: VideoFrameExtractorLocaleContent['howTo'] = [
    {
        name: "上传您的视频",
        text: "从您的设备中选择视频文件。我们不会将其上传到任何服务器。",
    },
    {
        name: "导航到精确时刻",
        text: "使用时间轴栏或 ±1 帧按钮进行外科手术般的精准定位。",
    },
    {
        name: "捕获帧",
        text: "按下捕获按钮将该瞬间保存到下方的库中。",
    },
    {
        name: "以高质量下载",
        text: "下载单个捕获或整个会话的优化 WebP 格式图像。",
    },
];

const bibliography: VideoFrameExtractorLocaleContent['bibliography'] = [
    {
        name: "Capturing frames with HTML5 Video API",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video",
    },
];

const seo: VideoFrameExtractorLocaleContent['seo'] = [
    {
        type: 'summary',
        title: '专业视频帧提取',
        items: [
            '单帧精度 (±1 帧) 实现完美捕捉',
            '支持高达 500MB 的 MP4, WebM, MOV, MKV 文件',
            '保留原始视频分辨率 (SD, HD, 4K)',
            '按自定义间隔自动批量提取'
        ]
    },
    { type: 'title', text: '帧提取：凝固视频时刻', level: 2 },
    { type: 'paragraph', html: '有时一张照片胜过千言万语。我们的工具利用您浏览器的本地性能来提取精确帧，无需专业软件。' },

    { type: 'stats', items: [
        { value: '±1', label: '单帧精度', icon: 'mdi:target' },
        { value: '100%', label: '原始分辨率', icon: 'mdi:video-high-definition' },
        { value: '500MB', label: '支持文件大小', icon: 'mdi:file-video' }
    ], columns: 3 },

    { type: 'title', text: '专业应用场景', level: 3 },
    { type: 'comparative', items: [
        {
            title: '电影与摄影',
            description: '捕捉帧作为视觉参考或构图参考',
            icon: 'mdi:film',
            points: [
                '为电影营销提取剧照',
                '场景构图参考',
                '逐帧分析'
            ]
        },
        {
            title: '数字内容',
            description: '为社交媒体创建缩略图和封面',
            icon: 'mdi:youtube',
            points: [
                '高清 YouTube 缩略图',
                '社交媒体封面',
                '演示文稿插图'
            ],
            highlight: true
        },
        {
            title: '技术文档',
            description: '从教程和演示中提取帧',
            icon: 'mdi:book-open',
            points: [
                '教程视频截图',
                '分步骤视觉文档',
                '实时动作分析'
            ]
        },
        {
            title: '体育与动作',
            description: '捕捉动作最精彩的精确时刻',
            icon: 'mdi:dumbbell',
            points: [
                '体育技术逐帧分析',
                '捕捉英雄瞬间',
                '运动研究'
            ]
        }
    ], columns: 2 },

    { type: 'title', text: '支持视频格式', level: 3 },
    { type: 'table', headers: ['格式', '扩展名', '兼容性', '备注'], rows: [
        ['MPEG-4', 'MP4', '通用 (100%)', '最佳压缩，广泛使用'],
        ['WebM', 'WebM', '现代浏览器', '卓越压缩，体积小'],
        ['QuickTime', 'MOV', 'Safari 等', 'Apple 标准'],
        ['Matroska', 'MKV', '现代浏览器', '灵活的容器']
    ] },

    { type: 'card', title: '单帧精度', html: '向前或向后移动一帧 (±1 帧) 对于捕捉完美瞬间至关重要。我们的工具为您提供毫米级的控制。' },

    { type: 'proscons', items: [
        {
            pro: '完全隐私：视频在您的浏览器中 100% 本地处理',
            con: '受限于可用内存大小 (建议最大 500MB)'
        },
        {
            pro: '保留原始分辨率：SD, HD, 4K 无需重新压缩',
            con: '需要支持 HTML5 Video 的现代浏览器'
        },
        {
            pro: '按自定义间隔自动批量提取',
            con: '如需高级编辑（剪辑），则需要视频编辑器'
        },
        {
            pro: '以优化 WebP 或无损 PNG 导出帧',
            con: '一次只导出一帧（不导出自动 GIF 序列）'
        }
    ], proTitle: '优势', conTitle: '局限性' },

    { type: 'diagnostic', variant: 'info', title: '分辨率与帧率', icon: 'mdi:information', badge: '技术', html: '最终帧分辨率取决于原始视频。我们不进行智能上采样，而是保留视频的原始信息。' },

    { type: 'glossary', items: [
        {
            term: '帧',
            definition: '视频序列中的单个图像。24 fps 的视频每秒包含 24 帧。'
        },
        {
            term: 'FPS (每秒帧数)',
            definition: '决定动作的平滑度。'
        },
        {
            term: '视频编解码器',
            definition: '压缩算法：H.264, VP9, HEVC。决定文件大小和质量。'
        },
        {
            term: '比特率',
            definition: '每秒处理的数据量。比特率越高 = 质量越高。'
        },
        {
            term: '视频分辨率',
            definition: '像素尺寸：720p, 1080p, 4K, 8K。'
        }
    ] },

    { type: 'message', title: '专业级帧提取', ariaLabel: '关于视频提取的技术信息', html: '您不需要复杂的在线转换器。只需点击 3 次即可获得完美的一帧：上传、导航、捕获。' },

    { type: 'title', text: '凝固视频瞬间', level: 3 },
    { type: 'paragraph', html: '每个视频都包含数百帧。使用此工具提取那些完美的瞬间，而不会影响质量或隐私。' }
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
    inLanguage: 'zh',
};

export const content: VideoFrameExtractorLocaleContent = {
    slug,
    title,
    description,
    ui,
    seo,
    faq,
    faqTitle: '关于视频帧提取的常见问题',
    bibliography,
    bibliographyTitle: '视频捕捉技术标准',
    howTo,
    schemas: [faqSchema as any, howToSchema as any, appSchema],
};
