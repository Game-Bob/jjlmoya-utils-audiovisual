import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { EquivalentExposureUI } from '../ui';
import type { ToolLocaleContent, FAQItem, HowToStep } from '../../../types';

const slug = 'calculator-equivalent-belichting';
const title = 'Calculator Equivalent Belichting Belichtingsdriehoek';
const description = 'Bereken equivalente belichtingsinstellingen voor diafragma, sluitertijd en ISO om de EV waarde constant te houden.';

const ui: EquivalentExposureUI = {
  "title": "Calculator Equivalent Belichting",
  "subtitle": "Bereken wederkerige parameters voor diafragma, sluitertijd en ISO om een constante belichtingswaarde te behouden.",
  "baseSettingsTitle": "Basis Belichtingsinstelling",
  "targetSettingsTitle": "Doel Equivalent Instelling",
  "lockModeLabel": "Automatisch Berekenen",
  "isoLabel": "ISO gevoeligheid",
  "apertureLabel": "Diafragma (f-stop)",
  "shutterLabel": "Sluitertijd",
  "lockIsoOption": "ISO Berekenen (Diafragma en Sluitertijd behouden)",
  "lockApertureOption": "Diafragma Berekenen (ISO en Sluitertijd behouden)",
  "lockShutterOption": "Sluitertijd Berekenen (ISO en Diafragma behouden)",
  "presetsTitle": "Snelle Voorinstellingen",
  "presetSunny16": "Zonnig 16 Regel",
  "presetOvercast": "Bewolkte Dag",
  "presetIndoor": "Binnenlicht",
  "presetNight": "Nachtfotografie",
  "targetEvLabel": "Doel EV"
};

const faq: FAQItem[] = [
  {
    "question": "Wat is Belichtingswaarde (EV)?",
    "answer": "EV is een logarithmische schaal die diafragma en sluitertijd bij ISO 100 combineert. De formule is EV = log2(N^2 / t)."
  },
  {
    "question": "Hoe behouden equivalente belichtingen de beeldhelderheid?",
    "answer": "Door belichtingsstappen tussen ISO, sluitertijd en diafragma te compenseren, blijft het opgevangen licht constant."
  },
  {
    "question": "Wat is de Zonnig 16 Regel?",
    "answer": "Bij f/16 op een zonnige dag is de sluitertijd het omgekeerde van de ISO waarde (bijv. ISO 100 vereist 1/100s)."
  },
  {
    "question": "Hoe beïnvloedt diafragma de scherptediepte?",
    "answer": "Een groter diafragma verkleint de scherptediepte en zorgt voor een zachte achtergrondonscherpte."
  }
];

const howTo: HowToStep[] = [
  {
    "name": "Basisinstellingen Selecteren",
    "text": "Kies uw basiswaarden voor ISO, diafragma en sluitertijd."
  },
  {
    "name": "Berekeningsmodus Kiezen",
    "text": "Selecteer de variabele die automatisch berekend moet worden."
  },
  {
    "name": "Creatieve Parameters Aanpassen",
    "text": "Wijzig de doelwaarden om de wederkerigheid direct te zien."
  },
  {
    "name": "Visuele Effecten Beoordelen",
    "text": "Bekijk het vectordiagram voor scherptediepte en ruis."
  }
];

const seo: ToolLocaleContent<EquivalentExposureUI>['seo'] = [
  {
    type: 'summary',
    title: 'Kenmerken van Belichtingswederkerigheid',
    items: [
      "Exacte 1/3 EV stapberekening over ISO, Diafragma en Sluitertijd",
      "Interactieve Belichtingsdriehoek SVG vectorvisualisator",
      "Feedback over scherptediepte, bewegingsonscherpte en ruis",
      "Snelle voorinstellingen voor Zonnig 16, Bewolkt en Nacht"
    ],
  },
  { type: 'title', text: 'De Belichtingsdriehoek Begrijpen', level: 2 },
  {
    type: 'paragraph',
    html: 'De belichting in de fotografie wordt gevormd door de voortdurende wisselwerking tussen het diafragma, de sluitertijd en de ISO-gevoeligheid van de sensor. Elke aanpassing van een van deze drie variabelen vereist een wederkerige compensatie van de andere parameters om dezelfde totale hoeveelheid licht te behouden.',
  },
  {
    type: 'stats',
    items: [
      { value: 'EV 15', label: 'Zonlicht Basis (Zonnig 16)', icon: 'mdi:white-balance-sunny' },
      { value: '1/3 EV', label: 'Nauwkeurige Derde Stap Resolutie', icon: 'mdi:tune-vertical' },
      { value: '2:1 DOF', label: 'Standaard Scherpstelverhouding', icon: 'mdi:camera-iris' },
    ],
    columns: 3,
  },
  { type: 'title', text: 'Creatief Doel', level: 3 },
  {
    type: 'table',
    headers: [
      "Creatief Doel",
      "Diafragma Aanpassing",
      "Sluitertijd Aanpassing",
      "ISO Aanpassing",
      "Visueel Gevolg"
    ],
    rows: [
      [
        "Actie Bevriezen",
        "Openen (f/2.8)",
        "Sneller (1/1000s)",
        "Constant houden",
        "Kleinere scherptediepte"
      ],
      [
        "Landschapsscherpte",
        "Sluiten (f/11)",
        "Langzamer (1/30s)",
        "Constant houden",
        "Statief vereist"
      ],
      [
        "Wenig Licht Uit de Hand",
        "Max openen (f/1.4)",
        "Handgrens houden (1/60s)",
        "Verhogen (ISO 3200)",
        "Meer ruis"
      ],
      [
        "Maximale Studiokwaliteit",
        "Optimaal (f/8)",
        "Flitssynchronisatie (1/200s)",
        "ISO 100 basis",
        "Max dynamisch bereik"
      ]
    ],
  },
  { type: 'title', text: 'Creatieve Impact van Equivalente Instellingen', level: 3 },
  {
    type: 'paragraph',
    html: 'Hoewel equivalente belichtingsinstellingen exact dezelfde totale hoeveelheid licht en helderheid op de beeldsensor opleveren, verschilt de uiteindelijke visuele uitstraling en het artistieke karakter van de foto aanzienlijk afhankelijk van de gemaakte keuzes:',
  },
  {
    type: 'list',
    items: [
      "<strong>Diafragma:</strong> Bepaalt de scherptediepte en achtergrondonscherpte. Grote openingen creëren een prachtige zachte bokeh.",
      "<strong>Sluitertijd:</strong> Bepaalt het bevriezen van snelle bewegingen of het weergeven van bewegingsonscherpte in de foto.",
      "<strong>ISO:</strong> Versterkt het signaal van de sensor bij weinig licht ten koste van een toename in digitale ruis."
    ],
    icon: 'mdi:check-circle',
  },
  {
    type: 'comparative',
    items: [
      {
        title: 'Instelling Onscherpe Achtergrond',
        description: 'Groot diafragma voor portretten',
        icon: 'mdi:account-box-outline',
        points: [
          "f/1.4 tot f/2.8 Diafragma",
          "Snelle sluitertijd",
          "Zachte bokeh"
        ],
      },
      {
        title: 'Instelling Diep Landschap',
        description: 'Klein diafragma voor volledige scherpte',
        icon: 'mdi:image-filter-hdr',
        points: [
          "Optimaal f/8 tot f/11",
          "Langzame sluitertijd op statief",
          "Maximale resolutie"
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
        pro: 'Derde stap precisie overeenkomend met camerawielen',
        con: 'Houdt geen rekening met Schwarzschildeffect of T stops',
      },
      {
        pro: 'Live SVG visualisatie met scherptefeedback',
        con: 'Handmatige correctie van de cropfactor vereist',
      },
    ],
  },
  {
    type: 'glossary',
    items: [
      {
        "term": "Belichtingswaarde (EV)",
        "definition": "Logarithmische schaal die diafragma en sluitertijd combineert."
      },
      {
        "term": "Wederkerigheidswet",
        "definition": "Principe van evenredigheid tussen lichtintensiteit en tijd."
      },
      {
        "term": "Belichtingsstap (Stop)",
        "definition": "Relatieve eenheid voor het verdubbelen of halveren van het licht."
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
  inLanguage: 'nl',
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
