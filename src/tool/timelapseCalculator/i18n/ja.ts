import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { TimelapseUI, TimelapseLocaleContent } from '../index';

const slug = 'timelapse-hyperlapse-calculator-perfect-intervals';
const title = 'タイムラプス・ハイパーラプス計算機：最適なインターバル設定';
const description = '写真撮影の間隔、動画の長さ、必要なストレージ容量を正確に計算。タイムラプス撮影に欠かせないフォトグラファー用ツール。';

const ui: TimelapseUI = {
    title: "タイムラプス計算機",
    paramsTitle: "パラメーター設定",
    eventDuration: "実際のイベントの時間は？",
    hours: "時間",
    minutes: "分",
    videoDuration: "完成させる動画の長さは？",
    seconds: "動画の秒数",
    fps: "FPS（フレームレート）",
    resultsTitle: "計算結果",
    intervalLabel: "インターバロメーターの設定値：",
    secondsUnit: "秒",
    totalPhotos: "合計写真枚数",
    speed: "再生速度",
    shutterSpeed: "シャッタースピード",
    storage: "容量目安（RAW）",
    rule180Info: "180度ルールでは、滑らかなモーションブラーを得るために、撮影間隔の半分のシャッタースピードが推奨されます。",
};

const faq: TimelapseLocaleContent['faq'] = [
    {
        question: "タイムラプス撮影で正しいインターバル（撮影間隔）を選ぶには？",
        answer: "被写体の動きの速さによります。流れる雲なら2〜3秒、太陽や星の動きなら15〜30秒、植物の成長や建物の建設現場なら5〜15分程度が目安です。",
    },
    {
        question: "1分間の動画を作るには何枚の写真が必要ですか？",
        answer: "標準的な動画は1秒間に24枚または30枚のフレーム（fps）で構成されます。24fpsで1分間の動画を作るには、正確に1440枚（60秒 × 24枚/秒）の写真が必要です。",
    },
    {
        question: "「フリッカー」とは何ですか？どうすれば防げますか？",
        answer: "写真ごとのわずかな露出の違いによって生じる、不快な画面のチラつきのことです。防ぐには、常にマニュアルモード（M）、ホワイトバランスを固定し、マニュアル絞りリングのあるレンズを使用することを推奨します。",
    },
    {
        question: "シャッタースピードが重要なのはなぜですか？",
        answer: "動きを滑らかに見せるため（180度ルール）には、シャッタースピードを撮影間隔の約半分にするのが理想的です。例えば、間隔が2秒なら、シャッタースピードを1秒にして自然なモーションブラーを作ります。",
    },
];

const howTo: TimelapseLocaleContent['howTo'] = [
    {
        name: "動画の長さを決める",
        text: "最終的に何秒、あるいは何分の動画にしたいかを指定します（例：Instagram用なら10秒など）。",
    },
    {
        name: "出力FPSを選択",
        text: "動画の滑らかさを選びます：24（映画風）、30（標準的）、60（非常に滑らかなスローモーション）。",
    },
    {
        name: "撮影間隔を調整",
        text: "被写体の動きの速さに合わせて、カメラを何秒おきに作動させるか設定します。",
    },
    {
        name: "ストレージ容量を確認",
        text: "撮影に必要な概算容量が表示されます。開始前にSDカードに十分な空きがあるか確認してください。",
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
    { type: 'title', text: 'タイムラプス・ハイパーラプス撮影の完全ガイド', level: 2 },
    { type: 'paragraph', html: '素人の早送り動画と<strong>映画のようなタイムラプス</strong>の数学的な違いは、たった一つの要素、つまり<strong>「撮影間隔（インターバル）」</strong>にあります。この計算機を使えば、日の出や都市の交通、天の川などを完璧な滑らかさで捉えるための計画面をサポートします。' },
    
    { type: 'title', text: '推奨撮影間隔テーブル（チートシート）', level: 3 },
    { type: 'paragraph', html: '被写体に合わせてインターバロメーターを設定するためのクイックリファレンスです。動きが認識でき、かつ滑らかに繋がる設定を目指しましょう。' },
    { type: 'table', headers: ['被写体 / シーン', '推奨間隔', 'イベントの最低撮影時間'], rows: [
        ['速い雲 / 嵐', '1 〜 2 秒', '20 〜 30 分'],
        ['街の交通 / 人混み（ブレ演出）', '0.5 〜 2 秒', '15 〜 20 分'],
        ['夕日 / 朝日（ホーリーグレイル）', '5 〜 10 秒', '1.5 〜 2.5 時間'],
        ['遅い雲 / 影の動き', '10 〜 15 秒', '2 〜 3 時間'],
        ['星空 / 天の川（アストロ）', '15 〜 30 秒*', '3 〜 5 時間'],
        ['建設現場 / 植物の成長', '5 〜 15 分', '数日 〜 数週間']
    ]},
    { type: 'tip', title: '星空撮影の注意点', html: '間隔は通常、光を捉えるための露出時間（500ルール等）に、カードへの書き込みバッファとして1〜2秒を加えた時間になります。' },

    { type: 'title', text: '180度ルール（モーションブラー）', level: 3 },
    { type: 'paragraph', html: 'タイムラプスでよくある失敗は、動画が「カクカク」してしまうことです。滑らかなシネマティックな外観を得るには、<strong>モーションブラー</strong>が必要です。' },
    { type: 'card', title: '黄金ルール', icon: 'mdi:information', html: 'シャッタースピードを撮影間隔の半分にします。 <br /><br /> <em>例：</em> <strong>4秒</strong>おきに撮影する場合、露出を <strong>2秒</strong> に設定します。これにより写真間の「時間の隙間」が埋まり、車の光跡や水の流れが柔らかくなります。' },

    { type: 'title', text: 'フリッカーとマニュアル絞り', level: 3 },
    { type: 'paragraph', html: '「フリッカー」とは、撮影ごとに絞り羽根がわずかにずれることで発生するチラつきのことです。' },
    { type: 'list', items: [
        '<strong>レンズツイスト:</strong> DSLR等の場合、レンズをわずかに回して電子接点を切り、絞りを機械的に固定するテクニックがあります。',
        '<strong>すべてマニュアル設定:</strong> ISO、ホワイトバランス、フォーカスは固定してください。オートモードは厳禁です。',
        '<strong>RAWで撮影:</strong> 画像を壊さずに後工程で露出や色を補正するために必須です。'
    ]},

    { type: 'diagnostic', variant: 'success', title: '高度なテクニック：ホーリーグレイル', icon: 'mdi:crown', badge: 'プロの技', html: '「ホーリーグレイル（聖杯）」とは、昼から夜（またはその逆）への滑らかな移り変わりのことです。光量が劇的に変化するため、最も難しい技術的挑戦の一つです。' },
    
    { type: 'stats', columns: 3, items: [
        { label: 'Bulb Ramping', value: '段階的露出調整', icon: 'mdi:brightness-6' },
        { label: 'Post-Pro', value: 'LRTimelapseを使用', icon: 'mdi:television-guide' },
        { label: 'Strategy', value: '夜間インターバル', icon: 'mdi:weather-night' }
    ]},

    { type: 'title', text: '結論：シンプルな仕組みに宿る「禅」', level: 3 },
    { type: 'paragraph', html: 'タイムラプスを極めるには、インターバロメーターの背後にある数学を理解することから始まります。不適切な設定で撮影チャンスを逃さないようにしましょう。' }
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
    inLanguage: 'ja',
};

export const content: TimelapseLocaleContent = {
    slug,
    title,
    description,
    ui,
    seo,
    faq,
    faqTitle: 'タイムラプス製作に関するよくある質問',
    bibliography,
    bibliographyTitle: 'タイムラプスの理論とリソース',
    howTo,
    schemas: [faqSchema as any, howToSchema as any, appSchema],
};
