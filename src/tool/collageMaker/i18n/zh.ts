import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { CollageMakerUI, CollageMakerLocaleContent } from '../index';

const slug = 'free-online-photo-collage-maker-professional-compositions';
const title = '在线拼图制作：设计专业拼贴构图';
const description = '在几秒钟内免费创建照片拼贴。从多种布局中选择，调整边框，并下载无水印的高质量图片。';

const ui: CollageMakerUI = {
    dropTitle: "将图像拖到此处",
    dropSub: "或 {link} - 最少2张，最多9张",
    dropLink: "选择文件",
    imgsLoaded: "已加载图像",
    layoutLabel: "布局",
    settingsLabel: "设置",
    borderLabel: "边框",
    borderColorLabel: "边框颜色",
    bgColorLabel: "背景",
    downloadBtn: "下载",
    previewTitle: "预览",
    needsImgs: "您还需要 {n} 张图像",
    errorMin: "您至少需要 2 张图像",
    errorMax: "最多允许 9 张图像",
    errorLoad: "加载图像时出错",
    faqTitle: "常见问题",
    bibliographyTitle: "参考资料"
};

const faq: CollageMakerLocaleContent['faq'] = [
    {
        question: "如何更改照片的顺序？",
        answer: "照片根据在加载图像列表中出现的顺序排列在拼图中。您可以删除一张照片并重新上传以调整其位置。",
    },
    {
        question: "拼图的输出格式是什么？",
        answer: "拼图将以高分辨率 WebP 格式下载，非常适合在社交网络上分享而不损失清晰度。",
    },
];

const howTo: CollageMakerLocaleContent['howTo'] = [
    {
        name: "上传您的照片",
        text: "从您的文件浏览器中选择 2 到 9 张图像。",
    },
    {
        name: "选择布局",
        text: "选择最适合您上传照片数量的网格。",
    },
    {
        name: "自定义样式",
        text: "调整边框粗细和颜色以获得专业的视觉效果。",
    },
    {
        name: "下载并分享",
        text: "点击创建按钮并立即下载您的最终作品。",
    },
];

const bibliography: CollageMakerLocaleContent['bibliography'] = [
    {
        name: "摄影构图：拼贴的艺术",
        url: "https://zh.wikipedia.org/wiki/%E5%89%AA%E8%B4%B4%E7%94%BB",
    },
];

const seo: CollageMakerLocaleContent['seo'] = [
    {
        type: 'summary',
        title: '专业在线拼图制作工具',
        items: [
            '多种布局和预定义网格',
            '自定义边框和背景颜色',
            '适合社交网络的 1200px 高分辨率',
            '无使用限制的即时处理'
        ]
    },
    { type: 'title', text: '拼贴设计：讲述故事的构图', level: 2 },
    { type: 'paragraph', html: '拼贴不仅仅是照片的混合，它是一种传达情感和语境的视觉叙事。我们的工具允许您为 Instagram、Facebook、Pinterest 或个人项目创建专业的几何构图，无需 Photoshop 或昂贵的软件。' },

    { type: 'stats', items: [
        { value: '2-9', label: '每图数量', icon: 'mdi:image-multiple' },
        { value: '1200px', label: 'HD 分辨率', icon: 'mdi:video-high-definition' },
        { value: '即时', label: '生成', icon: 'mdi:lightning-bolt' }
    ], columns: 3 },

    { type: 'title', text: '视觉构图：设计原则', level: 3 },
    { type: 'paragraph', html: '构图是一种组织视觉元素的艺术，旨在引导观众的视线并传达意图。出色的拼图需要平衡：' },
    { type: 'list', items: [
        '<strong>平衡：</strong> 视觉重量的分布（明亮与阴暗图像、大图与小图）。',
        '<strong>视觉流：</strong> 视线应自然地穿过构图，没有死角。',
        '<strong>对比：</strong> 颜色、大小和形状的变化，以吸引注意力。',
        '<strong>统一：</strong> 主题连贯性——图像必须“共同讲述”同一个故事。'
    ], icon: 'mdi:check' },

    { type: 'card', title: '智能自适应设计', html: '我们的系统根据照片数量自动计算最佳空间分布。2 张图像 = 对称网格；5 张图像 = 平衡的非对称分布。每个网格都旨在最大化视觉冲击力。' },

    { type: 'comparative', items: [
        {
            title: '用于社交网络',
            description: 'Instagram、TikTok、Facebook - 正方形格式',
            icon: 'mdi:share-all',
            points: [
                '1200px 是 Instagram Feed 的理想选择',
                '正方形格式可避免发布时被裁剪',
                '可自定义边框以进行品牌推广'
            ],
            highlight: true
        },
        {
            title: '用于作品集',
            description: '摄影师和设计师的视觉展示',
            icon: 'mdi:briefcase-outline',
            points: [
                '展示项目的多个角度',
                '具有凝聚力的视觉叙事',
                '专业的数字画册打印'
            ]
        },
        {
            title: '用于个人礼物',
            description: '照片冲印、相框和数字相册',
            icon: 'mdi:gift-outline',
            points: [
                '活动记忆（婚礼、旅行）',
                '适合打印的高分辨率',
                '无需手动操作的即时设计'
            ]
        }
    ], columns: 3 },

    { type: 'title', text: '自定义：边框和颜色', level: 3 },
    { type: 'table', headers: ['元素', '视觉效果', '建议'], rows: [
        ['白色边框', '简洁、极简、现代', '社交网络、数字作品集'],
        ['黑色边框', '戏剧性、专业、艺术感', '艺术摄影、时尚、奢侈品'],
        ['中性边框（灰色）', '多功能、学术、商业', '商务、教育、中性感'],
        ['无边框', '融合、连续、沉浸感', '统一背景、流动的照片']
    ] },

    { type: 'proscons', items: [
        {
            pro: '专业的预定义设计 - 无需构图知识',
            con: '选项限于预置网格'
        },
        {
            pro: '无需缩放即可直接用于社交网络的 1200px 分辨率',
            con: '不像 Photoshop 那样可高度自定义'
        },
        {
            pro: '100% 本地处理 - 隐私、快速、无限制',
            con: '需要现代浏览器'
        },
        {
            pro: '完全免费，无水印，无广告',
            con: '没有单个图像编辑选项（裁剪、旋转）'
        }
    ], proTitle: '优势', conTitle: '局限性' },

    { type: 'diagnostic', variant: 'success', title: '为社交网络做好准备', icon: 'mdi:check-circle-outline', badge: '已优化', html: '1200x1200px 是 Instagram 最理想的分辨率。它支持任何长宽比，但正方形输出最大限度地提高了 Feed 的影响力，消除了自动裁剪，并且在桌面、平板电脑和移动设备上看起来都很棒。' },

    { type: 'glossary', items: [
        {
            term: '视觉构图',
            definition: '通过组织元素（色彩、形状、空间）来引导观众视线并传达情感意图的艺术。'
        },
        {
            term: '三分法',
            definition: '构图原则：将图像分为 9 个相等的区域（3x3）。将主体置于交点线上以获得最大冲击力。'
        },
        {
            term: '对称网格',
            definition: '等空间划分。令人安心且有序。非常适合成对照片或偶数照片。'
        },
        {
            term: '非对称网格',
            definition: '不等划分。动感、有趣且具有视觉效果。非常适合 5 张以上大小不一的照片。'
        },
        {
            term: '视觉平衡',
            definition: '视觉重量的感知平衡。明亮与阴暗图像的平衡，大与小的平衡。'
        }
    ] },

    { type: 'message', title: '即时视觉叙事', ariaLabel: '关于构图和拼贴的信息', html: '每一张拼图都在讲述一个故事。我们的自动设计器确保您的视觉故事达到平衡、专业并随时向世界发布。无需等待平面设计师完成工作。' },

    { type: 'title', text: '创造、分享、鼓舞', level: 3 },
    { type: 'paragraph', html: '一张制作精良的拼图，决定了一个发布是转瞬即逝还是被粉丝记住并分享。在您的视觉故事中使用智能构图，产生持久冲击。' }
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

export const content: CollageMakerLocaleContent = {
    slug,
    title,
    description,
    ui,
    seo,
    faqTitle: "常见问题",
    faq,
    bibliographyTitle: "参考资料",
    bibliography,
    howTo,
    schemas: [faqSchema as any, howToSchema as any, appSchema],
};
