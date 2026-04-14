import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { PrintQualityCalculatorUI, PrintQualityCalculatorLocaleContent } from '../index';

const slug = 'kalkulator-kualitas-cetak-piksel-ke-cm-dpi';
const title = 'Kalkulator Kualitas Cetak: Piksel ke CM dan DPI';
const description = 'Hitung ukuran cetak maksimum foto Anda berdasarkan resolusinya. Konversi piksel ke sentimeter dan inci untuk memastikan pencetakan profesional.';

const ui: PrintQualityCalculatorUI = {
    dropTitle: "Analisis Resolusi",
    dropSubtitle: "Seret gambar Anda untuk menghitung ukuran cetaknya.",
    resultsTitle: "Spesifikasi File",
    dpiDensityLabel: "Kepadatan Cetak yang Diinginkan (DPI)",
    dpiPointsLabel: "titik per inci",
    maxPrintTitle: "Ukuran Cetak Maksimum",
    standardFormatsTitle: "Format Standar yang Didukung",
    formatColumn: "Format",
    measureColumn: "Ukuran",
    supportColumn: "Didukung?",
    qualityExcellent: "Kualitas Luar Biasa",
    qualityGood: "Kualitas Bagus",
    qualityFair: "Kualitas Layar",
    qualityPoor: "Tidak Cocok",
    qualityExcellentDesc: "Ideal untuk majalah seni, buku fotografi, dan tampilan jarak dekat.",
    qualityGoodDesc: "Cukup untuk poster dan tampilan jarak menengah.",
    qualityFairDesc: "Cocok untuk tampilan digital atau papan iklan jauh.",
    qualityPoorDesc: "Gambar akan terlihat berpiksel. Pencetakan tidak disarankan.",
    unitCm: "cm",
    unitInches: "inci",
    dpiScreenLabel: "Layar",
    dpiNewspaperLabel: "Koran",
    dpiPrintLabel: "Pencetakan",
    dpiFineArtLabel: "Seni Rupa",
    formatPostal: "Kartu Pos",
    formatQuartilla: "Kwarto",
    formatFolio: "Folio",
    formatDoubleFolio: "Double Folio",
    formatSmallPoster: "Poster Kecil",
    formatLargePoster: "Poster Besar",
    formatPlane: "Denah",
    supportedText: "Ya (Tercover)",
    notSupportedPrefix: "Tidak (",
    invalidImageError: "Silakan pilih gambar yang valid",
    faqTitle: "Pertanyaan yang Sering Diajukan",
    bibliographyTitle: "Referensi"
};

const faq: PrintQualityCalculatorLocaleContent['faq'] = [
    {
        question: "Apa itu DPI dan mengapa itu penting?",
        answer: "DPI (Dots Per Inch) menunjukkan berapa banyak titik tinta yang akan diletakkan printer dalam satu inci linier. Semakin tinggi DPI, semakin tajam gambarnya, tetapi semakin kecil ukuran fisik total yang akan dicakup oleh piksel Anda.",
    },
    {
        question: "Berapa DPI ideal untuk mencetak foto?",
        answer: "Standar industri adalah 300 DPI untuk kualitas fotografi yang luar biasa. Untuk cetakan besar yang akan dilihat dari jauh, 150 DPI bisa cukup.",
    },
    {
        question: "Dapatkah saya meningkatkan DPI gambar saya tanpa kehilangan kualitas?",
        answer: "Tidak. Meningkatkan DPI tanpa mengubah piksel hanya akan memperkecil ukuran cetakan. Jika Anda 'menciptakan' piksel menggunakan perangkat lunak (upscaling), gambar mungkin akan terlihat kabur.",
    },
];

const howTo: PrintQualityCalculatorLocaleContent['howTo'] = [
    {
        name: "Unggah gambar Anda",
        text: "Unggah foto yang ingin Anda cetak untuk mengetahui dimensinya dalam piksel.",
    },
    {
        name: "Sesuaikan DPI",
        text: "Geser bilah untuk melihat bagaimana ukuran akhir berubah sesuai dengan kepadatan titik (72 hingga 600 DPI).",
    },
    {
        name: "Verifikasi format",
        text: "Periksa tabel format standar (A4, A3, dll.) untuk melihat apakah resolusi Anda mencakup kertas yang diinginkan.",
    },
    {
        name: "Konfirmasi kualitas",
        text: "Pastikan indikator menunjukkan 'Kualitas Luar Biasa' sebelum mengirim untuk dicetak.",
    },
];

const bibliography: PrintQualityCalculatorLocaleContent['bibliography'] = [
    {
        name: "Ukuran Kertas Internasional (ISO 216)",
        url: "https://www.iso.org/standard/36631.html",
    },
    {
        name: "Panduan resolusi gambar - Adobe",
        url: "https://www.adobe.com/id/creativecloud/photography/discover/image-resolution.html",
    },
];

const seo: PrintQualityCalculatorLocaleContent['seo'] = [
    {
        type: 'summary',
        title: 'Perhitungan Resolusi Cetak Profesional',
        items: [
            'Konversi piksel ke sentimeter dan inci dengan akurat',
            'Hitung ukuran maksimum berdasarkan DPI yang diinginkan',
            'Kompatibilitas dengan format standar (A4, A3, dll.)',
            'Panduan untuk 4 tingkat kualitas: Luar Biasa hingga Tidak Cocok'
        ]
    },
    { type: 'title', text: 'Panduan Definitif untuk Kualitas Cetak dan DPI', level: 2 },
    { type: 'paragraph', html: 'Pernahkah Anda mencetak foto dan hasilnya kabur atau berpiksel? Rahasianya terletak pada hubungan matematis antara <strong>Piksel</strong> dan <strong>DPI</strong> (Dots Per Inch). Alat ini menghitung ukuran maksimum yang tepat untuk mencetak gambar Anda tanpa kehilangan kualitas profesional.' },

    { type: 'stats', items: [
        { value: '300', label: 'DPI Standar Profesional', icon: 'mdi:target' },
        { value: '100%', label: 'Perhitungan Presisi', icon: 'mdi:check' },
        { value: 'ISO 216', label: 'Format yang Didukung', icon: 'mdi:file-document' }
    ], columns: 3 },

    { type: 'title', text: 'Memahami DPI: Piksel vs Titik', level: 3 },
    { type: 'paragraph', html: 'Kebingungan umum adalah menganggap bahwa DPI dan piksel adalah hal yang sama. Padahal bukan. Piksel berada DI DALAM file digital Anda. DPI adalah cara printer mengubahnya menjadi tinta di atas kertas.' },
    { type: 'list', items: [
        '<strong>DPI (Dots Per Inch):</strong> Berapa banyak titik tinta yang diletakkan printer dalam satu inci linier (2,54 cm).',
        '<strong>Piksel:</strong> Kotak data kecil di file digital Anda. Foto berukuran 3000x2000 piksel memiliki informasi yang konstan, terlepas dari DPI-nya.',
        '<strong>Rumusnya:</strong> Ukuran cetak (inci) = Piksel / DPI. Contoh: 3000 piksel / 300 DPI = 10 inci (25,4 cm)'
    ], icon: 'mdi:check' },

    { type: 'title', text: 'Penjelasan Tingkat Kualitas DPI', level: 3 },
    { type: 'table', headers: ['DPI', 'Kualitas Visual', 'Kasus Penggunaan', 'Jarak Pandang'], rows: [
        ['600+ DPI', 'Luar Biasa (Sempurna)', 'Buku seni, majalah mewah, fotografi rupa', 'Kurang dari 10 cm'],
        ['300-400 DPI', 'Luar Biasa (Profesional)', 'Fotografi, buku, katalog perusahaan', '20-30 cm (tangan)'],
        ['150-200 DPI', 'Bagus (Cetak Web)', 'Poster, kalender, tampilan menengah', '1-2 meter'],
        ['72-100 DPI', 'Layar (Cukup)', 'Papan iklan, spanduk jauh', '5+ meter'],
        ['10-30 DPI', 'Rendah (Tidak Cocok)', 'Papan iklan raksasa, tampilan sangat jauh', '50+ meter']
    ] },

    { type: 'card', title: 'Aturan Emas 300 DPI', html: 'Untuk pencetakan fotografi dan editorial profesional, standar industrinya adalah <strong>300 DPI</strong>. Ini memastikan bahwa mata manusia pada jarak normal (20-30 cm) tidak merasakan titik tinta individu. Kurang dari 300 DPI dan kotak piksel akan mulai terlihat.' },

    { type: 'comparative', items: [
        {
            title: 'Fotografi Genggam (Foto 10x15)',
            description: 'Wajib 300 DPI - dilihat dari dekat',
            icon: 'mdi:image',
            points: [
                'Pada 3000x2000 piksel = maksimum 10x6,7 inci',
                'Kualitas Luar Biasa terjamin',
                'Standar untuk album dan hadiah'
            ]
        },
        {
            title: 'Poster Dinding A3 (30x42 cm)',
            description: '150 DPI cukup - dilihat dari jarak jauh',
            icon: 'mdi:wall-fire',
            points: [
                'Dilihat dari jarak 1-2 meter',
                'Lebih sedikit piksel yang dibutuhkan',
                'Hemat pada kualitas kamera'
            ],
            highlight: true
        },
        {
            title: 'Papan Iklan (200x300 cm)',
            description: '15-30 DPI - dilihat dari jarak berkilo-kilo meter',
            icon: 'mdi:sign',
            points: [
                'Diamati dari jarak 20+ meter',
                'Resolusi rendah pun terlihat bagus',
                'Optimalkan file besar'
            ]
        }
    ], columns: 3 },

    { type: 'title', text: 'Menyiapkan File untuk Pencetakan Profesional', level: 3 },
    { type: 'proscons', items: [
        {
            pro: 'CMYK vs RGB: Printer menggunakan tinta (CMYK), layar menggunakan cahaya (RGB). Konversi untuk menghindari kejutan warna.',
            con: 'Warna dapat berubah saat mengonversi - periksa pratinjau terlebih dahulu'
        },
        {
            pro: 'Bleed: Tambahkan ekstra 3mm per sisi jika gambar harus mencapai tepi kertas',
            con: 'Tanpa bleed, tepi potongan bisa tetap putih'
        },
        {
            pro: 'Upscaling TIDAK bekerja: Meningkatkan piksel di Photoshop menambahkan informasi palsu (penghalusan)',
            con: 'Jika Anda ingin mencetak besar, Anda memerlukan foto asli beresolusi tinggi'
        },
        {
            pro: 'Format: TIFF tanpa kompresi atau JPEG kualitas tinggi untuk foto; vektor (AI, EPS) untuk logo',
            con: 'PNG tidak mendukung CMYK secara native di sebagian besar tempat percetakan'
        }
    ], proTitle: 'Rekomendasi', conTitle: 'Kontraindikasi' },

    { type: 'diagnostic', variant: 'warning', title: 'Kesalahan Umum: Mitos Upscaling', icon: 'mdi:alert', badge: 'Kritis', html: '<strong>JANGAN tingkatkan DPI di Photoshop tanpa mengubah piksel.</strong> Meningkatkan dari 72 DPI ke 300 DPI hanya akan mengecilkan ukuran cetak fisik. Jika Anda "menambah piksel" melalui interpolasi (upscaling), gambar akan terlihat halus atau kabur. Anda memerlukan piksel ASLI dari sumbernya.' },

    { type: 'glossary', items: [
        {
            term: 'DPI (Dots Per Inch)',
            definition: 'Ukuran resolusi cetak: berapa banyak titik tinta per inci linier (2,54 cm). 300 DPI = 300x300 = 90.000 titik per inci persegi.'
        },
        {
            term: 'CMYK',
            definition: 'Ruang warna cetak: Cyan, Magenta, Yellow, blacK. Berdasarkan tinta subtraktif. Berbeda dengan RGB (cahaya aditif pada layar).'
        },
        {
            term: 'Bleed',
            definition: 'Area ekstra (biasanya 3mm) yang dicetak lalu dipotong. Memastikan gambar mencapai tepi tanpa menyisakan margin putih.'
        },
        {
            term: 'Resolusi Native',
            definition: 'Piksel ASLI yang ditangkap oleh kamera, tanpa manipulasi. Meningkatkan DPI tanpa mengubah piksel tidak menghasilkan "resolusi native".'
        },
        {
            term: 'Interpolasi (Upscaling)',
            definition: 'Algoritma yang menciptakan piksel baru berdasarkan piksel yang sudah ada. Berguna untuk peningkatan kecil, tetapi kehilangan ketajaman pada pembesaran besar.'
        }
    ] },

    { type: 'message', title: 'Presisi Teknik untuk Hasil Profesional', ariaLabel: 'Informasi tentang perhitungan cetak', html: 'Kalkulator kami mengonversi piksel ke sentimeter dengan mempertimbangkan standar internasional (ISO 216 untuk kertas). Ini bukan sekadar kalkulator: ini adalah validator Anda untuk menentukan apakah foto tersebut cocok untuk ukuran cetak tersebut sambil menjaga kualitas profesional.' },

    { type: 'title', text: 'Kesimpulan: Cetak Tanpa Kejutan', level: 3 },
    { type: 'paragraph', html: 'Perbedaan antara cetakan yang indah dan cetakan yang mengecewakan adalah mengetahui hubungan antara piksel dan DPI. Gunakan kalkulator ini untuk memvalidasi file Anda SEBELUM pergi ke percetakan. Dengan cara ini Anda menghindari biaya yang tidak perlu dan hasil yang membuat frustrasi.' }
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
    inLanguage: 'id',
};

export const content: PrintQualityCalculatorLocaleContent = {
    slug,
    title,
    description,
    ui,
    seo,
    faqTitle: "Pertanyaan yang Sering Diajukan",
    faq,
    bibliographyTitle: "Referensi",
    bibliography,
    howTo,
    schemas: [faqSchema as any, howToSchema as any, appSchema],
};
