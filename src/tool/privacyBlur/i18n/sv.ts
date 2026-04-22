import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { PrivacyBlurUI, PrivacyBlurLocaleContent } from '../index';

const slug = 'online-privacy-editor-pixla-sudda-ansikten-foton';
const title = 'Online Privacy Editor: Pixla och dölj ansikten i foton';
const description = 'Skydda din identitet genom att censurera känsliga delar av dina foton. Pixla ansikten, sudda dokument eller täck över privat information 100% lokalt.';

const ui: PrivacyBlurUI = {
    toolPixel: "Pixla",
    toolBlur: "Sudda",
    toolSolid: "Täck",
    intensityLabel: "Intensitet",
    undoButton: "Ångra",
    downloadButton: "Spara",
    dropTitle: "Privacy Editor",
    dropSubtitle: "Dra din bild hit eller klicka för att starta",
    privacySecureLabel: "100% Lokalt",
    offlineLabel: "Offline",
    autoDetectFaces: "Auto-detektering",
    loadingModels: "Laddar modeller...",
    noFacesDetected: "Inga ansikten hittades automatiskt.",
    faqTitle: "Vanliga Frågor": "Referenser"
};

const faq: PrivacyBlurLocaleContent['faq'] = [
    {
        question: "Laddas mina foton upp till någon server?",
        answer: "Nej. Sekretessredigeraren fungerar helt i din webbläsare. Pixlar ändras lokalt och ingenting skickas utanför din enhet.",
    },
    {
        question: "Hur fungerar automatisk ansiktsdetektering?",
        answer: "Vi använder ett lättviktigt neuralt nätverk (TinyFaceDetector) som körs i din webbläsare för att identifiera ansiktsdrag utan behov av extern anslutning.",
    },
];

const howTo: PrivacyBlurLocaleContent['howTo'] = [
    {
        name: "Ladda upp din bild",
        text: "Dra eller välj bilden som innehåller känslig information som du vill dölja.",
    },
    {
        name: "Välj verktyg",
        text: "Välj mellan att pixla, sudda eller täcka helt beroende på vilken sekretessnivå du behöver.",
    },
    {
        name: "Markera området",
        text: "Klicka och dra över den zon du vill skydda (ansikten, registreringsskyltar, namn etc.).",
    },
    {
        name: "Spara resultatet",
        text: "Ladda ner den bearbetade bilden med säkerheten att originaldata är oåtkomlig.",
    },
];

const seo: PrivacyBlurLocaleContent['seo'] = [
    {
        type: 'summary',
        title: 'Privacy Editor: Pixla, Sudda och Dölj',
        items: [
            'Tre redigeringsverktyg: Pixla, Sudda, Täck',
            'Automatisk ansiktsdetektering med AI (TinyFaceDetector)',
            '100% lokal bearbetning - dina foton lämnar aldrig webbläsaren',
            'Inga vattenstämplar, inga gränser, helt gratis'
        ]
    },
    { type: 'title', text: 'Digital Integritet: Hur du Skyddar Dina Visuella Data', level: 2 },
    { type: 'paragraph', html: 'I sociala mediers era kan delning av foton utan kontroll exponera känsliga personuppgifter. Vårt verktyg låter dig dölja kritisk information (ansikten, registreringsskyltar, namn, adresser) innan du laddar upp dem till Internet, vilket säkerställer att din integritet förblir under din fulla kontroll.' },

    { type: 'stats', items: [
        { value: '3', label: 'Döljningsmetoder', icon: 'mdi:tools' },
        { value: '100%', label: 'Lokal Integritet', icon: 'mdi:shield-check' },
        { value: 'AI', label: 'Ansiktsdetektering', icon: 'mdi:brain' }
    ], columns: 3 },

    { type: 'title', text: 'De Tre Döljningsmetoderna Förklarade', level: 3 },
    { type: 'comparative', items: [
        {
            title: 'Pixla',
            description: 'Delar upp området i kvadrater, omöjliga att känna igen',
            icon: 'mdi:blur',
            points: [
                'Maximal irreversibel förvrängning',
                'Säkrare mot ansiktsigenkänning',
                'Synligt, tydligt att något är doldt',
                'Idealiskt: ansikten på offentliga foton'
            ]
        },
        {
            title: 'Sudda (Blur)',
            description: 'Gaussisk suddighet - mer naturligt utseende',
            icon: 'mdi:blur-off',
            points: [
                'Mer elegant visuellt utseende',
                'Behåller viss färgkoherens',
                'Matematiskt omvändbar (teoretiskt)',
                'Idealiskt: mindre känslig information'
            ],
            highlight: true
        },
        {
            title: 'Täck Helt',
            description: 'Opakt färgblock - maximal integritet',
            icon: 'mdi:rectangle',
            points: [
                'Synlig, uppenbar döljning',
                'Maximal juridisk säkerhet/sekretess',
                'Ändrar den visuella kompositionen',
                'Idealiskt: dokument, känsliga data'
            ]
        }
    ], columns: 3 },

    { type: 'title', text: 'Automatisk Ansiktsdetektering med AI', level: 3 },
    { type: 'paragraph', html: 'Vårt verktyg använder TinyFaceDetector, ett kompakt neuralt nätverk som körs direkt i din webbläsare för att identifiera ansikten automatiskt:' },
    { type: 'list', items: [
        '<strong>100% Lokalt:</strong> AI-modellen körs på din GPU/CPU, inte på fjärrservrar.',
        '<strong>Inget Internet:</strong> Efter den första nedladdningen fungerar det helt offline.',
        '<strong>Garanterad Sekretess:</strong> Ingen ser ansiktena: varken Google, OpenAI eller vi.',
        '<strong>Automatisk Ett-klick:</strong> Hittar ansikten och låter dig välja att dölja dem med ett klick.'
    ], icon: 'mdi:check' },

    { type: 'card', title: 'Privacy by Design', html: 'Genom att bearbeta bilder med hjälp av webbläsarens lokala GPU och CPU garanterar vi att originalfoton aldrig lämnar din enhet. Även om du ändrar dig har ingenting överförts. Detta är den maximala standarden för digital integritet.' },

    { type: 'title', text: 'Användningsfall för Sekretess', level: 3 },
    { type: 'table', headers: ['Känslig Information', 'Rekommenderad Metod', 'Brådskande'], rows: [
        ['Personers ansikten', 'Pixla eller Sudda', 'Kritiskt'],
        ['Registreringsskyltar', 'Pixla (irreversibelt)', 'Kritiskt'],
        ['Identitetshandlingar', 'Täck Helt eller Pixla', 'Kritiskt'],
        ['Skrivna namn/adresser', 'Täck Helt eller Pixla', 'Hög'],
        ['Telefonnummer', 'Pixla eller Täck', 'Hög'],
        ['Medicinsk information', 'Täck Helt', 'Kritiskt'],
        ['Synliga WiFi-lösenord', 'Pixla', 'Mellan']
    ] },

    { type: 'proscons', items: [
        {
            pro: 'Total integritet: 100% lokal bearbetning, inga servrar, ingen lagring',
            con: 'Kräver en modern webbläsare med stöd för Canvas och WebGL'
        },
        {
            pro: 'Automatisk ansiktsdetektering sparar manuell tid',
            con: 'AI är inte perfekt - profilfoton eller delvis dolda ansikten kanske inte hittas'
        },
        {
            pro: 'Tre metoder tillåter val mellan säkerhet och estetik',
            con: 'Inga avancerade alternativ (smart warp, innehållsbaserad fyllning)'
        },
        {
            pro: 'Helt gratis, ingen reklam, inga gränser',
            con: 'Inte likvärdigt med professionell programvara som Photoshop'
        }
    ], proTitle: 'Fördelar', conTitle: 'Begränsningar' },

    { type: 'diagnostic', variant: 'warning', title: 'Varning: Suddighet är INTE 100% säkert', icon: 'mdi:alert', badge: 'Säkerhet', html: 'Gaussisk suddighet är matematiskt omvändbar genom sofistikerade inversa algoritmer. Om informationen är KRITISK (juridiska dokument, identitet), använd <strong>Pixla eller Täck Helt</strong>. Suddighet är estetiskt bättre men mindre säkert.' },

    { type: 'glossary', items: [
        {
            term: 'Pixling',
            definition: 'Att minska upplösningen genom att dela upp området i enhetliga färgblock. Irreversibelt. Maximal säkerhet mot AI-ansiktsigenkänning.'
        },
        {
            term: 'Gaussisk Suddighet',
            definition: 'Matematisk utjämning baserad på normalfördelning. Teoretiskt omvändbar genom deconvolution, men praktiskt taget mycket svårt.'
        },
        {
            term: 'Fast Täckning',
            definition: 'Opakt block av enhetlig färg. Maximal säkerhet, maximal juridisk sekretess, mindre estetiskt elegant.'
        },
        {
            term: 'TinyFaceDetector',
            definition: 'Lättviktigt faltningsbaserat neuralt nätverk (CNN) för att detektera ansikten. Körs lokalt i webbläsaren utan behov av extern server.'
        },
        {
            term: 'Privacy by Design (PbD)',
            definition: 'Strategi där sekretess integreras från början i systemdesignen, inte läggs till senare. Vårt lokala tillvägagångssätt är Privacy by Design.'
        }
    ] },

    { type: 'message', title: 'Sekretess i Din Kontroll', ariaLabel: 'Information om integritetsskydd', html: 'Vi lagrar eller bearbetar inte dina foton på fjärrservrar. Det finns inga spårningskakor. Ingen redigeringshistorik. Vi vet inte vad du döljer eftersom vi aldrig ser dina bilder. Full kontroll, full integritet, full frihet.' },

    { type: 'title', text: 'Dela Säkert på Sociala Nätverk', level: 3 },
    { type: 'paragraph', html: 'Innan du lägger upp ett foto på Internet, fråga dig själv: finns det information jag skulle föredra att inte vara offentlig? Barns ansikten, registreringsskyltar, adresser, dokumentnummer. En 2-minuters session i sekretessredigeraren nu undviker år av problem.' }
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

export const content: PrivacyBlurLocaleContent = {
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
