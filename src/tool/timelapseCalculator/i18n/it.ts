import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { TimelapseUI, TimelapseLocaleContent } from '../index';

const slug = 'calcolatore-timelapse-hyperlapse-intervalli-perfetti';
const title = 'Calcolatore Timelapse e Hyperlapse: Intervalli Perfetti';
const description = 'Calcola l\'intervallo esatto tra le foto, la durata totale e lo spazio di archiviazione per i tuoi timelapse. Strumento essenziale per i fotografi.';

const ui: TimelapseUI = {
    title: "Calcolatore Timelapse",
    paramsTitle: "Parametri",
    eventDuration: "Quanto dura l'evento reale?",
    hours: "Ore",
    minutes: "Minuti",
    videoDuration: "Quale video finale desideri?",
    seconds: "Durata (sec)",
    fps: "FPS",
    resultsTitle: "Risultati",
    intervalLabel: "Imposta l'intervallometro su:",
    secondsUnit: "secondi",
    totalPhotos: "Foto Totali",
    speed: "Velocità",
    shutterSpeed: "Tempo di Otturazione",
    storage: "Dimensione (RAW)",
    rule180Info: "La regola dei 180° suggerisce un tempo di otturazione pari alla metà dell'intervallo per un motion blur fluido.",
};

const faq: TimelapseLocaleContent['faq'] = [
    {
        question: "Come scelgo l'intervallo corretto per il mio timelapse?",
        answer: "Dipende dalla velocità del movimento che stai catturando. Per nuvole veloci, usa 2-3 secondi. Per il movimento del sole o delle stelle, 15-30 secondi. Per la crescita di piante o cantieri edili, 5-15 minuti.",
    },
    {
        question: "Quante foto servono per un video di un minuto?",
        answer: "Un video standard ha 24 o 30 fotogrammi al secondo (fps). Per un minuto di video a 24fps, servono esattamente 1440 fotografie (60 secondi * 24 foto/secondo).",
    },
    {
        question: "Cos'è il 'Flicker' e come posso evitarlo?",
        answer: "È un fastidioso sfarfallio causato da piccole variazioni di esposizione tra le foto. Per evitarlo, usa sempre la modalità manuale (M), il bilanciamento del bianco fisso e preferisci obiettivi con ghiera del diaframma manuale.",
    },
    {
        question: "Perché il tempo di otturazione è importante?",
        answer: "Perché il movimento appaia fluido (regola dei 180°), il tempo di otturazione dovrebbe essere circa la metà dell'intervallo. Ad esempio, se l'intervallo è di 2 secondi, prova a scattare a 1 secondo.",
    },
];

const howTo: TimelapseLocaleContent['howTo'] = [
    {
        name: "Definisci la durata del video finale",
        text: "Indica quanti secondi o minuti vuoi che duri il video risultante (es. 10 secondi per Instagram).",
    },
    {
        name: "Seleziona gli FPS di uscita",
        text: "Scegli la fluidità del video: 24 (cinema), 30 (web) o 60 (slow motion fluido).",
    },
    {
        name: "Regola l'intervallo di scatto",
        text: "Configura ogni quanti secondi la tua fotocamera scatterà in base alla velocità della scena.",
    },
    {
        name: "Verifica lo spazio di archiviazione",
        text: "Il calcolatore ti dirà quanti Gigabyte occuperà la sessione. Assicurati che la tua scheda SD abbia spazio sufficiente.",
    },
];

const seo: TimelapseLocaleContent['seo'] = [
    { type: 'title', text: 'Guida Definitiva agli Intervalli Timelapse e Hyperlapse', level: 2 },
    { type: 'paragraph', html: 'La differenza tra un video amatoriale ad alta velocità e un <strong>timelapse cinematografico</strong> risiede matematicamente in un unico fattore: <strong>l\'intervallo</strong>. Questo calcolatore elimina le incertezze, permettendoti di pianificare con precisione i tuoi scatti.' },
    
    { type: 'title', text: 'Tabella Intervalli Raccomandati (Cheat Sheet)', level: 3 },
    { type: 'paragraph', html: 'Usa questa tabella di riferimento rapido per impostare l\'intervallometro in base al soggetto.' },
    { type: 'table', headers: ['Soggetto / Scena', 'Intervallo Suggerito', 'Durata Evento (Minima)'], rows: [
        ['Nuvole Veloci / Tempeste', '1 - 2 secondi', '20 - 30 min'],
        ['Traffico Urbano / Persone (Blur)', '0.5 - 2 secondi', '15 - 20 min'],
        ['Tramonto / Alba (Holy Grail)', '5 - 10 secondi', '1.5 - 2.5 ore'],
        ['Nuvole Lente / Ombre', '10 - 15 secondi', '2 - 3 ore'],
        ['Stelle / Via Lattea (Astro)', '15 - 30 secondi*', '3 - 5 ore'],
        ['Costruzioni / Crescita Piante', '5 - 15 minuti', 'Giorni / Settimane']
    ]},
    { type: 'tip', title: 'Nota per Astro', html: 'L\'intervallo è solitamente dettato dal tempo di esposizione (regola 500) + 1 o 2 secondi di buffer.' },

    { type: 'title', text: 'La Regola dei 180° (Motion Blur)', level: 3 },
    { type: 'paragraph', html: 'Un errore comune nel timelapse è ottenere un video "scattoso". Per ottenere quel look cinematografico fluido, hai bisogno di <strong>motion blur</strong>.' },
    { type: 'card', title: 'La Regola', icon: 'mdi:information', html: 'Il tuo Tempo di Otturazione dovrebbe essere la metà del tuo intervallo. <br /><br /> <em>Esempio:</em> Se scatti ogni <strong>4 secondi</strong>, la tua esposizione dovrebbe essere di <strong>2 secondi</strong>.' },

    { type: 'title', text: 'Flicker e Diaframma Manuale', level: 3 },
    { type: 'paragraph', html: 'Il "Flicker" è il fastidioso sfarfallio causato dalle micro-variazioni dell\'apertura del diaframma tra gli scatti.' },
    { type: 'list', items: [
        '<strong>Lens Twist:</strong> Sblocca leggermente l\'obiettivo sulle DSLR per interrompere il collegamento elettronico e fissare il diaframma meccanicamente.',
        '<strong>Tutto Manuale:</strong> ISO, Bilanciamento del Bianco e Messa a Fuoco devono essere fissi.',
        '<strong>Scatta in RAW:</strong> Essenziale per correggere esposizione e colore in post-produzione.'
    ]},

    { type: 'diagnostic', variant: 'success', title: 'Tecnica Avanzata: Il "Sacro Graal"', icon: 'mdi:crown', badge: 'Tecnica Pro', html: 'Il "Sacro Graal" si riferisce alla transizione fluida dal giorno alla notte (o viceversa). È la sfida tecnica più difficile.' },
    
    { type: 'stats', columns: 3, items: [
        { label: 'Bulb Ramping', value: 'Esposizione Graduale', icon: 'mdi:brightness-6' },
        { label: 'Post-Pro', value: 'LRTimelapse', icon: 'mdi:television-guide' },
        { label: 'Strategia', value: 'Intervallo Notte', icon: 'mdi:weather-night' }
    ]},

    { type: 'title', text: 'Conclusione: Lo Zen della Meccanica Semplice', level: 3 },
    { type: 'paragraph', html: 'Padroneggiare il tuo timelapse inizia con la comprensione della matematica del tuo intervallometro.' }
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

export const content: TimelapseLocaleContent = {
    slug,
    title,
    description,
    ui,
    seo,
    faq,
    faqTitle: 'Domande Frequenti sulla Produzione di Timelapse',
    bibliography: 'Teoria e Risorse per il Timelapse',
    howTo,
    schemas: [faqSchema as any, howToSchema as any, appSchema],
};
