import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { FAQItem, HowToStep, ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';
import type { FilmReciprocityFailureCalculatorUI } from '../ui';

const slug = 'calcolatore-difetto-reciprocita-pellicola-fotografica';
const title = 'Calcolatore Difetto di Reciprocità Pellicola Fotografica';
const description = 'Calcola la correzione delle lunghe esposizioni analogiche con i fattori ufficiali di pellicole ILFORD e KENTMERE.';

const ui: FilmReciprocityFailureCalculatorUI = {
  faqTitle: 'Domande sul difetto di reciprocità nella pellicola',
  bibliographyTitle: 'Fonti',
  studyLabel: 'Studio sulle lunghe esposizioni',
  studyTitle: 'Lascia alla pellicola il suo tempo',
  studyText: 'L\'esposimetro misura la luce istantanea. L\'emulsione richiede più tempo per sviluppare la medesima densità.',
  filmLabel: 'Seleziona una pellicola',
  filmHint: 'Utilizza il fattore ufficiale fornito per la pellicola ILFORD o KENTMERE scelta.',
  measuredTimeLabel: 'Inserisci il tempo dell\'esposimetro',
  measuredTimeHint: 'La correzione si applica per tempi superiori a 1 secondo.',
  secondsUnit: 'secondi',
  filmMenuLabel: 'Menu delle pellicole',
  presetsLabel: 'Preimpostazioni di scatto',
  presetShort: 'Soglia di reciprocità',
  presetNight: 'Strada notturna',
  presetDeepNight: 'Notte profonda',
  resultLabel: 'Esposizione corretta',
  correctedTimeLabel: 'Tempo finale consigliato',
  addedTimeLabel: 'Tempo aggiuntivo',
  correctionStopsLabel: 'Incremento in stop (EV)',
  correctionFactorLabel: 'Fattore pellicola',
  noCorrection: 'Nessuna correzione necessaria',
  correctionNeeded: 'Correzione di reciprocità attiva',
  longExposure: 'Ambito di lunga esposizione',
  meterTimeLabel: 'Tempo esposimetro',
  filmTimeLabel: 'Tempo regolato',
  exposurePathLabel: 'Evoluzione visiva dell\'esposizione',
  exposurePathText: 'La striscia di pellicola si allunga dal tempo iniziale misurato fino al tempo finale calcolato.',
  formulaLabel: 'Formula di calcolo',
  formulaText: 'Tempo corretto = tempo misurato elevato alla potenza del fattore.',
  manufacturerNote: 'Fattori tratti dalla documentazione tecnica HARMAN. Usa il risultato come punto di partenza ideale.',
  resetLabel: 'Ripristina calcolo',
  invalidTime: 'Inserisci un tempo maggiore di zero.',
  sourceLabel: 'Nota del produttore',
};

const faq: FAQItem[] = [
  {
    question: 'Che cos\'è il difetto di reciprocità (effetto Schwarzschild)?',
    answer: 'Il difetto di reciprocità è la perdita di sensibilità della pellicola durante le lunghe esposizioni. La luce ricevuta in tempi prolungati genera una densità inferiore a quella teorica prevista dall\'esposimetro.',
  },
  {
    question: 'Come viene calcolato il tempo corretto?',
    answer: 'Applica la formula HARMAN: tempo corretto pari al tempo misurato elevato alla potenza del fattore P. I tempi pari o inferiori a 1 secondo non subiscono variazioni.',
  },
  {
    question: 'Perché ogni pellicola ha un fattore di correzione diverso?',
    answer: 'La risposta dei cristalli d\'alogenuro d\'argento varia in base all\'emulsione. HARMAN indica fattori specifici per HP5+, FP4+, DELTA e KENTMERE.',
  },
  {
    question: 'Il tempo calcolato assicura un negativo perfetto?',
    answer: 'No. Nelle esposizioni molto lunghe intervengono altri fattori come l\'accuratezza della misurazione, il contrasto e lo sviluppo. Usa il dato come ottima base e fai del bracketing.',
  },
];

const howTo: HowToStep[] = [
  { name: 'Seleziona la pellicola', text: 'Scegli la pellicola utilizzata per applicare il rispettivo fattore ufficiale.' },
  { name: 'Inserisci il tempo misurato', text: 'Imposta i secondi indicati dal tuo esposimetro o seleziona un preset.' },
  { name: 'Leggi l\'esposizione regolata', text: 'Imposta l\'otturatore sul tempo finale calcolato.' },
  { name: 'Esegui un bracketing', text: 'Nelle foto notturne molto lunghe effettua scatti di controllo con variazioni di tempo.' },
];

const seo: ToolLocaleContent<FilmReciprocityFailureCalculatorUI>['seo'] = [
  {
    type: 'summary',
    title: 'Correzione documentata per le lunghe esposizioni',
    items: [
      'Applica il fattore ufficiale per 11 pellicole in bianco e nero ILFORD e KENTMERE',
      'Confronta la lettura dell\'esposimetro con il tempo reale richiesto dall\'emulsione',
      'Mostra i secondi extra, l\'incremento in stop EV e il percorso visivo',
      'Include tre preimpostazioni pratiche per semplificare le riprese in notturna',
    ],
  },
  { type: 'title', text: 'Perché la lunga esposizione richiede di correggere la reciprocità', level: 2 },
  {
    type: 'paragraph',
    html: 'Ai tempi di scatto ordinari, la legge di reciprocità stabilisce che l\'esposizione è il prodotto dell\'intensità luminosa per il tempo. Nelle lunghe esposizioni, l\'emulsione perde efficienza nella formazione dei centri di immagine latente. L\'esposimetro indica quindi un tempo fisicamente corretto ma chimicamente insufficiente.',
  },
  { type: 'title', text: 'La formula del produttore utilizzata', level: 2 },
  {
    type: 'table',
    headers: ['Pellicola', 'Fattore ufficiale', 'Esempio a 10 secondi'],
    rows: [
      ['ILFORD HP5+', '1.31', '20.4 secondi'],
      ['ILFORD FP4+', '1.26', '18.2 secondi'],
      ['ILFORD SFX 200', '1.43', '26.9 secondi'],
      ['KENTMERE 400', '1.30', '20.0 secondi'],
    ],
  },
  {
    type: 'paragraph',
    html: 'Il calcolatore applica Tc = Tm<sup>P</sup>, dove Tm è il tempo misurato in secondi, Tc è il tempo corretto e P è il fattore pubblicato da HARMAN. Fino a 1 secondo non è richiesta alcuna compensazione.',
  },
  {
    type: 'tip',
    title: 'Utilizza il valore come punto di partenza',
    html: 'Le esposizioni prolungate dipendono da molteplici variabili. Errore di lettura dell\'esposimetro, contrasto della scena e sviluppo influiscono sulla densità del negativo. Esegui del bracketing per le inquadrature più importanti.',
  },
  { type: 'title', text: 'Quando applicare la correzione di reciprocità', level: 2 },
  {
    type: 'list',
    items: [
      '<strong>Utilizza fattori ufficiali:</strong> Abbina esattamente la pellicola ai dati forniti dal produttore.',
      '<strong>Mantieni costante lo sviluppo:</strong> Chimica, temperatura e agitazione determinano la densità finale.',
      '<strong>Effettua il bracketing:</strong> Più il tempo è lungo, più diventa utile effettuare scatti di prova attorno al valore calcolato.',
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
  inLanguage: 'it',
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
