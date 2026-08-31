import { bibliography } from '../bibliography';
import { createSchemas } from '../schema';
import type { VideoExportPlannerLocaleContent } from '../entry';
import type { VideoExportPlannerUI } from '../ui';

const ui: VideoExportPlannerUI = {
  workflowHint: 'Atur gambar, audio, dan durasi. Gulungan data di bawah mengubah pilihan tersebut menjadi perkiraan ekspor untuk enkoder Anda.',
  presetLabel: 'Mulai dengan prasetel pengiriman',
  presetYoutube: 'YouTube SDR',
  presetSocial: 'Media Sosial 1080p 60',
  presetMaster: 'Penyerahan Master 4K',
  sourceSettingsTitle: 'Pengaturan ekspor',
  resolutionLabel: 'Ukuran bingkai',
  frameRateLabel: 'Kecepatan bingkai',
  codecLabel: 'Kodek video',
  durationLabel: 'Durasi program',
  minutesUnit: 'menit',
  videoBitrateLabel: 'Bitrate video',
  audioBitrateLabel: 'Bitrate audio',
  overheadLabel: 'Overhead wadah',
  selectedOutputTitle: 'Ekspor terpilih',
  estimatedFileSizeLabel: 'Perkiraan ukuran berkas',
  totalDataRateLabel: 'Kecepatan data total',
  videoDataLabel: 'Aliran video',
  audioDataLabel: 'Aliran audio',
  containerOverheadLabel: 'Overhead wadah',
  dataReelLabel: 'Gulungan data yang menampilkan ekspor terpilih dari waktu ke waktu',
  comparisonTitle: 'Titik awal kodek',
  codecColumn: 'Kodek',
  suggestedVideoColumn: 'Kecepatan video disarankan',
  estimatedSizeColumn: 'Perkiraan ukuran',
  planningNote: 'Baris kodek adalah panduan perencanaan dan bukan jaminan kualitas yang identik.',
  statusReady: 'Siap memperkirakan',
  statusCheck: 'Periksa asumsi yang ditandai',
  warningDuration: 'Tambahkan durasi lebih besar dari nol untuk memperkirakan berkas.',
  warningVideoBitrate: 'Bitrate video sangat rendah untuk resolusi ini. Periksa kompresi visual.',
  warningAudioBitrate: 'Bitrate audio di atas rentang umum. Pastikan ruang ekstra memang diinginkan.',
  warningOverhead: 'Overhead wadah tinggi. Verifikasi metadata sebelum memesan ruang penyimpanan.',
  resolution480: '480p 854 x 480',
  resolution720: '720p 1280 x 720',
  resolution1080: '1080p 1920 x 1080',
  resolution1440: '1440p 2560 x 1440',
  resolution2160: '4K 3840 x 2160',
  codecH264: 'H.264 AVC',
  codecH265: 'H.265 HEVC',
  codecAv1: 'AV1',
  faqTitle: 'Pertanyaan perencana ekspor video',
  bibliographyTitle: 'Sumber',
};

const faq = [
  { question: 'Bagaimana perkiraan ukuran berkas video dihitung?', answer: 'Perencana menjumlahkan bitrate video dan audio, mengalikan kecepatan data gabungan dengan durasi, lalu menerapkan persentase overhead wadah.' },
  { question: 'Mengapa tabel kodek menampilkan titik awal yang berbeda?', answer: 'H.264, H.265, dan AV1 mencapai efisiensi kompresi yang berbeda pada materi yang sama.' },
  { question: 'Haruskah saya menggunakan bitrate yang disarankan sebagai syarat mutlak?', answer: 'Tidak. Gunakan sebagai nilai uji awal untuk materi dan enkoder Anda.' },
  { question: 'Apakah perencana ini memprediksi ukuran setelah diunggah ke platform?', answer: 'Ini memperkirakan ukuran berkas sebelum platform melakukan enkode ulang.' },
];

const howTo = [
  { name: 'Pilih format pengiriman', text: 'Pilih ukuran bingkai dan kecepatan bingkai yang sesuai dengan urutan editan Anda.' },
  { name: 'Pilih kodek dan bitrate', text: 'Pilih kodek lalu masukkan bitrate video dan audio.' },
  { name: 'Atur durasi dan overhead', text: 'Masukkan durasi dalam menit dan berikan cadangan overhead wadah.' },
  { name: 'Bandingkan dan pesan ruang', text: 'Baca perkiraan ukuran lalu siapkan ruang penyimpanan yang cukup.' },
];

const seo = [
  { type: 'summary' as const, title: 'Rencanakan penyimpanan sebelum mengekspor video', items: ['Perkirakan ukuran berkas berdasarkan durasi dan bitrate', 'Bandingkan skenario untuk H.264, H.265, dan AV1', 'Pisahkan overhead video, audio, dan wadah', 'Keluarkankan kompresi ulang platform dari perhitungan'] },
  { type: 'title' as const, text: 'Apa yang ditunjukkan oleh perkiraan ekspor', level: 2 as const },
  { type: 'paragraph' as const, html: 'Ekspor video adalah aliran bit berdurasi. Perencana menggabungkan bitrate video dan audio lalu menghitung ukuran berkas total dalam byte.' },
  { type: 'title' as const, text: 'Cara memilih bitrate awal', level: 2 as const },
  { type: 'paragraph' as const, html: 'Mulailah dari spesifikasi platform tujuan. Selalu uji sampel pendek sebelum mengekspor seluruh proyek.' },
  { type: 'list' as const, items: ['Samakan frame rate dengan urutan asli.', 'Bedakan Mbps dan kbps.', 'Siapkan ruang tambahan untuk berkas sumber dan rendering sementara.', 'Periksa sampel dalam ukuran pemutaran sebenarnya.'] },
  { type: 'title' as const, text: 'Membaca perbandingan kodek', level: 2 as const },
  { type: 'paragraph' as const, html: 'Tabel kodek membantu perencanaan penyimpanan. Hasil akhir bergantung pada kompleksitas adegan.' },
  { type: 'tip' as const, title: 'Batas perkiraan', html: 'Perkiraan tidak menjamin kualitas visual akhir. Uji sampel sebelum pengiriman.' },
];

const title = 'Perencana Bitrate dan Ukuran File Ekspor Video';
const description = 'Perkirakan ukuran berkas video berdasarkan durasi dan bitrate serta bandingkan titik awal untuk H.264, H.265, dan AV1.';

export const content: VideoExportPlannerLocaleContent = {
  slug: 'perencana-bitrate-ukuran-file-ekspor-video', title, description, ui, seo, faq, bibliography, howTo,
  schemas: createSchemas({ title, description, faq, howTo, language: 'id' }),
};
