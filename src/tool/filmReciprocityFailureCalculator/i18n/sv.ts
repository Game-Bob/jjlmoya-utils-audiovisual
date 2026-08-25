import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { FAQItem, HowToStep, ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';
import type { FilmReciprocityFailureCalculatorUI } from '../ui';

const slug = 'film-reciprocitetsfel-kalkylator-fotografering';
const title = 'Film Reciprocitetsfel Kalkylator (Schwarzschild Effekten)';
const description = 'Korrigera långa exponeringstider för analog film med officiella faktorer från ILFORD och KENTMERE.';

const ui: FilmReciprocityFailureCalculatorUI = {
  faqTitle: 'Frågor om reciprocitetsfel för film',
  bibliographyTitle: 'Källor',
  studyLabel: 'Studie av lång exponering',
  studyTitle: 'Ge filmen tillräckligt med tid',
  studyText: 'Ljusmätaren mäter det inkommande ljuset direkt. Emulsionen behöver längre tid för att bygga upp samma täthet.',
  filmLabel: 'Välj en filmtyp',
  filmHint: 'Använd den officiella faktorn för den valda ILFORD- eller KENTMERE-filmen.',
  measuredTimeLabel: 'Ange mätarens exponeringstid',
  measuredTimeHint: 'Kompensationen gäller för tider över 1 sekund.',
  secondsUnit: 'sekunder',
  filmMenuLabel: 'Filmlista meny',
  presetsLabel: 'Snabbval för fältstudie',
  presetShort: 'Gräns för reciprocitetsfel',
  presetNight: 'Nattlig gata',
  presetDeepNight: 'Djup natt',
  resultLabel: 'Korrigerad exponering',
  correctedTimeLabel: 'Rekommenderad slutlig tid',
  addedTimeLabel: 'Extra tid',
  correctionStopsLabel: 'Exponeringslyft (bländarsteg EV)',
  correctionFactorLabel: 'Filmfaktor',
  noCorrection: 'Ingen korrigering behövs',
  correctionNeeded: 'Reciprocitetskorrigering aktiv',
  longExposure: 'Område för lång exponering',
  meterTimeLabel: 'Mätarens tid',
  filmTimeLabel: 'Justerad tid',
  exposurePathLabel: 'Visuell exponeringssekvens',
  exposurePathText: 'Filmremsan förlängs visuellt från den uppmätta tiden till den korrigerade tiden.',
  formulaLabel: 'Beräkningsformel',
  formulaText: 'Korrigerad tid = uppmätt tid upphöjt till filmfaktorn.',
  manufacturerNote: 'Faktorer från HARMANs tekniska dokumentation. Använd resultatet som utgångspunkt.',
  resetLabel: 'Återställ beräkning',
  invalidTime: 'Ange en tid större än noll.',
  sourceLabel: 'Tillverkarnotering',
};

const faq: FAQItem[] = [
  {
    question: 'Vad är reciprocitetsfel (Schwarzschild-effekten) vid filmfotografering?',
    answer: 'Reciprocitetsfel innebär att filmens känslighet minskar vid långa exponeringstider. Samma mängd ljus utdragen över längre tid ger lägre täthet i negativet än vad ljusmätaren beräknar.',
  },
  {
    question: 'Hur beräknar detta verktyg den justerade tiden?',
    answer: 'Det använder HARMANs formel: korrigerad tid (Tc) är lika med uppmätt tid (Tm) upphöjt till filmfaktorn P. Tider upp till 1 sekund behöver ingen korrigering.',
  },
  {
    question: 'Varför har olika filmer olika korrektionsfaktorer?',
    answer: 'Silverhalogenidkristallernas effektivitet varierar beroende på emulsionen. HARMAN anger specifika faktorer för HP5+, FP4+, DELTA och KENTMERE.',
  },
  {
    question: 'Garanterar den beräknade tiden ett perfekt negativ?',
    answer: 'Nej. Vid mycket långa exponeringar påverkar även mätprecision, motivkontrast och framkallning. Använd tiden som utgångspunkt och gör exponeringsserier (bracketing).',
  },
];

const howTo: HowToStep[] = [
  { name: 'Välj filmtyp', text: 'Välj den film som är laddad i kameran för att använda dess officiella faktor.' },
  { name: 'Ange mätarens tid', text: 'Skriv in tiden i sekunder från din ljusmätare.' },
  { name: 'Läs av korrigerad tid', text: 'Ställ in kamerans slutartid på den beräknade tiden.' },
  { name: 'Gör en exponeringsserie (bracketing)', text: 'Vid långa nattfotograferingar bör du ta extra bilder med varierade exponeringstider.',
  },
];

const seo: ToolLocaleContent<FilmReciprocityFailureCalculatorUI>['seo'] = [
  {
    type: 'summary',
    title: 'Dokumenterad korrigering för lång exponering',
    items: [
      'Tillämpar officiella faktorer för 11 ILFORD- och KENTMERE-svartvitfilmer',
      'Jämför ljusmätarens värde med den tid emulsionen faktiskt kräver',
      'Visar extrasekunder, bländarstegskompensation (EV) och visuell tidslinje',
      'Innehåller tre praktiska förinställningar för nattfotografering',
    ],
  },
  { type: 'title', text: 'Varför lång exponering kräver korrigering för reciprocitetsfel', level: 2 },
  {
    type: 'paragraph',
    html: 'Vid normala slutartider gäller reciprocitetslagen (ljusstyrka x tid). Vid långa exponeringar minskar emulsionens effektivitet att bilda stabila latentbilder. Ljusmätaren visar en tid som är fysikaliskt korrekt men kemiskt för kort.',
  },
  { type: 'title', text: 'Tillverkarens formel bakom beräkningen', level: 2 },
  {
    type: 'table',
    headers: ['Film', 'Officiell faktor', 'Exempel vid 10 sekunder'],
    rows: [
      ['ILFORD HP5+', '1.31', '20.4 sekunder'],
      ['ILFORD FP4+', '1.26', '18.2 sekunder'],
      ['ILFORD SFX 200', '1.43', '26.9 sekunder'],
      ['KENTMERE 400', '1.30', '20.0 sekunder'],
    ],
  },
  {
    type: 'paragraph',
    html: 'Kalkylatorn använder Tc = Tm<sup>P</sup>, där Tm är uppmätt tid i sekunder, Tc är korrigerad tid och P är faktorn från HARMAN. Upp till 1 sekund behövs ingen kompensering.',
  },
  {
    type: 'tip',
    title: 'Använd resultatet som en praktisk utgångspunkt',
    html: 'Långa exponeringar påverkas av fler faktorer än reciprocitetsfelet. Mätfel, motivkontrast och framkallningsrutiner påverkar negativet. Gör exponeringsserier vid viktiga bilder.',
  },
  { type: 'title', text: 'När du ska använda reciprocitetskorrigering', level: 2 },
  {
    type: 'list',
    items: [
      '<strong>Använd officiella faktorer:</strong> Matcha filmen noggrant med tillverkarens specifikationer.',
      '<strong>Håll framkallningen konstant:</strong> Framkallare och agitering påverkar slutlig täthet.',
      '<strong>Gör exponeringsserier:</strong> Ju längre exponering, desto viktigare är det att ta testbilder.',
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
  inLanguage: 'sv',
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
