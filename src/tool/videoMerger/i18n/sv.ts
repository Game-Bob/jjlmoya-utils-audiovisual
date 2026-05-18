import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { VideoMergerUI, VideoMergerLocaleContent } from '../index';

const slug = 'sla-ihop-videor-online';
const title = 'Slå Ihop Videor Online: Sammanfoga flera videor snabbt och gratis';
const description = 'Slå ihop och sammanfoga flera videor till en enda gratis, online och lokalt. Inga vattenstämplar, inga uppladdningar, 100% privat i din webbläsare.';

const ui: VideoMergerUI = {
    uploadTitle: "Ladda upp dina videofiler",
    uploadFormats: "Dra och släpp videor eller klicka för att välja dem",
    privacyNote: "Dina videor bearbetas 100% lokalt. Inget laddas upp till internet.",
    addMoreBtn: "Lägg till fler videor",
    mergeBtn: "Slå ihop videor nu",
    mergingStatus: "Slår ihop videor...",
    downloadBtn: "Ladda ner sammanslagen video",
    resetBtn: "Börja om",
    emptyList: "Dra eller välj videor för att börja slå ihop dem.",
    listTitle: "Ordning för videor att slå ihop",
    optionsTitle: "Utmatningsinställningar",
    optionResolution: "Upplösning",
    optionFps: "Bilder per sekund (FPS)",
    optionsQualityNote: "Den slutliga upplösningen kommer att justeras samtidigt som det ursprungliga bildförhållandet bevaras i letterbox-format om videorna har olika dimensioner.",
    faqTitle: "Vanliga Frågor om att Slå Ihop Videor",
    bibliographyTitle: "Bibliografi och Referenser",
    resolutionWarning: "Varning: Vissa videor har olika upplösningar och kommer automatiskt att anpassas."
};

const faq: VideoMergerLocaleContent['faq'] = [
    {
        question: "Är det säkert att ladda upp mina videor i detta verktyg?",
        answer: "Ja, det är helt säkert. Verktyget fungerar till 100% lokalt i din webbläsare. Dina videor överförs aldrig via internet eller sparas på någon server.",
    },
    {
        question: "Vad händer om mina videor har olika dimensioner?",
        answer: "Vårt verktyg skalar automatiskt om videorna för att passa den utdataupplösning du väljer. För proportioner som inte stämmer överens exakt, kommer svarta marginaler (letterboxing) att läggas till för att bevara det ursprungliga bildförhållandet.",
    },
    {
        question: "Bevaras ljudet från videorna när de slås ihop?",
        answer: "Ja. Ljudspåren från varje video fångas upp och mixas sekventiellt i perfekt synkronisering med varje bildsegment.",
    },
];

const howTo: VideoMergerLocaleContent['howTo'] = [
    {
        name: "Välj eller dra dina videor",
        text: "Ladda alla videofiler du vill slå ihop direkt från din dator eller mobil.",
    },
    {
        name: "Ordna ordningen",
        text: "Ordna de uppladdade videorna med upp- eller ner-knapparna i listan för att bestämma uppspelningssekvensen.",
    },
    {
        name: "Justera alternativ",
        text: "Välj den utdataupplösning och bildhastighet (FPS) du vill ha för din sammanslagna video.",
    },
    {
        name: "Slå ihop och exportera",
        text: "Tryck på sammanfogningsknappen. Vänta tills realtidsbearbetningen är klar och ladda ner den resulterande filen.",
    },
];

const seo: VideoMergerLocaleContent['seo'] = [
    {
        type: 'summary',
        title: '100% Lokal Professionell Videosammanfogning',
        items: [
            'Realtidsbearbetning direkt i din webbläsare',
            'Stöder flera videor av olika storlekar och format (MP4, WEBM, MOV)',
            'Valbar utdataupplösning (720p, 1080p, 2K, 4K)',
            'Ljudspår kombineras perfekt sekventiellt'
        ]
    },
    { type: 'title', text: 'Slå Ihop Videor Online Gratis: Obegränsad Enkelhet och Integritet', level: 2 },
    { type: 'paragraph', html: 'Undrar du <strong>hur man slår ihop två videor till en</strong> utan krångel? Du behöver inte längre ladda ner tunga program eller betalappar. Vårt verktyg för att <strong>slå ihop videor online gratis</strong> låter dig foga samman alla klipp du behöver på några sekunder. Eftersom det fungerar 100% lokalt behöver du inte ladda upp dina filer till någon server, vilket garanterar absolut integritet och låter dig <strong>slå ihop stora videor</strong> utan att behöva vänta på uppladdningar.' },
    
    { type: 'title', text: 'Sammanfoga Videor Utan Vattenstämpel', level: 3 },
    { type: 'paragraph', html: 'En av de största nackdelarna med andra applikationer är att de förstör ditt innehåll. Hos oss kan du <strong>sammanfoga videor online utan vattenstämpel</strong>. Filen du laddar ner kommer att vara exakt din skapelse, ren, professionell och redo att delas på YouTube, Instagram, TikTok eller för personligt bruk.' },

    { type: 'stats', items: [
        { value: '100%', label: 'Privat och Lokalt', icon: 'mdi:shield-check' },
        { value: '0MB', label: 'Ingen Uppladdningsdata', icon: 'mdi:upload-off' },
        { value: '4K', label: 'Maximal Upplösning', icon: 'mdi:video-high-definition' }
    ], columns: 3 },

    { type: 'title', text: 'Vanliga Användningsområden för att Slå Ihop Videor', level: 3 },
    { type: 'comparative', items: [
        {
            title: 'Sociala Medier',
            description: 'Snabb sammanfogning av stories, TikToks eller reels till en enda video',
            icon: 'mdi:instagram',
            points: [
                'Slå ihop små klipp inspelade med mobilen',
                'Förbered sekventiellt innehåll för Instagram eller YouTube',
                'Sammanfogning utan irriterande vattenstämplar'
            ]
        },
        {
            title: 'Presentationer',
            description: 'Sammanfoga introduktioner och demoinspelningar',
            icon: 'mdi:presentation',
            points: [
                'Slå ihop ett animerat intro med huvudpresentationen',
                'Sammanfoga korta mjukvarudemos',
                'Ren export i standard MP4/WEBM-format'
            ],
            highlight: true
        },
        {
            title: 'Familjekompilationer',
            description: 'Slå ihop flera videor från dina semestrar eller fester',
            icon: 'mdi:home-heart',
            points: [
                'Skapa en enda video med alla festens ögonblick',
                'Gruppera reseminnen kronologiskt',
                'Enkelt att dela då det är en enda fil'
            ]
        },
        {
            title: 'Utbildningsvideor',
            description: 'Foga samman korta träningskapitel eller lektioner',
            icon: 'mdi:school',
            points: [
                'Gruppera små oberoende handledningar',
                'Lägg till ett avslutande klipp till dina lektioner',
                'Strukturera din kurs på ett professionellt sätt'
            ]
        }
    ], columns: 2 },

    { type: 'title', text: 'Den Bästa Appen för att Slå Ihop Videor från Webbläsaren', level: 2 },
    { type: 'paragraph', html: 'Detta är inte bara ännu en webbsida; det är en riktig <strong>app för att slå ihop videor</strong> som fungerar direkt från din webbläsare tack vare moderna HTML5-video-API:er. Du kan <strong>slå ihop MP4-videor</strong>, WEBM med mera, blanda upplösningar (vårt system tillämpar letterboxing automatiskt om dimensionerna varierar) och välja bildhastighet (FPS) för din slutliga export.' },

    { type: 'title', text: 'Jämförelse av Tillvägagångssätt för Sammanfogning', level: 3 },
    { type: 'table', headers: ['Funktioner', 'Vårt Lokala Verktyg', 'Klassiska Online-konverterare', 'Professionella Redigerare'], rows: [
        ['Integritet', 'Total (Bearbetas på din enhet)', 'Låg (Kräver uppladdning till server)', 'Total (Installerat på din enhet)'],
        ['Nätverksförbrukning', 'Noll (Inga gigabyte-uppladdningar)', 'Mycket hög (Upp- och nedladdning)', 'Noll'],
        ['Vattenstämpel', 'NEJ (100% ren)', 'Ja (I gratisversioner)', 'NEJ (Om du köper licens)'],
        ['Pris', '100% Gratis', 'Gratis med gränser eller prenumeration', 'Vanligtvis dyrt'],
        ['Inlärningskurva', 'Mycket låg (Dra, ordna och slå ihop)', 'Låg', 'Mycket hög (Kräver utbildning)']
    ] },

    { type: 'proscons', items: [
        {
            pro: 'Garanterad integritet: Maximal säkerhet eftersom ingen fil lämnar din enhet',
            con: 'Hastigheten för att slå ihop stora videor beror på din lokala dators RAM och processor'
        },
        {
            pro: 'Professionella resultat: 100% gratis, ingen registrering och inga vattenstämplar',
            con: 'Vid sammanfogning av videor med olika dimensioner (vertikalt vs horisontellt) kommer svarta marginaler (letterboxing) att tillämpas'
        },
        {
            pro: 'Mångsidighet: Snabb export med effektiv kodning optimerad för webben och sociala medier',
            con: 'Tillåter inte att du lägger till komplexa övergångar (3D-fades) eller filmiska visuella effekter mellan klipp'
        }
    ], title: 'Fördelar och Överväganden' },

    { type: 'title', text: 'Börja Slå Ihop Dina Videor Idag', level: 2 },
    { type: 'paragraph', html: 'Det finns inte längre några ursäkter för att ha hundratals oorganiserade videofragment. Ladda upp dina filer, placera dem i önskad ordning och tryck på knappen. Upptäck det snabbaste, säkraste och mest privata sättet att <strong>slå ihop videor online</strong>.' }
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
