import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { CollageMakerUI, CollageMakerLocaleContent } from '../index';

const slug = 'crea-collage-foto-online-gratis-composizioni-professionali';
const title = 'Creatore di Collage Online: Progetta composizioni professionali';
const description = 'Crea collage di foto gratuitamente in pochi secondi. Scegli tra vari layout, regola i bordi e scarica in alta qualità senza filigrane.';

const ui: CollageMakerUI = {
    dropTitle: "Trascina le immagini qui",
    dropSub: "o {link} - min. 2, max. 9",
    dropLink: "seleziona i file",
    imgsLoaded: "Immagini caricate",
    layoutLabel: "Layout",
    settingsLabel: "Impostazioni",
    borderLabel: "Bordo",
    borderColorLabel: "Colore bordo",
    bgColorLabel: "Sfondo",
    downloadBtn: "Scarica",
    previewTitle: "Anteprima",
    needsImgs: "Hai bisogno di {n} immagini",
    errorMin: "Hai bisogno di almeno 2 immagini",
    errorMax: "Massimo 9 immagini consentite",
    errorLoad: "Errore durante il caricamento delle immagini",
    faqTitle: "Domande Frequenti",
    bibliographyTitle: "Riferimenti"
};

const faq: CollageMakerLocaleContent['faq'] = [
    {
        question: "Come posso cambiare l'ordine delle foto?",
        answer: "Le foto vengono posizionate nel collage seguendo l'ordine in cui appaiono nell'elenco delle immagini caricate. Puoi rimuoverne una e caricarla di nuovo per regolarne la posizione.",
    },
    {
        question: "Qual è il formato di output del collage?",
        answer: "Il collage viene scaricato in formato WebP ad alta risoluzione, ideale per la condivisione sui social network senza perdere nitidezza.",
    },
];

const howTo: CollageMakerLocaleContent['howTo'] = [
    {
        name: "Carica le tue foto",
        text: "Seleziona da 2 a 9 immagini dal tuo explorer di file.",
    },
    {
        name: "Scegli un layout",
        text: "Seleziona la griglia che meglio si adatta al numero di foto che hai caricato.",
    },
    {
        name: "Personalizza lo stile",
        text: "Regola lo spessore e il colore del bordo per dare un tocco professionale.",
    },
    {
        name: "Scarica e condividi",
        text: "Premi il pulsante di creazione e scarica istantaneamente la tua composizione finale.",
    },
];

const bibliography: CollageMakerLocaleContent['bibliography'] = [
    {
        name: "Composizione Fotografica: L'Arte del Collage",
        url: "https://it.wikipedia.org/wiki/Collage",
    },
];

const seo: CollageMakerLocaleContent['seo'] = [
    {
        type: 'summary',
        title: 'Creatore di Collage Online Professionale',
        items: [
            'Molteplici layout e griglie predefinite',
            'Personalizzazione di bordi e colori di sfondo',
            'Alta risoluzione a 1200px pronta per i social network',
            'Elaborazione istantanea senza limiti d\'uso'
        ]
    },
    { type: 'title', text: 'Design del Collage: Composizioni che raccontano storie', level: 2 },
    { type: 'paragraph', html: 'Un collage è più di un semplice mix di foto; è una narrazione visiva che comunica emozioni e contesto. Il nostro strumento ti consente di creare composizioni geometriche professionali per Instagram, Facebook, Pinterest o progetti personali senza la necessità di Photoshop o software costosi.' },

    { type: 'stats', items: [
        { value: '2-9', label: 'Immagini per Collage', icon: 'mdi:image-multiple' },
        { value: '1200px', label: 'Risoluzione HD', icon: 'mdi:video-high-definition' },
        { value: 'Istantanea', label: 'Generazione', icon: 'mdi:lightning-bolt' }
    ], columns: 3 },

    { type: 'title', text: 'Composizione Visiva: Principi di Design', level: 3 },
    { type: 'paragraph', html: 'La composizione è l\'arte di organizzare gli elementi visivi in modo da guidare l\'occhio dello spettatore e comunicare un\'intenzione. Un buon collage bilancia:' },
    { type: 'list', items: [
        '<strong>Equilibrio:</strong> Distribuzione visiva del peso (immagini chiare vs scure, grandi vs piccole).',
        '<strong>Flusso Visivo:</strong> L\'occhio dovrebbe attraversare la composizione in modo naturale, senza punti morti.',
        '<strong>Contrasto:</strong> Variazioni di colore, dimensioni e forma che attirano l\'attenzione.',
        '<strong>Unità:</strong> Coerenza tematica - le immagini devono \"parlare insieme\" della stessa storia.'
    ], icon: 'mdi:check' },

    { type: 'card', title: 'Design Intelligenti e Adattivi', html: 'Il nostro sistema calcola automaticamente la distribuzione ottimale dello spazio in base al numero di foto. 2 immagini = griglia simmetrica; 5 immagini = distribuzione asimmetrica bilanciata. Ogni griglia è progettata per massimizzare l\'impatto visivo.' },

    { type: 'comparative', items: [
        {
            title: 'Per i Social Network',
            description: 'Instagram, TikTok, Facebook - formati quadrati',
            icon: 'mdi:share-all',
            points: [
                'Il formato a 1200px è perfetto per il feed di Instagram',
                'Il formato quadrato evita il ritaglio durante la pubblicazione',
                'Bordi personalizzabili per il branding'
            ],
            highlight: true
        },
        {
            title: 'Per i Portfolio',
            description: 'Vetrine visive per fotografi e designer',
            icon: 'mdi:briefcase-outline',
            points: [
                'Mostra più angolazioni di un progetto',
                'Narrativa visiva coerente',
                'Stampa di book digitali professionali'
            ]
        },
        {
            title: 'Per Regali Personali',
            description: 'Stampe, cornici e album digitali',
            icon: 'mdi:gift-outline',
            points: [
                'Ricordi di eventi (matrimoni, viaggi)',
                'Alta risoluzione pronta per la stampa',
                'Design istantaneo senza sforzo manuale'
            ]
        }
    ], columns: 3 },

    { type: 'title', text: 'Personalizzazione: Bordi e Colori', level: 3 },
    { type: 'table', headers: ['Elemento', 'Effetto Visivo', 'Raccomandazione'], rows: [
        ['Bordo Bianco', 'Pulito, minimalista, moderno', 'Social network, portfolio digitali'],
        ['Bordo Nero', 'Drammatico, professionale, artistico', 'Fotografia d\'arte, moda, lusso'],
        ['Bordo Neutro (grigio)', 'Versatile, accademico, aziendale', 'Affari, istruzione, neutralità'],
        ['Senza Bordo', 'Fusione, continuità, immersivo', 'Sfondo uniforme, foto fluide']
    ] },

    { type: 'proscons', items: [
        {
            pro: 'Design professionali predefiniti - non è necessaria alcuna conoscenza della composizione',
            con: 'Opzioni limitate alle griglie prestabilite'
        },
        {
            pro: 'Risoluzione a 1200px pronta per i social network senza ridimensionamento',
            con: 'Non personalizzabile come Photoshop'
        },
        {
            pro: 'Elaborazione 100% locale - privacy, velocità, senza limiti',
            con: 'Richiede un browser moderno'
        },
        {
            pro: 'Totalmente gratuito, senza filigrane, senza pubblicità',
            con: 'Nessuna opzione di modifica individuale (ritaglio, rotazione)'
        }
    ], proTitle: 'Vantaggi', conTitle: 'Limitazioni' },

    { type: 'diagnostic', variant: 'success', title: 'Pronto per i Social Network', icon: 'mdi:check-circle-outline', badge: 'Ottimizzato', html: '1200x1200px è la risoluzione ideale per Instagram. Supporta qualsiasi rapporto d\'aspetto, ma l\'output quadrato massimizza l\'impatto nel feed, elimina il ritaglio automatico e rende bene su desktop, tablet e mobile.' },

    { type: 'glossary', items: [
        {
            term: 'Composizione Visiva',
            definition: 'L\'arte di organizzare gli elementi (colore, forma, spazio) per guidare l\'occhio dello spettatore e comunicare un\'intenzione emotiva.'
        },
        {
            term: 'Regola dei Terzi',
            definition: 'Principio di composizione: divide l\'immagine in 9 aree uguali (3x3). Posiziona i soggetti sulle linee di intersezione per il massimo impatto.'
        },
        {
            term: 'Griglia Simmetrica',
            definition: 'Suddivisioni uguali dello spazio. Rassicurante, ordinata. Ideale per coppie di foto o numeri pari.'
        },
        {
            term: 'Griglia Asimmetrica',
            definition: 'Suddivisioni irregolari. Dinamica, interessante, visiva. Ideale per 5 o più foto con varietà di dimensioni.'
        },
        {
            term: 'Equilibrio Visivo',
            definition: 'Equilibrio percettivo del peso visivo. Immagine chiara + scura = equilibrio; grande + piccola = equilibrio.'
        }
    ] },

    { type: 'message', title: 'Narrativa Visiva Istantanea', ariaLabel: 'Informazioni sulla composizione e sui collage', html: 'Ogni collage racconta una storia. Il nostro designer automatico assicura che le tue storie visive siano equilibrate, professionali e pronte per il mondo, senza dover aspettare il lavoro di un grafico.' },

    { type: 'title', text: 'Crea, Condividi, Ispira', level: 3 },
    { type: 'paragraph', html: 'Un collage ben fatto è ciò che fa la differenza tra un post dimenticabile e uno che i tuoi follower ricorderanno e condivideranno. Usa la composizione intelligente per dare impatto alle tue storie visive.' }
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

export const content: CollageMakerLocaleContent = {
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
