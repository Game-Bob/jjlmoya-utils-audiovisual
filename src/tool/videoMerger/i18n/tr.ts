import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { VideoMergerUI, VideoMergerLocaleContent } from '../index';

const slug = 'videolari-birlestir-online';
const title = 'Videoları Çevrimiçi Birleştir: Birden fazla videoyu hızlı ve ücretsiz birleştir';
const description = 'Birden fazla videoyu ücretsiz, çevrimiçi ve yerel olarak tek bir videoda birleştirin ve bir araya getirin. Filigran yok, yükleme yok, tarayıcınızda %100 gizli.';

const ui: VideoMergerUI = {
    uploadTitle: "Video dosyalarınızı yükleyin",
    uploadFormats: "Birden fazla videoyu sürükleyip bırakın veya seçmek için tıklayın",
    privacyNote: "Videolarınız %100 yerel olarak işlenir. İnternete hiçbir şey yüklenmez.",
    addMoreBtn: "Daha fazla video ekle",
    mergeBtn: "Videoları şimdi birleştir",
    mergingStatus: "Videolar birleştiriliyor...",
    downloadBtn: "Birleştirilmiş videoyu indir",
    resetBtn: "Baştan başla",
    emptyList: "Birleştirmeye başlamak için videoları sürükleyin veya seçin.",
    listTitle: "Birleştirilecek videoların sırası",
    optionsTitle: "Çıktı ayarları",
    optionResolution: "Çözünürlük",
    optionFps: "Saniyedeki kare sayısı (FPS)",
    optionsQualityNote: "Nihai çözünürlük, videolar farklı boyutlara sahipse orijinal en boy oranı letterbox formatında korunarak ayarlanacaktır.",
    faqTitle: "Video Birleştirme Hakkında Sıkça Sorulan Sorular",
    bibliographyTitle: "Biyografi ve Referanslar",
    resolutionWarning: "Uyarı: Bazı videoların çözünürlükleri farklı ve otomatik olarak uyarlanacak."
};

const faq: VideoMergerLocaleContent['faq'] = [
    {
        question: "Videolarımı bu araca yüklemek güvenli mi?",
        answer: "Evet, tamamen güvenli. Araç, tarayıcınızda %100 yerel olarak çalışır. Videolarınız asla internet üzerinden iletilmez veya herhangi bir sunucuya kaydedilmez.",
    },
    {
        question: "Videolarımın boyutları farklıysa ne olur?",
        answer: "Aracımız, videoları seçtiğiniz çıktı çözünürlüğüne uyacak şekilde otomatik olarak yeniden boyutlandırır. Tam olarak eşleşmeyen oranlar için, orijinal en boy oranını korumak üzere siyah kenar boşlukları (letterboxing) eklenecektir.",
    },
    {
        question: "Videoların sesi birleştirilirken korunuyor mu?",
        answer: "Evet. Her bir videonun ses parçaları yakalanır ve her bir görüntü bölümüyle mükemmel bir senkronizasyon içinde sırayla karıştırılır.",
    },
];

const howTo: VideoMergerLocaleContent['howTo'] = [
    {
        name: "Videolarınızı seçin veya sürükleyin",
        text: "Birleştirmek istediğiniz tüm video dosyalarını doğrudan bilgisayarınızdan veya cep telefonunuzdan yükleyin.",
    },
    {
        name: "Sırayı düzenleyin",
        text: "Oynatma sırasına karar vermek için listedeki yukarı veya aşağı düğmelerini kullanarak yüklenen videoları sıralayın.",
    },
    {
        name: "Seçenekleri ayarlayın",
        text: "Birleştirilmiş videonun çıktı çözünürlüğünü ve saniyedeki kare sayısını (FPS) seçin.",
    },
    {
        name: "Birleştir ve dışa aktar",
        text: "Birleştirme düğmesine basın. Gerçek zamanlı işlemenin tamamlanmasını bekleyin ve ortaya çıkan dosyayı indirin.",
    },
];

const seo: VideoMergerLocaleContent['seo'] = [
    {
        type: 'summary',
        title: '%100 Yerel Profesyonel Video Birleştirme',
        items: [
            'Doğrudan tarayıcınızda gerçek zamanlı işleme',
            'Farklı boyut ve formatlarda birden fazla videoyu destekler (MP4, WEBM, MOV)',
            'Seçilebilir çıktı çözünürlüğü (720p, 1080p, 2K, 4K)',
            'Mükemmel bir şekilde sırayla birleştirilen ses parçaları'
        ]
    },
    { type: 'title', text: 'Videoları Çevrimiçi Ücretsiz Birleştirin: Sınırsız Basitlik ve Gizlilik', level: 2 },
    { type: 'paragraph', html: '<strong>İki videonun nasıl tek bir videoda birleştirileceğini</strong> mi merak ediyorsunuz? Artık ağır yazılımlar veya ücretli uygulamalar indirmenize gerek yok. <strong>Videoları çevrimiçi ücretsiz birleştirme</strong> aracımız, ihtiyacınız olan tüm klipleri saniyeler içinde uç uca eklemenize ve birleştirmenize olanak tanır. %100 yerel çalışarak dosyalarınızı hiçbir sunucuya yüklemek zorunda kalmazsınız, bu da mutlak gizliliği garanti eder ve <strong>büyük videoları</strong> yükleme süresi beklemeden <strong>birleştirmenize</strong> olanak tanır.' },
    
    { type: 'title', text: 'Filigransız Video Birleştirme', level: 3 },
    { type: 'paragraph', html: 'Diğer uygulamaların en büyük dezavantajlarından biri, içeriğinizi mahvetmeleridir. Bizimle, <strong>videoları filigran olmadan çevrimiçi birleştirebilirsiniz</strong>. İndirdiğiniz dosya tam olarak sizin eseriniz olacak; temiz, profesyonel ve YouTube, Instagram, TikTok veya kişisel kullanım için paylaşmaya hazır olacak.' },

    { type: 'stats', items: [
        { value: '%100', label: 'Özel ve Yerel', icon: 'mdi:shield-check' },
        { value: '0MB', label: 'Yükleme Verisi Yok', icon: 'mdi:upload-off' },
        { value: '4K', label: 'Maksimum Çözünürlük', icon: 'mdi:video-high-definition' }
    ], columns: 3 },

    { type: 'title', text: 'Video Birleştirmek İçin Yaygın Kullanım Alanları', level: 3 },
    { type: 'comparative', items: [
        {
            title: 'Sosyal Medya',
            description: 'Hikayeleri, TikTok\'ları veya reel videolarını hızlıca tek bir videoda birleştirme',
            icon: 'mdi:instagram',
            points: [
                'Cep telefonunuzla kaydedilen küçük klipleri birleştirin',
                'Instagram veya YouTube için sıralı içerik hazırlayın',
                'Sinir bozucu filigranlar olmadan birleştirme'
            ]
        },
        {
            title: 'Sunumlar',
            description: 'Tanıtımları ve demo kayıtlarını tek bir dosyada birleştirin',
            icon: 'mdi:presentation',
            points: [
                'Hareketli bir introyu sunumun gövdesiyle birleştirin',
                'Kısa yazılım demolarını birleştirin',
                'Standart MP4/WEBM formatında temiz dışa aktarım'
            ],
            highlight: true
        },
        {
            title: 'Aile Derlemeleri',
            description: 'Tatillerinizden veya kutlamalarınızdan birden fazla videoyu birleştirin',
            icon: 'mdi:home-heart',
            points: [
                'Partinin tüm anlarıyla tek bir video oluşturun',
                'Seyahat anılarını kronolojik olarak gruplandırın',
                'Tek bir dosyada olduğu için paylaşması kolay'
            ]
        },
        {
            title: 'Eğitim Videoları',
            description: 'Kısa eğitim bölümlerini veya derslerini uca uca ekleyin',
            icon: 'mdi:school',
            points: [
                'Küçük bağımsız öğreticileri gruplandırın',
                'Derslerinize bir kapanış klibi ekleyin',
                'Kursunuzu profesyonelce yapılandırın'
            ]
        }
    ], columns: 2 },

    { type: 'title', text: 'Tarayıcıdan Video Birleştirmek İçin En İyi Uygulama', level: 2 },
    { type: 'paragraph', html: 'Bu sadece başka bir web sayfası değil; modern HTML5 video API\'leri sayesinde doğrudan tarayıcınızdan çalışan gerçek bir <strong>video birleştirme uygulamasıdır</strong>. <strong>MP4 videolarını</strong>, WEBM\'i ve daha fazlasını birleştirebilir, çözünürlükleri karıştırabilir (boyutlar değişirse sistemimiz otomatik letterboxing uygular) ve nihai dışa aktarımınızın saniyedeki kare sayısını (FPS) seçebilirsiniz.' },

    { type: 'title', text: 'Birleştirme Yaklaşımlarının Karşılaştırması', level: 3 },
    { type: 'table', headers: ['Özellikler', 'Yerel Aracımız', 'Klasik Çevrimiçi Dönüştürücüler', 'Profesyonel Editörler'], rows: [
        ['Gizlilik', 'Tam (Cihazınızda işlenir)', 'Düşük (Sunucuya dosya yüklenmesini gerektirir)', 'Tam (Cihazınızda yüklü)'],
        ['Ağ Tüketimi', 'Sıfır (Gigabaytlarca yükleme yok)', 'Çok yüksek (Dosya yükleme ve indirme)', 'Sıfır'],
        ['Filigran', 'YOK (%100 temiz)', 'Evet (Ücretsiz sürümlerde)', 'YOK (Lisans alırsanız)'],
        ['Fiyat', '%100 Ücretsiz', 'Sınırlarla ücretsiz veya abonelik', 'Genellikle pahalı'],
        ['Öğrenme Eğrisi', 'Çok düşük (Sürükle, sırala ve birleştir)', 'Düşük', 'Çok yüksek (Eğitim gerektirir)']
    ] },

    { type: 'proscons', items: [
        {
            pro: 'Garantili gizlilik: Hiçbir dosya cihazınızdan ayrılmadığı için maksimum güvenlik',
            con: 'Büyük videoları birleştirme hızı, yerel bilgisayarınızın RAM\'ine ve işlemcisine bağlıdır'
        },
        {
            pro: 'Profesyonel sonuçlar: %100 ücretsiz, kayıt yok ve filigran yok',
            con: 'Farklı boyutlardaki (dikey vs yatay) videoları birleştirirken, siyah kenar boşlukları (letterboxing) uygulanacaktır'
        },
        {
            pro: 'Çok Yönlülük: Web ve sosyal medya kullanımı için optimize edilmiş verimli kodlama ile hızlı dışa aktarım',
            con: 'Klipler arasında karmaşık geçişler (3B kararmalar) veya sinematik görsel efektler eklemeye izin vermez'
        }
    ], title: 'Avantajlar ve Hususlar' },

    { type: 'title', text: 'Videolarınızı Bugün Birleştirmeye Başlayın', level: 2 },
    { type: 'paragraph', html: 'Artık yüzlerce dağınık video parçasına sahip olmak için bahaneniz yok. Dosyalarınızı yükleyin, istediğiniz sıraya koyun ve düğmeye basın. <strong>Videoları çevrimiçi birleştirmenin</strong> en hızlı, en güvenli ve en gizli yolunu keşfedin.' }
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

export const content: VideoMergerLocaleContent = {
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
