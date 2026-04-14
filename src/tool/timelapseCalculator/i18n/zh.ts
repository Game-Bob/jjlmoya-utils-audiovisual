import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { TimelapseUI, TimelapseLocaleContent } from '../index';

const slug = 'timelapse-hyperlapse-calculator-intervals-china';
const title = '延时摄影与大范围延时摄影计算器：寻找完美拍摄间隔';
const description = '精确计算照片拍摄间隔、总时长以及拍摄所需的存储空间。摄影师必备的延时摄影工具。';

const ui: TimelapseUI = {
    title: "延时摄影计算器",
    paramsTitle: "参数设置",
    eventDuration: "实际事件持续多久？",
    hours: "小时",
    minutes: "分钟",
    videoDuration: "您想要的最终视频时长？",
    seconds: "视频时长 (秒)",
    fps: "FPS (帧率)",
    resultsTitle: "计算结果",
    intervalLabel: "请将您的快门线/间隔拍摄器设置为：",
    secondsUnit: "秒",
    totalPhotos: "照片总数",
    speed: "倍速",
    shutterSpeed: "快门速度",
    storage: "容量占用 (RAW)",
    rule180Info: "180° 快门法则建议将快门速度设置为拍摄间隔的一半，以获得流畅的动态模糊效果。",
};

const faq: TimelapseLocaleContent['faq'] = [
    {
        question: "如何为我的延时摄影选择正确的拍摄间隔？",
        answer: "这取决于您捕捉的运动速度。快速移动的云：2-3 秒；太阳或星星的移动：15-30 秒；植物生长或建筑施工：5-15 分钟。",
    },
    {
        question: "制作一分钟视频需要多少张照片？",
        answer: "标准视频通常为每秒 24 或 30 帧 (fps)。对于一部 24fps 的一分钟视频，您恰好需要 1440 张照片（60 秒 * 24 张/秒）。",
    },
    {
        question: "什么是“闪烁”(Flicker) 以及如何避免？",
        answer: "这是由于照片之间微小的曝光差异导致的令人不快的闪烁感。要避免它，请始终使用手动模式 (M)、固定白平衡，并优先使用带有手动光圈环的镜头。",
    },
    {
        question: "为什么快门速度很重要？",
        answer: "为了使运动看起来流畅（180° 法则），快门速度应约为拍摄间隔的一半。例如，如果间隔为 2 秒，尝试以 1 秒的快门进行拍摄，以产生自然的动态模糊。",
    },
];

const howTo: TimelapseLocaleContent['howTo'] = [
    {
        name: "定义最终视频时长",
        text: "输入您希望生成的视频持续多少秒或多少分钟（例如，针对 Instagram 设置为 10 秒）。",
    },
    {
        name: "选择输出 FPS",
        text: "选择视频的流畅度：24（电影级）、30（网页标准）或 60（流畅慢动作）。",
    },
    {
        name: "调整拍摄间隔",
        text: "根据场景的运动速度，配置相机每隔多少秒触发一次快门。",
    },
    {
        name: "核对存储空间",
        text: "计算器会告知您拍摄任务将占用多少 GB。在开始之前确保您的 SD 卡有足够的空间。",
    },
];

const bibliography: TimelapseLocaleContent['bibliography'] = [
    {
        name: "Timescapes Forum - Digital Timelapse Acquisition & Processing",
        url: "https://timescapes.org/phpBB3/viewforum.php?f=4",
    },
    {
        name: "Magic Lantern - Auto ETTR & Bulb Ramping Algorithms",
        url: "https://wiki.magiclantern.fm/ettr",
    },
    {
        name: "LRTimelapse - Visual Deflicker & Holy Grail Workflow",
        url: "https://lrtimelapse.com/tutorial/advanced/",
    },
    {
        name: "PhotoPills - Advanced Timelapse Calculator & NPF Rule",
        url: "https://www.photopills.com/calculators/timelapse",
    },
];

const seo: TimelapseLocaleContent['seo'] = [
    { type: 'title', text: '延时摄影与大范围延时摄影拍摄间隔权威指南', level: 2 },
    { type: 'paragraph', html: '业余快进视频与<strong>电影级延时摄影</strong>在数学上的区别仅在于一个因素：<strong>拍摄间隔</strong>。本计算器消除了不确定性，让您精准计划快门线拍摄任务。' },
    
    { type: 'title', text: '推荐拍摄间隔表（快速参考）', level: 3 },
    { type: 'paragraph', html: '使用此快速参考表，根据拍摄主体设置您的快门线。目标是捕捉足够的运动，使其可感知但又保持流畅。' },
    { type: 'table', headers: ['拍摄主体 / 场景', '建议间隔', '事件时长（建议最小拍摄时间）'], rows: [
        ['快云 / 风暴', '1 - 2 秒', '20 - 30 分钟'],
        ['城市交通 / 人群 (模糊效果)', '0.5 - 2 秒', '15 - 20 分钟'],
        ['日落 / 日出 (Holy Grail 圣杯拍摄)', '5 - 10 秒', '1.5 - 2.5 小时'],
        ['慢云 / 投影移动', '10 - 15 秒', '2 - 3 小时'],
        ['星星 / 银河 (天文)', '15 - 30 秒*', '3 - 5 小时'],
        ['建筑施工 / 植物生长', '5 - 15 分钟', '数天 / 数周']
    ]},
    { type: 'tip', title: '天文拍摄注記', html: '拍摄间隔通常受限于捕捉光线所需的曝光时间（500 法则） + 1 或 2 秒的存储写入缓冲时间。' },

    { type: 'title', text: '180° 快门法则（动态模糊）', level: 3 },
    { type: 'paragraph', html: '延时摄影中一个常见的错误是视频看起来“顿挫”或有频闪感。为了获得流畅的电影感，您需要 <strong>动态模糊 (Motion Blur)</strong>。' },
    { type: 'card', title: '核心法则', icon: 'mdi:information', html: '您的快门速度应该是拍摄间隔的一半。<br /><br /> <em>例如：</em>如果您每隔 <strong>4 秒</strong> 拍摄一次，您的曝光时间应为 <strong>2 秒</strong>。' },

    { type: 'title', text: '闪烁 (Flicker) 与手动光圈', level: 3 },
    { type: 'paragraph', html: '“闪烁”是由于每次拍摄之间光圈叶片收缩的微小差异导致的图像亮度抖动。' },
    { type: 'list', items: [
        '<strong>镜头微松法 (Lens Twist):</strong> 在单反相机上稍微拧松镜头以断开电子触点，使光圈机械固定。',
        '<strong>全手动设置:</strong> ISO、白平衡和对焦必须固定。切勿使用自动模式。',
        '<strong>通过 RAW 拍摄:</strong> 这对于在后期修正曝光和色彩而又不破坏画质至关重要。'
    ]},

    { type: 'diagnostic', variant: 'success', title: '进阶技术：日夜转换 (The "Holy Grail")', icon: 'mdi:crown', badge: '专家技法', html: '“圣杯拍摄”是指昼夜之间（或反之）的平滑过渡。这是难度最高的技术挑战之一。' },
    
    { type: 'stats', columns: 3, items: [
        { label: 'Bulb Ramping', value: '渐变曝光', icon: 'mdi:brightness-6' },
        { label: 'Post-Pro', value: 'LRTimelapse 流程', icon: 'mdi:television-guide' },
        { label: 'Strategy', value: '夜间拍摄间隔', icon: 'mdi:weather-night' }
    ]},

    { type: 'title', text: '总结：极简力学的艺术', level: 3 },
    { type: 'paragraph', html: '掌握延时摄影从理解快门线背后的数学规律开始。不要让错误的间隔设置毁掉您的辛苦拍摄。' }
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

export const content: TimelapseLocaleContent = {
    slug,
    title,
    description,
    ui,
    seo,
    faq,
    faqTitle: '关于延时摄影制作的常见问题',
    bibliography,
    bibliographyTitle: '延时摄影理论与资源',
    howTo,
    schemas: [faqSchema as any, howToSchema as any, appSchema],
};
