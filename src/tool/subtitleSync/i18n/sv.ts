import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { SubtitleSyncUI, SubtitleSyncLocaleContent } from '../index';

const slug = 'synkronisera-srt-undertexter-online-justera-timing-gratis';
const title = 'Synkronisera SRT undertexter online: Justera timing gratis';
const description = 'Onlineverktyg för att tidigarelägga eller fördröja SRT-undertexter. Korrigera tidsförskjutning enkelt och ladda ner den synkroniserade filen direkt.';

const ui: SubtitleSyncUI = {
    dropTitle: "Dra din .SRT-fil hit",
    dropSubtitle: "eller klicka för att bläddra",
    adjustTitle: "Justera tid",
    offsetLabel: "Offset (sekunder)",
    offsetHelp: "Använd negativa värden för att tidigarelägga (t.ex. -1.5) och positiva värden för att fördröja.",
    linesStat: "Rader",
    firstStat: "Första undertexten",
    lastStat: "Sista undertexten",
    originalLabel: "ORIGINAL",
    resultLabel: "RESULTAT",
    downloadButton: "Ladda ner korrigerad",
    previewBadge: "FÖRHANDSGRANSKNING",
    unitSeconds: "sek"
};

const faq: SubtitleSyncLocaleContent['faq'] = [
    {
        question: "Hur kan jag synkronisera mina undertexter om ljudet ligger före?",
        answer: "Om ljudet hörs före texten måste du fördröja undertexterna. Ange ett positivt värde i kalkylatorn (t.ex. 2.0 för att fördröja dem med 2 sekunder).",
    },
    {
        question: "Vilka filformat accepterar det här verktyget?",
        answer: "För närvarande är verktyget optimerat för .SRT-filer (SubRip), vilket är den vanligaste standarden i videospelare och streamingplattformar.",
    },
    {
        question: "Är det säkert att ladda upp mina undertextfiler?",
        answer: "Ja, eftersom bearbetningen sker 100 % lokalt på din enhet. Dina filer skickas inte till någon server; synkroniseringen sker direkt i din webbläsare.",
    },
    {
        question: "Kan jag synkronisera bara en del av filen?",
        answer: "Nej, det här verktyget tillämpar en konstant tidsförskjutning (offset) på hela filen. Om förskjutningen är progressiv kan du behöva mer avancerad redigering.",
    },
];

const howTo: SubtitleSyncLocaleContent['howTo'] = [
    {
        name: "Ladda upp din SRT-fil",
        text: "Dra undertextfilen du vill korrigera till uppladdningsområdet.",
    },
    {
        name: "Identifiera förskjutningen",
        text: "Mät hur mycket fördröjning eller försprång undertexterna har i förhållande till ljudet i din spelare.",
    },
    {
        name: "Justera offset",
        text: "Ange positiva (fördröjning) eller negativa (tidigareläggning) sekunder i kontrollpanelen.",
    },
    {
        name: "Ladda ner filen",
        text: "Kontrollera i förhandsgranskningen att tiderna är korrekta och klicka på ladda ner för att få din nya SRT.",
    },
];

const bibliography: SubtitleSyncLocaleContent['bibliography'] = [
    {
        name: "SubRip (SRT) formatspecifikation",
        url: "https://matroska.org/technical/subtitles.html#srt-subtitles",
    },
    {
        name: "MDN Web Docs - FileReader API",
        url: "https://developer.mozilla.org/en-US/docs/Web/API/FileReader",
    },
];

const seo: SubtitleSyncLocaleContent['seo'] = [
    {
        type: 'summary',
        title: 'Professionell synkronisering av undertexter',
        items: [
            'Omedelbar korrigering av osynk mellan ljud och undertext',
            'Stöd för SRT-standardfiler (SubRip)',
            '100 % lokal bearbetning – maximal integritet',
            'Ingen installation, inget abonnemang, helt gratis'
        ]
    },
    { type: 'title', text: 'Perfekt SRT undertextsynkronisering', level: 2 },
    { type: 'paragraph', html: 'Det finns inget mer frustrerande för en tittare än att se dialoger som inte matchar rösterna. Undertextförskjutning beror vanligtvis på skillnader mellan videoversioner: variationer i bildhastighet (framerate), reklamavbrott, produktionsintron eller ändringar i komprimering. Med det här verktyget löser du problemet på några sekunder.' },

    { type: 'stats', items: [
        { value: '100 %', label: 'Lokal bearbetning', icon: 'mdi:shield' },
        { value: 'Millisekunder', label: 'Precision', icon: 'mdi:clock-outline' },
        { value: 'Alla storlekar', label: 'INGEN filgräns', icon: 'mdi:file-document' }
    ], columns: 3 },

    { type: 'title', text: 'Tidigareläggning vs Fördröjning: Praktisk guide', level: 3 },
    { type: 'paragraph', html: 'Det första steget är att korrekt identifiera typen av förskjutning. Här är logiken:' },
    { type: 'list', items: [
        '<strong>Fördröjning (positivt värde):</strong> När du ser texten dyka upp FÖRE ljudet. Undertexterna ligger före. Exempel: +2.0 sekunder.',
        '<strong>Tidigareläggning (negativt värde):</strong> När du ser texten dyka upp EFTER ljudet. Undertexterna ligger efter. Exempel: -2.0 sekunder.',
        '<strong>Testa och justera:</strong> Börja med små ökningar (0,5 s) och använd förhandsgranskningen för att validera.'
    ], icon: 'mdi:arrow-right' },

    { type: 'card', title: 'Integritet på professionell nivå', html: 'Genom att bearbeta filen via JavaScript på klientsidan garanterar vi att ditt undertextinnehåll aldrig lämnar din dator. Viktigt för översättare och yrkesverksamma som hanterar konfidentiellt material eller material under sekretessavtal (NDA).' },

    { type: 'title', text: 'Vanliga användningsfall', level: 3 },
    { type: 'comparative', items: [
        {
            title: 'Översättare och textare',
            description: 'Synkronisera översättningar efter att ha arbetat med flera videoversioner',
            icon: 'mdi:translate',
            points: [
                'SRT-filer från olika källor',
                'Versionshantering (bio vs streaming)',
                'Snabb leverans utan verktygsbyte'
            ]
        },
        {
            title: 'Innehållsskapare',
            description: 'Återställ undertexter när videon har bearbetats med en annan bildhastighet',
            icon: 'mdi:video',
            points: [
                'Återanvänd befintliga undertexter',
                'Formatändringar (720p till 1080p)',
                'Undvik manuell omtidning av 1000-tals rader'
            ],
            highlight: true
        },
        {
            title: 'Hobbyanvändare',
            description: 'Korrigera nedladdade undertexter som inte passar perfekt',
            icon: 'mdi:account',
            points: [
                'Generella osynkade undertexter',
                'Filmer från olika regioner (PAL vs NTSC)',
                'Streaming med redigerade versioner'
            ]
        }
    ], columns: 3 },

    { type: 'title', text: 'Varför undertexter hamnar i osynk', level: 3 },
    { type: 'table', headers: ['Vanlig orsak', 'Teknisk beskrivning', 'Lösning'], rows: [
        ['Skillnad i bildhastighet', '23.976 fps vs 25 fps - ackumulerad skillnad', 'Enstaka offsetjustering (det här verktyget)'],
        ['Redigering', 'Reklamavbrott eller borttaget/tillagt innehåll', 'Manuell beräkning + synkronisering'],
        ['Regional version', 'PAL (25 fps Europa) vs NTSC (29.97 fps USA)', 'Enkel matematisk förskjutning'],
        ['Ändrad upplösning', 'Omkodning med annan bearbetningshastighet', 'Omberäkning av originalfilen']
    ] },

    { type: 'diagnostic', variant: 'info', title: 'Tekniska begränsningar att tänka på', icon: 'mdi:information', badge: 'Viktigt', html: 'Det här verktyget tillämpar en <strong>konstant</strong> offset på hela filen. Om osynken är <strong>progressiv</strong> (startar bra men hamnar gradvis mer ur synk) tyder det på en bestående skillnad i bildhastighet. I så fall krävs ombearbetning av originalfilen i professionell redigeringsmjukvara.' },

    { type: 'proscons', items: [
        {
            pro: 'Extrem hastighet – bearbetar stora filer på millisekunder',
            con: 'Justerar endast fast förskjutning, inte progressiva'
        },
        {
            pro: 'Total integritet – innehållet lämnar aldrig webbläsaren',
            con: 'Kräver modern webbläsare med JavaScript aktiverat'
        },
        {
            pro: 'Universellt format – fungerar med alla standard SRT',
            con: 'Stöder inte andra format (ASS, VTT, SCC, etc.)'
        },
        {
            pro: 'Helt gratis, ingen reklam, ingen spårning',
            con: 'Ingen ändringshistorik eller versionshantering'
        }
    ], proTitle: 'Fördelar', conTitle: 'Begränsningar' },

    { type: 'glossary', items: [
        {
            term: 'SRT (SubRip)',
            definition: 'Det mest universella undertextformatet: textfil med sekvensnummer, tider (hh:mm:ss,mmm) och text. De facto-standard i spelare och plattformar.'
        },
        {
            term: 'Offset',
            definition: 'Fast mängd tid som läggs till eller dras ifrån alla tider i filen. Kan vara positiva sekunder (fördröjning) eller negativa (tidigareläggning).'
        },
        {
            term: 'Bildhastighet (fps)',
            definition: 'Bilder per sekund. 24p (film), 25p (PAL/Europa), 29.97p (NTSC/USA), 60p (flytande video). Skillnader orsakar ackumulerad osynk.'
        },
        {
            term: 'NTSC vs PAL',
            definition: 'Regionala tv-standarder: PAL (25 fps) i Europa; NTSC (29.97 fps) i USA. Ca 4 % hastighetsskillnad.'
        },
        {
            term: 'Progressiv osynk',
            definition: 'När synkroniseringen börjar korrekt men gradvis hamnar fel. Tyder på skillnad i bildhastighet, kräver ombearbetning.'
        }
    ] },

    { type: 'message', title: 'Professionell redigering med full kontroll', ariaLabel: 'Teknisk information om synkronisering', html: 'Vår metod är enkel men kraftfull: en enda förskjutning, tillämpad omedelbart, bearbetad 100 % i din webbläsare. Inget moln, ingen lagring, ingen spårning. Ladda bara upp, justera, ladda ner. Full kontroll över ditt innehåll.' },

    { type: 'title', text: 'Slutsats: Filmer utan avbrott', level: 3 },
    { type: 'paragraph', html: 'Perfekt synkronisering av undertexter är avgörande för en audiovisuell upplevelse av hög kvalitet. Med det här verktyget förvandlar du en frustrerende upplevelse till en perfekt filmkväll, utan behov av dyr eller komplicerad mjukvara.' }
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
    inLanguage: 'sv',
};

export const content: SubtitleSyncLocaleContent = {
    slug,
    title,
    description,
    ui,
    seo,
    faq,
    faqTitle: 'Vanliga frågor om synkronisering av undertexter',
    bibliography,
    bibliographyTitle: 'Tekniska resurser för undertextformat',
    howTo,
    schemas: [faqSchema as any, howToSchema as any, appSchema],
};
