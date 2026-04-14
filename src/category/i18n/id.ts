import type { CategoryLocaleContent } from '../../types';

export const content: CategoryLocaleContent = {
  slug: 'audiovisual-fotografi',
  title: 'Alat Audiovisual dan Fotografi',
  description: 'Alat dan kalkulator profesional untuk pembuat film, fotografer, dan pembuat konten audiovisual digital.',
  seo: [
    {
      type: 'summary',
      title: 'Alat Audiovisual Profesional',
      items: [
        'Kalkulator pintar untuk timelapse, efek, dan komposisi.',
        'Alat privasi untuk membersihkan metadata EXIF.',
        'Sinkronisasi subtitel dan pengeditan timing.',
        'Analisis resolusi, kualitas cetak, dan jarak pandang optimal.'
      ],
    },
    {
      type: 'title',
      text: 'Kotak Peralatan Profesional untuk Produksi Audiovisual',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Suite utilitas komprehensif kami menyelesaikan tantangan teknis yang paling umum di setiap tahap produksi audiovisual. Mulai dari perhitungan interval yang tepat untuk timelapse sinematik hingga perlindungan privasi melalui pembersihan metadata EXIF pada file multimedia Anda.',
    },
    {
      type: 'stats',
      items: [
        {
          value: '12+',
          label: 'Alat khusus',
          icon: 'mdi:cog'
        },
        {
          value: '100%',
          label: 'Perhitungan tepat',
          icon: 'mdi:chart-line'
        },
        {
          value: '0%',
          label: 'Data disimpan di server',
          icon: 'mdi:shield-check'
        }
      ],
      columns: 3
    },
    {
      type: 'title',
      text: 'Kategori Alat',
      level: 3,
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Timelapse dan Sinematik',
          description: 'Hitung interval, durasi total, dan frame rate untuk bidikan sinematik Anda.',
          icon: 'mdi:film',
          points: [
            'Perhitungan frame yang dibutuhkan',
            'Durasi dalam detik/menit',
            'Kecepatan pemutaran variabel'
          ]
        },
        {
          title: 'Privasi dan Metadata',
          description: 'Lindungi privasi Anda dengan menghapus data EXIF dan metadata sensitif dari file Anda.',
          icon: 'mdi:lock',
          points: [
            'Analisis data EXIF',
            'Pembersihan metadata lokasi',
            'Penghapusan informasi perangkat'
          ]
        },
        {
          title: 'Pengeditan Subtitel',
          description: 'Sinkronkan, sesuaikan, dan edit subtitel dengan presisi milidetik.',
          icon: 'mdi:text',
          points: [
            'Sinkronisasi real-time',
            'Pengeditan waktu masuk/keluar',
            'Penyesuaian delay global'
          ]
        },
        {
          title: 'Analisis Gambar',
          description: 'Hitung parameter teknis untuk resolusi, pencetakan, dan jarak pandang.',
          icon: 'mdi:image',
          points: [
            'Perhitungan DPI dan resolusi',
            'Jarak pandang yang disarankan',
            'Analisis kualitas cetak'
          ],
          highlight: true
        }
      ],
      columns: 2
    },
    {
      type: 'title',
      text: 'Mengapa Memilih Alat Kami',
      level: 3,
    },
    {
      type: 'proscons',
      items: [
        {
          pro: 'Pemrosesan berbasis browser 100% - data Anda tidak pernah diunggah ke server',
          con: 'Memerlukan browser modern dengan dukungan JavaScript'
        },
        {
          pro: 'Presisi matematis dalam semua perhitungan audiovisual',
          con: 'Kasus yang sangat spesifik mungkin memerlukan validasi manual'
        },
        {
          pro: 'Antarmuka intuitif yang dirancang untuk para profesional industri',
          con: 'Pengalaman terbaik di layar desktop/tablet'
        },
        {
          pro: 'Alat gratis sepenuhnya tanpa batas penggunaan',
          con: 'Tidak ada dukungan premium khusus (komunitas tersedia)'
        }
      ],
      proTitle: 'Keunggulan',
      conTitle: 'Pertimbangan'
    },
    {
      type: 'title',
      text: 'Panduan Memulai Cepat',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Pilih alat yang Anda butuhkan berdasarkan jenis proyek Anda',
        'Masukkan parameter teknis (frame, resolusi, waktu, dll.)',
        'Dapatkan perhitungan instan dan hasil yang tepat',
        'Ekspor atau terapkan hasil ke alur kerja Anda',
        'Ulangi proses untuk beberapa proyek tanpa batas'
      ],
      icon: 'mdi:arrow-right'
    },
    {
      type: 'tip',
      title: 'Tips Pro',
      html: 'Untuk mengerjakan beberapa klip atau urutan, kami sarankan untuk menyimpan parameter utama Anda (resolusi kamera, frame rate biasa, bahasa subtitel) dalam sebuah dokumen. Dengan cara ini Anda dapat mengaksesnya dengan cepat tanpa perlu menghitung ulang setiap saat.'
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'EXIF',
          definition: 'Format file yang menyimpan metadata dalam gambar digital (tanggal, kamera, lokasi GPS, dll.). Ini bisa menjadi risiko privasi.'
        },
        {
          term: 'FPS (Frame Per Second)',
          definition: 'Jumlah frame yang diputar setiap detik. Nilai umum: 24 fps (bioskop), 25 fps (PAL), 30 fps (NTSC), 60 fps (video mulus).'
        },
        {
          term: 'DPI (Dots Per Inch)',
          definition: 'Ukuran resolusi dalam pencetakan. DPI yang lebih tinggi = kualitas yang lebih baik. Untuk fotografi profesional, disarankan minimal 300 DPI.'
        },
        {
          term: 'Timelapse',
          definition: 'Teknik sinematografi yang mempercepat waktu dengan menangkap frame pada interval reguler untuk menciptakan efek gerak cepat.'
        },
        {
          term: 'Sinkronisasi Subtitel',
          definition: 'Proses menyelaraskan waktu mulai/selesai subtitel dengan audio dan video film atau serial.'
        },
        {
          term: 'Metadata',
          definition: 'Informasi tersembunyi dalam file media yang mendeskripsikan konten (penulis, tanggal pembuatan, perangkat yang digunakan, lokasi, dll.).'
        }
      ]
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Cara Memilih Alat yang Tepat',
      icon: 'mdi:help-circle',
      badge: 'Panduan Pemilihan',
      html: '<strong>Membuat timelapse?</strong> -> Gunakan kalkulator timelapse.<br><strong>Perlu melindungi privasi?</strong> -> Alat pembersihan metadata.<br><strong>Bekerja dengan subtitel?</strong> -> Sinkronisasi dan editor subtitel.<br><strong>Perlu mengoptimalkan gambar?</strong> -> Kalkulator resolusi dan jarak pandang.'
    },
    {
      type: 'card',
      title: 'Fungsionalitas Utama',
      html: 'Semua alat kami bekerja <strong>100% secara lokal</strong> di browser Anda. Ini berarti privasi maksimal, kecepatan instan, dan akses offline (setelah pemuatan awal).'
    },
    {
      type: 'message',
      title: 'Perlindungan Privasi',
      ariaLabel: 'Informasi tentang privasi dan penyimpanan data',
      html: 'Kami tidak menyimpan, memproses, atau membagikan data audiovisual Anda. Semua perhitungan dan pembersihan metadata terjadi secara eksklusif di perangkat Anda. Anda memiliki kendali penuh atas konten Anda.'
    }
  ],
};
