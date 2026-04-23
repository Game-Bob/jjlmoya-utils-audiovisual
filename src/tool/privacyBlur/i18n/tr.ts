import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { PrivacyBlurUI, PrivacyBlurLocaleContent } from '../index';

const slug = 'online-privacy-editor-pikselleme-bulaniklastirma-yuzleri-fotograflar';
const title = 'Çevrimiçi Gizlilik Editörü: Fotoğraflardaki Yüzleri Pikselle ve Gizle';
const description = 'Fotoğraflarınızın hassas bölgelerini sansürleyerek kimliğinizi koruyun. Yüzleri pikselleyin, belgeleri bulanıklaştırın veya özel bilgileri %100 yerel olarak kapatın.';

const ui: PrivacyBlurUI = {
    toolPixel: "Pikselle",
    toolBlur: "Bulanıklaştır",
    toolSolid: "Kapat",
    intensityLabel: "Yoğunluk",
    undoButton: "Geri Al",
    downloadButton: "Kaydet",
    dropTitle: "Gizlilik Editörü",
    dropSubtitle: "Görselinizi buraya sürükleyin veya başlamak için tıklayın",
    privacySecureLabel: "%100 Yerel",
    offlineLabel: "Çevrimdışı",
    autoDetectFaces: "Otomatik Algıla",
    loadingModels: "Modeller yükleniyor...",
    noFacesDetected: "Otomatik olarak yüz algılanamadı.",
};

const faq: PrivacyBlurLocaleContent['faq'] = [
    {
        question: "Fotoğraflarım herhangi bir sunucuya yükleniyor mu?",
        answer: "Hayır. Gizlilik editörü tamamen tarayıcınızda çalışır. Pikseller yerel olarak değiştirilir ve cihazınızın dışına hiçbir şey gönderilmez.",
    },
    {
        question: "Otomatik yüz algılama nasıl çalışır?",
        answer: "Harici bir bağlantıya ihtiyaç duymadan yüz özelliklerini belirlemek için tarayıcınızda çalışan hafif bir sinir ağı (TinyFaceDetector) kullanıyoruz.",
    },
];

const howTo: PrivacyBlurLocaleContent['howTo'] = [
    {
        name: "Fotoğrafınızı yükleyin",
        text: "Gizlemek istediğiniz hassas bilgileri içeren görseli sürükleyin veya seçin.",
    },
    {
        name: "Aracı seçin",
        text: "İhtiyacınız olan gizlilik düzeyine bağlı olarak pikselleme, bulanıklaştırma veya sağlam kapatma arasında seçim yapın.",
    },
    {
        name: "Alanı işaretleyin",
        text: "Korumak istediğiniz bölgenin (yüzler, plakalar, isimler vb.) üzerine tıklayıp sürükleyin.",
    },
    {
        name: "Sonucu kaydedin",
        text: "Orijinal verilerin erişilemez olduğu güvencesiyle işlenmiş görseli indirin.",
    },
];

const seo: PrivacyBlurLocaleContent['seo'] = [
    {
        type: 'summary',
        title: 'Gizlilik Editörü: Pikselle, Bulanıklaştır ve Gizle',
        items: [
            'Üç düzenleme aracı: Pikselleme, Bulanıklaştırma, Sağlam Kapatma',
            'Yapay Zeka ile otomatik yüz algılama (TinyFaceDetector)',
            '%100 yerel işleme - fotoğraflarınız asla tarayıcıdan ayrılmaz',
            'Filigran yok, sınır yok, tamamen ücretsiz'
        ]
    },
    { type: 'title', text: 'Dijital Gizlilik: Görsel Verilerinizi Nasıl Korursunuz?', level: 2 },
    { type: 'paragraph', html: 'Sosyal medya çağında, fotoğrafları kontrolsüz bir şekilde paylaşmak hassas kişisel verileri ifşa edebilir. Aracımız, fotoğraflarınızı internete yüklemeden önce kritik bilgileri (yüzler, plakalar, isimler, adresler) gizlemenize olanak tanıyarak gizliliğinizin tam kontrolünüz altında kalmasını sağlar.' },

    { type: 'stats', items: [
        { value: '3', label: 'Gizleme Yöntemi', icon: 'mdi:tools' },
        { value: '%100', label: 'Yerel Gizlilik', icon: 'mdi:shield-check' },
        { value: 'AI', label: 'Yüz Algılama', icon: 'mdi:brain' }
    ], columns: 3 },

    { type: 'title', text: 'Üç Gizleme Yöntemi Açıklandı', level: 3 },
    { type: 'comparative', items: [
        {
            title: 'Pikselleme',
            description: 'Alanı karelere böler, tanınması imkansızdır',
            icon: 'mdi:blur',
            points: [
                'Maksimum geri dönülemez karartma',
                'Yüz tanımaya karşı daha güvenli',
                'Görünür, bir şeyin gizlendiği bellidir',
                'İdeal: halka açık fotoğraflardaki yüzler'
            ]
        },
        {
            title: 'Bulanıklaştırma (Blur)',
            description: 'Gauss Yumuşatma - daha doğal görünüm',
            icon: 'mdi:blur-off',
            points: [
                'Daha zarif görsel görünüm',
                'Bazı ton uyumlarını korur',
                'Matematiksel olarak geri döndürülebilir (teorik olarak)',
                'İdeal: daha az hassas bilgiler'
            ],
            highlight: true
        },
        {
            title: 'Sağlam Kapatma',
            description: 'Opak renk bloğu - maksimum gizlilik',
            icon: 'mdi:rectangle',
            points: [
                'Görünür, belirgin gizleme',
                'Maksimum yasal güvenlik/gizlilik',
                'Görsel kompozisyonu değiştirir',
                'İdeal: belgeler, hassas veriler'
            ]
        }
    ], columns: 3 },

    { type: 'title', text: 'Yapay Zeka ile Otomatik Yüz Algılama', level: 3 },
    { type: 'paragraph', html: 'Aracımız, yüzleri otomatik olarak tanımlamak için doğrudan tarayıcınızda çalışan kompakt bir sinir ağı olan TinyFaceDetector\'ı kullanır:' },
    { type: 'list', items: [
        '<strong>%100 Yerel:</strong> Yapay zeka modeli uzak sunucularda değil, GPU/CPU\'nuzda çalışır.',
        '<strong>İnternet Gerekmez:</strong> İlk indirmeden sonra tamamen çevrimdışı çalışır.',
        '<strong>Gizlilik Garantili:</strong> Yüzleri kimse görmez: ne Google, ne OpenAI, ne de biz.',
        '<strong>Tek Tıkla Otomatik:</strong> Yüzleri algılar ve tek tıkla gizlemeyi seçmenize olanak tanır.'
    ], icon: 'mdi:check' },

    { type: 'card', title: 'Privacy by Design', html: 'Görüntüleri tarayıcınızın yerel GPU ve CPU\'sunu kullanarak işleyerek, orijinal fotoğrafların cihazınızdan asla ayrılmamasını garanti ediyoruz. Fikrinizi değiştirseniz bile hiçbir şey iletilmemiştir. Bu, dijital gizliliğin maksimum standardıdır.' },

    { type: 'title', text: 'Gizlilik Kullanım Durumları', level: 3 },
    { type: 'table', headers: ['Hassas Bilgi', 'Önerilen Yöntem', 'Aciliyet'], rows: [
        ['İnsan yüzleri', 'Pikselle veya Bulanıklaştır', 'Kritik'],
        ['Araç plakaları', 'Pikselle (geri dönülemez)', 'Kritik'],
        ['Kimlik belgeleri', 'Sağlam Kapatma veya Pikselle', 'Kritik'],
        ['Yazılı isimler/adresler', 'Sağlam Kapatma veya Pikselle', 'Yüksek'],
        ['Telefon numaraları', 'Pikselle veya Kapat', 'Yüksek'],
        ['Tıbbi bilgiler', 'Sağlam Kapatma', 'Kritik'],
        ['Görünür WiFi sinyalleri', 'Pikselle', 'Orta']
    ] },

    { type: 'proscons', items: [
        {
            pro: 'Tam gizlilik: %100 yerel işleme, sunucu yok, depolama yok',
            con: 'Canvas ve WebGL destekli modern tarayıcı gerektirir'
        },
        {
            pro: 'Otomatik yüz algılama manuel zamandan tasarruf sağlar',
            con: 'Yapay zeka mükemmel değildir - profil veya kısmi yüzler algılanmayabilir'
        },
        {
            pro: 'Üç yöntem, güvenlik ve estetik arasında seçim yapmaya olanak tanır',
            con: 'Gelişmiş seçenekler (akıllı deformasyon, bağlam doldurma) yok'
        },
        {
            pro: 'Tamamen ücretsiz, reklam yok, sınır yok',
            con: 'Photoshop gibi profesyonel yazılımlara eşdeğer değildir'
        }
    ], proTitle: 'Avantajlar', conTitle: 'Sınırlamalar' },

    { type: 'diagnostic', variant: 'warning', title: 'Uyarı: Bulanıklaştırma %100 Güvenli DEĞİLDİR', icon: 'mdi:alert', badge: 'Güvenlik', html: 'Gauss bulanıklığı, gelişmiş ters algoritmalar aracılığıyla matematiksel olarak geri döndürülebilir. Bilgi KRİTİKSE (yasal belgeler, kimlik), <strong>Pikselleme veya Sağlam Kapatma</strong> kullanın. Bulanıklaştırma estetik olarak daha iyidir ancak daha az güvenlidir.' },

    { type: 'glossary', items: [
        {
            term: 'Pikselleme',
            definition: 'Alanı tek tip renk bloklarına bölerek çözünürlüğü düşürmek. Geri dönülemez. Yapay zeka yüz tanımasına karşı maksimum güvenlik.'
        },
        {
            term: 'Gauss Bulanıklığı',
            definition: 'Normal dağılıma dayalı matematiksel yumuşatma. Teorik olarak dekonvolüsyon yoluyla geri döndürülebilir ancak pratikte çok zordur.'
        },
        {
            term: 'Sağlam Kapatma',
            definition: 'Tek tip renkte opak blok. Maksimum güvenlik, maksimum yasal gizlilik, görsel olarak daha az zarif.'
        },
        {
            term: 'TinyFaceDetector',
            definition: 'Yüzleri algılamak için hafif evrişimli sinir ağı (CNN). Harici bir sunucuya ihtiyaç duymadan tarayıcıda yerel olarak çalışır.'
        },
        {
            term: 'Privacy by Design (PbD)',
            definition: 'Gizliliğin sisteme sonradan eklenmek yerine sistem tasarımından itibaren entegre edildiği yaklaşım. Yerel yaklaşımımız Tasarım Yoluyla Gizliliktir.'
        }
    ] },

    { type: 'message', title: 'Gizlilik Kontrolünüzde', ariaLabel: 'Gizlilik koruması hakkında bilgi', html: 'Fotoğraflarınızı uzak sunucularda saklamıyor veya işlemiyoruz. İzleme çerezleri yok. Düzenleme geçmişi yok. Görsellerinizi asla görmediğimiz için neyi gizlediğinizi bilmiyoruz. Tam kontrol, tam gizlilik, tam özgürlük.' },

    { type: 'title', text: 'Sosyal Ağlarda Güvenle Paylaşın', level: 3 },
    { type: 'paragraph', html: 'İnternette herhangi bir fotoğraf paylaşmadan önce kendinize sorun: herkese açık olmamasını tercih edeceğim bilgiler var mı? Çocukların yüzleri, plakalar, adresler, belge numaraları. Şimdi yapılacak 2 dakikalık bir gizlilik oturumu, yıllarca sürecek sorunları önler.' }
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

export const content: PrivacyBlurLocaleContent = {
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
