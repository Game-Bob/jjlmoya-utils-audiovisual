import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { EquivalentExposureUI } from '../ui';
import type { ToolLocaleContent, FAQItem, HowToStep } from '../../../types';

const slug = 'ekvivalent-exponering-raknare';
const title = 'Ekvivalent Exponeringsräknare Exponeringstriangel';
const description = 'Beräkna ekvivalenta exponeringsinställningar för bländare, slutartid och ISO för att bibehålla EV värdet.';

const ui: EquivalentExposureUI = {
  "title": "Ekvivalent Exponeringsräknare",
  "subtitle": "Beräkna reciproka parametrar för bländare, slutartid och ISO för att bibehålla ett konstant exponeringsvärde.",
  "baseSettingsTitle": "Grundläggande Exponeringsinställning",
  "targetSettingsTitle": "Mål Ekvivalent Inställning",
  "lockModeLabel": "Beräkna Automatiskt",
  "isoLabel": "ISO känslighet",
  "apertureLabel": "Bländare (f-stopp)",
  "shutterLabel": "Slutartid",
  "lockIsoOption": "Beräkna ISO (Behåll Bländare och Slutare)",
  "lockApertureOption": "Beräkna Bländare (Behåll ISO och Slutare)",
  "lockShutterOption": "Beräkna Slutartid (Behåll ISO och Bländare)",
  "presetsTitle": "Snabbinställningar",
  "presetSunny16": "Sunny 16 regeln",
  "presetOvercast": "Molnig Dag",
  "presetIndoor": "Inomhusljus",
  "presetNight": "Nattfotografering",
  "targetEvLabel": "Mål EV"
};

const faq: FAQItem[] = [
  {
    "question": "Vad är exponeringsvärde (EV)?",
    "answer": "EV är en logaritmisk skala som kombinerar bländare och slutartid vid ISO 100. Formeln är EV = log2(N^2 / t)."
  },
  {
    "question": "Hur bibehåller ekvivalenta exponeringar bildens ljusstyrka?",
    "answer": "Genom att balansera exponeringssteg mellan ISO, slutartid och bländare förblir mängden fångat ljus konstant."
  },
  {
    "question": "Vad är Sunny 16 regeln?",
    "answer": "En solig dag vid f/16 är rätt slutartid det omvända värdet av ISO (t.ex. ISO 100 kräver 1/100s)."
  },
  {
    "question": "Hur påverkar bländarvalet skärpedjupet?",
    "answer": "En större bländaröppning minskar skärpedjupet och isolerar motivet med en mjuk bakgrundsoskärpa."
  }
];

const howTo: HowToStep[] = [
  {
    "name": "Välj Grundinställningar",
    "text": "Ange dina basvärden för ISO, bländare och slutartid."
  },
  {
    "name": "Välj Beräkningsläge",
    "text": "Välj vilken variabel som ska beräknas automatiskt."
  },
  {
    "name": "Justera Kreativa Parametrar",
    "text": "Ändra dina målvärden för att direkt se reciprociteten."
  },
  {
    "name": "Utvärdera Visuella Effekter",
    "text": "Granska vektordiagrammet för skärpedjup och brus."
  }
];

const seo: ToolLocaleContent<EquivalentExposureUI>['seo'] = [
  {
    type: 'summary',
    title: 'Funktioner för Exponeringsreciprocitet',
    items: [
      "Exakt beräkning i 1/3 EV steg över ISO, Bländare och Slutartid",
      "Interaktiv exponeringstriangel som SVG vektorgrafik",
      "Realtidsfeedback för skärpedjup, rörelseoskärpa och brus",
      "Snabbval med ett klick för Sunny 16, Molnigt och Natt"
    ],
  },
  { type: 'title', text: 'Att Förstå Exponeringstriangeln', level: 2 },
  {
    type: 'paragraph',
    html: 'Exponering inom fotografi styrs av den kontinuerliga och reciproka samverkan mellan linsens bländaröppning, slutartiden och kamerasensorns ISO-känslighet. Varje ändring av en enskild variabel kräver en motsvarande reciproc kompensation av de övriga för att bibehålla samma totala mängd uppfångat ljus på kamerasensorn.',
  },
  {
    type: 'stats',
    items: [
      { value: 'EV 15', label: 'Dagsljus Bas (Sunny 16)', icon: 'mdi:white-balance-sunny' },
      { value: '1/3 EV', label: 'Exakt Tredjedelsstegs Upplösning', icon: 'mdi:tune-vertical' },
      { value: '2:1 DOF', label: 'Standard Fokusfördelningsförhållande', icon: 'mdi:camera-iris' },
    ],
    columns: 3,
  },
  { type: 'title', text: 'Kreativt Mål', level: 3 },
  {
    type: 'table',
    headers: [
      "Kreativt Mål",
      "Bländarjustering",
      "Slutarjustering",
      "ISO justering",
      "Visuell Konsekvens"
    ],
    rows: [
      [
        "Frysa Rörelse",
        "Öppna (f/2.8)",
        "Snabbare (1/1000s)",
        "Behåll konstant",
        "Mindre skärpedjup"
      ],
      [
        "Landskapsskärpa",
        "Stäng (f/11)",
        "Långsammare (1/30s)",
        "Behåll konstant",
        "Stativ krävs"
      ],
      [
        "Svagt Ljus Handhållen",
        "Max öppning (f/1.4)",
        "Handhållen gräns (1/60s)",
        "Öka (ISO 3200)",
        "Mer sensorbrus"
      ],
      [
        "Maximal Studiokvalitet",
        "Optimal (f/8)",
        "Blixtsynk (1/200s)",
        "Bas ISO 100",
        "Maximalt dynamiskt omfång"
      ]
    ],
  },
  { type: 'title', text: 'Kreativ Effekt av Ekvivalenta Inställningar', level: 3 },
  {
    type: 'paragraph',
    html: 'Även om ekvivalenta exponeringsinställningar ger exakt samma totala bildljusstyrka och exponering på bildsensorn skiljer sig det slutliga visuella uttrycket och bildkaraktären avsevärt beroende på dina val:',
  },
  {
    type: 'list',
    items: [
      "<strong>Bländare:</strong> Styr skärpedjup och bakgrundsoskärpa. Stora bländaröppningar skapar en vacker och mjuk bokeh.",
      "<strong>Slutartid:</strong> Styr rörelseåtergivningen i bilden och gör det möjligt att frysa snabba rörelser eller skapa rörelseoskärpa.",
      "<strong>ISO känslighet:</strong> Förstärker sensorsignalen i svagt ljus men ökar samtidigt mängden digitalt sensorbrus."
    ],
    icon: 'mdi:check-circle',
  },
  {
    type: 'comparative',
    items: [
      {
        title: 'Inställning Oskarp Bakgrund',
        description: 'Stor bländare för porträtt',
        icon: 'mdi:account-box-outline',
        points: [
          "f/1.4 till f/2.8 Bländare",
          "Snabb slutartid",
          "Mjuk bokeh"
        ],
      },
      {
        title: 'Inställning Djupt Landskap',
        description: 'Liten bländare för full skärpa',
        icon: 'mdi:image-filter-hdr',
        points: [
          "Optimal f/8 till f/11",
          "Långsam slutare på stativ",
          "Maximal upplösning"
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
        pro: 'Tredjedelsstegs precision identisk med kamerans rattar',
        con: 'Tar inte hänsyn till schwarzschildeffekt eller T stopp',
      },
      {
        pro: 'Levande SVG visualisering med skärpestatus',
        con: 'Kräver manuell justering av beskärningsfaktorn',
      },
    ],
  },
  {
    type: 'glossary',
    items: [
      {
        "term": "Exponeringsvärde (EV)",
        "definition": "Logaritmisk skala som kombinerar bländare och slutartid."
      },
      {
        "term": "Reciprocitetslagen",
        "definition": "Principen om proportionalitet mellan ljusintensitet och tid."
      },
      {
        "term": "Exponeringssteg (Stop)",
        "definition": "Relativ enhet för fördubbling eller halvering av ljusmängden."
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
  inLanguage: 'sv',
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
