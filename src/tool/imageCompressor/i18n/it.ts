import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ImageCompressorUI, ImageCompressorLocaleContent } from '../index';

const slug = 'compressore-immagini-online-riduci-dimensioni-senza-perdita-qualita';
const title = 'Compressore Immagini Online: Riduci il peso senza perdere qualità';
const description = 'Ottimizza e comprimi le tue foto JPG, PNG e WebP gratuitamente. Riduci le dimensioni del file per migliorare la velocità di caricamento del tuo sito web localmente.';

const ui: ImageCompressorUI = {
    dropTitle: "Ottimizza Immagini",
    dropSubtitle: "Trascina le tue foto per ridurne il peso istantaneamente.",
    settingsTitle: "Impostazioni di Compressione",
    qualityLabel: "Qualità Visiva",
    widthLabel: "Larghezza Massima (Pixel)",
    convertToWebpLabel: "Converti in WebP",
    compressionLabel: "Compressione",
    compressBtn: "Comprimi Immagine",
    processingLabel: "Elaborazione in corso...",
    resultsTitle: "Immagini Ottimizzate",
    originalSizeLabel: "Dimensione Originale",
    newSizeLabel: "Nuova Dimensione",
    reductionLabel: "Risparmio",
    downloadBtn: "Scarica",
    addMoreBtn: "Aggiungi altre",
    browseFilesBtn: "Sfoglia file",
    processedFilesTitle: "File Elaborati",
    downloadAllBtn: "Scarica Tutto",
    adjustThisImage: "Regola questa immagine",
    downloadTitle: "Download",
    maxWidthLabel: "Larghezza max (px)",
    closeBtn: "Chiudi",
    totalSavingsLabel: "Risparmio totale",
    noSavings: "Nessun risparmio netto",
};

const faq: ImageCompressorLocaleContent['faq'] = [
    {
        question: "Come funziona la compressione senza perdita?",
        answer: "Utilizziamo algoritmi che rimuovono i metadati non necessari e ottimizzano la codifica dei pixel. Scegliendo WebP, viene utilizzata una tecnologia di compressione più avanzata rispetto ai formati tradizionali.",
    },
    {
        question: "Le mie immagini vengono caricate su qualche server?",
        answer: "No. Tutta l'elaborazione avviene al 100% nel tuo browser (Client-Side). Le tue foto non lasciano mai il tuo computer, garantendo la massima privacy.",
    },
    {
        question: "Perché dovrei convertire in WebP?",
        answer: "WebP è il moderno formato standard per il web. Offre una qualità superiore a JPG e PNG con un peso inferiore fino al 30%, il che accelera il tempo di caricamento della pagina.",
    },
];

const howTo: ImageCompressorLocaleContent['howTo'] = [
    {
        name: "Carica l'immagine",
        text: "Carica il file che desideri comprimere (JPG, PNG o WebP).",
    },
    {
        name: "Regola la qualità",
        text: "Usa lo slider per trovare l'equilibrio perfetto tra dimensione del file e qualità visiva (consigliato: 75-85%).",
    },
    {
        name: "Ridimensiona (opzionale)",
        text: "Se l'immagine è molto grande, puoi specificare una larghezza massima per ridurne la risoluzione.",
    },
    {
        name: "Scarica il risultato",
        text: "Premi il pulsante di download per ottenere la tua immagine ottimizzata pronta all'uso.",
    },
];

const seo: ImageCompressorLocaleContent['seo'] = [
    {
        type: 'summary',
        title: 'Ottimizzazione Professionale Immagini Web',
        items: [
            'Compressione intelligente JPG, PNG e WebP',
            'Riduci il peso del 50-80% mantenendo la qualità visiva',
            'Elaborazione 100% locale - privacy garantita',
            'Migliora i Core Web Vitals e il posizionamento SEO'
        ]
    },
    { type: 'title', text: 'Ottimizzazione Immagini: Velocità Web e Core Web Vitals', level: 2 },
    { type: 'paragraph', html: 'Nell\'era dell\'immediatezza digitale, un sito web lento perde utenti. Le immagini non ottimizzate rappresentano il 60-70% del peso totale di una pagina web. Ottimizzarle è il primo passo per migliorare le tue metriche Google (LCP, CLS) e il tuo posizionamento nei risultati di ricerca.' },

    { type: 'stats', items: [
        { value: '50-80%', label: 'Riduzione Peso Tipica', icon: 'mdi:trending-down' },
        { value: '100%', label: 'Privacy Locale', icon: 'mdi:lock' },
        { value: '+30%', label: 'Più veloce del JPG', icon: 'mdi:speedometer' }
    ], columns: 3 },

    { type: 'title', text: 'Spiegazione dei Formati di Compressione', level: 3 },
    { type: 'table', headers: ['Formato', 'Compressione', 'Casi d\'Uso', 'Compatibilità'], rows: [
        ['JPEG', 'Lossy 50-90%', 'Foto camera, contenuti editoriali', 'Universale (100%)'],
        ['PNG', 'Lossless 30-50%', 'Grafica, loghi, trasparenze', 'Universale (100%)'],
        ['WebP', 'Lossy/Lossless 25-35% in più', 'Web moderno, social network', '95% dei browser moderni'],
        ['AVIF', 'Lossy/Lossless miglioramento del 20%', 'Web di nuova generazione', 'Solo nuovi browser']
    ] },

    { type: 'card', title: 'Perché il WebP è il Futuro', html: 'Google ha sviluppato il WebP specificamente per il web. Offre una compressione superiore a JPEG e PNG, mantenendo o migliorando la qualità visiva. È più piccolo del 25-35% rispetto agli equivalenti JPEG. I browser moderni lo supportano al 95%.' },

    { type: 'title', text: 'Compressione Lossy vs Lossless', level: 3 },
    { type: 'comparative', items: [
        {
            title: 'Compressione Lossy',
            description: 'JPG, WebP - Rimuove informazioni visive impercettibili',
            icon: 'mdi:compress',
            points: [
                'Riduce del 70-90% il peso originale',
                'Impercettibile all\'occhio umano se la qualità rimane >75%',
                'Ideale per la fotografia realistica',
                'Non consigliato per loghi o testi nitidi'
            ],
            highlight: true
        },
        {
            title: 'Compressione Lossless',
            description: 'PNG, WebP lossless - Mantiene il 100% dei dati visivi',
            icon: 'mdi:shield',
            points: [
                'Riduce del 20-50% il peso',
                'Qualità perfetta, nessuna degradazione',
                'Ideale per grafica, loghi, trasparenze',
                'File più pesanti rispetto alla compressione Lossy'
            ]
        }
    ], columns: 2 },

    { type: 'title', text: 'Impatto sulla SEO e sulla Conversione', level: 3 },
    { type: 'list', items: [
        '<strong>Core Web Vitals:</strong> Google penalizza i siti lenti. Le immagini ottimizzate migliorano direttamente l\'LCP (Largest Contentful Paint).',
        '<strong>Frequenza di Rimbalzo:</strong> Ogni secondo di ritardo = 7% di rimbalzo in più. Immagini più veloci = meno utenti che se ne vanno.',
        '<strong>Posizionamento nella Ricerca:</strong> La velocità è un fattore di ranking. Ottimizzare le immagini aumenta il posizionamento.',
        '<strong>Conversione:</strong> Tempi di caricamento più veloci = più conversioni. Gli studi mostrano +10% di conversione con l\'ottimizzazione.'
    ], icon: 'mdi:check' },

    { type: 'proscons', items: [
        {
            pro: 'Privacy totale: elaborazione 100% locale, nessun server cloud',
            con: 'Richiede un browser con supporto Canvas API (è universale)'
        },
        {
            pro: 'Il WebP è più piccolo del 25-35% rispetto al JPEG a parità di qualità',
            con: 'Le vecchie versioni di Safari e IE non supportano il WebP (è disponibile il fallback)'
        },
        {
            pro: 'Elaborazione istantanea di più immagini',
            con: 'Le immagini molto grandi (>50MB) potrebbero richiedere un tempo di attesa'
        },
        {
            pro: 'Ridimensionamento opzionale: riduce sia la risoluzione che la compressione',
            con: 'Il ridimensionamento fa perdere informazioni - meglio ottimizzare la risoluzione alla fonte'
        }
    ], proTitle: 'Vantaggi', conTitle: 'Limitazioni' },

    { type: 'diagnostic', variant: 'warning', title: 'Attenzione: La compressione eccessiva degrada', icon: 'mdi:alert', badge: 'Qualità', html: 'Mantieni la qualità >75% per la fotografia e >85% per i contenuti editoriali. Al di sotto, gli artefatti di compressione (macchie, banding) diventano visibili. Un\'immagine che sembra buona in miniatura può sembrare pessima ingrandita.' },

    { type: 'glossary', items: [
        {
            term: 'Compressione Lossy',
            definition: 'Rimuove i dati visivi che l\'occhio umano percepisce come \"rumore\". Ideale per la fotografia. JPEG, WebP lossy, HEIC sono lossy.'
        },
        {
            term: 'Compressione Lossless',
            definition: 'Riduce le dimensioni senza perdere informazioni visive. PNG e WebP lossless. Ideale per grafica, loghi, trasparenze.'
        },
        {
            term: 'Core Web Vitals (Google)',
            definition: 'Metriche dell\'esperienza utente: LCP (velocità di caricamento), FID (latenza di interazione), CLS (stabilità visiva). Influenzano il ranking SEO.'
        },
        {
            term: 'WebP',
            definition: 'Formato sviluppato da Google. 25-35% più piccolo del JPEG. Supportato dal 95% dei browser moderni (tutti tranne IE).'
        },
        {
            term: 'Artefatti di Compressione',
            definition: 'Difetti visivi causati da una compressione eccessiva: macchie, banding di colore, bordi sfocati. Impercettibili con qualità >75%.'
        }
    ] },

    { type: 'message', title: 'Ottimizzazione Web Professionale', ariaLabel: 'Informazioni sull\'ottimizzazione delle immagini per la SEO', html: 'Non è vana estetica tecnica: comprimere le immagini è un investimento diretto nella user experience e nel ranking di Google. Ogni kilobyte conta sui dispositivi mobili. Il nostro strumento trasforma quello che prima richiedeva software professionali ($$$) in un processo gratuito di 3 clic.' },

    { type: 'title', text: 'Preparati per il Web Moderno', level: 3 },
    { type: 'paragraph', html: 'Usa la compressione intelligente e il formato WebP affinché la tua presenza online sia veloce, responsiva e competitiva nella ricerca. Qualità professionale, peso minimo, caricamento istantaneo.' }
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

export const content: ImageCompressorLocaleContent = {
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
