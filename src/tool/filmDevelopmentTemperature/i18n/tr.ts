import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { FilmDevelopmentTemperatureUI } from '../ui';
import { bibliography } from '../bibliography';

const ui: FilmDevelopmentTemperatureUI = {
  faqTitle: 'Film banyo sıcaklığı hakkında sorular',
  bibliographyTitle: 'Ana kaynaklar',
  chooseDocumentedCombination: 'Belgelenmiş bir film ve banyo kimyasalı seçin',
  filmLabel: 'Fotoğraf filmi',
  developerLabel: 'Banyo kimyasalı',
  dilutionLabel: 'Seyreltme',
  temperatureLabel: 'Banyo sıcaklığı',
  temperatureHelp: 'Tanktaki banyo banyosu sıcaklığını girin. Kılavuz 20 °C standart süresine dayanmaktadır.',
  unitSwitchLabel: 'Sıcaklık birimi',
  metricLabel: 'Metrik °C',
  imperialLabel: 'İmperyal °F',
  currentReadingLabel: 'Karanlık oda ölçümü',
  baseTimeLabel: '20 °C sıcaklıkta',
  adjustedTimeLabel: 'Ayarlanmış başlangıç süresi',
  temperatureGuideLabel: 'Sıcaklık telafi tablosu',
  temperatureGuideHelp: 'Ölçülen sıcaklık etrafındaki pratik kılavuz. Vurgulanan satır sizin ölçümünüzdür.',
  sourceLabel: 'Onaylanmış kombinasyon',
  eiLabel: 'Pozlama ayarı EI',
  statusCool: 'Daha soğuk banyo',
  statusSteady: 'Standarda yakın',
  statusWarm: 'Daha sıcak banyo',
  warningShortTime: '5 dakikanın altındaki süreler düzensiz banyo riskini artırır. Belgelenmiş bir süreç seçin veya süreyi yalnızca kendi testlerinizle uzatın.',
  warningOutOfRange: 'Bu değer önerilen aralığın sınırındadır. Banyo sıcaklığını sabit tutun ve üretici verilerini kontrol edin.',
  guideNotice: 'Bu bir başlangıç kılavuzudur, garanti değildir. Çalkalama, ekipman, hedef kontrast ve kendi süreciniz sonucu değiştirir.',
  resetLabel: 'İlk belgelenmiş kombinasyona sıfırla',
  minutesLabel: 'dak',
  secondsLabel: 'sn',
  currentBadge: 'Mevcut',
  belowFiveMinutes: '5 dakikanın altında',
  tableTemperature: 'Sıcaklık',
  tableTime: 'Kılavuz süre',
  tableDifference: '20 °C farkı',
  currentRow: 'Mevcut',
};

const softwareApplication: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Sıcaklığa Göre Film Banyo Süresi Hesaplayıcı',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  description: 'Ölçülen banyo sıcaklığına göre siyah beyaz film banyo süresini ayarlayın.',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
};

const faqPage: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Hesaplayıcı temel olarak hangi sıcaklığı kullanır?', acceptedAnswer: { '@type': 'Answer', text: 'Seçilen her kombinasyon üreticinin 20 °C sıcaklıktaki resmi süresinden başlar ve bunu ölçülen sıcaklığa göre ayarlar.' } },
    { '@type': 'Question', name: 'Ayarlanan süreler kesin garanti midir?', acceptedAnswer: { '@type': 'Answer', text: 'Hayır. Pratik bir başlangıç kılavuzudur. Çalkalama, tank yapısı, kimyasalın tazeliği ve hedef kontrast sonucu etkiler.' } },
    { '@type': 'Question', name: 'Neden 5 dakikanın altındaki sürelerde uyarı veriliyor?', acceptedAnswer: { '@type': 'Answer', text: 'Çok kısa banyo süreleri doldurma ve boşaltma için az zaman bırakır, bu da film üzerinde eşit olmayan banyo riskini artırır.' } },
    { '@type': 'Question', name: 'Filmim ve banyo kimyasalım listede yoksa ne yapmalıyım?', acceptedAnswer: { '@type': 'Answer', text: 'Üreticinin teknik bilgi formuna veya güvenilir banyo tablolarına başvurun. Bu araç belgelenmemiş süreler uydurmaz.' } },
  ],
};

const howTo: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Film banyo süresini sıcaklığa göre ayarlama',
  step: [
    { '@type': 'HowToStep', name: 'Filmi seçin', text: 'Tankınızda takılı olan siyah beyaz fotoğraf filmini seçin.' },
    { '@type': 'HowToStep', name: 'Banyo ve seyreltmeyi eşleştirin', text: 'Tabloda belirtilen banyo kimyasalını ve seyreltme oranını seçin.' },
    { '@type': 'HowToStep', name: 'Sıcaklığı ölçün', text: 'Banyoya başlamadan önce banyo çözeltisinin gerçek sıcaklığını ölçüp girin.' },
    { '@type': 'HowToStep', name: 'Ayarlanan süreyi uygulayın', text: 'Karanlık odada banyo zamanlayıcınızı ayarlamak için hesaplanan süreyi kullanın.' },
  ],
};

export const content: ToolLocaleContent<FilmDevelopmentTemperatureUI> = {
  slug: 'film-banyo-suresi-hesaplayici-sicaklik-telafisi',
  title: 'Sıcaklığa Göre Film Banyo Süresi Hesaplayıcı',
  description: 'Ölçülen banyo sıcaklığına göre siyah beyaz film banyo süresini ayarlayın, net bir referans tablosu ile çalışma olanağı sağlayın.',
  ui,
  seo: [
    { type: 'title', level: 2, text: 'Film banyo süresi sıcaklık değişimine göre nasıl telafi edilir' },
    { type: 'paragraph', html: 'Tablodan belgelenmiş film, banyo kimyasalı ve seyreltme oranını seçin, ardından banyo çözeltinizin gerçek sıcaklığını girin. Hesaplayıcı 20 °C standart süresini esas alarak pratik bir ayarlanmış süre sunar.' },
    { type: 'title', level: 3, text: 'Sonucu pratik bir başlangıç noktası olarak değerlendirin' },
    { type: 'paragraph', html: 'Sıcaklık kimyasal reaksiyon hızını doğrudan etkiler: daha sıcak bir banyo daha kısa süre gerektirirken, daha soğuk bir banyo daha uzun süre ister. Kılavuz tablo ölçümünüz etrafındaki süre değişimlerini gösterir.' },
    { type: 'tip', title: 'Karanlık odada tutarlı bir süreç sürdürün', html: 'Hesaplanan süreyi mutlak bir kural olarak görmeyin. Çalkalama ritmi, tank yapısı, kimyasalın tazeliği ve kendi negatif kontrast tercihleriniz belirleyicidir.' },
    { type: 'title', level: 3, text: 'Neden yalnızca belgelenmiş kombinasyonlara güvenmelisiniz' },
    { type: 'list', items: ['Film ve banyo kimyasalı eşleşmesi gren yapısını, keskinliği ve etkili ISO hassasiyetini belirler.', 'Seyreltme oranı banyonun tükenme hızını değiştirir ve başka oranlardan rastgele hesaplanamaz.', '5 dakikadan kısa süreler tankı doldurma ve boşaltma zamanının etkisi nedeniyle ekstra dikkat gerektirir.'] },
  ],
  faq: [
    { question: 'Hesaplayıcı temel olarak hangi sıcaklığı kullanır?', answer: 'Seçilen her kombinasyon üreticinin 20 °C sıcaklıktaki resmi süresinden başlar ve bunu ölçülen sıcaklığa göre ayarlar.' },
    { question: 'Ayarlanan süreler kesin garanti midir?', answer: 'Hayır. Pratik bir başlangıç kılavuzudur. Çalkalama, tank yapısı, kimyasalın tazeliği ve hedef kontrast sonucu etkiler.' },
    { question: 'Neden 5 dakikanın altındaki sürelerde uyarı veriliyor?', answer: 'Çok kısa banyo süreleri doldurma ve boşaltma için az zaman bırakır, bu da film üzerinde eşit olmayan banyo riskini artırır.' },
    { question: 'Filmim ve banyo kimyasalım listede yoksa ne yapmalıyım?', answer: 'Üreticinin teknik bilgi formuna veya güvenilir banyo tablolarına başvurun. Bu araç belgelenmemiş süreler uydurmaz.' },
  ],
  bibliography,
  howTo: [
    { name: 'Filmi seçin', text: 'Tankınızda takılı olan siyah beyaz fotoğraf filmini seçin.' },
    { name: 'Banyo ve seyreltmeyi eşleştirin', text: 'Tabloda belirtilen banyo kimyasalını ve seyreltme oranını seçin.' },
    { name: 'Sıcaklığı ölçün', text: 'Banyoya başlamadan önce banyo çözeltisinin gerçek sıcaklığını ölçüp girin.' },
    { name: 'Ayarlanan süreyi uygulayın', text: 'Karanlık odada banyo zamanlayıcınızı ayarlamak için hesaplanan süreyi kullanın.' },
  ],
  schemas: [softwareApplication, faqPage, howTo],
};
