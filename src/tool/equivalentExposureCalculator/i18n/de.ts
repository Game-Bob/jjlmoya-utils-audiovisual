import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { EquivalentExposureUI } from '../ui';
import type { ToolLocaleContent, FAQItem, HowToStep } from '../../../types';

const slug = 'rechner-aquivalente-belichtung';
const title = 'Rechner für äquivalente Belichtung Belichtungsdreieck';
const description = 'Berechnen Sie äquivalente Belichtungseinstellungen für Blende, Verschlusszeit und ISO zur Wahrung des EV Wertes mit kreativer Kontrolle.';

const ui: EquivalentExposureUI = {
  "title": "Rechner für äquivalente Belichtung",
  "subtitle": "Berechnen Sie reziproke Parameter für Blende, Verschlusszeit und ISO zur Wahrung konstanter Belichtungswerte.",
  "baseSettingsTitle": "Basis Belichtungseinstellung",
  "targetSettingsTitle": "Ziel Äquivalenzeinstellung",
  "lockModeLabel": "Automatisch berechnen",
  "isoLabel": "ISO Empfindlichkeit",
  "apertureLabel": "Blende (f Stufe)",
  "shutterLabel": "Verschlusszeit",
  "lockIsoOption": "ISO berechnen (Blende und Verschluss halten)",
  "lockApertureOption": "Blende berechnen (ISO und Verschluss halten)",
  "lockShutterOption": "Verschlusszeit berechnen (ISO und Blende halten)",
  "presetsTitle": "Schnell Voreinstellungen",
  "presetSunny16": "Sonne 16 Regel",
  "presetOvercast": "Bewölkter Tag",
  "presetIndoor": "Innenraumlicht",
  "presetNight": "Nachtfotografie",
  "targetEvLabel": "Ziel EV"
};

const faq: FAQItem[] = [
  {
    "question": "Was ist der Lichtwert (EV) und wie wird er berechnet?",
    "answer": "Der Lichtwert (EV) ist eine logarithmische Skala, die Blende und Verschlusszeit bei ISO 100 kombiniert. Die mathematische Formel lautet EV = log2(N^2 / t)."
  },
  {
    "question": "Wie halten äquivalente Belichtungen die Bildhelligkeit konstant?",
    "answer": "Durch den Ausgleich von Belichtungsstufen zwischen ISO, Verschlusszeit und Blendenöffnung bleibt die gesammelte Lichtmenge identisch."
  },
  {
    "question": "Was besagt die Sonne 16 Regel?",
    "answer": "Bei f/16 an einem sonnigen Tag entspricht die korrekte Verschlusszeit dem Kehrwert des ISO Wertes (z. B. ISO 100 benötigt 1/100s)."
  },
  {
    "question": "Wie beeinflusst die Blendenwahl die Schärfentiefe?",
    "answer": "Das Öffnen der Blende verringert die Schärfentiefe und erzeugt ein weiches Hintergrund Bokeh, erfordert aber eine kürzere Verschlusszeit."
  }
];

const howTo: HowToStep[] = [
  {
    "name": "Basis Einstellungen festlegen",
    "text": "Wählen Sie Ihre Basiswerte für ISO, Blende und Verschlusszeit."
  },
  {
    "name": "Berechnungsmodus wählen",
    "text": "Wählen Sie die Variable, die automatisch berechnet werden soll."
  },
  {
    "name": "Kreative Parameter anpassen",
    "text": "Ändern Sie Ihre Zielwerte zur sofortigen Neuberechnung der Reziprozität."
  },
  {
    "name": "Kreative Effekte bewerten",
    "text": "Prüfen Sie das Vektordiagramm für Schärfentiefe, Bewegungsunschärfe und Rauschen."
  }
];

const seo: ToolLocaleContent<EquivalentExposureUI>['seo'] = [
  {
    type: 'summary',
    title: 'Funktionen der Belichtungsreziprozität',
    items: [
      "Exakte 1/3 EV Stufenberechnung über ISO, Blende und Verschlusszeit",
      "Interaktives Belichtungsdreieck als SVG Vektorgrafik",
      "Rückmeldung zu Schärfentiefe, Bewegungsgrenzen und Sensorrauschen",
      "Ein Klick Voreinstellungen für Sonne 16, Bewölkung und Nacht"
    ],
  },
  { type: 'title', text: 'Das Belichtungsdreieck verstehen', level: 2 },
  {
    type: 'paragraph',
    html: 'Die Belichtung in der Fotografie wird durch das Zusammenspiel von Blende, Verschlusszeit und ISO-Empfindlichkeit bestimmt. Jede Änderung eines einzelnen Parameters erfordert eine genaue reziproke Kompensation der anderen Faktoren, um eine identische Gesamtbelichtung des Sensors zu gewährleisten.',
  },
  {
    type: 'stats',
    items: [
      { value: 'EV 15', label: 'Tageslicht Basis (Sonne 16)', icon: 'mdi:white-balance-sunny' },
      { value: '1/3 EV', label: 'Präzise Drittelstufen Auflösung', icon: 'mdi:tune-vertical' },
      { value: '2:1 DOF', label: 'Standard Schärfeverteilungsverhältnis', icon: 'mdi:camera-iris' },
    ],
    columns: 3,
  },
  { type: 'title', text: 'Kreatives Ziel', level: 3 },
  {
    type: 'table',
    headers: [
      "Kreatives Ziel",
      "Blendenanpassung",
      "Verschlussanpassung",
      "ISO Anpassung",
      "Visuelle Konsequenz"
    ],
    rows: [
      [
        "Bewegung einfrieren",
        "Öffnen (f/2.8)",
        "Kürzer (1/1000s)",
        "Konstant halten",
        "Geringere Schärfentiefe"
      ],
      [
        "Landschaftsschärfe",
        "Schließen (f/11)",
        "Länger (1/30s)",
        "Konstant halten",
        "Stativ erforderlich"
      ],
      [
        "Wenig Licht freihand",
        "Maximal öffnen (f/1.4)",
        "Handgrenze halten (1/60s)",
        "Erhöhen (ISO 3200)",
        "Höheres Sensorrauschen"
      ],
      [
        "Höchste Studioqualität",
        "Optimale Schärfe (f/8)",
        "Blitz Synchro (1/200s)",
        "Basis ISO 100",
        "Maximaler Dynamikumfang"
      ]
    ],
  },
  { type: 'title', text: 'Kreative Auswirkungen äquivalenter Einstellungen', level: 3 },
  {
    type: 'paragraph',
    html: 'Obwohl äquivalente Belichtungseinstellungen exakt die gleiche Lichtmenge auf den Sensor treffen lassen, unterscheidet sich der kreative Bildcharakter und der visuelle Eindruck der Aufnahme deutlich:',
  },
  {
    type: 'list',
    items: [
      "<strong>Blende:</strong> Steuert Schärfentiefe und Hintergrundunschärfe. Große Öffnungen erzeugen ein weiches Bokeh.",
      "<strong>Verschlusszeit:</strong> Steuert die Bewegungsdarstellung von Scharfschalten bis Bewegungsunschärfe.",
      "<strong>ISO Empfindlichkeit:</strong> Verstärkt das Sensorsignal. Hohe Werte ermöglichen Aufnahmen bei Dunkelheit."
    ],
    icon: 'mdi:check-circle',
  },
  {
    type: 'comparative',
    items: [
      {
        title: 'Geringe Schärfentiefe',
        description: 'Offenblende für Porträts',
        icon: 'mdi:account-box-outline',
        points: [
          "f/1.4 bis f/2.8 Blende",
          "Kurze Verschlusszeit",
          "Weiches Bokeh"
        ],
      },
      {
        title: 'Maximale Landschaftsschärfe',
        description: 'Kleine Blende für durchgehende Schärfe',
        icon: 'mdi:image-filter-hdr',
        points: [
          "f/8 bis f/11 Optimum",
          "Längere Belichtung auf Stativ",
          "Höchste Auflösung"
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
        pro: 'Drittelstufen Präzision passend zu Kamera Wählrädern',
        con: 'Berücksichtigt keine T Stops oder Schwarzschildeffekt',
      },
      {
        pro: 'Live SVG Visualisierung mit Schärfen Feedback',
        con: 'Erfordert manuelle Korrektur des Formatfaktors',
      },
    ],
  },
  {
    type: 'glossary',
    items: [
      {
        "term": "Lichtwert (EV)",
        "definition": "Logarithmische Skala zur Kombination von Blende und Verschlusszeit."
      },
      {
        "term": "Reziprozitätsgesetz",
        "definition": "Prinzip der proportionalen Belichtung aus Intensität und Dauer."
      },
      {
        "term": "Belichtungsstufe (Stop)",
        "definition": "Relative Einheit entsprechend einer Verdopplung oder Halbierung der Lichtmenge."
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
  inLanguage: 'de',
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
