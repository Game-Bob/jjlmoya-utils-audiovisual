import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { EquivalentExposureUI } from '../ui';
import type { ToolLocaleContent, FAQItem, HowToStep } from '../../../types';

const slug = 'kalkulator-eksposur-ekivalen';
const title = 'Kalkulator Eksposur Ekivalen Segitiga Eksposur';
const description = 'Hitung pengaturan eksposur kamera yang ekivalen untuk Aperture, Shutter Speed, dan ISO guna mempertahankan nilai EV.';

const ui: EquivalentExposureUI = {
  "title": "Kalkulator Eksposur Ekivalen",
  "subtitle": "Hitung parameter timbal balik untuk aperture, kecepatan rana, dan ISO guna mempertahankan nilai eksposur yang konstan.",
  "baseSettingsTitle": "Pengaturan Eksposur Dasar",
  "targetSettingsTitle": "Pengaturan Ekivalen Target",
  "lockModeLabel": "Hitung Otomatis",
  "isoLabel": "Sensitivitas ISO",
  "apertureLabel": "Aperture (f-stop)",
  "shutterLabel": "Kecepatan Rana",
  "lockIsoOption": "Hitung ISO (Pertahankan Aperture dan Rana)",
  "lockApertureOption": "Hitung Aperture (Pertahankan ISO dan Rana)",
  "lockShutterOption": "Hitung Kecepatan Rana (Pertahankan ISO dan Aperture)",
  "presetsTitle": "Preset Cepat",
  "presetSunny16": "Aturan Sunny 16",
  "presetOvercast": "Hari Mendung",
  "presetIndoor": "Cahaya Ruangan",
  "presetNight": "Fotografi Malam",
  "targetEvLabel": "EV Target"
};

const faq: FAQItem[] = [
  {
    "question": "Apa itu Nilai Eksposur (EV)?",
    "answer": "EV adalah skala logaritma yang menggabungkan aperture dan kecepatan rana pada ISO 100. Rumusnya adalah EV = log2(N^2 / t)."
  },
  {
    "question": "Bagaimana eksposur ekivalen mempertahankan kecerahan gambar?",
    "answer": "Dengan menyeimbangkan stop eksposur antara ISO, kecepatan rana, dan aperture, total cahaya yang ditangkap sensor tetap sama."
  },
  {
    "question": "Apa itu Aturan Sunny 16?",
    "answer": "Pada hari cerah di f/16, kecepatan rana yang benar adalah kebalikan dari nilai ISO (misalnya ISO 100 membutuhkan 1/100s)."
  },
  {
    "question": "Bagaimana aperture mengubah kedalaman bidang?",
    "answer": "Membuka aperture mengurangi kedalaman bidang untuk mengisolasi subjek dengan latar belakang kabur."
  }
];

const howTo: HowToStep[] = [
  {
    "name": "Pilih Pengaturan Dasar",
    "text": "Tentukan nilai dasar ISO, aperture, dan kecepatan rana Anda."
  },
  {
    "name": "Pilih Mode Perhitungan",
    "text": "Pilih variabel yang akan dihitung secara otomatis."
  },
  {
    "name": "Sesuaikan Parameter Kreatif",
    "text": "Ubah nilai target untuk melihat timbal balik secara instan."
  },
  {
    "name": "Evaluasi Efek Visual",
    "text": "Periksa diagram vektor untuk kedalaman bidang dan noise."
  }
];

const seo: ToolLocaleContent<EquivalentExposureUI>['seo'] = [
  {
    type: 'summary',
    title: 'Fitur Timbal Balik Eksposur',
    items: [
    "Perhitungan tepat 1/3 EV stop untuk ISO, Aperture, dan Kecepatan Rana",
    "Visualisator vektor Segitiga Eksposur SVG interaktif",
    "Umpan balik langsung untuk Kedalaman Bidang, Buram Gerak, dan Noise",
    "Preset cepat satu klik untuk Sunny 16, Mendung, dan Malam"
],
  },
  { type: 'title', text: 'Memahami Segitiga Eksposur', level: 2 },
  {
    type: 'paragraph',
    html: 'Eksposur ditentukan oleh aperture, kecepatan rana, dan ISO. Setiap perubahan membutuhkan penyesuaian timbal balik.',
  },
  {
    type: 'stats',
    items: [
      { value: 'EV 15', label: 'Dasar Cahaya Siang (Sunny 16)', icon: 'mdi:white-balance-sunny' },
      { value: '1/3 EV', label: 'Presisi Resolusi Sepertiga Stop', icon: 'mdi:tune-vertical' },
      { value: '2:1 DOF', label: 'Rasio Distribusi Fokus Standar', icon: 'mdi:camera-iris' },
    ],
    columns: 3,
  },
  { type: 'title', text: 'Tujuan Kreatif', level: 3 },
  {
    type: 'table',
    headers: [
    "Tujuan Kreatif",
    "Penyesuaian Aperture",
    "Penyesuaian Rana",
    "Penyesuaian ISO",
    "Konsekuensi Visual"
],
    rows: [
    [
        "Bekukan Gerakan",
        "Buka (f/2.8)",
        "Lebih cepat (1/1000s)",
        "Tetap konstan",
        "Kedalaman bidang lebih dangkal"
    ],
    [
        "Ketajaman Lanskap",
        "Tutup (f/11)",
        "Lebih lambat (1/30s)",
        "Tetap konstan",
        "Memerlukan tripod"
    ],
    [
        "Cahaya Redup Genggam",
        "Buka maks (f/1.4)",
        "Batas genggam (1/60s)",
        "Tingkatkan (ISO 3200)",
        "Noise sensor lebih tinggi"
    ],
    [
        "Kualitas Studio Maksimal",
        "Optimal (f/8)",
        "Sinkron Kilat (1/200s)",
        "ISO 100 dasar",
        "Rentang dinamis maksimal"
    ]
],
  },
  { type: 'title', text: 'Dampak Kreatif Pengaturan Ekivalen', level: 3 },
  {
    type: 'paragraph',
    html: 'Meskipun eksposur ekivalen menghasilkan kecerahan yang sama, karakter visualnya berbeda:',
  },
  {
    type: 'list',
    items: [
    "<strong>Aperture:</strong> Mengontrol kedalaman bidang dan kekaburan latar belakang.",
    "<strong>Kecepatan Rana:</strong> Mengontrol pembekuan atau buram gerakan.",
    "<strong>ISO:</strong> Memperkuat sinyal sensor dengan mengorbankan timbulnya noise."
],
    icon: 'mdi:check-circle',
  },
  {
    type: 'comparative',
    items: [
      {
        title: 'Pengaturan Latar Belakang Kabur',
        description: 'Aperture lebar untuk potret',
        icon: 'mdi:account-box-outline',
        points: [
          "Aperture f/1.4 hingga f/2.8",
          "Kecepatan rana cepat",
          "Bokeh lembut"
],
      },
      {
        title: 'Pengaturan Lanskap Dalam',
        description: 'Aperture kecil untuk ketajaman penuh',
        icon: 'mdi:image-filter-hdr',
        points: [
          "Titik ideal f/8 hingga f/11",
          "Kecepatan lambat pada tripod",
          "Resolusi optik maksimal"
],
        highlight: true,
      },
    ],
    columns: 2,
  },
  {
    type: 'proscons',
    items: [
      {
        pro: 'Presisi sepertiga stop sesuai dengan dial kamera',
        con: 'Tidak memperhitungkan kegagalan timbal balik film atau T-stop',
      },
      {
        pro: 'Visualisasi SVG langsung dengan status ketajaman',
        con: 'Memerlukan penyesuaian faktor pangkas manual',
      },
    ],
    proTitle: 'Keunggulan Teknis',
    conTitle: 'Batasan Fisik',
  },
  {
    type: 'glossary',
    items: [
    {
        "term": "Nilai Eksposur (EV)",
        "definition": "Skala logaritma yang menggabungkan aperture dan kecepatan rana."
    },
    {
        "term": "Hukum Timbal Balik",
        "definition": "Prinsip proporsionalitas eksposur dari intensitas dan waktu."
    },
    {
        "term": "Stop Eksposur",
        "definition": "Satuan relatif yang setara dengan menggandakan atau membagi dua cahaya."
    }
],
  },
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

export const content: ToolLocaleContent<EquivalentExposureUI> = {
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
