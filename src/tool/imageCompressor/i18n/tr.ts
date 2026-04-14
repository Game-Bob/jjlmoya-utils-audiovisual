import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ImageCompressorUI, ImageCompressorLocaleContent } from '../index';

const slug = 'online-gorsel-kompresor-kalite-kaybi-olmadan-dosya-boyutunu-dusur';
const title = 'Online Görsel Kompresör: Kalite kaybı olmadan boyutu düşürün';
const description = 'JPG, PNG ve WebP fotoğraflarınızı ücretsiz olarak optimize edin ve sıkıştırın. Web yükleme hızınızı yerel olarak artırmak için dosya boyutunu küçültün.';

const ui: ImageCompressorUI = {
    dropTitle: "Görsel Optimizasyonu",
    dropSubtitle: "Boyutlarını anında düşürmek için fotoğraflarınızı sürükleyin.",
    settingsTitle: "Sıkıştırma Ayarları",
    qualityLabel: "Görsel Kalite",
    widthLabel: "Maksimum Genişlik (Piksel)",
    convertToWebpLabel: "WebP\'ye Dönüştür",
    compressionLabel: "Sıkıştırma",
    compressBtn: "Görseli Sıkıştır",
    processingLabel: "İşleniyor...",
    resultsTitle: "Optimize Edilmiş Görseller",
    originalSizeLabel: "Orijinal Boyut",
    newSizeLabel: "Yeni Boyut",
    reductionLabel: "Tasarruf",
    downloadBtn: "İndir",
    addMoreBtn: "Daha fazla ekle",
    browseFilesBtn: "Dosyalara göz at",
    processedFilesTitle: "İşlenen Dosyalar",
    downloadAllBtn: "Hepsini İndir",
    adjustThisImage: "Bu görseli ayarla",
    downloadTitle: "İndir",
    maxWidthLabel: "Maks genişlik (px)",
    closeBtn: "Kapat",
    totalSavingsLabel: "Toplam tasarruf",
    noSavings: "Net tasarruf yok",
    faqTitle: "Sıkça Sorulan Sorular",
    bibliographyTitle: "Referanslar"
};

const faq: ImageCompressorLocaleContent['faq'] = [
    {
        question: "Kayıpsız sıkıştırma nasıl çalışır?",
        answer: "Gereksiz meta verileri kaldıran ve piksel kodlamasını optimize eden algoritmalar kullanıyoruz. WebP seçildiğinde, geleneksel formatlardan daha gelişmiş bir sıkıştırma teknolojisi kullanılır.",
    },
    {
        question: "Görsellerim herhangi bir sunucuya yükleniyor mu?",
        answer: "Hayır. Tüm işlemler %100 tarayıcınızda (İstemci Tarafı) gerçekleşir. Fotoğraflarınız asla bilgisayarınızdan ayrılmaz, bu da mutlak gizliliği garanti eder.",
    },
    {
        question: "Neden WebP\'ye dönüştürmeliyim?",
        answer: "WebP, web için modern standart formattır. JPG ve PNG\'den daha üstün kaliteyi %30\'a kadar daha az boyutla sunar, bu da sayfa yükleme süresini hızlandırır.",
    },
];

const howTo: ImageCompressorLocaleContent['howTo'] = [
    {
        name: "Görseli yükleyin",
        text: "Sıkıştırmak istediğiniz dosyayı (JPG, PNG veya WebP) yükleyin.",
    },
    {
        name: "Kaliteyi ayarlayın",
        text: "Dosya boyutu ve görsel kalite arasındaki mükemmel dengeyi bulmak için kaydırıcıyı kullanın (önerilen: %75 85).",
    },
    {
        name: "Yeniden boyutlandırın (isteğe bağlı)",
        text: "Görsel çok büyükse, çözünürlüğünü düşürmek için maksimum bir genişlik belirleyebilirsiniz.",
    },
    {
        name: "Sonucu indirin",
        text: "Optimize edilmiş görselinizi kullanıma hazır bir şekilde almak için indir düğmesine basın.",
    },
];

const bibliography: ImageCompressorLocaleContent['bibliography'] = [
    {
        name: "WebP: Web için Görsel Formatı",
        url: "https://developers.google.com/speed/webp",
    },
    {
        name: "SEO için görsel optimizasyonunun önemi",
        url: "https://developers.google.com/search/docs/appearance/google-images",
    },
];

const seo: ImageCompressorLocaleContent['seo'] = [
    {
        type: 'summary',
        title: 'Profesyonel Web Görsel Optimizasyonu',
        items: [
            'Akıllı JPG, PNG ve WebP sıkıştırma',
            'Görsel kaliteyi koruyarak boyutu %50-80 oranında düşürün',
            '%100 yerel işleme - gizlilik garantili',
            'Core Web Vitals\'ı ve SEO sıralamasını iyileştirin'
        ]
    },
    { type: 'title', text: 'Görsel Optimizasyonu: Web Hızı ve Core Web Vitals', level: 2 },
    { type: 'paragraph', html: 'Dijital hız çağında, yavaş bir web sitesi kullanıcı kaybeder. Optimize edilmemiş görseller, bir web sayfasının toplam boyutunun %60-70\'ini oluşturur. Bunları optimize etmek, Google metriklerinizi (LCP, CLS) ve arama sonuçlarındaki sıralamanızı iyileştirmek için ilk adımdır.' },

    { type: 'stats', items: [
        { value: '%50-80', label: 'Tipik Boyut Azaltma', icon: 'mdi:trending-down' },
        { value: '%100', label: 'Yerel Gizlilik', icon: 'mdi:lock' },
        { value: '+%30', label: 'JPG\'den Daha Hızlı', icon: 'mdi:speedometer' }
    ], columns: 3 },

    { type: 'title', text: 'Sıkıştırma Formatlarının Açıklaması', level: 3 },
    { type: 'table', headers: ['Format', 'Sıkıştırma', 'Kullanım Durumları', 'Uyumluluk'], rows: [
        ['JPEG', 'Kayıplı %50-90', 'Kamera fotoğrafları, editoryal içerik', 'Evrensel (%100)'],
        ['PNG', 'Kayıpsız %30-50', 'Grafikler, logolar, şeffaflıklar', 'Evrensel (%100)'],
        ['WebP', 'Kayıplı/Kayıpsız %25-35 daha fazla', 'Modern web, sosyal ağlar', '%95 modern tarayıcılar'],
        ['AVIF', 'Kayıplı/Kayıpsız %20 iyileştirme', 'Yeni nesil web', 'Yalnızca yeni tarayıcılar']
    ] },

    { type: 'card', title: 'Neden WebP Gelecektir', html: 'Google, WebP\'yi özellikle web için geliştirdi. JPEG ve PNG\'ye göre üstün sıkıştırma sunarken görsel kaliteyi korur veya iyileştirir. Eşdeğer JPEG\'lerden %25-35 daha küçüktür. Modern tarayıcıların %95\'i bunu destekler.' },

    { type: 'title', text: 'Kayıplı vs Kayıpsız Sıkıştırma', level: 3 },
    { type: 'comparative', items: [
        {
            title: 'Kayıplı Sıkıştırma (Lossy)',
            description: 'JPG, WebP - Algılanamaz görsel bilgileri kaldırır',
            icon: 'mdi:compress',
            points: [
                'Orijinal boyutun %70-90\'ını azaltır',
                'Kalite %75\'in üzerinde tutulursa insan gözü tarafından fark edilemez',
                'Gerçekçi fotoğrafçılık için idealdir',
                'Logolar veya keskin metinler için önerilmez'
            ],
            highlight: true
        },
        {
            title: 'Kayıpsız Sıkıştırma (Lossless)',
            description: 'PNG, WebP kayıpsız - %100 görsel veriyi korur',
            icon: 'mdi:shield',
            points: [
                '%20-50 oranında boyut azaltır',
                'Mükemmel kalite, bozulma yok',
                'Grafikler, logolar, şeffaflıklar için idealdir',
                'Kayıplı sıkıştırmaya göre daha ağır dosyalar'
            ]
        }
    ], columns: 2 },

    { type: 'title', text: 'SEO ve Dönüşüm Üzerindeki Etkisi', level: 3 },
    { type: 'list', items: [
        '<strong>Core Web Vitals:</strong> Google yavaş siteleri cezalandırır. Optimize edilmiş görseller LCP (En Büyük İçerikli Boyama) değerini doğrudan iyileştirir.',
        '<strong>Hemen Çıkma Oranı:</strong> Her saniyelik gecikme = %7 daha fazla hemen çıkma. Daha hızlı görseller = ayrılan daha az kullanıcı.',
        '<strong>Arama Sıralaması:</strong> Hız bir sıralama faktörüdür. Görselleri optimize etmek sıralamayı yükseltir.',
        '<strong>Dönüşüm:</strong> Daha hızlı yükleme süreleri = daha fazla dönüşüm. Araştırmalar, optimizasyon ile +%10 dönüşüm artışı göstermektedir.'
    ], icon: 'mdi:check' },

    { type: 'proscons', items: [
        {
            pro: 'Tam gizlilik: %100 yerel işleme, bulut sunucusu yok',
            con: 'Canvas API destekli tarayıcı gerektirir (evrenseldir)'
        },
        {
            pro: 'WebP, eşit kalitede JPEG\'den %25-35 daha küçüktür',
            con: 'Eski Safari ve IE, WebP\'yi desteklemez (fallback mevcuttur)'
        },
        {
            pro: 'Birden fazla görselin anında işlenmesi',
            con: 'Çok büyük görseller (50MB+) bekleme süresi gerektirebilir'
        },
        {
            pro: 'İsteğe bağlı yeniden boyutlandırma: sıkıştırmanın yanı sıra çözünürlüğü de düşürür',
            con: 'Yeniden boyutlandırma bilgi kaybına neden olur - çözünürlüğü kaynakta optimize etmek daha iyidir'
        }
    ], proTitle: 'Avantajlar', conTitle: 'Sınırlamalar' },

    { type: 'diagnostic', variant: 'warning', title: 'Dikkat: Aşırı Sıkıştırma Kaliteyi Bozar', icon: 'mdi:alert', badge: 'Kalite', html: 'Fotoğrafçılık için kaliteyi %75, editoryal içerik için %85\'in üzerinde tutun. Bunun altında, sıkıştırma kusurları (lekeler, bantlanma) görünür hale gelir. Küçük resimde iyi görünen bir görsel, büyük halde kötü görünebilir.' },

    { type: 'glossary', items: [
        {
            term: 'Kayıplı Sıkıştırma (Lossy)',
            definition: 'İnsan gözünün \"gürültü\" olarak algıladığı görsel verileri kaldırır. Fotoğrafçılık için idealdir. JPEG, kayıplı WebP, HEIC kayıplıdır.'
        },
        {
            term: 'Kayıpsız Sıkıştırma (Lossless)',
            definition: 'Görsel bilgi kaybetmeden boyutu küçültür. PNG ve kayıpsız WebP. Grafikler, logolar, şeffaflıklar için idealdir.'
        },
        {
            term: 'Core Web Vitals (Google)',
            definition: 'Kullanıcı deneyimi metrikleri: LCP (yükleme hızı), FID (etkileşim gecikmesi), CLS (görsel kararlılık). SEO sıralamasını etkiler.'
        },
        {
            term: 'WebP',
            definition: 'Google tarafından geliştirilen format. JPEG\'den %25-35 daha küçüktür. Modern tarayıcıların %95\'i tarafından desteklenir (IE hariç hepsi).'
        },
        {
            term: 'Sıkıştırma Kusurları (Artifacts)',
            definition: 'Aşırı sıkıştırmanın neden olduğu görsel kusurlar: lekeler, renk bantlanması, bulanık kenarlar. %75 kalitenin üzerinde fark edilemez.'
        }
    ] },

    { type: 'message', title: 'Profesyonel Web Optimizasyonu', ariaLabel: 'SEO için görsel optimizasyonu hakkında bilgiler', html: 'Bu teknik bir gösteriş değil: görselleri sıkıştırmak, kullanıcı deneyimine ve Google sıralamasına doğrudan bir yatırımdır. Mobilde her kilobayt önemlidir. Aracımız, eskiden profesyonel yazılım ($$$) gerektiren işi ücretsiz bir 3 tıklamalı işleme dönüştürür.' },

    { type: 'title', text: 'Modern Web İçin Hazır', level: 3 },
    { type: 'paragraph', html: 'Çevrimiçi varlığınızın hızlı, duyarlı ve aramada rekabetçi olması için akıllı sıkıştırma ve WebP formatını kullanın. Profesyonel kalite, minimum boyut, anında yükleme.' }
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

export const content: ImageCompressorLocaleContent = {
    slug,
    title,
    description,
    ui,
    seo,
    faqTitle: "Sıkça Sorulan Sorular",
    faq,
    bibliographyTitle: "Referanslar",
    bibliography,
    howTo,
    schemas: [faqSchema as any, howToSchema as any, appSchema],
};
