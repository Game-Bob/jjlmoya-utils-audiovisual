import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { EquivalentExposureUI } from '../ui';
import type { ToolLocaleContent, FAQItem, HowToStep } from '../../../types';

const slug = 'esdeger-pozlama-hesaplayici';
const title = 'Eşdeğer Pozlama Hesaplayıcı Pozlama Üçgeni Karşılıklılığı';
const description = 'EV değerini sabit tutarken diyafram, enstantane ve ISO için eşdeğer pozlama ayarlarını hesaplayın.';

const ui: EquivalentExposureUI = {
  "title": "Eşdeğer Pozlama Hesaplayıcı",
  "subtitle": "Sabit bir pozlama değerini korumak için diyafram, enstantane ve ISO değişkenlerini karşılıklı hesaplayın.",
  "baseSettingsTitle": "Temel Pozlama Ayarı",
  "targetSettingsTitle": "Hedef Eşdeğer Ayarı",
  "lockModeLabel": "Otomatik Hesapla",
  "isoLabel": "ISO Hassasiyeti",
  "apertureLabel": "Diyafram (f-stop)",
  "shutterLabel": "Enstantane Hızı",
  "lockIsoOption": "ISO Hesapla (Diyafram ve Enstantaneyi Koru)",
  "lockApertureOption": "Diyafram Hesapla (ISO ve Enstantaneyi Koru)",
  "lockShutterOption": "Enstantane Hesapla (ISO ve Diyaframı Koru)",
  "presetsTitle": "Hızlı Ön Ayarlar",
  "presetSunny16": "Güneşli 16 Kuralı",
  "presetOvercast": "Bulutlu Gün",
  "presetIndoor": "İç Mekan Işığı",
  "presetNight": "Gece Fotoğrafçılığı",
  "targetEvLabel": "Hedef EV"
};

const faq: FAQItem[] = [
  {
    "question": "Pozlama Değeri (EV) nedir ve nasıl hesaplanır?",
    "answer": "EV, ISO 100 değerinde diyafram ve enstantane kombinasyonunu temsil eden logaritmik bir ölçektir. Formül: EV = log2(N^2 / t)."
  },
  {
    "question": "Eşdeğer pozlamalar görüntü parlaklığını nasıl korur?",
    "answer": "ISO, enstantane ve diyafram arasındaki durakları dengeleyerek sensörün yakaladığı toplam ışık sabit kalır."
  },
  {
    "question": "Güneşli 16 Kuralı nedir?",
    "answer": "Güneşli bir günde f/16 diyaframda doğru enstantane hızı ISO değerinin tersidir (ör. ISO 100 için 1/100s)."
  },
  {
    "question": "Diyafram seçimi alan derinliğini nasıl değiştirir?",
    "answer": "Diyaframı açmak alan derinliğini azaltarak konuyu yumuşak bir arka plan bulanıklığı ile öne çıkarır."
  }
];

const howTo: HowToStep[] = [
  {
    "name": "Temel Ayarları Seçin",
    "text": "Sahnemiz için temel ISO, diyafram ve enstantane değerlerini belirleyin."
  },
  {
    "name": "Hesaplama Modunu Seçin",
    "text": "Otomatik hesaplanacak değişkeni seçin."
  },
  {
    "name": "Yaratıcı Parametreleri Ayarlayın",
    "text": "Karşılıklı değeri anında görmek için hedef değişkenleri değiştirin."
  },
  {
    "name": "Görsel Efektleri Değerlendirin",
    "text": "Alan derinliği ve gürültü için vektör şemasını inceleyin."
  }
];

const seo: ToolLocaleContent<EquivalentExposureUI>['seo'] = [
  {
    type: 'summary',
    title: 'Pozlama Karşılıklılığı Özellikleri',
    items: [
    "ISO, Diyafram ve Enstantane arasında tam 1/3 EV durak hesaplaması",
    "SVG formatında etkileşimli Pozlama Üçgeni vektör görselleştirici",
    "Alan derinliği, hareket bulanıklığı ve gürültü için canlı geri bildirim",
    "Güneşli 16, Bulutlu ve Gece için tek tıkla hızlı ön ayarlar"
],
  },
  { type: 'title', text: 'Pozlama Üçgenini Anlamak', level: 2 },
  {
    type: 'paragraph',
    html: 'Fotoğrafçılıkta pozlama diyafram, enstantane ve ISO tarafından yönetilir. Bir değişkendeki değişiklik karşılıklı telafi gerektirir.',
  },
  {
    type: 'stats',
    items: [
      { value: 'EV 15', label: 'Gün Işığı Temeli (Güneşli 16)', icon: 'mdi:white-balance-sunny' },
      { value: '1/3 EV', label: 'Hassas Üçte Bir Durak Çözünürlüğü', icon: 'mdi:tune-vertical' },
      { value: '2:1 DOF', label: 'Standart Odak Dağılım Oranı', icon: 'mdi:camera-iris' },
    ],
    columns: 3,
  },
  { type: 'title', text: 'Yaratıcı Hedef', level: 3 },
  {
    type: 'table',
    headers: [
    "Yaratıcı Hedef",
    "Diyafram Ayarı",
    "Enstantane Ayarı",
    "ISO Ayarı",
    "Görsel Sonuç"
],
    rows: [
    [
        "Hareketi Dondur",
        "Aç (f/2.8)",
        "Hızlandır (1/1000s)",
        "Sabit Tut",
        "Daha az alan derinliği"
    ],
    [
        "Manzara Netliği",
        "Kapat (f/11)",
        "Yavaşlat (1/30s)",
        "Sabit Tut",
        "Tripod gerekli"
    ],
    [
        "Elde Düşük Işık",
        "Maksimum Aç (f/1.4)",
        "Elde tutma sınırı (1/60s)",
        "Artır (ISO 3200)",
        "Daha fazla gürültü"
    ],
    [
        "Stüdyo Kalitesi",
        "Optimal (f/8)",
        "Flaş Senkron (1/200s)",
        "Temel ISO 100",
        "Maksimum dinamik aralık"
    ]
],
  },
  { type: 'title', text: 'Eşdeğer Ayarların Yaratıcı Etkisi', level: 3 },
  {
    type: 'paragraph',
    html: 'Eşdeğer pozlamalar aynı parlaklığı sağlasa da görsel karakter farklıdır:',
  },
  {
    type: 'list',
    items: [
    "<strong>Diyafram:</strong> Alan derinliğini ve arka plan bulanıklığını kontrol eder.",
    "<strong>Enstantane Hızı:</strong> Hareketin netliğini kontrol eder.",
    "<strong>ISO Hassasiyeti:</strong> Gürültü pahasına sensör sinyalini artırır."
],
    icon: 'mdi:check-circle',
  },
  {
    type: 'comparative',
    items: [
      {
        title: 'Bulanık Arka Plan Ayarı',
        description: 'Portreler için geniş diyafram',
        icon: 'mdi:account-box-outline',
        points: [
          "f/1.4 ila f/2.8 Diyafram",
          "Hızlı enstantane",
          "Yumuşak bokeh"
],
      },
      {
        title: 'Derin Manzara Ayarı',
        description: 'Tam netlik için küçük diyafram',
        icon: 'mdi:image-filter-hdr',
        points: [
          "Tatlı nokta f/8 ila f/11",
          "Tripod üzerinde yavaş enstantane",
          "Maksimum optik çözünürlük"
],
        highlight: true,
      },
    ],
    columns: 2,
  },
  {
    type: 'proscons',
    items: [
      {
        pro: 'Kamera kadranlarıyla uyumlu 1/3 durak hassasiyeti',
        con: 'Film karşılıksızlık hatasını veya T-stop değerlerini dikkate almaz',
      },
      {
        pro: 'Netlik durumunu gösteren canlı SVG görselleştirme',
        con: 'Manuel kırpma faktörü ayarı gerektirir',
      },
    ],
    proTitle: 'Teknik Güçler',
    conTitle: 'Fiziksel Sınırlar',
  },
  {
    type: 'glossary',
    items: [
    {
        "term": "Pozlama Değeri (EV)",
        "definition": "Diyafram ve enstantaneyi birleştiren logaritmik ölçek."
    },
    {
        "term": "Karşılıklılık Yasası",
        "definition": "Pozlamanın ışık yoğunluğu ve sürenin çarpımı olduğu ilke."
    },
    {
        "term": "Pozlama Durağı (Stop)",
        "definition": "Işık miktarının iki katına çıkmasını veya yarıya inmesini ifade eden bağıl birim."
    }
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
  step: howTo.map((step) => ({
    '@type': 'HowToStep',
    name: step.name,
    text: step.text,
  })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'tr',
};

export const content: ToolLocaleContent<EquivalentExposureUI> = {
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
