import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ChromaticLensUI, ChromaticLensLocaleContent } from '../index';

const slug = 'chromatic-lens-color-palette-extraction-online';
const title = 'Chromatic Lens: 在线色彩探针与调色盘提取工具';
const description = '免费从任何图像中提取专业的调色盘。使用数学算法识别照片中的主导色彩。';

const ui: ChromaticLensUI = {
    dropTitle: "解析色彩",
    dropSubtitle: "拖入图像以提取其色彩 DNA。",
    processingLabel: "正在提取调色盘...",
    paletteTitle: "提取的调色盘",
    copyLabel: "复制 HEX",
    copiedLabel: "已复制！",
    colorCountLabel: "色彩数量",
    changeImage: "更改图像",
    faqTitle: "关于色彩提取的常见问题": "资源与技术文档"
};

const faq: ChromaticLensLocaleContent['faq'] = [
    {
        question: "色彩提取是如何工作的？",
        answer: "我们使用“中位切分”（Median Cut）算法。该算法根据图像像素在 RGB 色彩空间中的接近程度进行分组，从而找到最具代表性的色调。",
    },
    {
        question: "我可以将颜色复制到我的设计编辑器吗？",
        answer: "是的，通过点击每种颜色，HEX 代码将自动复制到您的剪贴板，方便您将其粘贴到 Photoshop、Figma 或 CSS 中。",
    },
    {
        question: "我可以解析哪些类型的图像？",
        answer: "支持任何 JPG、PNG 或 WebP 文件。解析过程在本地完成，因此即使是大图像也能快速解析，且不消耗网络流量。",
    },
];

const howTo: ChromaticLensLocaleContent['howTo'] = [
    {
        name: "上传图像",
        text: "上传您想要从中提取色彩灵感的照片。",
    },
    {
        name: "调整精度",
        text: "选择您希望工具识别的主导色彩数量（从 3 到 12 种）。",
    },
    {
        name: "解析结果",
        text: "调色盘将立即显示，并附带相应的十六进制 (HEX) 代码。",
    },
    {
        name: "复制并使用",
        text: "点击色调以保存它们并将其应用到您的设计项目中。",
    },
];

const seo: ChromaticLensLocaleContent['seo'] = [
    {
        type: 'summary',
        title: '智能色彩探针与提取',
        items: [
            '专业的 Median Cut 色彩解析算法',
            '从任何图像中提取 3-12 种主导色彩',
            'HEX 代码可直接克隆到剪贴板',
            '100% 本地处理 - 创意人士的理想选择'
        ]
    },
    { type: 'title', text: '色彩提取：科学与设计的交汇', level: 2 },
    { type: 'paragraph', html: '您是否曾纳闷为什么一张电影截图看起来如此和谐？这并非巧合，而是色彩理论在起作用。Chromatic Lens 让您可以直接从像素中提取那种和谐美，并将其转换为可在您的设计项目中使用的 HEX 代码。' },

    { type: 'stats', items: [
        { value: '即时', label: '色彩解析', icon: 'mdi:lightning-bolt' },
        { value: '100%', label: '本地隐私', icon: 'mdi:lock' },
        { value: 'RGB', label: '精准色彩空间', icon: 'mdi:palette' }
    ], columns: 3 },

    { type: 'title', text: '中位切分算法详解', level: 3 },
    { type: 'paragraph', html: '智能调色盘提取并非简单的随机采样。它使用中位切分（Median Cut）算法，这是一种确保忠实呈现的递归切分技术：' },
    { type: 'list', items: [
        '<strong>递归细分：</strong> 图像的 RGB “色彩立方体”被递归地细分为更小的方块。',
        '<strong>体积平衡：</strong> 每个分区都力求将色彩空间中体积相似的像素归为一类。',
        '<strong>加权平均：</strong> 每个方块最终产生的颜色是其包含的所有像素的平均值。',
        '<strong>忠实呈现：</strong> 主导色彩反映了图像真实的视觉氛围，而不仅仅是简单的样本。'
    ], icon: 'mdi:check' },

    { type: 'card', title: '创意工作流', html: '非常适合网页开发者、UX/UI 设计师、数字艺术家以及希望立即捕捉照片、电影或视觉参考的视觉精髓并将其应用于界面、插画或品牌配色方案的创意人士。' },

    { type: 'title', text: '数字设计中的应用场景', level: 3 },
    { type: 'comparative', items: [
        {
            title: 'UX/UI 设计师',
            description: '从画轴图像中提取配色以创建具有凝聚力的界面',
            icon: 'mdi:palette',
            points: [
                '和谐的背景色',
                '按钮和次要元素配色',
                '自动计算的对比度'
            ]
        },
        {
            title: '网页开发者',
            description: '直接根据视觉参考创建 CSS 样式表',
            icon: 'mdi:code-braces',
            points: [
                '将 HEX 直接复制到 CSS',
                'SCSS/CSS 中的颜色变量',
                '无需预先设计即可实现配色统一的主题'
            ],
            highlight: true
        },
        {
            title: '数字艺术家与插画师',
            description: '从电影、大自然或艺术作品中获取色彩参考',
            icon: 'mdi:brush',
            points: [
                '从大师作品中提取参考配色',
                '电影色彩研究',
                '即时的视觉灵感'
            ]
        },
        {
            title: '品牌专家',
            description: '基于指导性照片开发视觉识别系统',
            icon: 'mdi:tag-multiple',
            points: [
                '从图像中提取品牌色彩',
                '制作专业的色彩指南',
                '确保视觉一致性'
            ]
        }
    ], columns: 2 },

    { type: 'title', text: '应用色彩理论', level: 3 },
    { type: 'table', headers: ['色彩概念', '定义', '实际应用'], rows: [
        ['色彩和谐', '视觉上平衡的色彩组合', 'UI 中具有凝聚力的视觉身份'],
        ['对比度', '色彩之间的亮度差异', '可读性和视觉层级'],
        ['饱和度', '色调的色彩强度', '专业感（低饱和）对比 活力感（高饱和）'],
        ['色温', '暖色（红系）对比 冷色（蓝系）', '设计的感性心理学'],
        ['单色配色', '单一色调的变化', '高雅与极简主义']
    ] },

    { type: 'proscons', items: [
        {
            pro: '精准的数学提取 - 而非大约的视觉选择',
            con: '如果包含大量像素，极不明显的颜色也可能被选中'
        },
        {
            pro: '即时复制到剪贴板 - 与工作流完美集成',
            con: '需要支持 Canvas API 的现代浏览器'
        },
        {
            pro: '完全隐私 - 100% 本地解析，不提交任何数据',
            con: '不保存之前的解析历史'
        },
        {
            pro: '兼容任何数字图像格式',
            con: '最终色彩效果取决于图像的压缩程度和质量'
        }
    ], proTitle: '优势', conTitle: '局限性' },

    { type: 'diagnostic', variant: 'success', title: '真实的色彩呈现', icon: 'mdi:check-circle-outline', badge: '先进算法', html: '与简单随机采样像素的工具不同，我们的系统使用中位切分算法，对每个色调的完整像素计数进行加权，确保生成的调色盘能忠实地反映原始图像的视觉氛围和色彩心理。' },

    { type: 'glossary', items: [
        {
            term: '中位切分',
            definition: '色彩量化算法，通过递归地将 RGB 空间细分为方块来确保均匀分布。历史上曾用于 GIF 和索引色彩技术。'
        },
        {
            term: 'RGB 色彩空间',
            definition: '基于红、绿、蓝的色彩模型。每种颜色表示为这三个数值（0-255）的组合。数字屏幕和网页的标准。'
        },
        {
            term: 'HEX 代码',
          definition: '网页上表示颜色的 6 位十六进制记法（#RRGGBB）：#FF0000（红）、#00FF00（绿）、#0000FF（蓝）。在 CSS、Figma 和 Adobe 软件中通用。'
        },
        {
            term: '色彩饱和度',
            definition: '颜色的强度或纯度。高饱和度 = 鲜艳；低饱和度 = 偏灰。影响设计的感性认知。'
        },
        {
            term: '色彩和谐',
            definition: '选择和组合色彩以产生视觉上愉悦的结果。可以是单色、补色、类比色或三等分配色。'
        }
    ] },

    { type: 'message', title: '专业的色彩解析', ariaLabel: '关于色彩解析的技术信息', html: 'Chromatic Lens 将手动视觉解析转化为算法精度。它不仅提取色彩：它捕捉任何图像的感性与视觉精髓，并将其作为即用型 HEX 代码直接放在您的剪贴板上。完全隐私，不限解析量。' },

    { type: 'title', text: '源自视觉灵感的设计', level: 3 },
    { type: 'paragraph', html: '最好的调色盘是能捕捉到参考物视觉意图的调色盘。Chromatic Lens 将过去需要手动操作的过程（观察、解析、记录）自动化了。现在，只需拖入一张图像，即可在几秒钟内获得专业的 HEX 代码。' }
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

export const content: ChromaticLensLocaleContent = {
    slug,
    title,
    description,
    ui,
    seo,
    faqTitle: "常见问题",
    faq: "参考资料",
    bibliography,
    howTo,
    schemas: [faqSchema as any, howToSchema as any, appSchema],
};
