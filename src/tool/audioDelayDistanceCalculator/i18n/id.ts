import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { AudioDelayUI } from '../ui';
import type { ToolLocaleContent, FAQItem, HowToStep } from '../../../types';

const slug = 'kalkulator-delay-audio-jarak-suhu';
const title = 'Kalkulator Delay Audio Berdasarkan Jarak dan Suhu';
const description = 'Hitung waktu delay akustik, kecepatan suara di udara, pergeseran fase, sampel digital, dan reduksi SPL untuk speaker delay PA.';

const ui: AudioDelayUI = {
  title: 'Kalkulator Delay Audio Berdasarkan Jarak dan Suhu',
  subtitle: 'Hitung waktu delay propagasi suara, pergeseran fase akustik, jumlah sampel, dan atenuasi SPL untuk menara delay PA.',
  unitSystemLabel: 'Sistem Satuan',
  unitMetric: 'Metrik (m, °C)',
  unitImperial: 'Imperial (ft, °F)',
  distanceLabel: 'Jarak ke Menara Delay',
  temperatureLabel: 'Suhu Udara Sekitar',
  humidityLabel: 'Kelembaban Relatif',
  sampleRateLabel: 'Sample Rate Konsol',
  presetsTitle: 'Preset Skenario Cepat',
  presetSummerFestival: 'Festival Musim Panas (35°C, 40m)',
  presetIndoorConcert: 'Konser Dalam Ruangan (20°C, 25m)',
  presetTheater: 'Teater Akustik (22°C, 15m)',
  presetWinterOutdoor: 'Acara Luar Ruangan Musim Dingin (5°C, 50m)',
  resultDelayMs: 'Waktu Delay',
  resultSamples: 'Sampel Digital',
  resultSpeed: 'Kecepatan Suara',
  resultSplLoss: 'Atenuasi SPL',
  phaseStatusLabel: 'Status Keselarasan Fase Akustik',
  statusDirectZone: 'Sinkronisasi Muka Gelombang Langsung',
  statusHaasZone: 'Zona Presedensi Haas',
  statusEchoZone: 'Zona Gema Terdengar',
  statusExtremeZone: 'Deviasi Delay Kritis',
  advicePhaseAligned: 'Sinyal terlaraskan secara akustik dalam 5ms. Pemrosesan delay minimal diperlukan.',
  adviceMinorHaas: 'Suara tiba dalam zona Haas (5-35ms). Lokalisasi alami tetap berada di panggung utama.',
  adviceHaasDelayNeeded: 'Menara delay memerlukan offset waktu yang tepat untuk mencegah gema terpisah.',
  adviceCriticalDelayNeeded: 'Deviasi delay tinggi. Terapkan presisi sampel delay untuk menghindari comb filtering.',
  unitMeters: 'm',
  unitFeet: 'ft',
  unitCelsius: '°C',
  unitFahrenheit: '°F',
  mainSpeakerLabel: 'PA Utama',
  delaySpeakerLabel: 'Menara Delay',
  audienceLabel: 'Area Penonton',
  haasZoneLegend: 'Zona Haas (5-35ms)',
};

const faq: FAQItem[] = [
  {
    question: 'Mengapa suhu udara penting dalam menghitung delay audio?',
    answer: 'Kecepatan suara di udara bergantung langsung pada suhu. Pada 0 derajat Celsius suara merambat 331.3 meter per detik sedangkan pada 30 derajat Celsius meningkat menjadi sekitar 349 meter per detik. Mengabaikan suhu menyebabkan pembatalan fase.',
  },
  {
    question: 'Apa itu Efek Haas dalam tata suara live sound?',
    answer: 'Efek Haas menyatakan bahwa pendengaran manusia melokalisasi sumber suara ke arah sinyal pertama yang tiba jika sinyal sekunder tiba dalam kurun waktu 5 hingga 35 milidetik dengan intensitas serupa.',
  },
  {
    question: 'Bagaimana cara mengonversi waktu delay menjadi sampel konsol digital?',
    answer: 'Kalikan waktu delay dalam detik dengan sample rate konsol digital. Misalnya 50 milidetik pada 48 kHz setara dengan 2400 sampel digital.',
  },
];

const howTo: HowToStep[] = [
  {
    name: 'Ukur Jarak Fisik',
    text: 'Ukur jarak fisik antara PA utama dan menara delay menggunakan pengukur jarak laser.',
  },
  {
    name: 'Periksa Suhu Udara Sekitar',
    text: 'Masukkan suhu udara lokasi saat ini untuk menentukan kecepatan propagasi yang tepat.',
  },
  {
    name: 'Pilih Sample Rate Konsol',
    text: 'Atur frekuensi sampel konsol digital Anda ke 44.1 kHz, 48 kHz, 96 kHz, atau 192 kHz.',
  },
  {
    name: 'Terapkan Delay Terhitung',
    text: 'Masukkan waktu delay dalam milidetik atau sampel ke dalam prosesor speaker.',
  },
];

const seo: ToolLocaleContent<AudioDelayUI>['seo'] = [
  {
    type: 'summary',
    title: 'Fitur Penyelarasan Delay Akustik',
    items: [
      'Perhitungan presisi kecepatan suara berdasarkan suhu dan kelembaban',
      'Konversi instan ke sampel konsol digital (44.1k, 48k, 96k, 192k)',
      'Evaluasi zona efek Haas dan keselarasan fase',
      'Estimasi penurunan tekanan suara SPL dalam desibel',
    ],
  },
  { type: 'title', text: 'Propagasi Suara dan Termodinamika Atmosfer', level: 2 },
  {
    type: 'paragraph',
    html: 'Suara merambat melalui udara sebagai gelombang tekanan mekanis. Kecepatannya terutama ditentukan oleh suhu udara, dihitung dengan rumus <code>c = 331.3 * sqrt(1 + T / 273.15)</code>.',
  },
  {
    type: 'stats',
    items: [
      { value: '343.2 m/s', label: 'Kecepatan Suara pada 20°C', icon: 'mdi:speedometer' },
      { value: '5-35 ms', label: 'Jendela Presedensi Haas', icon: 'mdi:timer-sand' },
      { value: '48/96 kHz', label: 'Presisi Sampel Konsol', icon: 'mdi:sine-wave' },
    ],
    columns: 3,
  },
  { type: 'title', text: 'Penyelarasan Fase Akustik dan Pencegahan Comb Filtering', level: 3 },
  {
    type: 'paragraph',
    html: 'Ketika dua sistem speaker memancarkan sinyal yang sama tanpa penyelarasan waktu presisi, gelombang mereka saling bertumpuk dengan perbedaan fase yang menyebabkan comb filtering.',
  },
  {
    type: 'list',
    items: [
      '<strong>Penyelarasan Waktu:</strong> Menunda menara sekunder agar cocok dengan kedatangan PA utama.',
      '<strong>Pencegahan Comb Filtering:</strong> Menghilangkan takik pembatalan fase pada spektrum terdengar.',
      '<strong>Lokalisasi Haas:</strong> Mempertahankan persepsi sumber akustik pada panggung utama.',
      '<strong>Presisi Sampel:</strong> Memberikan nilai sampel digital yang tepat untuk matriks output.',
    ],
    icon: 'mdi:check-circle',
  },
  {
    type: 'comparative',
    items: [
      {
        title: 'Penyelarasan PA Langsung',
        description: 'Delay fisik setara dengan jarak tempuh suara',
        icon: 'mdi:target',
        points: ['Koherensi fase sempurna', 'Ideal untuk speaker in-fill', 'Tanpa comb filtering'],
      },
      {
        title: 'Penyelarasan Offset Haas',
        description: 'Delay fisik ditambah offset presedensi 5 hingga 15ms',
        icon: 'mdi:music-clef-treble',
        points: ['Lokalisasi alami pada panggung', 'Kejelasan percakapan lebih baik', 'Ideal untuk menara delay'],
        highlight: true,
      },
    ],
    columns: 2,
  },
  {
    type: 'table',
    headers: ['Skenario Tata Suara', 'Jarak (m)', 'Suhu (°C)', 'Waktu Delay (ms)', 'Sampel (48kHz)'],
    rows: [
      ['Infill Balkon Teater', '15 m', '22 °C', '43.5 ms', '2.090 sampel'],
      ['Konser Gedung Tertutup', '25 m', '20 °C', '72.8 ms', '3.494 sampel'],
      ['Panggung Utama Festival', '40 m', '35 °C', '113.6 ms', '5.453 sampel'],
      ['Acara Malam Musim Dingin', '50 m', '5 °C', '149.5 ms', '7.176 sampel'],
    ],
  },
  {
    type: 'proscons',
    items: [
      {
        pro: 'Presisi sampel di bawah milidetik untuk konsol digital',
        con: 'Memerlukan pengukuran jarak fisik yang akurat',
      },
      {
        pro: 'Mempertimbangkan suhu udara dan kelembaban relatif',
        con: 'Gradien angin di luar ruangan memerlukan pemantauan terus-menerus',
      },
    ],
    proTitle: 'Keunggulan',
    conTitle: 'Pertimbangan',
  },
  {
    type: 'glossary',
    items: [
      {
        term: 'Efek Haas',
        definition: 'Fenomena psikoakustik di mana pendengaran melokalisasi suara ke sinyal pertama yang tiba dalam 5-35 ms.',
      },
      {
        term: 'Comb Filtering',
        definition: 'Distorsi respons frekuensi akibat penjumlahan sinyal dengan versi yang tertunda.',
      },
      {
        term: 'Sample Rate',
        definition: 'Jumlah sampel audio yang diproses per detik oleh konsol digital atau matriks DSP.',
      },
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

export const content: ToolLocaleContent<AudioDelayUI> = {
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
