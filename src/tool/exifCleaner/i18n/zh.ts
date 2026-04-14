import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ExifCleanerUI, ExifCleanerLocaleContent } from '../index';

const slug = 'exif-metadata-cleaner-remove-gps-photo-privacy';
const title = 'EXIF 元数据清除工具：从照片中删除 GPS 和隐藏数据';
const description = '免费在线工具，在分享图像前擦除 EXIF 元数据、GPS 坐标和相机规格。100% 私密：无需将照片上传到互联网即可工作。';

const ui: ExifCleanerUI = {
    dropTitle: "将图像拖到此处",
    dropSubtitle: "删除 GPS 元数据、相机型号和隐藏设置。",
    dropLocalInfo: "100% 本地处理。不会向云端上传任何内容。",
    selectButton: "选择图像",
    processingText: "正在清除元数据...",
    analysisCompleted: "分析完成",
    downloadButton: "下载干净的图像",
    resetButton: "清除另一张图像",
    privacyRiskTitle: "检测到隐私风险：",
    gpsLabel: "GPS：",
    gpsDetected: "已检测到",
    gpsNotFound: "未找到",
    cameraLabel: "相机：",
    softwareLabel: "软件：",
    dateLabel: "日期：",
    otherTechnicalDetails: "其他技术细节",
    noMetadataFound: "未找到可读的 EXIF 元数据。",
    alreadyCleanInfo: "图像可能已经很干净了。",
    previewLabel: "预览",
    faqTitle: "关于照片隐私的常见问题",
    bibliographyTitle: "资源和 EXIF 技术文档",
};

const faq: ExifCleanerLocaleContent['faq'] = [
    {
        question: "什么是 EXIF 元数据？",
        answer: "EXIF（可交换图像文件格式）是相机或手机在每张照片内部保存的隐藏信息。它包括确切日期、设备型号、拍摄设置（ISO、光圈），以及最重要的，拍照地点的 GPS 坐标。",
    },
    {
        question: "使用这个在线工具安全吗？",
        answer: "是的，因为处理是在浏览器中 100% 本地进行的。您的照片绝不会上传到任何服务器；清除过程直接在您设备的内存中进行，确保绝对隐私。",
    },
    {
        question: "清除工具具体删除了哪些数据？",
        answer: "它擦除所有 EXIF 标签（GPS、相机品牌、序列号）、IPTC（版权、作者）和 XMP（编辑历史）。您的图像变得“干净”，仅保留视觉像素。",
    },
    {
        question: "清除元数据会损失画质吗？",
        answer: "不会。我们只删除文件的技术数据“页眉”。图像数据（像素）保持一致，因此视觉质量完全不受影响。",
    },
];

const howTo: ExifCleanerLocaleContent['howTo'] = [
    {
        name: "选择图像",
        text: "拖动您的照片或从文件浏览器中选择它们。您可以同时处理多张照片。",
    },
    {
        name: "分析当前数据",
        text: "工具将向您显示它检测到的敏感信息（例如，“已检测到 GPS 坐标”）。",
    },
    {
        name: "处理并清除",
        text: "点击清除按钮立即删除所有元数据标签。",
    },
    {
        name: "下载安全照片",
        text: "保存新版本的图像，现在已匿名化，可以安全地在社交媒体上分享。",
    },
];

const bibliography: ExifCleanerLocaleContent['bibliography'] = [
    {
        name: "可交换图像文件格式 (EXIF) - 维基百科",
        url: "https://zh.wikipedia.org/wiki/EXIF",
    },
    {
        name: "W3C - 图像中的元数据",
        url: "https://www.w3.org/community/image-metadata/",
    },
];

const seo: ExifCleanerLocaleContent['seo'] = [
    {
        type: 'summary',
        title: 'EXIF 元数据清除工具：保护您的隐私',
        items: [
            '立即从照片中删除 GPS 坐标和位置信息',
            '擦除相机型号、序列号和技术信息',
            '100% 基于浏览器的处理 - 您的图像绝不会离开您的设备',
            '保持视觉质量 - 仅删除隐藏数据'
        ]
    },
    { type: 'title', text: '数字摄影中的隐私和 EXIF 元数据完整指南', level: 2 },
    { type: 'paragraph', html: '您是否想过在向社交媒体上传照片时分享了多少个人信息？EXIF 元数据就像一个<strong>无形的指纹</strong>，可以揭示从您的精确家庭住址到摄影器材价格的一切信息。本指南解释了如何有效保护您的隐私。' },

    { type: 'stats', items: [
        { value: '100%', label: '隐私 - 本地处理', icon: 'mdi:shield-check' },
        { value: '0%', label: '服务器上存储的数据', icon: 'mdi:database' },
        { value: '即时', label: '元数据删除', icon: 'mdi:lightning-bolt' }
    ], columns: 3 },

    { type: 'title', text: '照片中隐藏了哪些信息？', level: 3 },
    { type: 'paragraph', html: '超过 90% 的数字照片包含可能危及您安全的敏感信息。以下是可能泄露的所有数据：' },
    { type: 'list', items: [
        '<strong>GPS 坐标：</strong> 拍摄的确切纬度和经度（家庭住址、工作单位、经常访问的地方）。',
        '<strong>设备识别：</strong> 相机或智能手机的品牌、型号和序列号（有价值的信息）。',
        '<strong>技术设置：</strong> ISO、光圈 (f/)、曝光时间和焦距（允许识别您的特定器材）。',
        '<strong>确切日期和时间：</strong> 您日常活动的完整时间线。',
        '<strong>编辑历史：</strong> 使用的软件、编辑软件和最后修改日期。',
        '<strong>版权数据：</strong> 摄影师、版权和个人笔记。'
    ] },

    { type: 'title', text: '真实安全风险：使用案例', level: 3 },
    { type: 'comparative', items: [
        {
            title: '专业摄影师',
            description: '通过序列号识别出的昂贵设备被盗的风险',
            icon: 'mdi:camera',
            points: [
                '窃贼寻找拥有昂贵器材的摄影师',
                'GPS 识别所有者的家庭住址',
                '序列号方便在暗网转卖'
            ]
        },
        {
            title: '父母和博主',
            description: '极端危险：儿童的实时位置',
            icon: 'mdi:alert',
            points: [
                '掠夺者使用 OSINT 追踪位置',
                '掠夺者可以识别日常生活习惯',
                '面临骚扰和身体追踪的风险'
            ],
            highlight: true
        },
        {
            title: '社交媒体用户',
            description: '个人和职业隐私曝光',
            icon: 'mdi:share-variant',
            points: [
                '从办公室发布内容会泄露工作场所位置',
                '地理位置允许推断大致薪资',
                '公开数据允许有针对性的画像'
            ]
        },
        {
            title: '旅行者和游牧者',
            description: '无人居住的房屋面临失窃危险',
            icon: 'mdi:map',
            points: [
                '发布的 GPS 指明旅行期间家中无人',
                '设备数据吸引犯罪分子',
                '旅行历史揭示日程安排和模式'
            ]
        }
    ], columns: 2 },

    { type: 'title', text: '此工具的工作原理', level: 3 },
    { type: 'list', items: [
        '<strong>1. 选择您的图像：</strong> 拖动照片或使用选择器。您可以同时处理多张照片。',
        '<strong>2. 自动分析：</strong> 工具检测并显示所有存在的元数据（GPS、相机型号、日期等）。',
        '<strong>3. 即时清除：</strong> 一键删除 100% 的有害元数据。',
        '<strong>4. 安全下载：</strong> 接收已匿名化的图像，随时可以在网络上安全分享。',
        '<strong>5. 无残留：</strong> 干净的图像保留其所有的原始视觉质量。'
    ], icon: 'mdi:check' },

    { type: 'card', title: '隐私技术', icon: 'mdi:shield-check', html: '此工具使用<strong>浏览器的 Canvas API</strong> 逐像素创建图像的干净副本，确保：<br><br>- 不向服务器发送数据<br>- 您的图像绝不会离开您的设备<br>- 100% 匿名且安全处理<br>- 即使没有互联网连接也可以使用（初始加载后）' },

    { type: 'title', text: '删除了哪些具体数据？', level: 3 },
    { type: 'table', headers: ['元数据类型', '示例', '风险'], rows: [
        ['EXIF（可交换）', 'GPS、ISO、光圈、快门速度、相机型号', '至关重要'],
        ['IPTC（发布）', '版权、作者、关键词、场景位置', '高'],
        ['XMP (XML)', '编辑历史、使用的软件、进行的编辑', '中'],
        ['基本文件数据', '创建日期、确切时间、设备', '高']
    ] },

    { type: 'proscons', items: [
        {
            pro: '完全隐私 - 100% 基于浏览器的处理',
            con: '需要支持 JavaScript 的现代浏览器'
        },
        {
            pro: '即时 - 清除一张照片不到 1 秒',
            con: '在旧设备上处理大尺寸照片可能会慢'
        },
        {
            pro: '零画质损失 - 仅删除技术数据，不删除像素',
            con: '不编辑图像（裁剪、旋转等）'
        },
        {
            pro: '完全免费且无限制 - 处理无限量照片',
            con: '无高级支持或云存储'
        }
    ], proTitle: '主要优势', conTitle: '局限性' },

    { type: 'tip', title: '数字安全提示', html: '在任何社交网络发布照片<strong>之前先进行清理</strong>。即使您删除了帖子，元数据也可能已被搜索引擎或存档编入索引。预防胜于治疗。养成习惯：<br><br><em>照片 → 清除 EXIF → 发布</em>' },

    { type: 'diagnostic', variant: 'warning', title: '不进行清理的真实风险', icon: 'mdi:alert-circle', badge: '关键安全', html: '<strong>已记录的案例：</strong><br>- 父母发布儿童照片 - 掠夺者追踪了 GPS<br>- 旅行摄影师 - 外出期间家被洗劫<br>- 博主 - 居住地点被偏执粉丝识别<br><br>这不是妄想症：这是 2026 年基本的数字卫生。' },

    { type: 'glossary', items: [
        {
            term: 'EXIF',
            definition: '可交换图像文件格式。在图像文件中存储技术元数据的标准：GPS、相机数据、曝光设置。存在于约 90% 的数字照片中，通常并非用户本意。'
        },
        {
            term: 'GPS 坐标',
            definition: '照片拍摄位置的精确经纬度。结合社交媒体，可以对人进行物理追踪。'
        },
        {
            term: 'IPTC',
            definition: '国际新闻电信理事会。可读的发布元数据：版权、作者、关键词、描述。专业摄影的标准。'
        },
        {
            term: 'XMP',
            definition: '可扩展元数据平台。一种 XML 格式，记录 Lightroom 或 Photoshop 等软件中的编辑历史。它可以显示所有进行的修改。'
        },
        {
            term: 'OSINT',
            definition: '开源情报。一种收集公开信息（社交媒体、元数据、记录）以在本人不知情的情况下对人进行画像的技术。'
        },
        {
            term: '数字匿名化',
            definition: '删除或混淆可识别信息的过程：位置、设备、行为模式。对在线隐私至关重要。'
        }
    ] },

    { type: 'message', title: '保护隐私是您的责任', ariaLabel: '关于隐私和数据权利的信息', html: '我们不存储、处理或分享您的图像。<strong>您拥有完全控制权。</strong> 所有操作仅在您的浏览器中完成。当您关闭此标签页时，不会保留您的活动记录。这就是在互联网上保护隐私的方式：尊重您的数据的工具。' },

    { type: 'title', text: '结论：分享不留痕迹', level: 3 },
    { type: 'paragraph', html: '保护数字身份从细节开始。发布前清理照片是 2026 年<strong>基本的数字卫生习惯</strong>。它不仅保护您的位置信息，还保护您的家人、资产和职业隐私。一张看似普通的照片泄露的信息可能比您想象的要多。' }
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

export const content: ExifCleanerLocaleContent = {
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
