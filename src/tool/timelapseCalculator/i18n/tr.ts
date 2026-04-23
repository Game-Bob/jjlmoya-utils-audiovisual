import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { TimelapseUI, TimelapseLocaleContent } from '../index';

const slug = 'timelapse-hyperlapse-hesaplama-mukemmel-araliklar';
const title = 'Timelapse ve Hyperlapse Hesaplama: Mükemmel Aralıklar';
const description = 'Fotoğraflar arasındaki tam aralığı, toplam süreyi ve depolama alanını hesaplayın. Fotoğrafçılar için temel bir araç.';

const ui: TimelapseUI = {
    title: "Timelapse Hesaplayıcı",
    paramsTitle: "Parametreler",
    eventDuration: "Gerçek olay ne kadar sürüyor?",
    hours: "Saat",
    minutes: "Dakika",
    videoDuration: "Nasıl bir nihai video istiyorsunuz?",
    seconds: "Süre (sn)",
    fps: "FPS",
    resultsTitle: "Sonuçlar",
    intervalLabel: "Intervalometrenizi şuna ayarlayın:",
    secondsUnit: "saniye",
    totalPhotos: "Toplam Fotoğraf",
    speed: "Hız",
    shutterSpeed: "Enstantane Hızı",
    storage: "Boyut (RAW)",
    rule180Info: "180° kuralı, akıcı bir hareket bulanıklığı için çekim aralığının yarısı kadar bir enstantane hızı önerir.",
};

const faq: TimelapseLocaleContent['faq'] = [
    {
        question: "Timelapse için doğru aralığı nasıl seçerim?",
        answer: "Çektiğiniz hareketin hızına bağlıdır. Hızlı bulutlar için 2-3 saniye; güneş veya yıldızların hareketi için 15-30 saniye; bitki büyümesi veya inşaat sahaları için 5-15 dakika kullanın.",
    },
    {
        question: "Bir dakikalık bir video için kaç fotoğrafa ihtiyacım var?",
        answer: "Standart bir video saniyede 24 veya 30 kareye (fps) sahiptir. 24 fps'de bir dakikalık video için tam olarak 1440 fotoğrafa ihtiyacınız vardır (60 saniye * 24 fotoğraf/saniye).",
    },
    {
        question: "'Flicker' nedir ve nasıl önlerim?",
        answer: "Flicker, çekimler arasındaki küçük pozlama farklarından kaynaklanan rahatsız edici bir titremedir. Önlemek için her zaman manuel modda (M) çekim yapın, beyaz dengesini sabitleyin ve manuel diyafram halkasına sahip lensleri tercih edin.",
    },
    {
        question: "Enstantane hızı neden önemlidir?",
        answer: "Hareketin akıcı görünmesi için (180° kuralı), enstantane hızı aralığın yaklaşık yarısı olmalıdır. Örneğin, aralık 2 saniye ise, doğal bir hareket bulanıklığı oluşturmak için 1 saniyede çekim yapmayı deneyin.",
    },
];

const howTo: TimelapseLocaleContent['howTo'] = [
    {
        name: "Video süresini belirleyin",
        text: "Nihai videonun kaç saniye veya dakika sürmesini istediğinizi belirtin (örn. Instagram için 10 saniye).",
    },
    {
        name: "Çıkış FPS'ini seçin",
        text: "Videonun akıcılığını seçin: 24 (sinema), 30 (web) veya 60 (akıcı ağır çekim).",
    },
    {
        name: "Çekim aralığını ayarlayın",
        text: "Sahnenin hızına göre kameranızın kaç saniyede bir çekim yapacağını yapılandırın.",
    },
    {
        name: "Depolama alanını doğrulayın",
        text: "Hesaplayıcı size oturumun kaç Gigabyte yer kaplayacağını söyleyecektir. Başlamadan önce SD kartınızda yeterli alan olduğundan emin olun.",
    },
];

const seo: TimelapseLocaleContent['seo'] = [
    { type: 'title', text: 'Timelapse ve Hyperlapse Aralıkları İçin Kesin Kılavuz', level: 2 },
    { type: 'paragraph', html: 'Amatör bir hızlandırılmış video ile <strong>sinematik bir timelapse</strong> arasındaki matematiksel fark tek bir faktöre dayanır: <strong>aralık</strong>. Bu hesaplayıcı, çekimlerinizi hassas bir şekilde planlamanıza olanak tanır.' },
    
    { type: 'title', text: 'Önerilen Aralıklar Tablosu (Cheat Sheet)', level: 3 },
    { type: 'paragraph', html: 'Konuya göre intervalometrenizi ayarlamak için bu hızlı başvuru tablosunu kullanın.' },
    { type: 'table', headers: ['Konu / Sahne', 'Önerilen Aralık', 'Olay Süresi (Minimum)'], rows: [
        ['Hızlı Bulutlar / Fırtınalar', '1 - 2 saniye', '20 - 30 dak'],
        ['Şehir Trafiği / İnsanlar (Blur)', '0.5 - 2 saniye', '15 - 20 dak'],
        ['Gün Batımı / Doğumu (Holy Grail)', '5 - 10 saniye', '1.5 - 2.5 saat'],
        ['Yavaş Bulutlar / Gölgeler', '10 - 15 saniye', '2 - 3 saat'],
        ['Yıldızlar / Samanyolu (Astro)', '15 - 30 saniye*', '3 - 5 saat'],
        ['İnşaat / Bitki Büyümesi', '5 - 15 dakika', 'Günler / Haftalar']
    ]},
    { type: 'tip', title: 'Astro Notu', html: 'Aralık genellikle pozlama süresi (500 kuralı) + 1-2 saniyelik bir yazma tampon süresi tarafından belirlenir.' },

    { type: 'title', text: '180° Kuralı (Motion Blur)', level: 3 },
    { type: 'paragraph', html: 'Timelapse\'teki yaygın bir hata takılan veya sarsıntılı bir video elde etmektir. Akıcı sinematik bir görünüm için <strong>hareket bulanıklığına</strong> ihtiyacınız vardır.' },
    { type: 'card', title: 'Kural', icon: 'mdi:information', html: 'Enstantane hızınız aralığınızın yarısı olmalıdır. <br /><br /> <em>Örnek:</em> Her <strong>4 saniyede</strong> bir çekim yapıyorsanız, pozlamanız <strong>2 saniye</strong> olmalıdır.' },

    { type: 'title', text: 'Flicker ve Manuel Diyafram', level: 3 },
    { type: 'paragraph', html: "'Flicker', çekimler arasındaki diyafram açıklığındaki mikro değişimlerin neden olduğu titremedir." },
    { type: 'list', items: [
        '<strong>Lens Twist:</strong> DSLR\'lerde elektronik bağlantıyı kesmek ve diyaframı mekanik olarak sabitlemek için lensin kilidini hafifçe açın.',
        '<strong>Tamamen Manuel:</strong> ISO, Beyaz Dengesi ve Odak sabit olmalıdır.',
        '<strong>RAW Çekim Yapın:</strong> Görüntüyü bozmadan pozlamayı ve rengi düzeltmek için gereklidir.'
    ]},

    { type: 'diagnostic', variant: 'success', title: 'Gelişmiş Teknik: "Holy Grail"', icon: 'mdi:crown', badge: 'Pro Teknik', html: '"Holy Grail", gündüzden geceye (veya tersi) akıcı geçişi ifade eder. En zor teknik zorluklardan biridir.' },
    
    { type: 'stats', columns: 3, items: [
        { label: 'Bulb Ramping', value: 'Kademeli Pozlama', icon: 'mdi:brightness-6' },
        { label: 'Post-Pro', value: 'LRTimelapse', icon: 'mdi:television-guide' },
        { label: 'Strateji', value: 'Gece Aralığı', icon: 'mdi:weather-night' }
    ]},

    { type: 'title', text: 'Sonuç: Basit Mekaniğin Zeni', level: 3 },
    { type: 'paragraph', html: 'Timelapse\'te ustalaşmak, intervalometrenizin matematiğini anlamakla başlar.' }
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

export const content: TimelapseLocaleContent = {
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
