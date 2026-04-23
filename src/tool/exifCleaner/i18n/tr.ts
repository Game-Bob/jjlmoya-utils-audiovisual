import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ExifCleanerUI, ExifCleanerLocaleContent } from '../index';

const slug = 'exif-metadata-temizleyici-gps-sil-foto-gizliligi';
const title = 'EXIF Meta Veri Temizleyici: Fotoğraflardan GPS ve Gizli Verileri Kaldırın';
const description = 'Paylaşmadan önce görsellerinizden EXIF meta verilerini, GPS koordinatlarını ve kamera özelliklerini silmek için ücretsiz çevrimiçi araç. %100 özel: fotoğrafları internete yüklemeden çalışır.';

const ui: ExifCleanerUI = {
    dropTitle: "Görselinizi buraya sürükleyin",
    dropSubtitle: "GPS meta verilerini, kamera modelini ve gizli ayarları kaldırın.",
    dropLocalInfo: "%100 yerel işleme. Buluta hiçbir şey yüklenmez.",
    selectButton: "Görsel Seç",
    processingText: "Meta veriler temizleniyor...",
    analysisCompleted: "Analiz Tamamlandı",
    downloadButton: "Temiz Görseli İndir",
    resetButton: "Başka bir görseli temizle",
    privacyRiskTitle: "GİZLİLİK RİSKLERİ TESPİT EDİLDİ:",
    gpsLabel: "GPS:",
    gpsDetected: "TESPİT EDİLDİ",
    gpsNotFound: "BULUNAMADI",
    cameraLabel: "KAMERA:",
    softwareLabel: "YAZILIM:",
    dateLabel: "TARİH:",
    otherTechnicalDetails: "DİĞER TEKNİK DETAYLAR",
    noMetadataFound: "Okunabilir EXIF meta verisi bulunamadı.",
    alreadyCleanInfo: "Görsel zaten temiz olabilir.",
    previewLabel: "Önizleme",
};

const faq: ExifCleanerLocaleContent['faq'] = [
    {
        question: "EXIF meta verileri nedir?",
        answer: "EXIF (Exchangeable Image File Format), kameranızın veya telefonunuzun her fotoğrafın içine kaydettiği gizli bilgilerdir. Tam tarih, cihaz modeli, çekim ayarları (ISO, diyafram) ve en kritiği, fotoğrafın çekildiği yerin GPS koordinatlarını içerir.",
    },
    {
        question: "Bu çevrimiçi aracı kullanmak güvenli mi?",
        answer: "Evet, çünkü işleme tarayıcınızda %100 yerel olarak gerçekleşir. Fotoğraflarınız asla herhangi bir sunucuya yüklenmez; temizleme işlemi doğrudan cihazınızın belleğinde yapılır ve mutlak gizlilik sağlanır.",
    },
    {
        question: "Temizleyici hangi spesifik verileri kaldırır?",
        answer: "Tüm EXIF etiketlerini (GPS, kamera markası, seri numarası), IPTC (telif hakkı, yazar) ve XMP (düzenleme geçmişi) verilerini siler. Görseliniz, yalnızca görsel pikselleri koruyarak 'temiz' hale gelir.",
    },
    {
        question: "Meta verileri temizlerken görsel kalite kaybeder mi?",
        answer: "Hayır. Yalnızca dosyanın teknik veri 'başlığını' kaldırıyoruz. Görsel verileri (pikseller) aynı kalır, bu nedenle görsel kalite hiçbir şekilde etkilenmez.",
    },
];

const howTo: ExifCleanerLocaleContent['howTo'] = [
    {
        name: "Görselleri seçin",
        text: "Fotoğraflarınızı buraya sürükleyin veya dosya gezgininizden seçin. Aynı anda birkaç fotoğrafı işleyebilirsiniz.",
    },
    {
        name: "Mevcut verileri analiz edin",
        text: "Araç, tespit ettiği hassas bilgileri size gösterecektir (örneğin, 'GPS koordinatları tespit edildi').",
    },
    {
        name: "İşleyin ve temizleyin",
        text: "Tüm meta veri etiketlerini anında kaldırmak için temizle düğmesine tıklayın.",
    },
    {
        name: "Güvenli fotoğrafları indirin",
        text: "Görsellerinizin artık anonimleştirilmiş ve sosyal medyada güvenle paylaşılmaya hazır olan yeni sürümlerini kaydedin.",
    },
];

const seo: ExifCleanerLocaleContent['seo'] = [
    {
        type: 'summary',
        title: 'EXIF Meta Veri Temizleyici: Gizliliğinizi Koruyun',
        items: [
            'Fotoğraflarınızdan GPS koordinatlarını ve konumu anında kaldırın',
            'Kamera modelini, seri numarasını ve teknik bilgileri silin',
            '%100 tarayıcı tabanlı işleme - görselleriniz asla cihazınızdan ayrılmaz',
            'Görsel kaliteyi korur - yalnızca gizli veriler kaldırılır'
        ]
    },
    { type: 'title', text: 'Dijital Fotoğrafçılıkta Gizlilik ve EXIF Meta Verileri Hakkında Tam Kılavuz', level: 2 },
    { type: 'paragraph', html: 'Sosyal medyaya fotoğraf yüklerken ne kadar kişisel bilgi paylaştığınızı hiç merak ettiniz mi? EXIF meta verileri, tam ev konumunuzdan fotoğraf ekipmanınızın fiyatına kadar her şeyi ortaya çıkarabilen <strong>görünmez bir parmak izi</strong> gibidir. Bu kılavuz, gizliliğinizi nasıl etkili bir şekilde koruyacağınızı açıklar.' },

    { type: 'stats', items: [
        { value: '%100', label: 'Gizlilik - Yerel İşleme', icon: 'mdi:shield-check' },
        { value: '%0', label: 'Sunucularda Depolanan Veri', icon: 'mdi:database' },
        { value: 'Anında', label: 'Meta Veri Kaldırma', icon: 'mdi:lightning-bolt' }
    ], columns: 3 },

    { type: 'title', text: 'Fotoğraflarınızda Hangi Bilgiler Gizli?', level: 3 },
    { type: 'paragraph', html: 'Dijital fotoğrafların %90\'ından fazlası güvenliğinizi tehlikeye atabilecek hassas bilgiler içerir. İşte ortaya çıkabilecek tüm veriler:' },
    { type: 'list', items: [
        '<strong>GPS Koordinatları:</strong> Çekimin yapıldığı tam enlem ve boylam (ev adresi, iş yeri, sık ziyaret edilen yerler).',
        '<strong>Ekipman Tanımlama:</strong> Kameranın veya akıllı telefonun markası, modeli ve seri numarası (değerli bilgiler).',
        '<strong>Teknik Ayarlar:</strong> ISO, diyafram (f/), pozlama süresi ve odak uzaklığı (spesifik ekipmanınızı tanımlamaya olanak tanır).',
        '<strong>Tam Tarih ve Saat:</strong> Günlük aktivitelerinizin eksiksiz bir zaman çizelgesi.',
        '<strong>Düzenleme Geçmişi:</strong> Kullanılan yazılım, düzenleme programı ve son değişiklik tarihi.',
        '<strong>Telif Hakkı Verileri:</strong> Fotoğrafçı, telif hakkı ve kişisel notlar.'
    ] },

    { type: 'title', text: 'Gerçek Güvenlik Riskleri: Kullanım Örnekleri', level: 3 },
    { type: 'comparative', items: [
        {
            title: 'Profesyonel Fotoğrafçılar',
            description: 'Seri numarasıyla tanımlanan pahalı ekipmanların çalınma riski',
            icon: 'mdi:camera',
            points: [
                'Hırsızlar değerli ekipmanları olan fotoğrafçıları ararlar',
                'GPS, sahibinin ev adresini tanımlar',
                'Seri numarası dark web\'de yeniden satışı kolaylaştırır'
            ]
        },
        {
            title: 'Ebeveynler ve Influencer\'lar',
            description: 'Aşırı tehlike: çocukların gerçek zamanlı konumu',
            icon: 'mdi:alert',
            points: [
                'Yırtıcılar OSINT kullanarak konumları takip eder',
                'Yırtıcılar günlük rutinleri tanımlayabilir',
                'Takip edilme ve fiziksel takip riski'
            ],
            highlight: true
        },
        {
            title: 'Sosyal Medya Kullanıcıları',
            description: 'Kişisel ve profesyonel gizliliğin ifşası',
            icon: 'mdi:share-variant',
            points: [
                'Ofisten paylaşım yapmak iş yeri konumunu ortaya çıkarır',
                'Coğrafi konum, yaklaşık maaşın tahmin edilmesine olanak tanır',
                'Kamuya açık veriler hedefli profillemeye olanak tanır'
            ]
        },
        {
            title: 'Gezginler ve Nomads',
            description: 'Boş evlerde hırsızlık tehlikesi',
            icon: 'mdi:map',
            points: [
                'Yayınlanan GPS seyahat sırasında evin boş olduğunu gösterir',
                'Ekipman verileri suçluları cezbeder',
                'Seyahat geçmişleri programları ve kalıpları ortaya çıkarır'
            ]
        }
    ], columns: 2 },

    { type: 'title', text: 'Bu Araç Nasıl Çalışır?', level: 3 },
    { type: 'list', items: [
        '<strong>1. Görsellerinizi seçin:</strong> Fotoğrafları sürükleyin veya seçiciyi kullanın. Aynı anda birkaç tanesini işleyebilirsiniz.',
        '<strong>2. Otomatik analiz:</strong> Araç, mevcut tüm meta verileri (GPS, kamera modeli, tarih vb.) tespit eder ve gösterir.',
        '<strong>3. Anında temizleme:</strong> Tek bir tıklamayla zararlı meta verilerin %100\'ünü kaldırır.',
        '<strong>4. Güvenli indirme:</strong> Risk almadan ağlarda paylaşılmaya hazır anonimleştirilmiş görselleri alın.',
        '<strong>5. Kalıntı yok:</strong> Temiz görsel tüm orijinal görsel kalitesini korur.'
    ], icon: 'mdi:check' },

    { type: 'card', title: 'Gizlilik Teknolojisi', icon: 'mdi:shield-check', html: 'Bu araç, görselin piksel piksel temiz bir kopyasını oluşturmak için <strong>tarayıcının Canvas API\'sini</strong> kullanır ve şunları garanti eder:<br><br>- Hiçbir veri sunuculara gönderilmez<br>- Görseliniz asla cihazınızdan ayrılmaz<br>- %100 anonim ve güvenli işleme<br>- İlk yüklemeden sonra internet bağlantısı olmasa bile kullanabilirsiniz' },

    { type: 'title', text: 'Hangi Spesifik Veriler Kaldırılır?', level: 3 },
    { type: 'table', headers: ['Meta Veri Türü', 'Örnekler', 'Risk'], rows: [
        ['EXIF (Değiştirilebilir)', 'GPS, ISO, Diyafram, Perde Hızı, Kamera Modeli', 'KRİTİK'],
        ['IPTC (Yayın)', 'Telif Hakkı, Yazar, Anahtar Kelimeler, Sahne Konumu', 'YÜKSEK'],
        ['XMP (XML)', 'Düzenleme Geçmişi, Kullanılan Yazılım, Yapılan Düzenlemeler', 'ORTA'],
        ['Temel Dosya Verileri', 'Oluşturma Tarihi, Tam Saat, Cihaz', 'YÜKSEK']
    ] },

    { type: 'proscons', items: [
        {
            pro: 'Tam Gizlilik - %100 tarayıcı tabanlı işleme',
            con: 'JavaScript destekli modern bir tarayıcı gerektirir'
        },
        {
            pro: 'Anında - bir fotoğrafı temizlemek 1 saniyeden az sürer',
            con: 'Büyük fotoğrafların işlenmesi eski cihazlarda yavaş olabilir'
        },
        {
            pro: 'Sıfır Kalite Kaybı - yalnızca teknik verileri kaldırır, pikselleri değil',
            con: 'Görseli düzenlemez (kırpma, döndürme vb.)'
        },
        {
            pro: 'Sınır Olmaksızın Tamamen Ücretsiz - sınırsız fotoğraf işleyin',
            con: 'Premium destek veya bulut depolama yok'
        }
    ], proTitle: 'Temel Avantajlar', conTitle: 'Sınırlamalar' },

    { type: 'tip', title: 'Dijital Güvenlik İpucu', html: 'Herhangi bir sosyal ağda <strong>paylaşmadan ÖNCE fotoğraflarınızı temizleyin</strong>. Bir gönderiyi silseniz bile, meta veriler arama motorları veya arşivler tarafından dizine eklenmiş olabilir. Önlemek tedaviden daha iyidir. Bunu bir alışkanlık haline getirin: <br><br><em>Fotoğraf → EXIF Temizle → Paylaş</em>' },

    { type: 'diagnostic', variant: 'warning', title: 'Temizlememenin Gerçek Riskleri', icon: 'mdi:alert-circle', badge: 'Kritik Güvenlik', html: '<strong>Belgelenmiş vakalar:</strong><br>- Çocuklarının fotoğraflarını paylaşan ebeveynler - yırtıcılar GPS\'i takip etti<br>- Seyahat eden fotoğrafçılar - onlar uzaktayken evleri soyuldu<br>- Influencer\'lar - ikamet yerleri takıntılı hayranlar tarafından tespit edildi<br><br>Bu paranoya değil: 2026\'da temel dijital hijyendir.' },

    { type: 'glossary', items: [
        {
            term: 'EXIF',
            definition: 'Exchangeable Image File Format. Görüntü dosyalarında teknik meta verileri depolayan bir standart: GPS, kamera verileri, pozlama ayarları. Dijital fotoğrafların yaklaşık %90\'ında kullanıcının niyeti olmadan bulunur.'
        },
        {
            term: 'GPS Koordinatları',
            definition: 'Fotoğrafın çekildiği tam konumun kesin enlem ve boylamı. Sosyal medya ile birleştirildiğinde, kişilerin fiziksel takibine olanak tanır.'
        },
        {
            term: 'IPTC',
            definition: 'International Press Telecommunications Council. Okunabilir yayın meta verileri: telif hakkı, yazar, anahtar kelimeler, açıklama. Profesyonel fotoğrafçılıkta standarttır.'
        },
        {
            term: 'XMP',
            definition: 'Extensible Metadata Platform. Lightroom veya Photoshop gibi yazılımlardaki düzenleme geçmişini kaydeden bir XML formatı. Yapılan tüm düzenlemeleri ortaya çıkarabilir.'
        },
        {
            term: 'OSINT',
            definition: 'Open Source Intelligence. İnsanların bilgisi olmadan profillerini oluşturmak için kamuya açık bilgileri (sosyal medya, meta veriler, kayıtlar) toplama tekniği.'
        },
        {
            term: 'Dijital Anonimleştirme',
            definition: 'Tanımlanabilir bilgileri (konum, cihaz, davranış kalıpları) kaldırma veya karartma işlemi. Çevrimiçi gizlilik için gereklidir.'
        }
    ] },

    { type: 'message', title: 'Gizliliğiniz Sizin Sorumluluğunuzdur', ariaLabel: 'Gizlilik ve veri hakları hakkında bilgiler', html: 'Görsellerinizi saklamayız, işlemeyiz veya paylaşmayız. <strong>Tam kontrole sahipsiniz.</strong> Tüm işlemler özel olarak tarayıcınızda gerçekleşir. Bu sekmeyi kapattığınızda, aktivitenize dair hiçbir kayıt kalmaz. İnternette gizliliğinizi böyle korursunuz: verilerinize saygı duyan araçlar.' },

    { type: 'title', text: 'Sonuç: İz Bırakmadan Paylaşın', level: 3 },
    { type: 'paragraph', html: 'Dijital kimliğinizi korumak küçük detaylarla başlar. Fotoğraflarınızı yayınlamadan önce temizlemek 2026\'da <strong>temel bir dijital hijyen alışkanlığıdır</strong>. Sadece konumunuzu korumakla kalmaz: ailenizi, varlıklarınızı ve profesyonel gizliliğinizi korur. Masum görünen bir fotoğraf hakkınızda hayal ettiğinizden daha fazlasını ortaya çıkarabilir.' }
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

export const content: ExifCleanerLocaleContent = {
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
