import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ImageCompressorUI, ImageCompressorLocaleContent } from '../index';

const slug = 'online-image-compressor-reduce-file-size-no-quality-loss';
const title = '在线图像压缩工具：无损减小文件大小';
const description = '免费优化和压缩 JPG、PNG 和 WebP 照片。减小文件大小，在本地提高您的网页加载速度。';

const ui: ImageCompressorUI = {
    dropTitle: "优化图像",
    dropSubtitle: "拖动照片以立即减轻其重量。",
    settingsTitle: "压缩设置",
    qualityLabel: "视觉质量",
    widthLabel: "最大宽度 (像素)",
    convertToWebpLabel: "转换为 WebP",
    compressionLabel: "压缩",
    compressBtn: "压缩图像",
    processingLabel: "处理中...",
    resultsTitle: "优化后的图像",
    originalSizeLabel: "原始大小",
    newSizeLabel: "新大小",
    reductionLabel: "节省",
    downloadBtn: "下载",
    addMoreBtn: "添加更多",
    browseFilesBtn: "浏览文件",
    processedFilesTitle: "已处理文件",
    downloadAllBtn: "下载全部",
    adjustThisImage: "调整此图像",
    downloadTitle: "下载",
    maxWidthLabel: "最大宽度 (px)",
    closeBtn: "关闭",
    totalSavingsLabel: "总节省",
    noSavings: "无净节省",
    faqTitle: "常见问题": "参考资料"
};

const faq: ImageCompressorLocaleContent['faq'] = [
    {
        question: "无损压缩是如何工作的？",
        answer: "我们使用的算法可以删除不必要的元数据并优化像素编码。选择 WebP 时，会使用比传统格式更先进的压缩技术。",
    },
    {
        question: "我的图像会被上传到任何服务器吗？",
        answer: "不会。所有处理都 100% 发生在您的浏览器中（客户端）。您的照片绝不会离开您的计算机，确保绝对隐私。",
    },
    {
        question: "为什么要转换为 WebP？",
        answer: "WebP 是现代网络标准格式。它提供的质量优于 JPG 和 PNG，且重量减轻高达 30%，从而加快了页面加载速度。",
    },
];

const howTo: ImageCompressorLocaleContent['howTo'] = [
    {
        name: "上传图像",
        text: "上传您要压缩的文件（JPG、PNG 或 WebP）。",
    },
    {
        name: "调整质量",
        text: "使用滑块在文件大小和视觉质量之间找到完美的平衡（建议：75 85%）。",
    },
    {
        name: "调整大小（可选）",
        text: "如果图像非常大，您可以指定最大宽度以降低其分辨率。",
    },
    {
        name: "下载结果",
        text: "点击下载按钮，获取已准备好使用的优化图像。",
    },
];

const seo: ImageCompressorLocaleContent['seo'] = [
    {
        type: 'summary',
        title: '专业网页图像优化',
        items: [
            '智能 JPG、PNG 和 WebP 压缩',
            '在保持视觉质量的同时减重 50-80%',
            '100% 本地处理 - 隐私保证',
            '改善 Core Web Vitals 和 SEO 排名'
        ]
    },
    { type: 'title', text: '图像优化：网络速度和 Core Web Vitals', level: 2 },
    { type: 'paragraph', html: '在数字即时的时代，缓慢的网页会失去用户。未优化的图像占网页总重量的 60-70%。优化它们是改善您的 Google 指标（LCP、CLS）和搜索结果排名的第一步。' },

    { type: 'stats', items: [
        { value: '50-80%', label: '典型减重比例', icon: 'mdi:trending-down' },
        { value: '100%', label: '本地隐私', icon: 'mdi:lock' },
        { value: '+30%', label: '比 JPG 更快', icon: 'mdi:speedometer' }
    ], columns: 3 },

    { type: 'title', text: '压缩格式详解', level: 3 },
    { type: 'table', headers: ['格式', '压缩方式', '使用案例', '兼容性'], rows: [
        ['JPEG', '有损 50-90%', '相机照片、编辑内容', '通用 (100%)'],
        ['PNG', '无损 30-50%', '图形、徽标、透明度', '通用 (100%)'],
        ['WebP', '有损/无损 提升 25-35%', '现代网页、社交网络', '95% 现代浏览器'],
        ['AVIF', '有损/无损 提升 20%', '下一代网页', '仅限新版本浏览器']
    ] },

    { type: 'card', title: '为什么 WebP 是未来', html: 'Google 专门为网络开发了 WebP。它提供优于 JPEG 和 PNG 的压缩，同时保持或提高视觉质量。它比同等的 JPEG 小 25-35%。现代浏览器对它的支持率达到 95%。' },

    { type: 'title', text: '有损压缩 vs 无损压缩', level: 3 },
    { type: 'comparative', items: [
        {
            title: '有损压缩',
            description: 'JPG, WebP - 删除感觉不到的视觉信息',
            icon: 'mdi:compress',
            points: [
                '减少原始重量的 70-90%',
                '如果质量保持在 75% 以上，肉眼无法察觉',
                '写实摄影的理想选择',
                '不建议用于徽标或清晰文本'
            ],
            highlight: true
        },
        {
            title: '无损压缩',
            description: 'PNG, WebP 无损 - 保持 100% 视觉数据',
            icon: 'mdi:shield',
            points: [
                '减重 20-50%',
                '画质完美，无降级',
                '图形、徽标、透明度的理想选择',
                '文件比有损压缩更重'
            ]
        }
    ], columns: 2 },

    { type: 'title', text: '对 SEO 和转化率的影响', level: 3 },
    { type: 'list', items: [
        '<strong>Core Web Vitals：</strong> Google 会惩罚速度慢的网站。优化的图像直接改善 LCP（最大内容绘制）。',
        '<strong>跳出率：</strong> 每秒延迟 = 跳出率增加 7%。更快的图像 = 离开的用户更少。',
        '<strong>搜索排名：</strong> 速度是一个排名因素。优化图像可以提升排名。',
        '<strong>转化率：</strong> 加载速度越快 = 转化率越高。研究表明，优化后转化率可提高 10%。'
    ], icon: 'mdi:check' },

    { type: 'proscons', items: [
        {
            pro: '绝对隐私：100% 本地处理，无云端服务器',
            con: '需要支持 Canvas API 的浏览器（通用标准）'
        },
        {
            pro: '在同等质量下，WebP 比 JPEG 小 25-35%',
            con: '旧版 Safari 和 IE 不支持 WebP（提供回退方案）'
        },
        {
            pro: '多图像即时处理',
            con: '极大图像（>50MB）可能需要等待'
        },
        {
            pro: '可选调整大小：在压缩的同时降低分辨率',
            con: '调整大小会丢失信息 - 最好从源头优化分辨率'
        }
    ], proTitle: '优势', conTitle: '局限性' },

    { type: 'tip', title: '数字安全提示', html: '在任何社交网络发帖<strong>之前先清理</strong>您的照片。即使您删除了帖子，元数据也可能已被搜索引擎或存档编入索引。预防胜于治疗。养成习惯：<br><br><em>照片 → 清除 EXIF/压缩 → 发布</em>' },

    { type: 'diagnostic', variant: 'warning', title: '注意：过度压缩会导致降级', icon: 'mdi:alert', badge: '质量', html: '摄影保持质量 >75%，编辑内容保持质量 >85%。在此之下，压缩伪影（斑点、色带）会变得明显。而在缩略图中看起来不错的图像在大图中可能看起来很糟。' },

    { type: 'glossary', items: [
        {
            term: '有损压缩',
            definition: '删除人眼视为“噪声”的视觉数据。摄影的理想选择。JPEG、有损 WebP、HEIC 均属于有损压缩。'
        },
        {
            term: '无损压缩',
            definition: '减小尺寸而不丢失视觉信息。PNG 和无损 WebP。图形、徽标、透明度的理想选择。'
        },
        {
            term: 'Core Web Vitals (Google)',
            definition: '用户体验指标：LCP（加载速度）、FID（交互延迟）、CLS（视觉稳定性）。影响 SEO 排名。'
        },
        {
            term: 'WebP',
            definition: '由 Google 开发的格式。比 JPEG 小 25-35%。95% 的现代浏览器（IE 除外）均支持。'
        },
        {
            term: '压缩伪影',
            definition: '由过度压缩引起的视觉缺陷：斑点、色彩带、边缘模糊。画质 >75% 时肉眼不可见。'
        }
    ] },

    { type: 'message', title: '专业网页优化', ariaLabel: '关于图像优化 SEO 的信息', html: '这不仅仅是技术虚荣：压缩图像是对用户体验和 Google 排名的直接投资。每 1 KB 对移动设备都至关重要。我们的工具将过去需要专业软件 ($$$) 的工作变成了只需点击 3 次的免费过程。' },

    { type: 'title', text: '为现代网络做好准备', level: 3 },
    { type: 'paragraph', html: '使用智能压缩和 WebP 格式，使您的在线形象在搜索中快速、响应灵敏且具竞争力。专业品质，最小重量，即时加载。' }
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

export const content: ImageCompressorLocaleContent = {
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
