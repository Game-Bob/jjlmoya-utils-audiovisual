import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { SubtitleSyncUI, SubtitleSyncLocaleContent } from '../index';

const slug = 'synchronize-srt-subtitles-online-adjust-timing-free';
const title = '在线同步 SRT 字幕：免费调整时间轴';
const description = '在线调整 SRT 字幕提前或延迟的工具。轻松纠正时间偏差并立即下载同步后的文件。';

const ui: SubtitleSyncUI = {
    dropTitle: "将您的 .SRT 文件拖到此处",
    dropSubtitle: "或点击浏览文件",
    adjustTitle: "调整时间",
    offsetLabel: "偏移量（秒）",
    offsetHelp: "使用负值表示提前（例如 -1.5），正值表示延迟。",
    linesStat: "行数",
    firstStat: "首条字幕",
    lastStat: "末条字幕",
    originalLabel: "原始时间",
    resultLabel: "调整后时间",
    downloadButton: "下载修正文件",
    previewBadge: "预览",
    unitSeconds: "秒"
};

const faq: SubtitleSyncLocaleContent['faq'] = [
    {
        question: "如果音频比字幕快，我该如何同步？",
        answer: "如果声音出现在文字之前，您需要延迟字幕。在计算器中输入正值（例如输入 2.0 可以延迟 2 秒）。",
    },
    {
        question: "此工具接受哪些文件格式？",
        answer: "目前，该工具针对 .SRT (SubRip) 文件进行了优化，这是视频播放器和流媒体平台中最通用的标准格式。",
    },
    {
        question: "上传我的字幕文件安全吗？",
        answer: "是的，因为所有处理都在您的设备上 100% 本地完成。您的文件不会发送到任何服务器；同步直接在您的浏览器中进行。",
    },
    {
        question: "我可以只同步文件的一部分吗？",
        answer: "不可以，此工具对整个文件应用恒定的偏移量。如果偏移量是渐进式的（随时间变化），您可能需要更高级的编辑工具。",
    },
];

const howTo: SubtitleSyncLocaleContent['howTo'] = [
    {
        name: "上传您的 SRT 文件",
        text: "将您想要纠正的字幕文件拖入上传区域。",
    },
    {
        name: "确定偏移量",
        text: "在您的播放器中测量字幕相对于音频延迟或提前了多少时间。",
    },
    {
        name: "调整偏移量",
        text: "在控制面板中输入正数（延迟）或负数（提前）的秒数。",
    },
    {
        name: "下载文件",
        text: "在预览中确认时间正确后，点击下载以获取新的 SRT 文件。",
    },
];

const seo: SubtitleSyncLocaleContent['seo'] = [
    {
        type: 'summary',
        title: '专业字幕同步工具',
        items: [
            '即时纠正音频与字幕的时间偏差',
            '支持标准 SRT (SubRip) 文件',
            '100% 本地处理 - 隐私保障',
            '无需安装，无需订阅，完全免费'
        ]
    },
    { type: 'title', text: '完美的 SRT 字幕同步方案', level: 2 },
    { type: 'paragraph', html: '对于观众来说，最令人沮丧的事莫过于看到的对白与声音对不上。字幕偏差通常由于视频版本差异引起：帧率变化、广告删减、片头差异或压缩方式改变。使用此工具，您可以在数秒内解决此问题。' },

    { type: 'stats', items: [
        { value: '100%', label: '本地处理', icon: 'mdi:shield' },
        { value: '毫秒级', label: '精确度', icon: 'mdi:clock-outline' },
        { value: '无限制', label: '无文件限制', icon: 'mdi:file-document' }
    ], columns: 3 },

    { type: 'title', text: '提前与延迟：实用指南', level: 3 },
    { type: 'paragraph', html: '第一步是正确识别偏差类型。逻辑如下：' },
    { type: 'list', items: [
        '<strong>延迟（正值）：</strong> 当您发现文字在声音出现之前就显示了（字幕过早）。例如：+2.0 秒。',
        '<strong>提前（负值）：</strong> 当您发现文字在声音出现之后才显示（字幕滞后）。例如：-2.0 秒。',
        '<strong>测试与调整：</strong> 建议从较小增量（如 0.5s）开始，并使用预览功能进行验证。'
    ], icon: 'mdi:arrow-right' },

    { type: 'card', title: '专业级隐私保护', html: '通过客户端 JavaScript 处理文件，我们保证您的字幕内容永远不会离开您的电脑。对于处理机密材料或受 NDA（竞业/保密协议）约束的翻译人员和专业人士来说，这一点至关重要。' },

    { type: 'title', text: '常见应用场景', level: 3 },
    { type: 'comparative', items: [
        {
            title: '翻译人员与字幕组',
            description: '在处理多个视频版本后快速同步翻译内容',
            icon: 'mdi:translate',
            points: [
                '来自不同来源的 SRT 文件',
                '内容版本管理（剧场版 vs 流媒体版）',
                '无需切换工具即可快速交付'
            ]
        },
        {
            title: '内容创作者',
            description: '当视频以不同帧率处理时恢复字幕同步',
            icon: 'mdi:video',
            points: [
                '复用现有字幕',
                '格式更改（从 720p 到 1080p）',
                '避免对 1000 多行内容进行手动调时'
            ],
            highlight: true
        },
        {
            title: '普通用户',
            description: '修正下载的字幕与视频不匹配的问题',
            icon: 'mdi:account',
            points: [
                '通用的下行同步问题',
                '不同地区的电影版本（PAL vs NTSC）',
                '针对剪辑版本进行微调'
            ]
        }
    ], columns: 3 },

    { type: 'title', text: '为什么字幕会不同步', level: 3 },
    { type: 'table', headers: ['常见原因', '技术描述', '解决方案'], rows: [
        ['帧率差异', '23.976 fps 对比 25 fps - 累积的偏差', '应用单个偏移量调整（本工具）'],
        ['内容剪辑', '广告剪减或删除了额外内容', '手动计算 + 分段同步'],
        ['地区版本', 'PAL（欧洲 25 fps）对比 NTSC（美国 29.97 fps）', '简单的数学偏移计算'],
        ['分辨率改变', '以不同处理速度重新编码', '重新计算原始文件时间轴']
    ] },

    { type: 'diagnostic', variant: 'info', title: '需要注意的技术限制', icon: 'mdi:information', badge: '重要', html: '此工具对整个文件应用<strong>恒定</strong>的偏移。如果偏差是<strong>点进式</strong>的（开始是同步的，但后来逐渐不对齐），这通常意味着帧率不匹配。在这种情况下，原始文件需要在专业的剪辑软件中重新处理。' },

    { type: 'proscons', items: [
        {
            pro: '极速体验 - 毫秒内处理大型文件',
            con: '仅调整固定偏差，无法处理渐进式偏差'
        },
        {
            pro: '极致隐私 - 内容永不离开浏览器',
            con: '需要开启 JavaScript 的现代浏览器'
        },
        {
            pro: '通用格式 - 支持任何标准 SRT 文件',
            con: '不支持其他格式（ASS, VTT, SCC 等）'
        },
        {
            pro: '完全免费，无广告，无追踪',
            con: '无更改历史记录或版本管理'
        }
    ], proTitle: '优势', conTitle: '限制' },

    { type: 'glossary', items: [
        {
            term: 'SRT (SubRip)',
            definition: '最通用的字幕格式：包含序号、时间码 (hh:mm:ss,mmm) 和文本的纯文本文件。播放器和平台的通用标准。'
        },
        {
            term: '偏移量 (Offset)',
            definition: '对文件中所有时间码增加或减少的固定时长。可以是正数（延迟）或负数（提前）。'
        },
        {
            term: '帧率 (fps)',
            definition: '每秒帧数。常见的有 24p、PAL 25p、NTSC 29.97p 等。帧率不同会导致累积的时间轴偏差。'
        },
        {
            term: 'NTSC 与 PAL',
            definition: '地区电视标准：欧洲为 PAL (25 fps)，美国为 NTSC (29.97 fps)。两者间有约 4% 的速度差异。'
        },
        {
            term: '渐进式偏差 (Progressive Offset)',
            definition: '指同步开始正确但随后逐渐偏离的现象。这通常意味着帧率不匹配，需要重新处理时间轴。'
        }
    ] },

    { type: 'message', title: '全权掌握的专业编辑', ariaLabel: '关于同步的技术信息', html: '我们的方案简单而强大：应用即时处理的单偏移量，100% 在您的浏览器内完成。无云端，无存储，无追踪。只需上传、调整、下载。完全掌控您的内容。' },

    { type: 'title', text: '总结：让观影无障碍', level: 3 },
    { type: 'paragraph', html: '完美的字幕同步是高质量视听体验的基础。使用此工具，您可以将原本沮丧的体验转变为完美的电影之夜，无需昂贵或复杂的软件。' }
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

export const content: SubtitleSyncLocaleContent = {
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
