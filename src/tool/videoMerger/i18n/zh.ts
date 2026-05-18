import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { VideoMergerUI, VideoMergerLocaleContent } from '../index';

const slug = 'merge-videos-online';
const title = '在线合并视频：快速免费拼接多个视频';
const description = '免费在线将多个视频合并拼接成一个，完全在本地处理。无水印，无需上传，在您的浏览器中100%保护隐私。';

const ui: VideoMergerUI = {
    uploadTitle: "上传您的视频文件",
    uploadFormats: "拖放多个视频或点击选择它们",
    privacyNote: "您的视频100%在本地处理。没有任何文件会被上传到互联网。",
    addMoreBtn: "添加更多视频",
    mergeBtn: "立即合并视频",
    mergingStatus: "正在合并视频...",
    downloadBtn: "下载合并后的视频",
    resetBtn: "重新开始",
    emptyList: "拖动或选择视频以开始合并。",
    listTitle: "视频合并顺序",
    optionsTitle: "输出设置",
    optionResolution: "分辨率",
    optionFps: "帧率 (FPS)",
    optionsQualityNote: "如果视频尺寸不同，最终分辨率将自动调整，并使用信箱模式（黑边）保持原始宽高比。",
    faqTitle: "关于视频合并的常见问题",
    bibliographyTitle: "参考资料与链接",
    resolutionWarning: "注意：部分视频分辨率不同，系统将自动进行适配。"
};

const faq: VideoMergerLocaleContent['faq'] = [
    {
        question: "将视频上传到这个工具安全吗？",
        answer: "是的，完全安全。该工具100%在您的浏览器本地运行。您的视频永远不会通过互联网传输，也不会保存在任何服务器上。",
    },
    {
        question: "如果我的视频尺寸不同会怎样？",
        answer: "我们的工具会自动缩放视频以适应您选择的输出分辨率。对于比例不完全匹配的视频，系统将添加黑边（信箱模式）以保留原始宽高比。",
    },
    {
        question: "合并时视频的音频会保留吗？",
        answer: "是的。每个视频的音轨都会被提取，并与每个图像片段完美同步，按顺序混合在一起。",
    },
];

const howTo: VideoMergerLocaleContent['howTo'] = [
    {
        name: "选择或拖动您的视频",
        text: "直接从您的电脑或手机加载您想要合并的所有视频文件。",
    },
    {
        name: "调整顺序",
        text: "使用列表中的上下按钮对上传的视频进行排序，以决定播放顺序。",
    },
    {
        name: "调整选项",
        text: "选择合并后视频的输出分辨率和帧率（FPS）。",
    },
    {
        name: "合并并导出",
        text: "点击合并按钮。等待实时处理完成，然后下载生成的文件。",
    },
];

const seo: VideoMergerLocaleContent['seo'] = [
    {
        type: 'summary',
        title: '100%本地专业视频合并',
        items: [
            '直接在您的浏览器中实时处理',
            '支持不同尺寸和格式的多个视频 (MP4, WEBM, MOV)',
            '可选的输出分辨率 (720p, 1080p, 2K, 4K)',
            '音轨完美按顺序组合'
        ]
    },
    { type: 'title', text: '免费在线合并视频：无限的简单与隐私', level: 2 },
    { type: 'paragraph', html: '想知道<strong>如何轻松地将两个视频合并为一个</strong>吗？您不再需要下载笨重的软件或付费应用。我们<strong>免费在线合并视频</strong>的工具可让您在几秒钟内拼接所需的所有剪辑。由于100%在本地工作，您无需将文件上传到任何服务器，这不仅保证了绝对的隐私，还能让您<strong>合并大文件视频</strong>而无需等待上传时间。' },
    
    { type: 'title', text: '无水印合并视频', level: 3 },
    { type: 'paragraph', html: '其他应用程序最大的缺点之一就是它们会破坏您的内容。有了我们，您可以<strong>无水印在线合并视频</strong>。您下载的文件将完全是您的创作，干净、专业，可以直接分享到YouTube、Instagram、TikTok或供个人使用。' },

    { type: 'stats', items: [
        { value: '100%', label: '私密且本地', icon: 'mdi:shield-check' },
        { value: '0MB', label: '无上传数据', icon: 'mdi:upload-off' },
        { value: '4K', label: '最高分辨率', icon: 'mdi:video-high-definition' }
    ], columns: 3 },

    { type: 'title', text: '视频合并的常见用例', level: 3 },
    { type: 'comparative', items: [
        {
            title: '社交媒体',
            description: '快速将快拍、TikTok或Reels合并为一个视频',
            icon: 'mdi:instagram',
            points: [
                '拼接用手机录制的小片段',
                '为Instagram或YouTube准备连续内容',
                '无烦人水印的合并'
            ]
        },
        {
            title: '演示文稿',
            description: '将介绍和演示录像合并为一个文件',
            icon: 'mdi:presentation',
            points: [
                '将动画片头与演示文稿正文结合',
                '连接简短的软件演示',
                '以标准MP4/WEBM格式干净导出'
            ],
            highlight: true
        },
        {
            title: '家庭影像集',
            description: '合并您假期或庆祝活动的多个视频',
            icon: 'mdi:home-heart',
            points: [
                '将派对的所有精彩瞬间制作成一个视频',
                '按时间顺序归类旅行回忆',
                '合并为一个文件，轻松分享'
            ]
        },
        {
            title: '教育视频',
            description: '拼接简短的培训章节或课程',
            icon: 'mdi:school',
            points: [
                '将独立的小教程分组',
                '为您的课程添加片尾剪辑',
                '专业地构建您的课程'
            ]
        }
    ], columns: 2 },

    { type: 'title', text: '浏览器端最好的视频合并应用', level: 2 },
    { type: 'paragraph', html: '这不仅是一个网页；得益于现代HTML5视频API，它是一个可以直接在您的浏览器中运行的真正<strong>视频合并应用</strong>。您可以<strong>合并MP4视频</strong>、WEBM等，混合不同分辨率（如果尺寸不同，我们的系统会自动应用信箱模式），并选择最终导出的帧率（FPS）。' },

    { type: 'title', text: '合并方式比较', level: 3 },
    { type: 'table', headers: ['功能特点', '我们的本地工具', '传统的在线转换器', '专业视频编辑器'], rows: [
        ['隐私安全', '完全（在您的设备上处理）', '低（需要将文件上传到服务器）', '完全（安装在您的设备上）'],
        ['网络消耗', '零（无需上传千兆字节的数据）', '极高（大量上传和下载）', '零'],
        ['水印限制', '无（100%干净）', '有（免费版本通常带有水印）', '无（需要购买许可证）'],
        ['价格成本', '100% 免费', '免费但有诸多限制，或需订阅', '通常非常昂贵'],
        ['学习曲线', '极低（拖拽、排序即可合并）', '较低', '极高（需要专门的培训学习）']
    ] },

    { type: 'proscons', items: [
        {
            pro: '隐私保障：文件绝不会离开您的设备，安全性最高',
            con: '合并大型视频的速度取决于您本地计算机的内存和处理器性能'
        },
        {
            pro: '专业成果：100%免费，无需注册账号，且没有任何水印',
            con: '在拼接尺寸差异较大（如竖屏与横屏）的视频时，系统会自动添加黑边'
        },
        {
            pro: '广泛适用：采用为网页和社交媒体优化的高效编码，实现快速导出',
            con: '不支持在视频剪辑之间添加复杂的转场（如3D淡入淡出）或电影级视觉特效'
        }
    ], title: '优势与注意事项' },

    { type: 'title', text: '今天就开始合并您的视频吧', level: 2 },
    { type: 'paragraph', html: '现在，您再也没有理由留着几百个杂乱无章的视频片段了。上传您的文件，按所需的顺序排列，然后点击按钮。体验最快、最安全、最私密的<strong>在线合并视频</strong>方式。' }
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

export const content: VideoMergerLocaleContent = {
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
