import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { TimelapseUI, TimelapseLocaleContent } from '../index';

const slug = 'kalkulator-timelapse-hyperlapse-interval-sempurna';
const title = 'Kalkulator Timelapse dan Hyperlapse: Interval Sempurna';
const description = 'Hitung interval yang tepat di antara foto, durasi total, dan penyimpanan untuk timelapse Anda. Alat penting bagi fotografer.';

const ui: TimelapseUI = {
    title: "Kalkulator Timelapse",
    paramsTitle: "Parameter",
    eventDuration: "Berapa lama durasi peristiwa aslinya?",
    hours: "Jam",
    minutes: "Menit",
    videoDuration: "Berapa durasi video final yang Anda inginkan?",
    seconds: "Durasi (detik)",
    fps: "FPS",
    resultsTitle: "Hasil",
    intervalLabel: "Atur intervalometer Anda ke:",
    secondsUnit: "detik",
    totalPhotos: "Total Foto",
    speed: "Kecepatan",
    shutterSpeed: "Kecepatan Rana",
    storage: "Ukuran (RAW)",
    rule180Info: "Aturan 180° menyarankan kecepatan rana setengah dari interval untuk keburaman gerakan yang mulus.",
};

const faq: TimelapseLocaleContent['faq'] = [
    {
        question: "Bagaimana cara memilih interval yang benar untuk timelapse saya?",
        answer: "Tergantung pada kecepatan gerakan yang Anda tangkap. Untuk awan yang bergerak cepat, gunakan 2-3 detik. Untuk pergerakan matahari atau bintang, gunakan 15-30 detik. Untuk pertumbuhan tanaman atau konstruksi bangunan, gunakan 5-15 menit.",
    },
    {
        question: "Berapa banyak foto yang saya butuhkan untuk video berdurasi satu menit?",
        answer: "Video standar memiliki 24 atau 30 bingkai per detik (fps). Untuk satu menit video pada 24fps, Anda membutuhkan tepat 1440 foto (60 detik * 24 foto/detik).",
    },
    {
        question: "Apa itu 'Flicker' dan bagaimana cara menghindarinya?",
        answer: "Flicker adalah kedipan yang mengganggu yang disebabkan oleh variasi kecil dalam pencahayaan antar foto. Untuk menghindarinya, selalu gunakan mode manual (M), white balance tetap, dan utamakan menggunakan lensa dengan cincin apertur manual.",
    },
    {
        question: "Mengapa kecepatan rana itu penting?",
        answer: "Agar gerakan terlihat mulus (aturan 180°), kecepatan rana harus sekitar setengah dari interval. Misalnya, jika intervalnya 2 detik, cobalah memotret pada 1 detik untuk membuat efek motion blur alami.",
    },
];

const howTo: TimelapseLocaleContent['howTo'] = [
    {
        name: "Tentukan durasi video final",
        text: "Tentukan berapa detik atau menit durasi video akhir yang Anda inginkan (misalnya, 10 detik untuk Instagram).",
    },
    {
        name: "Pilih FPS keluaran",
        text: "Pilih kelancaran video: 24 (bioskop), 30 (web), atau 60 (slow motion yang mulus).",
    },
    {
        name: "Atur interval pengambilan gambar",
        text: "Konfigurasikan setiap berapa detik kamera Anda akan memotret sesuai dengan kecepatan adegan.",
    },
    {
        name: "Verifikasi ruang penyimpanan",
        text: "Kalkulator akan memberi tahu Anda berapa Gigabyte ruang yang akan digunakan sesi tersebut. Pastikan kartu SD Anda memiliki ruang yang cukup.",
    },
];

const seo: TimelapseLocaleContent['seo'] = [
    { type: 'title', text: 'Panduan Definitif untuk Interval Timelapse dan Hyperlapse', level: 2 },
    { type: 'paragraph', html: 'Perbedaan antara video kecepatan tinggi amatir dan <strong>timelapse sinematik</strong> secara matematis terletak pada satu faktor tunggal: <strong>interval</strong>. Kalkulator ini menghilangkan keraguan, memungkinkan Anda merencanakan pemotretan intervalometer Anda dengan tepat.' },
    
    { type: 'title', text: 'Tabel Interval yang Direkomendasikan (Cheat Sheet)', level: 3 },
    { type: 'paragraph', html: 'Gunakan tabel referensi cepat ini untuk mengatur intervalometer Anda sesuai dengan subjeknya.' },
    { type: 'table', headers: ['Subjek / Adegan', 'Saran Interval', 'Durasi Peristiwa (Minimum)'], rows: [
        ['Awan Cepat / Badai', '1 - 2 detik', '20 - 30 menit'],
        ['Lalu Lintas Kota / Orang (Blur)', '0.5 - 2 detik', '15 - 20 menit'],
        ['Matahari Terbenam / Terbit (Holy Grail)', '5 - 10 detik', '1.5 - 2.5 jam'],
        ['Awan Lambat / Bayangan', '10 - 15 detik', '2 - 3 jam'],
        ['Bintang / Bima Sakti (Astro)', '15 - 30 detik*', '3 - 5 jam'],
        ['Konstruksi / Pertumbuhan Tanaman', '5 - 15 menit', 'Hari / Minggu']
    ]},
    { type: 'tip', title: 'Catatan untuk Astro', html: 'Interval biasanya ditentukan oleh waktu pencahayaan yang dibutuhkan (aturan 500) + 1 atau 2 detik jeda untuk penulisan ke kartu memori.' },

    { type: 'title', text: 'Aturan 180° (Motion Blur)', level: 3 },
    { type: 'paragraph', html: 'Kesalahan umum dalam timelapse adalah mendapatkan video yang "patah-patah". Untuk mendapatkan tampilan sinematik yang mulus, Anda membutuhkan <strong>motion blur</strong>.' },
    { type: 'card', title: 'Aturan', icon: 'mdi:information', html: 'Kecepatan Rana Anda harus setengah dari interval Anda. <br /><br /> <em>Contoh:</em> Jika Anda memotret setiap <strong>4 detik</strong>, pencahayaan Anda harus <strong>2 detik</strong>.' },

    { type: 'title', text: 'Flicker dan Apertur Manual', level: 3 },
    { type: 'paragraph', html: '"Flicker" adalah kedipan mengganggu yang disebabkan oleh variasi mikro dalam bukaan diafragma antar bidikan.' },
    { type: 'list', items: [
        '<strong>Lens Twist:</strong> Buka sedikit kunci lensa pada DSLR untuk memutus koneksi elektronik dan menetapkan apertur secara mekanis.',
        '<strong>Semua Manual:</strong> ISO, White Balance, dan Fokus harus tetap. Jangan pernah gunakan mode otomatis.',
        '<strong>Potret dalam RAW:</strong> Penting untuk mengoreksi pencahayaan dan warna di pascaproduksi.'
    ]},

    { type: 'diagnostic', variant: 'success', title: 'Teknik Lanjutan: "Holy Grail"', icon: 'mdi:crown', badge: 'Teknik Pro', html: '"Holy Grail" mengacu pada transisi mulus dari siang ke malam (atau sebaliknya). Ini adalah tantangan teknis tersulit dalam timelapse.' },
    
    { type: 'stats', columns: 3, items: [
        { label: 'Bulb Ramping', value: 'Exposure Bertahap', icon: 'mdi:brightness-6' },
        { label: 'Post-Pro', value: 'LRTimelapse', icon: 'mdi:television-guide' },
        { label: 'Strategi', value: 'Interval Malam', icon: 'mdi:weather-night' }
    ]},

    { type: 'title', text: 'Kesimpulan: Seni Mekanika Sederhana', level: 3 },
    { type: 'paragraph', html: 'Menguasai timelapse Anda dimulai dengan memahami matematika intervalometer Anda.' }
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

export const content: TimelapseLocaleContent = {
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
