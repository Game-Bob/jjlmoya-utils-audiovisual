import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { DepthOfFieldUI, DepthOfFieldLocaleContent } from '../index';

const slug = 'depth-of-field-calculator';
const title = '景深计算器：全相机实时景深计算';
const description = '实时计算景深、超焦距和焦点限制。支持所有传感器尺寸，具备 1/3 档光圈精度。';

const ui: DepthOfFieldUI = {
    title: '景深计算器',
    paramsTitle: '设定参数',
    sensorLabel: '相机传感器',
    moreLabel: '更多传感器…',
    apertureLabel: '光圈值',
    focalLabel: '焦距',
    distanceLabel: '拍摄距离',
    metersLabel: 'm',
    feetLabel: 'ft',
    resultsTitle: '计算结果',
    totalDofLabel: '总景深',
    infiniteLabel: '无穷远',
    nearLimitLabel: '近景界限',
    farLimitLabel: '远景界限',
    hyperfocalLabel: '超焦距',
    cocLabel: '弥散圆 (CoC)',
    cocUnit: 'mm',
    showDetailsLabel: '显示技术细节',
    hideDetailsLabel: '隐藏技术细节',
    errorBelowFocal: '拍摄距离必须大于焦距。',
};

const faq: DepthOfFieldLocaleContent['faq'] = [
    {
        question: '什么是景深？',
        answer: '景深 (DoF) 是指场景中在最终图像里显得清晰的范围。它由光圈、焦距、拍摄距离和传感器尺寸决定。',
    },
    {
        question: '什么是超焦距？',
        answer: '超焦距是指在对无穷远处的物体依然能保持清晰的情况下，最近的对焦距离。对焦在此距离可以最大化景深。',
    },
    {
        question: '为什么较大的光圈（较小的 f 值）会减小景深？',
        answer: '较大的光圈通过镜头的更大区域收集光线，这增加了焦点外点的弥散圆大小，从而收窄了清晰范围。',
    },
    {
        question: '传感器尺寸如何影响景深？',
        answer: '较大的传感器使用更大的弥散圆阈值。但在相同视角下，大传感器通常产生更浅的景深，因为它们需要更长的焦距。',
    },
];

const howTo: DepthOfFieldLocaleContent['howTo'] = [
    {
        name: '选择相机传感器',
        text: '选择与您的相机机身匹配的传感器格式。这将设定计算中使用的弥散圆 (CoC) 值。',
    },
    {
        name: '设定光圈和焦距',
        text: '以 1/3 档为增量选择光圈。焦距滑块采用对数刻度，便于在广角端进行精细调整。',
    },
    {
        name: '设定拍摄距离',
        text: '设置相机与主主体之间的距离。根据需要切换米和英尺单位。',
    },
    {
        name: '查看结果',
        text: '对焦条可视化主体周围的清晰区域。近景和远景界限显示了精确的焦点边界。',
    },
];

const seo: DepthOfFieldLocaleContent['seo'] = [
    { type: 'title', text: '深入理解摄影与电影中的景深', level: 2 },
    { type: 'paragraph', html: '景深是摄影师和摄像师最强大的创意工具之一。<strong>浅景深</strong>可以将主体从干扰背景中分离，而<strong>深景深</strong>则能让整个风景从前景到地平线保持清晰。' },

    { type: 'title', text: '控制景深的三大变量', level: 3 },
    { type: 'table', headers: ['变量', '变化趋势 →', '对景深的影响'], rows: [
        ['光圈', 'f/1.4 → f/16', '光圈越大 = 景深越浅'],
        ['焦距', '24mm → 200mm', '焦距越长 = 景深越浅（同一距离下）'],
        ['拍摄距离', '1m → 10m', '主体越远 = 景深越深'],
    ]},

    { type: 'title', text: '超焦距：实现最大清晰度', level: 3 },
    { type: 'paragraph', html: '当您对焦在<strong>超焦距</strong>时，从该距离的一半到无穷远的一切都会显得清晰。风景摄影师常用此技术确保前景和远山同时清晰。' },
    { type: 'tip', title: '实践建议', html: '对于街头摄影，将焦点设为超焦距。在 APS-C 上使用 35mm 镜头并设置 f/8 时，超焦距约为 <strong>4 米</strong>：从 2 米到无穷远的一切都将保持清晰。' },

    { type: 'title', text: '传感器尺寸与弥散圆', level: 3 },
    { type: 'paragraph', html: '<strong>弥散圆 (CoC)</strong> 是定义“清晰度”的阈值。全画幅传感器的 CoC 为 0.030mm，而智能手机约为 0.006mm。CoC 值越小意味着清晰度要求越严格。' },
    { type: 'stats', columns: 3, items: [
        { label: '全画幅', value: '0.030 mm', icon: 'mdi:camera' },
        { label: 'APS-C', value: '0.019 mm', icon: 'mdi:camera-outline' },
        { label: '智能手机', value: '0.006 mm', icon: 'mdi:cellphone' },
    ]},

    { type: 'title', text: '电影中的景深：焦距 vs. 传感器', level: 3 },
    { type: 'paragraph', html: '在 Super 35（接近 APS-C）上拍摄的电影人经常使用较长焦距来压缩透视，这也会收窄景深，营造出“电影感”。大光圈 85mm 是经典人像选择。' },
    { type: 'diagnostic', variant: 'success', title: '焦点分布规律', icon: 'mdi:lightbulb-outline', badge: '专家技法', html: '对于 3 米处的主体，使用 50mm f/2.8 全画幅拍摄：主体后的清晰区域总是比主体前大，比例约为 <strong>2:1</strong>。' },
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

export const content: DepthOfFieldLocaleContent = {
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
