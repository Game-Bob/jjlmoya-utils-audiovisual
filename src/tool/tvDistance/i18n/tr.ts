import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { TvDistanceUI, TvDistanceLocaleContent } from '../index';

const slug = 'tv-izleme-mesafesi-hesaplama-thx-4k-ideal-ekran';
const title = 'TV Mesafesi Hesaplayıcı: THX ve 4K İdeal Ekran';
const description = 'Boyutuna ve çözünürlüğüne göre televizyon izlemek için ideal mesafeyi hesaplayın. Home Cinema deneyiminizi THX ve SMPTE standartlarıyla optimize edin.';

const ui: TvDistanceUI = {
    specTitle: "Teknik Özellikler",
    diagonalLabel: "Diyagonal Boyut",
    resolutionLabel: "Çözünürlük",
    thxRecommendation: "THX Önerisi",
    thxDescription: "THX, sürükleyici bir sinematik deneyim için 40 derecelik bir izleme açısını kapsayan bir mesafe önerir.",
    simulationBadge: "Gerçek Zamanlı Simülasyon",
    tvWidthLabel: "cm genişlik",
    userLocationLabel: "Konumunuz",
    minLimitLabel: "Minimum Sınır",
    optimalLimitLabel: "İdeal Mesafe",
    maxLimitLabel: "Maksimum Sınır",
    unitMeters: "m",
    unitCm: "cm"
};

const faq: TvDistanceLocaleContent['faq'] = [
    {
        question: "Mesafe hesaplarken çözünürlük neden önemlidir?",
        answer: "Daha yüksek çözünürlüklerde (4K veya 8K gibi), pikseller daha küçüktür. Bu, piksel ızgarasını fark etmeden ekrana daha yakın oturmanıza olanak tanıyarak sürükleyiciliği artırır.",
    },
    {
        question: "40 derecelik izleme açısı nedir?",
        answer: "Ekranın, profesyonel bir sinema salonu deneyimine benzer şekilde, çevresel görüşünüzün büyük bir kısmını kaplaması için THX tarafından önerilen standarttır.",
    },
    {
        question: "Önerilenden daha uzakta oturabilir miyim?",
        answer: "Evet, ancak yüksek çözünürlüğün avantajını kaybedersiniz. 4K bir TV'den çok uzakta oturursanız, gözünüz ekstra ayrıntıları ayırt edemez ve içeriği 1080p'ymiş gibi görürsünüz.",
    },
];

const howTo: TvDistanceLocaleContent['howTo'] = [
    {
        name: "İnç değerini belirtin",
        text: "Mevcut televizyonunuzun veya satın almayı planladığınız televizyonun boyutunu seçmek için kaydırıcıyı hareket ettirin.",
    },
    {
        name: "Çözünürlük seçin",
        text: "Görsel keskinlik sınırlarını ayarlamak için 1080p, 4K veya 8K arasından seçim yapın.",
    },
    {
        name: "Simülasyonu görüntüleyin",
        text: "Diyagramda sizinle ekran arasındaki boyut ilişkisinin nasıl değiştiğini gözlemleyin.",
    },
    {
        name: "Kanepenizi ayarlayın",
        text: "Sinematik sürükleyiciliği en üst düzeye çıkarmak için koltuğunuzu 'İdeal Mesafe' aralığına yerleştirin.",
    },
];

const seo: TvDistanceLocaleContent['seo'] = [
    {
        type: 'summary',
        title: 'Çözünürlük ve Boyuta Göre İdeal TV Mesafesi',
        items: [
            'Sürükleyici sinematik deneyim için THX standartları (40°)',
            '1080p, 4K ve 8K için maksimum hassasiyette hesaplamalar',
            'Kurulumunuzun gerçek zamanlı görsel simülasyonu',
            'Göz yorgunluğunu önleyin ve içerik sürükleyiciliğini artırın'
        ]
    },
    { type: 'title', text: 'Sürükleyicilik Bilimi: İdeal TV Mesafesi', level: 2 },
    { type: 'paragraph', html: 'Bu sadece konforla ilgili değil, insan görsel fizyolojisi ile ilgilidir. Gözün bir çözünürlük keskinliği sınırı vardır; 4K bir ekrandan çok uzakta oturursanız, görüşünüzün kullanamayacağı pikseller için para harcamış olursunuz. Çok yakın oturmak ise göz yorgunluğuna neden olur.' },

    { type: 'stats', items: [
        { value: '40°', label: 'İdeal THX Açısı', icon: 'mdi:eye' },
        { value: '100%', label: 'Kullanılan Pikseller', icon: 'mdi:video-high-definition' },
        { value: 'Sıfır', label: 'Görsel Yorgunluk', icon: 'mdi:heart-pulse' }
    ], columns: 3 },

    { type: 'title', text: 'İki Profesyonel Standart: THX vs SMPTE', level: 3 },
    { type: 'paragraph', html: 'Audiovisual endüstrisinde izleme deneyiminizi nasıl optimize edeceğinizi belirleyen iki ana otorite vardır:' },
    { type: 'comparative', items: [
        {
            title: 'THX Standardı',
            description: '40° izleme açısı - Daha sürükleyici',
            icon: 'mdi:filmstrip',
            points: [
                'Ekran çevresel görüşünüzün daha fazlasını kaplar',
                'Sürükleyici sinematik deneyim',
                'Aksiyon filmleri ve canlı sporlar için ideal',
                'Daha fazla oda alanı gerektirir'
            ],
            highlight: true
        },
        {
            title: 'SMPTE Standardı',
            description: '30° izleme açısı - Daha rahat',
            icon: 'mdi:television',
            points: [
                'Daha konforlu oturma mesafesi',
                'Muhafazakar profesyonel öneri',
                'Çeşitli içerikler için ideal (haberler, diziler)',
                'Daha küçük odalar için daha uygun'
            ]
        }
    ], columns: 2 },

    { type: 'title', text: 'Çözünürlük Denklemi Nasıl Değiştirir', level: 3 },
    { type: 'table', headers: ['Çözünürlük', '55" TV Boyutu', 'Minimum Mesafe (piksel görünmez)', 'İdeal THX Mesafesi'], rows: [
        ['1080p (Full HD)', '55 inç', '2.0 m', '2.3 m'],
        ['4K (Ultra HD)', '55 inç', '1.2 m', '1.5 m'],
        ['8K', '55 inç', '0.8 m', '1.0 m']
    ] },

    { type: 'paragraph', html: 'Gördüğünüz gibi, daha yüksek çözünürlük piksel yapısını fark etmeden daha yakın oturmaya izin verir. 4K bir TV 1.2 metreden izlenebilir; 1080p için en az 2 metre gereklidir.' },

    { type: 'card', title: 'İnsan Görsel Keskinlik Sınırı', html: 'İnsan gözünün bir çözünürlük sınırı kapasitesi vardır. Belirli bir mesafenin ötesinde, ekran 8K olsa bile daha fazla ayrıntıyı ayırt edemezsiniz. Hesaplamalarımız sizi piksellerin %100\'ünü kullandığınız "ideal bölgeye" yerleştirir.' },

    { type: 'diagnostic', variant: 'info', title: 'Göz Yorgunluğu ve Mesafe', icon: 'mdi:information', badge: 'Görsel Sağlık', html: 'Çok yakın olmak yorgunluğa neden olur çünkü gözlerinizin sürekli uç açılara uyum sağlaması gerekir. Çok uzak olmak ayrıntıları ayırt etmek için zorlanmaya neden olur. Hesaplayıcımız sizi "tatlı noktaya" (THX için 40°) yerleştirir.' },

    { type: 'proscons', items: [
        {
            pro: 'THX 40° gerçek sinematik sürükleyicilik yaratır - profesyonel bir sinema salonu gibi',
            con: 'Oda içinde daha fazla kullanılabilir alan gerektirir'
        },
        {
            pro: '4K, 1080p\'den daha yakın oturmaya izin verir - dar alanlarda kullanışlıdır',
            con: 'Ekstra piksellerden yararlanmak için minimum mesafede olmalısınız'
        },
        {
            pro: 'En baştan doğru konumlanarak göz yorgunluğunu önleyin',
            con: 'Çoğu ev odası bu standartları TAKİP ETMEZ'
        },
        {
            pro: 'Mevcut TV\'nizin iyi konumlandırılıp konumlandırılmadığını doğrulayabilirsiniz',
            con: 'Yanlışsa mobilyaların hareket ettirilmesini gerektirir'
        }
    ], proTitle: 'Avantajlar', conTitle: 'Sınırlamalar' },

    { type: 'glossary', items: [
        {
            term: 'İzleme Açısı (derece cinsinden)',
            definition: 'Ekranın konumunuzdan kapladığı görüş açısı. 40° = çok sürükleyici; 20° = arka plan içeriği (sürükleyici değil).'
        },
        {
            term: 'THX (Tomlinson Holman Experiment)',
            definition: 'Lucasfilm tarafından oluşturulan görsel-işitsel kalite sertifikası. Sinemalar ve ev sineması için standartları belirler. 40° temel önerisidir.'
        },
        {
            term: 'SMPTE (Society of Motion Picture Technical Engineers)',
            definition: 'Film ve video için teknik standartlar organizasyonu. Muhafazakar bir profesyonel mesafe olarak 30°\'yi önerir.'
        },
        {
            term: 'İnsan Görsel Keskinliği',
            definition: 'Gözün ince detayları ayırt etme yeteneği. Belirli bir mesafeden sonra tek bir piksel fark edilemez.'
        },
        {
            term: '4K (Ultra HD)',
            definition: '~3840x2160 piksel çözünürlük. 1080p\'den 4 kat daha fazla piksel.'
        }
    ] },

    { type: 'message', title: 'Profesyonel Görsel İşitsel Oda Optimizasyonu', ariaLabel: 'TV kurulum standartları hakkında bilgi', html: 'Profesyonel sinemalar mesafe, açı ve aydınlatmanın mükemmel olmasını sağlamak için milyonlar harcar. Hesaplayıcımız aynı prensipleri evinize getiriyor.' },

    { type: 'title', text: 'Ev Sinemanızı Profesyonelce Kurun', level: 3 },
    { type: 'paragraph', html: 'Mesafe, ekran boyutu ve çözünürlük kadar ÖNEMLİDİR. Salonunuzu otantik bir sinema salonuna dönüştürmek için bu standartları takip edin.' }
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

export const content: TvDistanceLocaleContent = {
    slug,
    title,
    description,
    ui,
    seo,
    faq,
    faqTitle: 'TV İzleme Mesafesi Hakkında Sıkça Sorulan Sorular',
    bibliography: 'Televizyon Kurulumu İçin Profesyonel Standartlar',
    howTo,
    schemas: [faqSchema as any, howToSchema as any, appSchema],
};
