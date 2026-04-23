import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ChromaticLensUI, ChromaticLensLocaleContent } from '../index';

const slug = 'chromatic-lens-online-renk-paleti-cikarma';
const title = 'Chromatic Lens: Online Renk Paleti Çıkarma';
const description = 'Herhangi bir görüntüden profesyonel renk paletlerini ücretsiz olarak çıkarın. Fotoğraflarınızdaki baskın renkleri matematiksel algoritmalar kullanarak belirleyin.';

const ui: ChromaticLensUI = {
    dropTitle: "Renkleri Analiz Et",
    dropSubtitle: "Kromatik DNA'sını çıkarmak için bir görüntüyü sürükleyin.",
    processingLabel: "Palet çıkarılıyor...",
    paletteTitle: "Çıkarılan Palet",
    copyLabel: "HEX Kopyala",
    copiedLabel: "Kopyalandı!",
    colorCountLabel: "Renk sayısı",
    changeImage: "Görüntüyü değiştir",
};

const faq: ChromaticLensLocaleContent['faq'] = [
    {
        question: "Renk çıkarma nasıl çalışır?",
        answer: "En temsilci tonları bulmak için görüntü piksellerini RGB renk alanındaki yakınlıklarına göre gruplandıran 'Median Cut' algoritmasını kullanıyoruz.",
    },
    {
        question: "Renkleri tasarım editörüme kopyalayabilir miyim?",
        answer: "Evet, her renge tıkladığınızda HEX kodu otomatik olarak panonuza kopyalanır; Photoshop, Figma veya CSS'e yapıştırmaya hazırdır.",
    },
    {
        question: "Hangi tür görüntüleri analiz edebilirim?",
        answer: "Herhangi bir JPG, PNG veya WebP dosyası. İşleme yereldir, bu nedenle büyük görüntüler ağ verisi tüketmeden hızlı bir şekilde analiz edilir.",
    },
];

const howTo: ChromaticLensLocaleContent['howTo'] = [
    {
        name: "Görüntüyü yükle",
        text: "Kromatik ilham almak istediğiniz fotoğrafı yükleyin.",
    },
    {
        name: "Hassasiyeti ayarla",
        text: "Aracın kaç tane baskın renk belirlemesini istediğinizi seçin (3 ile 12 arası).",
    },
    {
        name: "Sonucu analiz et",
        text: "Palet, ilgili onaltılık (HEX) kodlarıyla birlikte anında görünecektir.",
    },
    {
        name: "Kopyala ve kullan",
        text: "Tonları kaydetmek ve tasarım projenize uygulamak için üzerlerine tıklayın.",
    },
];

const seo: ChromaticLensLocaleContent['seo'] = [
    {
        type: 'summary',
        title: 'Akıllı Renk Paleti Çıkarma',
        items: [
            'Renk analizi için profesyonel Median Cut algoritması',
            'Herhangi bir görüntüden 3-12 baskın rengi çıkarın',
            'Doğrudan panoya kopyalanabilir HEX kodları',
            '%100 yerel işleme - yaratıcılar için ideal'
        ]
    },
    { type: 'title', text: 'Renk Paleti Çıkarma: Bilim ve Tasarım', level: 2 },
    { type: 'paragraph', html: 'Bir film karesinin neden bu kadar uyumlu göründüğünü hiç merak ettiniz mi? Bu bir tesadüf değil; iş başındaki renk teorisidir. Chromatic Lens, bu uyumu doğrudan pikselden çıkarmanıza ve tasarım projelerinizde kullanılabilir HEX kodlarına dönüştürmenize olanak tanır.' },

    { type: 'stats', items: [
        { value: 'Anında', label: 'Renk Analizi', icon: 'mdi:lightning-bolt' },
        { value: '%100', label: 'Yerel Gizlilik', icon: 'mdi:lock' },
        { value: 'RGB', label: 'Hassas Renk Alanı', icon: 'mdi:palette' }
    ], columns: 3 },

    { type: 'title', text: 'Median Cut Algoritması Açıklaması', level: 3 },
    { type: 'paragraph', html: 'Akıllı palet çıkarma, piksellerin basit bir rastgele örneklemesi değildir. Sadık bir temsil sağlayan özyinelemeli bir bölümleme tekniği olan Median Cut algoritmasını kullanır:' },
    { type: 'list', items: [
        '<strong>Özyinelemeli Bölme:</strong> Görüntünün RGB \"renk küpü\" özyinelemeli olarak daha küçük kutulara bölünür.',
        '<strong>Hacim Dengesi:</strong> Her bölüm, benzer hacimlere sahip aynı renk alanındaki pikselleri gruplandırmaya çalışır.',
        '<strong>Ağırlıklı Ortalama:</strong> Her kutunun ortaya çıkan rengi, içerdiği tüm piksellerin ortalamasıdır.',
        '<strong>Sadık Temsil:</strong> Baskın renkler, basit bir örneklemi değil, görüntünün gerçek görsel atmosferini yansıtır.'
    ], icon: 'mdi:check' },

    { type: 'card', title: 'Yaratıcı İş Akışı', html: 'Arayüzlerine, illüstrasyonlarına veya marka paletlerine uygulamak için bir fotoğrafın, filmin veya görsel referansın görsel özünü anında yakalamak isteyen web geliştiricileri, UX/UI tasarımcıları, dijital sanatçılar ve yaratıcılar için idealdir.' },

    { type: 'title', text: 'Dijital Tasarımda Kullanım Durumları', level: 3 },
    { type: 'comparative', items: [
        {
            title: 'UX/UI Tasarımcıları',
            description: 'Uyumlu arayüzler oluşturmak için hero görsellerinden paletler çıkarın',
            icon: 'mdi:palette',
            points: [
                'Uyumlu arka plan renkleri',
                'Düğmeler ve ikincil öğeler',
                'Otomatik olarak hesaplanan kontrast'
            ]
        },
        {
            title: 'Web Geliştiricileri',
            description: 'Doğrudan görsel referanslardan CSS stil sayfaları oluşturun',
            icon: 'mdi:code-braces',
            points: [
                'HEX kodlarını doğrudan CSS\'e kopyalayın',
                'SCSS/CSS\'de renk değişkenleri oluşturun',
                'Önceden tasarım yapmadan uyumlu temalar'
            ],
            highlight: true
        },
        {
            title: 'Dijital Sanatçılar ve İllüstratörler',
            description: 'Filmlerden, doğadan veya sanattan kromatik referanslar yakalayın',
            icon: 'mdi:brush',
            points: [
                'Usta yapıtlardan referans paletleri',
                'Sinematik renk çalışmaları',
                'Anında görsel ilham'
            ]
        },
        {
            title: 'Marka Uzmanları',
            description: 'Rehber fotoğraflara dayalı görsel kimlikler geliştirin',
            icon: 'mdi:tag-multiple',
            points: [
                'Görsellerden marka renklerini çıkarın',
                'Profesyonel kromatik kılavuzlar oluşturun',
                'Görsel tutarlılığı sağlayın'
            ]
        }
    ], columns: 2 },

    { type: 'title', text: 'Uygulamalı Renk Teorisi', level: 3 },
    { type: 'table', headers: ['Renk Kavramı', 'Tanım', 'Pratik Uygulama'], rows: [
        ['Kromatik Uyum', 'Görsel olarak dengeli renk kombinasyonu', 'UI\'da tutarlı görsel kimlik'],
        ['Kontrast', 'Renkler arasındaki parlaklık farkı', 'Okunabilirlik ve görsel hiyerarşi'],
        ['Doygunluk', 'Bir tonun renk yoğunluğu', 'Profesyonellik (düşük) vs Enerji (yüksek)'],
        ['Renk Sıcaklığı', 'Sıcak renkler (kırmızılar) vs soğuk renkler (maviler)', 'Tasarımın duygusal psikolojisi'],
        ['Monokromatik Palet', 'Tek bir tonun varyasyonları', 'Zerafet ve minimalizm']
    ] },

    { type: 'proscons', items: [
        {
            pro: 'Çıkarmada matematiksel hassasiyet - yaklaşık bir görsel seçim değil',
            con: 'Çok fazla piksele sahiplerse zar zor görünen renkler dahil edilebilir'
        },
        {
            pro: 'Anında panoya kopyalama - iş akışıyla mükemmel entegrasyon',
            con: 'Canvas API ile uyumlu modern bir tarayıcı gerektirir'
        },
        {
            pro: 'Tam gizlilik - veri gönderimi olmadan %100 yerel analiz',
            con: 'Önceki analizlerin geçmişi kaydedilmez'
        },
        {
            pro: 'Herhangi bir dijital görüntü formatıyla uyumlu',
            con: 'Son renkler görüntü sıkıştırmasına ve kalitesine bağlıdır'
        }
    ], proTitle: 'Avantajlar', conTitle: 'Sınırlamalar' },

    { type: 'diagnostic', variant: 'success', title: 'Gerçekçi Renk Temsili', icon: 'mdi:check-circle-outline', badge: 'Gelişmiş Algoritma', html: 'Sadece rastgele piksellerden örnek alan araçların aksine, sistemimiz her tonun tüm piksel sayısını ağırlıklandıran Median Cut algoritmasını kullanır ve ortaya çıkan paletin orijinal görüntünün görsel atmosferini ve renk psikolojisini sadık bir şekilde yansıtmasını sağlar.' },

    { type: 'glossary', items: [
        {
            term: 'Median Cut',
            definition: 'RGB alanını özyinelemeli olarak kutulara bölen, tek tip dağılım sağlayan renk niceleme algoritması. Tarihsel olarak GIF ve indeksli renk teknolojisinde kullanılmıştır.'
        },
        {
            term: 'RGB Renk Alanı',
            definition: 'Kırmızı, yeşil ve maviye dayalı renk modeli. Her renk bu üç değerin (0-255) kombinasyonu olarak temsil edilir. Dijital ekranlarda ve webde standarttır.'
        },
        {
            term: 'HEX Kodu',
          definition: 'Web\'de rengi temsil eden 6 haneli onaltılık gösterim (#RRGGBB): #FF0000 (kırmızı), #00FF00 (yeşil), #0000FF (mavi). CSS, Figma ve Adobe\'da evrenseldir.'
        },
        {
            term: 'Renk Doygunluğu',
            definition: 'Rengin yoğunluğu veya saflığı. Yüksek doygunluk = canlı renk; düşük doygunluk = grimsi renk. Tasarımın duygusal algısını etkiler.'
        },
        {
            term: 'Kromatik Uyum',
            definition: 'Görsel olarak hoş bir sonuç veren renklerin seçimi ve kombinasyonu. Monokromatik, tamamlayıcı, benzer veya üçlü olabilir.'
        }
    ] },

    { type: 'message', title: 'Profesyonel Kromatik Analiz', ariaLabel: 'Renk analizi hakkında teknik bilgiler', html: 'Chromatic Lens, manuel görsel analizi algoritmik hassasiyete dönüştürür. Sadece renkleri çıkarmaz: Herhangi bir görüntünün duygusal ve görsel özünü yakalayarak doğrudan kullanıma hazır HEX kodları olarak panonuza koyar. Tam gizlilik, analiz hacminde sınır yok.' },

    { type: 'title', text: 'Görsel İlhamdan Tasarım', level: 3 },
    { type: 'paragraph', html: 'En iyi renk paleti, referansınızın görsel niyetini yakalayan palettir. Chromatic Lens, eskiden manuel bir süreç olan gözlemleme, analiz etme ve not etme aşamalarını otomatikleştirir. Artık sadece bir görüntüyü sürükleyin ve saniyeler içinde profesyonel HEX kodları alın.' }
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

export const content: ChromaticLensLocaleContent = {
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
