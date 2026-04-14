import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { VideoFrameExtractorUI, VideoFrameExtractorLocaleContent } from '../index';

const slug = 'online-video-kare-cikarma-hd-resim-yakala';
const title = 'Video Kare Çıkarıcı: HD sahneleri yakalayın';
const description = 'Videolarınızdan tek tek kareleri mükemmel hassasiyetle çıkarın. Mükemmel anları HD kalitesinde yerel ve ücretsiz olarak yakalayın.';

const ui: VideoFrameExtractorUI = {
    uploadTitle: "Bir video dosyası yükleyin",
    uploadFormats: "MP4, WebM, MOV veya MKV (Maks. 500MB)",
    privacyNote: "Video internete yüklenmez, tarayıcınızda işlenir.",
    playLabel: "Oynat",
    pauseLabel: "Duraklat",
    captureBtn: "Kareyi Yakala",
    prevFrame: "-1F",
    nextFrame: "+1F",
    batchTitle: "Otomatik Çıkarma",
    batchEvery: "Her",
    batchStart: "Sıralamayı Başlat",
    batchProcessing: "Çıkarılıyor...",
    galleryTitle: "Yakalanan Kareler",
    galleryEmpty: "Yakaladığınız kareler burada görünecektir.",
    downloadAll: "Tümünü İndir",
    downloadHD: "HD Resmi İndir",
    resetBtn: "Başka bir video yükle"
};

const faq: VideoFrameExtractorLocaleContent['faq'] = [
    {
        question: "Uzun videolardan kare çıkarabilir miyim?",
        answer: "Evet, tarayıcınızın videoyu yüklemek için yeterli RAM'e sahip olması yeterlidir. Optimum performans için 500 MB'a kadar olan dosyaları öneririz.",
    },
    {
        question: "Yakalanan kareler hangi çözünürlükte kaydedilir?",
        answer: "Kareler, orijinal videonun doğal çözünürlüğünde yakalanır. Videonuz 4K ise, yüksek kaliteli bir 4K resim elde edersiniz.",
    },
];

const howTo: VideoFrameExtractorLocaleContent['howTo'] = [
    {
        name: "Videonuzu yükleyin",
        text: "Cihazınızdan video dosyasını seçin. Dosyanızı herhangi bir sunucuya yüklemeyeceğiz.",
    },
    {
        name: "Tam ana gidin",
        text: "Mükemmel hassasiyet için zaman çizelgesi çubuğunu veya ±1 kare düğmelerini kullanın.",
    },
    {
        name: "Kareyi yakalayın",
        text: "Anı aşağıdaki galeriye kaydetmek için yakala düğmesine basın.",
    },
    {
        name: "Yüksek kalitede indirin",
        text: "Kareleri tek tek veya tüm oturumu optimize edilmiş WebP formatında indirin.",
    },
];

const bibliography: VideoFrameExtractorLocaleContent['bibliography'] = [
    {
        name: "Capturing frames with HTML5 Video API",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video",
    },
];

const seo: VideoFrameExtractorLocaleContent['seo'] = [
    {
        type: 'summary',
        title: 'Profesyonel Video Kare Çıkarma',
        items: [
            'Mükemmel yakalama için tek kare hassasiyeti (±1 kare)',
            '500MB\'a kadar MP4, WebM, MOV, MKV desteği',
            'Orijinal video çözünürlüğü korunur (SD, HD, 4K)',
            'Özel aralıklarla otomatik toplu çıkarma'
        ]
    },
    { type: 'title', text: 'Kare Çıkarma: Videoda Zamanı Dondurun', level: 2 },
    { type: 'paragraph', html: 'Bazen bir resim bin kelimeye bedeldir. Aracımız, profesyonel yazılıma ihtiyaç duymadan hassas kareleri çıkarmak için tarayıcınızın yerel gücünü kullanır.' },

    { type: 'stats', items: [
        { value: '±1', label: 'Tek Kare Hassasiyeti', icon: 'mdi:target' },
        { value: '100%', label: 'Doğal Çözünürlük', icon: 'mdi:video-high-definition' },
        { value: '500MB', label: 'Desteklenen Dosyalar', icon: 'mdi:file-video' }
    ], columns: 3 },

    { type: 'title', text: 'Profesyonel Kullanım Durumları', level: 3 },
    { type: 'comparative', items: [
        {
            title: 'Sinema ve Fotoğraf',
            description: 'Görsel referans veya kompozisyon için kareleri yakalayın',
            icon: 'mdi:film',
            points: [
                'Film pazarlaması için durgun resimler çıkarın',
                'Sahne kompozisyonu referansları',
                'Kare kare analiz'
            ]
        },
        {
            title: 'Dijital İçerik',
            description: 'Sosyal medya için küçük resimler ve kapaklar oluşturun',
            icon: 'mdi:youtube',
            points: [
                'Yüksek çözünürlüklü YouTube küçük resimleri',
                'Sosyal medya kapakları',
                'Sunumlar için resimler'
            ],
            highlight: true
        },
        {
            title: 'Teknik Dokümantasyon',
            description: 'Eğitim videolarından kareler çıkarın',
            icon: 'mdi:book-open',
            points: [
                'Eğitim videolarından ekran görüntüleri',
                'Adım adım görsel dokümantasyon',
                'Gerçek zamanlı hareket analizi'
            ]
        },
        {
            title: 'Spor ve Aksiyon',
            description: 'Maksimum aksiyonun tam anını yakalayın',
            icon: 'mdi:dumbbell',
            points: [
                'Kare kare spor tekniği analizi',
                'Kahramanlık anlarını yakalama',
                'Hareket çalışması'
            ]
        }
    ], columns: 2 },

    { type: 'title', text: 'Desteklenen Video Formatları', level: 3 },
    { type: 'table', headers: ['Format', 'Uzantı', 'Uyumluluk', 'Notlar'], rows: [
        ['MPEG-4', 'MP4', 'Evrensel (%100)', 'En iyi sıkıştırma, yaygın kullanım'],
        ['WebM', 'WebM', 'Modern tarayıcılar', 'Üstün sıkıştırma, küçük boyut'],
        ['QuickTime', 'MOV', 'Safari, bazı oynatıcılar', 'Apple standardı'],
        ['Matroska', 'MKV', 'Modern tarayıcılar', 'Esnek taşıyıcı']
    ] },

    { type: 'card', title: 'Tek Kare Hassasiyeti', html: 'Mükemmel anı (bir sıçrama, bir gülümseme, bir hareket) yakalamak için tek bir kare ileri veya geri gitmek (±1 kare) hayati önem taşır. Aracımız size milimetrik kontrol sağlar.' },

    { type: 'proscons', items: [
        {
            pro: 'Tam gizlilik: video tarayıcınızda %100 yerel olarak işlenir',
            con: 'Kullanılabilir RAM bellek boyutuyla sınırlıdır (~500MB önerilir)'
        },
        {
            pro: 'Doğal çözünürlük korunur: SD, HD, 4K yeniden sıkıştırma olmadan',
            con: 'HTML5 Video destekli modern tarayıcı gerektirir'
        },
        {
            pro: 'Özel aralıklarla otomatik toplu çıkarma',
            con: 'Gelişmiş düzenleme için bir video düzenleyici gerekir'
        },
        {
            pro: 'Kareleri optimize edilmiş WebP veya PNG olarak dışa aktarın',
            con: 'Her seferinde bir kare (otomatik GIF sıraları oluşturmaz)'
        }
    ], proTitle: 'Avantajlar', conTitle: 'Sınırlamalar' },

    { type: 'diagnostic', variant: 'info', title: 'Çözünürlük ve Kare Hızı', icon: 'mdi:information', badge: 'Teknik', html: 'Nihai kare çözünürlüğü orijinal videoya bağlıdır. Videonun doğal bilgisini upscaling yapmadan koruruz.' },

    { type: 'glossary', items: [
        {
            term: 'Kare (Frame)',
            definition: 'Bir video sırasındaki tek bir görüntü. 24 fps bir video saniyede 24 kare içerir.'
        },
        {
            term: 'FPS (Saniyedeki Kare Sayısı)',
            definition: 'Saniyedeki kare sayısı. Hareketin akıcılığını belirler.'
        },
        {
            term: 'Video Codec',
            definition: 'Sıkıştırma algoritması: H.264, VP9, HEVC. Dosya boyutunu ve kalitesini belirler.'
        },
        {
            term: 'Bitrate',
            definition: 'Saniyede işlenen veri miktarı. Daha yüksek bitrate = daha yüksek kalite.'
        },
        {
            term: 'Video Çözünürlüğü',
            definition: 'Piksel boyutları: 720p, 1080p, 4K, 8K.'
        }
    ] },

    { type: 'message', title: 'Profesyonel Kare Çıkarma', ariaLabel: 'Video çıkarma hakkında teknik bilgi', html: 'Karmaşık çevrimiçi dönüştürücülere gerek yok. Mükemmel bir kare sadece 3 tık uzağınızda: video yükle, gezin, yakala.' },

    { type: 'title', text: 'Video Anlarını Dondurun', level: 3 },
    { type: 'paragraph', html: 'Her video yüzlerce kare içerir. Kaliteden veya gizlilikten ödün vermeden o mükemmel anları çıkarmak için bu aracı kullanın.' }
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

export const content: VideoFrameExtractorLocaleContent = {
    slug,
    title,
    description,
    ui,
    seo,
    faq,
    faqTitle: 'Video Kare Çıkarma Hakkında Sıkça Sorulan Sorular',
    bibliography,
    bibliographyTitle: 'Video Yakalama İçine Teknik Standartlar',
    howTo,
    schemas: [faqSchema as any, howToSchema as any, appSchema],
};
