import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { FAQItem, HowToStep, ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';
import type { FilmReciprocityFailureCalculatorUI } from '../ui';

const slug = 'film-karsiliklilik-bozulmasi-hesaplayici-fotograf';
const title = 'Film Karşılıklılık Bozulması Hesaplayıcı (Schwarzschild Etkisi)';
const description = 'ILFORD ve KENTMERE filmleri için resmi telafi faktörleriyle uzun pozlama sürelerini doğru şekilde hesaplayın.';

const ui: FilmReciprocityFailureCalculatorUI = {
  faqTitle: 'Film karşılıklılık bozulması hakkında sorular',
  bibliographyTitle: 'Kaynaklar',
  studyLabel: 'Uzun pozlama çalışması',
  studyTitle: 'Filme zaman tanıyın',
  studyText: 'Pozometre gelen ışığı anlık ölçer. Emülsiyon aynı yoğunluğu oluşturmak için uzun pozlamalarda daha fazla zamana ihtiyaç duyar.',
  filmLabel: 'Bir fotoğraf filmi seçin',
  filmHint: 'Seçilen ILFORD veya KENTMERE filmi için yayınlanan resmi faktörü kullanın.',
  measuredTimeLabel: 'Pozometre süresini girin',
  measuredTimeHint: 'Düzeltme 1 saniyenin üzerindeki pozlamalar için geçerlidir.',
  secondsUnit: 'saniye',
  filmMenuLabel: 'Film listesi menüsü',
  presetsLabel: 'Saha çalışma hazır ayarları',
  presetShort: 'Bozulma sınırı',
  presetNight: 'Gece sokağı',
  presetDeepNight: 'Zifiri gece',
  resultLabel: 'Düzeltilmiş pozlama',
  correctedTimeLabel: 'Önerilen nihai süre',
  addedTimeLabel: 'Ek süre',
  correctionStopsLabel: 'Pozlama artışı (EV durağı)',
  correctionFactorLabel: 'Film faktörü',
  noCorrection: 'Düzeltme gerekmiyor',
  correctionNeeded: 'Karşılıklılık düzeltmesi aktif',
  longExposure: 'Uzun pozlama alanı',
  meterTimeLabel: 'Ölçülen süre',
  filmTimeLabel: 'Düzeltilmiş süre',
  exposurePathLabel: 'Görsel pozlama süreci',
  exposurePathText: 'Film şeridi ölçülen süreden hesaplanan nihai süreye doğru uzar.',
  formulaLabel: 'Hesaplama formülü',
  formulaText: 'Düzeltilmiş süre = ölçülen sürenin film faktörü üssü.',
  manufacturerNote: 'Faktörler HARMAN teknik belgelerinden alınmıştır. Sonucu pratik bir başlangıç noktası olarak kabul edin.',
  resetLabel: 'Hesaplamayı sıfırla',
  invalidTime: 'Sıfırdan büyük bir süre girin.',
  sourceLabel: 'Üretici notu',
};

const faq: FAQItem[] = [
  {
    question: 'Fotoğrafçılıkta karşılıklılık bozulması (Schwarzschild etkisi) nedir?',
    answer: 'Karşılıklılık bozulması, uzun pozlama sürelerinde film emülsiyonunun ışığa karşı duyarlılığının azalmasıdır. Pozometrenin ölçtüğü ışık aynı kalsa da filmde beklenen yoğunluğu elde etmek için daha uzun pozlama gerekir.',
  },
  {
    question: 'Bu araç düzeltilmiş süreyi nasıl hesaplar?',
    answer: 'HARMAN tarafından sağlanan Tc = Tm<sup>P</sup> formülünü kullanır. Tm ölçülen süre, Tc düzeltilmiş süre, P ise filme özel faktördür. 1 saniye ve altındaki pozlamalarda düzeltme yapılmaz.',
  },
  {
    question: 'Neden her filmin düzeltme faktörü farklıdır?',
    answer: 'Gümüş halojenür kristallerinin verimliliği emülsiyon yapısına göre değişir. HARMAN; HP5+, FP4+, DELTA ve KENTMERE filmleri için ayrı katsayılar yayınlar.',
  },
  {
    question: 'Hesaplanan süre mükemmel bir negatif garanti eder mi?',
    answer: 'Hayır. Çok uzun pozlamalarda pozometre hassasiyeti, banyo sıcaklığı, çalkalama ve sahne kontrastı da sonucu etkiler. Bu süreyi başlangıç değeri alarak basamaklama (bracketing) yapmanız önerilir.',
  },
];

const howTo: HowToStep[] = [
  { name: 'Filmi seçin', text: 'Kameranızdaki filmi seçerek ona ait resmi katsayıyı yükleyin.' },
  { name: 'Ölçülen süreyi girin', text: 'Pozometrenizin gösterdiği süreyi saniye cinsinden yazın.' },
  { name: 'Düzeltilmiş süreyi görün', text: 'Kamera örtücü hızını hesaplanan nihai süreye ayarlayın.' },
  { name: 'Basamaklama yapın', text: 'Çok uzun gece çekimlerinde hesaplanan sürenin etrafında farklı pozlamalar deneyin.' },
];

const seo: ToolLocaleContent<FilmReciprocityFailureCalculatorUI>['seo'] = [
  {
    type: 'summary',
    title: 'Belgelenmiş uzun pozlama düzeltmesi',
    items: [
      '11 ILFORD ve KENTMERE siyah beyaz film için resmi faktörleri uygular',
      'Pozometre ölçümü ile emülsiyonun gerçekten ihtiyaç duyduğu süreyi karşılaştırır',
      'Ek saniyeleri, EV stop artışını ve görsel pozlama sürecini gösterir',
      'Gece çekimlerini kolaylaştıran 3 pratik saha ayarı içerir',
    ],
  },
  { type: 'title', text: 'Uzun pozlamada karşılıklılık düzeltmesi neden gereklidir', level: 2 },
  {
    type: 'paragraph',
    html: 'Normal enstantane hızlarında karşılıklılık yasası geçerlidir (pozlama = ışık şiddeti x süre). Ancak uzun pozlamada emülsiyon kararlı görüntü merkezleri oluşturmada verim kaybeder. Pozometre fiziksel olarak doğru fakat kimyasal olarak yetersiz bir süre gösterir.',
  },
  { type: 'title', text: 'Hesaplamanın arkasındaki üretici formülü', level: 2 },
  {
    type: 'table',
    headers: ['Film', 'Resmi Faktör', '10 Saniyede Örnek'],
    rows: [
      ['ILFORD HP5+', '1.31', '20.4 saniye'],
      ['ILFORD FP4+', '1.26', '18.2 saniye'],
      ['ILFORD SFX 200', '1.43', '26.9 saniye'],
      ['KENTMERE 400', '1.30', '20.0 saniye'],
    ],
  },
  {
    type: 'paragraph',
    html: 'Hesaplayıcı Tc = Tm<sup>P</sup> formülünü kullanır. Tm saniye cinsinden ölçülen süre, Tc düzeltilmiş süre ve P HARMAN faktörüdür. 1 saniyeye kadar telafi gerekmez.',
  },
  {
    type: 'tip',
    title: 'Sonucu pratik bir başlangıç noktası yapın',
    html: 'Uzun pozlamalar karşılıklılık dışında da birçok değişkenden etkilenir. Ölçüm sapmaları, kontrast ve banyo süreci negatifi değiştirir. Önemli karelerde basamaklama yapın.',
  },
  { type: 'title', text: 'Karşılıklılık düzeltmesi ne zaman uygulanır', level: 2 },
  {
    type: 'list',
    items: [
      '<strong>Resmi faktörleri kullanın:</strong> Filminizi üretici verileriyle tam eşleştirin.',
      '<strong>Banyo sürecini sabit tutun:</strong> Banyo kimyasalı, sıcaklık ve çalkalama sonucu etkiler.',
      '<strong>Çok uzun pozlamalarda basamaklama yapın:</strong> Süre uzadıkça test çekimleri daha yararlı hale gelir.',
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
  inLanguage: 'tr',
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
