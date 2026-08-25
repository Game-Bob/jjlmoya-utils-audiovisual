import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { FAQItem, HowToStep, ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';
import type { AdamsZoneSystemUI } from '../ui';

const slug = 'ansel-adams-bolge-sistemi-gorsellestirici-pozlama-bolgeleri';
const title = 'Ansel Adams Bolge Sistemi Gorsellestirici Pozlama Bolgeleri';
const description = 'Bolge 0 ile IX arasini kesfedin, olculen bir tonu kesin stop degisiklikleriyle yerlestirin ve pozlama kararlarinizi normal, N eksi ve N arti banyo ile baglayin.';

const ui: AdamsZoneSystemUI = {
  faqTitle: 'Bolge Sistemi Hakkinda Sorular',
  bibliographyTitle: 'Kaynaklar',
  orientationTitle: 'Bolge yerlesimi',
  orientationText: 'Sahnede olctugunuz tonu secin, hedeflemek istediginiz bolgeyi belirleyin ve durak degisimini pozlama talimati olarak kullanin. Banyo notu, parlak alanlari korumaya veya golgeleri acmaya yardimci olur.',
  measuredToneLabel: 'Sahnede olculen ton',
  targetPlacementLabel: 'Bu tonu sununla yerlestir',
  developmentLabel: 'Banyo tercihi',
  normalDevelopment: 'Normal',
  minusDevelopment: 'N eksi',
  plusDevelopment: 'N arti',
  presetsLabel: 'Saha notu ile baslayin',
  presetShadow: 'Dokulu golge',
  presetSkin: 'Acik ten',
  presetSnow: 'Gunesli kar',
  presetNight: 'Gece golgesi',
  zoneStripLabel: 'Syahtan beyaza bolge seridi',
  meterBaselineLabel: 'Pozometre referansi: Bolge V',
  selectedToneLabel: 'Olculen ton',
  placementResultLabel: 'Yerlesim sonucu',
  exposureShiftLabel: 'Orta griye gore pozlama kaymasi',
  tonalDistanceLabel: 'Olculen tondan uzaklik',
  luminanceLabel: 'Goreceli parlaklik',
  stopsFromMiddleLabel: 'Bolge V den itibaren durak sayısı',
  developmentAdviceLabel: 'Negatif okuma',
  techniqueLabel: 'Karanlik oda yonlendirmesi',
  resetLabel: 'Ornegi sifirla',
  meterAssumption: 'Yansiyan isik pozometresi, siz telafi etmediginiz surece her okumayi Bolge V orta grisine yerlestirir.',
  zonePrefix: 'Bolge',
  zoneNames: 'Saf siyah|Siyaha yakin|Derin golge|Dokulu golge|Koyu orta ton|Orta gri|Acik orta ton|Dokulu parlaklik|Parlak isiklar|Beyaza yakin',
  zoneDescriptions: 'Görünür dokusu olmayan maksimum siyah.|Siyahtan ilk ayrışma, neredeyse hiç doku yok.|Önemli karanlık gölgedeki ilk doku belirtisi.|Kullanılabilir gölge dokusu ve yaygın bir yerleşim demiri.|Açık gölge ve net forma sahip koyu yapraklar.|Pozometrenin nötr referans noktası.|Açık ten, yıpranmış taş ve parlak yapraklar.|Baskıda korunması gereken parlak doku.|Çok az dokusu kalmış çok parlak ton.|Neredeyse saf beyaz, sadece hafif bir ayrışma izi var.',
  increaseExposure: 'Okumayı seçilen bölgeye yükseltmek için pozlamayı gösterilen miktarda açın.',
  decreaseExposure: 'Okumayı seçilen bölgede tutmak için pozlamayı gösterilen miktarda kısın.',
  holdExposure: 'Hedef Bölge V olduğu için pozometre okumasını değiştirmeden tutun.',
  protectHighlights: 'Parlak alan kontrolü',
  openShadows: 'Gölge ayrımı',
  balancedPlacement: 'Dengeli yerleşim',
  normalAdvice: 'Normal banyo, sahne kontrastını ölçülen aralığa yakın tutar.',
  minusAdvice: 'N eksi banyo, dik sahne kontrastını sıkıştırır ve parlak alanların basılabilir kalmasını sağlar.',
  plusAdvice: 'N artı banyo, dar sahne kontrastını genişletir ve önemli gölgelere daha fazla ayrım kazandırır.',
};

const faq: FAQItem[] = [
  {
    question: 'Bölge Sistemi neyi ölçer?',
    answer: 'Bölge Sistemi, bir fotoğrafın ton aralığını derin siyahtan parlak beyaza kadar görselleştirme ve kontrol etme yöntemidir. Ölçülen sahne parlaklığını nihai bölge, pozlama ve banyo kararlarıyla birleştirir.',
  },
  {
    question: 'Pozometre neden Bölge V ile başlar?',
    answer: 'Yansıyan ışık pozometreleri ortalama okumayı nötr orta gri olarak kabul edecek şekilde kalibre edilmiştir. Karanlık bir gölgeyi karanlık veya parlak bir konuyu parlak tutmak için Bölge V den uzaklaşarak telafi yapmanız gerekir.',
  },
  {
    question: 'Bölgeleri kaç durak ayırır?',
    answer: 'Bitişik tam bölgeler birbirlerinden tam bir durak ile ayrılır. Bölge V den Bölge VII ye geçmek iki durak daha fazla pozlama gerektirir.',
  },
  {
    question: 'N eksi ve N artı ne anlama gelir?',
    answer: 'Sahne kontrastını yönetmek için kullanılan banyo ayarlamalarıdır. N eksi sert sahnelerde negatif kontrastını azaltırken, N artı düz sahnelerde kontrastı artırır.',
  },
];

const howTo: HowToStep[] = [
  { name: 'Ölçülen tonu seçin', text: 'Pozometre ile ölçtüğünüz sahne bölümünü en iyi tanımlayan bölgeyi belirleyin.' },
  { name: 'Hedef yerleşimi seçin', text: 'Bu tonun negatifte veya baskıda görünmesini istediğiniz bölgeye dokunun.' },
  { name: 'Pozlama değişimini uygulayın', text: 'Diyaframı veya enstantaneyi ayarlamak için gösterilen durak farkını kullanın.' },
  { name: 'Banyo niyetini eşleştirin', text: 'Karanlık odadaki banyo süresi yönlendirmesi için banyo notunu kullanın.' },
];

const seo: ToolLocaleContent<AdamsZoneSystemUI>['seo'] = [
  {
    type: 'summary',
    title: 'Bölge Sistemi saha görselleştirme rehberi',
    items: [
      'Bölge 0 dan Bölge IX a kadar her tonu okunabilir bir şerit üzerinde inceleyin',
      'İstenen bölge yerleşimini Bölge V den itibaren kesin bir durak değişimine dönüştürün',
      'Ölçülen parlaklığı nihai baskıda korunması gereken tonla karşılaştırın',
      'N eksi, normal ve N artı banyolarını bilinçli kontrast yönetim araçları olarak kullanın',
    ],
  },
  { type: 'title', text: 'Ansel Adams Bölge Sistemi nasıl çalışır', level: 2 },
  {
    type: 'paragraph',
    html: 'Bölge Sistemi, sürekli parlaklık aralığını ten pratik referans bölgesine böler. Bölge V, pozometrenin nötr orta gri referansıdır.',
  },
  { type: 'title', text: 'Bölge şeridinden pozlama okuma', level: 2 },
  {
    type: 'table',
    headers: ['Yerleşim', 'Görsel karşılık', 'Pozometre eylemi'],
    rows: [
      ['Bölge II', 'Zor seçilen dokuya sahip derin gölge', 'Bölge V den 3 durak daha az pozlayın'],
      ['Bölge III', 'Önemli kullanılabilir gölge dokusu', 'Bölge V den 2 durak daha az pozlayın'],
      ['Bölge V', 'Nötr orta gri referansı', 'Pozometre okumasını değiştirmeden bırakın'],
      ['Bölge VI', 'Açık ten gibi açık orta ton', 'Bölge V den 1 durak daha fazla pozlayın'],
      ['Bölge VII', 'Korunması gereken parlak doku', 'Bölge V den 2 durak daha fazla pozlayın'],
    ],
  },
  {
    type: 'tip',
    title: 'Yerleşimi yaratıcı bir karar olarak kullanın',
    html: 'Pozometreyi her şeyi gri yapma emri olarak görmeyin. Dokuyu taşıyan ana tonu seçin ve onu bilinçli olarak yerleştirin.',
  },
  { type: 'title', text: 'Banyo kontrastı değiştirdiğinde', level: 2 },
  {
    type: 'list',
    items: [
      '<strong>Normal banyo:</strong> Ölçülen sahne kontrastını standart negatif sınırları içinde tutar.',
      '<strong>N eksi banyo:</strong> Parlak alanların patlamasını önlemek için yüksek kontrastlı sahneleri sıkıştırır.',
      '<strong>N artı banyo:</strong> Gölgelerde daha iyi ayrım sağlamak için düşük kontrastlı sahneleri genişletir.',
    ],
  },
  {
    type: 'glossary',
    items: [
      { term: 'Bölge', definition: 'Yanındakinden bir tam durak pozlama mesafesinde olan pratik ton aralığı.' },
      { term: 'Yerleşim', definition: 'Ölçülen bir konunun görünmesi istenen hedef bölgenin kasıtlı seçimi.' },
      { term: 'Orta gri', definition: 'Yansıyan ışık pozometrelerinde nötr başlangıç noktası olan Bölge V referansı.' },
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
  inLanguage: 'tr',
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
