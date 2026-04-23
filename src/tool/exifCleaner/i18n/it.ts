import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ExifCleanerUI, ExifCleanerLocaleContent } from '../index';

const slug = 'pulizia-metadati-exif-rimuovi-gps-privacy-foto';
const title = 'Pulizia Metadati EXIF: Rimuovi GPS e Dati Nascosti dalle Foto';
const description = 'Strumento online gratuito per cancellare i metadati EXIF, le coordinate GPS e le specifiche della fotocamera dalle tue immagini prima di condividerle. 100% privato: funziona senza caricare foto su Internet.';

const ui: ExifCleanerUI = {
    dropTitle: "Trascina la tua immagine qui",
    dropSubtitle: "Rimuovi i metadati GPS, il modello della fotocamera e le impostazioni nascoste.",
    dropLocalInfo: "Elaborazione 100% locale. Nulla viene caricato sul cloud.",
    selectButton: "Seleziona Immagine",
    processingText: "Pulizia metadati in corso...",
    analysisCompleted: "Analisi Completata",
    downloadButton: "Scarica Immagine Pulita",
    resetButton: "Pulisci un'altra immagine",
    privacyRiskTitle: "RISCHI PER LA PRIVACY RILEVATI:",
    gpsLabel: "GPS:",
    gpsDetected: "RILEVATO",
    gpsNotFound: "NON TROVATO",
    cameraLabel: "FOTOCAMERA:",
    softwareLabel: "SOFTWARE:",
    dateLabel: "DATA:",
    otherTechnicalDetails: "ALTRI DETTAGLI TECNICI",
    noMetadataFound: "Nessun metadato EXIF leggibile trovato.",
    alreadyCleanInfo: "L'immagine potrebbe essere già pulita.",
    previewLabel: "Anteprima",
};

const faq: ExifCleanerLocaleContent['faq'] = [
    {
        question: "Cosa sono i metadati EXIF?",
        answer: "EXIF (Exchangeable Image File Format) sono informazioni nascoste che la tua fotocamera o il tuo telefono salvano all'interno di ogni foto. Includono la data esatta, il modello del dispositivo, le impostazioni di scatto (ISO, apertura) e, cosa più critica, le coordinate GPS del luogo in cui è stata scattata la foto.",
    },
    {
        question: "È sicuro usare questo strumento online?",
        answer: "Sì, perché l'elaborazione è al 100% locale nel tuo browser. Le tue foto non vengono mai caricate su alcun server; la pulizia avviene direttamente nella memoria del tuo dispositivo, garantendo la massima privacy.",
    },
    {
        question: "Quali dati specifici rimuove lo strumento?",
        answer: "Cancella tutti i tag EXIF (GPS, marca della fotocamera, numero di serie), IPTC (copyright, autore) e XMP (cronologia delle modifiche). La tua immagine diventa 'pulita', preservando solo i pixel visivi.",
    },
    {
        question: "L'immagine perde qualità durante la pulizia dei metadati?",
        answer: "No. Rimuoviamo solo l''intestazione' dei dati tecnici del file. I dati dell'immagine (pixel) rimangono identici, quindi la qualità visiva non viene minimamente intaccata.",
    },
];

const howTo: ExifCleanerLocaleContent['howTo'] = [
    {
        name: "Seleziona le immagini",
        text: "Trascina le tue foto o selezionale dal tuo explorer di file. Puoi elaborarne diverse contemporaneamente.",
    },
    {
        name: "Analizza i dati attuali",
        text: "Lo strumento ti mostrerà quali informazioni sensibili ha rilevato (ad esempio, 'Coordinate GPS rilevate').",
    },
    {
        name: "Elabora e pulisci",
        text: "Fai clic sul pulsante di pulizia per rimuovere istantaneamente tutti i tag dei metadati.",
    },
    {
        name: "Scarica foto sicure",
        text: "Salva le nuove versioni delle tue immagini, ora anonimizzate e pronte per essere condivise in sicurezza sui social media.",
    },
];

const seo: ExifCleanerLocaleContent['seo'] = [
    {
        type: 'summary',
        title: 'Pulizia Metadati EXIF: Proteggi la tua Privacy',
        items: [
            'Rimuovi istantaneamente le coordinate GPS e la posizione dalle tue foto',
            'Cancella il modello della fotocamera, il numero di serie e le informazioni tecniche',
            'Elaborazione basata al 100% su browser: le tue immagini non lasciano mai il tuo dispositivo',
            'Mantiene la qualità visiva - vengono rimossi solo i dati nascosti'
        ]
    },
    { type: 'title', text: 'Guida completa alla privacy e ai metadati EXIF nella fotografia digitale', level: 2 },
    { type: 'paragraph', html: 'Ti sei mai chiesto quante informazioni personali condividi quando carichi una foto sui social media? I metadati EXIF sono come un\'<strong>impronta digitale invisibile</strong> che può rivelare tutto, dalla tua posizione esatta a casa al prezzo della tua attrezzatura fotografica. Questa guida spiega come proteggere efficacemente la tua privacy.' },

    { type: 'stats', items: [
        { value: '100%', label: 'Privacy - Elaborazione Locale', icon: 'mdi:shield-check' },
        { value: '0%', label: 'Dati memorizzati sui server', icon: 'mdi:database' },
        { value: 'Istantanea', label: 'Rimozione Metadati', icon: 'mdi:lightning-bolt' }
    ], columns: 3 },

    { type: 'title', text: 'Quali informazioni si nascondono nelle tue foto?', level: 3 },
    { type: 'paragraph', html: 'Oltre il 90% delle foto digitali contiene informazioni sensibili che possono compromettere la tua sicurezza. Ecco tutti i dati che possono essere rivelati:' },
    { type: 'list', items: [
        '<strong>Coordinate GPS:</strong> La latitudine e la longitudine esatte in cui è stato effettuato lo scatto (indirizzo di casa, lavoro, luoghi visitati di frequente).',
        '<strong>Identificazione dell\'attrezzatura:</strong> Marca, modello e numero di serie della fotocamera o dello smartphone (informazioni preziose).',
        '<strong>Impostazioni tecniche:</strong> ISO, apertura (f/), tempo di esposizione e lunghezza focale (consente di identificare la tua attrezzatura specifica).',
        '<strong>Data e ora esatte:</strong> Una cronologia completa delle tue attività quotidiane.',
        '<strong>Cronologia delle modifiche:</strong> Software utilizzato, software di editing e data dell\'ultima modifica.',
        '<strong>Dati sul copyright:</strong> Fotografo, copyright e note personali.'
    ] },

    { type: 'title', text: 'Rischi reali per la sicurezza: Casi d\'uso', level: 3 },
    { type: 'comparative', items: [
        {
            title: 'Fotografi professionisti',
            description: 'Rischio di furto di attrezzature costose identificate tramite numero di serie',
            icon: 'mdi:camera',
            points: [
                'I ladri cercano fotografi con attrezzatura di valore',
                'Il GPS identifica l\'indirizzo di casa del proprietario',
                'Il numero di serie facilita la rivendita nel dark web'
            ]
        },
        {
            title: 'Genitori e Influencer',
            description: 'Pericolo estremo: posizione in tempo reale dei bambini',
            icon: 'mdi:alert',
            points: [
                'I predatori tracciano le posizioni usando l\'OSINT',
                'I predatori possono identificare le routine quotidiane',
                'Rischio di stalking e tracciamento fisico'
            ],
            highlight: true
        },
        {
            title: 'Utenti dei Social Media',
            description: 'Esposizione della privacy personale e professionale',
            icon: 'mdi:share-variant',
            points: [
                'Pubblicare dall\'ufficio rivela la posizione del luogo di lavoro',
                'La geolocalizzazione permette di dedurre lo stipendio approssimativo',
                'I dati pubblici consentono un profiling mirato'
            ]
        },
        {
            title: 'Viaggiatori e Nomadi',
            description: 'Pericolo di furto in case non occupate',
            icon: 'mdi:map',
            points: [
                'Il GPS pubblicato indica che la casa è vuota durante il viaggio',
                'I dati sull\'attrezzatura attirano i criminali',
                'Le cronologie di viaggio rivelano orari e abitudini'
            ]
        }
    ], columns: 2 },

    { type: 'title', text: 'Come funziona questo strumento', level: 3 },
    { type: 'list', items: [
        '<strong>1. Seleziona le tue immagini:</strong> Trascina le foto o usa il selettore. Puoi elaborarne diverse contemporaneamente.',
        '<strong>2. Analisi automatica:</strong> Lo strumento rileva e mostra tutti i metadati presenti (GPS, modello fotocamera, data, ecc.).',
        '<strong>3. Pulizia istantanea:</strong> Con un clic, rimuove il 100% dei metadati dannosi.',
        '<strong>4. Download sicuro:</strong> Ricevi immagini anonimizzate pronte per essere condivise sui social senza rischi.',
        '<strong>5. Senza residui:</strong> L\'immagine pulita conserva tutta la sua qualità visiva originale.'
    ], icon: 'mdi:check' },

    { type: 'card', title: 'Tecnologia per la Privacy', icon: 'mdi:shield-check', html: 'Questo strumento utilizza l\'<strong>API Canvas del browser</strong> per creare una copia pulita dell\'immagine pixel per pixel, garantendo che:<br><br>- Nessun dato venga inviato ai server<br>- La tua immagine non lasci mai il tuo dispositivo<br>- L\'elaborazione sia 100% anonima e sicura<br>- Puoi usarlo anche senza una connessione Internet (dopo il caricamento iniziale)' },

    { type: 'title', text: 'Quali dati specifici vengono rimossi?', level: 3 },
    { type: 'table', headers: ['Tipo di metadati', 'Esempi', 'Rischio'], rows: [
        ['EXIF (Exchangeable)', 'GPS, ISO, Apertura, Velocità dell\'otturatore, Modello fotocamera', 'CRITICO'],
        ['IPTC (Pubblicazione)', 'Copyright, Autore, Parole chiave, Posizione della scena', 'ALTO'],
        ['XMP (XML)', 'Cronologia modifiche, software utilizzato, modifiche apportate', 'MEDIO'],
        ['Dati di base del file', 'Data di creazione, ora esatta, dispositivo', 'ALTO']
    ] },

    { type: 'proscons', items: [
        {
            pro: 'Privacy totale - elaborazione 100% basata su browser',
            con: 'Richiede un browser moderno con supporto JavaScript'
        },
        {
            pro: 'Istantaneo - la pulizia di una foto richiede meno di 1 secondo',
            con: 'L\'elaborazione di foto di grandi dimensioni potrebbe essere lenta su dispositivi datati'
        },
        {
            pro: 'Zero perdita di qualità - rimuove solo i dati tecnici, non i pixel',
            con: 'Non modifica l\'immagine (ritagli, rotazioni, ecc.)'
        },
        {
            pro: 'Completamente gratuito senza limiti - elabora foto illimitate',
            con: 'Nessun supporto premium o archiviazione cloud'
        }
    ], proTitle: 'Vantaggi principali', conTitle: 'Limitazioni' },

    { type: 'tip', title: 'Consiglio per la sicurezza digitale', html: '<strong>Pulisci le tue foto PRIMA di pubblicarle</strong> su qualsiasi social network. Anche se elimini un post, i metadati potrebbero essere stati indicizzati dai motori di ricerca o dagli archivi. Prevenire è meglio che curare. Rendilo un\'abitudine: <br><br><em>Foto → Pulisci EXIF → Pubblica</em>' },

    { type: 'diagnostic', variant: 'warning', title: 'Rischi reali della mancata pulizia', icon: 'mdi:alert-circle', badge: 'Sicurezza Critica', html: '<strong>Casi documentati:</strong><br>- Genitori che pubblicano foto di bambini - i predatori hanno tracciato il GPS<br>- Fotografi di viaggio - case svaligiate mentre erano via<br>- Influencer - luoghi di residenza identificati da fan ossessivi<br><br>Non è paranoia: è igiene digitale di base nel 2026.' },

    { type: 'glossary', items: [
        {
            term: 'EXIF',
            definition: 'Exchangeable Image File Format. Uno standard che memorizza i metadati tecnici nei file immagine: GPS, dati della fotocamera, impostazioni di esposizione. Presente in circa il 90% delle foto digitali senza l\'intenzione dell\'utente.'
        },
        {
            term: 'Coordinate GPS',
            definition: 'Latitudine e longitudine precise della posizione esatta in cui è stata scattata la foto. Combinato con i social media, consente il tracciamento fisico delle persone.'
        },
        {
            term: 'IPTC',
            definition: 'International Press Telecommunications Council. Metadati di pubblicazione leggibili: copyright, autore, parole chiave, descrizione. Standard nella fotografia professionale.'
        },
        {
            term: 'XMP',
            definition: 'Extensible Metadata Platform. Un formato XML che registra la cronologia delle modifiche in software come Lightroom o Photoshop. Può rivelare tutte le modifiche apportate.'
        },
        {
            term: 'OSINT',
            definition: 'Open Source Intelligence. Una tecnica di raccolta di informazioni pubbliche (social media, metadati, registri) per profilare le persone a loro insaputa.'
        },
        {
            term: 'Anonimizzazione digitale',
            definition: 'Il processo di rimozione o offuscamento delle informazioni identificabili: posizione, dispositivo, modelli di comportamento. Essenziale per la privacy online.'
        }
    ] },

    { type: 'message', title: 'La tua privacy è una tua responsabilità', ariaLabel: 'Informazioni sulla privacy e sui diritti dei dati', html: 'Non memorizziamo, elaboriamo o condividiamo le tue immagini. <strong>Hai il pieno controllo.</strong> Tutte le operazioni avvengono esclusivamente nel tuo browser. Quando chiudi questa scheda, non rimane alcuna traccia delle tue attività. Ecco come proteggere la tua privacy su Internet: strumenti che rispettano i tuoi dati.' },

    { type: 'title', text: 'Conclusione: Condividi senza tracce', level: 3 },
    { type: 'paragraph', html: 'Proteggere la tua identità digitale inizia dai piccoli dettagli. Pulire le tue foto prima di pubblicarle è un\'<strong>abitudine essenziale di igiene digitale</strong> nel 2026. Non protegge solo la tua posizione: protegge la tua famiglia, i tuoi beni e la tua privacy professionale. Una foto apparentemente innocente può rivelare più cose su di te di quante tu possa immaginare.' }
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

export const content: ExifCleanerLocaleContent = {
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
