import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { TvDistanceUI, TvDistanceLocaleContent } from '../index';

const slug = 'tv-viewing-distance-calculator-thx-4k-optimal-screen';
const title = '电视观看距离计算器：THX 与 4K 最佳屏幕设置';
const description = '根据电视尺寸和分辨率计算理想的观看距离。利用 THX 和 SMPTE 标准优化您的家庭影院体验。';

const ui: TvDistanceUI = {
    specTitle: "规格设置",
    diagonalLabel: "对角线尺寸",
    resolutionLabel: "分辨率",
    thxRecommendation: "THX 推荐标准",
    thxDescription: "THX 建议观看距离应覆盖 40 度的视角，以获得身临其境的电影体验。",
    simulationBadge: "实时模拟",
    tvWidthLabel: "厘米宽",
    userLocationLabel: "您的位置",
    minLimitLabel: "最小限制距离",
    optimalLimitLabel: "最佳观看距离",
    maxLimitLabel: "最大限制距离",
    unitMeters: "米",
    unitCm: "厘米"
};

const faq: TvDistanceLocaleContent['faq'] = [
    {
        question: "计算距离时，分辨率为什么很重要？",
        answer: "在更高的分辨率下（如 4K 或 8K），像素点更小。这允许您坐得更近而不会察觉到像素颗粒感，从而增强沉浸感。",
    },
    {
        question: "什么是 40 度视角？",
        answer: "这是 THX 推荐的标准视角，使屏幕占据您大部分的周边视觉，类似于在专业电影院中的观看体验。",
    },
    {
        question: "我可以坐得比推荐距离更远吗？",
        answer: "可以，但您将失去高分辨率带来的优势。如果您坐得离 4K 电视太远，您的眼睛将无法分辨额外的细节，看到的画面效果将降级到如同 1080p 一样。",
    },
];

const howTo: TvDistanceLocaleContent['howTo'] = [
    {
        name: "设定英寸数",
        text: "移动滑块选择您当前电视或计划购买的电视尺寸。",
    },
    {
        name: "选择分辨率",
        text: "在 1080p、4K 或 8K 之间选择，以调整视觉敏锐度限值。",
    },
    {
        name: "查看视觉模拟",
        text: "在图表中观察您与屏幕之间尺寸关系的实时变化。",
    },
    {
        name: "调整沙发位置",
        text: "将您的座位放置在“最佳观看距离”范围内，以实现最大的电影沉浸感。",
    },
];

const seo: TvDistanceLocaleContent['seo'] = [
    {
        type: 'summary',
        title: '基于分辨率和尺寸的最佳电视观看距离',
        items: [
            '符合 THX 标准 (40°) 的沉浸式电影体验',
            '针对 1080p、4K 和 8K 的精确计算',
            '设置方案的实时视觉模拟',
            '避免视觉疲劳，最大化内容沉浸感'
        ]
    },
    { type: 'title', text: '沉浸感科学：最佳电视观看距离', level: 2 },
    { type: 'paragraph', html: '这不仅关乎舒适度，更涉及人类的视觉生理学。人眼有感知分辨率的极限；如果您坐得离 4K 屏幕太远，您就是在浪费视觉无法捕捉到的像素价值。而如果坐得太近，则会导致视疲劳。' },

    { type: 'stats', items: [
        { value: '40°', label: 'THX 理想视角', icon: 'mdi:eye' },
        { value: '100%', label: '像素有效利用', icon: 'mdi:video-high-definition' },
        { value: '零', label: '视觉疲劳', icon: 'mdi:heart-pulse' }
    ], columns: 3 },

    { type: 'title', text: '两大专业标准：THX vs SMPTE', level: 3 },
    { type: 'paragraph', html: '视听行业有两大权威机构定义了如何优化您的观看体验：' },
    { type: 'comparative', items: [
        {
            title: 'THX 标准',
            description: '40° 视角 - 更强沉浸感',
            icon: 'mdi:filmstrip',
            points: [
                '屏幕占据更多周边视觉范围',
                '身临其境的影院体验',
                '适合动作片、体育赛事直播',
                '需要更大的房间空间'
            ],
            highlight: true
        },
        {
            title: 'SMPTE 标准',
            description: '30° 视角 - 更轻松舒适',
            icon: 'mdi:television',
            points: [
                '更舒适的坐姿距离',
                '保守的专业推荐标准',
                '适合多样化内容（新闻、剧集）',
                '更适合较小的房间'
            ]
        }
    ], columns: 2 },

    { type: 'title', text: '分辨率如何改变计算结果', level: 3 },
    { type: 'table', headers: ['分辨率', '55 英寸电视', '最小距离 (无像素点感)', 'THX 最佳距离'], rows: [
        ['1080p (Full HD)', '55 英寸', '2.0 米', '2.3 米'],
        ['4K (Ultra HD)', '55 英寸', '1.2 米', '1.5 米'],
        ['8K', '55 英寸', '0.8 米', '1.0 米']
    ] },

    { type: 'paragraph', html: '如您所见，更高分辨率允许您坐得更近而不会察觉到像素结构。4K 电视在 1.2 米处即可获得极佳体验，而 1080p 则需要至少 2 米。' },

    { type: 'card', title: '人类视觉敏锐度极限', html: '人眼的辨别能力（视觉敏锐度）是有极限的。超过一定距离，即使屏幕是 8K，您也无法区分更多细节。我们的计算让您准确处于“最佳区域”，在不浪费眼力的情况下 100% 发挥像素性能。' },

    { type: 'diagnostic', variant: 'info', title: '视觉疲劳与距离', icon: 'mdi:information', badge: '视觉健康', html: '距离太近会导致疲劳，因为眼睛需要不断适应极端的角度。距离太远会导致为了看清细节而产生肌肉紧张。我们的计算器为您找到“黄金平衡点”（THX 标准下的 40°视角）。' },

    { type: 'proscons', items: [
        {
            pro: 'THX 40° 营造真实的影院沉浸感 - 宛如置身专业影厅',
            con: '房间需要有足够的可用空间'
        },
        {
            pro: '4K 支持比 1080p 更近的距离 - 适用于狭小空间',
            con: '必须处于最小距离内才能有效发挥额外像素的优势'
        },
        {
            pro: '从一开始就正确定位，有效避免眼部疲劳',
            con: '大多数家庭客厅由于布局限制并未遵循这些标准'
        },
        {
            pro: '可以验证您当前的电视摆放是否合理',
            con: '如果摆放位置有误，可能需要挪动家具'
        }
    ], proTitle: '优势', conTitle: '局限性' },

    { type: 'glossary', items: [
        {
            term: '视角 (Viewing Angle)',
            definition: '屏幕在您的位置所覆盖的可视角度。40° = 极强沉浸感（覆盖周边视觉）；20° = 背景播放模式（无沉浸感）。'
        },
        {
            term: 'THX (Tomlinson Holman Experiment)',
            definition: '由卢卡斯影业创立的视听质量认证体系。定义了影院和家庭影院的标准。40° 是其核心推荐角度。'
        },
        {
            term: 'SMPTE (电影电视工程师协会)',
            definition: '制定电影和视频技术标准的专业组织。推荐 30° 作为稳健的开发标准距离。'
        },
        {
            term: '人类视觉敏锐度',
            definition: '人眼分辨精细细节的能力。超过一定距离后，单个像素点将无法辨认。'
        },
        {
            term: '4K (Ultra HD)',
            definition: '分辨率约为 3840x2160 像素。像素数是 1080p 的 4 倍。允许更近距离观看而无锯齿感。'
        }
    ] },

    { type: 'message', title: '专业视听空间优化', ariaLabel: '关于电视设置标准的信息', html: '专业电影院花费巨资确保距离、角度和照明完美。我们的计算器将这些同样的原则带到您的家中。这不是奢侈品：这是对视觉舒适度的投资。' },

    { type: 'title', text: '打造专业级的家庭影院', level: 3 },
    { type: 'paragraph', html: '距离与屏幕尺寸和分辨率“同样重要”。遵循这些标准，将您的客厅转变成真正的私人影厅。' }
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

export const content: TvDistanceLocaleContent = {
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
