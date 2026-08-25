import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { FilmDevelopmentTemperatureUI } from '../ui';
import { bibliography } from '../bibliography';

const ui: FilmDevelopmentTemperatureUI = {
  faqTitle: 'Domande sulla temperatura di sviluppo pellicola',
  bibliographyTitle: 'Riferimenti principali',
  chooseDocumentedCombination: 'Scegli una combinazione pellicola e rivelatore documentata',
  filmLabel: 'Pellicola fotografica',
  developerLabel: 'Rivelatore',
  dilutionLabel: 'Diluizione',
  temperatureLabel: 'Temperatura rivelatore',
  temperatureHelp: 'Inserisci la temperatura del rivelatore nella tank. La guida parte dal tempo documentato a 20 °C.',
  unitSwitchLabel: 'Unità di temperatura',
  metricLabel: 'Metrico °C',
  imperialLabel: 'Imperiale °F',
  currentReadingLabel: 'Misurazione in camera oscura',
  baseTimeLabel: 'A 20 °C',
  adjustedTimeLabel: 'Tempo iniziale regolato',
  temperatureGuideLabel: 'Note di temperatura sul campo',
  temperatureGuideHelp: 'Guida pratica attorno alla temperatura misurata. La riga evidenziata corrisponde alla tua lettura.',
  sourceLabel: 'Combinazione documentata',
  eiLabel: 'Impostazione esposimetro',
  statusCool: 'Bagno più freddo',
  statusSteady: 'Vicino allo standard',
  statusWarm: 'Bagno più caldo',
  warningShortTime: 'Un tempo inferiore a 5 minuti aumenta il rischio di sviluppo disomogeneo. Scegli un processo documentato o prolunga il tempo solo dopo test personali.',
  warningOutOfRange: 'Questa misura è al limite dell\'intervallo consigliato. Mantieni stabile la temperatura del rivelatore e verifica i dati del produttore.',
  guideNotice: 'Questa è una guida iniziale, non una garanzia. Agitazione, attrezzatura, contrasto obiettivo e processo personale alterano il risultato.',
  resetLabel: 'Ripristina la prima combinazione documentata',
  minutesLabel: 'min',
  secondsLabel: 'sec',
  currentBadge: 'Attuale',
  belowFiveMinutes: 'Sotto i 5 minuti',
  tableTemperature: 'Temperatura',
  tableTime: 'Tempo guida',
  tableDifference: 'Scarto da 20 °C',
  currentRow: 'Attuale',
};

const softwareApplication: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Calcolatore Tempo Sviluppo Pellicola per Temperatura',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  description: 'Regola il tempo di sviluppo della pellicola in bianco e nero in base alla temperatura misurata del rivelatore.',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
};

const faqPage: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Quale temperatura di base utilizza il calcolatore?', acceptedAnswer: { '@type': 'Answer', text: 'Ogni combinazione parte dal tempo ufficiale del produttore a 20 °C e lo adatta in base alla temperatura reale del rivelatore.' } },
    { '@type': 'Question', name: 'I tempi regolati sono garantiti al 100%?', acceptedAnswer: { '@type': 'Answer', text: 'No. Sono riferimenti pratici di partenza. Agitazione, tipo di tank, stato del chimico e contrasto desiderato modificano il risultato finale.' } },
    { '@type': 'Question', name: 'Perché c\'è un avviso per i tempi sotto i 5 minuti?', acceptedAnswer: { '@type': 'Answer', text: 'Tempi di sviluppo molto brevi lasciano poco margine per versamento e svuotamento, aumentando il rischio di uno sviluppo disomogeneo dell\'emulsione.' } },
    { '@type': 'Question', name: 'Cosa fare se la mia combinazione pellicola e rivelatore non è in elenco?', acceptedAnswer: { '@type': 'Answer', text: 'Consulta la scheda tecnica ufficiale del produttore o una tabella di sviluppo riconosciuta. Questo strumento non inventa dati non documentati.' } },
  ],
};

const howTo: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Come regolare il tempo di sviluppo pellicola in base alla temperatura',
  step: [
    { '@type': 'HowToStep', name: 'Seleziona la pellicola', text: 'Scegli la pellicola in bianco e nero caricata nella tua tank.' },
    { '@type': 'HowToStep', name: 'Abbina il rivelatore e la diluizione', text: 'Seleziona il rivelatore e la diluizione esatta previsti dalle specifiche.' },
    { '@type': 'HowToStep', name: 'Misura la temperatura', text: 'Misura e inserisci la temperatura reale della soluzione del rivelatore.' },
    { '@type': 'HowToStep', name: 'Usa il tempo regolato', text: 'Utilizza il tempo calcolato come punto di partenza pratico per lo sviluppo in camera oscura.' },
  ],
};

export const content: ToolLocaleContent<FilmDevelopmentTemperatureUI> = {
  slug: 'calcolatore-tempo-sviluppo-pellicola-temperatura',
  title: 'Calcolatore Tempo Sviluppo Pellicola per Temperatura',
  description: 'Regola il tempo di sviluppo della pellicola in bianco e nero in base alla temperatura misurata del rivelatore, con tabella di riferimento.',
  ui,
  seo: [
    { type: 'title', level: 2, text: 'Come compensare il tempo di sviluppo pellicola in base alla temperatura' },
    { type: 'paragraph', html: 'Seleziona la combinazione esatta di pellicola, rivelatore e diluizione documentata nella tabella, quindi inserisci la temperatura misurata della soluzione di lavoro. Il calcolatore parte dal tempo di riferimento a 20 °C e fornisce il tempo iniziale regolato.' },
    { type: 'title', level: 3, text: 'Considera il risultato come un valido punto di partenza' },
    { type: 'paragraph', html: 'La temperatura altera la reattività chimica dello sviluppo: una soluzione più calda richiede meno tempo, mentre una soluzione più fredda richiede una durata maggiore. La tabella di riferimento evidenzia chiaramente l\'andamento temporale attorno alla tua misurazione.' },
    { type: 'tip', title: 'Mantieni rigorose le procedure di laboratorio', html: 'Non considerare un tempo calcolato come una regola assoluta e immutabile. Il ritmo di agitazione, la geometria della tank, lo stato di conservazione del rivelatore e i tuoi test personali rimangono fondamentali.' },
    { type: 'title', level: 3, text: 'Perché affidarsi esclusivamente a combinazioni ufficiali' },
    { type: 'list', items: ['L\'abbinamento pellicola e rivelatore determina grana, acutanza e sensibilità effettiva.', 'La diluizione cambia la velocità di esaurimento del chimico e non può essere dedotta a intuito.', 'I tempi inferiori a 5 minuti richiedono estrema cautela perché piccole variazioni nei tempi di svuotamento influiscono in modo determinante.'] },
  ],
  faq: [
    { question: 'Quale temperatura di base utilizza il calcolatore?', answer: 'Ogni combinazione parte dal tempo ufficiale del produttore a 20 °C e lo adatta in base alla temperatura reale del rivelatore.' },
    { question: 'I tempi regolati sono garantiti al 100%?', answer: 'No. Sono riferimenti pratici di partenza. Agitazione, tipo di tank, stato del chimico e contrasto desiderato modificano il risultato finale.' },
    { question: 'Perché c\'è un avviso per i tempi sotto i 5 minuti?', answer: 'Tempi di sviluppo molto brevi lasciano poco margine per versamento e svuotamento, aumentando il rischio di uno sviluppo disomogeneo dell\'emulsione.' },
    { question: 'Cosa fare se la mia combinazione pellicola e rivelatore non è in elenco?', answer: 'Consulta la scheda tecnica ufficiale del produttore o una tabella di sviluppo riconosciuta. Questo strumento non inventa dati non documentati.' },
  ],
  bibliography,
  howTo: [
    { name: 'Seleziona la pellicola', text: 'Scegli la pellicola in bianco e nero caricata nella tua tank.' },
    { name: 'Abbina il rivelatore e la diluizione', text: 'Seleziona il rivelatore e la diluizione esatta previsti dalle specifiche.' },
    { name: 'Misura la temperatura', text: 'Misura e inserisci la temperatura reale della soluzione del rivelatore.' },
    { name: 'Usa il tempo regolato', text: 'Utilizza il tempo calcolato come punto di partenza pratico per lo sviluppo in camera oscura.' },
  ],
  schemas: [softwareApplication, faqPage, howTo],
};
