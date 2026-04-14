import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { PrintQualityCalculatorUI, PrintQualityCalculatorLocaleContent } from '../index';

const slug = 'print-quality-calculator-pixels-to-cm-dpi';
const title = '打印质量计算器：像素转厘米与 DPI';
const description = '根据分辨率计算照片的最大打印尺寸。将像素转换为厘米和英寸，确保专业级的打印效果。';

const ui: PrintQualityCalculatorUI = {
    dropTitle: "分析分辨率",
    dropSubtitle: "将您的图像拖到此处以计算其打印尺寸。",
    resultsTitle: "文件规格",
    dpiDensityLabel: "所需的打印密度 (DPI)",
    dpiPointsLabel: "每英寸点数",
    maxPrintTitle: "最大打印尺寸",
    standardFormatsTitle: "支持的标准格式",
    formatColumn: "格式",
    measureColumn: "尺寸",
    supportColumn: "是否支持？",
    qualityExcellent: "极佳质量",
    qualityGood: "良好质量",
    qualityFair: "屏幕质量",
    qualityPoor: "不适用",
    qualityExcellentDesc: "适用于艺术杂志、摄影集和近距离观看。",
    qualityGoodDesc: "足以用于海报和中距离观看。",
    qualityFairDesc: "适用于数字查看或远距离广告牌。",
    qualityPoorDesc: "图像会出现像素化。不建议打印。",
    unitCm: "厘米",
    unitInches: "英寸",
    dpiScreenLabel: "屏幕",
    dpiNewspaperLabel: "报纸",
    dpiPrintLabel: "打印",
    dpiFineArtLabel: "精细艺术",
    formatPostal: "明信片",
    formatQuartilla: "四开",
    formatFolio: "对开",
    formatDoubleFolio: "双对开",
    formatSmallPoster: "小海报",
    formatLargePoster: "大海报",
    formatPlane: "图纸",
    supportedText: "是 (覆盖)",
    notSupportedPrefix: "否 (",
    invalidImageError: "请选择一个有效的图像",
    faqTitle: "常见问题",
    bibliographyTitle: "参考资料"
};

const faq: PrintQualityCalculatorLocaleContent['faq'] = [
    {
        question: "什么是 DPI，为什么它很重要？",
        answer: "DPI（每英寸点数）表示打印机在每一英寸直线上放置的墨点数量。DPI 越高，图像越清晰，但您的像素覆盖的总物理尺寸就越小。",
    },
    {
        question: "打印照片的理想 DPI 是多少？",
        answer: "卓越摄影质量的行业标准是 300 DPI。对于远距离观看的大型印刷品，150 DPI 可能就足够了。",
    },
    {
        question: "我可以在不损失质量的情况下增加图像的 DPI 吗？",
        answer: "不可以。在不改变像素的情况下增加 DPI 只会减小打印尺寸。如果您尝试使用软件“发明”像素（插值放大），图像可能会看起来很模。糊",
    },
];

const howTo: PrintQualityCalculatorLocaleContent['howTo'] = [
    {
        name: "上传您的图像",
        text: "上传您想要打印的照片，以了解其像素尺寸。",
    },
    {
        name: "调整 DPI",
        text: "滑动滑块，查看最终尺寸如何根据点密度（72 到 600 DPI）发生变化。",
    },
    {
        name: "验证格式",
        text: "查看标准格式表（A4、A3 等），了解您的分辨率是否覆盖了所需的纸张尺寸。",
    },
    {
        name: "确认质量",
        text: "在发送打印之前，请确保指示器标记为“极佳质量”。",
    },
];

const bibliography: PrintQualityCalculatorLocaleContent['bibliography'] = [
    {
        name: "国际纸张尺寸 (ISO 216)",
        url: "https://www.iso.org/standard/36631.html",
    },
    {
        name: "图像分辨率指南 - Adobe",
        url: "https://www.adobe.com/cn/creativecloud/photography/discover/image-resolution.html",
    },
];

const seo: PrintQualityCalculatorLocaleContent['seo'] = [
    {
        type: 'summary',
        title: '专业打印分辨率计算',
        items: [
            '准确将像素转换为厘米和英寸',
            '根据所需 DPI 计算最大尺寸',
            '兼容标准格式（A4、A3 等）',
            '4 个质量级别指南：从极佳到不适用'
        ]
    },
    { type: 'title', text: '打印质量与 DPI 终极指南', level: 2 },
    { type: 'paragraph', html: '您是否曾打印过照片，结果却发现模糊或有像素感？秘诀就在于 <strong>像素</strong> 和 <strong>DPI</strong>（每英寸点数）之间的数学关系。此工具可计算出在不损失专业质量的情况下打印图像的确切最大尺寸。' },

    { type: 'stats', items: [
        { value: '300', label: '专业标准 DPI', icon: 'mdi:target' },
        { value: '100%', label: '精确计算', icon: 'mdi:check' },
        { value: 'ISO 216', label: '支持格式', icon: 'mdi:file-document' }
    ], columns: 3 },

    { type: 'title', text: '了解 DPI：像素 vs 墨点', level: 3 },
    { type: 'paragraph', html: '常见的混淆是认为 DPI 和像素是一回事。其实不然。像素包含在您的数字文件中。DPI 是打印机将其转换为纸上墨水的方式。' },
    { type: 'list', items: [
        '<strong>DPI (Dots Per Inch):</strong> 打印机在一英寸直线（2.54 厘米）内放置多少墨点。',
        '<strong>像素:</strong> 数字文件中的小数据方块。无论 DPI 如何，一张 3000x2000 像素的照片所含的信息是恒定的。',
        '<strong>公式:</strong> 打印尺寸（英寸）= 像素 / DPI。示例：3000 像素 / 300 DPI = 10 英寸（25.4 厘米）'
    ], icon: 'mdi:check' },

    { type: 'title', text: 'DPI 质量级别对照', level: 3 },
    { type: 'table', headers: ['DPI', '视觉质量', '使用场景', '观看距离'], rows: [
        ['600+ DPI', '极佳 (完美)', '艺术书籍、奢侈品杂志、精细摄影', '小于 10 厘米'],
        ['300-400 DPI', '极佳 (专业)', '摄影、书籍、公司目录', '20-30 厘米 (手持)'],
        ['150-200 DPI', '良好 (网页在线打印)', '海报、日历、中等距离观看', '1-2 米'],
        ['72-100 DPI', '屏幕 (尚可)', '广告牌、远距离横幅', '5 米以上'],
        ['10-30 DPI', '低 (不适用)', '巨型广告牌、极远距离观看', '50 米以上']
    ] },

    { type: 'card', title: '300 DPI 黄金法则', html: '对于摄影和专业编辑打印，行业标准是 <strong>300 DPI</strong>。这可确保人眼在正常距离（20-30 厘米）内察觉不到单个墨点。低于 300 DPI，像素网格就会变得清晰可见。' },

    { type: 'comparative', items: [
        {
            title: '手持摄影 (10x15 照片)',
            description: '强制 300 DPI - 近距离观看',
            icon: 'mdi:image',
            points: [
                '在 3000x2000 像素下 = 最大 10x6.7 英寸',
                '保证极佳质量',
                '相册和礼品的标准'
            ]
        },
        {
            title: '壁挂海报 A3 (30x42 厘米)',
            description: '150 DPI 足够 - 远距离观看',
            icon: 'mdi:wall-fire',
            points: [
                '从 1-2 米外观看',
                '所需像素较少',
                '节省相机画质'
            ],
            highlight: true
        },
        {
            title: '广告牌 (200x300 厘米)',
            description: '15-30 DPI - 隔几米外观看',
            icon: 'mdi:sign',
            points: [
                '在 20 米外观察',
                '即使分辨率低看起来也不错',
                '优化大型文件'
            ]
        }
    ], columns: 3 },

    { type: 'title', text: '为专业打印准备文件', level: 3 },
    { type: 'proscons', items: [
        {
            pro: 'CMYK vs RGB：打印机使用墨水 (CMYK)，屏幕使用光 (RGB)。进行转换以避免颜色出现意外。',
            con: '转换时颜色可能会发生变化 - 请先查看预览'
        },
        {
            pro: '出血位 (Bleed)：如果图像必须到达纸张边缘，请在每边多留 3 毫米',
            con: '如果没有出血位，切割边缘可能会留白'
        },
        {
            pro: '插值放大不起作用：在 Photoshop 中增加像素会添加虚假信息（平滑化）',
            con: '如果您想打印大图，您需要原始的高分辨率照片'
        },
        {
            pro: '格式：照片使用无压缩 TIFF 或高质量 JPEG；徽标使用矢量图 (AI, EPS)',
            con: '在大多数在线打印店中，PNG 原生不支持 CMYK'
        }
    ], proTitle: '建议', conTitle: '禁忌' },

    { type: 'diagnostic', variant: 'warning', title: '常见错误：插值放大的迷思', icon: 'mdi:alert', badge: '关键', html: '<strong>请勿在不改变像素的情况下增加 Photoshop 中的 DPI。</strong> 将 72 DPI 增加到 300 DPI 只是单纯减小了物理打印尺寸。如果您通过插值（upscaling）“添加像素”，图像看起来会变平滑或模糊。您需要来自源文件的真实像素。' },

    { type: 'glossary', items: [
        {
            term: 'DPI (Dots Per Inch)',
            definition: '打印分辨率单位：每线性英寸（2.54 厘米）有多少个墨点。300 DPI = 300x300 = 每平方英寸 90,000 个墨点。'
        },
        {
            term: 'CMYK',
            definition: '打印色彩空间：青色 (Cyan)、品红色 (Magenta)、黄色 (Yellow)、黑色 (blacK)。基于减色墨水。与屏幕的 RGB（加色光）不同。'
        },
        {
            term: '出血位 (Bleed)',
            definition: '印刷后会被裁剪掉的额外区域（通常为 3 毫米）。确保图像延伸到边缘而不留白边。'
        },
        {
            term: '原生分辨率',
            definition: '由相机捕捉的、未经处理的真实像素。在不改变像素的情况下增加 DPI 并不产生“原生分辨率”。'
        },
        {
            term: '插值 (Upscaling)',
            definition: '根据现有像素发明新像素的算法。对于小幅增加有用，但在大幅放大时会损失清晰度。'
        }
    ] },

    { type: 'message', title: '专业结果的技术精度', ariaLabel: '关于打印计算的信息', html: '我们的计算器在考虑国际标准（纸张 ISO 216）的情况下将像素转换为厘米。它不仅仅是一个计算器：它是您的验证器，用于判断该照片在保持专业质量的同时是否适合该打印尺寸。' },

    { type: 'title', text: '结论：打印无意外', level: 3 },
    { type: 'paragraph', html: '漂亮打印件与令人失望的打印件之间的区别在于是否了解像素与 DPI 之间的关系。在去打印店之前，请使用此计算器验证您的文件。这样您可以避免不必要的费用和令人沮丧的结果。' }
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

export const content: PrintQualityCalculatorLocaleContent = {
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
