import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { FAQItem, HowToStep, ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';
import type { FilmReciprocityFailureCalculatorUI } from '../ui';

const slug = 'kalkulator-kegagalan-resiprositas-film-fotografi';
const title = 'Kalkulator Kegagalan Resiprositas Film Fotografi';
const description = 'Koreksi pajanan panjang pada fotografi film analog dengan faktor resmi produsen seperti ILFORD dan KENTMERE.';

const ui: FilmReciprocityFailureCalculatorUI = {
  faqTitle: 'Pertanyaan tentang kegagalan resiprositas film',
  bibliographyTitle: 'Sumber',
  studyLabel: 'Studi pajanan panjang',
  studyTitle: 'Biarkan film mengambil waktunya',
  studyText: 'Lightmeter mengukur cahaya yang datang secara instan. Emulsi butuh waktu lebih lama untuk menghasilkan kerapatan yang sama.',
  filmLabel: 'Pilih jenis film',
  filmHint: 'Gunakan faktor resmi yang diterbitkan untuk film ILFORD atau KENTMERE pilihan.',
  measuredTimeLabel: 'Masukkan hasil ukur lightmeter',
  measuredTimeHint: 'Koreksi berlaku untuk waktu di atas 1 detik.',
  secondsUnit: 'detik',
  filmMenuLabel: 'Menu pilihan film',
  presetsLabel: 'Preset catatan lapangan',
  presetShort: 'Batas resiprositas',
  presetNight: 'Jalanan malam',
  presetDeepNight: 'Malam pekat',
  resultLabel: 'Pajanan terkoreksi',
  correctedTimeLabel: 'Waktu akhir yang disarankan',
  addedTimeLabel: 'Waktu tambahan',
  correctionStopsLabel: 'Kompensasi stop (EV)',
  correctionFactorLabel: 'Faktor film',
  noCorrection: 'Tidak memerlukan koreksi',
  correctionNeeded: 'Koreksi resiprositas aktif',
  longExposure: 'Area pajanan panjang',
  meterTimeLabel: 'Waktu ukur',
  filmTimeLabel: 'Waktu penyesuaian',
  exposurePathLabel: 'Visualisasi rentang pajanan',
  exposurePathText: 'Pita film memanjang dari waktu ukur awal hingga waktu terkoreksi akhir.',
  formulaLabel: 'Persamaan kerja',
  formulaText: 'Waktu terkoreksi = waktu ukur dipangkatkan faktor film.',
  manufacturerNote: 'Faktor berasal dari informasi teknis HARMAN. Gunakan hasil ini sebagai patokan awal uji coba.',
  resetLabel: 'Riset kalkulasi',
  invalidTime: 'Masukkan waktu lebih dari nol detik.',
  sourceLabel: 'Catatan produsen',
};

const faq: FAQItem[] = [
  {
    question: 'Apa itu kegagalan resiprositas dalam fotografi film?',
    answer: 'Kegagalan resiprositas adalah penurunan efisiensi kepekaan film saat menggunakan pajanan waktu panjang (long exposure). Jumlah cahaya yang sama yang diterima dalam durasi lebih lama menghasilkan kerapatan gambar lebih rendah dari perkiraan lightmeter.',
  },
  {
    question: 'Bagaimana alat ini mengkalkulasi waktu koreksi?',
    answer: 'Alat ini menggunakan formula HARMAN: waktu terkoreksi (Tc) sama dengan waktu ukur (Tm) dipangkatkan faktor P film tersebut. Waktu 1 detik atau kurang tidak memerlukan penyesuaian.',
  },
  {
    question: 'Mengapa setiap jenis film memiliki faktor yang berbeda?',
    answer: 'Respon kristal perak halida berlainan tergantung struktur emulsi. HARMAN menerbitkan faktor khusus yang berbeda untuk film HP5+, FP4+, DELTA, dan KENTMERE.',
  },
  {
    question: 'Apakah hasil kalkulasi menjamin klise negatif sempurna?',
    answer: 'Tidak. Pajanan sangat panjang dipengaruhi akurasi pengukur cahaya, kondisi pencucian, dan kontras objek. Gunakan hasil ini sebagai acuan praktis awal dan lakukan bracketing.',
  },
];

const howTo: HowToStep[] = [
  { name: 'Pilih jenis film', text: 'Pilih film yang Anda gunakan agar kalkulator memakai faktor resiprositas resminya.' },
  { name: 'Masukkan durasi ukur', text: 'Ketik durasi detik yang ditunjukkan oleh alat pengukur cahaya (lightmeter).' },
  { name: 'Lihat hasil koreksi', text: 'Atur rana kamera sesuai dengan waktu terkoreksi yang ditampilkan.' },
  { name: 'Lakukan bracketing pajanan', text: 'Untuk pemotretan malam yang sangat panjang, ambil beberapa foto tambahan di sekitar durasi kalkulasi.' },
];

const seo: ToolLocaleContent<FilmReciprocityFailureCalculatorUI>['seo'] = [
  {
    type: 'summary',
    title: 'Koreksi pajanan panjang yang terdokumentasi',
    items: [
      'Menerapkan faktor resmi produsen untuk 11 jenis film hitam putih ILFORD dan KENTMERE',
      'Membandingkan hasil bacaan lightmeter dengan waktu nyata yang dibutuhkan emulsi film',
      'Menampilkan durasi tambahan detik, kenaikan stop EV, dan alur visual pajanan',
      'Dilengkapi tiga preset praktis untuk mempermudah pemotretan di malam hari',
    ],
  },
  { type: 'title', text: 'Mengapa pajanan panjang membutuhkan koreksi resiprositas', level: 2 },
  {
    type: 'paragraph',
    html: 'Pada kecepatan rana normal, hukum resiprositas berlaku di mana pajanan adalah perkalian intensitas cahaya dengan waktu. Namun pada durasi panjang, emulsi film kehilangan efisiensi pembentukan bayangan laten. Lightmeter memberikan durasi yang tepat secara fisik tetapi terlalu pendek secara kimiawi.',
  },
  { type: 'title', text: 'Persamaan produsen di balik perhitungan', level: 2 },
  {
    type: 'table',
    headers: ['Jenis Film', 'Faktor Resmi', 'Contoh pada 10 Detik'],
    rows: [
      ['ILFORD HP5+', '1.31', '20.4 detik'],
      ['ILFORD FP4+', '1.26', '18.2 detik'],
      ['ILFORD SFX 200', '1.43', '26.9 detik'],
      ['KENTMERE 400', '1.30', '20.0 detik'],
    ],
  },
  {
    type: 'paragraph',
    html: 'Kalkulator ini menggunakan rumus Tc = Tm<sup>P</sup>, dengan Tm sebagai waktu ukur dalam detik, Tc sebagai waktu terkoreksi, dan P sebagai faktor emulsi dari HARMAN. Di bawah atau sama dengan 1 detik tidak memerlukan kompensasi.',
  },
  {
    type: 'tip',
    title: 'Gunakan hasil sebagai titik awal pemotretan',
    html: 'Pajanan panjang dipengaruhi oleh banyak variabel lain selain resiprositas. Toleransi pembacaan alat, kontras pemandangan, dan proses pencucian memengaruhi kerapatan klise. Lakukan bracketing pajanan pada pemotretan penting.',
  },
  { type: 'title', text: 'Kapan menerapkan koreksi resiprositas film', level: 2 },
  {
    type: 'list',
    items: [
      '<strong>Gunakan faktor resmi:</strong> Pastikan jenis emulsi sesuai dengan lembar data teknis produsen.',
      '<strong>Pertahankan konsistensi cuci:</strong> Jenis developer dan teknik agitasi memengaruhi kontras klise.',
      '<strong>Lakukan bracketing durasi:</strong> Semakin lama durasi pemotretan, semakin penting melakukan uji coba variasi durasi.',
    ],
  },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })),
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

export const content: ToolLocaleContent<FilmReciprocityFailureCalculatorUI> = {
  slug,
  title,
  description,
  ui,
  seo,
  faq,
  bibliography,
  howTo,
  schemas: [appSchema, faqSchema, howToSchema],
};
