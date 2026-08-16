import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { AudioDelayUI } from '../ui';
import type { ToolLocaleContent, FAQItem, HowToStep } from '../../../types';

const slug = 'ses-gecikmesi-mesafe-sicaklik-hesaplayici';
const title = 'Mesafe ve Sıcaklığa Göre Ses Gecikmesi Hesaplayıcı';
const description = 'PA gecikme kuleleri için akustik gecikme süresini, havadaki ses hızını, faz kaymasını, dijital örnek sayısını ve SPL kaybını hesaplayın.';

const ui: AudioDelayUI = {
  title: 'Mesafe ve Sıcaklığa Göre Ses Gecikmesi Hesaplayıcı',
  subtitle: 'PA gecikme hoparlörleri için ses yayılma gecikme süresini, akustik faz kaymasını, örnek sayısını ve SPL zayıflamasını hesaplayın.',
  unitSystemLabel: 'Birim Sistemi',
  unitMetric: 'Metrik (m, °C)',
  unitImperial: 'İngiliz (ft, °F)',
  distanceLabel: 'Gecikme Hoparlörüne Mesafe',
  temperatureLabel: 'Ortam Hava Sıcaklığı',
  humidityLabel: 'Bağıl Nem',
  sampleRateLabel: 'Konsol Örnekleme Hızı',
  presetsTitle: 'Hızlı Senaryo Ön Ayarları',
  presetSummerFestival: 'Yaz Festivali (35°C, 40m)',
  presetIndoorConcert: 'Kapalı Salon Konseri (20°C, 25m)',
  presetTheater: 'Akustik Tiyatro (22°C, 15m)',
  presetWinterOutdoor: 'Kış Açık Hava Etkinliği (5°C, 50m)',
  resultDelayMs: 'Gecikme Süresi',
  resultSamples: 'Dijital Örnekler',
  resultSpeed: 'Ses Hızı',
  resultSplLoss: 'SPL Zayıflaması',
  phaseStatusLabel: 'Akustik Faz Hizalama Durumu',
  statusDirectZone: 'Doğrudan Dalga Cephesi Senkronizasyonu',
  statusHaasZone: 'Haas Öncelik Bölgesi',
  statusEchoZone: 'Fark Edilebilir Eko Bölgesi',
  statusExtremeZone: 'Kritik Gecikme Sapması',
  advicePhaseAligned: 'Sinyaller 5ms içinde akustik olarak senkronizedir. Minimum gecikme işlemi gereklidir.',
  adviceMinorHaas: 'Ses Haas bölgesine (5-35ms) ulaşır. Doğal konumlandırma ana sahnede kalır.',
  adviceHaasDelayNeeded: 'Gecikme kulesi belirgin ekoyu önlemek için kesin zaman offseti gerektirir.',
  adviceCriticalDelayNeeded: 'Yüksek gecikme sapması. Tarak filtrelemeyi önlemek için hassas örnek gecikmesi uygulayın.',
  unitMeters: 'm',
  unitFeet: 'ft',
  unitCelsius: '°C',
  unitFahrenheit: '°F',
  mainSpeakerLabel: 'Ana PA',
  delaySpeakerLabel: 'Gecikme Kulesi',
  audienceLabel: 'Seyirci Bölgesi',
  haasZoneLegend: 'Haas Bölgesi (5-35ms)',
};

const faq: FAQItem[] = [
  {
    question: 'Ses gecikmesi hesaplanırken hava sıcaklığı neden önemlidir?',
    answer: 'Havadaki ses hızı doğrudan sıcaklığa bağlıdır. 0 santigrat derecede ses saniyede 331.3 metre hızla ilerlerken 30 santigrat derecede yaklaşık 349 metreye yükselir.',
  },
];

const howTo: HowToStep[] = [
  {
    name: 'Fiziksel Mesafeyi Ölçün',
    text: 'Lazer mesafe ölçer kullanarak ana PA ile gecikme kulesi arasındaki mesafeyi ölçün.',
  },
];

const seo: ToolLocaleContent<AudioDelayUI>['seo'] = [
  {
    type: 'summary',
    title: 'Akustik Gecikme Hizalama Özellikleri',
    items: [
      'Sıcaklık ve neme dayalı hassas ses hızı hesaplaması',
      'Dijital konsol örneklerine anında dönüştürme',
      'Haas etkisi bölgesi ve faz hizalama değerlendirmesi',
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
  inLanguage: 'tr',
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
