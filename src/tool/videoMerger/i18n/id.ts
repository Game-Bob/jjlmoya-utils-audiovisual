import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { VideoMergerUI, VideoMergerLocaleContent } from '../index';

const slug = 'gabung-video-online';
const title = 'Gabung Video Online: Satukan banyak video dengan cepat dan gratis';
const description = 'Gabungkan dan satukan banyak video menjadi satu secara gratis, online, dan lokal. Tanpa watermark, tanpa unggah, 100% pribadi di browser Anda.';

const ui: VideoMergerUI = {
    uploadTitle: "Unggah file video Anda",
    uploadFormats: "Seret dan lepas beberapa video atau klik untuk memilihnya",
    privacyNote: "Video Anda diproses 100% secara lokal. Tidak ada yang diunggah ke internet.",
    addMoreBtn: "Tambah video lagi",
    mergeBtn: "Gabungkan video sekarang",
    mergingStatus: "Menggabungkan video...",
    downloadBtn: "Unduh video gabungan",
    resetBtn: "Mulai dari awal",
    emptyList: "Seret atau pilih video untuk mulai menggabungkannya.",
    listTitle: "Urutan video untuk digabungkan",
    optionsTitle: "Pengaturan keluaran",
    optionResolution: "Resolusi",
    optionFps: "Bingkai per detik (FPS)",
    optionsQualityNote: "Resolusi akhir akan disesuaikan dengan tetap menjaga rasio aspek asli menggunakan format letterbox jika video memiliki dimensi yang berbeda.",
    faqTitle: "Pertanyaan yang Sering Diajukan tentang Penggabungan Video",
    bibliographyTitle: "Bibliografi & Referensi",
    resolutionWarning: "Peringatan: Beberapa video memiliki resolusi berbeda dan akan disesuaikan secara otomatis."
};

const faq: VideoMergerLocaleContent['faq'] = [
    {
        question: "Apakah aman mengunggah video saya ke alat ini?",
        answer: "Ya, ini sepenuhnya aman. Alat ini bekerja 100% secara lokal di browser Anda. Video Anda tidak pernah dikirimkan melalui internet atau disimpan di server mana pun.",
    },
    {
        question: "Apa yang terjadi jika video saya memiliki dimensi yang berbeda?",
        answer: "Alat kami secara otomatis mengubah ukuran video agar sesuai dengan resolusi keluaran yang Anda pilih. Untuk proporsi yang tidak sama persis, margin hitam (letterboxing) akan ditambahkan untuk mempertahankan rasio aspek asli.",
    },
    {
        question: "Apakah audio dari video dipertahankan saat digabungkan?",
        answer: "Ya. Trek audio dari setiap video ditangkap dan digabungkan secara berurutan dalam sinkronisasi sempurna dengan setiap segmen gambar.",
    },
];

const howTo: VideoMergerLocaleContent['howTo'] = [
    {
        name: "Pilih atau seret video Anda",
        text: "Muat semua file video yang ingin Anda gabungkan langsung dari komputer atau ponsel Anda.",
    },
    {
        name: "Atur urutan",
        text: "Urutkan video yang diunggah menggunakan tombol atas atau bawah dalam daftar untuk menentukan urutan pemutaran.",
    },
    {
        name: "Sesuaikan opsi",
        text: "Pilih resolusi keluaran dan bingkai per detik (FPS) dari video yang digabungkan.",
    },
    {
        name: "Gabung dan ekspor",
        text: "Tekan tombol gabung. Tunggu hingga pemrosesan waktu nyata selesai dan unduh file yang dihasilkan.",
    },
];

const seo: VideoMergerLocaleContent['seo'] = [
    {
        type: 'summary',
        title: 'Penggabungan Video Profesional 100% Lokal',
        items: [
            'Pemrosesan waktu nyata langsung di browser Anda',
            'Mendukung beberapa video dengan berbagai ukuran dan format (MP4, WEBM, MOV)',
            'Resolusi keluaran yang dapat dipilih (720p, 1080p, 2K, 4K)',
            'Trek audio digabungkan secara berurutan dengan sempurna'
        ]
    },
    { type: 'title', text: 'Gabungkan Video Online Gratis: Kesederhanaan dan Privasi Tanpa Batas', level: 2 },
    { type: 'paragraph', html: 'Bertanya-tanya <strong>bagaimana cara menggabungkan dua video menjadi satu</strong> tanpa kerumitan? Anda tidak perlu lagi mengunduh perangkat lunak berat atau aplikasi berbayar. Alat kami untuk <strong>menggabungkan video online secara gratis</strong> memungkinkan Anda menyambung dan menggabungkan semua klip yang Anda perlukan dalam hitungan detik. Dengan bekerja 100% secara lokal, Anda tidak perlu mengunggah file ke server mana pun, menjamin privasi mutlak dan memungkinkan Anda <strong>menggabungkan video berukuran besar</strong> tanpa waktu tunggu untuk mengunggah.' },
    
    { type: 'title', text: 'Gabung Video Tanpa Watermark', level: 3 },
    { type: 'paragraph', html: 'Salah satu kelemahan terbesar dari aplikasi lain adalah mereka mengacaukan konten Anda. Bersama kami, Anda dapat <strong>menggabungkan video online tanpa watermark</strong>. File yang Anda unduh akan menjadi kreasi Anda sepenuhnya, bersih, profesional, dan siap dibagikan di YouTube, Instagram, TikTok, atau untuk penggunaan pribadi.' },

    { type: 'stats', items: [
        { value: '100%', label: 'Pribadi dan Lokal', icon: 'mdi:shield-check' },
        { value: '0MB', label: 'Tanpa Data Unggahan', icon: 'mdi:upload-off' },
        { value: '4K', label: 'Resolusi Maksimal', icon: 'mdi:video-high-definition' }
    ], columns: 3 },

    { type: 'title', text: 'Kasus Penggunaan Umum untuk Menggabungkan Video', level: 3 },
    { type: 'comparative', items: [
        {
            title: 'Media Sosial',
            description: 'Penggabungan cepat stories, TikTok, atau reel menjadi satu video',
            icon: 'mdi:instagram',
            points: [
                'Gabungkan klip kecil yang direkam dengan ponsel Anda',
                'Siapkan konten berurutan untuk Instagram atau YouTube',
                'Penggabungan tanpa watermark yang mengganggu'
            ]
        },
        {
            title: 'Presentasi',
            description: 'Gabungkan perkenalan dan rekaman demo menjadi satu file',
            icon: 'mdi:presentation',
            points: [
                'Gabungkan intro animasi dengan badan presentasi',
                'Gabungkan demo perangkat lunak pendek',
                'Ekspor bersih dalam format standar MP4/WEBM'
            ],
            highlight: true
        },
        {
            title: 'Kompilasi Keluarga',
            description: 'Gabungkan beberapa video dari liburan atau perayaan Anda',
            icon: 'mdi:home-heart',
            points: [
                'Buat satu video dengan semua momen pesta',
                'Kelompokkan kenangan perjalanan secara kronologis',
                'Mudah dibagikan karena berada dalam satu file'
            ]
        },
        {
            title: 'Video Edukasi',
            description: 'Sambung bab pelatihan atau pelajaran singkat',
            icon: 'mdi:school',
            points: [
                'Kelompokkan tutorial kecil yang independen',
                'Tambahkan klip penutup ke pelajaran Anda',
                'Susun kursus Anda secara profesional'
            ]
        }
    ], columns: 2 },

    { type: 'title', text: 'Aplikasi Terbaik untuk Menggabungkan Video dari Browser', level: 2 },
    { type: 'paragraph', html: 'Ini bukan sekadar halaman web biasa; ini adalah <strong>aplikasi sejati untuk menggabungkan video</strong> yang beroperasi langsung dari browser Anda berkat API video HTML5 modern. Anda dapat <strong>menggabungkan video MP4</strong>, WEBM, dan lainnya, mencampur resolusi (sistem kami menerapkan letterboxing secara otomatis jika dimensi bervariasi) dan memilih bingkai per detik (FPS) dari ekspor akhir Anda.' },

    { type: 'title', text: 'Perbandingan Pendekatan Penggabungan', level: 3 },
    { type: 'table', headers: ['Fitur', 'Alat Lokal Kami', 'Konverter Online Klasik', 'Editor Profesional'], rows: [
        ['Privasi', 'Total (Diproses di perangkat Anda)', 'Rendah (Harus mengunggah file ke server)', 'Total (Diinstal di perangkat Anda)'],
        ['Konsumsi Jaringan', 'Nol (Tidak ada unggahan gigabyte)', 'Sangat tinggi (Unggah dan unduh)', 'Nol'],
        ['Watermark', 'TIDAK (100% bersih)', 'Ya (Dalam versi gratis)', 'TIDAK (Jika Anda membeli lisensi)'],
        ['Harga', '100% Gratis', 'Gratis dengan batasan atau langganan', 'Biasanya mahal'],
        ['Kurva Pembelajaran', 'Sangat rendah (Seret, urutkan, dan gabung)', 'Rendah', 'Sangat tinggi (Membutuhkan pelatihan teknis)']
    ] },

    { type: 'proscons', items: [
        {
            pro: 'Privasi terjamin: Keamanan maksimum karena tidak ada file yang keluar dari perangkat Anda',
            con: 'Kecepatan penggabungan video berukuran besar bergantung pada RAM dan prosesor komputer lokal Anda'
        },
        {
            pro: 'Hasil profesional: 100% gratis, tanpa registrasi, dan tanpa watermark',
            con: 'Saat menggabungkan video dengan dimensi berbeda (vertikal vs horizontal), margin hitam (letterboxing) akan diterapkan'
        },
        {
            pro: 'Keserbagunaan: Ekspor cepat dengan pengkodean efisien yang dioptimalkan untuk penggunaan web dan media sosial',
            con: 'Tidak memungkinkan penambahan transisi yang kompleks (fade 3D) atau efek visual sinematik di antara klip'
        }
    ], title: 'Keuntungan dan Pertimbangan' },

    { type: 'title', text: 'Mulai Menggabungkan Video Anda Hari Ini', level: 2 },
    { type: 'paragraph', html: 'Tidak ada lagi alasan untuk memiliki ratusan fragmen video yang tidak terorganisir. Unggah file Anda, letakkan dalam urutan yang diinginkan, dan tekan tombol. Temukan cara tercepat, teraman, dan paling pribadi untuk <strong>menggabungkan video secara online</strong>.' }
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
