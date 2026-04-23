import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { TvDistanceUI, TvDistanceLocaleContent } from '../index';

const slug = 'tv-avstands-kalkylator-thx-4k-optimal-skarm';
const title = 'TV avståndskalkylator: THX  och 4K optimal skärm';
const description = 'Beräkna det idealiska avståndet för att titta på din TV baserat på storlek och upplösning. Optimera din hembio med THX- och SMPTE-standarder.';

const ui: TvDistanceUI = {
    specTitle: "Specifikationer",
    diagonalLabel: "Diagonal storlek",
    resolutionLabel: "Upplösning",
    thxRecommendation: "THX-rekommendation",
    thxDescription: "THX rekommenderar ett avstånd som täcker en 40-graders betraktningsvinkel för en uppslukande filmupplevelse.",
    simulationBadge: "Realtidssimulering",
    tvWidthLabel: "cm bred",
    userLocationLabel: "Din plats",
    minLimitLabel: "Minimigräns",
    optimalLimitLabel: "Optimalt avstånd",
    maxLimitLabel: "Maximigräns",
    unitMeters: "m",
    unitCm: "cm"
};

const faq: TvDistanceLocaleContent['faq'] = [
    {
        question: "Varför spelar upplösningen roll när man beräknar avstånd?",
        answer: "Vid högre upplösningar (som 4K eller 8K) är pixlarna mindre. Detta gör att du kan sitta närmare utan att uppfatta pixelrutnätet, vilket ökar inlevelsen.",
    },
    {
        question: "Vad är en 40-graders betraktningsvinkel?",
        answer: "Det är den standard som rekommenderas av THX så att skärmen upptar en stor del av ditt perifera seende, likt upplevelsen i en professionell biosalong.",
    },
    {
        question: "Kan jag sitta längre bort än rekommenderat?",
        answer: "Ja, men du förlorar fördelen med höga upplösningar. Om du sitter för långt från en 4K-TV kommer ditt öga inte att kunna skilja på de extra detaljerna och du ser den som om den vore 1080p.",
    },
];

const howTo: TvDistanceLocaleContent['howTo'] = [
    {
        name: "Ange tum",
        text: "Flytta reglaget för att välja storleken på din nuvarande TV eller den du planerar att köpa.",
    },
    {
        name: "Välj upplösning",
        text: "Välj mellan 1080p, 4K eller 8K för att justera gränserna för synskärpa.",
    },
    {
        name: "Visualisera simulering",
        text: "Observera i diagrammet hur storleksförhållandet mellan dig och skärmen förändras.",
    },
    {
        name: "Justera din soffa",
        text: "Placera din sittplats inom intervallet för 'Optimalt avstånd' för att maximera filmupplevelsen.",
    },
];

const seo: TvDistanceLocaleContent['seo'] = [
    {
        type: 'summary',
        title: 'Optimalt TV avstånd efter upplösning och storlek',
        items: [
            'THX-standarder (40°) för en uppslukande filmupplevelse',
            'Beräkningar för 1080p, 4K och 8K med högsta precision',
            'Visualisering av din setup i realtid',
            'Undvik ögontrötthet och maximera inlevelsen'
        ]
    },
    { type: 'title', text: 'Vetenskapen bakom inlevelse: Optimalt TV avstånd', level: 2 },
    { type: 'paragraph', html: 'Det handlar inte bara om komfort, utan om människans visuella fysiologi. Ögat har en gräns för synskärpa; om du sitter för långt från en 4K-skärm slösar du pengar på pixlar som din syn inte kan utnyttja. Och om du sitter för nära orsakar det ögontrötthet.' },

    { type: 'stats', items: [
        { value: '40°', label: 'Idealisk THX-vinkel', icon: 'mdi:eye' },
        { value: '100%', label: 'Utnyttjade pixlar', icon: 'mdi:video-high-definition' },
        { value: 'Noll', label: 'Visuell trötthet', icon: 'mdi:heart-pulse' }
    ], columns: 3 },

    { type: 'title', text: 'Två professionella standarder: THX mot SMPTE', level: 3 },
    { type: 'paragraph', html: 'Det finns två huvudauktoriteter inom den audiovisuella industrin som definierar hur du optimerar din tittarupplevelse:' },
    { type: 'comparative', items: [
        {
            title: 'THX standard',
            description: '40° betraktningsvinkel - Mer uppslukande',
            icon: 'mdi:filmstrip',
            points: [
                'Skärmen upptar mer av ditt perifera seende',
                'Uppslukande filmupplevelse',
                'Idealisk för actionfilmer och livesport',
                'Kräver mer utrymme i rummet'
            ],
            highlight: true
        },
        {
            title: 'SMPTE standard',
            description: '30° betraktningsvinkel - Mer avslappnad',
            icon: 'mdi:television',
            points: [
                'Mer bekvämt sittavstånd',
                'Konservativ professionell rekommendation',
                'Idealisk för varierat innehåll (nyheter, serier)',
                'Bättre för mindre rum'
            ]
        }
    ], columns: 2 },

    { type: 'title', text: 'Hur upplösning förändrar ekvationen', level: 3 },
    { type: 'table', headers: ['Upplösning', '55" TV-storlek', 'Minsta avstånd (inga synliga pixlar)', 'Optimalt THX-avstånd'], rows: [
        ['1080p (Full HD)', '55 tum', '2.0 m', '2.3 m'],
        ['4K (Ultra HD)', '55 tum', '1.2 m', '1.5 m'],
        ['8K', '55 tum', '0.8 m', '1.0 m']
    ] },

    { type: 'paragraph', html: 'Som du ser tillåter högre upplösning att du sitter närmare utan att uppfatta pixelstrukturen. En 4K-TV kan uppskattas från 1.2 meters håll; en 1080p behöver minst 2 meter.' },

    { type: 'card', title: 'Människans gräns för synskärpa', html: 'Det mänskliga ögat har en begränsad upplösningskapacitet. Bortom ett visst avstånd kan du inte skilja på fler detaljer även om skärmen har 8K. Våra beräkningar placerar dig exakt i den "optimala zonen".' },

    { type: 'diagnostic', variant: 'info', title: 'Ögontrötthet och avstånd', icon: 'mdi:information', badge: 'Visuell hälsa', html: 'Att sitta för nära orsakar trötthet eftersom dina ögon ständigt måste anpassa sig till extrema vinklar. Att sitta för långt bort orsakar ansträngning för att urskilja detaljer. Vår kalkylator hittar din "sweet spot" (40° för THX).' },

    { type: 'proscons', items: [
        {
            pro: 'THX 40° skapar sann filmupplevelse - som en professionell biosalong',
            con: 'Kräver mer tillgängligt utrymme i rummet'
        },
        {
            pro: '4K tillåter att sitta närmare än 1080p - användbart i små utrymmen',
            con: 'Du måste vara på minsta avstånd för att utnyttja extra pixlar'
        },
        {
            pro: 'Undvik ögontrötthet genom att placera dig rätt från början',
            con: 'De flesta vardagsrum följer INTE dessa standarder'
        },
        {
            pro: 'Verifiera om din nuvarande TV är väl placerad',
            con: 'Om det är fel krävs det att möbler flyttas'
        }
    ], proTitle: 'Fördelar', conTitle: 'Begränsningar' },

    { type: 'glossary', items: [
        {
            term: 'Betraktningsvinkel (i grader)',
            definition: 'Den visuella vinkeln skärmen täcker från din position. 40° = mycket uppslukande; 20° = bakgrundsinnehåll (inte uppslukande).'
        },
        {
            term: 'THX (Tomlinson Holman Experiment)',
            definition: 'Kvalitetscertifiering för ljud och bild skapad av Lucasfilm. Definierar standarder för biografer och hembio. 40° är deras primära rekommendation.'
        },
        {
            term: 'SMPTE (Society of Motion Picture Technical Engineers)',
            definition: 'Teknisk standardorganisation för film och video. Rekommenderar 30° som ett konservativt professionellt avstånd.'
        },
        {
            term: 'Människans synskärpa',
            definition: 'Ögats förmåga att skilja på fina detaljer. En enskild pixel är osynlig bortom ett visst avstånd.'
        },
        {
            term: '4K (Ultra HD)',
            definition: 'Upplösning på ca 3840x2160 pixlar. 4 gånger fler pixlar än 1080p.'
        }
    ] },

    { type: 'message', title: 'Professionell optimering av ditt medierum', ariaLabel: 'Information om TV-inställningsstandarder', html: 'Professionella biografer satsar miljoner på att se till att avstånd, vinklar och belysning är perfekta. Vår kalkylator ger dig samma principer hemma.' },

    { type: 'title', text: 'Ställ in din hembio professionellt', level: 3 },
    { type: 'paragraph', html: 'Avståndet är PRECIS LIKA viktigt som skärmstorlek och upplösning. Följ dessa standarder för att förvandla ditt vardagsrum till en autentisk biosalong.' }
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

export const content: TvDistanceLocaleContent = {
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
