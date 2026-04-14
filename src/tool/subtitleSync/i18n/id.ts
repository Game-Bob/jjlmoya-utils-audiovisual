import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { SubtitleSyncUI, SubtitleSyncLocaleContent } from '../index';

const slug = 'sinkronisasi-subtitle-srt-online-atur-timing-gratis';
const title = 'Sinkronisasi Subtitle SRT Online: Atur Timing Gratis';
const description = 'Alat online untuk memajukan atau menunda subtitle SRT. Perbaiki offset waktu dengan mudah dan unduh file yang disinkronkan secara instan.';

const ui: SubtitleSyncUI = {
    dropTitle: "Seret file .SRT Anda ke sini",
    dropSubtitle: "atau klik untuk mencari",
    adjustTitle: "Atur Waktu",
    offsetLabel: "Offset (detik)",
    offsetHelp: "Gunakan nilai negatif untuk memajukan (misal: -1.5) dan nilai positif untuk menunda.",
    linesStat: "Baris",
    firstStat: "Subtitle Pertama",
    lastStat: "Subtitle Terakhir",
    originalLabel: "ASLI",
    resultLabel: "HASIL",
    downloadButton: "Unduh yang Diperbaiki",
    previewBadge: "PRATINJAU",
    unitSeconds: "det"
};

const faq: SubtitleSyncLocaleContent['faq'] = [
    {
        question: "Bagaimana cara menyinkronkan subtitle saya jika audionya lebih cepat?",
        answer: "Jika audio muncul sebelum teks, Anda harus menunda subtitle. Masukkan nilai positif di kalkulator (misal: 2.0 untuk menundanya selama 2 detik).",
    },
    {
        question: "Format file apa yang didukung alat ini?",
        answer: "Saat ini, alat ini dioptimalkan untuk file .SRT (SubRip), yang merupakan standar paling umum di pemutar video dan platform streaming.",
    },
    {
        question: "Apakah aman untuk mengunggah file subtitle saya?",
        answer: "Ya, karena pemrosesan dilakukan 100% secara lokal di perangkat Anda. File Anda tidak dikirim ke server mana pun; sinkronisasi terjadi langsung di browser Anda.",
    },
    {
        question: "Bisakah saya menyinkronkan hanya sebagian file?",
        answer: "Tidak, alat ini menerapkan offset konstan ke seluruh file. Jika offset bersifat progresif, Anda mungkin memerlukan pengeditan yang lebih canggih.",
    },
];

const howTo: SubtitleSyncLocaleContent['howTo'] = [
    {
        name: "Unggah file SRT Anda",
        text: "Seret file subtitle yang ingin Anda perbaiki ke area unggah.",
    },
    {
        name: "Identifikasi offset",
        text: "Ukur seberapa besar penundaan atau percepatan subtitle relatif terhadap audio di pemutar Anda.",
    },
    {
        name: "Atur offset",
        text: "Masukkan detik positif (tunda) atau negatif (majukan) di panel kontrol.",
    },
    {
        name: "Unduh filenya",
        text: "Verifikasi di pratinjau bahwa waktunya sudah benar dan klik unduh untuk mendapatkan SRT baru Anda.",
    },
];

const bibliography: SubtitleSyncLocaleContent['bibliography'] = [
    {
        name: "Spesifikasi format SubRip (SRT)",
        url: "https://matroska.org/technical/subtitles.html#srt-subtitles",
    },
    {
        name: "MDN Web Docs - FileReader API",
        url: "https://developer.mozilla.org/en-US/docs/Web/API/FileReader",
    },
];

const seo: SubtitleSyncLocaleContent['seo'] = [
    {
        type: 'summary',
        title: 'Sinkronisasi Subtitle Profesional',
        items: [
            'Koreksi instan offset audio-subtitle',
            'Mendukung file standar SRT (SubRip)',
            'Pemrosesan lokal 100% - privasi maksimum',
            'Tanpa instalasi, tanpa langganan, sepenuhnya gratis'
        ]
    },
    { type: 'title', text: 'Sinkronisasi Subtitle SRT yang Sempurna', level: 2 },
    { type: 'paragraph', html: 'Tidak ada yang lebih membuat frustrasi penonton daripada melihat dialog yang tidak cocok dengan suara. Offset subtitle biasanya terjadi karena perbedaan antara versi video: variasi framerate, pemotongan iklan, intro produksi, atau perubahan kompresi. Dengan alat ini, Anda memperbaiki masalah dalam hitungan detik.' },

    { type: 'stats', items: [
        { value: '100%', label: 'Pemrosesan Lokal', icon: 'mdi:shield' },
        { value: 'Milidetik', label: 'Presisi', icon: 'mdi:clock-outline' },
        { value: 'Berapa pun', label: 'TANPA Batas File', icon: 'mdi:file-document' }
    ], columns: 3 },

    { type: 'title', text: 'Majukan vs Tunda: Panduan Praktis', level: 3 },
    { type: 'paragraph', html: 'Langkah pertama adalah mengidentifikasi jenis offset dengan benar. Inilah logikanya:' },
    { type: 'list', items: [
        '<strong>Tunda (Nilai Positif):</strong> Ketika Anda melihat teks muncul SEBELUM suara. Subtitle terlalu cepat. Contoh: +2,0 detik.',
        '<strong>Majukan (Nilai Negatif):</strong> Ketika Anda melihat teks muncul SETELAH suara. Subtitle terlambat. Contoh: -2,0 detik.',
        '<strong>Uji dan Atur:</strong> Mulailah dengan peningkatan kecil (0,5 detik) dan gunakan pratinjau untuk memvalidasi.'
    ], icon: 'mdi:arrow-right' },

    { type: 'card', title: 'Privasi Tingkat Profesional', html: 'Dengan memproses file melalui JavaScript sisi klien, kami menjamin bahwa konten subtitle Anda tidak pernah meninggalkan komputer Anda. Penting bagi penerjemah dan profesional yang menangani materi rahasia atau di bawah NDA.' },

    { type: 'title', text: 'Kasus Penggunaan Umum', level: 3 },
    { type: 'comparative', items: [
        {
            title: 'Penerjemah dan Pembuat Subtitle',
            description: 'Sinkronkan terjemahan setelah bekerja dengan beberapa versi video',
            icon: 'mdi:translate',
            points: [
                'File SRT dari berbagai sumber',
                'Versioning konten (bioskop vs streaming)',
                'Pengiriman cepat tanpa mengganti alat'
            ]
        },
        {
            title: 'Pembuat Konten',
            description: 'Pulihkan subtitle ketika video diproses dengan framerate yang berbeda',
            icon: 'mdi:video',
            points: [
                'Gunakan kembali subtitle yang ada',
                'Perubahan format (720p ke 1080p)',
                'Hindari pengaturan ulang waktu manual untuk 1000+ baris'
            ],
            highlight: true
        },
        {
            title: 'Pengguna Biasa',
            description: 'Perbaiki subtitle unduhan yang tidak pas secara sempurna',
            icon: 'mdi:account',
            points: [
                'Subtitle generik yang tidak sinkron',
                'Film di wilayah berbeda (PAL vs NTSC)',
                'Streaming dengan versi yang diedit'
            ]
        }
    ], columns: 3 },

    { type: 'title', text: 'Mengapa Subtitle Tidak Sinkron', level: 3 },
    { type: 'table', headers: ['Penyebab Umum', 'Deskripsi Teknis', 'Solusi'], rows: [
        ['Perbedaan Framerate', '23,976 fps vs 25 fps - perbedaan akumulasi', 'Penyesuaian offset tunggal (alat ini)'],
        ['Editorial', 'Pemotongan iklan atau konten tambahan dihapus', 'Perhitungan manual + sinkronisasi'],
        ['Versi Regional', 'PAL (25 fps Eropa) vs NTSC (29,97 fps AS)', 'Offset matematika sederhana'],
        ['Perubahan Resolusi', 'Enkode ulang dengan kecepatan pemrosesan berbeda', 'Penghitungan ulang file asli']
    ] },

    { type: 'diagnostic', variant: 'info', title: 'Batasan Teknis yang Perlu Dipertimbangkan', icon: 'mdi:information', badge: 'Penting', html: 'Alat ini menerapkan offset <strong>konstan</strong> ke seluruh file. Jika offset bersifat <strong>progresif</strong> (awal sinkron tetapi perlahan menjadi tidak sinkron), itu menunjukkan perbedaan framerate yang persisten. Dalam hal ini, file asli perlu diproses ulang di perangkat lunak pengeditan profesional.' },

    { type: 'proscons', items: [
        {
            pro: 'Kecepatan ekstrem - memproses file besar dalam milidetik',
            con: 'Hanya mengatur offset tetap, bukan yang progresif'
        },
        {
            pro: 'Privasi total - konten tidak pernah meninggalkan browser Anda',
            con: 'Memerlukan browser modern dengan JavaScript yang diaktifkan'
        },
        {
            pro: 'Format universal - berfungsi dengan SRT standar apa pun',
            con: 'Tidak mendukung format lain (ASS, VTT, SCC, dll.)'
        },
        {
            pro: 'Sepenuhnya gratis, tanpa iklan, tanpa pelacakan',
            con: 'Tidak ada riwayat perubahan atau versioning'
        }
    ], proTitle: 'Keuntungan', conTitle: 'Batasan' },

    { type: 'glossary', items: [
        {
            term: 'SRT (SubRip)',
            definition: 'Format subtitle paling universal: file teks dengan nomor urut, waktu (jj:mm:dd,mmm), dan teks. Standar de facto di pemutar dan platform.'
        },
        {
            term: 'Offset',
            definition: 'Jumlah waktu tetap yang ditambah atau dikurangi dari semua waktu dalam file. Bisa berupa detik positif (tunda) atau negatif (majukan).'
        },
        {
            term: 'Framerate (fps)',
            definition: 'Frame per detik. 24p (bioskop), 25p (PAL/Eropa), 29,97p (NTSC/AS), 60p (video lancar). Perbedaan menyebabkan offset kumulatif.'
        },
        {
            term: 'NTSC vs PAL',
            definition: 'Standar televisi regional: PAL (25 fps) di Eropa; NTSC (29,97 fps) di AS. Perbedaan kecepatan sekitar 4%.'
        },
        {
            term: 'Offset Progresif',
            definition: 'Ketika sinkronisasi dimulai dengan benar tetapi perlahan-lahan menjadi tidak sinkron. Menunjukkan perbedaan framerate, memerlukan pemrosesan ulang.'
        }
    ] },

    { type: 'message', title: 'Pengeditan Profesional dengan Kontrol Penuh', ariaLabel: 'Informasi teknis tentang sinkronisasi', html: 'Pendekatan kami sederhana namun ampuh: satu offset, diterapkan secara instan, diproses 100% di browser Anda. Tanpa cloud, tanpa penyimpanan, tanpa pelacakan. Cukup unggah, atur, unduh. Kontrol penuh atas konten Anda.' },

    { type: 'title', text: 'Kesimpulan: Menonton Tanpa Gangguan', level: 3 },
    { type: 'paragraph', html: 'Sinkronisasi subtitle yang sempurna sangat penting untuk pengalaman audiovisual yang berkualitas. Dengan alat ini, Anda mengubah pengalaman yang menjengkelkan menjadi malam menonton film yang sempurna, tanpa memerlukan perangkat lunak yang mahal atau rumit.' }
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

export const content: SubtitleSyncLocaleContent = {
    slug,
    title,
    description,
    ui,
    seo,
    faq,
    faqTitle: 'Pertanyaan yang Sering Diajukan tentang Sinkronisasi Subtitle',
    bibliography,
    bibliographyTitle: 'Sumber Daya Teknis tentang Format Subtitle',
    howTo,
    schemas: [faqSchema as any, howToSchema as any, appSchema],
};
