import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { EquivalentExposureUI } from '../ui';
import type { ToolLocaleContent, FAQItem, HowToStep } from '../../../types';

const slug = 'calcolatore-esposizione-equivalente';
const title = 'Calcolatore Esposizione Equivalente Triangolo di Esposizione';
const description = 'Calcola le impostazioni equivalenti di apertura, tempo di posa e ISO per mantenere un valore EV costante.';

const ui: EquivalentExposureUI = {
  "title": "Calcolatore Esposizione Equivalente",
  "subtitle": "Calcola i parametri reciproci di apertura, tempo di posa e ISO per mantenere un valore di esposizione costante.",
  "baseSettingsTitle": "Impostazione Esposizione di Base",
  "targetSettingsTitle": "Impostazione Equivalente Obiettivo",
  "lockModeLabel": "Calcola Automaticamente",
  "isoLabel": "Sensibilità ISO",
  "apertureLabel": "Apertura (stop f)",
  "shutterLabel": "Tempo di Posa",
  "lockIsoOption": "Calcola ISO (Mantieni Apertura e Tempo)",
  "lockApertureOption": "Calcola Apertura (Mantieni ISO e Tempo)",
  "lockShutterOption": "Calcola Tempo (Mantieni ISO e Apertura)",
  "presetsTitle": "Preset Rapidi",
  "presetSunny16": "Regola del Sole 16",
  "presetOvercast": "Giorno Nuvoloso",
  "presetIndoor": "Luce da Interno",
  "presetNight": "Fotografia Notturna",
  "targetEvLabel": "EV Obiettivo"
};

const faq: FAQItem[] = [
  {
    "question": "Cos'è il Valore di Esposizione (EV)?",
    "answer": "L'EV è una scala logaritmica che combina apertura e tempo a ISO 100. La formula è EV = log2(N^2 / t)."
  },
  {
    "question": "Come mantengono la luminosità le esposizioni equivalenti?",
    "answer": "Bilanciando gli stop tra ISO, tempo e apertura, la quantità di luce catturata dal sensore rimane costante."
  },
  {
    "question": "Cos'è la regola del Sole 16?",
    "answer": "Stabilisce che a f/16 in una giornata soleggiata, il tempo di posa è il reciproco del valore ISO (es. ISO 100 richiede 1/100s)."
  },
  {
    "question": "In che modo l'apertura modifica la profondità di campo?",
    "answer": "Aprire l'apertura riduce la profondità di campo isolando il soggetto con uno sfondo sfocato."
  }
];

const howTo: HowToStep[] = [
  {
    "name": "Seleziona Impostazioni di Base",
    "text": "Scegli i valori base di ISO, apertura e tempo di posa."
  },
  {
    "name": "Scegli Modalità di Calcolo",
    "text": "Seleziona la variabile da calcolare automaticamente."
  },
  {
    "name": "Regola Parametri Creativi",
    "text": "Modifica i parametri per vedere il calcolo reciproco istantaneo."
  },
  {
    "name": "Valuta Effetti Visivi",
    "text": "Ispeziona il grafico vettoriale per profondità di campo e rumore."
  }
];

const seo: ToolLocaleContent<EquivalentExposureUI>['seo'] = [
  {
    type: 'summary',
    title: 'Caratteristiche di Reciprocità di Esposizione',
    items: [
    "Calcolo esatto a 1/3 di EV tra ISO, Apertura e Tempo di posa",
    "Visualizzatore vettoriale del Triangolo di Esposizione in SVG",
    "Feedback su profondità di campo, mosso e rumore digitale",
    "Preset rapidi per Sole 16, Nuvoloso e Notte"
],
  },
  { type: 'title', text: 'Comprendere il Triangolo di Esposizione', level: 2 },
  {
    type: 'paragraph',
    html: 'L\'esposizione è regolata da apertura, tempo di posa e ISO. Qualsiasi modifica richiede un riadattamento reciproco.',
  },
  {
    type: 'stats',
    items: [
      { value: 'EV 15', label: 'Luce Solare Base (Sole 16)', icon: 'mdi:white-balance-sunny' },
      { value: '1/3 EV', label: 'Risoluzione a Terzi di Stop', icon: 'mdi:tune-vertical' },
      { value: '2:1 DOF', label: 'Rapporto di Distribuzione Messa a Fuoco', icon: 'mdi:camera-iris' },
    ],
    columns: 3,
  },
  { type: 'title', text: 'Obiettivo Creativo', level: 3 },
  {
    type: 'table',
    headers: [
    "Obiettivo Creativo",
    "Regolazione Apertura",
    "Regolazione Tempo",
    "Regolazione ISO",
    "Conseguenza Visiva"
],
    rows: [
    [
        "Congelare Azione",
        "Apri (f/2.8)",
        "Più rapido (1/1000s)",
        "Mantieni costante",
        "Minore profondità di campo"
    ],
    [
        "Nitidezza Paesaggio",
        "Chiudi (f/11)",
        "Più lento (1/30s)",
        "Mantieni costante",
        "Cavalletto necessario"
    ],
    [
        "Poca Luce a Mano",
        "Apri al massimo (f/1.4)",
        "Limite a mano (1/60s)",
        "Aumenta (ISO 3200)",
        "Maggiore rumore digitale"
    ],
    [
        "Massima Qualità Studio",
        "Apertura ottimale (f/8)",
        "Sincro Flash (1/200s)",
        "ISO 100 base",
        "Massima gamma dinamica"
    ]
],
  },
  { type: 'title', text: 'Impatto Creativo delle Impostazioni Equivalenti', level: 3 },
  {
    type: 'paragraph',
    html: 'Sebbene le esposizioni equivalenti producano la stessa luminosità, la resa visiva differisce:',
  },
  {
    type: 'list',
    items: [
    "<strong>Apertura:</strong> Controlla la profondità di campo e la sfocatura dello sfondo.",
    "<strong>Tempo di posa:</strong> Controlla il congelamento o la sfocatura del movimento.",
    "<strong>ISO:</strong> Amplifica il segnale del sensore a scapito del rumore digitale."
],
    icon: 'mdi:check-circle',
  },
  {
    type: 'comparative',
    items: [
      {
        title: 'Impostazione Sfondo Sfocato',
        description: 'Grande apertura per ritratti',
        icon: 'mdi:account-box-outline',
        points: [
          "Apertura f/1.4 a f/2.8",
          "Tempo rapido",
          "Bokeh morbido"
],
      },
      {
        title: 'Impostazione Paesaggio Profondo',
        description: 'Piccola apertura per nitidezza totale',
        icon: 'mdi:image-filter-hdr',
        points: [
          "Sweet spot f/8 a f/11",
          "Tempo lento su cavalletto",
          "Massima risoluzione"
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
        pro: 'Precisione a terzi di stop conforme alle ghiere della fotocamera',
        con: 'Non considera il difetto di reciprocità della pellicola o i T-stop',
      },
      {
        pro: 'Visualizzazione SVG dinamica con feedback sulla nitidezza',
        con: 'Richiede la regolazione manuale del fattore di crop',
      },
    ],
    proTitle: 'Punti di Forza',
    conTitle: 'Limiti Fisici',
  },
  {
    type: 'glossary',
    items: [
    {
        "term": "Valore di Esposizione (EV)",
        "definition": "Scala logaritmica che combina apertura e tempo."
    },
    {
        "term": "Legge di Reciprocità",
        "definition": "Principio per cui esposizione è prodotto di intensità e tempo."
    },
    {
        "term": "Stop di Luce",
        "definition": "Unità relativa equivalente al raddoppio o al dimezzamento della luce."
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
  inLanguage: 'it',
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
