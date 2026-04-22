import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ExifCleanerUI, ExifCleanerLocaleContent } from '../index';

const slug = 'exif-metadata-rensare-ta-bort-gps-foto-privacy';
const title = 'EXIF Metadata rensare: Ta bort GPS och dolda data från foton';
const description = 'Gratis online-verktyg för att radera EXIF-metadata, GPS-koordinater och kameraspecifikationer från dina bilder innan delning. 100% privat: fungerar utan att ladda upp foton till internet.';

const ui: ExifCleanerUI = {
    dropTitle: "Dra din bild hit",
    dropSubtitle: "Ta bort GPS metadata, kameraspecifikationer och dolda inställningar.",
    dropLocalInfo: "100% lokal bearbetning. Inget laddas upp till molnet.",
    selectButton: "Välj bild",
    processingText: "Rensar metadata...",
    analysisCompleted: "Analys slutförd",
    downloadButton: "Ladda ner ren bild",
    resetButton: "Rensa en annan bild",
    privacyRiskTitle: "INTEGRITETSRISKER UPPTÄCKTA:",
    gpsLabel: "GPS:",
    gpsDetected: "UPPTÄCKT",
    gpsNotFound: "HITTADES EJ",
    cameraLabel: "KAMERA:",
    softwareLabel: "PROGRAMVARA:",
    dateLabel: "DATUM:",
    otherTechnicalDetails: "ANDRA TEKNISKA DETALJER",
    noMetadataFound: "Inga läsbara EXIF-metadata hittades.",
    alreadyCleanInfo: "Bilden kan redan vara ren.",
    previewLabel: "Förhandsvisning",
    faqTitle: "Vanliga frågor om bildintegritet": "Resurser och teknisk EXIF dokumentation",
};

const faq: ExifCleanerLocaleContent['faq'] = [
    {
        question: "Vad är EXIF-metadata?",
        answer: "EXIF (Exchangeable Image File Format) är dold information som din kamera eller telefon sparar i varje foto. Det inkluderar exakt datum, enhetsmodell, fotograferingsinställningar (ISO, bländare) och, mest kritiskt, GPS-koordinater för var fotot togs.",
    },
    {
        question: "Är det säkert att använda detta online-verktyg?",
        answer: "Ja, eftersom bearbetningen sker 100% lokalt i din webbläsare. Dina foton laddas aldrig upp till någon server; rensningen sker direkt i din enhets minne, vilket garanterar absolut integritet.",
    },
    {
        question: "Vilka specifika data tar rensaren bort?",
        answer: "Den raderar alla EXIF-taggar (GPS, kameramärke, serienummer), IPTC (upphovsrätt, författare) och XMP (redigeringshistorik). Din bild blir 'ren' och behåller endast de visuella pixlarna.",
    },
    {
        question: "Förlorar bilden kvalitet vid rensning av metadata?",
        answer: "Nej. Vi tar bara bort den tekniska 'headern' i filen. Bilddata (pixlar) förblir identiska, så den visuella kvaliteten påverkas inte alls.",
    },
];

const howTo: ExifCleanerLocaleContent['howTo'] = [
    {
        name: "Välj bilderna",
        text: "Dra dina foton hit eller välj dem i din filutforskare. Du kan bearbeta flera samtidigt.",
    },
    {
        name: "Analysera aktuella data",
        text: "Verktyget visar vilken känslig information det har upptäckt (t.ex. 'GPS-koordinater upptäckta').",
    },
    {
        name: "Bearbeta och rensa",
        text: "Klicka på rensa knappen för att omedelbart ta bort alla metadata taggar.",
    },
    {
        name: "Ladda ner säkra foton",
        text: "Spara de nya versionerna av dina bilder, nu anonymiserade och redo att delas säkert på sociala medier.",
    },
];

const seo: ExifCleanerLocaleContent['seo'] = [
    {
        type: 'summary',
        title: 'EXIF Metadata rensare: Skydda din integritet',
        items: [
            'Ta bort GPS-koordinater och plats från dina foton omedelbart',
            'Radera kameraspecifikationer, serienummer och teknisk information',
            '100% webbläsarbaserad bearbetning - dina bilder lämnar aldrig din enhet',
            'Behåller visuell kvalitet - endast dolda data tas bort'
        ]
    },
    { type: 'title', text: 'Komplett guide till integritet och EXIF metadata i digital fotografering', level: 2 },
    { type: 'paragraph', html: 'Har du någonsin undrat hur mycket personlig information du delar när du laddar upp ett foto på sociala medier? EXIF-metadata är som ett <strong>osynligt fingeravtryck</strong> som kan avslöja allt från din exakta hemadress till priset på din kamerautrustning. Denna guide förklarar hur du skyddar din integritet effektivt.' },

    { type: 'stats', items: [
        { value: '100%', label: 'Integritet - Lokal bearbetning', icon: 'mdi:shield-check' },
        { value: '0%', label: 'Data lagrad på servrar', icon: 'mdi:database' },
        { value: 'Omedelbar', label: 'Borttagning av metadata', icon: 'mdi:lightning-bolt' }
    ], columns: 3 },

    { type: 'title', text: 'Vilken information är dold i dina foton?', level: 3 },
    { type: 'paragraph', html: 'Mer än 90% av alla digitala foton innehåller känslig information som kan äventyra din säkerhet. Här är alla data som kan avslöjas:' },
    { type: 'list', items: [
        '<strong>GPS-koordinater:</strong> Den exakta latituden och longituden där bilden togs (hemadress, arbete, ofta besökta platser).',
        '<strong>Enhetsidentifiering:</strong> Märke, modell och serienummer på kameran eller smartphonen (värdefull information).',
        '<strong>Tekniska inställningar:</strong> ISO, bländare (f/), exponeringstid och brännvidd (gör det möjligt att identifiera din specifika utrustning).',
        '<strong>Exakt datum och tid:</strong> En komplett tidslinje över dina dagliga aktiviteter.',
        '<strong>Redigeringshistorik:</strong> Använd programvara, redigeringsprogram och senaste ändringsdatum.',
        '<strong>Upphovsrättsdata:</strong> Fotograf, copyright och personliga anteckningar.'
    ] },

    { type: 'title', text: 'Verkliga säkerhetsrisker: Användningsfall', level: 3 },
    { type: 'comparative', items: [
        {
            title: 'Professionella fotografer',
            description: 'Risk för stöld av dyr utrustning identifierad via serienummer',
            icon: 'mdi:camera',
            points: [
                'Tjuvar letar efter fotografer med värdefull utrustning',
                'GPS identifierar ägarens hemadress',
                'Serienummer underlättar vidaredetaljhandel på darknet'
            ]
        },
        {
            title: 'Föräldrar och influencers',
            description: 'Extrem fara: realtidsplats för barn',
            icon: 'mdi:alert',
            points: [
                'Förövare spårar platser med hjälp av OSINT',
                'Förövare kan identifiera dagliga rutiner',
                'Risk för stalking och fysisk spårning'
            ],
            highlight: true
        },
        {
            title: 'Användare av sociala medier',
            description: 'Exponering av personlig och yrkesmässig integritet',
            icon: 'mdi:share-variant',
            points: [
                'Inlägg från kontoret avslöjar arbetsplatsens läge',
                'Geolokalisering gör det möjligt att gissa ungefärlig lön',
                'Offentliga data möjliggör riktad profilering'
            ]
        },
        {
            title: 'Resenärer och nomader',
            description: 'Fara för stöld i obebodda hem',
            icon: 'mdi:map',
            points: [
                'Publicerad GPS indikerar tomt hus under resor',
                'Utrustningsdata lockar till sig kriminella',
                'Resehistorik avslöjar scheman och mönster'
            ]
        }
    ], columns: 2 },

    { type: 'title', text: 'Hur detta verktyg fungerar', level: 3 },
    { type: 'list', items: [
        '<strong>1. Välj dina bilder:</strong> Dra foton eller använd väljaren. Du kan bearbeta flera samtidigt.',
        '<strong>2. Automatisk analys:</strong> Verktyget upptäcker och visar alla metadata som finns (GPS, kameramodell, datum, etc.).',
        '<strong>3. Omedelbar rensning:</strong> Med ett klick tas 100% av skadliga metadata bort.',
        '<strong>4. Säker nedladdning:</strong> Ta emot anonymiserade bilder redo att delas på nätverk utan risker.',
        '<strong>5. Inga rester:</strong> Den rena bilden behåller all sin ursprungliga visuella kvalitet.'
    ], icon: 'mdi:check' },

    { type: 'card', title: 'Integritetsteknik', icon: 'mdi:shield-check', html: 'Detta verktyg använder <strong>webbläsarens Canvas API</strong> för att skapa en ren kopia av bilden pixel för pixel, vilket garanterar att:<br><br>- Inga data skickas till servrar<br>- Din bild aldrig lämnar din enhet<br>- 100% anonym och säker bearbetning<br>- Du kan använda den även utan internetanslutning (efter första laddningen)' },

    { type: 'title', text: 'Vilka specifika data tas bort?', level: 3 },
    { type: 'table', headers: ['Metadatatyp', 'Exempel', 'Risk'], rows: [
        ['EXIF (Exchangeable)', 'GPS, ISO, Bländare, Slutartid, Kameramodell', 'KRITISK'],
        ['IPTC (Publicering)', 'Copyright, Författare, Nyckelord, Plats för scen', 'HÖG'],
        ['XMP (XML)', 'Redigeringshistorik, Programvara som använts, Redigeringar som gjorts', 'MEDEL'],
        ['Grundläggande fildata', 'Skapandedatum, exakt tid, enhet', 'HÖG']
    ] },

    { type: 'proscons', items: [
        {
            pro: 'Total integritet - 100% webbläsarbaserad bearbetning',
            con: 'Kräver en modern webbläsare med stöd för JavaScript'
        },
        {
            pro: 'Omedelbar - rensning av ett foto tar mindre än 1 sekund',
            con: 'Bearbetning av stora foton kan vara långsam på äldre enheter'
        },
        {
            pro: 'Noll kvalitetsförlust - tar bara bort tekniska data, inte pixlar',
            con: 'Redigerar inte bilden (beskärning, rotationer, etc.)'
        },
        {
            pro: 'Helt gratis utan begränsningar - bearbeta obegränsat antal foton',
            con: 'Inget premiumstöd eller molnlagring'
        }
    ], proTitle: 'Viktiga fördelar', conTitle: 'Begränsningar' },

    { type: 'tip', title: 'Tips för digital säkerhet', html: '<strong>Rensa dina foton INNAN du postar</strong> dem på sociala medier. Även om du tar bort ett inlägg kan metadata ha indexerats av sökmotorer eller arkiv. Förebyggande är bättre än botemedel. Gör det till en vana: <br><br><em>Foto → Rensa EXIF → Posta</em>' },

    { type: 'diagnostic', variant: 'warning', title: 'Verkliga risker med att inte rensa', icon: 'mdi:alert-circle', badge: 'Kritisk säkerhet', html: '<strong>Dokumenterade fall:</strong><br>- Föräldrar som postat foton på barn - förövare spårade GPS<br>- Resande fotografer - hus rånade medan de var borta<br>- Influencers - bostadsadresser identifierade av besatta fans<br><br>Det är inte parnoia: det är grundläggande digital hygien år 2026.' },

    { type: 'glossary', items: [
        {
            term: 'EXIF',
            definition: 'Exchangeable Image File Format. En standard som lagrar tekniska metadata i bildfiler: GPS, kameradata, exponeringsinställningar. Finns i ~90% av de digitala fotona utan användarens avsikt.'
        },
        {
            term: 'GPS-koordinater',
            definition: 'Exakt latitud och longitud för den plats där fotot togs. Kombinerat med sociala medier möjliggör det fysisk spårning av personer.'
        },
        {
            term: 'IPTC',
            definition: 'International Press Telecommunications Council. Läsbara publiceringsmetadata: copyright, författare, nyckelord, beskrivning. Standard inom professionell fotografering.'
        },
        {
            term: 'XMP',
            definition: 'Extensible Metadata Platform. Ett XML-format som registrerar redigeringshistorik i programvara som Lightroom eller Photoshop. Det kan avslöja alla redigeringar som gjorts.'
        },
        {
            term: 'OSINT',
            definition: 'Open Source Intelligence. En teknik för att samla in offentlig information (sociala medier, metadata, register) för att profilera personer utan deras vetskap.'
        },
        {
            term: 'Digital anonymisering',
            definition: 'Processen att ta bort eller dölja identifierbar information: plats, enhet, beteendemönster. Avgörande för integritet på nätet.'
        }
    ] },

    { type: 'message', title: 'Din integritet är ditt ansvar', ariaLabel: 'Information om integritet och datarättigheter', html: 'Vi lagrar, bearbetar eller delar inte dina bilder. <strong>Du har full kontroll.</strong> Alla åtgärder sker uteslutande i din webbläsare. När du stänger den här fliken finns ingen post av din aktivitet kvar. Så här skyddar du din integritet på internet: verktyg som respekterar dina data.' },

    { type: 'title', text: 'Slutsats: Dela utan spår', level: 3 },
    { type: 'paragraph', html: 'Att skydda din digitala identitet börjar med små detaljer. Att rensa dina foton innan du publicerar dem är en <strong>viktig digital hygienvana</strong> år 2026. Det skyddar inte bara din plats: det skyddar din familj, dina tillgångar och din professionella integritet. Ett till synes oskyldigt foto kan avslöja mer om dig än du någonsin kunnat föreställa dig.' }
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

export const content: ExifCleanerLocaleContent = {
    slug,
    title,
    description,
    ui,
    seo,
    faqTitle: "Vanliga frågor",
    faq: "Referenser",
    bibliography,
    howTo,
    schemas: [faqSchema as any, howToSchema as any, appSchema],
};
