import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { FAQItem, HowToStep, ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';
import type { FilmReciprocityFailureCalculatorUI } from '../ui';

const slug = 'schwarzweissfilm-reziprozitaetsfehler-rechner';
const title = 'Schwarzweißfilm Reziprozitätsfehler Rechner (Schwarzschild)';
const description = 'Korrigieren Sie Langzeitbelichtungen auf Schwarzweißfilm mit offiziellen Faktoren von ILFORD und KENTMERE.';

const ui: FilmReciprocityFailureCalculatorUI = {
  faqTitle: 'Fragen zum Reziprozitätsfehler (Schwarzschild-Effekt)',
  bibliographyTitle: 'Quellen',
  studyLabel: 'Langzeitbelichtungs Studie',
  studyTitle: 'Geben Sie dem Film Zeit',
  studyText: 'Der Belichtungsmesser misst das eintreffende Licht. Die Emulsion benötigt bei langen Zeiten mehr Zeit für die gleiche Dichte.',
  filmLabel: 'Filmtyp auswählen',
  filmHint: 'Verwenden Sie den offiziellen Faktor für den gewählten ILFORD oder KENTMERE Film.',
  measuredTimeLabel: 'Gemessene Belichtungszeit eingeben',
  measuredTimeHint: 'Die Korrektur greift ab einer Sekunde Belichtungszeit.',
  secondsUnit: 'Sekunden',
  filmMenuLabel: 'Filmliste Menü',
  presetsLabel: 'Schnellwahl Vorlagen',
  presetShort: 'Korrekturgrenze',
  presetNight: 'Nachtstraße',
  presetDeepNight: 'Tiefe Nacht',
  resultLabel: 'Korrigierte Belichtung',
  correctedTimeLabel: 'Empfohlene Belichtungszeit',
  addedTimeLabel: 'Zusätzliche Zeit',
  correctionStopsLabel: 'Belichtungszuschlag (Blenden)',
  correctionFactorLabel: 'Film Faktor',
  noCorrection: 'Keine Korrektur erforderlich',
  correctionNeeded: 'Reziprozitätskorrektur aktiv',
  longExposure: 'Langzeitbelichtungs Bereich',
  meterTimeLabel: 'Gemessene Zeit',
  filmTimeLabel: 'Angepasste Zeit',
  exposurePathLabel: 'Visueller Belichtungsverlauf',
  exposurePathText: 'Der Filmstreifen wächst von der gemessenen Zeit zur korrigierten Belichtungszeit.',
  formulaLabel: 'Berechnungsformel',
  formulaText: 'Korrigierte Zeit = gemessene Zeit hoch Filmfaktor.',
  manufacturerNote: 'Faktoren stammen aus der technischen Dokumentation von HARMAN. Nutzen Sie das Ergebnis als Praxis-Startwert.',
  resetLabel: 'Studie zurücksetzen',
  invalidTime: 'Geben Sie eine Zeit größer als Null ein.',
  sourceLabel: 'Herstellerhinweis',
};

const faq: FAQItem[] = [
  {
    question: 'Was ist der Reziprozitätsfehler (Schwarzschild-Effekt)?',
    answer: 'Der Reziprozitätsfehler beschreibt den Empfindlichkeitsverlust von Fotofilmen bei langen Belichtungszeiten. Bei schwachem Licht über längere Zeit baut sich die Bilddichte langsamer auf als vom Belichtungsmesser berechnet.',
  },
  {
    question: 'Wie berechnet dieser Rechner die Belichtungszeit?',
    answer: 'Er nutzt die HARMAN-Formel: Korrigierte Zeit entspricht der gemessenen Zeit hoch dem Filmfaktor P. Belichtungszeiten bis zu 1 Sekunde bleiben unverändert.',
  },
  {
    question: 'Warum hat jeder Film einen eigenen Korrekturfaktor?',
    answer: 'Die Effizienz der Silberhalogenidkristalle variiert je nach Emulsion. HARMAN veröffentlicht für HP5+, FP4+, DELTA und KENTMERE jeweils spezifische Faktoren.',
  },
  {
    question: 'Garantiert die korrigierte Zeit ein perfektes Negativ?',
    answer: 'Nein. Sehr lange Belichtungen unterliegen weiteren Variablen wie Messgenauigkeit, Entwicklung und Szenenkontrast. Nutzen Sie das Ergebnis als praxisnahen Richtwert und belichten Sie Sicherheitsvarianten.',
  },
];

const howTo: HowToStep[] = [
  { name: 'Film auswählen', text: 'Wählen Sie den eingelegten Schwarzweißfilm aus, um dessen spezifischen Faktor anzuwenden.' },
  { name: 'Gemessene Zeit eingeben', text: 'Geben Sie die vom Belichtungsmesser angezeigten Sekunden ein oder wählen Sie eine Vorlage.' },
  { name: 'Angepasste Belichtung ablesen', text: 'Stellen Sie den Verschluß auf die berechnete Belichtungszeit ein.' },
  { name: 'Belichtungsreihe durchführen', text: 'Führen Sie bei sehr langen Nachtaufnahmen Belichtungsreihen (Bracketing) durch.' },
];

const seo: ToolLocaleContent<FilmReciprocityFailureCalculatorUI>['seo'] = [
  {
    type: 'summary',
    title: 'Dokumentierte Langzeitbelichtungs Korrektur',
    items: [
      'Nutzt den offiziellen Faktor für 11 ILFORD und KENTMERE Schwarzweißfilme',
      'Vergleicht Messwert mit der tatsächlich benötigten Zeit der Emulsion',
      'Zeigt Zusatzsekunden, Blendenzuschlag und visuellen Belichtungsverlauf',
      'Bietet drei praxiserprobte Schnellwahl Vorlagen für die Dunkelkammer und unterwegs',
    ],
  },
  { type: 'title', text: 'Warum der Schwarzschild-Effekt eine Anpassung erfordert', level: 2 },
  {
    type: 'paragraph',
    html: 'Bei normalen Verschlusszeiten gilt das Reziprozitätsgesetz (Lichtintensität mal Zeit). Bei Langzeitbelichtungen verliert die Emulsion an Effizienz bei der Bildung stabiler Latentkeime. Der Belichtungsmesser zeigt dann eine rechnerisch korrekte, aber chemisch zu kurze Zeit an.',
  },
  { type: 'title', text: 'Die Formel des Herstellers hinter der Berechnung', level: 2 },
  {
    type: 'table',
    headers: ['Film', 'Offizieller Faktor', 'Beispiel bei 10 Sekunden'],
    rows: [
      ['ILFORD HP5+', '1.31', '20.4 Sekunden'],
      ['ILFORD FP4+', '1.26', '18.2 Sekunden'],
      ['ILFORD SFX 200', '1.43', '26.9 Sekunden'],
      ['KENTMERE 400', '1.30', '20.0 Sekunden'],
    ],
  },
  {
    type: 'paragraph',
    html: 'Der Rechner nutzt Tc = Tm<sup>P</sup>. Tm ist die gemessene Zeit in Sekunden, Tc die korrigierte Zeit und P der Filmfaktor. Bis 1 Sekunde ist laut HARMAN keine Korrektur nötig.',
  },
  {
    type: 'tip',
    title: 'Ergebnis als verlässlichen Startwert nutzen',
    html: 'Langzeitbelichtungen werden von vielen Faktoren beeinflusst. Belichtungsungenauigkeiten, Szenenkontrast und Entwicklung verändern die Dichte. Machen Sie bei wichtigen Motiven Sicherheitsbelichtungen.',
  },
  { type: 'title', text: 'Wann die Reziprozitätskorrektur angewendet wird', level: 2 },
  {
    type: 'list',
    items: [
      '<strong>Offizielle Faktoren nutzen:</strong> Stimmen Sie Film und Emulsion genau mit den Herstellerdaten ab.',
      '<strong>Prozess konstant halten:</strong> Entwickler, Temperatur und Kipprhythmus beeinflussen das Negativ.',
      '<strong>Sehr lange Zeiten staffeln:</strong> Je länger die Belichtung, desto sinnvoller sind Testbelichtungen.',
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
  inLanguage: 'de',
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
