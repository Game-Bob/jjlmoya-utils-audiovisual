import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { DepthOfFieldUI, DepthOfFieldLocaleContent } from '../index';

const slug = 'kalkulator-kedalaman-bidang';
const title = 'Kalkulator Kedalaman Bidang: DoF Realtime untuk Semua Kamera';
const description = 'Hitung kedalaman bidang, jarak hiperfokal, dan batas fokus secara real-time. Mendukung semua ukuran sensor dengan presisi apertur 1/3 stop.';

const ui: DepthOfFieldUI = {
    title: 'Kalkulator Kedalaman Bidang',
    paramsTitle: 'Parameter',
    sensorLabel: 'Sensor Kamera',
    moreLabel: 'Sensor lainnya…',
    apertureLabel: 'Apertur',
    focalLabel: 'Panjang Fokus',
    distanceLabel: 'Jarak Objek',
    metersLabel: 'm',
    feetLabel: 'ft',
    resultsTitle: 'Hasil',
    totalDofLabel: 'Total Kedalaman Bidang',
    infiniteLabel: 'Tak Terhingga',
    nearLimitLabel: 'Batas Dekat',
    farLimitLabel: 'Batas Jauh',
    hyperfocalLabel: 'Hiperfokal',
    cocLabel: 'Circle of Confusion',
    cocUnit: 'mm',
    showDetailsLabel: 'Tampilkan detail teknis',
    hideDetailsLabel: 'Sembunyikan detail teknis',
    errorBelowFocal: 'Jarak objek harus lebih besar dari panjang fokus.',
};

const faq: DepthOfFieldLocaleContent['faq'] = [
    {
        question: 'Apa itu kedalaman bidang?',
        answer: 'Kedalaman bidang (DoF) adalah rentang jarak dalam sebuah pemandangan yang tampak tajam dalam gambar akhir. Ini ditentukan oleh apertur, panjang fokus, jarak objek, dan ukuran sensor.',
    },
    {
        question: 'Apa itu jarak hiperfokal?',
        answer: 'Jarak hiperfokal adalah jarak fokus terdekat di mana objek di tak terhingga masih cukup tajam. Fokus pada jarak ini akan memaksimalkan kedalaman bidang.',
    },
    {
        question: 'Mengapa apertur yang lebih besar (angka-f kecil) mengurangi DoF?',
        answer: 'Apertur yang lebih lebar mengumpulkan cahaya melalui area lensa yang lebih luas, yang meningkatkan ukuran lingkaran kebingungan (circle of confusion) untuk titik-titik di luar fokus.',
    },
    {
        question: 'Bagaimana ukuran sensor memengaruhi kedalaman bidang?',
        answer: 'Sensor yang lebih besar menggunakan ambang batas lingkaran kebingungan yang lebih besar. Namun, untuk bidang pandang yang setara, sensor yang lebih besar biasanya menghasilkan DoF yang lebih tipis.',
    },
];

const howTo: DepthOfFieldLocaleContent['howTo'] = [
    {
        name: 'Pilih sensor kamera Anda',
        text: 'Pilih format sensor yang sesuai dengan kamera Anda. Ini menentukan nilai circle of confusion (CoC) yang digunakan dalam perhitungan.',
    },
    {
        name: 'Atur apertur dan panjang fokus',
        text: 'Pilih stop-f dalam kelipatan 1/3. Penggeser panjang fokus menggunakan skala logaritmik untuk presisi yang lebih baik pada sudut lebar.',
    },
    {
        name: 'Atur jarak objek',
        text: 'Tentukan jarak antara kamera dan subjek utama Anda. Ganti antara unit meter dan kaki sesuai kebutuhan.',
    },
    {
        name: 'Baca hasilnya',
        text: 'Bilah Fokus memvisualisasikan zona tajam di sekitar subjek Anda. Batas dekat dan jauh menunjukkan batas eksak dari fokus yang dapat diterima.',
    },
];

const seo: DepthOfFieldLocaleContent['seo'] = [
    { type: 'title', text: 'Memahami Kedalaman Bidang dalam Fotografi dan Sinema', level: 2 },
    { type: 'paragraph', html: 'Kedalaman bidang adalah salah satu alat kreatif terkuat yang tersedia. <strong>Kedalaman bidang yang dangkal</strong> mengisolasi subjek, sementara <strong>kedalaman bidang yang dalam</strong> menjaga ketajaman seluruh lanskap.' },

    { type: 'title', text: 'Tiga Variabel yang Mengontrol DoF', level: 3 },
    { type: 'table', headers: ['Variabel', 'Peningkatan →', 'Efek pada DoF'], rows: [
        ['Apertur', 'f/1.4 → f/16', 'Apertur lebih lebar = DoF lebih dangkal'],
        ['Panjang Fokus', '24mm → 200mm', 'Fokus lebih panjang = DoF lebih dangkal pada jarak yang sama'],
        ['Jarak Objek', '1m → 10m', 'Objek lebih jauh = DoF lebih dalam'],
    ]},

    { type: 'title', text: 'Jarak Hiperfokal: Ketajaman Maksimum', level: 3 },
    { type: 'paragraph', html: 'Saat Anda fokus pada <strong>jarak hiperfokal</strong>, segala sesuatu dari setengah jarak tersebut hingga tak terhingga akan tampak tajam. Fotografer lanskap sering menggunakan teknik ini.' },
    { type: 'tip', title: 'Tips praktis', html: 'Untuk fotografi jalanan, atur fokus Anda ke jarak hiperfokal. Dengan lensa 35mm pada APS-C di f/8, jarak hiperfokal adalah sekitar <strong>4 meter</strong>: semuanya dari 2m hingga tak terhingga akan tajam.' },

    { type: 'title', text: 'Ukuran Sensor dan Circle of Confusion', level: 3 },
    { type: 'paragraph', html: '<strong>Circle of confusion (CoC)</strong> adalah ambang batas yang menentukan "ketajaman yang dapat diterima". Sensor Full Frame memiliki CoC 0,030mm; sensor smartphone menggunakan ~0,006mm.' },
    { type: 'stats', columns: 3, items: [
        { label: 'Full Frame', value: '0,030 mm', icon: 'mdi:camera' },
        { label: 'APS-C', value: '0,019 mm', icon: 'mdi:camera-outline' },
        { label: 'Smartphone', value: '0,006 mm', icon: 'mdi:cellphone' },
    ]},

    { type: 'title', text: 'DoF dalam Sinema: Panjang Fokus vs Sensor', level: 3 },
    { type: 'paragraph', html: 'Sinematografer yang menggunakan Super 35 sering menggunakan panjang fokus yang lebih panjang untuk mengompresi perspektif, yang juga mempersempit DoF dan menciptakan "tampilan sinematik".' },
    { type: 'diagnostic', variant: 'success', title: 'Aturan Distribusi Fokus', icon: 'mdi:lightbulb-outline', badge: 'Teknik Pro', html: 'Untuk subjek pada 3 meter dengan lensa 50mm di f/2.8 : zona tajam di belakang subjek selalu lebih besar daripada di depan — kira-kira dengan <strong>rasio 2:1</strong>.' },
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

export const content: DepthOfFieldLocaleContent = {
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
