import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { CollageMakerUI, CollageMakerLocaleContent } from '../index';

const slug = 'pembuat-kolase-foto-online-gratis-komposisi-profesional';
const title = 'Pembuat Kolase Online: Desain komposisi profesional';
const description = 'Buat kolase foto gratis dalam hitungan detik. Pilih dari berbagai tata letak, sesuaikan tepi, dan unduh dalam kualitas tinggi tanpa watermark.';

const ui: CollageMakerUI = {
    dropTitle: "Seret gambar ke sini",
    dropSub: "atau {link} - min. 2, maks. 9",
    dropLink: "pilih file",
    imgsLoaded: "Gambar dimuat",
    layoutLabel: "Tata Letak",
    settingsLabel: "Pengaturan",
    borderLabel: "Tepi",
    borderColorLabel: "Warna tepi",
    bgColorLabel: "Latar Belakang",
    downloadBtn: "Unduh",
    previewTitle: "Pratinjau",
    needsImgs: "Anda butuh {n} gambar",
    errorMin: "Anda butuh setidaknya 2 gambar",
    errorMax: "Maksimal 9 gambar diizinkan",
    errorLoad: "Kesalahan memuat gambar",
};

const faq: CollageMakerLocaleContent['faq'] = [
    {
        question: "Bagaimana cara mengubah urutan foto?",
        answer: "Foto diletakkan di kolase mengikuti urutan saat foto tersebut muncul di daftar gambar yang dimuat. Anda dapat menghapus satu foto dan mengunggahnya kembali untuk menyesuaikan posisinya.",
    },
    {
        question: "Format output apa yang dimiliki kolase?",
        answer: "Kolase diunduh dalam format WebP resolusi tinggi, ideal untuk dibagikan di jejaring sosial tanpa kehilangan ketajaman.",
    },
];

const howTo: CollageMakerLocaleContent['howTo'] = [
    {
        name: "Unggah foto Anda",
        text: "Pilih antara 2 dan 9 gambar dari file explorer Anda.",
    },
    {
        name: "Pilih tata letak",
        text: "Pilih kisi yang paling sesuai dengan jumlah foto yang telah Anda unggah.",
    },
    {
        name: "Sesuaikan gaya",
        text: "Sesuaikan ketebalan dan warna tepi untuk memberikan hasil akhir yang profesional.",
    },
    {
        name: "Unduh dan bagikan",
        text: "Tekan tombol buat dan unduh komposisi akhir Anda secara instan.",
    },
];

const seo: CollageMakerLocaleContent['seo'] = [
    {
        type: 'summary',
        title: 'Pembuat Kolase Online Profesional',
        items: [
            'Berbagai tata letak dan kisi yang telah ditentukan',
            'Kustomisasi tepi dan warna latar belakang',
            'Resolusi tinggi 1200px siap untuk jejaring sosial',
            'Pemrosesan instan tanpa batas penggunaan'
        ]
    },
    { type: 'title', text: 'Desain Kolase: Komposisi yang Bercerita', level: 2 },
    { type: 'paragraph', html: 'Kolase lebih dari sekadar campuran foto; ini adalah narasi visual yang mengomunikasikan emosi dan konteks. Alat kami memungkinkan Anda membuat komposisi geometris profesional untuk Instagram, Facebook, Pinterest, atau proyek pribadi tanpa perlu Photoshop atau perangkat lunak mahal.' },

    { type: 'stats', items: [
        { value: '2-9', label: 'Gambar per Kolase', icon: 'mdi:image-multiple' },
        { value: '1200px', label: 'Resolusi HD', icon: 'mdi:video-high-definition' },
        { value: 'Instan', label: 'Pembuatan', icon: 'mdi:lightning-bolt' }
    ], columns: 3 },

    { type: 'title', text: 'Komposisi Visual: Prinsip Desain', level: 3 },
    { type: 'paragraph', html: 'Komposisi adalah seni mengatur elemen visual sedemikian rupa sehingga memandu mata pemirsa dan mengomunikasikan maksud. Kolase yang baik menyeimbangkan:' },
    { type: 'list', items: [
        '<strong>Keseimbangan:</strong> Distribusi berat visual (gambar terang vs gelap, besar vs kecil).',
        '<strong>Alur Visual:</strong> Mata harus menelusuri komposisi secara alami, tanpa titik mati.',
        '<strong>Kontras:</strong> Variasi warna, ukuran, dan bentuk yang menarik perhatian.',
        '<strong>Kesatuan:</strong> Koherensi tematik - gambar harus \"berbicara bersama\" tentang cerita yang sama.'
    ], icon: 'mdi:check' },

    { type: 'card', title: 'Desain Cerdas dan Adaptif', html: 'Sistem kami secara otomatis menghitung distribusi ruang yang optimal berdasarkan jumlah foto. 2 gambar = kisi simetris; 5 gambar = distribusi asimetris yang seimbang. Setiap kisi dirancang untuk memaksimalkan dampak visual.' },

    { type: 'comparative', items: [
        {
            title: 'Untuk Jejaring Sosial',
            description: 'Instagram, TikTok, Facebook - format persegi',
            icon: 'mdi:share-all',
            points: [
                '1200px sangat cocok untuk feed Instagram',
                'Format persegi menghindari pemotongan saat memposting',
                'Tepi yang dapat disesuaikan untuk branding'
            ],
            highlight: true
        },
        {
            title: 'Untuk Portofolio',
            description: 'Etalase visual untuk fotografer dan desainer',
            icon: 'mdi:briefcase-outline',
            points: [
                'Tunjukkan berbagai sudut proyek',
                'Narasi visual yang kohesif',
                'Pencetakan buku digital profesional'
            ]
        },
        {
            title: 'Untuk Hadiah Pribadi',
            description: 'Cetakan, bingkai, dan album digital',
            icon: 'mdi:gift-outline',
            points: [
                'Kenangan acara (pernikahan, perjalanan)',
                'Resolusi tinggi siap cetak',
                'Desain instan tanpa usaha manual'
            ]
        }
    ], columns: 3 },

    { type: 'title', text: 'Kustomisasi: Tepi dan Warna', level: 3 },
    { type: 'table', headers: ['Elemen', 'Efek Visual', 'Rekomendasi'], rows: [
        ['Tepi Putih', 'Bersih, minimalis, modern', 'Jejaring sosial, portofolio digital'],
        ['Tepi Hitam', 'Dramatis, profesional, artistik', 'Fotografi seni, mode, kemewahan'],
        ['Tepi Netral (abu-abu)', 'Serbaguna, akademis, korporat', 'Bisnis, pendidikan, netralitas'],
        ['Tanpa Tepi', 'Fusi, kontinuitas, imersif', 'Latar belakang seragam, foto yang mengalir']
    ] },

    { type: 'proscons', items: [
        {
            pro: 'Desain profesional yang telah ditentukan - tidak butuh pengetahuan komposisi',
            con: 'Opsi terbatas pada kisi yang telah ditetapkan'
        },
        {
            pro: 'Resolusi 1200px siap untuk jejaring sosial tanpa penskalaan ulang',
            con: 'Tidak sekustomisasi Photoshop'
        },
        {
            pro: 'Pemrosesan lokal 100% - privasi, kecepatan, tanpa batas',
            con: 'Memerlukan browser modern'
        },
        {
            pro: 'Sepenuhnya gratis, tanpa watermark, tanpa iklan',
            con: 'Tidak ada opsi pengeditan individual (pemotongan, rotasi)'
        }
    ], proTitle: 'Keunggulan', conTitle: 'Batasan' },

    { type: 'diagnostic', variant: 'success', title: 'Siap untuk Jejaring Sosial', icon: 'mdi:check-circle-outline', badge: 'Teroptimasi', html: '1200x1200px adalah resolusi ideal untuk Instagram. Ini mendukung rasio aspek apa pun, tetapi output persegi memaksimalkan dampak feed, menghilangkan pemotongan otomatis, dan terlihat sama bagusnya di desktop, tablet, dan seluler.' },

    { type: 'glossary', items: [
        {
            term: 'Komposisi Visual',
            definition: 'Seni mengatur elemen (warna, bentuk, ruang) untuk memandu mata pemirsa dan mengomunikasikan maksud emosional.'
        },
        {
            term: 'Aturan Sepertiga',
            definition: 'Prinsip komposisi: membagi gambar menjadi 9 area yang sama (3x3). Posisikan subjek pada garis persimpangan untuk dampak maksimal.'
        },
        {
            term: 'Kisi Simetris',
            definition: 'Pembagian ruang yang sama. Menenangkan, tertib. Ideal untuk pasangan foto atau jumlah genap.'
        },
        {
            term: 'Kisi Asimetris',
            definition: 'Pembagian tidak sama. Dinamis, menarik, visual. Ideal untuk 5+ foto dengan variasi ukuran.'
        },
        {
            term: 'Keseimbangan Visual',
            definition: 'Ekuilibrium perseptual dari berat visual. Gambar terang + gelap = seimbang; besar + kecil = seimbang.'
        }
    ] },

    { type: 'message', title: 'Narasi Visual Instan', ariaLabel: 'Informasi tentang komposisi dan kolase', html: 'Setiap kolase bercerita. Desainer otomatis kami memastikan cerita visual Anda seimbang, profesional, dan siap untuk dunia. Tanpa perlu menunggu desainer grafis melakukan pekerjaannya.' },

    { type: 'title', text: 'Buat, Bagikan, Inspirasi', level: 3 },
    { type: 'paragraph', html: 'Kolase yang dibuat dengan baik adalah perbedaan antara postingan yang mudah dilupakan dan postingan yang diingat serta dibagikan oleh pengikut Anda. Gunakan komposisi cerdas agar cerita visual Anda berdampak.' }
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

export const content: CollageMakerLocaleContent = {
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
