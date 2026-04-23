import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { DepthOfFieldUI, DepthOfFieldLocaleContent } from '../index';

const slug = 'alan-derinligi-hesaplama';
const title = 'Alan Derinliği Hesaplama: Tüm Kameralar İçin Gerçek Zamanlı DoF';
const description = 'Alan derinliğini, hiperfokal mesafeyi ve odak sınırlarını gerçek zamanlı hesaplayın. 1/3 durak diyafram hassasiyetiyle tüm sensörleri destekler.';

const ui: DepthOfFieldUI = {
    title: 'Alan Derinliği Hesaplama',
    paramsTitle: 'Parametreler',
    sensorLabel: 'Kamera Sensörü',
    moreLabel: 'Daha fazla sensör…',
    apertureLabel: 'Diyafram',
    focalLabel: 'Odak Uzaklığı',
    distanceLabel: 'Obje Mesafesi',
    metersLabel: 'm',
    feetLabel: 'ft',
    resultsTitle: 'Sonuçlar',
    totalDofLabel: 'Toplam Alan Derinliği',
    infiniteLabel: 'Sonsuz',
    nearLimitLabel: 'Yakın Sınır',
    farLimitLabel: 'Uzak Sınır',
    hyperfocalLabel: 'Hiperfokal',
    cocLabel: 'Bulanıklık Halkası',
    cocUnit: 'mm',
    showDetailsLabel: 'Teknik detayları göster',
    hideDetailsLabel: 'Teknik detayları gizle',
    errorBelowFocal: 'Obje mesafesi odak uzaklığından büyük olmalıdır.',
};

const faq: DepthOfFieldLocaleContent['faq'] = [
    {
        question: 'Alan derinliği nedir?',
        answer: 'Alan derinliği (DoF), bir sahnedeki kabul edilebilir düzeyde net görünen mesafe aralığıdır. Diyafram, odak uzaklığı, obje mesafesi ve sensör boyutu tarafından belirlenir.',
    },
    {
        question: 'Hiperfokal mesafe nedir?',
        answer: 'Hiperfokal mesafe, sonsuzdaki nesnelerin hala kabul edilebilir düzeyde net olduğu en yakın odaklama mesafesidir. Bu mesafeye odaklanmak alan derinliğini maksimize eder.',
    },
    {
        question: 'Daha geniş diyafram (küçük f-değeri) neden alan derinliğini azaltır?',
        answer: 'Geniş diyafram, lensin daha büyük bir alanından ışık toplar, bu da odak dışı noktalar için bulanıklık halkasını büyüterek net alan derinliğini daraltır.',
    },
    {
        question: 'Sensör boyutu alan derinliğini nasıl etkiler?',
        answer: 'Büyük sensörler daha yüksek bulanıklık halkası eşiği kullanır. Ancak eşdeğer bakış açılarında, büyük sensörler daha uzun odak uzaklığı gerektirdiği için genellikle daha sığ alan derinliği üretir.',
    },
];

const howTo: DepthOfFieldLocaleContent['howTo'] = [
    {
        name: 'Kamera sensörünüzü seçin',
        text: 'Kamera gövdenize uygun olan sensör formatını seçin. Bu, hesaplamalarda kullanılacak bulanıklık halkası (CoC) değerini belirler.',
    },
    {
        name: 'Diyafram ve odak uzaklığını ayarlayın',
        text: 'Diyaframı 1/3 durak adımlarla seçin. Odak uzaklığı sürgüsü, geniş açıda daha hassas ayar yapabilmeniz için logaritmik ölçek kullanır.',
    },
    {
        name: 'Obje mesafesini belirleyin',
        text: 'Kamera ile ana objeniz arasındaki mesafeyi ayarlayın. İhtiyacınıza göre metre ve fit birimleri arasında geçiş yapın.',
    },
    {
        name: 'Sonuçları okuyun',
        text: 'Odak Çubuğu, objenizin etrafındaki net bölgeyi görselleştirir. Yakın ve uzak sınırlar kabul edilebilir odak sınırlarını gösterir.',
    },
];

const seo: DepthOfFieldLocaleContent['seo'] = [
    { type: 'title', text: 'Fotoğraf ve Sinemada Alan Derinliğini Anlamak', level: 2 },
    { type: 'paragraph', html: 'Alan derinliği, fotoğrafçılar ve sinemacılar için en güçlü yaratıcı araçlardan biridir. <strong>Sığ alan derinliği</strong> konuyu arka plandan ayırırken, <strong>geniş alan derinliği</strong> manzarayı net tutar.' },

    { type: 'title', text: 'Alan Derinliğini Kontrol Eden Üç Değişken', level: 3 },
    { type: 'table', headers: ['Değişken', 'Artış →', 'DoF Üzerindeki Etkisi'], rows: [
        ['Diyafram', 'f/1.4 → f/16', 'Daha geniş diyafram = daha sığ DoF'],
        ['Odak Uzaklığı', '24mm → 200mm', 'Daha uzun odak = aynı mesafede daha sığ DoF'],
        ['Obje Mesafesi', '1m → 10m', 'Daha uzak obje = daha geniş DoF'],
    ]},

    { type: 'title', text: 'Hiperfokal Mesafe: Maksimum Netlik', level: 3 },
    { type: 'paragraph', html: '<strong>Hiperfokal mesafeye</strong> odaklandığınızda, bu mesafenin yarısından sonsuza kadar her şey net görünür. Manzara fotoğrafçıları bu tekniği sıkça kullanır.' },
    { type: 'tip', title: 'Pratik ipucu', html: 'Sokak fotoğrafçılığı için odağınızı hiperfokal mesafeye ayarlayın. APS-C sensörde 35mm lens ve f/8 ile hiperfokal yaklaşık <strong>4 metredir</strong>: 2 metreden sonsuza her şey net olacaktır.' },

    { type: 'title', text: 'Sensör Boyutu ve Bulanıklık Halkası', level: 3 },
    { type: 'paragraph', html: '<strong>Bulanıklık halkası (CoC)</strong>, kabul edilebilir netliğin sınırıdır. Full Frame sensörde CoC 0.030mm iken akıllı telefonda ~0.006mm\'dir. Daha küçük CoC, daha katı netlik kriteri demektir.' },
    { type: 'stats', columns: 3, items: [
        { label: 'Full Frame', value: '0.030 mm', icon: 'mdi:camera' },
        { label: 'APS-C', value: '0.019 mm', icon: 'mdi:camera-outline' },
        { label: 'Akıllı Telefon', value: '0.006 mm', icon: 'mdi:cellphone' },
    ]},

    { type: 'title', text: 'Sinemada DoF: Odak Uzaklığı vs Sensör', level: 3 },
    { type: 'paragraph', html: 'Super 35 formatında çekim yapan sinemacılar, "sinematik görünüm" oluşturmak için genellikle perspektifi sıkıştıran uzun odak uzaklıklarını tercih ederler.' },
    { type: 'diagnostic', variant: 'success', title: 'Odak Dağılım Kuralı', icon: 'mdi:lightbulb-outline', badge: 'Profil Teknik', html: '3 metredeki bir obje için 50mm ve f/2.8 ile: Net alan objenin arkasında, önüne göre her zaman daha fazladır; oran yaklaşık <strong>2:1</strong>\'dir.' },
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
    inLanguage: 'tr',
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
