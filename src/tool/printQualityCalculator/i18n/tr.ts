import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { PrintQualityCalculatorUI, PrintQualityCalculatorLocaleContent } from '../index';

const slug = 'baski-kalitesi-hesaplama-piksel-cm-dpi-donusturucu';
const title = 'Baskı Kalitesi Hesaplama: Piksel   CM ve DPI Dönüştürücü';
const description = 'Fotoğraflarınızın çözünürlüğüne göre maksimum baskı boyutunu hesaplayın. Profesyonel baskı sonuçları için pikselleri santimetre ve inç birimlerine dönüştürün.';

const ui: PrintQualityCalculatorUI = {
    dropTitle: "Çözünürlüğü Analiz Et",
    dropSubtitle: "Baskı boyutunu hesaplamak için görselinizi sürükleyin.",
    resultsTitle: "Dosya Özellikleri",
    dpiDensityLabel: "İstenilen Baskı Yoğunluğu (DPI)",
    dpiPointsLabel: "inç başına nokta",
    maxPrintTitle: "Maksimum Baskı Boyutu",
    standardFormatsTitle: "Desteklenen Standart Formatlar",
    formatColumn: "Format",
    measureColumn: "Ölçüler",
    supportColumn: "Destekleniyor mu?",
    qualityExcellent: "Mükemmel Kalite",
    qualityGood: "İyi Kalite",
    qualityFair: "Ekran Kalitesi",
    qualityPoor: "Uygun Değil",
    qualityExcellentDesc: "Sanat dergileri, fotoğraf kitapları ve yakın mesafeden inceleme için idealdir.",
    qualityGoodDesc: "Posterler ve orta mesafeden bakış için yeterlidir.",
    qualityFairDesc: "Dijital görüntüleme veya uzaktaki reklam panoları için uygundur.",
    qualityPoorDesc: "Görsel pikselli görünecektir. Baskı yapılması önerilmez.",
    unitCm: "cm",
    unitInches: "inç",
    dpiScreenLabel: "Ekran",
    dpiNewspaperLabel: "Gazete",
    dpiPrintLabel: "Baskı",
    dpiFineArtLabel: "Sanat Baskısı",
    formatPostal: "Kartpostal",
    formatQuartilla: "Çeyrek Boy",
    formatFolio: "Folyo",
    formatDoubleFolio: "Çift Folio",
    formatSmallPoster: "Küçük Poster",
    formatLargePoster: "Büyük Poster",
    formatPlane: "Plan",
    supportedText: "Evet (Karşılıyor)",
    notSupportedPrefix: "Hayır (",
    invalidImageError: "Lütfen geçerli bir görsel seçin",
    faqTitle: "Sıkça Sorulan Sorular",
    bibliographyTitle: "Referanslar"
};

const faq: PrintQualityCalculatorLocaleContent['faq'] = [
    {
        question: "DPI nedir ve neden önemlidir?",
        answer: "DPI (Dots Per Inch - İnç Başına Nokta), yazıcının bir doğrusal inç üzerine kaç mürekkep noktası koyacağını gösterir. DPI ne kadar yüksekse görsel o kadar keskin olur, ancak piksellerinizin kaplayacağı toplam fiziksel boyut o kadar küçük olur.",
    },
    {
        question: "Bir fotoğrafı basmak için ideal DPI nedir?",
        answer: "Mükemmel fotoğraf kalitesi için endüstri standardı 300 DPI\'dır. Uzaktan görülecek büyük baskılar için 150 DPI yeterli olabilir.",
    },
    {
        question: "Görselimin DPI değerini kalite kaybetmeden artırabilir miyim?",
        answer: "Hayır. Pikselleri değiştirmeden DPI değerini artırmak, baskı boyutunu basitçe küçültür. Yazılım kullanarak (upscaling) piksel \"uydurursanız\", görsel bulanık görünebilir.",
    },
];

const howTo: PrintQualityCalculatorLocaleContent['howTo'] = [
    {
        name: "Görselinizi yükleyin",
        text: "Piksel cinsinden boyutlarını öğrenmek için basmak istediğiniz fotoğrafı yükleyin.",
    },
    {
        name: "DPI ayarını yapın",
        text: "Nokta yoğunluğuna göre (72   600 DPI) nihai boyutun nasıl değiştiğini görmek için çubuğu kaydırın.",
    },
    {
        name: "Formatı doğrulayın",
        text: "Çözünürlüğünüzün istediğiniz kağıt boyutunu (A4, A3 vb.) karşılayıp karşılamadığını görmek için standart formatlar tablosuna bakın.",
    },
    {
        name: "Kaliteyi onaylayın",
        text: "Baskıya göndermeden önce göstergenin \"Mükemmel Kalite\"de olduğundan emin olun.",
    },
];

const bibliography: PrintQualityCalculatorLocaleContent['bibliography'] = [
    {
        name: "Uluslararası Kağıt Boyutları (ISO 216)",
        url: "https://www.iso.org/standard/36631.html",
    },
    {
        name: "Görsel çözünürlük kılavuzu - Adobe",
        url: "https://www.adobe.com/tr/creativecloud/photography/discover/image-resolution.html",
    },
];

const seo: PrintQualityCalculatorLocaleContent['seo'] = [
    {
        type: 'summary',
        title: 'Profesyonel Baskı Çözünürlüğü Hesaplama',
        items: [
            'Pikselleri santimetre ve inç birimlerine doğru şekilde dönüştürün',
            'İstenilen DPI değerine göre maksimum boyutu hesaplayın',
            'Standart formatlarla (A4, A3 vb.) uyumluluk kontrolü',
            '4 kalite seviyesi kılavuzu: Mükemmel\'den Uygun Değil\'e'
        ]
    },
    { type: 'title', text: 'Baskı Kalitesi ve DPI Hakkında Kesin Kılavuz', level: 2 },
    { type: 'paragraph', html: 'Hiç bir fotoğraf bastırıp bulanık veya pikselli çıktığını gördünüz mü? Sır, <strong>Pikseller</strong> ve <strong>DPI</strong> (İnç Başına Nokta) arasındaki matematiksel ilişkide yatar. Bu araç, profesyonel kaliteyi kaybetmeden görsellerinizi basabileceğiniz tam maksimum boyutu hesaplar.' },

    { type: 'stats', items: [
        { value: '300', label: 'Profesyonel Standart DPI', icon: 'mdi:target' },
        { value: '100%', label: 'Hassas Hesaplamalar', icon: 'mdi:check' },
        { value: 'ISO 216', label: 'Desteklenen Formatlar', icon: 'mdi:file-document' }
    ], columns: 3 },

    { type: 'title', text: 'DPI\'yı Anlamak: Piksel vs Nokta', level: 3 },
    { type: 'paragraph', html: 'Yaygın bir kafa karışıklığı, DPI ve piksellerin aynı şey olduğunu düşünmektir. Öyle değillerdir. Pikseller dijital dosyanızın İÇİNDEDİR. DPI, yazıcının bunları kağıt üzerindeki mürekkebe nasıl dönüştürdüğüdür.' },
    { type: 'list', items: [
        '<strong>DPI (Dots Per Inch):</strong> Yazıcının doğrusal bir inç (2,54 cm) üzerine kaç mürekkep noktası yerleştirdiği.',
        '<strong>Pikseller:</strong> Dijital dosyanızdaki küçük veri kareleri. 3000x2000 piksellik bir fotoğraf, DPI değerinden bağımsız olarak sabit bilgiye sahiptir.',
        '<strong>Formül:</strong> Baskı boyutu (inç) = Piksel / DPI. Örnek: 3000 piksel / 300 DPI = 10 inç (25,4 cm)'
    ], icon: 'mdi:check' },

    { type: 'title', text: 'DPI Kalite Seviyeleri Açıklaması', level: 3 },
    { type: 'table', headers: ['DPI', 'Görsel Kalite', 'Kullanım Durumları', 'Bakış Mesafesi'], rows: [
        ['600+ DPI', 'Mükemmel (Kusursuz)', 'Sanat kitapları, lüks dergiler, güzel sanatlar fotoğrafçılığı', '10 cm\'den az'],
        ['300-400 DPI', 'Mükemmel (Profesyonel)', 'Fotoğrafçılık, kitaplar, şirket katalogları', '20-30 cm (el mesafesi)'],
        ['150-200 DPI', 'İyi (Web Baskısı)', 'Posterler, takvimler, orta mesafe bakış', '1-2 metre'],
        ['72-100 DPI', 'Ekran (Kabul Edilebilir)', 'Reklam panoları, uzaktaki pankartlar', '5+ metre'],
        ['10-30 DPI', 'Düşük (Uygun Değil)', 'Dev reklam panoları, aşırı uzak bakış mesafesi', '50+ metre']
    ] },

    { type: 'card', title: '300 DPI Altın Kuralı', html: 'Fotoğrafik ve profesyonel editoryal baskı için endüstri standardı <strong>300 DPI</strong>\'dır. Bu, normal mesafedeki (20-30 cm) insan gözünün münferit mürekkep noktalarını algılamamasını sağlar. 300 DPI\'ın altında piksel ızgarası görünür hale gelir.' },

    { type: 'comparative', items: [
        {
            title: 'El Fotoğrafçılığı (10x15 Fotoğraflar)',
            description: '300 DPI zorunlu - yakından bakılır',
            icon: 'mdi:image',
            points: [
                '3000x2000 pikselde = maksimum 10x6,7 inç',
                'Garantili Mükemmel kalite',
                'Albümler ve hediyeler için standart'
            ]
        },
        {
            title: 'Duvar Posteri A3 (30x42 cm)',
            description: '150 DPI yeterli - uzaktan bakılır',
            icon: 'mdi:wall-fire',
            points: [
                '1-2 metreden bakılır',
                'Daha az piksel gerekir',
                'Kamera kalitesinden tasarruf edin'
            ],
            highlight: true
        },
        {
            title: 'Reklam Panosu (200x300 cm)',
            description: '15-30 DPI - çok uzak metrelerden bakılır',
            icon: 'mdi:sign',
            points: [
                '20+ metre mesafeden gözlemlenir',
                'Düşük çözünürlük bile iyi görünür',
                'Büyük dosyaları optimize edin'
            ]
        }
    ], columns: 3 },

    { type: 'title', text: 'Profesyonel Baskı İçin Dosya Hazırlama', level: 3 },
    { type: 'proscons', items: [
        {
            pro: 'CMYK vs RGB: Yazıcılar mürekkep kullanır (CMYK), ekranlar ışık kullanır (RGB). Renk sürprizlerinden kaçınmak için dönüştürün.',
            con: 'Dönüştürme sırasında renkler değişebilir - önce önizlemeyi kontrol edin'
        },
        {
            pro: 'Taşma Payı (Bleed): Görselin kağıt kenarına ulaşması gerekiyorsa kenar başına 3 mm ekstra ekleyin',
            con: 'Taşma payı olmazsa kesim kenarları beyaz kalabilir'
        },
        {
            pro: 'Upscaling (Boyut Yükseltme) ÇALIŞMAZ: Photoshop\'ta pikselleri artırmak yanlış bilgi ekler (yumuşatma)',
            con: 'Büyük baskı yapmak istiyorsanız, orijinal yüksek çözünürlüklü fotoğrafa ihtiyacınız vardır'
        },
        {
            pro: 'Formatlar: Fotoğraflar için sıkıştırmasız TIFF veya yüksek kaliteli JPEG; logolar için vektörel (AI, EPS)',
            con: 'PNG çoğu matbaada yerel olarak CMYK\'yı desteklemez'
        }
    ], proTitle: 'Öneriler', conTitle: 'Dikkat Edilmesi Gerekenler' },

    { type: 'diagnostic', variant: 'warning', title: 'Yaygın Hata: Upscaling Efsanesi', icon: 'mdi:alert', badge: 'Kritik', html: '<strong>Pikselleri değiştirmeden Photoshop\'ta DPI\'yı ARTIRMAYIN.</strong> 72 DPI\'dan 300 DPI\'a yükseltmek fiziksel baskı boyutunu basitçe küçültür. İnterpolasyon (upscaling) yoluyla \"piksel eklerseniz\", görsel yumuşatılmış veya bulanık görünecektir. Kaynaktan gelen GERÇEK piksellere ihtiyacınız vardır.' },

    { type: 'glossary', items: [
        {
            term: 'DPI (Dots Per Inch)',
            definition: 'Baskı çözünürlüğü ölçüsü: doğrusal inç (2,54 cm) başına kaç mürekkep noktası olduğu. 300 DPI = 300x300 = inç kare başına 90.000 nokta.'
        },
        {
            term: 'CMYK',
            definition: 'Baskı renk uzayı: Macenta (Cyan), Galibarda (Magenta), Sarı (Yellow), Siyah (Key black). Çıkarımsal mürekkep bazlıdır. Ekranların RGB (toplamsal ışık) yapısından farklıdır.'
        },
        {
            term: 'Taşma Payı (Bleed)',
            definition: 'Basılan ve ardından kesilen ekstra alan (genellikle 3 mm). Görselin beyaz kenar boşluğu bırakmadan kenara ulaşmasını sağlar.'
        },
        {
            term: 'Doğal Çözünürlük',
            definition: 'Kamera tarafından yakalanan, manipülasyon içermeyen GERÇEK pikseller. Pikselleri değiştirmeden DPI artırmak \"doğal çözünürlük\" oluşturmaz.'
        },
        {
            term: 'İnterpolasyon (Upscaling)',
            definition: 'Mevcut piksellere dayanarak yeni pikseller uyduran algoritma. Küçük artışlar için kullanışlıdır ancak büyük büyütmelerde keskinlik kaybolur.'
        }
    ] },

    { type: 'message', title: 'Profesyonel Sonuçlar İçin Teknik Hassasiyet', ariaLabel: 'Baskı hesaplamaları hakkında bilgiler', html: 'Hesaplayıcımız, pikselleri uluslararası standartları (kağıt için ISO 216) dikkate alarak santimetreye dönüştürür. Bu sadece bir hesap makinesi değil: o fotoğrafın profesyonel kaliteyi koruyarak o baskı boyutuna uyup uymadığını kontrol eden doğrulayıcınızdır.' },

    { type: 'title', text: 'Sonuç: Sürprizsiz Baskı', level: 3 },
    { type: 'paragraph', html: 'Güzel bir baskı ile hayal kırıklığı yaratan bir baskı arasındaki fark, piksel ve DPI arasındaki ilişkiyi bilmektir. Matbaaya gitmeden ÖNCE dosyalarınızı doğrulamak için bu hesaplayıcıyı kullanın. Bu sayede gereksiz masraflardan ve moral bozucu sonuçlardan kaçınırsınız.' }
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

export const content: PrintQualityCalculatorLocaleContent = {
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
