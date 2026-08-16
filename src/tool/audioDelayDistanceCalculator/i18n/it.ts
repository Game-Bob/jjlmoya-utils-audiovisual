import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { AudioDelayUI } from '../ui';
import type { ToolLocaleContent, FAQItem, HowToStep } from '../../../types';

const slug = 'calcolatore-ritardo-audio-distanza-temperatura';
const title = 'Calcolatore di Ritardo Audio per Distanza e Temperatura';
const description = 'Calcola il tempo di ritardo acustico, la velocità del suono nell aria, lo sfasamento, i campioni digitali e la perdita SPL per le torri di ritardo PA.';

const ui: AudioDelayUI = {
  title: 'Calcolatore di Ritardo Audio per Distanza e Temperatura',
  subtitle: 'Calcola il tempo di ritardo di propagazione del suono, lo sfasamento acustico, il conteggio dei campioni e l attenuazione SPL per le casse di ritardo PA.',
  unitSystemLabel: 'Sistema di Unità',
  unitMetric: 'Metrico (m, °C)',
  unitImperial: 'Imperiale (ft, °F)',
  distanceLabel: 'Distanza dalla Torre di Ritardo',
  temperatureLabel: 'Temperatura dell Aria Ambiente',
  humidityLabel: 'Umidità Relativa',
  sampleRateLabel: 'Frequenza di Campionamento della Console',
  presetsTitle: 'Preimpostazioni Rapide di Scenario',
  presetSummerFestival: 'Festival Estivo (35°C, 40m)',
  presetIndoorConcert: 'Concerto al Chiuso (20°C, 25m)',
  presetTheater: 'Teatro Acustico (22°C, 15m)',
  presetWinterOutdoor: 'Evento Esterno Invernale (5°C, 50m)',
  resultDelayMs: 'Tempo di Ritardo',
  resultSamples: 'Campioni Digitali',
  resultSpeed: 'Velocità del Suono',
  resultSplLoss: 'Attenuazione SPL',
  phaseStatusLabel: 'Stato di Allineamento di Fase Acustica',
  statusDirectZone: 'Sincronizzazione Diretta del Fronte d Onda',
  statusHaasZone: 'Zona di Precedenza di Haas',
  statusEchoZone: 'Zona di Eco Percepibile',
  statusExtremeZone: 'Scostamento Critico di Ritardo',
  advicePhaseAligned: 'I segnali sono acusticamente sincronizzati entro 5ms. Elaborazione di ritardo minima richiesta.',
  adviceMinorHaas: 'Il suono giunge nella zona di Haas (5-35ms). La localizzazione naturale rimane sul palco principale.',
  adviceHaasDelayNeeded: 'La torre di ritardo richiede un offset temporale esatto per evitare la percezione di un eco distinto.',
  adviceCriticalDelayNeeded: 'Elevato scostamento. Applica un ritardo preciso per campioni per evitare il filtraggio a pettine.',
  unitMeters: 'm',
  unitFeet: 'ft',
  unitCelsius: '°C',
  unitFahrenheit: '°F',
  mainSpeakerLabel: 'PA Principale',
  delaySpeakerLabel: 'Torre di Ritardo',
  audienceLabel: 'Zona Pubblico',
  haasZoneLegend: 'Zona Haas (5-35ms)',
};

const faq: FAQItem[] = [
  {
    question: 'Perché la temperatura dell aria è importante nel calcolo del ritardo audio?',
    answer: 'La velocità del suono nell aria dipende direttamente dalla temperatura. A 0 gradi Celsius il suono viaggia a 331.3 metri al secondo mentre a 30 gradi Celsius accelera a circa 349 metri al secondo. Ignorare la temperatura provoca cancellazioni di fase.',
  },
  {
    question: 'Che cos è l Effetto Haas nella sonorizzazione dal vivo?',
    answer: 'L Effetto Haas o effetto di precedenza stabilisce che l udito umano localizza il suono verso il primo segnale giunto se i segnali secondari arrivano entro 5-35 millisecondi con intensità simile.',
  },
  {
    question: 'Come si converte il tempo di ritardo in campioni di console digitale?',
    answer: 'Moltiplica il tempo di ritardo in secondi per la frequenza di campionamento della console digitale. Ad esempio 50 millisecondi a 48 kHz equivalgono a 2400 campioni digitali.',
  },
];

const howTo: HowToStep[] = [
  {
    name: 'Misurare la Distanza Fisica',
    text: 'Misura la distanza fisica tra il PA principale e la torre di ritardo utilizzando un distanziometro laser.',
  },
  {
    name: 'Verificare la Temperatura dell Aria',
    text: 'Inserisci la temperatura ambiente attuale della location per determinare la velocità esatta di propagazione.',
  },
  {
    name: 'Selezionare la Frequenza di Campionamento',
    text: 'Imposta la frequenza di campionamento della console su 44.1 kHz, 48 kHz, 96 kHz o 192 kHz.',
  },
  {
    name: 'Applicare il Ritardo Calcolato',
    text: 'Inserisci il tempo di ritardo in millisecondi o campioni nel processore di segnale delle casse.',
  },
];

const seo: ToolLocaleContent<AudioDelayUI>['seo'] = [
  {
    type: 'summary',
    title: 'Caratteristiche di Allineamento del Ritardo Acustico',
    items: [
      'Calcolo preciso della velocità del suono in base a temperatura e umidità',
      'Conversione istantanea in campioni di console digitale (44.1k, 48k, 96k, 192k)',
      'Valutazione della zona di effetto Haas e allineamento di fase',
      'Stima dell attenuazione della pressione sonora SPL in decibel',
    ],
  },
  { type: 'title', text: 'Propagazione del Suono e Termodinamica Atmosferica', level: 2 },
  {
    type: 'paragraph',
    html: 'Il suono si propaga nell aria attraverso onde meccaniche di pressione. La sua velocità è governata principalmente dalla temperatura dell aria, calcolata come <code>c = 331.3 * sqrt(1 + T / 273.15)</code>.',
  },
  {
    type: 'stats',
    items: [
      { value: '343.2 m/s', label: 'Velocità del Suono a 20°C', icon: 'mdi:speedometer' },
      { value: '5-35 ms', label: 'Finestra di Precedenza Haas', icon: 'mdi:timer-sand' },
      { value: '48/96 kHz', label: 'Precisione Campione Console', icon: 'mdi:sine-wave' },
    ],
    columns: 3,
  },
  { type: 'title', text: 'Allineamento di Fase Acustica e Prevenzione del Filtraggio a Pettine', level: 3 },
  {
    type: 'paragraph',
    html: 'Quando due sistemi di casse emettono lo stesso segnale senza un allineamento temporale preciso, i loro fronti d onda si sovrappongono generando differenze di fase e filtraggio a pettine.',
  },
  {
    type: 'list',
    items: [
      '<strong>Allineamento Temporale:</strong> Ritarda le torri secondarie per farle coincidere con il PA principale.',
      '<strong>Prevenzione del Filtraggio a Pettine:</strong> Elimina le cancellazioni di fase nello spettro udibile.',
      '<strong>Localizzazione Haas:</strong> Mantiene la percezione della sorgente acustica sul palco principale.',
      '<strong>Precisione al Campione:</strong> Fornisce il numero esatto di campioni digitali per le matrici di uscita.',
    ],
    icon: 'mdi:check-circle',
  },
  {
    type: 'comparative',
    items: [
      {
        title: 'Allineamento Diretto PA',
        description: 'Ritardo fisico pari alla distanza percorribile dal suono',
        icon: 'mdi:target',
        points: ['Coerenza di fase perfetta', 'Ideale per casse in-fill', 'Zero filtraggio a pettine'],
      },
      {
        title: 'Allineamento con Offset Haas',
        description: 'Ritardo fisico più offset di precedenza da 5 a 15ms',
        icon: 'mdi:music-clef-treble',
        points: ['Localizzazione naturale sul palco', 'Migliore intelligibilità della voce', 'Ideale per torri di ritardo'],
        highlight: true,
      },
    ],
    columns: 2,
  },
  {
    type: 'table',
    headers: ['Scenario di Sonorizzazione', 'Distanza (m)', 'Temp (°C)', 'Tempo Ritardo (ms)', 'Campioni (48kHz)'],
    rows: [
      ['Rinfianco Balconata Teatro', '15 m', '22 °C', '43.5 ms', '2.090 campioni'],
      ['Concerto in Palazzetto', '25 m', '20 °C', '72.8 ms', '3.494 campioni'],
      ['Palco Principale Festival', '40 m', '35 °C', '113.6 ms', '5.453 campioni'],
      ['Evento Serale Invernale', '50 m', '5 °C', '149.5 ms', '7.176 campioni'],
    ],
  },
  {
    type: 'proscons',
    items: [
      {
        pro: 'Precisione al campione sotto il millisecondo per console digitali',
        con: 'Richiede misurazioni accurate della distanza fisica',
      },
      {
        pro: 'Tiene conto della temperatura ambiente e dell umidità relativa',
        con: 'I gradienti di vento all aperto richiedono un monitoraggio continuo',
      },
    ],
    proTitle: 'Vantaggi',
    conTitle: 'Considerazioni',
  },
  {
    type: 'glossary',
    items: [
      {
        term: 'Effetto Haas',
        definition: 'Fenomeno psicoacustico per cui l udito localizza il suono verso il primo segnale giunto entro 5-35 ms.',
      },
      {
        term: 'Filtraggio a Pettine',
        definition: 'Distorisione nella risposta in frequenza causata dalla somma di un segnale con una sua versione ritardata.',
      },
      {
        term: 'Frequenza di Campionamento',
        definition: 'Numero di campioni audio elaborati al secondo da una console digitale o matrice DSP.',
      },
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

export const content: ToolLocaleContent<AudioDelayUI> = {
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
