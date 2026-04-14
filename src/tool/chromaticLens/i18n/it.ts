import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ChromaticLensUI, ChromaticLensLocaleContent } from '../index';

const slug = 'chromatic-lens-estrazione-tavolozza-colori-online';
const title = 'Chromatic Lens: Estrazione Tavolozza Colori Online';
const description = 'Estrai gratuitamente tavolozze di colori professionali da qualsiasi immagine. Identifica i colori dominanti nelle tue foto usando algoritmi matematici.';

const ui: ChromaticLensUI = {
    dropTitle: "Analizza Colori",
    dropSubtitle: "Trascina un'immagine per estrarre il suo DNA cromatico.",
    processingLabel: "Estrazione tavolozza...",
    paletteTitle: "Tavolozza Estratta",
    copyLabel: "Copia HEX",
    copiedLabel: "Copiato!",
    colorCountLabel: "Numero di colori",
    changeImage: "Cambia immagine",
    faqTitle: "Domande frequenti sull'estrazione del colore",
    bibliographyTitle: "Risorse e documentazione tecnica"
};

const faq: ChromaticLensLocaleContent['faq'] = [
    {
        question: "Come funziona l'estrazione del colore?",
        answer: "Utilizziamo l'algoritmo 'Median Cut', che raggruppa i pixel dell'immagine in base alla loro vicinanza nello spazio colore RGB per trovare le tonalità più rappresentative.",
    },
    {
        question: "Posso copiare i colori nel mio editor di design?",
        answer: "Sì, cliccando su ogni colore, il codice HEX verrà automaticamente copiato negli appunti, pronto per essere incollato in Photoshop, Figma o CSS.",
    },
    {
        question: "Quali tipi di immagini posso analizzare?",
        answer: "Qualsiasi file JPG, PNG o WebP. L'elaborazione è locale, quindi le immagini di grandi dimensioni verranno analizzate rapidamente senza consumare dati di rete.",
    },
];

const howTo: ChromaticLensLocaleContent['howTo'] = [
    {
        name: "Carica l'immagine",
        text: "Carica la fotografia da cui desideri estrarre l'ispirazione cromatica.",
    },
    {
        name: "Regola la precisione",
        text: "Seleziona quanti colori dominanti desideri che lo strumento identifichi (da 3 a 12).",
    },
    {
        name: "Analizza il risultato",
        text: "La tavolozza apparirà istantaneamente con i relativi codici esadecimali.",
    },
    {
        name: "Copia e usa",
        text: "Clicca sulle tonalità per salvarle e applicarle al tuo progetto di design.",
    },
];

const bibliography: ChromaticLensLocaleContent['bibliography'] = [
    {
        name: "Median Cut Algorithm - Wikipedia",
        url: "https://en.wikipedia.org/wiki/Median_cut",
    },
    {
        name: "Teoria del Colore per Designer",
        url: "https://www.smashingmagazine.com/2010/01/color-theory-for-designers-part-1-the-meaning-of-color/",
    },
];

const seo: ChromaticLensLocaleContent['seo'] = [
    {
        type: 'summary',
        title: 'Estrazione Intelligente della Tavolozza Colori',
        items: [
            'Algoritmo professionale Median Cut per l\'analisi del colore',
            'Estrai da 3 a 12 colori dominanti da qualsiasi immagine',
            'Codici HEX copiabili direttamente negli appunti',
            'Elaborazione 100% locale - ideale per i creativi'
        ]
    },
    { type: 'title', text: 'Estrazione Tavolozza Colori: Scienza e Design', level: 2 },
    { type: 'paragraph', html: 'Ti sei mai chiesto perché una fotografia cinematografica appare così armoniosa? Non è una coincidenza; è la teoria del colore in azione. Chromatic Lens ti permette di estrarre quell\'armonia direttamente dal pixel, trasformandola in codici HEX utilizzabili nei tuoi progetti di design.' },

    { type: 'stats', items: [
        { value: 'Istantanea', label: 'Analisi Colore', icon: 'mdi:lightning-bolt' },
        { value: '100%', label: 'Privacy Locale', icon: 'mdi:lock' },
        { value: 'RGB', label: 'Spazio Colore Preciso', icon: 'mdi:palette' }
    ], columns: 3 },

    { type: 'title', text: 'L\'Algoritmo Median Cut Spiegato', level: 3 },
    { type: 'paragraph', html: 'L\'estrazione intelligente della tavolozza non è un semplice campionamento casuale di pixel. Utilizza l\'algoritmo Median Cut, una tecnica di partizionamento ricorsivo che garantisce una rappresentazione fedele:' },
    { type: 'list', items: [
        '<strong>Divisione Ricorsiva:</strong> Il \"cubo di colore\" RGB dell\'immagine viene diviso ricorsivamente in scatole più piccole.',
        '<strong>Bilanciamento del Volume:</strong> Ogni partizione cerca di raggruppare i pixel dello stesso spazio colore con volumi simili.',
        '<strong>Media Ponderata:</strong> Il colore risultante di ogni scatola è la media di tutti i pixel che contiene.',
        '<strong>Rappresentazione Fedele:</strong> I colori dominanti riflettono la reale atmosfera visiva dell\'immagine, non un semplice campione.'
    ], icon: 'mdi:check' },

    { type: 'card', title: 'Flusso di Lavoro Creativo', html: 'Ideale per sviluppatori web, designer UX/UI, artisti digitali e creativi che desiderano catturare istantaneamente l\'essenza visiva di una fotografia, di un film o di un riferimento visivo da applicare nelle loro interfacce, illustrazioni o tavolozze di brand.' },

    { type: 'title', text: 'Casi d\'Uso nel Design Digitale', level: 3 },
    { type: 'comparative', items: [
        {
            title: 'Designer UX/UI',
            description: 'Estrai tavolozze dalle immagini hero per creare interfacce coerenti',
            icon: 'mdi:palette',
            points: [
                'Colori di sfondo armoniosi',
                'Pulsanti ed elementi secondari',
                'Contrasto calcolato automaticamente'
            ]
        },
        {
            title: 'Sviluppatori Web',
            description: 'Crea fogli di stile CSS direttamente da riferimenti visivi',
            icon: 'mdi:code-braces',
            points: [
                'Copia HEX direttamente nel CSS',
                'Variabili di colore in SCSS/CSS',
                'Temi coerenti senza design preventivo'
            ],
            highlight: true
        },
        {
            title: 'Artisti Digitali e Illustratori',
            description: 'Cattura riferimenti cromatici da film, natura o arte',
            icon: 'mdi:brush',
            points: [
                'Tavolozze di riferimento da capolavori',
                'Studi sul colore cinematografico',
                'Ispirazione visiva immediata'
            ]
        },
        {
            title: 'Specialisti di Branding',
            description: 'Sviluppa identità visive basate su fotografie guida',
            icon: 'mdi:tag-multiple',
            points: [
                'Estrai colori del brand dalle immagini',
                'Crea guide cromatiche professionali',
                'Garantisci coerenza visiva'
            ]
        }
    ], columns: 2 },

    { type: 'title', text: 'Teoria del Colore Applicata', level: 3 },
    { type: 'table', headers: ['Concetto Colore', 'Definizione', 'Applicazione Pratica'], rows: [
        ['Armonia Cromatica', 'Combinazione di colori visivamente bilanciata', 'Identità visiva coerente nella UI'],
        ['Contrasto', 'Differenza di luminosità tra i colori', 'Leggibilità e gerarchia visiva'],
        ['Saturazione', 'Intensità del colore di una tonalità', 'Professionalità (bassa) vs Energia (alta)'],
        ['Temperatura Colore', 'Colori caldi (rossi) vs colori freddi (blu)', 'Psicologia emotiva del design'],
        ['Tavolozza Monocromatica', 'Variazioni di una singola tonalità', 'Eleganza e minimalismo']
    ] },

    { type: 'proscons', items: [
        {
            pro: 'Precisione matematica nell\'estrazione - non una selezione visiva approssimativa',
            con: 'Colori difficilmente visibili possono essere inclusi se hanno molti pixel'
        },
        {
            pro: 'Copia istantanea negli appunti - integrazione perfetta con il flusso di lavoro',
            con: 'Richiede un browser moderno compatibile con la Canvas API'
        },
        {
            pro: 'Privacy totale - analisi 100% locale senza invio di dati',
            con: 'Nessuna cronologia delle analisi precedenti salvata'
        },
        {
            pro: 'Compatibile con qualsiasi formato di immagine digitale',
            con: 'I colori finali dipendono dalla compressione e dalla qualità dell\'immagine'
        }
    ], proTitle: 'Vantaggi', conTitle: 'Limitazioni' },

    { type: 'diagnostic', variant: 'success', title: 'Rappresentazione Realistica del Colore', icon: 'mdi:check-circle-outline', badge: 'Algoritmo Avanzato', html: 'A differenza degli strumenti che campionano semplicemente pixel casuali, il nostro sistema utilizza l\'algoritmo Median Cut che pesa l\'intero conteggio dei pixel di ogni tonalità, garantendo che la tavolozza risultante rifletta fedelmente l\'atmosfera visiva e la psicologia del colore dell\'immagine originale.' },

    { type: 'glossary', items: [
        {
            term: 'Median Cut',
            definition: 'Algoritmo di quantizzazione del colore che divide ricorsivamente lo spazio RGB in scatole, garantendo una distribuzione uniforme. Storicamente utilizzato nella tecnologia GIF e dei colori indicizzati.'
        },
        {
            term: 'Spazio Colore RGB',
            definition: 'Modello di colore basato su rosso, verde e blu. Ogni colore è rappresentato come combinazione di questi tre valori (0-255). Standard su schermi digitali e web.'
        },
        {
            term: 'Codice HEX',
          definition: 'Notazione esadecimale a 6 cifre (#RRGGBB) che rappresenta il colore sul web: #FF0000 (rosso), #00FF00 (verde), #0000FF (blu). Universale in CSS, Figma e Adobe.'
        },
        {
            term: 'Saturazione Colore',
            definition: 'Intensità o purezza del colore. Alta saturazione = colore vivido; bassa saturazione = colore grigiastro. Influisce sulla percezione emotiva del design.'
        },
        {
            term: 'Armonia Cromatica',
            definition: 'La selezione e la combinazione di colori che danno un risultato visivamente gradevole. Può essere monocromatica, complementare, analoga o triadica.'
        }
    ] },

    { type: 'message', title: 'Analisi Cromatica Professionale', ariaLabel: 'Informazioni tecniche sull\'analisi del colore', html: 'Chromatic Lens trasforma l\'analisi visiva manuale in precisione algoritmica. Non si limita a estrarre i colori: cattura l\'essenza emotiva e visiva di qualsiasi immagine, mettendola direttamente negli appunti sotto forma di codici HEX pronti all\'uso. Privacy totale, nessun limite al volume di analisi.' },

    { type: 'title', text: 'Design dall\'Ispirazione Visiva', level: 3 },
    { type: 'paragraph', html: 'La migliore tavolozza di colori è quella che cattura l\'intento visivo del tuo riferimento. Chromatic Lens automatizza quello che prima era un processo manuale: osservare, analizzare, annotare. Ora, basta trascinare un\'immagine e ottenere codici HEX professionali in pochi secondi.' }
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

export const content: ChromaticLensLocaleContent = {
    slug,
    title,
    description,
    ui,
    seo,
    faqTitle: "Domande Frequenti",
    faq,
    bibliographyTitle: "Riferimenti",
    bibliography,
    howTo,
    schemas: [faqSchema as any, howToSchema as any, appSchema],
};
