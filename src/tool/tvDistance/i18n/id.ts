import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { TvDistanceUI, TvDistanceLocaleContent } from '../index';

const slug = 'kalkulator-jarak-nonton-tv-thx-4k-layar-optimal';
const title = 'Kalkulator Jarak TV: Layar Optimal THX dan 4K';
const description = 'Hitung jarak ideal untuk menonton televisi Anda berdasarkan ukuran dan resolusinya. Optimalkan Home Cinema Anda dengan standar THX dan SMPTE.';

const ui: TvDistanceUI = {
    specTitle: "Spesifikasi",
    diagonalLabel: "Ukuran Diagonal",
    resolutionLabel: "Resolusi",
    thxRecommendation: "Rekomendasi THX",
    thxDescription: "THX merekomendasikan jarak yang mencakup sudut pandang 40 derajat untuk pengalaman sinematik yang mendalam.",
    simulationBadge: "Simulasi Real-Time",
    tvWidthLabel: "lebar cm",
    userLocationLabel: "Lokasi Anda",
    minLimitLabel: "Batas Minimum",
    optimalLimitLabel: "Jarak Optimal",
    maxLimitLabel: "Batas Maksimum",
    unitMeters: "m",
    unitCm: "cm"
};

const faq: TvDistanceLocaleContent['faq'] = [
    {
        question: "Mengapa resolusi penting saat menghitung jarak?",
        answer: "Pada resolusi yang lebih tinggi (seperti 4K atau 8K), piksel lebih kecil. Ini memungkinkan Anda duduk lebih dekat tanpa melihat grid piksel, sehingga meningkatkan imersinya.",
    },
    {
        question: "Apa itu sudut pandang 40 derajat?",
        answer: "Ini adalah standar yang direkomendasikan oleh THX agar layar menempati sebagian besar penglihatan tepi Anda, mirip dengan pengalaman di gedung bioskop profesional.",
    },
    {
        question: "Bolehkah saya duduk lebih jauh dari yang direkomendasikan?",
        answer: "Ya, tetapi Anda akan kehilangan manfaat resolusi tinggi. Jika Anda duduk terlalu jauh dari TV 4K, mata Anda tidak akan bisa membedakan detail ekstra dan Anda akan melihatnya seolah-olah resolusinya 1080p.",
    },
];

const howTo: TvDistanceLocaleContent['howTo'] = [
    {
        name: "Tentukan inci",
        text: "Geser slider untuk memilih ukuran televisi Anda saat ini atau yang berencana Anda beli.",
    },
    {
        name: "Pilih resolusi",
        text: "Pilih antara 1080p, 4K, atau 8K untuk menyesuaikan batas ketajaman visual.",
    },
    {
        name: "Visualisasikan simulasi",
        text: "Amati dalam diagram bagaimana hubungan ukuran antara Anda dan layar berubah.",
    },
    {
        name: "Atur sofa Anda",
        text: "Tempatkan tempat duduk Anda dalam rentang 'Jarak Optimal' untuk memaksimalkan kepuasan sinematik.",
    },
];

const seo: TvDistanceLocaleContent['seo'] = [
    {
        type: 'summary',
        title: 'Jarak TV Optimal Berdasarkan Resolusi dan Ukuran',
        items: [
            'Standar THX (40°) untuk pengalaman sinematik mendalam',
            'Perhitungan untuk 1080p, 4K, dan 8K dengan presisi maksimum',
            'Simulasi visual real-time dari pengaturan Anda',
            'Hindari kelelahan mata dan maksimalkan imersi konten'
        ]
    },
    { type: 'title', text: 'Sains di Balik Imersi: Jarak TV Optimal', level: 2 },
    { type: 'paragraph', html: 'Bukan hanya soal kenyamanan, tapi soal fisiologi visual manusia. Mata memiliki batas ketajaman resolusi; jika duduk terlalu jauh dari layar 4K, Anda menyia-nyiakan piksel yang tidak bisa ditangkap penglihatan. Dan jika terlalu dekat, akan menyebabkan kelelahan mata.' },

    { type: 'stats', items: [
        { value: '40°', label: 'Sudut Ideal THX', icon: 'mdi:eye' },
        { value: '100%', label: 'Piksel Dimanfaatkan', icon: 'mdi:video-high-definition' },
        { value: 'Nol', label: 'Kelelahan Visual', icon: 'mdi:heart-pulse' }
    ], columns: 3 },

    { type: 'title', text: 'Dua Standar Profesional: THX vs SMPTE', level: 3 },
    { type: 'paragraph', html: 'Ada dua otoritas utama dalam industri audiovisual yang menetapkan cara mengoptimalkan pengalaman menonton Anda:' },
    { type: 'comparative', items: [
        {
            title: 'Standar THX',
            description: 'Sudut pandang 40° - Lebih mendalam',
            icon: 'mdi:filmstrip',
            points: [
                'Layar memenuhi lebih banyak penglihatan tepi Anda',
                'Pengalaman sinematik yang mendalam',
                'Ideal untuk film aksi, siaran olahraga langsung',
                'Membutuhkan ruang ruangan yang lebih luas'
            ],
            highlight: true
        },
        {
            title: 'Standar SMPTE',
            description: 'Sudut pandang 30° - Lebih santai',
            icon: 'mdi:television',
            points: [
                'Jarak duduk yang lebih nyaman',
                'Rekomendasi profesional yang konservatif',
                'Ideal untuk berbagai konten (berita, serial)',
                'Lebih baik untuk ruangan yang lebih kecil'
            ]
        }
    ], columns: 2 },

    { type: 'title', text: 'Bagaimana Resolusi Mengubah Persamaannya', level: 3 },
    { type: 'table', headers: ['Resolusi', 'Ukuran TV 55"', 'Jarak Minimum (tidak ada piksel terlihat)', 'Jarak Optimal THX'], rows: [
        ['1080p (Full HD)', '55 inci', '2.0 m', '2.3 m'],
        ['4K (Ultra HD)', '55 inci', '1.2 m', '1.5 m'],
        ['8K', '55 inci', '0.8 m', '1.0 m']
    ] },

    { type: 'paragraph', html: 'Seperti yang Anda lihat, resolusi yang lebih tinggi memungkinkan Anda duduk lebih dekat tanpa melihat struktur piksel. TV 4K bisa dinikmati dari jarak 1.2 meter; 1080p butuh setidaknya 2 meter.' },

    { type: 'card', title: 'Batas Ketajaman Visual Manusia', html: 'Mata manusia memiliki batas kapasitas resolusi (ketajaman visual). Di luar jarak tertentu, Anda tidak bisa membedakan detail lagi meskipun layarnya 8K. Perhitungan kami menempatkan Anda tepat di "zona optimal" di mana Anda memanfaatkan 100% piksel tanpa membuang energi mata yang tidak perlu.' },

    { type: 'diagnostic', variant: 'info', title: 'Kelelahan Mata dan Jarak', icon: 'mdi:information', badge: 'Kesehatan Visual', html: 'Terlalu dekat menyebabkan kelelahan karena mata harus terus-menerus menyesuaikan dengan sudut yang ekstrim. Terlalu jauh menyebabkan ketegangan untuk membedakan detail. Kalkulator kami menempatkan Anda di "sweet spot" (40° untuk THX).' },

    { type: 'proscons', items: [
        {
            pro: 'THX 40° menciptakan imersi sinematik sejati - seperti gedung bioskop profesional',
            con: 'Membutuhkan lebih banyak ruang yang tersedia di ruangan'
        },
        {
            pro: '4K memungkinkan duduk lebih dekat daripada 1080p - berguna di ruang sempit',
            con: 'Anda harus berada pada jarak minimum untuk memanfaatkan piksel ekstra'
        },
        {
            pro: 'Hindari kelelahan mata dengan memposisikan diri secara benar sejak awal',
            con: 'Kebanyakan ruangan rumah TIDAK mengikuti standar ini'
        },
        {
            pro: 'Anda dapat memvalidasi apakah TV Anda saat ini sudah diposisikan dengan baik',
            con: 'Jika salah, perlu memindahkan perabotan'
        }
    ], proTitle: 'Keuntungan', conTitle: 'Kekurangan' },

    { type: 'glossary', items: [
        {
            term: 'Sudut Pandang (dalam derajat)',
            definition: 'Sudut visual yang dicakup layar dari posisi Anda. 40° = sangat mendalam; 20° = konten latar belakang (tidak mendalam).'
        },
        {
            term: 'THX (Tomlinson Holman Experiment)',
            definition: 'Sertifikasi kualitas audiovisual yang dibuat oleh Lucasfilm. Menetapkan standar untuk bioskop dan home theater. 40° adalah rekomendasi utamanya.'
        },
        {
            term: 'SMPTE (Society of Motion Picture Technical Engineers)',
            definition: 'Organisasi standar teknis untuk film dan video. Merekomendasikan 30° sebagai jarak profesional yang konservatif.'
        },
        {
            term: 'Ketajaman Visual Manusia',
            definition: 'Kemampuan mata untuk membedakan detail halus. Piksel individu tidak akan terlihat melampaui jarak tertentu.'
        },
        {
            term: '4K (Ultra HD)',
            definition: 'Resolusi ~3840x2160 piksel. 4 kali lebih banyak piksel daripada 1080p.'
        }
    ] },

    { type: 'message', title: 'Optimalisasi Ruangan Audiovisual Profesional', ariaLabel: 'Informasi tentang standar pengaturan TV', html: 'Bioskop profesional menghabiskan jutaan rupiah untuk memastikan jarak, sudut, dan pencahayaan sempurna. Kalkulator kami membawa prinsip yang sama ke rumah Anda.' },

    { type: 'title', text: 'Atur Home Cinema Anda Secara Profesional', level: 3 },
    { type: 'paragraph', html: 'Jarak sama pentingnya dengan ukuran layar dan resolusi. Ikuti standar ini untuk mengubah ruang tamu Anda menjadi gedung bioskop yang otentik.' }
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

export const content: TvDistanceLocaleContent = {
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
