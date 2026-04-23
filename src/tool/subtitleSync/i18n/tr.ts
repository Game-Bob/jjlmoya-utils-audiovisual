import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { SubtitleSyncUI, SubtitleSyncLocaleContent } from '../index';

const slug = 'srt-altyazi-senkronize-et-online-zamanlamayi-ayarla-ucretsiz';
const title = 'SRT Altyazı Senkronize Et Online: Zamanlamayı Ücretsiz Ayarla';
const description = 'SRT altyazılarını ileri almak veya geciktirmek için çevrimiçi araç. Zaman farkını kolayca düzeltin ve senkronize edilmiş dosyayı anında indirin.';

const ui: SubtitleSyncUI = {
    dropTitle: ".SRT dosyanızı buraya sürükleyin",
    dropSubtitle: "veya göz atmak için tıklayın",
    adjustTitle: "Zamanı Ayarla",
    offsetLabel: "Kayma (saniye)",
    offsetHelp: "İleri almak için negatif (örn. -1.5), geciktirmek için pozitif değerler kullanın.",
    linesStat: "Satır",
    firstStat: "İlk Altyazı",
    lastStat: "Son Altyazı",
    originalLabel: "ORİJİNAL",
    resultLabel: "SONUÇ",
    downloadButton: "Düzeltilmiş Olanı İndir",
    previewBadge: "ÖNİZLEME",
    unitSeconds: "sn"
};

const faq: SubtitleSyncLocaleContent['faq'] = [
    {
        question: "Ses altyazıdan öndeyse altyazılarımı nasıl senkronize edebilirim?",
        answer: "Ses metinden önce geliyorsa, altyazıları geciktirmelisiniz. Hesaplayıcıya pozitif bir değer girin (örneğin, 2 saniye geciktirmek için 2.0).",
    },
    {
        question: "Bu araç hangi dosya formatlarını kabul ediyor?",
        answer: "Şu anda araç, video oynatıcılarda ve akış platformlarında en yaygın standart olan .SRT (SubRip) dosyaları için optimize edilmiştir.",
    },
    {
        question: "Altyazı dosyalarımı yüklemek güvenli mi?",
        answer: "Evet, çünkü işleme cihazınızda %100 yerel olarak gerçekleşir. Dosyalarınız herhangi bir sunucuya gönderilmez; senkronizasyon doğrudan tarayıcınızda yapılır.",
    },
    {
        question: "Dosyanın sadece bir kısmını senkronize edebilir miyim?",
        answer: "Hayır, bu araç tüm dosyaya sabit bir kayma uygular. Kayma aşamalıysa (zamanla artıyorsa), daha gelişmiş bir düzenleme gerekebilir.",
    },
];

const howTo: SubtitleSyncLocaleContent['howTo'] = [
    {
        name: "SRT dosyanızı yükleyin",
        text: "Düzeltmek istediğiniz altyazı dosyasını yükleme alanına sürükleyin.",
    },
    {
        name: "Kaymayı belirleyin",
        text: "Altyazıların oynatıcınızdaki sese göre ne kadar gecikme veya ilerleme gösterdiğini ölçün.",
    },
    {
        name: "Kaymayı ayarlayın",
        text: "Kontrol paneline pozitif (gecikme) veya negatif (ilerleme) saniye girin.",
    },
    {
        name: "Dosyayı indirin",
        text: "Önizlemede zamanların doğru olduğunu doğrulayın ve yeni SRT'nizi almak için indire tıklayın.",
    },
];

const seo: SubtitleSyncLocaleContent['seo'] = [
    {
        type: 'summary',
        title: 'Profesyonel Altyazı Senkronizasyonu',
        items: [
            'Ses-altyazı kaymalarının anında düzeltilmesi',
            'Standart SRT (SubRip) dosyalarını destekler',
            '%100 yerel işleme - maksimum gizlilik',
            'Kurulum yok, abonelik yok, tamamen ücretsiz'
        ]
    },
    { type: 'title', text: 'Mükemmel SRT Altyazı Senkronizasyonu', level: 2 },
    { type: 'paragraph', html: 'Bir izleyici için seslerle uyuşmayan diyalogları görmekten daha sinir bozucu bir şey yoktur. Altyazı kayması genellikle video sürümleri arasındaki farklardan (kare hızı varyasyonları, reklam kesintileri, yapım introları veya sıkıştırmadaki değişiklikler) kaynaklanır. Bu araçla sorunu saniyeler içinde çözersiniz.' },

    { type: 'stats', items: [
        { value: '%100', label: 'Yerel İşleme', icon: 'mdi:shield' },
        { value: 'Milisaniye', label: 'Hassasiyet', icon: 'mdi:clock-outline' },
        { value: 'Sınırsız', label: 'Dosya Sınırı YOK', icon: 'mdi:file-document' }
    ], columns: 3 },

    { type: 'title', text: 'İleri Alma vs Geciktirme: Pratik Kılavuz', level: 3 },
    { type: 'paragraph', html: 'İlk adım, kayma türünü doğru şekilde belirlemektir. Mantık şöyledir:' },
    { type: 'list', items: [
        '<strong>Geciktirme (Pozitif Değer):</strong> Metnin sesten ÖNCE göründüğünü gördüğünüzde. Altyazılar ileridedir. Örnek: +2.0 saniye.',
        '<strong>İleri Alma (Negatif Değer):</strong> Metnin sesten SONRA göründüğünü gördüğünüzde. Altyazılar geridedir. Örnek: -2.0 saniye.',
        '<strong>Test Et ve Ayarla:</strong> Küçük artışlarla (0,5 sn) başlayın ve doğrulamak için önizlemeyi kullanın.'
    ], icon: 'mdi:arrow-right' },

    { type: 'card', title: 'Profesyonel Seviye Gizlilik', html: 'Dosyayı istemci tarafı JavaScript aracılığıyla işleyerek altyazı içeriğinizin bilgisayarınızdan asla ayrılmamasını garanti ediyoruz. Gizli materyallerle veya NDA (Gizlilik Sözleşmesi) altında çalışan çevirmenler ve profesyoneller için temel bir gerekliliktir.' },

    { type: 'title', text: 'Yaygın Kullanım Durumları', level: 3 },
    { type: 'comparative', items: [
        {
            title: 'Çevirmenler ve Altyazı Hazırlayanlar',
            description: 'Birden fazla video sürümüyle çalıştıktan sonra çevirileri senkronize edin',
            icon: 'mdi:translate',
            points: [
                'Farklı kaynaklardan gelen SRT dosyaları',
                'İçerik versiyonlama (sinema vs akış)',
                'Araç değiştirmeden hızlı teslimat'
            ]
        },
        {
            title: 'İçerik Üreticileri',
            description: 'Video farklı kare hızıyla işlendiğinde altyazıları kurtarın',
            icon: 'mdi:video',
            points: [
                'Mevcut altyazıları yeniden kullanın',
                'Format değişiklikleri (720p\'den 1080p\'ye)',
                '1000\'den fazla satırın manuel zamanlamasını yapmaktan kaçının'
            ],
            highlight: true
        },
        {
            title: 'Bireysel Kullanıcılar',
            description: 'Tam olarak uymayan indirilmiş altyazıları düzeltin',
            icon: 'mdi:account',
            points: [
                'Genel senkronizasyon dışı altyazılar',
                'Farklı bölgelerdeki filmler (PAL vs NTSC)',
                'Düzenlenmiş sürümlerle akış'
            ]
        }
    ], columns: 3 },

    { type: 'title', text: 'Altyazılar Neden Senkorizasyondan Çıkar', level: 3 },
    { type: 'table', headers: ['Yaygın Sebep', 'Teknik Açıklama', 'Çözüm'], rows: [
        ['Kare Hızı Farkı', '23.976 fps vs 25 fps - birikmiş fark', 'Tek seferlik kayma ayarı (bu araç)'],
        ['Editoryal Değişiklikler', 'Reklam kesintileri veya çıkarılan/eklenen içerik', 'Manuel hesaplama + senkronizasyon'],
        ['Bölgesel Sürüm', 'PAL (25 fps Avrupa) vs NTSC (29.97 fps ABD)', 'Basit matematiksel kayma'],
        ['Çözünürlük Değişimi', 'Farklı işlem hızıyla yeniden kodlama', 'Orijinal dosyanın yeniden hesaplanması']
    ] },

    { type: 'diagnostic', variant: 'info', title: 'Dikkate Alınması Gereken Teknik Sınırlamalar', icon: 'mdi:information', badge: 'Önemli', html: 'Bu araç tüm dosyaya <strong>sabit</strong> bir kayma uygular. Kayma <strong>aşamalıysa</strong> (iyi başlar ancak yavaş yavaş senkronizasyondan çıkar), bu kalıcı bir kare hızı farkını gösterir. Bu durumda, orijinal dosyanın profesyonel düzenleme yazılımında yeniden işlenmesi gerekir.' },

    { type: 'proscons', items: [
        {
            pro: 'Ekstrem hız - büyük dosyaları milisaniyeler içinde işler',
            con: 'Sadece sabit kaymayı ayarlar, aşamalı olanları değil'
        },
        {
            pro: 'Toplam gizlilik - içerik asla tarayıcınızdan ayrılmaz',
            con: 'JavaScript etkinleştirilmiş modern tarayıcı gerektirir'
        },
        {
            pro: 'Evrensel format - herhangi bir standart SRT ile çalışır',
            con: 'Diğer formatları (ASS, VTT, SCC, vb.) desteklemez'
        },
        {
            pro: 'Tamamen ücretsiz, reklam yok, takip yok',
            con: 'Değişiklik geçmişi veya versiyonlama yok'
        }
    ], proTitle: 'Avantajlar', conTitle: 'Sınırlamalar' },

    { type: 'glossary', items: [
        {
            term: 'SRT (SubRip)',
            definition: 'En evrensel altyazı formatı: sıra numaraları, zamanlar (ss:dd:ss,mmm) ve metin içeren metin dosyası. Oynatıcılarda ve platformlarda de facto standarttır.'
        },
        {
            term: 'Kayma (Offset)',
            definition: 'Dosyadaki tüm zamanlara eklenen veya çıkarılan sabit bir süre. Pozitif saniye (gecikme) veya negatif (ilerleme) olabilir.'
        },
        {
            term: 'Kare Hızı (fps)',
            definition: 'Saniyedeki kare sayısı. 24p (sinema), 25p (PAL/Avrupa), 29.97p (NTSC/ABD), 60p (akıcı video). Farklar kümülatif kaymalara neden olur.'
        },
        {
            term: 'NTSC vs PAL',
            definition: 'Bölgesel televizyon standartları: Avrupa\'da PAL (25 fps); ABD\'de NTSC (29.97 fps). Yaklaşık %4 hız farkı.'
        },
        {
            term: 'Aşamalı Kayma',
            definition: 'Senkronizasyonun doğru başladığı ancak yavaş yavaş senkronizasyon dışı kaldığı durum. Kare hızı farkını gösterir, yeniden işleme gerektirir.'
        }
    ] },

    { type: 'message', title: 'Tam Kontrollü Profesyonel Düzenleme', ariaLabel: 'Senkronizasyon hakkında teknik bilgiler', html: 'Yaklaşımımız basit ama güçlüdür: anında uygulanan, %100 tarayıcınızda işlenen tek bir kayma. Bulut yok, depolama yok, takip yok. Sadece yükleyin, ayarlayın, indirin. İçeriğiniz üzerinde tam kontrol.' },

    { type: 'title', text: 'Sonuç: Kesintisiz Filmler', level: 3 },
    { type: 'paragraph', html: 'Mükemmel altyazı senkronizasyonu, kaliteli bir görsel-işitsel deneyim için gereklidir. Bu araçla, pahalı veya karmaşık yazılımlara ihtiyaç duymadan sinir bozucu bir deneyimi mükemmel bir film gecesine dönüştürürsünüz.' }
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

export const content: SubtitleSyncLocaleContent = {
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
