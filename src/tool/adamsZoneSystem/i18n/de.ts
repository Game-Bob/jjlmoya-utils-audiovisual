import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { FAQItem, HowToStep, ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';
import type { AdamsZoneSystemUI } from '../ui';

const slug = 'ansel-adams-zonensystem-visualisierer-belichtungszonen';
const title = 'Ansel Adams Zonensystem Visualisierer Belichtungszonen';
const description = 'Erkunden Sie die Zonen 0 bis IX, platzieren Sie gemessene Töne mit exakten Blendenstufen und verbinden Sie Belichtungsentscheidungen mit N minus, normaler und N plus Entwicklung.';

const ui: AdamsZoneSystemUI = {
  faqTitle: 'Fragen zum Zonensystem',
  bibliographyTitle: 'Quellen',
  orientationTitle: 'Zonenplatzierung',
  orientationText: 'Wählen Sie den gemessenen Ton, bestimmen Sie die Zielzone und nutzen Sie die angezeigte Blendenkorrektur als Belichtungsanweisung. Die Entwicklungsnote hilft beim Schutz von Lichterzeichnung und Schattenöffnung.',
  measuredToneLabel: 'Gemessener Ton im Motiv',
  targetPlacementLabel: 'Zielzone für diesen Ton',
  developmentLabel: 'Entwicklungsabsicht',
  normalDevelopment: 'Normal',
  minusDevelopment: 'N minus',
  plusDevelopment: 'N plus',
  presetsLabel: 'Mit einer Praxisnotiz starten',
  presetShadow: 'Schattentextur',
  presetSkin: 'Helle Haut',
  presetSnow: 'Schnee im Sonnenlicht',
  presetNight: 'Nachtschatten',
  zoneStripLabel: 'Zonenstreifen von Schwarz bis Weiß',
  meterBaselineLabel: 'Beli-Referenz: Zone V',
  selectedToneLabel: 'Gemessener Ton',
  placementResultLabel: 'Ergebnis der Platzierung',
  exposureShiftLabel: 'Belichtungsabweichung zum Mittelgrau',
  tonalDistanceLabel: 'Abstand vom gemessenen Ton',
  luminanceLabel: 'Relative Luminanz',
  stopsFromMiddleLabel: 'Blenden von Zone V',
  developmentAdviceLabel: 'Negativbeurteilung',
  techniqueLabel: 'Dunkelkammeranweisung',
  resetLabel: 'Beispiel zurücksetzen',
  meterAssumption: 'Ein Objektbelichtungsmesser ordnet jeden Messwert dem Mittelgrau der Zone V zu, sofern keine Korrektur erfolgt.',
  zonePrefix: 'Zone',
  zoneNames: 'Reines Schwarz|Fast Schwarz|Tiefer Schatten|Schattentextur|Dunkler Mittelton|Mittelgrau|Heller Mittelton|Helle Textur|Leuchtende Lichter|Fast Weiß',
  zoneDescriptions: 'Maximales Schwarz ohne sichtbare Zeichnung.|Erste Trennung von Schwarz mit minimaler Zeichnung.|Erste wahrnehmbare Textur in wichtigen dunklen Schatten.|Nutzbare Schattentextur und klassischer Ankerpunkt.|Offener Schatten und dunkles Laub mit klarer Form.|Neutraler Referenzpunkt des Belichtungsmessers.|Helle Haut, verwitterter Stein und helles Laub.|Helle Textur für zeichnungsfähige Lichter.|Sehr heller Ton mit kaum verbleibender Textur.|Fast Reinschwarz oder Reinschweiß ohne nennenswerte Struktur.',
  increaseExposure: 'Reichlicher belichten um den angezeigten Wert, um den Ton in die Zielzone zu heben.',
  decreaseExposure: 'Knapper belichten um den angezeigten Wert, um den Ton in der Zielzone zu halten.',
  holdExposure: 'Belichtung unverändert lassen, da die Zielzone der Zone V entspricht.',
  protectHighlights: 'Lichterkontrolle',
  openShadows: 'Schattentrennung',
  balancedPlacement: 'Ausgewogene Platzierung',
  normalAdvice: 'Normale Entwicklung hält den Motivkontrast nahe am gemessenen Bereich.',
  minusAdvice: 'N minus Entwicklung komprimiert steile Motivkontraste und hält Lichter kopierbar.',
  plusAdvice: 'N plus Entwicklung dehnt flache Motivkontraste und trennt wichtige Schatten besser.',
};

const faq: FAQItem[] = [
  {
    question: 'Was misst das Zonensystem?',
    answer: 'Das Zonensystem visualisiert und steuert den Tonwertumfang einer Fotografie von tiefem Schwarz bis zu hellem Weiß. Es verbindet die Motivhelligkeit mit der Belichtung und der Ausarbeitung im Labor.',
  },
  {
    question: 'Warum startet der Belichtungsmesser bei Zone V?',
    answer: 'Objektbelichtungsmesser sind auf ein mittleres Grau von 18 Prozent Reflexion kalibriert. Um Schatten dunkel oder Lichter hell wiederzugeben, muss bewusst abweichend von Zone V belichtet werden.',
  },
  {
    question: 'Wie viele Blendenstufen trennen die Zonen?',
    answer: 'Jede volle Zone unterscheidet sich von ihren Nachbarn um genau eine Blendenstufe. Der Schritt von Zone V zu Zone VII erfordert zwei Blendenstufen mehr Belichtung.',
  },
  {
    question: 'Was bedeuten N minus und N plus?',
    answer: 'Es sind Entwicklungsanpassungen zur Kontraststeuerung. N minus verringert den Negativkontrast bei steilem Motivkontrast, N plus erhöht ihn bei flachem Motivkontrast.',
  },
];

const howTo: HowToStep[] = [
  { name: 'Gemessenen Ton wählen', text: 'Wählen Sie die Zone, die dem angemessenen Motivteil am besten entspricht.' },
  { name: 'Zielzone festlegen', text: 'Tippen Sie auf die Zone, in der dieser Ton im Negativ oder Print erscheinen soll.' },
  { name: 'Belichtungskorrektur anwenden', text: 'Nutzen Sie den Blendenabstand zur Anpassung von Blende oder Verschlusszeit.' },
  { name: 'Entwicklung abstimmen', text: 'Verwenden Sie den Entwicklungshinweis zur Ausgleichsentwicklung im Fotolabor.' },
];

const seo: ToolLocaleContent<AdamsZoneSystemUI>['seo'] = [
  {
    type: 'summary',
    title: 'Visualisierungsleitfaden für das Zonensystem',
    items: [
      'Alle Zonen von 0 bis IX auf einem klaren Tonwertstreifen analysieren',
      'Wunschplatzierung in präzise Blendenkorrekturen ab Zone V umrechnen',
      'Gemessene Motivhelligkeit mit der finalen Printzeichnung vergleichen',
      'N minus, Normal und N plus gezielt zur Kontraststeuerung einsetzen',
    ],
  },
  { type: 'title', text: 'Funktionsweise des Ansel Adams Zonensystems', level: 2 },
  {
    type: 'paragraph',
    html: 'Das Zonensystem unterteilt kontinuierliche Motivhelligkeiten in zehn Zonen. Zone V stellt das mittlere Grau des Belichtungsmessers dar. Jede benachbarte Zone entspricht einer Blendenstufe.',
  },
  { type: 'title', text: 'Belichtungsablesung am Zonenstreifen', level: 2 },
  {
    type: 'table',
    headers: ['Platzierung', 'Visuelle Wirkung', 'Korrektur am Beli'],
    rows: [
      ['Zone II', 'Tiefer Schatten mit minimaler Zeichnung', '3 Blenden knapper als Zone V belichten'],
      ['Zone III', 'Wichtige Schattentextur mit Zeichnung', '2 Blenden knapper als Zone V belichten'],
      ['Zone V', 'Neutrales Mittelgrau', 'Belichtungswert unverändert übernehmen'],
      ['Zone VI', 'Heller Mittelton wie helle Haut', '1 Blende reichlicher als Zone V belichten'],
      ['Zone VII', 'Helle Textur mit voller Zeichnung', '2 Blenden reichlicher als Zone V belichten'],
    ],
  },
  {
    type: 'tip',
    title: 'Gezielte Zonenplatzierung im Feld',
    html: 'Der Belichtungsmesser ist kein Diktator für graue Bilder. Bestimmen Sie den wichtigsten Motivton, platzieren Sie ihn bewusst und lassen Sie das übliche Licht natürlich abfallen.',
  },
  { type: 'title', text: 'Kontraststeuerung durch Entwicklungsanpassung', level: 2 },
  {
    type: 'list',
    items: [
      '<strong>Normale Entwicklung:</strong> Erhält den gemessenen Motivkontrast im normalen Negativbereich.',
      '<strong>N minus Entwicklung:</strong> Komprimiert hohe Motivkontraste, um Spitzenlichter zeichnungsfähig zu halten.',
      '<strong>N plus Entwicklung:</strong> Steigert flache Motivkontraste für bessere Schattentrennung.',
    ],
  },
  {
    type: 'glossary',
    items: [
      { term: 'Zone', definition: 'Praktischer Tonwertbereich im Abstand von jeweils einer Blendenstufe.' },
      { term: 'Platzierung', definition: 'Bewusste Zuordnung eines gemessenen Motivwerts zu einer Zielzone.' },
      { term: 'Mittelgrau', definition: 'Kalibrierungsstandard der Zone V für Objektbelichtungsmesser.' },
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
  inLanguage: 'de',
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
