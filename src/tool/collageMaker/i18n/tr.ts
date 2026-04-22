import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { CollageMakerUI, CollageMakerLocaleContent } from '../index';

const slug = 'ucretsiz-online-foto-kolaj-yapici-profesyonel-kompozisyonlar';
const title = 'Online Kolaj Yapıcı: Profesyonel kompozisyonlar tasarlayın';
const description = 'Saniyeler içinde ücretsiz fotoğraf kolajları oluşturun. Birden fazla düzen arasından seçim yapın, kenarlıkları ayarlayın ve filigran olmadan yüksek kalitede indirin.';

const ui: CollageMakerUI = {
    dropTitle: "Görselleri buraya sürükleyin",
    dropSub: "veya {link} - min. 2, maks. 9",
    dropLink: "dosya seçin",
    imgsLoaded: "Yüklenen görseller",
    layoutLabel: "Düzen",
    settingsLabel: "Ayarlar",
    borderLabel: "Kenarlık",
    borderColorLabel: "Kenarlık rengi",
    bgColorLabel: "Arka Plan",
    downloadBtn: "İndir",
    previewTitle: "Önizleme",
    needsImgs: "{n} görsele daha ihtiyacınız var",
    errorMin: "En az 2 görsele ihtiyacınız var",
    errorMax: "Maksimum 9 görsele izin verilir",
    errorLoad: "Görseller yüklenirken hata oluştu",
    faqTitle: "Sıkça Sorulan Sorular": "Referanslar"
};

const faq: CollageMakerLocaleContent['faq'] = [
    {
        question: "Fotoğrafların sırasını nasıl değiştirebilirimi?",
        answer: "Fotoğraflar, yüklenen görseller listesinde göründükleri sırayı takip ederek kolaja yerleştirilir. Birini kaldırıp tekrar yükleyerek konumunu ayarlayabilirsiniz.",
    },
    {
        question: "Kolajın çıktı formatı nedir?",
        answer: "Kolaj, keskinlik kaybı olmadan sosyal ağlarda paylaşmak için ideal olan yüksek çözünürlüklü WebP formatında indirilir.",
    },
];

const howTo: CollageMakerLocaleContent['howTo'] = [
    {
        name: "Fotoğraflarınızı yükleyin",
        text: "Dosya gezgininizden 2 ile 9 arasında görsel seçin.",
    },
    {
        name: "Bir düzen seçin",
        text: "Yüklediğiniz fotoğraf sayısına en uygun ızgarayı seçin.",
    },
    {
        name: "Stili kişiselleştirin",
        text: "Profesyonel bir görünüm kazandırmak için kenarlık kalınlığını ve rengini ayarlayın.",
    },
    {
        name: "İndirin ve paylaşın",
        text: "Oluştur düğmesine basın ve nihai kompozisyonunuzu anında indirin.",
    },
];

const seo: CollageMakerLocaleContent['seo'] = [
    {
        type: 'summary',
        title: 'Profesyonel Online Kolaj Yapıcı',
        items: [
            'Birden fazla düzen ve önceden tanımlanmış ızgaralar',
            'Kenarlıkların ve arka plan renklerinin özelleştirilmesi',
            'Sosyal ağlar için hazır 1200px yüksek çözünürlük',
            'Kullanım sınırı olmaksızın anında işleme'
        ]
    },
    { type: 'title', text: 'Kolaj Tasarımı: Hikaye Anlatan Kompozisyonlar', level: 2 },
    { type: 'paragraph', html: 'Kolaj, fotoğrafların basit bir karışımından daha fazlasıdır; duygu ve bağlamı ileten görsel bir anlatıdır. Aracımız, Photoshop veya pahalı yazılımlara ihtiyaç duymadan Instagram, Facebook, Pinterest veya kişisel projeleriniz için profesyonel geometrik kompozisyonlar oluşturmanıza olanak tanır.' },

    { type: 'stats', items: [
        { value: '2-9', label: 'Kolaj Başına Görsel', icon: 'mdi:image-multiple' },
        { value: '1200px', label: 'HD Çözünürlük', icon: 'mdi:video-high-definition' },
        { value: 'Anında', label: 'Oluşturma', icon: 'mdi:lightning-bolt' }
    ], columns: 3 },

    { type: 'title', text: 'Görsel Kompozisyon: Tasarım İlkeleri', level: 3 },
    { type: 'paragraph', html: 'Kompozisyon, görsel unsurları izleyicinin gözünü yönlendirecek ve bir niyeti iletecek şekilde düzenleme sanatıdır. İyi bir kolaj şunları dengeler:' },
    { type: 'list', items: [
        '<strong>Denge:</strong> Görsel ağırlık dağılımı (açık vs koyu görseller, büyük vs küçük).',
        '<strong>Görsel Akış:</strong> Göz, ölü noktalar olmadan kompozisyonda doğal bir şekilde gezinmelidir.',
        '<strong>Kontrast:</strong> Dikkat çeken renk, boyut ve şekil farklılıkları.',
        '<strong>Bütünlük:</strong> Tematik tutarlılık - görseller aynı hikaye hakkında \"birlikte konuşmalıdır\".'
    ], icon: 'mdi:check' },

    { type: 'card', title: 'Akıllı ve Uyarlanabilir Tasarımlar', html: 'Sistemimiz, fotoğraf sayısına göre en uygun alan dağılımını otomatik olarak hesaplar. 2 görsel = simetrik ızgara; 5 görsel = dengeli asimetrik dağılım. Her ızgara, görsel etkiyi maksimize etmek için tasarlanmıştır.' },

    { type: 'comparative', items: [
        {
            title: 'Sosyal Ağlar İçin',
            description: 'Instagram, TikTok, Facebook - kare formatlar',
            icon: 'mdi:share-all',
            points: [
                '1200px Instagram akışı için mükemmeldir',
                'Kare formatı paylaşırken kırpılmayı önler',
                'Markalaşma için özelleştirilebilir kenarlıklar'
            ],
            highlight: true
        },
        {
            title: 'Portfolyolar İçin',
            description: 'Fotoğrafçılar ve tasarımcılar için görsel vitrinler',
            icon: 'mdi:briefcase-outline',
            points: [
                'Bir projenin birden fazla açısını gösterin',
                'Uyumlu görsel anlatı',
                'Profesyonel dijital kitap baskısı'
            ]
        },
        {
            title: 'Kişisel Hediyeler İçin',
            description: 'Baskılar, çerçeveler ve dijital albümler',
            icon: 'mdi:gift-outline',
            points: [
                'Etkinlik anıları (düğünler, seyahatler)',
                'Baskıya hazır yüksek çözünürlük',
                'Manuel çaba gerektirmeyen anında tasarım'
            ]
        }
    ], columns: 3 },

    { type: 'title', text: 'Özelleştirme: Kenarlıklar ve Renkler', level: 3 },
    { type: 'table', headers: ['Öğe', 'Görsel Etki', 'Öneri'], rows: [
        ['Beyaz Kenarlık', 'Temiz, minimalist, modern', 'Sosyal ağlar, dijital portfolyolar'],
        ['Siyah Kenarlık', 'Dramatik, profesyonel, sanatsal', 'Sanat fotoğrafçılığı, moda, lüks'],
        ['Nötr Kenarlık (gri)', 'Çok yönlü, akademik, kurumsal', 'İş dünyası, eğitim, tarafsızlık'],
        ['Kenarlıksız', 'Füzyon, süreklilik, sürükleyici', 'Tek tip arka plan, akan fotoğraflar']
    ] },

    { type: 'proscons', items: [
        {
            pro: 'Profesyonel önceden tanımlanmış tasarımlar - kompozisyon bilgisi gerekmez',
            con: 'Seçenekler önceden belirlenmiş ızgaralarla sınırlıdır'
        },
        {
            pro: 'Yeniden ölçeklendirme olmadan sosyal ağlar için hazır 1200px çözünürlük',
            con: 'Photoshop kadar özelleştirilebilir değil'
        },
        {
            pro: '%100 yerel işleme - gizlilik, hız, sınır yok',
            con: 'Modern bir tarayıcı gerektirir'
        },
        {
            pro: 'Tamamen ücretsiz, filigran yok, reklam yok',
            con: 'Bireysel düzenleme seçenekleri (kırpma, döndürme) yok'
        }
    ], proTitle: 'Avantajlar', conTitle: 'Sınırlamalar' },

    { type: 'diagnostic', variant: 'success', title: 'Sosyal Ağlar İçin Hazır', icon: 'mdi:check-circle-outline', badge: 'Optimize Edildi', html: '1200x1200px Instagram için ideal çözünürlüktür. Her türlü en boy oranını destekler, ancak kare çıktı akış etkisini maksimize eder, otomatik kırpmayı ortadan kaldırır ve masaüstü, tablet ve mobil cihazlarda aynı derecede iyi görünür.' },

    { type: 'glossary', items: [
        {
            term: 'Görsel Kompozisyon',
            definition: 'İzleyicinin gözünü yönlendirmek ve duygusal bir niyeti iletmek için unsurları (renk, biçim, alan) düzenleme sanatı.'
        },
        {
            term: 'Üçler Kuralı',
            definition: 'Kompozisyon ilkesi: görüntüyü 9 eşit alana (3x3) böler. Maksimum etki için konuları kesişme çizgilerine yerleştirin.'
        },
        {
            term: 'Simetrik Izgara',
            definition: 'Eşit alan bölmeleri. Güven verici, düzenli. Fotoğraf çiftleri veya çift sayılar için idealdir.'
        },
        {
            term: 'Asimetrik Izgara',
            definition: 'Eşit olmayan bölmeler. Dinamik, ilginç, görsel. Çeşitli boyutlarda 5+ fotoğraf için idealdir.'
        },
        {
            term: 'Görsel Denge',
            definition: 'Görsel ağırlığın algısal dengesi. Açık + koyu görsel = denge; büyük + küçük = denge.'
        }
    ] },

    { type: 'message', title: 'Anında Görsel Anlatı', ariaLabel: 'Kompozisyon ve kolajlar hakkında bilgiler', html: 'Her kolaj bir hikaye anlatır. Otomatik tasarımcımız, görsel hikayelerinizin dengeli, profesyonel ve dünyaya hazır olmasını sağlar. Bir grafik tasarımcının işi yapmasını beklemenize gerek kalmaz.' },

    { type: 'title', text: 'Oluştur, Paylaş, İlham Ver', level: 3 },
    { type: 'paragraph', html: 'İyi yapılmış bir kolaj, unutulabilir bir gönderi ile takipçilerinizin hatırlayacağı ve paylaşacağı bir gönderi arasındaki farktır. Görsel hikayelerinizin etki yaratması için akıllı kompozisyonu kullanın.' }
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

export const content: CollageMakerLocaleContent = {
    slug,
    title,
    description,
    ui,
    seo,
    faqTitle: "Sıkça Sorulan Sorular",
    faq: "Referanslar",
    bibliography,
    howTo,
    schemas: [faqSchema as any, howToSchema as any, appSchema],
};
