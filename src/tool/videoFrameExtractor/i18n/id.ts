import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { VideoFrameExtractorUI, VideoFrameExtractorLocaleContent } from '../index';

const slug = 'ekstrak-frame-video-online-tangkap-gambar-hd';
const title = 'Ekstrak Frame Video: Ambil cuplikan HD';
const description = 'Ekstrak gambar individual dari video Anda dengan presisi frame yang sempurna. Tangkap momen sempurna dalam format HD secara lokal dan gratis.';

const ui: VideoFrameExtractorUI = {
    uploadTitle: "Unggah file video",
    uploadFormats: "MP4, WebM, MOV, atau MKV (Maks. 500MB)",
    privacyNote: "Video tidak diunggah ke Internet, proses dilakukan di browser Anda.",
    playLabel: "Putar",
    pauseLabel: "Jeda",
    captureBtn: "Tangkap Frame",
    prevFrame: "-1F",
    nextFrame: "+1F",
    batchTitle: "Ekstraksi Otomatis",
    batchEvery: "Setiap",
    batchStart: "Mulai Urutan",
    batchProcessing: "Mengekstrak...",
    galleryTitle: "Frame yang Ditangkap",
    galleryEmpty: "Hasil tangkapan akan muncul di sini.",
    downloadAll: "Unduh Semua",
    downloadHD: "Unduh Gambar HD",
    resetBtn: "Unggah video lain"
};

const faq: VideoFrameExtractorLocaleContent['faq'] = [
    {
        question: "Bisakah saya mengekstrak frame dari video berdurasi panjang?",
        answer: "Ya, selama browser Anda memiliki cukup RAM untuk memuat video tersebut. Kami merekomendasikan file hingga 500MB untuk performa optimal.",
    },
    {
        question: "Berapa resolusi gambar yang disimpan?",
        answer: "Tangkapan layar dibuat sesuai resolusi asli video. Jika video Anda 4K, Anda akan mendapatkan gambar 4K berkualitas tinggi.",
    },
];

const howTo: VideoFrameExtractorLocaleContent['howTo'] = [
    {
        name: "Unggah video Anda",
        text: "Pilih file video dari perangkat Anda. Kami tidak akan mengunggahnya ke server mana pun.",
    },
    {
        name: "Navigasikan ke momen yang tepat",
        text: "Gunakan bila garis waktu atau tombol ±1 frame untuk presisi yang sangat akurat.",
    },
    {
        name: "Tangkap frame",
        text: "Tekan tombol tangkap untuk menyimpan momen tersebut ke galeri di bawah.",
    },
    {
        name: "Unduh dalam kualitas tinggi",
        text: "Unduh hasil tangkapan secara individual atau seluruh sesi dalam format WebP yang dioptimalkan.",
    },
];

const seo: VideoFrameExtractorLocaleContent['seo'] = [
    {
        type: 'summary',
        title: 'Ekstraksi Frame Video Profesional',
        items: [
            'Presisi satu frame (±1 frame) untuk tangkapan sempurna',
            'Mendukung MP4, WebM, MOV, MKV hingga 500MB',
            'Resolusi asli video dipertahankan (SD, HD, 4K)',
            'Ekstraksi batch otomatis pada interval khusus'
        ]
    },
    { type: 'title', text: 'Ekstraksi Frame: Menghentikan Waktu dalam Video', level: 2 },
    { type: 'paragraph', html: 'Kadang-kadang sebuah gambar bermakna seribu kata. Alat kami menggunakan kekuatan lokal browser Anda untuk mengekstrak frame presisi tanpa perlu perangkat lunak profesional.' },

    { type: 'stats', items: [
        { value: '±1', label: 'Presisi Satu Frame', icon: 'mdi:target' },
        { value: '100%', label: 'Resolusi Asli', icon: 'mdi:video-high-definition' },
        { value: '500MB', label: 'File Didukung', icon: 'mdi:file-video' }
    ], columns: 3 },

    { type: 'title', text: 'Kasus Penggunaan Profesional', level: 3 },
    { type: 'comparative', items: [
        {
            title: 'Sinema dan Fotografi',
            description: 'Tangkap frame sebagai referensi visual atau komposisi',
            icon: 'mdi:film',
            points: [
                'Ekstrak still image untuk pemasaran film',
                'Referensi komposisi adegan',
                'Analisis frame demi frame'
            ]
        },
        {
            title: 'Konten Digital',
            description: 'Buat thumbnail dan sampul untuk media sosial',
            icon: 'mdi:youtube',
            points: [
                'Thumbnail YouTube resolusi tinggi',
                'Sampul media sosial',
                'Gambar untuk presentasi'
            ],
            highlight: true
        },
        {
            title: 'Dokumentasi Teknis',
            description: 'Ekstrak frame dari tutorial dan demonstrasi',
            icon: 'mdi:book-open',
            points: [
                'Tangkapan layar dari video tutorial',
                'Dokumentasi visual langkah demi langkah',
                'Analisis gerakan real-time'
            ]
        },
        {
            title: 'Olahraga dan Aksi',
            description: 'Tangkap momen tepat dari aksi maksimal',
            icon: 'mdi:dumbbell',
            points: [
                'Analisis teknik olahraga frame demi frame',
                'Penangkapan momen heroik',
                'Studi gerakan'
            ]
        }
    ], columns: 2 },

    { type: 'title', text: 'Format Video yang Didukung', level: 3 },
    { type: 'table', headers: ['Format', 'Ekstensi', 'Kompatibilitas', 'Catatan'], rows: [
        ['MPEG-4', 'MP4', 'Universal (100%)', 'Kompresi terbaik, banyak digunakan'],
        ['WebM', 'WebM', 'Browser modern', 'Kompresi unggul, ukuran kecil'],
        ['QuickTime', 'MOV', 'Safari, beberapa aplikasi', 'Standar Apple'],
        ['Matroska', 'MKV', 'Browser modern', 'Kontainer fleksibel']
    ] },

    { type: 'card', title: 'Presisi Satu Frame', html: 'Bergerak satu frame maju atau mundur (±1 frame) sangat penting untuk menangkap momen sempurna: lompatan, senyuman, atau gerakan tertentu. Alat kami memberi Anda kontrol milimeter.' },

    { type: 'proscons', items: [
        {
            pro: 'Privasi total: video diproses 100% secara lokal di browser Anda',
            con: 'Terbatas pada ukuran memori RAM yang tersedia (disarankan ~500MB)'
        },
        {
            pro: 'Resolusi asli dipertahankan: SD, HD, 4K tanpa kompresi ulang',
            con: 'Memerlukan browser modern dengan dukungan Video HTML5'
        },
        {
            pro: 'Ekstraksi batch otomatis pada interval khusus',
            con: 'Untuk pengeditan tingkat lanjut (potong), Anda perlu editor video'
        },
        {
            pro: 'Ekspor frame dalam format WebP yang dioptimalkan atau PNG',
            con: 'Satu frame setiap kali (tidak mengekspor sekuens GIF otomatis)'
        }
    ], proTitle: 'Keuntungan', conTitle: 'Keterbatasan' },

    { type: 'diagnostic', variant: 'info', title: 'Resolusi dan Frame Rate', icon: 'mdi:information', badge: 'Teknis', html: 'Resolusi frame akhir tergantung pada video aslinya. Kami mempertahankan informasi asli video tanpa upscaling.' },

    { type: 'glossary', items: [
        {
            term: 'Frame',
            definition: 'Gambar individual dalam urutan video. Video 24 fps berisi 24 frame per detik.'
        },
        {
            term: 'FPS (Frames Per Second)',
            definition: 'Frame per detik. Menentukan kelancaran gerakan.'
        },
        {
            term: 'Video Codec',
            definition: 'Algoritma kompresi: H.264, VP9, HEVC. Menentukan ukuran dan kualitas file.'
        },
        {
            term: 'Bitrate',
            definition: 'Jumlah data yang diproses per detik. Bitrate lebih tinggi = kualitas lebih tinggi.'
        },
        {
            term: 'Resolusi Video',
            definition: 'Dimensi piksel: 720p, 1080p, 4K, 8K.'
        }
    ] },

    { type: 'message', title: 'Ekstraksi Frame Profesional', ariaLabel: 'Informasi teknis tentang ekstraksi video', html: 'Anda tidak butuh konverter online yang rumit. Frame sempurna hanya berjarak 3 klik: unggah video, navigasi, tangkap.' },

    { type: 'title', text: 'Membekukan Momen Video', level: 3 },
    { type: 'paragraph', html: 'Setiap video berisi ratusan frame. Gunakan alat ini untuk mengekstrak momen-momen sempurna tersebut tanpa mengurangi kualitas atau privasi.' }
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

export const content: VideoFrameExtractorLocaleContent = {
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
