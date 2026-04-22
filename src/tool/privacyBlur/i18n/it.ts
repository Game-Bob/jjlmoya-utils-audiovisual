import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { PrivacyBlurUI, PrivacyBlurLocaleContent } from '../index';

const slug = 'editor-privacy-online-pixellare-sfocare-volti-foto';
const title = 'Privay Editor Online: Pixella e nascondi i volti nelle foto';
const description = 'Proteggi la tua identità censurando le aree sensibili delle tue foto. Pixella i volti, sfoca i documenti o copri le informazioni private al 100% localmente.';

const ui: PrivacyBlurUI = {
    toolPixel: "Pixella",
    toolBlur: "Sfoca",
    toolSolid: "Solido",
    intensityLabel: "Intensità",
    undoButton: "Annulla",
    downloadButton: "Salva",
    dropTitle: "Privacy Editor",
    dropSubtitle: "Trascina la tua immagine qui o clicca per iniziare",
    privacySecureLabel: "100% Locale",
    offlineLabel: "Offline",
    autoDetectFaces: "Auto Rilevamento",
    loadingModels: "Caricamento modelli...",
    noFacesDetected: "Nessun volto rilevato automaticamente.",
    faqTitle: "Domande Frequenti": "Riferimenti"
};

const faq: PrivacyBlurLocaleContent['faq'] = [
    {
        question: "Le mie foto vengono caricate su qualche server?",
        answer: "No. L'editor della privacy funziona interamente nel tuo browser. I pixel vengono modificati localmente e nulla viene inviato all'esterno del tuo dispositivo.",
    },
    {
        question: "Come funziona il rilevamento automatico dei volti?",
        answer: "Utilizziamo una rete neurale leggera (TinyFaceDetector) che gira nel tuo browser per identificare i tratti del viso senza bisogno di una connessione esterna.",
    },
];

const howTo: PrivacyBlurLocaleContent['howTo'] = [
    {
        name: "Carica la tua foto",
        text: "Trascina o seleziona l'immagine che contiene informazioni sensibili che desideri nascondere.",
    },
    {
        name: "Scegli lo strumento",
        text: "Seleziona tra pixellatura, sfocatura o copertura solida a seconda del livello di privacy di cui hai bisogno.",
    },
    {
        name: "Segna l'area",
        text: "Clicca e trascina sulla zona che vuoi proteggere (volti, targhe, nomi, ecc.).",
    },
    {
        name: "Salva il risultato",
        text: "Scarica l'immagine elaborata con la sicurezza che i dati originali siano inaccessibili.",
    },
];

const seo: PrivacyBlurLocaleContent['seo'] = [
    {
        type: 'summary',
        title: 'Privacy Editor: Pixella, Sfoca e Nascondi',
        items: [
            'Tre strumenti di editing: Pixella, Sfoca, Copertura Solida',
            'Rilevamento automatico dei volti con IA (TinyFaceDetector)',
            'Elaborazione 100% locale - le tue foto non lasciano mai il browser',
            'Senza filigrana, senza limiti, completamente gratuito'
        ]
    },
    { type: 'title', text: 'Privacy Digitale: Come Proteggere i Tuoi Dati Visuali', level: 2 },
    { type: 'paragraph', html: 'Nell\'era dei social media, condividere foto senza controllo può esporre dati personali sensibili. Il nostro strumento ti consente di nascondere informazioni critiche (volti, targhe, nomi, indirizzi) prima di caricarle su Internet, garantendo che la tua privacy rimanga sotto il tuo pieno controllo.' },

    { type: 'stats', items: [
        { value: '3', label: 'Metodi di Oscuramento', icon: 'mdi:tools' },
        { value: '100%', label: 'Privacy Locale', icon: 'mdi:shield-check' },
        { value: 'IA', label: 'Rilevamento Volti', icon: 'mdi:brain' }
    ], columns: 3 },

    { type: 'title', text: 'I Tre Metodi di Oscuramento Spiegati', level: 3 },
    { type: 'comparative', items: [
        {
            title: 'Pixella',
            description: 'Divide l\'area in quadrati, impossibile da riconoscere',
            icon: 'mdi:blur',
            points: [
                'Massimo oscuramento irreversibile',
                'Più sicuro contro il riconoscimento facciale',
                'Visibile, chiaro che qualcosa è stato nascosto',
                'Ideale: volti in foto pubbliche'
            ]
        },
        {
            title: 'Sfoca',
            description: 'Sfocatura Gaussiana - aspetto più naturale',
            icon: 'mdi:blur-off',
            points: [
                'Aspetto visivo più elegante',
                'Mantiene una certa coerenza cromatica',
                'Matematicamente reversibile (teoricamente)',
                'Ideale: informazioni meno sensibili'
            ],
            highlight: true
        },
        {
            title: 'Copertura Solida',
            description: 'Blocco di colore opaco - massima privacy',
            icon: 'mdi:rectangle',
            points: [
                'Oscuramento visibile ed evidente',
                'Massima sicurezza legale/privacy',
                'Cambia la composizione visiva',
                'Ideale: documenti, dati sensibili'
            ]
        }
    ], columns: 3 },

    { type: 'title', text: 'Rilevamento Automatico dei Volti con IA', level: 3 },
    { type: 'paragraph', html: 'Il nostro strumento utilizza TinyFaceDetector, una rete neurale compatta che gira direttamente nel tuo browser per identificare i volti automaticamente:' },
    { type: 'list', items: [
        '<strong>100% Locale:</strong> Il modello IA gira sulla tua GPU/CPU, non su server remoti.',
        '<strong>Senza Internet:</strong> Dopo il download iniziale, funziona completamente offline.',
        '<strong>Privacy Garantita:</strong> Nessuno vede i volti: né Google, né OpenAI, né noi.',
        '<strong>Automatico One-Click:</strong> Rileva i volti e ti permette di scegliere di nasconderli con un solo clic.'
    ], icon: 'mdi:check' },

    { type: 'card', title: 'Privacy by Design', html: 'Elaborando le immagini utilizzando la GPU e la CPU locali del tuo browser, garantiamo che le foto originali non lascino mai il tuo dispositivo. Anche se cambi idea, nulla è stato trasmesso. Questo è il massimo standard di privacy digitale.' },

    { type: 'title', text: 'Casi d\'Uso della Privacy', level: 3 },
    { type: 'table', headers: ['Informazioni Sensibili', 'Metodo Raccomandato', 'Urgenza'], rows: [
        ['Volti di persone', 'Pixella o Sfoca', 'Critica'],
        ['Targhe di veicoli', 'Pixella (irreversibile)', 'Critica'],
        ['Documenti d\'identità', 'Copertura Solida o Pixella', 'Critica'],
        ['Nomi/Indirizzi scritti', 'Copertura Solida o Pixella', 'Alta'],
        ['Numeri di telefono', 'Pixella o Copertura', 'Alta'],
        ['Informazioni mediche', 'Copertura Solida', 'Critica'],
        ['Segnali WiFi visibili', 'Pixella', 'Media']
    ] },

    { type: 'proscons', items: [
        {
            pro: 'Privacy totale: elaborazione 100% locale, nessun server, nessuna archiviazione',
            con: 'Richiede un browser moderno con supporto Canvas e WebGL'
        },
        {
            pro: 'Il rilevamento automatico dei volti fa risparmiare tempo manuale',
            con: 'L\'IA non è perfetta - i volti di profilo o parziali potrebbero non essere rilevati'
        },
        {
            pro: 'Tre metodi permettono di scegliere tra sicurezza ed estetica',
            con: 'Nessuna opzione avanzata (smart warp, riempimento contestuale)'
        },
        {
            pro: 'Completamente gratuito, nessuna pubblicità, nessun limite',
            con: 'Non equivalente a software professionali come Photoshop'
        }
    ], proTitle: 'Vantaggi', conTitle: 'Limitazioni' },

    { type: 'diagnostic', variant: 'warning', title: 'Attenzione: Sfocare NON è sicuro al 100%', icon: 'mdi:alert', badge: 'Sicurezza', html: 'La sfocatura gaussiana è matematicamente reversibile attraverso sofisticati algoritmi inversi. Se l\'informazione è CRITICA (documenti legali, identità), usa <strong>Pixella o Copertura Solida</strong>. La sfocatura è esteticamente migliore ma meno sicura.' },

    { type: 'glossary', items: [
        {
            term: 'Pixellatura',
            definition: 'Riduzione della risoluzione dividendo l\'area in blocchi di colore uniforme. Irreversibile. Massima sicurezza contro il riconoscimento facciale IA.'
        },
        {
            term: 'Sfocatura Gaussiana',
            definition: 'Levigatura matematica basata sulla distribuzione normale. Teoricamente reversibile tramite deconvolution, ma praticamente molto difficile.'
        },
        {
            term: 'Copertura Solida',
            definition: 'Blocco opaco di colore uniforme. Massima sicurezza, massima privacy legale, meno elegante visivamente.'
        },
        {
            term: 'TinyFaceDetector',
            definition: 'Rete neurale convoluzionale leggera (CNN) per il rilevamento dei volti. Gira localmente nel browser senza bisogno di un server esterno.'
        },
        {
            term: 'Privacy by Design (PbD)',
            definition: 'Approccio in cui la privacy è integrata a partire dalla progettazione del sistema, non aggiunta successivamente. Il nostro approccio locale è Privacy by Design.'
        }
    ] },

    { type: 'message', title: 'Privacy sotto il Tuo Controllo', ariaLabel: 'Informazioni sulla protezione della privacy', html: 'Non memorizziamo né elaboriamo le tue foto su server remoti. Non ci sono cookie di tracciamento. Nessuna cronologia di editing. Non sappiamo cosa nascondi perché non vediamo mai le tue immagini. Pieno controllo, piena privacy, piena libertà.' },

    { type: 'title', text: 'Condividi in Sicurezza sui Social Network', level: 3 },
    { type: 'paragraph', html: 'Prima di pubblicare qualsiasi foto su Internet, chiediti: ci sono informazioni che preferirei non fossero pubbliche? Volti di bambini, targhe, indirizzi, numeri di documenti. Una sessione di privacy di 2 minuti ora evita anni di problemi.' }
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

export const content: PrivacyBlurLocaleContent = {
    slug,
    title,
    description,
    ui,
    seo,
    faqTitle: "Domande Frequenti",
    faq: "Riferimenti",
    bibliography,
    howTo,
    schemas: [faqSchema as any, howToSchema as any, appSchema],
};
