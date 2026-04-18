import type { CategoryLocaleContent } from '../../types';

export const content: CategoryLocaleContent = {
  slug: 'audiovisual-photography',
  title: '音视频与摄影工具',
  description: '为电影制作人、摄影师和数字音视频内容创作者提供的专业工具和计算器。',
  seo: [
    {
      type: 'summary',
      title: '专业音视频工具',
      items: [
        '用于延时摄影、特效和构图的智能计算器。',
        '用于清理 EXIF 元数据的隐私工具。',
        '字幕同步和时间轴编辑。',
        '分辨率分析、打印质量和最佳观看距离。'
      ],
    },
    {
      type: 'title',
      text: '音视频制作专业工具箱',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '我们的综合实用程序套件解决了音视频制作各个阶段最常见的技术挑战。从电影级延时摄影的精确间隔计算，到通过清理多媒体文件中的 EXIF 元数据来保护隐私。',
    },
    {
      type: 'stats',
      items: [
        {
          value: '10+',
          label: '专用工具',
          icon: 'mdi:cog'
        },
        {
          value: '100%',
          label: '精确计算',
          icon: 'mdi:chart-line'
        },
        {
          value: '0%',
          label: '数据存储在服务器上',
          icon: 'mdi:shield-check'
        }
      ],
      columns: 3
    },
    {
      type: 'title',
      text: '工具类别',
      level: 3,
    },
    {
      type: 'comparative',
      items: [
        {
          title: '延时摄影与电影感',
          description: '为您的电影镜头计算拍摄间隔、总时长和帧率。',
          icon: 'mdi:film',
          points: [
            '所需帧数计算',
            '时长（秒/分钟）',
            '可变播放速度'
          ]
        },
        {
          title: '隐私与元数据',
          description: '通过删除文件中的 EXIF 数据和敏感元数据来保护您的隐私。',
          icon: 'mdi:lock',
          points: [
            'EXIF 数据分析',
            '地点元数据清理',
            '设备信息移除'
          ]
        },
        {
          title: '字幕编辑',
          description: '以毫秒级的精度同步、调整和编辑字幕。',
          icon: 'mdi:text',
          points: [
            '实时同步',
            '入点/出点时间编辑',
            '全局延迟调整'
          ]
        },
        {
          title: '图像分析',
          description: '计算分辨率、打印和观看距离的技术参数。',
          icon: 'mdi:image',
          points: [
            'DPI 与分辨率计算',
            '推荐观看距离',
            '打印质量分析'
          ],
          highlight: true
        }
      ],
      columns: 2
    },
    {
      type: 'title',
      text: '为什么选择我们的工具',
      level: 3,
    },
    {
      type: 'proscons',
      items: [
        {
          pro: '100% 基于浏览器处理 - 您的数据永远不会上传到服务器',
          con: '需要支持 JavaScript 的现代浏览器'
        },
        {
          pro: '所有音视频计算均具有数学精度',
          con: '极少特定情况可能需要人工核对'
        },
        {
          pro: '专为行业专业人士设计的直观界面',
          con: '在桌面/平板电脑屏幕上体验最佳'
        },
        {
          pro: '完全免费的工具，无使用限制',
          con: '无专门的高级支持（提供社区支持）'
        }
      ],
      proTitle: '优势',
      conTitle: '注意事项'
    },
    {
      type: 'title',
      text: '快速入门指南',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '根据您的项目类型选择所需的工具',
        '输入技术参数（帧数、分辨率、时间等）',
        '立即获得计算结果和精确数据',
        '导出结果或将其应用到您的工作流程中',
        '可以无限制地为多个项目重复此过程'
      ],
      icon: 'mdi:arrow-right'
    },
    {
      type: 'tip',
      title: '专业提示',
      html: '在处理多个片段或序列时，我们建议将关键参数（相机分辨率、常用帧率、字幕语言）保存在文档中。这样您可以快速访问它们，而无需每次重新计算。'
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'EXIF',
          definition: '在数字图像中存储元数据（日期、相机、GPS 位置等）的文件格式。它可能带来隐私风险。'
        },
        {
          term: 'FPS (每秒帧数)',
          definition: '每秒播放的帧数。常见值：24 fps（电影）、25 fps（PAL）、30 fps（NTSC）、60 fps（平滑视频）。'
        },
        {
          term: 'DPI (每英寸点数)',
          definition: '打印中的分辨率衡量标准。DPI 越高 = 质量越好。对于专业摄影，建议至少 300 DPI。'
        },
        {
          term: '延时摄影 (Timelapse)',
          definition: '一种电影摄制技术，通过定期拍摄帧来加速时间，创造出快速移动的效果。'
        },
        {
          term: '字幕同步',
          definition: '将字幕的开始/结束时间与电影或剧集的音频及视频对齐的过程。'
        },
        {
          term: '元数据 (Metadata)',
          definition: '媒体文件中描述内容的隐藏信息（作者、创建日期、所用设备、地点等）。'
        }
      ]
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: '如何选择正确的工具',
      icon: 'mdi:help-circle',
      badge: '选择指南',
      html: '<strong>正在创建延时摄影？</strong> -> 使用延时摄影计算器。<br><strong>需要保护隐私？</strong> -> 元数据清理工具。<br><strong>正在处理字幕？</strong> -> 字幕同步与编辑器。<br><strong>需要优化图像？</strong> -> 分辨率和观看距离计算器。'
    },
    {
      type: 'card',
      title: '核心功能',
      html: '我们所有的工具都在您的浏览器中 <strong>100% 本地</strong>运行。这意味着最高限度的隐私保护、即时的响应速度以及（初次加载后的）离线访问。'
    },
    {
      type: 'message',
      title: '隐私保护',
      ariaLabel: '关于隐私和数据存储的信息',
      html: '我们不存储、处理或共享您的音视频数据。所有计算和元数据清理工作仅在您的设备上进行。您对自己的内容拥有完全的控制权。'
    }
  ],
};
