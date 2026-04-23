import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { PrivacyBlurUI, PrivacyBlurLocaleContent } from '../index';

const slug = 'editor-privasi-online-pikselkan-kaburkan-wajah-foto';
const title = 'Editor Privasi Online: Pikselkan dan sembunyikan wajah dalam foto';
const description = 'Lindungi identitas Anda dengan menyensor area sensitif pada foto Anda. Pikselkan wajah, kaburkan dokumen, atau tutup informasi pribadi 100% secara lokal.';

const ui: PrivacyBlurUI = {
    toolPixel: "Pikselkan",
    toolBlur: "Kaburkan",
    toolSolid: "Solid",
    intensityLabel: "Intensitas",
    undoButton: "Urungkan",
    downloadButton: "Simpan",
    dropTitle: "Editor Privasi",
    dropSubtitle: "Seret gambar Anda ke sini atau klik untuk memulai",
    privacySecureLabel: "100% Lokal",
    offlineLabel: "Offline",
    autoDetectFaces: "Deteksi Otomatis",
    loadingModels: "Memuat model...",
    noFacesDetected: "Tidak ada wajah yang terdeteksi otomatis.",
};

const faq: PrivacyBlurLocaleContent['faq'] = [
    {
        question: "Apakah foto saya diunggah ke server mana pun?",
        answer: "Tidak. Editor privasi bekerja sepenuhnya di browser Anda. Piksel dimodifikasi secara lokal dan tidak ada yang dikirim ke luar perangkat Anda.",
    },
    {
        question: "Bagaimana cara kerja deteksi wajah otomatis?",
        answer: "Kami menggunakan jaringan saraf ringan (TinyFaceDetector) yang berjalan di browser Anda untuk mengidentifikasi fitur wajah tanpa memerlukan koneksi eksternal.",
    },
];

const howTo: PrivacyBlurLocaleContent['howTo'] = [
    {
        name: "Unggah foto Anda",
        text: "Seret atau pilih gambar yang berisi informasi sensitif yang ingin Anda sembunyikan.",
    },
    {
        name: "Pilih alat",
        text: "Pilih antara pikselkan, kaburkan, atau penutup solid tergantung pada tingkat privasi yang Anda butuhkan.",
    },
    {
        name: "Tandai area",
        text: "Klik dan seret di atas zona yang ingin Anda lindungi (wajah, plat nomor, nama, dll.).",
    },
    {
        name: "Simpan hasilnya",
        text: "Unduh gambar yang diproses dengan jaminan bahwa data asli tidak dapat diakses.",
    },
];

const seo: PrivacyBlurLocaleContent['seo'] = [
    {
        type: 'summary',
        title: 'Editor Privasi: Pikselkan, Kaburkan, dan Sembunyikan',
        items: [
            'Tiga alat pengeditan: Pikselkan, Kaburkan, Penutup Solid',
            'Deteksi wajah otomatis dengan AI (TinyFaceDetector)',
            'Pemrosesan lokal 100% - foto Anda tidak pernah meninggalkan browser',
            'Tanpa tanda air, tanpa batas, sepenuhnya gratis'
        ]
    },
    { type: 'title', text: 'Privasi Digital: Cara Melindungi Data Visual Anda', level: 2 },
    { type: 'paragraph', html: 'Di era media sosial, berbagi foto tanpa kontrol dapat mengungkap data pribadi yang sensitif. Alat kami memungkinkan Anda menyembunyikan informasi penting (wajah, plat nomor, nama, alamat) sebelum mengunggahnya ke Internet, memastikan privasi Anda tetap di bawah kendali penuh Anda.' },

    { type: 'stats', items: [
        { value: '3', label: 'Metode Penyembunyian', icon: 'mdi:tools' },
        { value: '100%', label: 'Privasi Lokal', icon: 'mdi:shield-check' },
        { value: 'AI', label: 'Deteksi Wajah', icon: 'mdi:brain' }
    ], columns: 3 },

    { type: 'title', text: 'Penjelasan Tiga Metode Penyembunyian', level: 3 },
    { type: 'comparative', items: [
        {
            title: 'Pikselkan',
            description: 'Membagi area menjadi kotak-kotak, mustahil untuk dikenali',
            icon: 'mdi:blur',
            points: [
                'Obfuskasi ireversibel maksimum',
                'Lebih aman terhadap pengenalan wajah',
                'Terlihat, jelas bahwa sesuatu disembunyikan',
                'Ideal: wajah dalam foto publik'
            ]
        },
        {
            title: 'Kaburkan (Blur)',
            description: 'Penghalusan Gaussian - tampilan lebih alami',
            icon: 'mdi:blur-off',
            points: [
                'Tampilan visual lebih elegan',
                'Mempertahankan beberapa koherensi nada',
                'Secara matematis dapat dibalik (secara teoritis)',
                'Ideal: informasi yang kurang sensitif'
            ],
            highlight: true
        },
        {
            title: 'Penutup Solid',
            description: 'Blok warna buram - privasi maksimum',
            icon: 'mdi:rectangle',
            points: [
                'Penyembunyian yang terlihat dan jelas',
                'Keamanan/privasi hukum maksimum',
                'Mengubah komposisi visual',
                'Ideal: dokumen, data sensitif'
            ]
        }
    ], columns: 3 },

    { type: 'title', text: 'Deteksi Wajah Otomatis dengan AI', level: 3 },
    { type: 'paragraph', html: 'Alat kami menggunakan TinyFaceDetector, jaringan saraf kompak yang berjalan langsung di browser Anda untuk mengidentifikasi wajah secara otomatis:' },
    { type: 'list', items: [
        '<strong>100% Lokal:</strong> Model AI berjalan di GPU/CPU Anda, bukan di server jarak jauh.',
        '<strong>Tanpa Internet:</strong> Setelah unduhan awal, alat ini bekerja sepenuhnya offline.',
        '<strong>Privasi Terjamin:</strong> Tidak ada yang melihat wajah: baik Google, OpenAI, maupun kami.',
        '<strong>Satu-Klik Otomatis:</strong> Mendeteksi wajah dan memungkinkan Anda memilih untuk menyembunyikannya dengan satu klik.'
    ], icon: 'mdi:check' },

    { type: 'card', title: 'Privacy by Design', html: 'Dengan memproses gambar menggunakan GPU dan CPU lokal browser Anda, kami menjamin bahwa foto asli tidak pernah meninggalkan perangkat Anda. Bahkan jika Anda berubah pikiran, tidak ada yang dikirimkan. Ini adalah standar maksimum privasi digital.' },

    { type: 'title', text: 'Kasus Penggunaan Privasi', level: 3 },
    { type: 'table', headers: ['Informasi Sensitif', 'Metode yang Direkomendasikan', 'Urgensi'], rows: [
        ['Wajah orang', 'Pikselkan atau Kaburkan', 'Kritis'],
        ['Plat nomor kendaraan', 'Pikselkan (ireversibel)', 'Kritis'],
        ['Dokumen identitas', 'Penutup Solid atau Pikselkan', 'Kritis'],
        ['Nama/Alamat tertulis', 'Penutup Solid atau Pikselkan', 'Tinggi'],
        ['Nomor telepon', 'Pikselkan atau Tutup', 'Tinggi'],
        ['Informasi medis', 'Penutup Solid', 'Kritis'],
        ['Sinyal WiFi yang terlihat', 'Pikselkan', 'Menengah']
    ] },

    { type: 'proscons', items: [
        {
            pro: 'Privasi total: pemrosesan lokal 100%, tanpa server, tanpa penyimpanan',
            con: 'Memerlukan browser modern dengan dukungan Canvas dan WebGL'
        },
        {
            pro: 'Deteksi wajah otomatis menghemat waktu manual',
            con: 'AI tidak sempurna - wajah profil atau parsial mungkin tidak terdeteksi'
        },
        {
            pro: 'Tiga metode memungkinkan memilih keamanan vs estetika',
            con: 'Tidak ada opsi lanjutan (smart warp, pengisian konteks)'
        },
        {
            pro: 'Sepenuhnya gratis, tanpa iklan, tanpa batas',
            con: 'Tidak setara dengan perangkat lunak profesional seperti Photoshop'
        }
    ], proTitle: 'Keuntungan', conTitle: 'Batasan' },

    { type: 'diagnostic', variant: 'warning', title: 'Peringatan: Pengaburan TIDAK 100% Aman', icon: 'mdi:alert', badge: 'Keamanan', html: 'Gaussian blur secara matematis dapat dibalik melalui algoritma invers yang canggih. Jika informasi tersebut KRITIS (dokumen hukum, identitas), gunakan <strong>Pikselkan atau Penutup Solid</strong>. Pengaburan secara estetika lebih baik tetapi kurang aman.' },

    { type: 'glossary', items: [
        {
            term: 'Pikselasi',
            definition: 'Mengurangi resolusi dengan membagi area menjadi blok warna yang seragam. Ireversibel. Keamanan maksimum terhadap pengenalan wajah AI.'
        },
        {
            term: 'Gaussian Blur',
            definition: 'Penghalusan matematis berdasarkan distribusi normal. Secara teoritis dapat dibalik melalui dekonvolusi, tetapi secara praktis sangat sulit.'
        },
        {
            term: 'Penutup Solid',
            definition: 'Blok warna buram yang seragam. Keamanan maksimum, privasi hukum maksimum, kurang elegan secara visual.'
        },
        {
            term: 'TinyFaceDetector',
            definition: 'Jaringan saraf konvolusional ringan (CNN) untuk mendeteksi wajah. Berjalan secara lokal di browser tanpa memerlukan server eksternal.'
        },
        {
            term: 'Privacy by Design (PbD)',
            definition: 'Pendekatan di mana privasi diintegrasikan mulai dari desain sistem, bukan ditambahkan kemudian. Pendekatan lokal kami adalah Privacy by Design.'
        }
    ] },

    { type: 'message', title: 'Privasi dalam Kontrol Anda', ariaLabel: 'Informasi tentang perlindungan privasi', html: 'Kami tidak menyimpan atau memproses foto Anda di server jarak jauh. Tidak ada cookie pelacakan. Tidak ada riwayat pengeditan. Kami tidak tahu apa yang Anda sembunyikan karena kami tidak pernah melihat gambar Anda. Kontrol penuh, privasi penuh, kebebasan penuh.' },

    { type: 'title', text: 'Berbagi Secara Aman di Jejaring Sosial', level: 3 },
    { type: 'paragraph', html: 'Sebelum memposting foto apa pun di Internet, tanyalah pada diri sendiri: apakah ada informasi yang saya lebih suka tidak dipublikasikan? Wajah anak-anak, plat nomor, alamat, nomor dokumen. Sesi privasi selama 2 menit sekarang menghindari masalah selama bertahun-tahun.' }
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
