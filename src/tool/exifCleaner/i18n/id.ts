import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ExifCleanerUI, ExifCleanerLocaleContent } from '../index';

const slug = 'pembersih-metadata-exif-hapus-gps-privasi-foto';
const title = 'Pembersih Metadata EXIF: Hapus GPS dan Data Tersembunyi dari Foto';
const description = 'Alat online gratis untuk menghapus metadata EXIF, koordinat GPS, dan spesifikasi kamera dari gambar Anda sebelum dibagikan. 100% pribadi: bekerja tanpa mengunggah foto ke internet.';

const ui: ExifCleanerUI = {
    dropTitle: "Seret gambar Anda ke sini",
    dropSubtitle: "Hapus metadata GPS, model kamera, dan pengaturan tersembunyi.",
    dropLocalInfo: "Pemrosesan lokal 100%. Tidak ada yang diunggah ke cloud.",
    selectButton: "Pilih Gambar",
    processingText: "Membersihkan metadata...",
    analysisCompleted: "Analisis Selesai",
    downloadButton: "Unduh Gambar Bersih",
    resetButton: "Bersihkan gambar lain",
    privacyRiskTitle: "RISIKO PRIVASI TERDETEKSI:",
    gpsLabel: "GPS:",
    gpsDetected: "TERDETEKSI",
    gpsNotFound: "TIDAK DITEMUKAN",
    cameraLabel: "KAMERA:",
    softwareLabel: "PERANGKAT LUNAK:",
    dateLabel: "TANGGAL:",
    otherTechnicalDetails: "DETAIL TEKNIS LAINNYA",
    noMetadataFound: "Tidak ditemukan metadata EXIF yang terbaca.",
    alreadyCleanInfo: "Gambar mungkin sudah bersih.",
    previewLabel: "Pratinjau",
};

const faq: ExifCleanerLocaleContent['faq'] = [
    {
        question: "Apa itu metadata EXIF?",
        answer: "EXIF (Exchangeable Image File Format) adalah informasi tersembunyi yang disimpan kamera atau ponsel Anda di dalam setiap foto. Ini mencakup tanggal yang tepat, model perangkat, pengaturan pengambilan gambar (ISO, aperture), dan yang paling kritis, koordinat GPS tempat foto diambil.",
    },
    {
        question: "Apakah aman menggunakan alat online ini?",
        answer: "Ya, karena pemrosesan dilakukan 100% secara lokal di browser Anda. Foto Anda tidak pernah diunggah ke server mana pun; pembersihan terjadi langsung di memori perangkat Anda, memastikan privasi absolut.",
    },
    {
        question: "Data spesifik apa yang dihapus oleh pembersih ini?",
        answer: "Alat ini menghapus semua tag EXIF (GPS, merek kamera, nomor seri), IPTC (hak cipta, penulis), dan XMP (riwayat pengeditan). Gambar Anda menjadi 'bersih', hanya menyisakan piksel visual.",
    },
    {
        question: "Apakah gambar kehilangan kualitas saat metadata dibersihkan?",
        answer: "Tidak. Kami hanya menghapus 'header' data teknis dari file. Data gambar (piksel) tetap identik, sehingga kualitas visual tidak terpengaruh sama sekali.",
    },
];

const howTo: ExifCleanerLocaleContent['howTo'] = [
    {
        name: "Pilih gambar",
        text: "Seret foto Anda atau pilih dari file explorer Anda. Anda dapat memproses beberapa foto sekaligus.",
    },
    {
        name: "Analisis data saat ini",
        text: "Alat ini akan menunjukkan kepada Anda informasi sensitif apa yang telah dideteksi (misalnya, 'Koordinat GPS terdeteksi').",
    },
    {
        name: "Proses dan bersihkan",
        text: "Klik tombol bersihkan untuk langsung menghapus semua tag metadata.",
    },
    {
        name: "Unduh foto yang aman",
        text: "Simpan versi baru gambar Anda, sekarang sudah dianonimkan dan siap dibagikan dengan aman di media sosial.",
    },
];

const seo: ExifCleanerLocaleContent['seo'] = [
    {
        type: 'summary',
        title: 'Pembersih Metadata EXIF: Lindungi Privasi Anda',
        items: [
            'Hapus koordinat GPS dan lokasi dari foto Anda secara instan',
            'Hapus model kamera, nomor seri, dan informasi teknis',
            'Pemrosesan berbasis browser 100% - gambar Anda tidak pernah meninggalkan perangkat Anda',
            'Mempertahankan kualitas visual - hanya data tersembunyi yang dihapus'
        ]
    },
    { type: 'title', text: 'Panduan Lengkap Privasi dan Metadata EXIF dalam Fotografi Digital', level: 2 },
    { type: 'paragraph', html: 'Pernahkah Anda bertanya-tanya seberapa banyak informasi pribadi yang Anda bagikan saat mengunggah foto ke media sosial? Metadata EXIF seperti <strong>sidik jari yang tidak terlihat</strong> yang dapat mengungkapkan segalanya mulai dari lokasi rumah Anda yang tepat hingga harga peralatan fotografi Anda. Panduan ini menjelaskan cara melindungi privasi Anda secara efektif.' },

    { type: 'stats', items: [
        { value: '100%', label: 'Privasi - Pemrosesan Lokal', icon: 'mdi:shield-check' },
        { value: '0%', label: 'Data Disimpan di Server', icon: 'mdi:database' },
        { value: 'Instan', label: 'Penghapusan Metadata', icon: 'mdi:lightning-bolt' }
    ], columns: 3 },

    { type: 'title', text: 'Informasi Apa yang Tersembunyi di Foto Anda?', level: 3 },
    { type: 'paragraph', html: 'Lebih dari 90% foto digital berisi informasi sensitif yang dapat membahayakan keamanan Anda. Berikut adalah semua data yang dapat terungkap:' },
    { type: 'list', items: [
        '<strong>Koordinat GPS:</strong> Garis lintang dan garis bujur yang tepat di mana pengambilan gambar dilakukan (alamat rumah, kantor, tempat yang sering dikunjungi).',
        '<strong>Identifikasi Peralatan:</strong> Merek, model, dan nomor seri kamera atau ponsel cerdas (informasi berharga).',
        '<strong>Pengaturan Teknis:</strong> ISO, aperture (f/), waktu pencahayaan, dan panjang fokus (memungkinkan identifikasi peralatan spesifik Anda).',
        '<strong>Tanggal dan Waktu yang Tepat:</strong> Garis waktu lengkap dari aktivitas harian Anda.',
        '<strong>Riwayat Pengeditan:</strong> Perangkat lunak yang digunakan, perangkat lunak pengeditan, dan tanggal modifikasi terakhir.',
        '<strong>Data Hak Cipta:</strong> Fotografer, hak cipta, dan catatan pribadi.'
    ] },

    { type: 'title', text: 'Risiko Keamanan Nyata: Kasus Penggunaan', level: 3 },
    { type: 'comparative', items: [
        {
            title: 'Fotografer Profesional',
            description: 'Risiko pencurian peralatan mahal yang diidentifikasi berdasarkan nomor seri',
            icon: 'mdi:camera',
            points: [
                'Pencuri mencari fotografer dengan peralatan berharga',
                'GPS mengidentifikasi alamat rumah pemilik',
                'Nomor seri memudahkan penjualan kembali di dark web'
            ]
        },
        {
            title: 'Orang Tua dan Influencer',
            description: 'Bahaya besar: lokasi real-time anak-anak',
            icon: 'mdi:alert',
            points: [
                'Predator melacak lokasi menggunakan OSINT',
                'Predator dapat mengidentifikasi rutinitas harian',
                'Risiko stalking dan pelacakan fisik'
            ],
            highlight: true
        },
        {
            title: 'Pengguna Media Sosial',
            description: 'Paparan privasi pribadi dan profesional',
            icon: 'mdi:share-variant',
            points: [
                'Posting dari kantor mengungkapkan lokasi tempat kerja',
                'Geolokasi memungkinkan menyimpulkan perkiraan gaji',
                'Data publik memungkinkan pemrofilan yang ditargetkan'
            ]
        },
        {
            title: 'Pelancong dan Nomad',
            description: 'Bahaya pencurian di rumah yang kosong',
            icon: 'mdi:map',
            points: [
                'GPS yang dipublikasikan menunjukkan rumah kosong selama perjalanan',
                'Data peralatan menarik perhatian kriminal',
                'Riwayat perjalanan mengungkapkan jadwal dan pola'
            ]
        }
    ], columns: 2 },

    { type: 'title', text: 'Cara Kerja Alat Ini', level: 3 },
    { type: 'list', items: [
        '<strong>1. Pilih gambar Anda:</strong> Seret foto atau gunakan pemilih. Anda dapat memproses beberapa foto secara bersamaan.',
        '<strong>2. Analisis otomatis:</strong> Alat ini mendeteksi dan menampilkan semua metadata yang ada (GPS, model kamera, tanggal, dll.).',
        '<strong>3. Pembersihan instan:</strong> Dengan satu klik, alat ini menghapus 100% metadata berbahaya.',
        '<strong>4. Unduhan aman:</strong> Terima gambar yang telah dianonimkan dan siap dibagikan di jejaring tanpa risiko.',
        '<strong>5. Tanpa residu:</strong> Gambar bersih mempertahankan semua kualitas visual aslinya.'
    ], icon: 'mdi:check' },

    { type: 'card', title: 'Teknologi Privasi', icon: 'mdi:shield-check', html: 'Alat ini menggunakan <strong>API Canvas browser</strong> untuk membuat salinan gambar yang bersih piksel demi piksel, memastikan bahwa:<br><br>- Tidak ada data yang dikirim ke server<br>- Gambar Anda tidak pernah meninggalkan perangkat Anda<br>- Pemrosesan anonim dan aman 100%<br>- Anda dapat menggunakannya bahkan tanpa koneksi internet (setelah pemuatan awal)' },

    { type: 'title', text: 'Data Spesifik Apa yang Dihapus?', level: 3 },
    { type: 'table', headers: ['Jenis Metadata', 'Contoh', 'Risiko'], rows: [
        ['EXIF (Exchangeable)', 'GPS, ISO, Aperture, Kecepatan Shutter, Model Kamera', 'KRITIS'],
        ['IPTC (Publikasi)', 'Hak Cipta, Penulis, Kata Kunci, Lokasi Adegan', 'TINGGI'],
        ['XMP (XML)', 'Riwayat Pengeditan, Perangkat Lunak yang Digunakan, Editan yang Dilakukan', 'SEDANG'],
        ['Data File Dasar', 'Tanggal Pembuatan, Waktu yang Tepat, Perangkat', 'TINGGI']
    ] },

    { type: 'proscons', items: [
        {
            pro: 'Privasi Total - pemrosesan berbasis browser 100%',
            con: 'Memerlukan browser modern dengan dukungan JavaScript'
        },
        {
            pro: 'Instan - membersihkan foto membutuhkan waktu kurang dari 1 detik',
            con: 'Pemrosesan foto besar mungkin lambat pada perangkat lama'
        },
        {
            pro: 'Tanpa Kehilangan Kualitas - hanya menghapus data teknis, bukan piksel',
            con: 'Tidak mengedit gambar (crop, rotasi, dll.)'
        },
        {
            pro: 'Sepenuhnya Gratis tanpa Batasan - proses foto tanpa batas',
            con: 'Tidak ada dukungan premium atau penyimpanan cloud'
        }
    ], proTitle: 'Keunggulan Utama', conTitle: 'Batasan' },

    { type: 'tip', title: 'Tips Keamanan Digital', html: '<strong>Bersihkan foto Anda SEBELUM memposting</strong> di jejaring sosial mana pun. Meskipun Anda menghapus postingan, metadata mungkin telah diindeks oleh mesin pencarian atau arsip. Pencegahan lebih baik daripada mengobati. Jadikan ini kebiasaan: <br><br><em>Foto → Bersihkan EXIF → Posting</em>' },

    { type: 'diagnostic', variant: 'warning', title: 'Risiko Nyata dari Tidak Membersihkan', icon: 'mdi:alert-circle', badge: 'Keamanan Kritis', html: '<strong>Kasus yang didokumentasikan:</strong><br>- Orang tua memposting foto anak - predator melacak GPS<br>- Fotografer yang sedang bepergian - rumah dirampok saat mereka pergi<br>- Influencer - lokasi tempat tinggal diidentifikasi oleh penggemar obsesif<br><br>Ini bukan paranoia: ini adalah kebersihan digital dasar di tahun 2026.' },

    { type: 'glossary', items: [
        {
            term: 'EXIF',
            definition: 'Exchangeable Image File Format. Standar yang menyimpan metadata teknis dalam file gambar: GPS, data kamera, pengaturan pencahayaan. Ada di ~90% foto digital tanpa niat pengguna.'
        },
        {
            term: 'Koordinat GPS',
            definition: 'Garis lintang dan garis bujur yang tepat dari lokasi persis di mana foto diambil. Dikombinasikan dengan media sosial, ini memungkinkan pelacakan fisik orang.'
        },
        {
            term: 'IPTC',
            definition: 'International Press Telecommunications Council. Metadata publikasi yang terbaca: hak cipta, penulis, kata kunci, deskripsi. Standar dalam fotografi profesional.'
        },
        {
            term: 'XMP',
            definition: 'Extensible Metadata Platform. Format XML yang merekam riwayat pengeditan dalam perangkat lunak seperti Lightroom atau Photoshop. Ini dapat mengungkapkan semua editan yang dilakukan.'
        },
        {
            term: 'OSINT',
            definition: 'Open Source Intelligence. Teknik mengumpulkan informasi publik (media sosial, metadata, catatan) untuk memprofilkan orang tanpa sepengetahuan mereka.'
        },
        {
            term: 'Anonimisasi Digital',
            definition: 'Proses menghapus atau mengaburkan informasi yang dapat diidentifikasi: lokasi, perangkat, pola perilaku. Penting untuk privasi online.'
        }
    ] },

    { type: 'message', title: 'Privasi Anda Adalah Tanggung Jawab Anda', ariaLabel: 'Informasi tentang privasi dan hak data', html: 'Kami tidak menyimpan, memproses, atau membagikan gambar Anda. <strong>Anda memiliki kendali penuh.</strong> Semua operasi terjadi secara eksklusif di browser Anda. Saat Anda menutup tab ini, tidak ada catatan aktivitas Anda yang tersisa. Inilah cara melindungi privasi Anda di internet: alat yang menghargai data Anda.' },

    { type: 'title', text: 'Kesimpulan: Berbagi Tanpa Jejak', level: 3 },
    { type: 'paragraph', html: 'Melindungi identitas digital Anda dimulai dengan detail kecil. Membersihkan foto Anda sebelum mempublikasikannya adalah <strong>kebiasaan kebersihan digital yang penting</strong> di tahun 2026. Ini tidak hanya melindungi lokasi Anda: ini melindungi keluarga, aset, dan privasi profesional Anda. Foto yang tampak lugu dapat mengungkapkan lebih banyak tentang Anda daripada yang pernah Anda bayangkan.' }
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

export const content: ExifCleanerLocaleContent = {
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
