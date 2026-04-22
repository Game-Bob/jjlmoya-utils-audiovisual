import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ImageCompressorUI, ImageCompressorLocaleContent } from '../index';

const slug = 'online-image-compressor-minska-filstorlek-utan-kvalitetsforlust';
const title = 'Online Bildkompressor: Minska vikten utan att förlora kvalitet';
const description = 'Optimera och komprimera dina JPG-, PNG- och WebP-foton gratis. Minska filstorleken för att förbättra din webbladdningshastighet lokalt.';

const ui: ImageCompressorUI = {
    dropTitle: "Optimera Bilder",
    dropSubtitle: "Dra dina foton hit för att minska deras vikt omedelbart.",
    settingsTitle: "Komprimeringsinställningar",
    qualityLabel: "Visuell Kvalitet",
    widthLabel: "Maximal Bredd (Pixlar)",
    convertToWebpLabel: "Konvertera till WebP",
    compressionLabel: "Komprimering",
    compressBtn: "Komprimera Bild",
    processingLabel: "Bearbetar...",
    resultsTitle: "Optimerade Bilder",
    originalSizeLabel: "Ursprunglig Storlek",
    newSizeLabel: "Ny Storlek",
    reductionLabel: "Besparing",
    downloadBtn: "Ladda ner",
    addMoreBtn: "Lägg till fler",
    browseFilesBtn: "Bläddra bland filer",
    processedFilesTitle: "Bearbetade Filer",
    downloadAllBtn: "Ladda ner alla",
    adjustThisImage: "Justera denna bild",
    downloadTitle: "Ladda ner",
    maxWidthLabel: "Max bredd (px)",
    closeBtn: "Stäng",
    totalSavingsLabel: "Total besparing",
    noSavings: "Ingen nettobesparing",
    faqTitle: "Vanliga Frågor": "Referenser"
};

const faq: ImageCompressorLocaleContent['faq'] = [
    {
        question: "Hur fungerar förlustfri komprimering?",
        answer: "Vi använder algoritmer som tar bort onödiga metadata och optimerar pixelkodning. När du väljer WebP används en mer avancerad komprimeringsteknik än i traditionella format.",
    },
    {
        question: "Laddas mina bilder upp till någon server?",
        answer: "Nej. All bearbetning sker 100% i din webbläsare (Client-Side). Dina foton lämnar aldrig din enhet, vilket garanterar absolut integritet.",
    },
    {
        question: "Varför ska jag konvertera till WebP?",
        answer: "WebP är det moderna standardformatet för webben. Det erbjuder överlägsen kvalitet jämfört med JPG och PNG med en vikt som är upp till 30% mindre, vilket snabbar upp sidladdningstiden.",
    },
];

const howTo: ImageCompressorLocaleContent['howTo'] = [
    {
        name: "Ladda upp bilden",
        text: "Ladda upp filen du vill komprimera (JPG, PNG eller WebP).",
    },
    {
        name: "Justera kvaliteten",
        text: "Använd skjutreglaget för att hitta den perfekta balansen mellan filstorlek och visuell kvalitet (rekommenderas: 75 85%).",
    },
    {
        name: "Ändra storlek (valfritt)",
        text: "Om bilden är mycket stor kan du ange en maximal bredd för att minska dess upplösning.",
    },
    {
        name: "Ladda ner resultatet",
        text: "Tryck på nedladdningsknappen för att få din optimerade bild redo att användas.",
    },
];

const seo: ImageCompressorLocaleContent['seo'] = [
    {
        type: 'summary',
        title: 'Professionell Webbaldbildoptimering',
        items: [
            'Intelligent JPG-, PNG- och WebP-komprimering',
            'Minska vikten med 50-80% med bibehållen visuell kvalitet',
            '100% lokal bearbetning - integritet garanterad',
            'Förbättra Core Web Vitals och SEO-positionering'
        ]
    },
    { type: 'title', text: 'Bildoptimering: Webbhastighet och Core Web Vitals', level: 2 },
    { type: 'paragraph', html: 'I den digitala omedelbarhetens era förlorar en långsam webbplats användare. Ooptimerade bilder representerar 60-70% av den totala vikten på en webbsida. Att optimera dem är det första steget för att förbättra dina Google-mått (LCP, CLS) och din positionering i sökresultaten.' },

    { type: 'stats', items: [
        { value: '50-80%', label: 'Typisk Viktminskning', icon: 'mdi:trending-down' },
        { value: '100%', label: 'Lokal Integritet', icon: 'mdi:lock' },
        { value: '+30%', label: 'Snabbare än JPG', icon: 'mdi:speedometer' }
    ], columns: 3 },

    { type: 'title', text: 'Komprimeringsformat Förklaras', level: 3 },
    { type: 'table', headers: ['Format', 'Komprimering', 'Användningsfall', 'Kompatibilitet'], rows: [
        ['JPEG', 'Lossy 50-90%', 'Kamerafoton, redaktionellt innehåll', 'Universell (100%)'],
        ['PNG', 'Lossless 30-50%', 'Grafik, logotyper, transparens', 'Universell (100%)'],
        ['WebP', 'Lossy/Lossless 25-35% mer', 'Modern webb, sociala nätverk', '95% moderna webbläsare'],
        ['AVIF', 'Lossy/Lossless 20% förbättring', 'Nästa generations webb', 'Endast nya webbläsare']
    ] },

    { type: 'card', title: 'Varför WebP är Framtiden', html: 'Google utvecklade WebP specifikt för webben. Det erbjuder överlägsen komprimering jämfört med JPEG och PNG, med bibehållen eller förbättrad visuell kvalitet. Det är 25-35% mindre än motsvarande JPEG-bilder. Moderna webbläsare stöder det till 95%.' },

    { type: 'title', text: 'Lossy vs Lossless Komprimering', level: 3 },
    { type: 'comparative', items: [
        {
            title: 'Lossy Komprimering',
            description: 'JPG, WebP - Tar bort omärklig visuell information',
            icon: 'mdi:compress',
            points: [
                'Minskar 70-90% av ursprunglig vikt',
                'Omärkligt för det mänskliga ögat om kvaliteten behålls >75%',
                'Idealisk för realistisk fotografering',
                'Rekommenderas inte för logotyper eller skarp text'
            ],
            highlight: true
        },
        {
            title: 'Lossless Komprimering',
            description: 'PNG, WebP lossless - Behåller 100% visuell data',
            icon: 'mdi:shield',
            points: [
                'Minskar 20-50% av vikten',
                'Perfekt kvalitet, ingen försämring',
                'Idealisk för grafik, logotyper, transparens',
                'Tyngre filer än med Lossy'
            ]
        }
    ], columns: 2 },

    { type: 'title', text: 'Inverkan på SEO och Konvertering', level: 3 },
    { type: 'list', items: [
        '<strong>Core Web Vitals:</strong> Google straffar långsamma webbplatser. Optimerade bilder förbättrar LCP (Largest Contentful Paint) direkt.',
        '<strong>Avvisningsfrekvens:</strong> Varje sekund av fördröjning = 7% högre avvisning. Snabbare bilder = färre användare som lämnar.',
        '<strong>Sökranking:</strong> Hastighet är en rankingfaktor. Optimering av bilder boostar positioneringen.',
        '<strong>Konvertering:</strong> Snabbare laddningstider = fler konverteringar. Studier visar +10% konvertering med optimering.'
    ], icon: 'mdi:check' },

    { type: 'proscons', items: [
        {
            pro: 'Total integritet: 100% lokal bearbetning, inga molnservrar',
            con: 'Kräver webbläsare med stöd för Canvas API (det är universellt)'
        },
        {
            pro: 'WebP är 25-35% mindre än JPEG med samma kvalitet',
            con: 'Gamla Safari och IE stöder inte WebP (fallback finns tillgänglig)'
        },
        {
            pro: 'Omedelbar bearbetning av flera bilder',
            con: 'Mycket stora bilder (>50MB) kan kräva väntetid'
        },
        {
            pro: 'Valfri ändring av storlek: minskar upplösning såväl som komprimering',
            con: 'Ändring av storlek förlorar information - bättre att optimera upplösningen vid källan'
        }
    ], proTitle: 'Fördelar', conTitle: 'Begränsningar' },

    { type: 'diagnostic', variant: 'warning', title: 'Varning: Överdriven komprimering försämrar kvaliteten', icon: 'mdi:alert', badge: 'Kvalitet', html: 'Behåll kvaliteten >75% för fotografering och >85% för redaktionellt innehåll. Därunder blir komprimeringsartefakter (fläckar, bandning) synliga. En bild som ser bra ut i miniatyr kan se dålig ut i stort format.' },

    { type: 'glossary', items: [
        {
            term: 'Lossy Komprimering',
            definition: 'Tar bort visuella data som det mänskliga ögat uppfattar som \"brus\". Idealisk för fotografering. JPEG, lossy WebP, HEIC är lossy.'
        },
        {
            term: 'Lossless Komprimering',
            definition: 'Minskar storleken utan att förlora visuell information. PNG och lossless WebP. Idealisk för grafik, logotyper, transparens.'
        },
        {
            term: 'Core Web Vitals (Google)',
            definition: 'Mätvärden för användarupplevelse: LCP (laddningshastighet), FID (interaktionslatens), CLS (visuell stabilitet). Påverkar SEO-ranking.'
        },
        {
            term: 'WebP',
            definition: 'Format utvecklat av Google. 25-35% mindre än JPEG. Stöds av 95% av moderna webbläsare (alla utom IE).'
        },
        {
            term: 'Komprimeringsartefakter',
            definition: 'Visuella defekter orsakade av överdriven komprimering: fläckar, färgbandning, suddiga kanter. Omärkligt vid >75% kvalitet.'
        }
    ] },

    { type: 'message', title: 'Professionell Webboptimering', ariaLabel: 'Information om bildoptimering för SEO', html: 'Det är inte teknisk fåfänga: att komprimera bilder är en direkt investering i användarupplevelse och ranking i Google. Varje kilobyte räknas på mobilen. Vårt verktyg förvandlar det som tidigare krävde professionell programvara ($$$) till en gratis process på 3 klick.' },

    { type: 'title', text: 'Förberedd för den Moderna Webben', level: 3 },
    { type: 'paragraph', html: 'Använd intelligent komprimering och WebP-format så att din online-närvaro är snabb, responsiv och konkurrenskraftig i sökningar. Professionell kvalitet, minimal vikt, omedelbar laddning.' }
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

export const content: ImageCompressorLocaleContent = {
    slug,
    title,
    description,
    ui,
    seo,
    faqTitle: "Vanliga Frågor",
    faq: "Referenser",
    bibliography,
    howTo,
    schemas: [faqSchema as any, howToSchema as any, appSchema],
};
