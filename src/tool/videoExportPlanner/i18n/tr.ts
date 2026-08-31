import { bibliography } from '../bibliography';
import { createSchemas } from '../schema';
import type { VideoExportPlannerLocaleContent } from '../entry';
import type { VideoExportPlannerUI } from '../ui';

const ui: VideoExportPlannerUI = {
  workflowHint: 'Görüntü, ses ve süreyi ayarlayın. Aşağıdaki veri makarası bu seçimleri kodlayıcınız için bir dışa aktarım tahminine dönüştürür.',
  presetLabel: 'Bir teslimat ön ayarıyla başlayın',
  presetYoutube: 'YouTube SDR',
  presetSocial: 'Sosyal 1080p 60',
  presetMaster: '4K Master teslimatı',
  sourceSettingsTitle: 'Dışa aktarım ayarları',
  resolutionLabel: 'Kare boyutu',
  frameRateLabel: 'Kare hızı',
  codecLabel: 'Video kodeki',
  durationLabel: 'Program süresi',
  minutesUnit: 'dakika',
  videoBitrateLabel: 'Video bit hızı',
  audioBitrateLabel: 'Ses bit hızı',
  overheadLabel: 'Kapsayıcı ek yükü',
  selectedOutputTitle: 'Seçilen dışa aktarım',
  estimatedFileSizeLabel: 'Tahmini dosya boyutu',
  totalDataRateLabel: 'Toplam veri hızı',
  videoDataLabel: 'Video akışı',
  audioDataLabel: 'Ses akışı',
  containerOverheadLabel: 'Kapsayıcı ek yükü',
  dataReelLabel: 'Zaman içinde seçilen dışa aktarımı gösteren veri makarası',
  comparisonTitle: 'Kodek başlangıç noktaları',
  codecColumn: 'Kodek',
  suggestedVideoColumn: 'Önerilen video hızı',
  estimatedSizeColumn: 'Tahmini boyut',
  planningNote: 'Kodek satırları planlama tahminleridir; aynı kalite garantisi vermez.',
  statusReady: 'Tahmine hazır',
  statusCheck: 'Vurgulanan varsayımları kontrol edin',
  warningDuration: 'Dosyayı tahmin etmek için sıfırdan büyük bir süre ekleyin.',
  warningVideoBitrate: 'Video bit hızı bu çözünürlük için alışılmadık derecede düşük. Sıkıştırmayı kontrol edin.',
  warningAudioBitrate: 'Ses bit hızı yaygın aralığın üzerinde. Ek alanın istendiğini doğrulayın.',
  warningOverhead: 'Kapsayıcı ek yükü yüksek. Depolama ayırmadan önce üst verileri doğrulayın.',
  resolution480: '480p 854 x 480',
  resolution720: '720p 1280 x 720',
  resolution1080: '1080p 1920 x 1080',
  resolution1440: '1440p 2560 x 1440',
  resolution2160: '4K 3840 x 2160',
  codecH264: 'H.264 AVC',
  codecH265: 'H.265 HEVC',
  codecAv1: 'AV1',
  faqTitle: 'Video dışa aktarım planlayıcı soruları',
  bibliographyTitle: 'Kaynaklar',
};

const faq = [
  { question: 'Tahmini video dosya boyutu nasıl hesaplanır?', answer: 'Planlayıcı video ve ses bit hızını toplar, toplam veri hızını süreyle çarpar ve kapsayıcı ek yük yüzdesini uygular.' },
  { question: 'Kodek tablosu neden farklı başlangıç noktaları gösteriyor?', answer: 'H.264, H.265 ve AV1 aynı materyal üzerinde farklı sıkıştırma verimliliklerine ulaşır.' },
  { question: 'Önerilen bit hızını zorunlu bir gereksinim olarak kullanmalı mıyım?', answer: 'Hayır. Görüntüleriniz ve kodlayıcınızla test etmek için ilk değer olarak kullanın.' },
  { question: 'Bu planlayıcı bir platforma yüklendikten sonraki boyutu tahmin eder mi?', answer: 'Platform yeniden kodlamadan önceki dosya boyutunu tahmin eder.' },
];

const howTo = [
  { name: 'Teslimat biçimini seçin', text: 'Kurguladığınız sekansla eşleşen kare boyutu ve kare hızını seçin.' },
  { name: 'Kodek ve bit hızlarını seçin', text: 'Planlanan kodeki seçin ve video ile ses bit hızlarını girin.' },
  { name: 'Süre ve ek yükü ayarlayın', text: 'Süreyi dakika olarak girin ve kapsayıcı ek yükü için pay bırakın.' },
  { name: 'Karşılaştırın ve depolama ayırın', text: 'Tahmini boyutu okuyun ve dışa aktarım için yeterli alan ayırın.' },
];

const seo = [
  { type: 'summary' as const, title: 'Videoyu dışa aktarmadan önce depolamayı planlayın', items: ['Süre ve bit hızından dosya boyutunu tahmin edin', 'H.264, H.265 ve AV1 senaryolarını karşılaştırın', 'Video, ses ve kapsayıcı ek yükünü ayırın', 'Platform sıkıştırmasını tahminin dışında tutun'] },
  { type: 'title' as const, text: 'Dışa aktarım tahmini ne anlatır', level: 2 as const },
  { type: 'paragraph' as const, html: 'Video dışa aktarımı zamanlanmış bir bit akışıdır. Planlayıcı video ve ses hızlarını birleştirerek toplam boyutu bayt olarak hesaplar.' },
  { type: 'title' as const, text: 'Başlangıç bit hızı nasıl seçilir', level: 2 as const },
  { type: 'paragraph' as const, html: 'Teslimat platformunun özellikleriyle başlayın. Tüm projeyi aktarmadan önce mutlaka kısa bir örnek test edin.' },
  { type: 'list' as const, items: ['Kare hızını orijinal sekansla eşleştirin.', 'Mbps ve kbps birimlerini ayırt edin.', 'Ara sürümler için ek depolama alanı ayırın.', 'Örneği tam boyutunda kontrol edin.'] },
  { type: 'title' as const, text: 'Kodek karşılaştırmasını okuma', level: 2 as const },
  { type: 'paragraph' as const, html: 'Kodek tablosu depolama planlamasına yardımcı olur. Nihai sonuçlar sahne karmaşıklığına bağlıdır.' },
  { type: 'tip' as const, title: 'Tahminin sınırı', html: 'Tahmin nihai görsel kaliteyi garanti etmez. Teslimattan önce temsil edici bir örneği doğrulayın.' },
];

const title = 'Video Dışa Aktarım Bit Hızı ve Dosya Boyutu Planlayıcı';
const description = 'Süre ve bit hızına göre video dosya boyutunu tahmin edin ve H.264, H.265 ve AV1 için başlangıç noktalarını karşılaştırın.';

export const content: VideoExportPlannerLocaleContent = {
  slug: 'video-disa-aktarim-bit-hizi-dosya-boyutu-planlayici', title, description, ui, seo, faq, bibliography, howTo,
  schemas: createSchemas({ title, description, faq, howTo, language: 'tr' }),
};
