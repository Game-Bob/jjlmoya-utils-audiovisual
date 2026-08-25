import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { FAQItem, HowToStep, ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';
import type { AdamsZoneSystemUI } from '../ui';

const slug = 'visualizzatore-sistema-zone-ansel-adams-zone-esposizione';
const title = 'Visualizzatore Sistema Zone Ansel Adams Zone Esposizione';
const description = 'Esplora le Zone da 0 a IX, posiziona un tono misurato con cambi di stop precisi e collega le scelte di esposizione allo sviluppo normale, N meno e N più.';

const ui: AdamsZoneSystemUI = {
  faqTitle: 'Domande sul Sistema delle Zone',
  bibliographyTitle: 'Fonti',
  orientationTitle: 'Posizionamento delle zone',
  orientationText: 'Scegli il tono misurato sulla scena, seleziona la zona in cui desideri posizionarlo e usa la variazione di stop come istruzione di esposizione. La nota sullo sviluppo aiuta a proteggere le luci o ad aprire le ombre.',
  measuredToneLabel: 'Tono misurato nella scena',
  targetPlacementLabel: 'Posiziona quel tono in',
  developmentLabel: 'Intenzione di sviluppo',
  normalDevelopment: 'Normale',
  minusDevelopment: 'N meno',
  plusDevelopment: 'N più',
  presetsLabel: 'Inizia con una nota sul campo',
  presetShadow: 'Ombra dettagliata',
  presetSkin: 'Pelle chiara',
  presetSnow: 'Neve al sole',
  presetNight: 'Ombra notturna',
  zoneStripLabel: 'Striscia delle zone dal nero al bianco',
  meterBaselineLabel: 'Riferimento esposimetro: Zona V',
  selectedToneLabel: 'Tono misurato',
  placementResultLabel: 'Risultato del posizionamento',
  exposureShiftLabel: 'Variazione di esposizione rispetto al grigio medio',
  tonalDistanceLabel: 'Distanza dal tono misurato',
  luminanceLabel: 'Luminanza relativa',
  stopsFromMiddleLabel: 'Stop dalla Zona V',
  developmentAdviceLabel: 'Lettura del negativo',
  techniqueLabel: 'Indicazione per la camera oscura',
  resetLabel: 'Ripristina esempio',
  meterAssumption: 'Un esposimetro a luce riflessa posiziona qualsiasi misurazione sul grigio medio della Zona V a meno che non si applichi una compensazione.',
  zonePrefix: 'Zona',
  zoneNames: 'Nero puro|Quasi nero|Ombra profonda|Ombra dettagliata|Mezzotono scuro|Grigio medio|Mezzotono chiaro|Luci dettagliate|Luci brillanti|Quasi bianco',
  zoneDescriptions: 'Nero massimo senza dettaglio visibile.|Prima separazione dal nero senza dettaglio percepibile.|Primo cenno di dettaglio nelle ombre scure importanti.|Dettaglio utile nelle ombre e ancoraggio classico di posizionamento.|Ombra aperta e fogliame scuro con forma nitida.|Punto di riferimento neutro dell esposimetro.|Pelle chiara, pietra intemperata e fogliame luminoso.|Dettaglio luminoso da mantenere stampabile o leggibile.|Tono molto luminoso con pochissimo dettaglio residuo.|Quasi bianco puro con solo una traccia di separazione.',
  increaseExposure: 'Apri l esposizione della quantità indicata per portare la lettura nella zona scelta.',
  decreaseExposure: 'Riduci l esposizione della quantità indicata per mantenere la lettura nella zona scelta.',
  holdExposure: 'Conserva la lettura dell esposimetro invariata perché l obiettivo è la Zona V.',
  protectHighlights: 'Controllo delle luci',
  openShadows: 'Separazione delle ombre',
  balancedPlacement: 'Posizionamento bilanciato',
  normalAdvice: 'Lo sviluppo normale mantiene il contrasto della scena vicino al valore misurato.',
  minusAdvice: 'Lo sviluppo N meno comprime un intervallo luminoso e mantiene le luci stampabili.',
  plusAdvice: 'Lo sviluppo N più espande un intervallo stretto e separa meglio le ombre importanti.',
};

const faq: FAQItem[] = [
  {
    question: 'Che cosa misura il Sistema delle Zone?',
    answer: 'Il Sistema delle Zone è un metodo per visualizzare e controllare la gamma tonale di una fotografia dal nero profondo al bianco brillante. Collega la luminanza misurata alla zona finale e alle scelte di sviluppo.',
  },
  {
    question: 'Perché l esposimetro parte dalla Zona V?',
    answer: 'Un esposimetro a luce riflessa è tarato per considerare la sua lettura media come grigio medio di riferimento. Per mantenere un ombra scura o un soggetto chiaro brillante occorre compensare distanziandosi dalla Zona V.',
  },
  {
    question: 'Quanti stop separano le zone?',
    answer: 'Le zone intere adiacenti sono separate da uno stop completo. Spostarsi dalla Zona V alla Zona VII richiede due stop in più di esposizione.',
  },
  {
    question: 'Che cosa significano N meno e N più?',
    answer: 'Sono regolazioni dello sviluppo usate per gestire il contrasto della scena. N meno riduce il contrasto per soggetti ad alto contrasto, mentre N più lo aumenta per soggetti piatti.',
  },
];

const howTo: HowToStep[] = [
  { name: 'Scegliere il tono misurato', text: 'Seleziona la zona che descrive meglio il punto misurato con l esposimetro.' },
  { name: 'Selezionare il posizionamento finale', text: 'Tocca la zona in cui desideri collocare quel tono sul negativo o sulla stampa.' },
  { name: 'Applicare il cambio di esposizione', text: 'Usa la variazione di stop per decidere se aprire o chiudere il diaframma.' },
  { name: 'Adattare lo sviluppo', text: 'Usa la nota sullo sviluppo per regolare il tempo di trattamento in camera oscura.' },
];

const seo: ToolLocaleContent<AdamsZoneSystemUI>['seo'] = [
  {
    type: 'summary',
    title: 'Guida visuale al Sistema delle Zone sul campo',
    items: [
      'Esplora ogni tono dalla Zona 0 alla Zona IX su una scala graduata leggibile',
      'Traduci il posizionamento desiderato in una variazione di stop precisa dalla Zona V',
      'Confronta il tono misurato con la resa da conservare nella stampa finale',
      'Usa N meno, normale e N più per controllare il contrasto in modo consapevole',
    ],
  },
  { type: 'title', text: 'Come funziona il Sistema delle Zone di Ansel Adams', level: 2 },
  {
    type: 'paragraph',
    html: 'Il Sistema delle Zone trasforma un intervallo continuo di luminosità in dieci zone di riferimento. La Zona V rappresenta il grigio medio di riferimento dell esposimetro.',
  },
  { type: 'title', text: 'Lettura dell esposizione sulla scala delle zone', level: 2 },
  {
    type: 'table',
    headers: ['Posizionamento', 'Resa visiva', 'Azione esposimetro'],
    rows: [
      ['Zona II', 'Ombra profonda con dettaglio appena visibile', 'Riduci l esposizione di 3 stop dalla Zona V'],
      ['Zona III', 'Dettaglio importante nelle ombre', 'Riduci l esposizione di 2 stop dalla Zona V'],
      ['Zona V', 'Riferimento neutro grigio medio', 'Mantieni la misurazione dell esposimetro'],
      ['Zona VI', 'Mezzotono chiaro come pelle chiara', 'Aumenta l esposizione di 1 stop dalla Zona V'],
      ['Zona VII', 'Luci dettagliate da preservare', 'Aumenta l esposizione di 2 stop dalla Zona V'],
    ],
  },
  {
    type: 'tip',
    title: 'Usa il posizionamento come scelta creativa',
    html: 'Non considerare la lettura dell esposimetro come l unico modo per rendere un soggetto. Scegli il tono più significativo e posizionalo deliberatamente.',
  },
  { type: 'title', text: 'Quando lo sviluppo modifica il contrasto', level: 2 },
  {
    type: 'list',
    items: [
      '<strong>Sviluppo normale:</strong> Mantiene il contrasto del soggetto misurato entro i valori standard del negativo.',
      '<strong>Sviluppo N meno:</strong> Comprime un soggetto ad alto contrasto per evitare il blocco delle luci.',
      '<strong>Sviluppo N più:</strong> Espande un soggetto a basso contrasto per separare meglio le ombre.',
    ],
  },
  {
    type: 'glossary',
    items: [
      { term: 'Zona', definition: 'Intervallo tonale di riferimento distanziato di uno stop dal successivo.' },
      { term: 'Posizionamento', definition: 'Scelta deliberata della zona finale in cui collocare un tono misurato.' },
      { term: 'Grigio medio', definition: 'Riferimento neutro della Zona V usato dagli esposimetri.' },
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
  inLanguage: 'it',
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
