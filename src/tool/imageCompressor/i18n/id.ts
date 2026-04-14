import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ImageCompressorUI, ImageCompressorLocaleContent } from '../index';

const slug = 'kompresor-gambar-online-kurangi-ukuran-file-tanpa-kehilangan-kualitas';
const title = 'Kompresor Gambar Online: Kurangi berat tanpa kehilangan kualitas';
const description = 'Optimalkan dan kompres foto JPG, PNG, dan WebP Anda secara gratis. Kurangi ukuran file untuk meningkatkan kecepatan pemuatan web Anda secara lokal.';

const ui: ImageCompressorUI = {
    dropTitle: "Optimalkan Gambar",
    dropSubtitle: "Seret foto Anda untuk mengurangi beratnya secara instan.",
    settingsTitle: "Pengaturan Kompresi",
    qualityLabel: "Kualitas Visual",
    widthLabel: "Lebar Maksimum (Piksel)",
    convertToWebpLabel: "Konversi ke WebP",
    compressionLabel: "Kompresi",
    compressBtn: "Kompres Gambar",
    processingText: "Memproses...",
    resultsTitle: "Gambar yang Dioptimalkan",
    originalSizeLabel: "Ukuran Asli",
    newSizeLabel: "Ukuran Baru",
    reductionLabel: "Penghematan",
    downloadBtn: "Unduh",
    addMoreBtn: "Tambah lagi",
    browseFilesBtn: "Telusuri file",
    processedFilesTitle: "File yang Diperoses",
    downloadAllBtn: "Unduh Semua",
    adjustThisImage: "Sesuaikan gambar ini",
    downloadTitle: "Unduh",
    maxWidthLabel: "Lebar maks (px)",
    closeBtn: "Tutup",
    totalSavingsLabel: "Total penghematan",
    noSavings: "Tidak ada penghematan bersih",
    faqTitle: "Pertanyaan yang Sering Diajukan",
    bibliographyTitle: "Referensi"
};

const faq: ImageCompressorLocaleContent['faq'] = [
    {
        question: "Bagaimana cara kerja kompresi lossless?",
        answer: "Kami menggunakan algoritma yang menghapus metadata yang tidak perlu dan mengoptimalkan pengkodean piksel. Saat memilih WebP, teknologi kompresi yang lebih canggih daripada format tradisional digunakan.",
    },
    {
        question: "Apakah gambar saya diunggah ke server mana pun?",
        answer: "Tidak. Semua pemrosesan terjadi 100% di browser Anda (Client-Side). Foto Anda tidak pernah meninggalkan komputer Anda, menjamin privasi absolut.",
    },
    {
        question: "Mengapa saya harus mengonversi ke WebP?",
        answer: "WebP adalah format standar modern untuk web. Ini menawarkan kualitas yang lebih unggul daripada JPG dan PNG dengan berat hingga 30% lebih sedikit, yang mempercepat waktu pemuatan halaman.",
    },
];

const howTo: ImageCompressorLocaleContent['howTo'] = [
    {
        name: "Unggah gambar",
        text: "Unggah file yang ingin Anda kompres (JPG, PNG, atau WebP).",
    },
    {
        name: "Sesuaikan kualitas",
        text: "Gunakan penggeser untuk menemukan keseimbangan sempurna antara ukuran file dan kualitas visual (disarankan: 75 85%).",
    },
    {
        name: "Ubah ukuran (opsional)",
        text: "Jika gambar sangat besar, Anda dapat menentukan lebar maksimum untuk mengurangi resolusinya.",
    },
    {
        name: "Unduh hasilnya",
        text: "Tekan tombol unduh untuk mendapatkan gambar yang dioptimalkan yang siap digunakan.",
    },
];

const bibliography: ImageCompressorLocaleContent['bibliography'] = [
    {
        name: "WebP: Format Gambar untuk Web",
        url: "https://developers.google.com/speed/webp",
    },
    {
        name: "Pentingnya optimalisasi gambar untuk SEO",
        url: "https://developers.google.com/search/docs/appearance/google-images",
    },
];

const seo: ImageCompressorLocaleContent['seo'] = [
    {
        type: 'summary',
        title: 'Optimalisasi Gambar Web Profesional',
        items: [
            'Kompresi JPG, PNG, dan WebP yang cerdas',
            'Kurangi berat 50-80% dengan menjaga kualitas visual',
            'Pemrosesan lokal 100% - privasi terjamin',
            'Tingkatkan Core Web Vitals dan posisi SEO'
        ]
    },
    { type: 'title', text: 'Optimalisasi Gambar: Kecepatan Web dan Core Web Vitals', level: 2 },
    { type: 'paragraph', html: 'Di era kesegeraan digital, web yang lambat akan kehilangan pengguna. Gambar yang tidak dioptimalkan mewakili 60-70% dari total berat halaman web. Mengoptimalkannya adalah langkah pertama untuk meningkatkan metrik Google Anda (LCP, CLS) dan posisi Anda dalam hasil pencarian.' },

    { type: 'stats', items: [
        { value: '50-80%', label: 'Pengurangan Berat Tipikal', icon: 'mdi:trending-down' },
        { value: '100%', label: 'Privasi Lokal', icon: 'mdi:lock' },
        { value: '+30%', label: 'Lebih Cepat dari JPG', icon: 'mdi:speedometer' }
    ], columns: 3 },

    { type: 'title', text: 'Format Kompresi Dijelaskan', level: 3 },
    { type: 'table', headers: ['Format', 'Kompresi', 'Kasus Penggunaan', 'Kompatibilitas'], rows: [
        ['JPEG', 'Lossy 50-90%', 'Foto kamera, konten editorial', 'Universal (100%)'],
        ['PNG', 'Lossless 30-50%', 'Grafis, logo, transparansi', 'Universal (100%)'],
        ['WebP', 'Lossy/Lossless 25-35% lebih banyak', 'Web modern, jejaring sosial', '95% browser modern'],
        ['AVIF', 'Lossy/Lossless peningkatan 20%', 'Web generasi berikutnya', 'Hanya browser baru']
    ] },

    { type: 'card', title: 'Mengapa WebP adalah Masa Depan', html: 'Google mengembangkan WebP khusus untuk web. Format ini menawarkan kompresi yang lebih baik daripada JPEG dan PNG, dengan menjaga atau meningkatkan kualitas visual. Ukurannya 25-35% lebih kecil daripada JPEG yang setara. Browser modern mendukungnya hingga 95%.' },

    { type: 'title', text: 'Kompresi Lossy vs Lossless', level: 3 },
    { type: 'comparative', items: [
        {
            title: 'Kompresi Lossy',
            description: 'JPG, WebP - Menghapus informasi visual yang tidak terlihat',
            icon: 'mdi:compress',
            points: [
                'Mengurangi 70-90% dari berat asli',
                'Tidak terlihat oleh mata manusia jika kualitas dijaga >75%',
                'Ideal untuk fotografi realistis',
                'Tidak disarankan untuk logo atau teks yang tajam'
            ],
            highlight: true
        },
        {
            title: 'Kompresi Lossless',
            description: 'PNG, WebP lossless - Menjaga 100% data visual',
            icon: 'mdi:shield',
            points: [
                'Mengurangi 20-50% berat',
                'Kualitas sempurna, tidak ada degradasi',
                'Ideal untuk grafis, logo, transparansi',
                'File lebih berat daripada Lossy'
            ]
        }
    ], columns: 2 },

    { type: 'title', text: 'Dampak pada SEO dan Konversi', level: 3 },
    { type: 'list', items: [
        '<strong>Core Web Vitals:</strong> Google menghukum situs yang lambat. Gambar yang dioptimalkan meningkatkan LCP (Largest Contentful Paint) secara langsung.',
        '<strong>Rasio Pentalan:</strong> Setiap detik penundaan = 7% lebih banyak pentalan. Gambar yang lebih cepat = lebih sedikit pengguna yang pergi.',
        '<strong>Peringkat Pencarian:</strong> Kecepatan adalah faktor peringkat. Mengoptimalkan gambar meningkatkan posisi.',
        '<strong>Konversi:</strong> Waktu pemuatan yang lebih cepat = lebih banyak konversi. Studi menunjukkan peningkatan konversi +10% dengan optimalisasi.'
    ], icon: 'mdi:check' },

    { type: 'proscons', items: [
        {
            pro: 'Privasi total: pemrosesan lokal 100%, tidak ada server cloud',
            con: 'Memerlukan browser dengan dukungan Canvas API (ini universal)'
        },
        {
            pro: 'WebP 25-35% lebih kecil daripada JPEG dengan kualitas yang sama',
            con: 'Safari versi lama dan IE tidak mendukung WebP (fallback tersedia)'
        },
        {
            pro: 'Pemrosesan instan beberapa gambar',
            con: 'Gambar yang sangat besar (>50MB) mungkin memerlukan waktu tunggu'
        },
        {
            pro: 'Ubah ukuran opsional: mengurangi resolusi serta kompresi',
            con: 'Mengubah ukuran menghilangkan informasi - lebih baik mengoptimalkan resolusi di sumbernya'
        }
    ], proTitle: 'Keuntungan', conTitle: 'Batasan' },

    { type: 'diagnostic', variant: 'warning', title: 'Perhatian: Kompresi Berlebih Menurunkan Kualitas', icon: 'mdi:alert', badge: 'Kualitas', html: 'Jaga kualitas >75% untuk fotografi dan >85% untuk konten editorial. Di bawah itu, artefak kompresi (noda, pita warna) menjadi terlihat. Gambar yang terlihat bagus di thumbnail mungkin terlihat buruk saat besar.' },

    { type: 'glossary', items: [
        {
            term: 'Kompresi Lossy',
            definition: 'Menghapus data visual yang oleh mata manusia dianggap sebagai \"noise\". Ideal untuk fotografi. JPEG, WebP lossy, HEIC bersifat lossy.'
        },
        {
            term: 'Kompresi Lossless',
            definition: 'Mengurangi ukuran tanpa kehilangan informasi visual. PNG dan WebP lossless. Ideal untuk grafis, logo, transparansi.'
        },
        {
            term: 'Core Web Vitals (Google)',
            definition: 'Metrik pengalaman pengguna: LCP (kecepatan pemuatan), FID (latensi interaksi), CLS (stabilitas visual). Mempengaruhi peringkat SEO.'
        },
        {
            term: 'WebP',
            definition: 'Format yang dikembangkan oleh Google. 25-35% lebih kecil dari JPEG. Didukung oleh 95% browser modern (semua kecuali IE).'
        },
        {
            term: 'Artefak Kompresi',
            definition: 'Cacat visual yang disebabkan oleh kompresi berlebih: noda, pita warna, tepian kabur. Tidak terlihat jika kualitas >75%.'
        }
    ] },

    { type: 'message', title: 'Optimalisasi Web Profesional', ariaLabel: 'Informasi tentang optimalisasi gambar untuk SEO', html: 'Ini bukan sekadar kesombongan teknis: mengompres gambar adalah investasi langsung dalam pengalaman pengguna dan peringkat di Google. Setiap kilobyte sangat berarti di perangkat seluler. Alat kami mengubah apa yang dulu memerlukan perangkat lunak profesional ($$$) menjadi proses gratis dengan 3 klik.' },

    { type: 'title', text: 'Bersiaplah untuk Web Modern', level: 3 },
    { type: 'paragraph', html: 'Gunakan kompresi cerdas dan format WebP agar kehadiran online Anda cepat, responsif, dan kompetitif dalam pencarian. Kualitas profesional, berat minimum, pemuatan instan.' }
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

export const content: ImageCompressorLocaleContent = {
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
