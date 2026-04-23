import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { SubtitleSyncUI, SubtitleSyncLocaleContent } from '../index';

const slug = 'sincronizzare-sottotitoli-srt-online-regolare-timing-gratis';
const title = 'Sincronizzare Sottotitoli SRT Online: Regola il Timing Gratuitamente';
const description = 'Strumento online per anticipare o ritardare i sottotitoli SRT. Correggi facilmente l\'offset temporale e scarica istantaneamente il file sincronizzato.';

const ui: SubtitleSyncUI = {
    dropTitle: "Trascina qui il tuo file .SRT",
    dropSubtitle: "o clicca per sfogliare",
    adjustTitle: "Regola Tempo",
    offsetLabel: "Offset (secondi)",
    offsetHelp: "Usa valori negativi per anticipare (es. -1.5) e valori positivi per ritardare.",
    linesStat: "Linee",
    firstStat: "Primo Sottotitolo",
    lastStat: "Ultimo Sottotitolo",
    originalLabel: "ORIGINALE",
    resultLabel: "RISULTATO",
    downloadButton: "Scarica Corretto",
    previewBadge: "ANTEPRIMA",
    unitSeconds: "sec"
};

const faq: SubtitleSyncLocaleContent['faq'] = [
    {
        question: "Come posso sincronizzare i miei sottotitoli se l'audio è in anticipo?",
        answer: "Se l'audio appare prima del testo, devi ritardare i sottotitoli. Inserisci un valore positivo nel calcolatore (es. 2.0 per ritardarli di 2 secondi).",
    },
    {
        question: "Quali formati di file accetta questo strumento?",
        answer: "Attualmente, lo strumento è ottimizzato per i file .SRT (SubRip), che è lo standard più comune nei lettori video e nelle piattaforme di streaming.",
    },
    {
        question: "È sicuro caricare i miei file di sottotitoli?",
        answer: "Sì, perché l'elaborazione è al 100% locale sul tuo dispositivo. I tuoi file non vengono inviati a nessun server; la sincronizzazione avviene direttamente nel tuo browser.",
    },
    {
        question: "Posso sincronizzare solo una parte del file?",
        answer: "No, questo strumento applica un offset costante all'intero file. Se l'offset è progressivo, potresti aver bisogno di un editing più avanzato.",
    },
];

const howTo: SubtitleSyncLocaleContent['howTo'] = [
    {
        name: "Carica il tuo file SRT",
        text: "Trascina il file dei sottotitoli che vuoi correggere nell'area di caricamento.",
    },
    {
        name: "Identifica l'offset",
        text: "Misura quanto ritardo o anticipo hanno i sottotitoli rispetto all'audio nel tuo lettore.",
    },
    {
        name: "Regola l'offset",
        text: "Inserisci i secondi positivi (ritardo) o negativi (anticipo) nel pannello di controllo.",
    },
    {
        name: "Scarica il file",
        text: "Verifica nell'anteprima che i tempi siano corretti e clicca su scarica per ottenere il tuo nuovo SRT.",
    },
];

const seo: SubtitleSyncLocaleContent['seo'] = [
    {
        type: 'summary',
        title: 'Sincronizzazione Professionale dei Sottotitoli',
        items: [
            'Correzione istantanea degli offset audio-sottotitoli',
            'Supporta i file standard SRT (SubRip)',
            'Elaborazione 100% locale - massima privacy',
            'Nessuna installazione, nessun abbonamento, completamente gratuito'
        ]
    },
    { type: 'title', text: 'Sincronizzazione Perfetta dei Sottotitoli SRT', level: 2 },
    { type: 'paragraph', html: 'Non c\'è niente di più frustrante per uno spettatore che vedere dialoghi che non corrispondono alle voci. L\'offset dei sottotitoli si verifica solitamente a causa di differenze tra le versioni video: variazioni nel framerate, tagli pubblicitari, intro di produzione o cambiamenti nella compressione. Con questo strumento, risolvi il problema in pochi secondi.' },

    { type: 'stats', items: [
        { value: '100%', label: 'Elaborazione Locale', icon: 'mdi:shield' },
        { value: 'Millisecondi', label: 'Precisione', icon: 'mdi:clock-outline' },
        { value: 'Qualsiasi', label: 'NESSUN limite di file', icon: 'mdi:file-document' }
    ], columns: 3 },

    { type: 'title', text: 'Anticipo vs Ritardo: Guida Pratica', level: 3 },
    { type: 'paragraph', html: 'Il primo passo è identificare correttamente il tipo di offset. Ecco la logica:' },
    { type: 'list', items: [
        '<strong>Ritardo (Valore Positivo):</strong> Quando vedi il testo apparire PRIMA del suono. I sottotitoli sono in anticipo. Esempio: +2.0 secondi.',
        '<strong>Anticipo (Valore Negativo):</strong> Quando vedi il testo apparire DOPO il suono. I sottotitoli sono in ritardo. Esempio: -2.0 secondi.',
        '<strong>Testa e Regola:</strong> Inizia con piccoli incrementi (0.5s) e usa l\'anteprima per validare.'
    ], icon: 'mdi:arrow-right' },

    { type: 'card', title: 'Privacy di Livello Professionale', html: 'Elaborando il file tramite JavaScript sul lato client, garantiamo che il contenuto dei tuoi sottotitoli non lasci mai il tuo computer. Essenziale per traduttori e professionisti che gestiscono materiale riservato o sotto NDA.' },

    { type: 'title', text: 'Casi d\'Uso Comuni', level: 3 },
    { type: 'comparative', items: [
        {
            title: 'Traduttori e Sottotitolatori',
            description: 'Sincronizza le traduzioni dopo aver lavorato con più versioni video',
            icon: 'mdi:translate',
            points: [
                'File SRT da diverse fonti',
                'Versioning dei contenuti (cinematografico vs streaming)',
                'Consegna rapida senza cambiare strumenti'
            ]
        },
        {
            title: 'Creatori di Contenuti',
            description: 'Recupera i sottotitoli quando il video è stato elaborato con un framerate diverso',
            icon: 'mdi:video',
            points: [
                'Riuilizza i sottotitoli esistenti',
                'Cambi di formato (da 720p a 1080p)',
                'Evita il retiming manuale di più di 1000 linee'
            ],
            highlight: true
        },
        {
            title: 'Utenti Occasionali',
            description: 'Correggi i sottotitoli scaricati che non si adattano perfettamente',
            icon: 'mdi:account',
            points: [
                'Sottotitoli generici fuori sincrono',
                'Film in diverse regioni (PAL vs NTSC)',
                'Streaming con versioni editate'
            ]
        }
    ], columns: 3 },

    { type: 'title', text: 'Perché i Sottotitoli vanno Fuori Sincrono', level: 3 },
    { type: 'table', headers: ['Causa Comune', 'Descrizione Tecnica', 'Soluzione'], rows: [
        ['Differenza di Framerate', '23.976 fps vs 25 fps - differenza accumulata', 'Regolazione dell\'offset singolo (questo strumento)'],
        ['Editoria', 'Tagli pubblicitari o contenuti aggiuntivi rimossi', 'Calcolo manuale + sincronizzazione'],
        ['Versione Regionale', 'PAL (25 fps Europa) vs NTSC (29.97 fps USA)', 'Semplice offset matematico'],
        ['Cambio di Risoluzione', 'Re-encoding con diversa velocità di elaborazione', 'Ricalcolo del file originale']
    ] },

    { type: 'diagnostic', variant: 'info', title: 'Limitazioni Tecniche da Considerare', icon: 'mdi:information', badge: 'Importante', html: 'Questo strumento applica un offset <strong>costante</strong> all\'intero file. Se l\'offset è <strong>progressivo</strong> (inizia bene ma va gradualmente fuori sincrono), indica una differenza persistente di framerate. In quel caso, il file originale deve essere rielaborato con un software di editing professionale.' },

    { type: 'proscons', items: [
        {
            pro: 'Velocità estrema - elabora file di grandi dimensioni in millisecondi',
            con: 'Regola solo l\'offset fisso, non quelli progressivi'
        },
        {
            pro: 'Privacy totale - il contenuto non lascia mai il tuo browser',
            con: 'Richiede un browser moderno con JavaScript abilitato'
        },
        {
            pro: 'Formato universale - funziona con qualsiasi SRT standard',
            con: 'Non supporta altri formati (ASS, VTT, SCC, ecc.)'
        },
        {
            pro: 'Completamente gratuito, nessuna pubblicità, nessun tracciamento',
            con: 'Nessuna cronologia delle modifiche o versioning'
        }
    ], proTitle: 'Vantaggi', conTitle: 'Limitazioni' },

    { type: 'glossary', items: [
        {
            term: 'SRT (SubRip)',
            definition: 'Il formato di sottotitoli più universale: file di testo con numeri di sequenza, tempi (hh:mm:ss,mmm) e testo. Standard de facto nei lettori e nelle piattaforme.'
        },
        {
            term: 'Offset',
            definition: 'Quantità fissa di tempo aggiunta o sottratta a tutti i tempi nel file. Possono essere secondi positivi (ritardo) o negativi (anticipo).'
        },
        {
            term: 'Framerate (fps)',
            definition: 'Fotogrammi al secondo. 24p (cinema), 25p (PAL/Europa), 29.97p (NTSC/USA), 60p (video fluido). Le differenze causano offset cumulativi.'
        },
        {
            term: 'NTSC vs PAL',
            definition: 'Standard televisivi regionali: PAL (25 fps) in Europa; NTSC (29.97 fps) in USA. Differenza di velocità di circa il 4%.'
        },
        {
            term: 'Offset Progressivo',
            definition: 'Quando la sincronizzazione inizia correttamente ma finisce per andare gradualmente fuori sincro. Indica una differenza di framerate, richiede rielaborazione.'
        }
    ] },

    { type: 'message', title: 'Editing Professionale con Pieno Controllo', ariaLabel: 'Informazioni tecniche sulla sincronizzazione', html: 'Il nostro approccio è semplice ma potente: un singolo offset, applicato istantaneamente, elaborato al 100% nel tuo browser. Niente cloud, niente archiviazione, niente tracciamento. Semplicemente carica, regola, scarica. Pieno controllo sui tuoi contenuti.' },

    { type: 'title', text: 'Conclusione: Film Senza Interruzioni', level: 3 },
    { type: 'paragraph', html: 'La perfetta sincronizzazione dei sottotitoli è essenziale per un\'esperienza audiovisiva di qualità. Con questo strumento, trasformi un\'esperienza frustrante in una serata cinema perfetta, senza la necessità di software costosi o complicati.' }
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

export const content: SubtitleSyncLocaleContent = {
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
