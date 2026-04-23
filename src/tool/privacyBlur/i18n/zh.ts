import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { PrivacyBlurUI, PrivacyBlurLocaleContent } from '../index';

const slug = 'online-privacy-editor-pixelate-blur-faces-photos';
const title = '在线隐私编辑器：在照片中对脸部进行马赛克和隐藏';
const description = '通过审查照片中的敏感区域来保护您的身份。在本地 100% 完成对脸部的像素化、文档的模糊或隐私信息的覆盖。';

const ui: PrivacyBlurUI = {
    toolPixel: "马赛克",
    toolBlur: "模糊",
    toolSolid: "色块",
    intensityLabel: "强度",
    undoButton: "撤销",
    downloadButton: "保存",
    dropTitle: "隐私编辑器",
    dropSubtitle: "将您的图像拖到此处或点击开始",
    privacySecureLabel: "100% 本地",
    offlineLabel: "离线",
    autoDetectFaces: "自动检测",
    loadingModels: "正在加载模型...",
    noFacesDetected: "未自动检测到脸部。",
};

const faq: PrivacyBlurLocaleContent['faq'] = [
    {
        question: "我的照片会被上传到任何服务器吗？",
        answer: "不会。隐私编辑器完全在您的浏览器中运行。像素在本地修改，不会向您的设备外部发送任何内容。",
    },
    {
        question: "自动脸部检测是如何工作的？",
        answer: "我们使用在您的浏览器中运行的轻量级神经网络 (TinyFaceDetector) 来识别面部特征，无需外部连接。",
    },
];

const howTo: PrivacyBlurLocaleContent['howTo'] = [
    {
        name: "上传您的照片",
        text: "拖动或选择包含您希望隐藏的敏感信息的图像。",
    },
    {
        name: "选择工具",
        text: "根据您需要的隐私级别，在马赛克、模糊或色块覆盖之间进行选择。",
    },
    {
        name: "标记区域",
        text: "在您想要保护的区域（脸部、车牌、姓名等）上点击并拖动。",
    },
    {
        name: "保存结果",
        text: "在确保原始数据无法访问的情况下，下载处理后的图像。",
    },
];

const seo: PrivacyBlurLocaleContent['seo'] = [
    {
        type: 'summary',
        title: '隐私编辑器：马赛克、模糊和隐藏',
        items: [
            '三种编辑工具：马赛克、模糊、色块覆盖',
            '使用 AI 进行自动脸部检测 (TinyFaceDetector)',
            '100% 本地处理 - 您的照片永远不会离开浏览器',
            '无水印，无限制，完全免费'
        ]
    },
    { type: 'title', text: '数字隐私：如何保护您的视觉数据', level: 2 },
    { type: 'paragraph', html: '在社交媒体时代，不受控制地分享照片可能会暴露敏感的个人数据。我们的工具允许您在将照片上传到互联网之前隐藏关键信息（脸部、车牌、姓名、地址），确保您的隐私始终处于您的完全控制之下。' },

    { type: 'stats', items: [
        { value: '3', label: '隐藏方法', icon: 'mdi:tools' },
        { value: '100%', label: '本地隐私', icon: 'mdi:shield-check' },
        { value: 'AI', label: '脸部检测', icon: 'mdi:brain' }
    ], columns: 3 },

    { type: 'title', text: '三种隐藏方法说明', level: 3 },
    { type: 'comparative', items: [
        {
            title: '马赛克 (Pixelate)',
            description: '将区域划分成方块，无法识别',
            icon: 'mdi:blur',
            points: [
                '最大程度的不可逆模糊',
                '对人脸识别更安全',
                '可见，清晰表明某些内容已被隐藏',
                '理想场景：公开照片中的脸部'
            ]
        },
        {
            title: '模糊 (Blur)',
            description: '高斯平滑 - 看起来更自然',
            icon: 'mdi:blur-off',
            points: [
                '更优雅的视觉外观',
                '保持一定的色调一致性',
                '数学上可逆（理论上）',
                '理想场景：不那么敏感的信息'
            ],
            highlight: true
        },
        {
            title: '色块覆盖 (Solid)',
            description: '不透明色块 - 最高隐私级别',
            icon: 'mdi:rectangle',
            points: [
                '可见、明显的隐藏',
                '最高的法律安全性/隐私性',
                '改变视觉构图',
                '理想场景：文档、敏感数据'
            ]
        }
    ], columns: 3 },

    { type: 'title', text: '使用 AI 进行自动脸部检测', level: 3 },
    { type: 'paragraph', html: '我们的工具使用 TinyFaceDetector，这是一个直接在您的浏览器中运行的小型神经网络，用于自动识别脸部：' },
    { type: 'list', items: [
        '<strong>100% 本地：</strong> AI 模型在您的 GPU/CPU 上运行，而不是在远程服务器上。',
        '<strong>无需互联网：</strong> 在初始下载后，它完全离线工作。',
        '<strong>隐私保证：</strong> 没有人能看到这些脸：不论是 Google、OpenAI 还是我们。',
        '<strong>自动一键操作：</strong> 检测脸部并允许您通过一键选择隐藏。'
    ], icon: 'mdi:check' },

    { type: 'card', title: '隐私设计 (Privacy by Design)', html: '通过使用您浏览器的本地 GPU 和 CPU 处理图像，我们保证原始照片永远不会离开您的设备。即使您改变主意，也不会传输任何内容。这是数字隐私的最高标准。' },

    { type: 'title', text: '隐私应用案例', level: 3 },
    { type: 'table', headers: ['敏感信息', '推荐方法', '紧急程度'], rows: [
        ['人物脸部', '马赛克或模糊', '关键'],
        ['车辆车牌', '马赛克 (不可逆)', '关键'],
        ['身份证明文档', '色块覆盖或马赛克', '关键'],
        ['书写的姓名/地址', '色块覆盖或马赛克', '高'],
        ['电话号码', '马赛克或色块', '高'],
        ['医疗信息', '色块覆盖', '关键'],
        ['可见的 WiFi 信号', '马赛克', '中']
    ] },

    { type: 'proscons', items: [
        {
            pro: '完全隐私：100% 本地处理，无服务器，无存储',
            con: '需要支持 Canvas 和 WebGL 的现代浏览器'
        },
        {
            pro: '自动脸部检测节省手动时间',
            con: 'AI 并不完美 - 侧脸或部分脸部可能无法被检测到'
        },
        {
            pro: '三种方法允许在安全性与美观之间进行选择',
            con: '没有高级选项（智能扭曲、上下文填充）'
        },
        {
            pro: '完全免费，无广告，无限制',
            con: '不等同于像 Photoshop 这样的专业软件'
        }
    ], proTitle: '优点', conTitle: '局限性' },

    { type: 'diagnostic', variant: 'warning', title: '警示：模糊并非 100% 安全', icon: 'mdi:alert', badge: '安全性', html: '高斯模糊在数学上可以通过复杂的逆算法进行还原。如果信息至关重要（法律文件、身份），请使用<strong>马赛克或色块覆盖</strong>。模糊在美学上更好，但安全性较低。' },

    { type: 'glossary', items: [
        {
            term: '马赛克',
            definition: '通过将区域划分为统一的颜色块来降低分辨率。不可逆。针对 AI 人脸识别的最大安全性。'
        },
        {
            term: '高斯模糊',
            definition: '基于正态分布的数学平滑。理论上可以通过反卷积还原，但实际上非常困难。'
        },
        {
            term: '色块覆盖',
            definition: '均匀颜色的不透明块。最高的安全性，最高的法律隐私性，视觉上不够雅致。'
        },
        {
            term: 'TinyFaceDetector',
            definition: '用于检测脸部的轻量级卷积神经网络 (CNN)。在浏览器中本地运行，无需外部服务器。'
        },
        {
            term: '隐私设计 (PbD)',
            definition: '一种在系统设计之初就整合隐私的方法，而不是后来才添加。我们的本地处理方法正是隐私设计。'
        }
    ] },

    { type: 'message', title: '隐私由您掌控', ariaLabel: '关于隐私保护的信息', html: '我们不在远程服务器上存储或处理您的照片。没有跟踪 Cookie。没有编辑历史记录。我们不知道您隐藏了什么，因为我们从未看到您的图像。完全控制、完全隐私、完全自由。' },

    { type: 'title', text: '在社交网络上安全分享', level: 3 },
    { type: 'paragraph', html: '在互联网上发布任何照片之前，请问自己：是否有我不希望公开的信息？孩子的脸详细、车牌、地址、证件号码。现在进行 2 分钟的隐私处理可以避免数年的麻烦。' }
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
