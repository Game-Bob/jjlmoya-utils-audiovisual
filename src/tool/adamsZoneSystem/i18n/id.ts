import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { FAQItem, HowToStep, ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';
import type { AdamsZoneSystemUI } from '../ui';

const slug = 'visualisator-sistem-zona-ansel-adams-zona-pencahayaan';
const title = 'Visualisator Sistem Zona Ansel Adams Zona Pencahayaan';
const description = 'Jelajahi Zona 0 hingga IX, tempatkan nada terukur dengan perubahan stop yang tepat, dan hubungkan keputusan pencahayaan dengan pencucian normal, N minus, dan N plus.';

const ui: AdamsZoneSystemUI = {
  faqTitle: 'Pertanyaan tentang Sistem Zona',
  bibliographyTitle: 'Sumber',
  orientationTitle: 'Penempatan zona',
  orientationText: 'Pilih nada yang Anda ukur di adegan, pilih zona tujuan yang diinginkan, dan gunakan perubahan stop sebagai petunjuk pencahayaan. Catatan pencucian membantu melindungi area terang atau membuka bayangan.',
  measuredToneLabel: 'Nada terukur pada adegan',
  targetPlacementLabel: 'Place that tone at',
  developmentLabel: 'Niat pencucian film',
  normalDevelopment: 'Normal',
  minusDevelopment: 'N minus',
  plusDevelopment: 'N plus',
  presetsLabel: 'Mulai dengan catatan lapangan',
  presetShadow: 'Bayangan bertekstur',
  presetSkin: 'Kulit cerah',
  presetSnow: 'Salju di bawah sinar matahari',
  presetNight: 'Bayangan malam',
  zoneStripLabel: 'Pita zona dari hitam ke putih',
  meterBaselineLabel: 'Referensi pengukur cahaya: Zona V',
  selectedToneLabel: 'Nada terukur',
  placementResultLabel: 'Hasil penempatan',
  exposureShiftLabel: 'Pergeseran pencahayaan dari abu-abu tengah',
  tonalDistanceLabel: 'Jarak dari nada terukur',
  luminanceLabel: 'Luminansi relatif',
  stopsFromMiddleLabel: 'Stop dari Zona V',
  developmentAdviceLabel: 'Pembacaan klise',
  techniqueLabel: 'Petunjuk kamar gelap',
  resetLabel: 'Atur ulang contoh',
  meterAssumption: 'Pengukur cahaya pantul menempatkan pembacaan apa pun pada abu-abu tengah Zona V kecuali Anda melakukan kompensasi.',
  zonePrefix: 'Zona',
  zoneNames: 'Hitam murni|Hampir hitam|Bayangan dalam|Bayangan bertekstur|Nada tengah gelap|Abu-abu tengah|Nada tengah terang|Area terang bertekstur|Area terang berkilau|Hampir putih',
  zoneDescriptions: 'Hitam maksimal tanpa tekstur yang terlihat.|Pemisahan pertama dari hitam dengan hampir tanpa tekstur.|Petunjuk tekstur pertama pada bayangan gelap penting.|Tekstur bayangan yang berguna dan jangkar penempatan umum.|Bayangan terbuka dan dedaunan gelap dengan bentuk jelas.|Titik referensi netral pengukur cahaya.|Kulit cerah, batu lapuk, dan dedaunan cerah.|Tekstur cerah yang harus tetap terfoto atau terbaca.|Nada sangat cerah dengan sedikit tekstur tersisa.|Hampir putih murni dengan hanya jejak pemisahan.',
  increaseExposure: 'Buka pencahayaan sebesar jumlah yang ditampilkan untuk menaikkan pembacaan ke zona yang dipilih.',
  decreaseExposure: 'Kurangi pencahayaan sebesar jumlah yang ditampilkan untuk menjaga pembacaan di zona yang dipilih.',
  holdExposure: 'Pertahankan pembacaan pengukur cahaya tanpa perubahan karena targetnya adalah Zona V.',
  protectHighlights: 'Kontrol area terang',
  openShadows: 'Pemisahan bayangan',
  balancedPlacement: 'Penempatan seimbang',
  normalAdvice: 'Pencucian normal menjaga kontras adegan mendekati rentang terukur.',
  minusAdvice: 'Pencucian N minus memadatkan rentang subjek yang cerah dan menjaga area terang tetap dapat dicetak.',
  plusAdvice: 'Pencucian N plus memperluas rentang subjek yang sempit dan memberikan pemisahan lebih baik pada bayangan penting.',
};

const faq: FAQItem[] = [
  {
    question: 'Apa yang diukur oleh Sistem Zona?',
    answer: 'Sistem Zona adalah metode untuk memvisualisasikan dan mengontrol rentang nada foto dari hitam pekat hingga putih cerah. Ini menghubungkan kecerahan subjek terukur dengan zona akhir dan keputusan pencucian.',
  },
  {
    question: 'Mengapa pengukur cahaya mulai dari Zona V?',
    answer: 'Pengukur cahaya pantul dikalibrasi untuk memperlakukan pembacaan rata-ratanya sebagai abu-abu tengah netral. Jika Anda ingin bayangan tetap gelap atau subjek terang tetap cerah, Anda harus mengompensasi jauh dari Zona V.',
  },
  {
    question: 'Berapa stop yang memisahkan setiap zona?',
    answer: 'Zona penuh yang berdekatan terpisah satu stop penuh. Berpindah dari Zona V ke Zona VII membutuhkan dua stop pencahayaan lebih banyak.',
  },
  {
    question: 'Apa arti N minus dan N plus?',
    answer: 'Keduanya adalah penyesuaian pencucian film untuk mengelola kontras. N minus mengurangi kontras klise untuk subjek berlapisan kontras tinggi, sedangkan N plus meningkatkan kontras untuk subjek bertingkat datar.',
  },
];

const howTo: HowToStep[] = [
  { name: 'Pilih nada terukur', text: 'Pilih zona yang paling menggambarkan bagian adegan yang Anda ukur dengan pengukur cahaya.' },
  { name: 'Pilih penempatan akhir', text: 'Ketuk zona tempat Anda ingin nada tersebut muncul di klise atau cetakan.' },
  { name: 'Terapkan pergeseran pencahayaan', text: 'Gunakan perbedaan stop yang ditampilkan untuk menyesuaikan diafragma atau kecepatan rana.' },
  { name: 'Sesuaikan niat pencucian', text: 'Gunakan catatan pencucian sebagai panduan durasi pemrosesan di kamar gelap.' },
];

const seo: ToolLocaleContent<AdamsZoneSystemUI>['seo'] = [
  {
    type: 'summary',
    title: 'Panduan lapangan visual Sistem Zona',
    items: [
      'Jelajahi setiap nada dari Zona 0 hingga Zona IX pada pita nada yang mudah dibaca',
      'Terjemahkan penempatan zona yang diinginkan menjadi koreksi stop yang tepat dari Zona V',
      'Bandingkan kecerahan terukur dengan nada yang ingin dipertahankan pada cetakan akhir',
      'Gunakan N minus, normal, dan N plus sebagai alat manajemen kontras secara sadar',
    ],
  },
  { type: 'title', text: 'Cara kerja Sistem Zona Ansel Adams', level: 2 },
  {
    type: 'paragraph',
    html: 'Sistem Zona membagi rentang kecerahan kontinu menjadi sepuluh zona referensi praktis. Zona V adalah referensi abu-abu tengah dari pengukur cahaya.',
  },
  { type: 'title', text: 'Membaca pencahayaan dari pita zona', level: 2 },
  {
    type: 'table',
    headers: ['Penempatan', 'Tampilan visual', 'Tindakan pengukur cahaya'],
    rows: [
      ['Zona II', 'Bayangan dalam dengan tekstur yang nyaris tak terlihat', 'Kurangi pencahayaan sebesar 3 stop dari Zona V'],
      ['Zona III', 'Tekstur bayangan penting yang dapat dicetak', 'Kurangi pencahayaan sebesar 2 stop dari Zona V'],
      ['Zona V', 'Referensi abu-abu tengah netral', 'Biarkan pembacaan pengukur cahaya tanpa perubahan'],
      ['Zona VI', 'Nada tengah terang seperti kulit cerah', 'Tambah pencahayaan sebesar 1 stop dari Zona V'],
      ['Zona VII', 'Tekstur cerah yang perlu dipertahankan', 'Tambah pencahayaan sebesar 2 stop dari Zona V'],
    ],
  },
  {
    type: 'tip',
    title: 'Gunakan penempatan sebagai keputusan kreatif',
    html: 'Jangan anggap pembacaan pengukur cahaya sebagai perintah untuk membuat semuanya menjadi abu-abu. Pilih nada utama dan tempatkan secara sengaja.',
  },
  { type: 'title', text: 'Saat pencucian mengubah kontras', level: 2 },
  {
    type: 'list',
    items: [
      '<strong>Pencucian normal:</strong> Menjaga kontras subjek terukur tetap dalam batas standar klise.',
      '<strong>Pencucian N minus:</strong> Memadatkan kontras subjek yang sangat terang untuk mencegah area terang menjadi terlalu putih.',
      '<strong>Pencucian N plus:</strong> Memperluas kontras subjek yang datar untuk pemisahan bayangan yang lebih baik.',
    ],
  },
  {
    type: 'glossary',
    items: [
      { term: 'Zona', definition: 'Rentang nada praktis yang terpisah satu stop pencahayaan dari zona di sebelahnya.' },
      { term: 'Penempatan', definition: 'Pilihan sengaja atas zona akhir tempat nada subjek terukur akan ditampilkan.' },
      { term: 'Abu-abu tengah', definition: 'Referensi netral Zona V yang digunakan oleh pengukur cahaya pantul.' },
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
  step: howTo.map((step) => ({ '@type': 'HowToStep', name: step.name, text: step.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'PhotographyApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'id',
};

export const content: ToolLocaleContent<AdamsZoneSystemUI> = {
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
