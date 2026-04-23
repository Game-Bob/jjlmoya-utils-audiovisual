import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { DepthOfFieldUI, DepthOfFieldLocaleContent } from '../index';

const slug = 'depth-of-field-calculator';
const title = '被写界深度計算機：あらゆるカメラに対応したリアルタイムDoF';
const description = '被写界深度、過焦点距離、フォーカス範囲をリアルタイムで計算。すべてのセンサーサイズに対応し、1/3段刻みの絞り精度を実現。';

const ui: DepthOfFieldUI = {
    title: '被写界深度計算機',
    paramsTitle: '設定パラメータ',
    sensorLabel: 'カメラセンサー',
    moreLabel: 'その他のセンサー…',
    apertureLabel: '絞り値 (Aperture)',
    focalLabel: '焦点距離 (Focal Length)',
    distanceLabel: '被写体距離',
    metersLabel: 'm',
    feetLabel: 'ft',
    resultsTitle: '計算結果',
    totalDofLabel: '合計被写界深度',
    infiniteLabel: '無限遠',
    nearLimitLabel: '前方限界点',
    farLimitLabel: '後方限界点',
    hyperfocalLabel: '過焦点距離',
    cocLabel: '許容錯乱円径 (CoC)',
    cocUnit: 'mm',
    showDetailsLabel: '詳細な技術仕様を表示',
    hideDetailsLabel: '技術仕様を隠す',
    errorBelowFocal: '被写体距離は焦点距離より大きく設定してください。',
};

const faq: DepthOfFieldLocaleContent['faq'] = [
    {
        question: '被写界深度とは何ですか？',
        answer: '被写界深度（DoF）とは、写真の中でピントが合っているように見える前後の距離の範囲のことです。絞り、焦点距離、撮影距離、センサーサイズによって決まります。',
    },
    {
        question: '過焦点距離とは何ですか？',
        answer: '無限遠にある物体が許容できる鮮明さで写る、最も近いピント合わせ距離のことです。この距離にピントを合わせると、被写界深度を最大化できます。',
    },
    {
        question: 'なぜ絞りを開く（F値を小さくする）と被写界深度が浅くなるのですか？',
        answer: '絞りを大きく開くとレンズの広い範囲から光が集まるため、ピント位置から外れた場所での錯乱円が大きくなり、鮮明に見える範囲（被写界深度）が狭まります。',
    },
    {
        question: 'センサーサイズは被写界深度にどう影響しますか？',
        answer: '大型センサーは許容錯乱円のしきい値が大きいため、同じ画角で比較した場合、長い焦点距離が必要となるため、結果として被写界深度が浅くなります。',
    },
];

const howTo: DepthOfFieldLocaleContent['howTo'] = [
    {
        name: 'カメラセンサーを選択する',
        text: 'お使いのカメラに合ったセンサーフォーマットを選択してください。これにより、計算に使用される許容錯乱円（CoC）の値が設定されます。',
    },
    {
        name: '絞りと焦点距離を設定する',
        text: '絞り値を1/3段刻みで選択します。焦点距離スライダーは対数スケールを採用しており、広角側の微調整がしやすくなっています。',
    },
    {
        name: '被写体距離を調整する',
        text: 'カメラから主被写体までの距離を設定します。必要に応じてメートルとフィートを切り替えられます。',
    },
    {
        name: '結果を確認する',
        text: 'フォーカスバーで被写体周辺の鮮明なゾーンを視覚的に確認できます。前方・後方限界点は具体的なピント範囲を示します。',
    },
];

const seo: DepthOfFieldLocaleContent['seo'] = [
    { type: 'title', text: '写真と映画における被写界深度の理解', level: 2 },
    { type: 'paragraph', html: '被写界深度は、フォトグラファーや映像作家にとって最も強力な表現ツールの一つです。<strong>浅い被写界深度</strong>で背景から被写体を際立たせ、<strong>深い被写界深度</strong>で広大な風景を隅々まで鮮明に写し出します。' },

    { type: 'title', text: '被写界深度を制御する3つの要素', level: 3 },
    { type: 'table', headers: ['要素', '変更内容 →', 'DoFへの影響'], rows: [
        ['絞り (Aperture)', 'f/1.4 → f/16', '絞りを開くほど被写界深度は浅くなる'],
        ['焦点距離', '24mm → 200mm', '焦点距離が長いほど、同一距離では浅くなる'],
        ['撮影距離', '1m → 10m', '被写体が遠いほど被写界深度は深くなる'],
    ]},

    { type: 'title', text: '過焦点距離：鮮明さを最大化する', level: 3 },
    { type: 'paragraph', html: '<strong>過焦点距離</strong>にピントを合わせると、その距離の半分から無限遠までが鮮明な範囲（被写界深度内）に収まります。風景写真で手前から奥までピントを合わせる際によく使われます。' },
    { type: 'tip', title: '実践的なヒント', html: 'ストリートスナップでは、フォーカスを過焦点距離に固定して撮影してみましょう。APS-C機の35mmレンズでf/8の場合、過焦点距離は約<strong>4メートル</strong>です。これにより、2mから無限遠までをピントの範囲に収められます。' },

    { type: 'title', text: 'センサーサイズと許容錯乱円', level: 3 },
    { type: 'paragraph', html: '<strong>許容錯乱円 (CoC)</strong>とは、「鮮明である」と判定されるしきい値です。フルサイズ機では0.030mm、スマートフォンでは約0.006mmが基準となります。CoCの値が小さいほど、より厳格なシャープネスが求められます。' },
    { type: 'stats', columns: 3, items: [
        { label: 'フルサイズ', value: '0.030 mm', icon: 'mdi:camera' },
        { label: 'APS-C', value: '0.019 mm', icon: 'mdi:camera-outline' },
        { label: 'スマートフォン', value: '0.006 mm', icon: 'mdi:cellphone' },
    ]},

    { type: 'title', text: '映画制作におけるDoF：焦点距離 vs センサー', level: 3 },
    { type: 'paragraph', html: 'スーパー35（APS-Cに近いサイズ）で撮影する映像作家は、パースを圧縮して「映画的なルック」を作るために望遠レンズを多用します。明るい85mm単焦点レンズでのポートレート撮影は、その代表例です。' },
    { type: 'diagnostic', variant: 'success', title: 'ピント配分の法則', icon: 'mdi:lightbulb-outline', badge: 'プロのテクニック', html: 'フルサイズ機の50mm、f/2.8で3メートル先の被写体を撮る場合、ピントが合って見える範囲は被写体の前方より後方のほうが常に広く、その比率は概ね <strong>2:1</strong> になります。' },
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
