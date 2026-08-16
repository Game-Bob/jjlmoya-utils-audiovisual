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
  {
    question: 'Canlı ses sistemlerinde Haas Etkisi nedir?',
    answer: 'Haas Etkisi (öncelik etkisi), ikincil sinyaller 5 ila 35 milisaniye içinde benzer bir yoğunlukla ulaştığında insan işitmesinin sesi ilk ulaşan sinyalin yönüne göre konumlandırdığını belirtir.',
  },
  {
    question: 'Gecikme süresi dijital konsol örneklerine nasıl dönüştürülür?',
    answer: 'Saniye cinsinden gecikme süresini dijital konsolun örnekleme hızı ile çarpın. Örneğin 48 kHz de 50 milisaniye gecikme 2400 dijital örneğe eşittir.',
  },
];

const howTo: HowToStep[] = [
  {
    name: 'Fiziksel Mesafeyi Ölçün',
    text: 'Lazer mesafe ölçer kullanarak ana PA ile gecikme kulesi arasındaki mesafeyi ölçün.',
  },
  {
    name: 'Ortam Hava Sıcaklığını Kontrol Edin',
    text: 'Kesin yayılma hızını belirlemek için mekanın mevcut hava sıcaklığını girin.',
  },
  {
    name: 'Konsol Örnekleme Hızını Seçin',
    text: 'Dijital konsolunuzun çalışma örnekleme hızını 44.1 kHz, 48 kHz, 96 kHz veya 192 kHz olarak ayarlayın.',
  },
  {
    name: 'Hesaplanan Gecikmeyi Uygulayın',
    text: 'Hoparlör işlemcisine milisaniye veya örnek cinsinden gecikme süresini girin.',
  },
];

const seo: ToolLocaleContent<AudioDelayUI>['seo'] = [
  {
    type: 'summary',
    title: 'Akustik Gecikme Hizalama Özellikleri',
    items: [
      'Sıcaklık ve neme dayalı hassas ses hızı hesaplaması',
      'Dijital konsol örneklerine anında dönüştürme (44.1k, 48k, 96k, 192k)',
      'Haas etkisi bölgesi ve faz hizalama değerlendirmesi',
      'Desibel cinsinden ses basınç seviyesi (SPL) zayıflama tahmini',
    ],
  },
  { type: 'title', text: 'Ses Yayılımı ve Atmosferik Termodinamik', level: 2 },
  {
    type: 'paragraph',
    html: 'Ses havada mekanik bir basınç dalgası olarak yayılır. Hızı esas olarak <code>c = 331.3 * sqrt(1 + T / 273.15)</code> formülüyle hesaplanan hava sıcaklığı tarafından yönetilir.',
  },
  {
    type: 'stats',
    items: [
      { value: '343.2 m/s', label: '20°C de Ses Hızı', icon: 'mdi:speedometer' },
      { value: '5-35 ms', label: 'Haas Öncelik Penceresi', icon: 'mdi:timer-sand' },
      { value: '48/96 kHz', label: 'Konsol Örnek Hassasiyeti', icon: 'mdi:sine-wave' },
    ],
    columns: 3,
  },
  { type: 'title', text: 'Akustik Faz Hizalaması ve Tarak Filtreleme Önleme', level: 3 },
  {
    type: 'paragraph',
    html: 'Konumsal olarak ayrılmış iki hoparlör kesin zaman düzeltmesi olmadan aynı sinyali yaydığında, dalga cepheleri faz farklarıyla çakışarak tarak filtrelemeye neden olur.',
  },
  {
    type: 'list',
    items: [
      '<strong>Zaman Hizalaması:</strong> Ana PA ile eşleşmesi için ikincil kuleleri geciktirir.',
      '<strong>Tarak Filtreleme Önleme:</strong> İşitilebilir spektrumdaki faz iptallerini ortadan kaldırır.',
      '<strong>Haas Konumlandırması:</strong> Ses kaynağı algısını ana sahnede tutar.',
      '<strong>Örnek Hassasiyeti:</strong> Çıkış matrisleri için kesin dijital örnek değerleri sağlar.',
    ],
    icon: 'mdi:check-circle',
  },
  {
    type: 'comparative',
    items: [
      {
        title: 'Doğrudan PA Hizalaması',
        description: 'Sesin kat ettiği mesafeye eşit fiziksel gecikme',
        icon: 'mdi:target',
        points: ['Mükemmel faz koheransı', 'İn-fill hoparlörler için ideal', 'Sıfır tarak filtreleme'],
      },
      {
        title: 'Haas Offset Hizalaması',
        description: 'Fiziksel gecikme artı 5 ila 15ms öncelik offseti',
        icon: 'mdi:music-clef-treble',
        points: ['Sahnede doğal konumlandırma', 'Daha iyi konuşma anlaşılabilirliği', 'Gecikme kuleleri için ideal'],
        highlight: true,
      },
    ],
    columns: 2,
  },
  {
    type: 'table',
    headers: ['Ses Sistem Senaryosu', 'Mesafe (m)', 'Sıcaklık (°C)', 'Gecikme Süresi (ms)', 'Örnekler (48kHz)'],
    rows: [
      ['Tiyatro Balkon Dolgusu', '15 m', '22 °C', '43.5 ms', '2.090 örnek'],
      ['Kapalı Salon Konseri', '25 m', '20 °C', '72.8 ms', '3.494 örnek'],
      ['Festival Ana Sahnesi', '40 m', '35 °C', '113.6 ms', '5.453 örnek'],
      ['Kış Açık Hava Etkinliği', '50 m', '5 °C', '149.5 ms', '7.176 örnek'],
    ],
  },
  {
    type: 'proscons',
    items: [
      {
        pro: 'Dijital konsollar için milisaniye altı örnek hassasiyeti',
        con: 'Fiziksel mesafenin hassas ölçümünü gerektirir',
      },
      {
        pro: 'Ortam hava sıcaklığını ve bağıl nemi dikkate alır',
        con: 'Açık havadaki rüzgar değişimleri sürekli izleme gerektirir',
      },
    ],
    proTitle: 'Avantajlar',
    conTitle: 'Dikkate Alınacaklar',
  },
  {
    type: 'glossary',
    items: [
      {
        term: 'Haas Etkisi',
        definition: 'İşitmenin sesi 5-35 ms içinde ilk ulaşan sinyale doğru konumlandırdığı psikoakustik olgu.',
      },
      {
        term: 'Tarak Filtreleme',
        definition: 'Bir sinyalin gecikmiş bir versiyonuyla toplanmasından kaynaklanan frekans yanıtı bozulması.',
      },
      {
        term: 'Örnekleme Hızı',
        definition: 'Bir dijital konsol veya DSP tarafından saniyede işlenen ses örneği sayısı.',
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
