import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { PrintQualityCalculatorUI, PrintQualityCalculatorLocaleContent } from '../index';

const slug = 'calcolatore-qualita-stampa-pixel-cm-dpi';
const title = 'Calcolatore Qualità di Stampa: Pixel in CM e DPI';
const description = 'Calcola la dimensione massima di stampa delle tue foto in base alla loro risoluzione. Converti i pixel in centimetri e pollici per garantire una stampa professionale.';

const ui: PrintQualityCalculatorUI = {
    dropTitle: "Analizza Risoluzione",
    dropSubtitle: "Trascina la tua immagine per calcolare la sua dimensione di stampa.",
    resultsTitle: "Specifiche del File",
    dpiDensityLabel: "Densità di Stampa Desiderata (DPI)",
    dpiPointsLabel: "punti per pollice",
    maxPrintTitle: "Dimensione Massima di Stampa",
    standardFormatsTitle: "Formati Standard Supportati",
    formatColumn: "Formato",
    measureColumn: "Misure",
    supportColumn: "Supportato?",
    qualityExcellent: "Qualità Eccellente",
    qualityGood: "Buona Qualità",
    qualityFair: "Qualità Schermo",
    qualityPoor: "Non Adatto",
    qualityExcellentDesc: "Ideale per riviste d\'arte, libri fotografici e visione ravvicinata.",
    qualityGoodDesc: "Sufficiente per poster e visione a media distanza.",
    qualityFairDesc: "Adatto per la visione digitale o cartelloni distanti.",
    qualityPoorDesc: "L\'immagine apparirà sgranata. La stampa non è raccomandata.",
    unitCm: "cm",
    unitInches: "in",
    dpiScreenLabel: "Schermo",
    dpiNewspaperLabel: "Quotidiano",
    dpiPrintLabel: "Stampa",
    dpiFineArtLabel: "Fine Art",
    formatPostal: "Cartolina",
    formatQuartilla: "Quartino",
    formatFolio: "Folio",
    formatDoubleFolio: "Doppio Folio",
    formatSmallPoster: "Poster Piccolo",
    formatLargePoster: "Poster Grande",
    formatPlane: "Planimetria",
    supportedText: "Sì (Coperto)",
    notSupportedPrefix: "No (",
    invalidImageError: "Seleziona un\'immagine valida",
    faqTitle: "Domande Frequenti",
    bibliographyTitle: "Riferimenti"
};

const faq: PrintQualityCalculatorLocaleContent['faq'] = [
    {
        question: "Cosa sono i DPI e perché sono importanti?",
        answer: "I DPI (Dots Per Inch) indicano quanti punti di inchiostro la stampante metterà in un pollice lineare. Più alti sono i DPI, più nitida sarà l\'immagine, ma minore sarà la dimensione fisica totale coperta dai tuoi pixel.",
    },
    {
        question: "Qual è il DPI ideale per stampare una foto?",
        answer: "Lo standard industriale è di 300 DPI per un\'eccellente qualità fotografica. Per stampe di grande formato che saranno viste da lontano, possono bastare 150 DPI.",
    },
    {
        question: "Posso aumentare i DPI della mia immagine senza perdere qualità?",
        answer: "No. Aumentare i DPI senza cambiare i pixel riduce semplicemente la dimensione della stampa. Se si \"inventano\" pixel tramite software (upscaling), l\'immagine potrebbe apparire sfocata.",
    },
];

const howTo: PrintQualityCalculatorLocaleContent['howTo'] = [
    {
        name: "Carica la tua immagine",
        text: "Carica la fotografia che desideri stampare per conoscere le sue dimensioni in pixel.",
    },
    {
        name: "Regola i DPI",
        text: "Sposta la barra per vedere come cambia la dimensione finale in base alla densità di punti (da 72 a 600 DPI).",
    },
    {
        name: "Verifica il formato",
        text: "Controlla la tabella dei formati standard (A4, A3, ecc.) per vedere se la tua risoluzione copre la carta desiderata.",
    },
    {
        name: "Conferma la qualità",
        text: "Assicurati che l\'indicatore segni \"Qualità Eccellente\" prima di inviare alla stampa.",
    },
];

const bibliography: PrintQualityCalculatorLocaleContent['bibliography'] = [
    {
        name: "Formati di carta internazionali (ISO 216)",
        url: "https://www.iso.org/standard/36631.html",
    },
    {
        name: "Guida alla risoluzione dell'immagine - Adobe",
        url: "https://www.adobe.com/it/creativecloud/photography/discover/image-resolution.html",
    },
];

const seo: PrintQualityCalculatorLocaleContent['seo'] = [
    {
        type: 'summary',
        title: 'Calcolo Professionale Risoluzione Stampa',
        items: [
            'Converti accuratamente i pixel in centimetri e pollici',
            'Calcola la dimensione massima in base ai DPI desiderati',
            'Compatibilità con formati standard (A4, A3, ecc.)',
            'Guida ai 4 livelli di qualità: da Eccellente a Non Adatto'
        ]
    },
    { type: 'title', text: 'Guida Definitiva alla Qualità di Stampa e DPI', level: 2 },
    { type: 'paragraph', html: 'Hai mai stampato una foto ottenendo un risultato sfocato o sgranato? Il segreto risiede nella relazione matematica tra <strong>Pixel</strong> e <strong>DPI</strong> (Dots Per Inch). Questo strumento calcola l\'esatta dimensione massima a cui puoi stampare le tue immagini senza perdere la qualità professionale.' },

    { type: 'stats', items: [
        { value: '300', label: 'DPI Standard Professionale', icon: 'mdi:target' },
        { value: '100%', label: 'Calcoli Precisi', icon: 'mdi:check' },
        { value: 'ISO 216', label: 'Formati Supportati', icon: 'mdi:file-document' }
    ], columns: 3 },

    { type: 'title', text: 'Capire i DPI: Pixel vs Punti', level: 3 },
    { type: 'paragraph', html: 'La confusione comune è pensare che DPI e pixel siano la stessa cosa. Non lo sono. I pixel sono NEL tuo file digitale. I DPI indicano come la stampante li converte in inchiostro sulla carta.' },
    { type: 'list', items: [
        '<strong>DPI (Dots Per Inch):</strong> Quanti punti di inchiostro la stampante posiziona in un pollice lineare (2,54 cm).',
        '<strong>Pixel:</strong> Piccoli quadrati di dati nel tuo file digitale. Una foto da 3000x2000 pixel ha informazioni costanti, indipendentemente dai DPI.',
        '<strong>La Formula:</strong> Dimensione di stampa (pollici) = Pixel / DPI. Esempio: 3000 pixel / 300 DPI = 10 pollici (25,4 cm)'
    ], icon: 'mdi:check' },

    { type: 'title', text: 'Spiegazione dei Livelli di Qualità DPI', level: 3 },
    { type: 'table', headers: ['DPI', 'Qualità Visiva', 'Casi d\'Uso', 'Distanza di Visione'], rows: [
        ['600+ DPI', 'Eccellente (Perfetto)', 'Libri d\'arte, riviste di lusso, fotografia fine art', 'Meno di 10 cm'],
        ['300-400 DPI', 'Eccellente (Professionale)', 'Fotografia, libri, cataloghi aziendali', '20-30 cm (mano)'],
        ['150-200 DPI', 'Buona (Stampa Web)', 'Poster, calendari, visione media', '1-2 metri'],
        ['72-100 DPI', 'Schermo (Accettabile)', 'Cartelloni, banner distanti', '5+ metri'],
        ['10-30 DPI', 'Bassa (Non Adatto)', 'Cartelloni giganti, visione estremamente distante', '50+ metri']
    ] },

    { type: 'card', title: 'La Regola d\'Oro dei 300 DPI', html: 'Per la stampa fotografica ed editoriale professionale, lo standard industriale è <strong>300 DPI</strong>. Questo garantisce che l\'occhio umano a distanza normale (20-30 cm) non percepisca i singoli punti di inchiostro. Con meno di 300 DPI, la griglia dei pixel diventa visibile.' },

    { type: 'comparative', items: [
        {
            title: 'Fotografia da Mano (Foto 10x15)',
            description: '300 DPI obbligatori - visione ravvicinata',
            icon: 'mdi:image',
            points: [
                'A 3000x2000 pixel = massimo 10x6,7 pollici',
                'Qualità Eccellente garantita',
                'Standard per album e regali'
            ]
        },
        {
            title: 'Poster da Parete A3 (30x42 cm)',
            description: '150 DPI sufficienti - visione a distanza',
            icon: 'mdi:wall-fire',
            points: [
                'Visione da 1-2 metri',
                'Meno pixel necessari',
                'Risparmia sulla qualità della camera'
            ],
            highlight: true
        },
        {
            title: 'Cartellone Pubblicitario (200x300 cm)',
            description: '15-30 DPI - visione da molti metri',
            icon: 'mdi:sign',
            points: [
                'Osservato a oltre 20 metri di distanza',
                'Anche la bassa risoluzione appare bene',
                'Ottimizza i file grandi'
            ]
        }
    ], columns: 3 },

    { type: 'title', text: 'Preparazione dei File per la Stampa Professionale', level: 3 },
    { type: 'proscons', items: [
        {
            pro: 'CMYK vs RGB: Le stampanti usano l\'inchiostro (CMYK), gli schermi usano la luce (RGB). Converti per evitare sorprese di colore.',
            con: 'I colori possono cambiare durante la conversione - controlla prima l\'anteprima'
        },
        {
            pro: 'Abbondanza: Aggiungi 3mm extra per lato se l\'immagine deve raggiungere il bordo della carta',
            con: 'Senza abbondanza, i bordi tagliati potrebbero rimanere bianchi'
        },
        {
            pro: 'L\'upscaling NON funziona: Aumentare i pixel in Photoshop aggiunge informazioni false (sfocatura)',
            con: 'Se desideri stampare in grande, hai bisogno della foto originale ad alta risoluzione'
        },
        {
            pro: 'Formati: TIFF senza compressione o JPEG di alta qualità per le foto; vettoriale (AI, EPS) per i loghi',
            con: 'Il PNG non supporta nativamente il CMYK nella maggior parte delle tipografie'
        }
    ], proTitle: 'Raccomandazioni', conTitle: 'Controindicazioni' },

    { type: 'diagnostic', variant: 'warning', title: 'Errore Comune: Il Mito dell\'Upscaling', icon: 'mdi:alert', badge: 'Critico', html: '<strong>NON aumentare i DPI in Photoshop senza cambiare i pixel.</strong> Passare da 72 DPI a 300 DPI riduce semplicemente la dimensione fisica della stampa. Se si \"aggiungono pixel\" tramite interpolazione (upscaling), l\'immagine apparirà sfocata. Hai bisogno dei pixel REALI dalla sorgente.' },

    { type: 'glossary', items: [
        {
            term: 'DPI (Dots Per Inch)',
            definition: 'Misura della risoluzione di stampa: quanti punti di inchiostro per pollice lineare (2,54 cm). 300 DPI = 300x300 = 90.000 punti per pollice quadrato.'
        },
        {
            term: 'CMYK',
            definition: 'Spazio colore di stampa: Ciano, Magenta, Giallo, Nero (Key black). Basato sull\'inchiostro sottrattivo. Diverso dall\'RGB (luce additiva degli schermi).'
        },
        {
            term: 'Abbondanza (Bleed)',
            definition: 'Area extra (tipicamente 3mm) che viene stampata e poi tagliata. Garantisce che l\'immagine arrivi al bordo senza lasciare margini bianchi.'
        },
        {
            term: 'Risoluzione Nativa',
            definition: 'Pixel REALI catturati dalla fotocamera, senza manipolazione. Aumentare i DPI senza cambiare i pixel non genera \"risoluzione nativa\".'
        },
        {
            term: 'Interpolazione (Upscaling)',
            definition: 'Algoritmo che inventa nuovi pixel basandosi su quelli esistenti. Utile per piccoli aumenti, ma perde nitidezza nei grandi ingrandimenti.'
        }
    ] },

    { type: 'message', title: 'Precisione Tecnica per Risultati Professionali', ariaLabel: 'Informazioni sui calcoli di stampa', html: 'Il nostro calcolatore converte i pixel in centimetri considerando gli standard internazionali (ISO 216 per la carta). Non è solo un calcolatore: è il tuo validatore per capire se quella foto è adatta a quella dimensione di stampa mantenendo la qualità professionale.' },

    { type: 'title', text: 'Conclusione: Stampa Senza Sorprese', level: 3 },
    { type: 'paragraph', html: 'La differenza tra una bella stampa e una deludente è conoscere la relazione tra pixel e DPI. Usa questo calcolatore per convalidare i tuoi file PRIMA di andare in tipografia. In questo modo eviti spese inutili e risultati frustranti.' }
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

export const content: PrintQualityCalculatorLocaleContent = {
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
