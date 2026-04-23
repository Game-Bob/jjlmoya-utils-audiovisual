import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ChromaticLensUI, ChromaticLensLocaleContent } from '../index';

const slug = 'chromatic-lens-ekstraksi-palet-warna-online';
const title = 'Chromatic Lens: Ekstraksi Palet Warna Online';
const description = 'Ekstrak palet warna profesional dari gambar apa pun secara gratis. Identifikasi warna dominan dalam foto Anda menggunakan algoritma matematika.';

const ui: ChromaticLensUI = {
    dropTitle: "Analisis Warna",
    dropSubtitle: "Seret gambar untuk mengekstrak DNA kromatiknya.",
    processingLabel: "Mengekstrak palet...",
    paletteTitle: "Palet yang Diekstrak",
    copyLabel: "Salin HEX",
    copiedLabel: "Tersalin!",
    colorCountLabel: "Jumlah warna",
    changeImage: "Ganti gambar",
};

const faq: ChromaticLensLocaleContent['faq'] = [
    {
        question: "Bagaimana cara kerja ekstraksi warna?",
        answer: "Kami menggunakan algoritma 'Median Cut', yang mengelompokkan piksel gambar berdasarkan kedekatannya dalam ruang warna RGB untuk menemukan nada yang paling representatif.",
    },
    {
        question: "Dapatkah saya menyalin warna ke editor desain saya?",
        answer: "Ya, dengan mengeklik setiap warna, kode HEX akan disalin secara otomatis ke papan klip Anda, siap ditempelkan ke Photoshop, Figma, atau CSS.",
    },
    {
        question: "Jenis gambar apa yang bisa saya analisis?",
        answer: "Semua file JPG, PNG, atau WebP. Pemrosesan dilakukan secara lokal, sehingga gambar besar akan dianalisis dengan cepat tanpa menghabiskan data jaringan.",
    },
];

const howTo: ChromaticLensLocaleContent['howTo'] = [
    {
        name: "Unggah gambar",
        text: "Unggah foto yang ingin Anda ambil inspirasi kromatiknya.",
    },
    {
        name: "Sesuaikan presisi",
        text: "Pilih berapa banyak warna dominan yang ingin diidentifikasi oleh alat ini (dari 3 hingga 12).",
    },
    {
        name: "Analisis hasilnya",
        text: "Palet akan muncul secara instan dengan kode heksadesimal yang sesuai.",
    },
    {
        name: "Salin dan gunakan",
        text: "Klik pada nada warna untuk menyimpannya dan menerapkannya pada proyek desain Anda.",
    },
];

const seo: ChromaticLensLocaleContent['seo'] = [
    {
        type: 'summary',
        title: 'Ekstraksi Palet Warna Cerdas',
        items: [
            'Algoritma Median Cut profesional untuk analisis warna',
            'Ekstrak 3-12 warna dominan dari gambar apa pun',
            'Kode HEX dapat disalin langsung ke papan klip',
            'Pemrosesan lokal 100% - ideal untuk kreatif'
        ]
    },
    { type: 'title', text: 'Ekstraksi Palet Warna: Sains dan Desain', level: 2 },
    { type: 'paragraph', html: 'Pernahkah Anda bertanya-tanya mengapa foto film terasa begitu harmonis? Itu bukan kebetulan; itu adalah teori warna yang sedang beraksi. Chromatic Lens memungkinkan Anda mengekstrak harmoni itu langsung dari piksel, mengubahnya menjadi kode HEX yang dapat digunakan dalam proyek desain Anda.' },

    { type: 'stats', items: [
        { value: 'Instan', label: 'Analisis Warna', icon: 'mdi:lightning-bolt' },
        { value: '100%', label: 'Privasi Lokal', icon: 'mdi:lock' },
        { value: 'RGB', label: 'Ruang Warna Presisi', icon: 'mdi:palette' }
    ], columns: 3 },

    { type: 'title', text: 'Penjelasan Algoritma Median Cut', level: 3 },
    { type: 'paragraph', html: 'Ekstraksi palet cerdas bukanlah pengambilan sampel piksel acak yang sederhana. Ia menggunakan algoritma Median Cut, teknik partisi rekursif yang memastikan representasi setia:' },
    { type: 'list', items: [
        '<strong>Pembagian Rekursif:</strong> \"Kubus warna\" RGB dari gambar dibagi secara rekursif menjadi kotak-kotak yang lebih kecil.',
        '<strong>Keseimbangan Volume:</strong> Setiap partisi berusaha mengelompokkan piksel dari ruang warna yang sama dengan volume yang serupa.',
        '<strong>Rata-rata Tertimbang:</strong> Warna yang dihasilkan dari setiap kotak adalah rata-rata dari semua piksel yang dikandungnya.',
        '<strong>Representasi Setia:</strong> Warna dominan mencerminkan suasana visual nyata dari gambar, bukan sekadar sampel sederhana.'
    ], icon: 'mdi:check' },

    { type: 'card', title: 'Alur Kerja Kreatif', html: 'Ideal untuk pengembang web, desainer UX/UI, seniman digital, dan kreatif yang ingin menangkap esensi visual foto, film, atau referensi visual secara instan untuk diterapkan dalam antarmuka, ilustrasi, atau palet merek mereka.' },

    { type: 'title', text: 'Kasus Penggunaan dalam Desain Digital', level: 3 },
    { type: 'comparative', items: [
        {
            title: 'Desainer UX/UI',
            description: 'Ekstrak palet dari gambar utama untuk membuat antarmuka yang kohesif',
            icon: 'mdi:palette',
            points: [
                'Warna latar belakang yang harmonis',
                'Tombol dan elemen sekunder',
                'Kontras yang dihitung secara otomatis'
            ]
        },
        {
            title: 'Pengembang Web',
            description: 'Buat lembar gaya CSS langsung dari referensi visual',
            icon: 'mdi:code-braces',
            points: [
                'Salin HEX langsung ke CSS',
                'Variabel warna dalam SCSS/CSS',
                'Tema yang kohesif tanpa desain sebelumnya'
            ],
            highlight: true
        },
        {
            title: 'Seniman Digital dan Ilustrator',
            description: 'Tangkap referensi kromatik dari film, alam, atau seni',
            icon: 'mdi:brush',
            points: [
                'Palet referensi dari mahakarya',
                'Studi warna sinematik',
                'Inspirasi visual instan'
            ]
        },
        {
            title: 'Spesialis Branding',
            description: 'Kembangkan identitas visual berdasarkan foto panduan',
            icon: 'mdi:tag-multiple',
            points: [
                'Ekstrak warna merek dari gambar',
                'Buat panduan kromatik profesional',
                'Pastikan konsistensi visual'
            ]
        }
    ], columns: 2 },

    { type: 'title', text: 'Teori Warna Terapan', level: 3 },
    { type: 'table', headers: ['Konsep Warna', 'Definisi', 'Aplikasi Praktis'], rows: [
        ['Harmoni Kromatik', 'Kombinasi warna yang seimbang secara visual', 'Identitas visual yang kohesif dalam UI'],
        ['Kontras', 'Perbedaan kecerahan antar warna', 'Keterbacaan dan hierarki visual'],
        ['Saturasi', 'Intensitas warna dari sebuah nada', 'Profesionalisme (rendah) vs Energi (tinggi)'],
        ['Temperatur Warna', 'Warna hangat (merah) vs warna dingin (biru)', 'Psikologi emosional desain'],
        ['Palet Monokromatik', 'Variasi dari satu nada warna', 'Elegan dan minimalis']
    ] },

    { type: 'proscons', items: [
        {
            pro: 'Presisi matematis dalam ekstraksi - bukan pilihan visual perkiraan',
            con: 'Warna yang nyaris tidak terlihat dapat disertakan jika memiliki banyak piksel'
        },
        {
            pro: 'Salin instan ke papan klip - integrasi sempurna dengan alur kerja',
            con: 'Memerlukan browser modern yang kompatibel dengan Canvas API'
        },
        {
            pro: 'Privasi total - analisis lokal 100% tanpa pengiriman data',
            con: 'Tidak ada riwayat analisis sebelumnya yang disimpan'
        },
        {
            pro: 'Kompatibel dengan semua format gambar digital',
            con: 'Warna akhir bergantung pada kompresi dan kualitas gambar'
        }
    ], proTitle: 'Keunggulan', conTitle: 'Batasan' },

    { type: 'diagnostic', variant: 'success', title: 'Representasi Warna Realistis', icon: 'mdi:check-circle-outline', badge: 'Algoritma Canggih', html: 'Berbeda dengan alat yang hanya mengambil sampel piksel acak, sistem kami menggunakan algoritma Median Cut yang menimbang seluruh jumlah piksel dari setiap nada, memastikan palet yang dihasilkan secara setia mencerminkan suasana visual dan psikologi warna dari gambar aslinya.' },

    { type: 'glossary', items: [
        {
            term: 'Median Cut',
            definition: 'Algoritma kuantisasi warna yang membagi ruang RGB secara rekursif menjadi kotak-kotak, memastikan distribusi yang seragam. Secara historis digunakan dalam teknologi warna GIF dan terindeks.'
        },
        {
            term: 'Ruang Warna RGB',
            definition: 'Model warna berdasarkan merah, hijau, dan biru. Setiap warna direpresentasikan sebagai kombinasi dari ketiga nilai ini (0-255). Standar pada layar digital dan web.'
        },
        {
            term: 'Kode HEX',
          definition: 'Notasi heksadesimal 6 digit (#RRGGBB) yang mewakili warna di web: #FF0000 (merah), #00FF00 (hijau), #0000FF (biru). Universal di CSS, Figma, dan Adobe.'
        },
        {
            term: 'Saturasi Warna',
            definition: 'Intensitas atau kemurnian warna. Saturasi tinggi = warna cerah; saturasi rendah = warna keabu-abuan. Mempengaruhi persepsi emosional desain.'
        },
        {
            term: 'Harmoni Kromatik',
            definition: 'Pemilihan dan kombinasi warna yang menghasilkan hasil yang menyenangkan secara visual. Bisa berupa monokromatik, komplementer, analog, atau triadik.'
        }
    ] },

    { type: 'message', title: 'Analisis Kromatik Profesional', ariaLabel: 'Informasi teknis tentang analisis warna', html: 'Chromatic Lens mengubah analisis visual manual menjadi presisi algoritmik. Alat ini tidak hanya mengekstrak warna: ia menangkap esensi emosional dan visual dari gambar apa pun, menempatkannya langsung di papan klip Anda sebagai kode HEX yang siap digunakan. Privasi total, tanpa batas volume analisis.' },

    { type: 'title', text: 'Desain dari Inspirasi Visual', level: 3 },
    { type: 'paragraph', html: 'Palet warna terbaik adalah yang menangkap maksud visual dari referensi Anda. Chromatic Lens mengotomatiskan apa yang dulunya merupakan proses manual: mengamati, menganalisis, mencatat. Sekarang, cukup seret gambar dan dapatkan kode HEX profesional dalam hitungan detik.' }
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
