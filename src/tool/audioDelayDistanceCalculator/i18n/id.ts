import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { AudioDelayUI } from '../ui';
import type { ToolLocaleContent, FAQItem, HowToStep } from '../../../types';

const slug = 'kalkulator-delay-audio-jarak-suhu';
const title = 'Kalkulator Delay Audio Berdasarkan Jarak dan Suhu';
const description = 'Hitung waktu delay akustik, kecepatan suara di udara, pergeseran fase, jumlah sampel digital, dan reduksi SPL untuk menara delay PA.';

const ui: AudioDelayUI = {
  title: 'Kalkulator Delay Audio Berdasarkan Jarak dan Suhu',
  subtitle: 'Hitung waktu delay perambatan suara, pergeseran fase akustik, jumlah sampel, dan atenuasi SPL untuk speaker delay PA.',
  unitSystemLabel: 'Sistem Satuan',
  unitMetric: 'Metrik (m, °C)',
  unitImperial: 'Imperial (ft, °F)',
  distanceLabel: 'Jarak ke Speaker Delay',
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
  statusDirectZone: 'Sinkronisasi Gelombang Langsung',
  statusHaasZone: 'Zona Preseden Haas',
  statusEchoZone: 'Zona Gema Terlihat',
  statusExtremeZone: 'Pergeseran Delay Kritis',
  advicePhaseAligned: 'Sinyal terlaraskan secara akustik dalam 5ms. Pemrosesan delay minimal diperlukan.',
  adviceMinorHaas: 'Suara tiba dalam zona Haas (5-35ms). Lokalisasi alami tetap berada di panggung utama.',
  adviceHaasDelayNeeded: 'Menara delay memerlukan offset waktu yang tepat untuk mencegah gema terpisah.',
  adviceCriticalDelayNeeded: 'Offset delay tinggi. Terapkan delay sampel yang tepat untuk menghindari comb filtering.',
  unitMeters: 'm',
  unitFeet: 'ft',
  unitCelsius: '°C',
  unitFahrenheit: '°F',
  mainSpeakerLabel: 'PA Utama',
  delaySpeakerLabel: 'Menara Delay',
  audienceLabel: 'Zona Penonton',
  haasZoneLegend: 'Zona Haas (5-35ms)',
};

const faq: FAQItem[] = [
  {
    question: 'Mengapa suhu udara penting saat menghitung delay audio?',
    answer: 'Kecepatan suara di udara bergantung langsung pada suhu. Pada 0 derajat Celsius suara merambat 331.3 meter per detik sedangkan pada 30 derajat Celsius meningkat menjadi 349 meter per detik.',
  },
];

const howTo: HowToStep[] = [
  {
    name: 'Ukur Jarak Fisik',
    text: 'Ukur jarak fisik antara PA utama dan menara delay menggunakan pengukur jarak laser.',
  },
];

const seo: ToolLocaleContent<AudioDelayUI>['seo'] = [
  {
    type: 'summary',
    title: 'Fitur Keselarasan Delay Akustik',
    items: [
      'Perhitungan kecepatan suara berdasarkan suhu dan kelembaban',
      'Konversi instan ke sampel konsol digital (44.1k, 48k, 96k, 192k)',
      'Evaluasi zona efek Haas dan keselarasan fase',
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
