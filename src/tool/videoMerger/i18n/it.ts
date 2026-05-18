import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { VideoMergerUI, VideoMergerLocaleContent } from '../index';

const slug = 'unire-video-online';
const title = 'Unire Video Online: Unisci più video gratis e velocemente';
const description = 'Unisci e concatena più video in uno solo gratuitamente, online e localmente. Nessun watermark, nessun caricamento, 100% privato nel tuo browser.';

const ui: VideoMergerUI = {
    uploadTitle: "Carica i tuoi file video",
    uploadFormats: "Trascina più video o fai clic per selezionarli",
    privacyNote: "I tuoi video vengono elaborati al 100% localmente. Nulla viene caricato su Internet.",
    addMoreBtn: "Aggiungi altri video",
    mergeBtn: "Unisci i video ora",
    mergingStatus: "Unione dei video in corso...",
    downloadBtn: "Scarica il video unito",
    resetBtn: "Ricomincia",
    emptyList: "Trascina o seleziona i video per iniziare a unirli.",
    listTitle: "Ordine dei video da unire",
    optionsTitle: "Impostazioni di output",
    optionResolution: "Risoluzione",
    optionFps: "Fotogrammi al secondo (FPS)",
    optionsQualityNote: "La risoluzione finale verrà regolata mantenendo le proporzioni originali nel formato letterbox se i video hanno dimensioni diverse.",
    faqTitle: "Domande frequenti sull'unione di video",
    bibliographyTitle: "Bibliografia e Riferimenti",
    resolutionWarning: "Attenzione: Alcuni video hanno risoluzioni diverse e verranno adattati automaticamente."
};

const faq: VideoMergerLocaleContent['faq'] = [
    {
        question: "È sicuro caricare i miei video in questo strumento?",
        answer: "Sì, è completamente sicuro. Lo strumento funziona al 100% localmente nel tuo browser. I tuoi video non vengono mai trasmessi su Internet o salvati su alcun server.",
    },
    {
        question: "Cosa succede se i miei video hanno dimensioni diverse?",
        answer: "Il nostro strumento ridimensiona automaticamente i video per adattarli alla risoluzione di output scelta. Per le proporzioni che non corrispondono esattamente, verranno aggiunti margini neri (letterboxing) per preservare le proporzioni originali.",
    },
    {
        question: "L'audio dei video viene preservato durante l'unione?",
        answer: "Sì. Le tracce audio di ogni video vengono acquisite e mixate in sequenza in perfetta sincronizzazione con ogni segmento di immagine.",
    },
];

const howTo: VideoMergerLocaleContent['howTo'] = [
    {
        name: "Seleziona o trascina i tuoi video",
        text: "Carica tutti i file video che desideri unire direttamente dal tuo computer o dispositivo mobile.",
    },
    {
        name: "Organizza l'ordine",
        text: "Ordina i video caricati utilizzando i pulsanti su e giù nell'elenco per decidere la sequenza di riproduzione.",
    },
    {
        name: "Regola le opzioni",
        text: "Scegli la risoluzione di output e i fotogrammi al secondo (FPS) del video unito.",
    },
    {
        name: "Unisci ed esporta",
        text: "Premi il pulsante unisci. Attendi il completamento dell'elaborazione in tempo reale e scarica il file risultante.",
    },
];

const seo: VideoMergerLocaleContent['seo'] = [
    {
        type: 'summary',
        title: 'Unione professionale di video 100% locale',
        items: [
            'Elaborazione in tempo reale direttamente nel tuo browser',
            'Supporta più video di dimensioni e formati diversi (MP4, WEBM, MOV)',
            'Risoluzione di output selezionabile (720p, 1080p, 2K, 4K)',
            'Tracce audio combinate in modo perfettamente sequenziale'
        ]
    },
    { type: 'title', text: 'Unire video online gratis: Semplicità e privacy senza limiti', level: 2 },
    { type: 'paragraph', html: 'Ti chiedi <strong>come unire due video in uno solo</strong> senza complicazioni? Non è più necessario scaricare software pesanti o applicazioni a pagamento. Il nostro strumento per <strong>unire video online gratis</strong> ti consente di concatenare e unire tutti i clip di cui hai bisogno in pochi secondi. Funzionando al 100% localmente, non devi caricare i tuoi file su alcun server, garantendo assoluta privacy e permettendoti di <strong>unire video pesanti</strong> senza tempi di attesa per il caricamento.' },
    
    { type: 'title', text: 'Unire video senza watermark', level: 3 },
    { type: 'paragraph', html: 'Uno dei maggiori svantaggi di altre applicazioni è che rovinano i tuoi contenuti. Con noi, puoi <strong>unire video online senza watermark</strong>. Il file che scaricherai sarà esattamente la tua creazione, pulita, professionale e pronta da condividere su YouTube, Instagram, TikTok o per uso personale.' },

    { type: 'stats', items: [
        { value: '100%', label: 'Privato e Locale', icon: 'mdi:shield-check' },
        { value: '0MB', label: 'Nessun dato di caricamento', icon: 'mdi:upload-off' },
        { value: '4K', label: 'Risoluzione massima', icon: 'mdi:video-high-definition' }
    ], columns: 3 },

    { type: 'title', text: 'Casi d\'uso comuni per l\'unione di video', level: 3 },
    { type: 'comparative', items: [
        {
            title: 'Social Media',
            description: 'Unione rapida di storie, TikTok o reel in un unico video',
            icon: 'mdi:instagram',
            points: [
                'Unisci piccoli clip registrati con il cellulare',
                'Prepara contenuti sequenziali per Instagram o YouTube',
                'Unione senza fastidiosi watermark'
            ]
        },
        {
            title: 'Presentazioni',
            description: 'Unisci introduzioni e registrazioni dimostrative',
            icon: 'mdi:presentation',
            points: [
                'Unisci un\'introduzione animata al corpo della presentazione',
                'Unisci brevi demo software',
                'Esportazione pulita in formato standard MP4/WEBM'
            ],
            highlight: true
        },
        {
            title: 'Compilation familiari',
            description: 'Unisci più video delle tue vacanze o feste',
            icon: 'mdi:home-heart',
            points: [
                'Crea un unico video con tutti i momenti della festa',
                'Raggruppa i ricordi di viaggio cronologicamente',
                'Facile da condividere in un unico file'
            ]
        },
        {
            title: 'Video educativi',
            description: 'Concatena brevi capitoli di formazione o lezioni',
            icon: 'mdi:school',
            points: [
                'Raggruppa piccoli tutorial indipendenti',
                'Aggiungi un clip di chiusura alle tue lezioni',
                'Struttura il tuo corso in modo professionale'
            ]
        }
    ], columns: 2 },

    { type: 'title', text: 'La migliore app per unire video dal browser', level: 2 },
    { type: 'paragraph', html: 'Questa non è solo un\'altra pagina web; è una vera e propria <strong>app per unire video</strong> che opera direttamente dal tuo browser grazie alle moderne API video HTML5. Puoi <strong>fusionare video MP4</strong>, WEBM e altro ancora, miscelando risoluzioni (il nostro sistema applica automaticamente il letterboxing se le dimensioni variano) e scegliendo i fotogrammi al secondo (FPS) della tua esportazione finale.' },

    { type: 'title', text: 'Confronto degli approcci di unione', level: 3 },
    { type: 'table', headers: ['Caratteristiche', 'Il nostro strumento locale', 'Convertitori online classici', 'Editor professionali'], rows: [
        ['Privacy', 'Totale (Elaborato sul tuo dispositivo)', 'Bassa (Richiede il caricamento su server)', 'Totale (Installato sul tuo dispositivo)'],
        ['Consumo di rete', 'Zero (Nessun caricamento di gigabyte)', 'Molto alto (Caricamento e download)', 'Zero'],
        ['Watermark', 'NO (100% pulito)', 'Sì (Nelle versioni gratuite)', 'NO (Se acquisti la licenza)'],
        ['Prezzo', '100% Gratis', 'Gratis con limiti o abbonamento', 'Di solito costosi'],
        ['Curva di apprendimento', 'Molto bassa (Trascina, ordina e unisci)', 'Bassa', 'Molto alta (Richiede formazione)']
    ] },

    { type: 'proscons', items: [
        {
            pro: 'Privacy garantita: Massima sicurezza poiché nessun file lascia il tuo dispositivo',
            con: 'La velocità di unione di video pesanti dipende dalla RAM e dal processore del tuo computer locale'
        },
        {
            pro: 'Risultati professionali: 100% gratuito, senza registrazione e senza watermark',
            con: 'Quando si uniscono video con dimensioni diverse (verticali vs orizzontali), verranno applicati margini neri'
        },
        {
            pro: 'Versatilità: Esportazione rapida con codifica efficiente ottimizzata per web e social media',
            con: 'Non consente di aggiungere transizioni complesse (dissolvenze 3D) o effetti visivi cinematografici'
        }
    ], title: 'Vantaggi e considerazioni' },

    { type: 'title', text: 'Inizia a unire i tuoi video oggi', level: 2 },
    { type: 'paragraph', html: 'Non ci sono più scuse per avere centinaia di frammenti video disorganizzati. Carica i tuoi file, posizionali nell\'ordine desiderato e premi il pulsante. Scopri il modo più veloce, sicuro e privato per <strong>unire video online</strong>.' }
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

export const content: VideoMergerLocaleContent = {
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
