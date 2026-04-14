import type { CategoryLocaleContent } from '../../types';

export const content: CategoryLocaleContent = {
  slug: 'produksiyon-ve-fotografcilik',
  title: 'Görsel İşitsel ve Fotoğrafçılık Araçları',
  description: 'Film yapımcıları, fotoğrafçılar ve dijital görsel-işitsel içerik üreticileri için profesyonel araçlar ve hesaplayıcılar.',
  seo: [
    {
      type: 'summary',
      title: 'Profesyonel Görsel İşitsel Araçlar',
      items: [
        'Timelapse, efektler ve kompozisyon için akıllı hesaplayıcılar.',
        'EXIF metalarını temizlemek için gizlilik araçları.',
        'Altyazı senkronizasyonu ve zamanlama düzenleme.',
        'Çözünürlük analizi, baskı kalitesi ve optimum izleme mesafesi.'
      ],
    },
    {
      type: 'title',
      text: 'Görsel İşitsel Prodüksiyon İçin Profesyonel Araç Çantası',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Kapsamlı yardımcı program paketimiz, görsel-işitsel prodüksiyonun her aşamasındaki en yaygın teknik zorlukları çözer. Sinematik timelapseler için hassas aralık hesaplamalarından, multimedya dosyalarınızdaki EXIF metadatalarını temizleyerek gizlilik korumasına kadar her şeyi sunar.',
    },
    {
      type: 'stats',
      items: [
        {
          value: '12+',
          label: 'Uzmanlaşmış araçlar',
          icon: 'mdi:cog'
        },
        {
          value: '100%',
          label: 'Hassas hesaplamalar',
          icon: 'mdi:chart-line'
        },
        {
          value: '0%',
          label: 'Sunucuda depolanan veri',
          icon: 'mdi:shield-check'
        }
      ],
      columns: 3
    },
    {
      type: 'title',
      text: 'Araç Kategorileri',
      level: 3,
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Timelapse ve Sinematik',
          description: 'Sinematik çekimleriniz için aralıkları, toplam süreyi ve kare hızlarını hesaplayın.',
          icon: 'mdi:film',
          points: [
            'Gerekli kare hesaplaması',
            'Saniye/dakika cinsinden süre',
            'Değişken oynatma hızı'
          ]
        },
        {
          title: 'Gizlilik ve Metadata',
          description: 'EXIF verilerini ve hassas metadataları dosyalarınızdan kaldırarak gizliliğinizi koruyun.',
          icon: 'mdi:lock',
          points: [
            'EXIF veri analizi',
            'Konum metadata temizliği',
            'Cihaz bilgisi kaldırma'
          ]
        },
        {
          title: 'Altyazı Düzenleme',
          description: 'Altyazıları milisaniye hassasiyetinde senkronize edin, ayarlayın ve düzenleyin.',
          icon: 'mdi:text',
          points: [
            'Gerçek zamanlı senkronizasyon',
            'Giriş/çıkış süresi düzenleme',
            'Genel gecikme ayarı'
          ]
        },
        {
          title: 'Görüntü Analizi',
          description: 'Çözünürlük, baskı ve izleme mesafesi için teknik parametreleri hesaplayın.',
          icon: 'mdi:image',
          points: [
            'DPI ve çözünürlük hesaplama',
            'Önerilen izleme mesafesi',
            'Baskı kalitesi analizi'
          ],
          highlight: true
        }
      ],
      columns: 2
    },
    {
      type: 'title',
      text: 'Neden Bizim Araçlarımızı Seçmelisiniz?',
      level: 3,
    },
    {
      type: 'proscons',
      items: [
        {
          pro: '%100 tarayıcı tabanlı işleme - verileriniz asla sunuculara yüklenmez',
          con: 'JavaScript destekli modern bir tarayıcı gerektirir'
        },
        {
          pro: 'Tüm görsel-işitsel hesaplamalarda matematiksel hassasiyet',
          con: 'Çok özel durumlar manuel doğrulama gerektirebilir'
        },
        {
          pro: 'Sektör profesyonelleri için tasarlanmış sezgisel arayüz',
          con: 'Masaüstü/tablet ekranlarında en iyi deneyim'
        },
        {
          pro: 'Kullanım sınırı olmaksızın tamamen ücretsiz araçlar',
          con: 'Özel premium destek yoktur (topluluk desteği mevcuttur)'
        }
      ],
      proTitle: 'Avantajlar',
      conTitle: 'Dikkat Edilmesi Gerekenler'
    },
    {
      type: 'title',
      text: 'Hızlı Başlangıç Kılavuzu',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Proje tipinize göre ihtiyacınız olan aracı seçin',
        'Teknik parametreleri girin (kareler, çözünürlük, süreler vb.)',
        'Anında hesaplamalar ve hassas sonuçlar alın',
        'Sonuçları dışa aktarın veya iş akışınıza uygulayın',
        'Birden fazla proje için işlemi sınırsızca tekrarlayın'
      ],
      icon: 'mdi:arrow-right'
    },
    {
      type: 'tip',
      title: 'Profesyonel İpucu',
      html: 'Birden fazla klip veya sekansla çalışırken, ana parametrelerinizi (kamera çözünürlüğü, olağan kare hızı, altyazı dili) bir belgeye kaydetmenizi öneririz. Bu sayede her seferinde yeniden hesaplamaya gerek kalmadan onlara hızlıca erişebilirsiniz.'
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'EXIF',
          definition: 'Dijital görüntülerde metadataları (tarih, kamera, GPS konumu vb.) saklayan dosya formatı. Bir gizlilik riski oluşturabilir.'
        },
        {
          term: 'FPS (Saniyedeki Kare Sayısı)',
          definition: 'Her saniye oynatılan kare sayısıdır. Yaygın değerler: 24 fps (sinema), 25 fps (PAL), 30 fps (NTSC), 60 fps (akıcı video).'
        },
        {
          term: 'DPI (İnç Başına Nokta Sayısı)',
          definition: 'Baskıda çözünürlük ölçüsüdür. Daha yüksek DPI = daha iyi kalite. Profesyonel fotoğrafçılık için minimum 300 DPI önerilir.'
        },
        {
          term: 'Timelapse (Zaman Atlamalı)',
          definition: 'Hızlı hareket efekti yaratmak için düzenli aralıklarla kareler yakalayarak zamanı hızlandıran sinematografik teknik.'
        },
        {
          term: 'Altyazı Senkronizasyonu',
          definition: 'Altyazıların başlangıç/bitiş zamanını film veya dizi ses ve videosuyla hizalama işlemidir.'
        },
        {
          term: 'Metadata (Üst Veri)',
          definition: 'Medya dosyalarında içeriği tanımlayan gizli bilgiler (yazar, oluşturma tarihi, kullanılan cihaz, konum vb.).'
        }
      ]
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Doğru Araç Nasıl Seçilir',
      icon: 'mdi:help-circle',
      badge: 'Seçim Kılavuzu',
      html: '<strong>Timelapse mı oluşturuyorsunuz?</strong> -> Timelapse hesaplayıcıyı kullanın.<br><strong>Gizliliği korumak mı gerekiyor?</strong> -> Metadata temizleme aracı.<br><strong>Altyazılarla mı çalışıyorsunuz?</strong> -> Altyazı senkronizasyonu ve düzenleyici.<br><strong>Görüntüyü optimize etmek mi gerekiyor?</strong> -> Çözünürlük ve izleme mesafesi hesaplayıcı.'
    },
    {
      type: 'card',
      title: 'Temel İşlevsellik',
      html: 'Tüm araçlarımız tarayıcınızda <strong>%100 yerel</strong> olarak çalışır. Bu, maksimum gizlilik, anlık hız ve (ilk yüklemeden sonra) çevrimdışı erişim anlamına gelir.'
    },
    {
      type: 'message',
      title: 'Gizlilik Koruması',
      ariaLabel: 'Gizlilik ve veri depolama hakkında bilgi',
      html: 'Görsel-işitsel verilerinizi saklamıyoruz, işlemiyoruz veya paylaşmıyoruz. Tüm hesaplamalar ve metadata temizliği yalnızca cihazınızda gerçekleşir. İçeriğinizin kontrolü tamamen sizdedir.'
    }
  ],
};
