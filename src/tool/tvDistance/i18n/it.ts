import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { TvDistanceUI, TvDistanceLocaleContent } from '../index';

const slug = 'calcolatore-distanza-visione-tv-thx-4k-schermo-ottimale';
const title = 'Calcolatore Distanza TV: Schermo Ottimale THX e 4K';
const description = 'Calcola la distanza ideale per guardare la tua televisione in base a dimensioni e risoluzione. Ottimizza il tuo Home Cinema con gli standard THX e SMPTE.';

const ui: TvDistanceUI = {
    specTitle: "Specifiche",
    diagonalLabel: "Dimensione Diagonale",
    resolutionLabel: "Risoluzione",
    thxRecommendation: "Raccomandazione THX",
    thxDescription: "THX raccomanda una distanza che copra un angolo di visione di 40 gradi per un'esperienza cinematografica immersiva.",
    simulationBadge: "Simulazione in Tempo Reale",
    tvWidthLabel: "cm di larghezza",
    userLocationLabel: "Tua Posizione",
    minLimitLabel: "Limite Minimo",
    optimalLimitLabel: "Distanza Ottimale",
    maxLimitLabel: "Limite Massimo",
    unitMeters: "m",
    unitCm: "cm"
};

const faq: TvDistanceLocaleContent['faq'] = [
    {
        question: "Perché la risoluzione è importante nel calcolo della distanza?",
        answer: "A risoluzioni più elevate (come 4K o 8K), i pixel sono più piccoli. Questo ti permette di sederti più vicino senza percepire la griglia dei pixel, aumentando l'immersione.",
    },
    {
        question: "Cosa si intende per angolo di visione a 40 gradi?",
        answer: "È lo standard raccomandato da THX affinché lo schermo occupi una gran parte della tua visione periferica, simile all'esperienza di una sala cinematografica professionale.",
    },
    {
        question: "Posso sedermi più lontano rispetto a quanto raccomandato?",
        answer: "Sì, ma perderai il beneficio delle alte risoluzioni. Se ti siedi troppo lontano da una TV 4K, il tuo occhio non riuscirà a distinguere i dettagli extra e vedrai come se fosse 1080p.",
    },
];

const howTo: TvDistanceLocaleContent['howTo'] = [
    {
        name: "Indica i pollici",
        text: "Sposta il cursore per selezionare la dimensione della tua televisione attuale o di quella che intendi acquistare.",
    },
    {
        name: "Seleziona la risoluzione",
        text: "Scegli tra 1080p, 4K o 8K per regolare i limiti di acuità visiva.",
    },
    {
        name: "Visualizza la simulazione",
        text: "Osserva nel diagramma come cambia il rapporto di dimensioni tra te e lo schermo.",
    },
    {
        name: "Regola il tuo divano",
        text: "Posiziona la tua seduta all'interno del range 'Distanza Ottimale' per massimizzare l'immersione cinematografica.",
    },
];

const seo: TvDistanceLocaleContent['seo'] = [
    {
        type: 'summary',
        title: 'Distanza TV Ottimale per Risoluzione e Dimensione',
        items: [
            'Standard THX (40°) per un\'esperienza cinematografica immersiva',
            'Calcoli per 1080p, 4K e 8K con massima precisione',
            'Simulazione visiva in tempo reale del tuo setup',
            'Evita l\'affaticamento oculare e massimizza l\'immersione nei contenuti'
        ]
    },
    { type: 'title', text: 'Scienza dell\'Immersione: Distanza TV Ottimale', level: 2 },
    { type: 'paragraph', html: 'Non è solo una questione di comfort, ma di fisiologia visiva umana. L\'occhio ha un limite di acuità; se ti siedi troppo lontano da uno schermo 4K, stai sprecando pixel che la tua vista non può sfruttare. Se ti siedi troppo vicino, causi affaticamento oculare.' },

    { type: 'stats', items: [
        { value: '40°', label: 'Angolo Ideale THX', icon: 'mdi:eye' },
        { value: '100%', label: 'Pixel Sfruttati', icon: 'mdi:video-high-definition' },
        { value: 'Zero', label: 'Affaticamento Visivo', icon: 'mdi:heart-pulse' }
    ], columns: 3 },

    { type: 'title', text: 'Due Standard Professionali: THX vs SMPTE', level: 3 },
    { type: 'paragraph', html: 'Ci sono due autorità principali nel settore audiovisivo che definiscono come ottimizzare la tua esperienza di visione:' },
    { type: 'comparative', items: [
        {
            title: 'Standard THX',
            description: 'Angolo di visione a 40° - Più immersivo',
            icon: 'mdi:filmstrip',
            points: [
                'Lo schermo occupa una parte maggiore della visione periferica',
                'Esperienza cinematografica immersiva',
                'Ideale per film d\'azione, sport dal vivo',
                'Richiede più spazio nella stanza'
            ],
            highlight: true
        },
        {
            title: 'Standard SMPTE',
            description: 'Angolo di visione a 30° - Più rilassato',
            icon: 'mdi:television',
            points: [
                'Distanza di visione più confortevole',
                'Raccomandazione professionale conservativa',
                'Ideale per contenuti vari (news, serie)',
                'Migliore per stanze più piccole'
            ]
        }
    ], columns: 2 },

    { type: 'title', text: 'Come la Risoluzione Cambia l\'Equazione', level: 3 },
    { type: 'table', headers: ['Risoluzione', 'Dimensione TV 55"', 'Distanza Minima (pixel non visibili)', 'Distanza Ottimale THX'], rows: [
        ['1080p (Full HD)', '55 pollici', '2.0 m', '2.3 m'],
        ['4K (Ultra HD)', '55 pollici', '1.2 m', '1.5 m'],
        ['8K', '55 pollici', '0.8 m', '1.0 m']
    ] },

    { type: 'paragraph', html: 'Come puoi vedere, una risoluzione più alta permette di sedersi più vicino senza percepire la struttura dei pixel. Una TV 4K può essere apprezzata da 1.2 metri; una 1080p necessita di almeno 2 metri.' },

    { type: 'card', title: 'Il Limite dell\'Acuità Visiva Umana', html: 'L\'occhio umano ha una capacità limite di risoluzione. Oltre una certa distanza, non puoi distinguere più dettagli anche se lo schermo è 8K. I nostri calcoli ti posizionano esattamente nella "zona ottimale".' },

    { type: 'diagnostic', variant: 'info', title: 'Affaticamento Oculare e Distanza', icon: 'mdi:information', badge: 'Salute Visiva', html: 'Essere troppo vicini causa affaticamento perché gli occhi devono accomodarsi costantemente ad angoli estremi. Essere troppo lontani causa sforzo per distinguere i dettagli. Il nostro calcolatore ti posiziona nello "sweet spot" (40° per THX).' },

    { type: 'proscons', items: [
        {
            pro: 'THX 40° crea una vera immersione cinematografica - come in una sala professionale',
            con: 'Richiede più spazio disponibile nella stanza'
        },
        {
            pro: 'Il 4K permette di sedersi più vicino del 1080p - utile in spazi piccoli',
            con: 'Devi essere alla distanza minima per sfruttare i pixel extra'
        },
        {
            pro: 'Evita l\'affaticamento oculare posizionandoti correttamente fin dall\'inizio',
            con: 'La maggior parte delle stanze domestiche NON segue questi standard'
        },
        {
            pro: 'Puoi convalidare se la tua TV attuale è ben posizionata',
            con: 'Se è sbagliata, richiede lo spostamento dei mobili'
        }
    ], proTitle: 'Vantaggi', conTitle: 'Limitazioni' },

    { type: 'glossary', items: [
        {
            term: 'Angolo di Visione (in gradi)',
            definition: 'Angolo visivo che lo schermo copre dalla tua posizione. 40° = molto immersivo; 20° = contenuto di sottofondo (non immersivo).'
        },
        {
            term: 'THX (Tomlinson Holman Experiment)',
            definition: 'Certificazione di qualità audiovisiva creata da Lucasfilm. Definisce standard per cinema e home theater. 40° è la raccomandazione primaria.'
        },
        {
            term: 'SMPTE (Society of Motion Picture Technical Engineers)',
            definition: 'Organizzazione di standard tecnici per film e video. Raccomanda i 30° come distanza professionale conservativa.'
        },
        {
            term: 'Acuità Visiva Umana',
            definition: 'Capacità dell\'occhio di distinguere dettagli fini. Un singolo pixel è impercettibile oltre una certa distanza.'
        },
        {
            term: '4K (Ultra HD)',
            definition: 'Risoluzione di ~3840x2160 pixel. 4 volte più pixel del 1080p.'
        }
    ] },

    { type: 'message', title: 'Ottimizzazione Professionale della Sala Audiovisiva', ariaLabel: 'Informazioni sugli standard di setup TV', html: 'I cinema professionali investono milioni per garantire che distanza, angolo e illuminazione siano perfetti. Il nostro calcolatore porta gli stessi principi a casa tua.' },

    { type: 'title', text: 'Configura il Tuo Home Cinema Professionalmente', level: 3 },
    { type: 'paragraph', html: 'La distanza è IMPORTANTE TANTO QUANTO la dimensione dello schermo e la risoluzione. Segui questi standard per trasformare il tuo soggiorno in un\'autentica sala cinematografica.' }
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

export const content: TvDistanceLocaleContent = {
    slug,
    title,
    description,
    ui,
    seo,
    faq,
    faqTitle: 'Domande Frequenti sulla Distanza di Visione TV',
    bibliography: 'Standard Professionali per il Setup Televisivo',
    howTo,
    schemas: [faqSchema as any, howToSchema as any, appSchema],
};
