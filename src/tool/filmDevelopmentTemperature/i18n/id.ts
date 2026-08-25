import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { FilmDevelopmentTemperatureUI } from '../ui';
import { bibliography } from '../bibliography';

const ui: FilmDevelopmentTemperatureUI = {
  faqTitle: 'Pertanyaan suhu pencucian film',
  bibliographyTitle: 'Referensi utama',
  chooseDocumentedCombination: 'Pilih kombinasi film dan pengembang yang terdokumentasi',
  filmLabel: 'Jenis film',
  developerLabel: 'Cairan pengembang',
  dilutionLabel: 'Pengenceran',
  temperatureLabel: 'Suhu cairan pengembang',
  temperatureHelp: 'Masukkan suhu cairan pengembang dalam tangki. Panduan ini berpatokan pada waktu resmi pada suhu 20 °C.',
  unitSwitchLabel: 'Satuan suhu',
  metricLabel: 'Metrik °C',
  imperialLabel: 'Imperial °F',
  currentReadingLabel: 'Pembacaan kamar gelap',
  baseTimeLabel: 'Pada suhu 20 °C',
  adjustedTimeLabel: 'Waktu awal terpenuhi',
  temperatureGuideLabel: 'Catatan lapangan suhu',
  temperatureGuideHelp: 'Panduan praktis di sekitar suhu yang diukur. Baris yang disorot adalah hasil pembacaan Anda.',
  sourceLabel: 'Kombinasi terverifikasi',
  eiLabel: 'Pengaturan ISO meter',
  statusCool: 'Cairan lebih dingin',
  statusSteady: 'Mendekati standar',
  statusWarm: 'Cairan lebih hangat',
  warningShortTime: 'Waktu kurang dari 5 menit meningkatkan risiko pengembangan tidak merata. Pilih alur kerja terdokumentasi atau perpanjang waktu hanya dengan pengujian mandiri.',
  warningOutOfRange: 'Ini adalah batas rentang panduan. Pertahankan suhu pengembang tetap stabil dan periksa data manufaktur.',
  guideNotice: 'Ini adalah panduan awal, bukan jaminan mutlak. Agitasi, peralatan, kontras target, dan proses pribadi Anda dapat mengubah hasil akhir.',
  resetLabel: 'Kembalikan baris pertama terverifikasi',
  minutesLabel: 'menit',
  secondsLabel: 'detik',
  currentBadge: 'Saat ini',
  belowFiveMinutes: 'Di bawah 5 menit',
  tableTemperature: 'Suhu',
  tableTime: 'Waktu panduan',
  tableDifference: 'Selisih dari 20 °C',
  currentRow: 'Saat ini',
};

const softwareApplication: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Kalkulator Waktu Cuci Film Berdasarkan Suhu',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  description: 'Sesuaikan waktu pencucian film hitam putih berdasarkan suhu cairan pengembang yang diukur.',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
};

const faqPage: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Suhu berapa yang digunakan kalkulator sebagai acuan dasar?', acceptedAnswer: { '@type': 'Answer', text: 'Setiap kombinasi pencucian diawali dari waktu standar produsen pada suhu 20 °C lalu disesuaikan dengan suhu pengembang saat ini.' } },
    { '@type': 'Question', name: 'Apakah waktu penyesuaian ini terjamin pasti akurat?', acceptedAnswer: { '@type': 'Answer', text: 'Tidak. Hasilnya adalah panduan awal praktis. Agitasi, jenis tangki, kesegaran cairan, dan target kontras menentukan hasil akhir.' } },
    { '@type': 'Question', name: 'Mengapa ada peringatan untuk waktu di bawah 5 menit?', acceptedAnswer: { '@type': 'Answer', text: 'Waktu cuci yang sangat singkat menyisakan sedikit ruang untuk penuangan dan pengurasan cairan, sehingga risiko hasil tidak merata menjadi lebih tinggi.' } },
    { '@type': 'Question', name: 'Apa yang harus dilakukan jika kombinasi film dan pengembang tidak tercantum?', acceptedAnswer: { '@type': 'Answer', text: 'Gunakan lembar data teknis produsen film atau tabel pencucian terpercaya. Alat ini tidak membuat perkiraan tanpa data resmi.' } },
  ],
};

const howTo: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Cara menyesuaikan waktu cuci film berdasarkan suhu',
  step: [
    { '@type': 'HowToStep', name: 'Pilih jenis film', text: 'Pilih film hitam putih yang terpasang di dalam tangki pencucian Anda.' },
    { '@type': 'HowToStep', name: 'Pilih pengembang dan pengenceran', text: 'Pilih kombinasi cairan pengembang dan tingkat pengenceran resmi yang sesuai.' },
    { '@type': 'HowToStep', name: 'Ukur suhu pengembang', text: 'Ukur dan masukkan suhu cairan pengembang sesungguhnya sebelum mulai.' },
    { '@type': 'HowToStep', name: 'Gunakan waktu acuan', text: 'Gunakan hasil kalkulasi waktu sebagai acuan awal pencucian di kamar gelap Anda.' },
  ],
};

export const content: ToolLocaleContent<FilmDevelopmentTemperatureUI> = {
  slug: 'kalkulator-waktu-cuci-film-kompensasi-suhu',
  title: 'Kalkulator Waktu Cuci Film Berdasarkan Suhu',
  description: 'Sesuaikan waktu pencucian film hitam putih berdasarkan suhu cairan pengembang yang diukur, lengkap dengan tabel referensi akurat.',
  ui,
  seo: [
    { type: 'title', level: 2, text: 'Cara menyesuaikan waktu cuci film hitam putih terhadap perubahan suhu' },
    { type: 'paragraph', html: 'Pilih kombinasi jenis film, pengembang, dan tingkat pengenceran resmi dari tabel yang tersedia, lalu masukkan nilai suhu cairan pengembang saat ini. Kalkulator akan mengambil acuan waktu standar pada 20 °C dan memberikan penyesuaian waktu yang praktis untuk pencucian kamar gelap.' },
    { type: 'title', level: 3, text: 'Gunakan hasil perhitungan sebagai acuan awal eksperimen' },
    { type: 'paragraph', html: 'Perubahan suhu secara langsung memengaruhi aktivitas kimiawi pengembang: cairan yang lebih hangat membutuhkan waktu lebih singkat, sedangkan cairan yang lebih dingin membutuhkan waktu lebih lama. Tabel panduan menampilkan rentang acuan di sekitar nilai suhu pencucian Anda.' },
    { type: 'tip', title: 'Pertahankan konsistensi proses kamar gelap Anda', html: 'Jangan anggap waktu hasil kalkulasi sebagai patokan kaku. Pola agitasi, bentuk tangki, usia cairan pengembang, dan preferensi kontras negatif Anda tetap menjadi faktor penentu utama hasil akhir.' },
    { type: 'title', level: 3, text: 'Pentingnya menggunakan kombinasi resmi terverifikasi' },
    { type: 'list', items: ['Pasangan film dan cairan pengembang menentukan karakter grain, ketajaman, dan ISO efektif.', 'Tingkat pengenceran mengontrol kecepatan reaksi kimia dan tidak bisa disimpulkan secara sembarangan dari rasio lain.', 'Waktu cuci di bawah 5 menit membutuhkan kehati-hatian ekstra karena sedikit perbedaan saat penuangan cairan berampak besar pada kontras.'] },
  ],
  faq: [
    { question: 'Suhu berapa yang digunakan kalkulator sebagai acuan dasar?', answer: 'Setiap kombinasi pencucian diawali dari waktu standar produsen pada suhu 20 °C lalu disesuaikan dengan suhu pengembang saat ini.' },
    { question: 'Apakah waktu penyesuaian ini terjamin pasti akurat?', answer: 'Tidak. Hasilnya adalah panduan awal praktis. Agitasi, jenis tangki, kesegaran cairan, dan target kontras menentukan hasil akhir.' },
    { question: 'Mengapa ada peringatan untuk waktu di bawah 5 menit?', answer: 'Waktu cuci yang sangat singkat menyisakan sedikit ruang untuk penuangan dan pengurasan cairan, sehingga risiko hasil tidak merata menjadi lebih tinggi.' },
    { question: 'Apa yang harus dilakukan jika kombinasi film dan pengembang tidak tercantum?', answer: 'Gunakan lembar data teknis produsen film atau tabel pencucian terpercaya. Alat ini tidak membuat perkiraan tanpa data resmi.' },
  ],
  bibliography,
  howTo: [
    { name: 'Pilih jenis film', text: 'Pilih film hitam putih yang terpasang di dalam tangki pencucian Anda.' },
    { name: 'Pilih pengembang dan pengenceran', text: 'Pilih kombinasi cairan pengembang dan tingkat pengenceran resmi yang sesuai.' },
    { name: 'Ukur suhu pengembang', text: 'Ukur dan masukkan suhu cairan pengembang sesungguhnya sebelum mulai.' },
    { name: 'Gunakan waktu acuan', text: 'Gunakan hasil kalkulasi waktu sebagai acuan awal pencucian di kamar gelap Anda.' },
  ],
  schemas: [softwareApplication, faqPage, howTo],
};
