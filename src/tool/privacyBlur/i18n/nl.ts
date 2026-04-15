import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { PrivacyBlurUI, PrivacyBlurLocaleContent } from '../index';

const slug = 'online-privacyeditor-pixelate-blur-faces-fotos';
const title = 'Online Privacy Editor: Gezichten in foto\'s verpixelen en verbergen';
const description = 'Bescherm je identiteit door gevoelige delen van je foto\'s te censureren. Verpixel gezichten, vervaag documenten of dek privé-informatie 100% lokaal af.';

const ui: PrivacyBlurUI = {
    toolPixel: "Verpixelen",
    toolBlur: "Vervagen",
    toolSolid: "Vlak",
    intensityLabel: "Intensiteit",
    undoButton: "Ongedaan maken",
    downloadButton: "Opslaan",
    dropTitle: "Privacy Editor",
    dropSubtitle: "Sleep je afbeelding hierheen of klik om te beginnen",
    privacySecureLabel: "100% Lokaal",
    offlineLabel: "Offline",
    autoDetectFaces: "Auto Detectie",
    loadingModels: "Modellen laden...",
    noFacesDetected: "Geen gezichten automatisch gedetecteerd.",
    faqTitle: "Veelgestelde Vragen",
    bibliographyTitle: "Referenties"
};

const faq: PrivacyBlurLocaleContent['faq'] = [
    {
        question: "Worden mijn foto's naar een server geüpload?",
        answer: "Nee. De privacy editor werkt volledig in je browser. Pixels worden lokaal gewijzigd en er wordt niets buiten je apparaat verzonden.",
    },
    {
        question: "Hoe werkt automatische gezichtsdetectie?",
        answer: "We gebruiken een lichtgewicht neuraal netwerk (TinyFaceDetector) dat in je browser draait om gezichtskenmerken te identificeren zonder een externe verbinding nodig te hebben.",
    },
];

const howTo: PrivacyBlurLocaleContent['howTo'] = [
    {
        name: "Upload je foto",
        text: "Sleep of selecteer de afbeelding die gevoelige informatie bevat die je wilt verbergen.",
    },
    {
        name: "Kies de tool",
        text: "Kies tussen verpixelen, vervagen of een vlakke dekking, afhankelijk van het privacyniveau dat je nodig hebt.",
    },
    {
        name: "Markeer het gebied",
        text: "Klik en sleep over de zone die je wilt beschermen (gezichten, nummerplaten, namen, enz.).",
    },
    {
        name: "Sla het resultaat op",
        text: "Download de bewerkte afbeelding met de zekerheid dat de originele gegevens ontoegankelijk zijn.",
    },
];

const bibliography: PrivacyBlurLocaleContent['bibliography'] = [
    {
        name: "Privacy by Design (PbD) - AGPD",
        url: "https://www.aepd.es/es/guias-y-herramientas/guias/guia-de-privacidad-desde-el-diseno",
    },
];

const seo: PrivacyBlurLocaleContent['seo'] = [
    {
        type: 'summary',
        title: 'Privacy Editor: Verpixelen, Vervagen en Verbergen',
        items: [
            'Drie bewerkingstools: Verpixelen, Vervagen, Vlakke Dekking',
            'Automatische gezichtsdetectie met AI (TinyFaceDetector)',
            '100% lokale verwerking - je foto\'s verlaten de browser nooit',
            'Geen watermerken, geen limieten, volledig gratis'
        ]
    },
    { type: 'title', text: 'Digitale Privacy: Hoe je Visuele Gegevens Kunt Beschermen', level: 2 },
    { type: 'paragraph', html: 'In het tijdperk van sociale media kan het ongecontroleerd delen van foto\'s gevoelige persoonsgegevens blootleggen. Met onze tool kun je kritieke informatie (gezichten, nummerplaten, namen, adressen) verbergen voordat je ze naar internet uploadt, zodat je privacy volledig onder jouw controle blijft.' },

    { type: 'stats', items: [
        { value: '3', label: 'Verbergingsmethoden', icon: 'mdi:tools' },
        { value: '100%', label: 'Lokale Privacy', icon: 'mdi:shield-check' },
        { value: 'AI', label: 'Gezichtsdetectie', icon: 'mdi:brain' }
    ], columns: 3 },

    { type: 'title', text: 'Uitleg van de Drie Verbergingsmethoden', level: 3 },
    { type: 'comparative', items: [
        {
            title: 'Verpixelen',
            description: 'Verdeelt het gebied in vierkantjes, onmogelijk te herkennen',
            icon: 'mdi:blur',
            points: [
                'Maximale onomkeerbare versluiering',
                'Veiliger tegen gezichtsherkenning',
                'Zichtbaar, duidelijk dat er iets verborgen is',
                'Ideaal: gezichten op openbare foto\'s'
            ]
        },
        {
            title: 'Vervagen (Blur)',
            description: 'Gaussiaanse vervaging - natuurlijker uiterlijk',
            icon: 'mdi:blur-off',
            points: [
                'Eleganter visueel uiterlijk',
                'Behoudt enige tonale samenhang',
                'Mathematisch omkeerbaar (theoretisch)',
                'Ideaal: minder gevoelige informatie'
            ],
            highlight: true
        },
        {
            title: 'Vlakke Dekking',
            description: 'Ondoorzichtig kleurblok - maximale privacy',
            icon: 'mdi:rectangle',
            points: [
                'Zichtbare, duidelijke verberging',
                'Maximale juridische veiligheid/privacy',
                'Verandert de visuele compositie',
                'Ideaal: documenten, gevoelige gegevens'
            ]
        }
    ], columns: 3 },

    { type: 'title', text: 'Automatische Gezichtsdetectie met AI', level: 3 },
    { type: 'paragraph', html: 'Onze tool gebruikt TinyFaceDetector, een compact neuraal netwerk dat rechtstreeks in je browser draait om gezichten automatisch te identificeren:' },
    { type: 'list', items: [
        '<strong>100% Lokaal:</strong> Het AI-model draait op jouw GPU/CPU, niet op externe servers.',
        '<strong>Geen Internet:</strong> Na de eerste download werkt het volledig offline.',
        '<strong>Privacy Gegarandeerd:</strong> Niemand ziet de gezichten: Google niet, OpenAI niet, en wij ook niet.',
        '<strong>Automatisch in Eén Klik:</strong> Detecteert gezichten en laat je met één klik kiezen om ze te verbergen.'
    ], icon: 'mdi:check' },

    { type: 'card', title: 'Privacy by Design', html: 'Door afbeeldingen te verwerken met de lokale GPU en CPU van je browser, garanderen we dat originele foto\'s je apparaat nooit verlaten. Zelfs als je je bedenkt, is er niets verzonden. Dit is de maximale standaard voor digitale privacy.' },

    { type: 'title', text: 'Privacy Use Cases', level: 3 },
    { type: 'table', headers: ['Gevoelige Informatie', 'Aanbevolen Methode', 'Urgentie'], rows: [
        ['Gezichten van mensen', 'Verpixelen of Vervagen', 'Kritiek'],
        ['Nummerplaten van voertuigen', 'Verpixelen (onomkeerbaar)', 'Kritiek'],
        ['Identiteitsbewijzen', 'Vlakke Dekking of Verpixelen', 'Kritiek'],
        ['Geschreven namen/adressen', 'Vlakke Dekking of Verpixelen', 'Hoog'],
        ['Telefoonnummers', 'Verpixelen of Vlak', 'Hoog'],
        ['Medische informatie', 'Vlakke Dekking', 'Kritiek'],
        ['Zichtbare WiFi-signalen', 'Verpixelen', 'Gemiddeld']
    ] },

    { type: 'proscons', items: [
        {
            pro: 'Totale privacy: 100% lokale verwerking, geen servers, geen opslag',
            con: 'Vereist een moderne browser met ondersteuning voor Canvas en WebGL'
        },
        {
            pro: 'Automatische gezichtsdetectie bespaart handmatige tijd',
            con: 'AI is niet perfect - gezichten in profiel of gedeeltelijke gezichten worden mogelijk niet herkend'
        },
        {
            pro: 'Drie methoden maken keuze tussen veiligheid vs esthetiek mogelijk',
            con: 'Geen geavanceerde opties (smart warp, context vulling)'
        },
        {
            pro: 'Volledig gratis, geen advertenties, geen limieten',
            con: 'Niet gelijkwaardig aan professionele software zoals Photoshop'
        }
    ], proTitle: 'Voordelen', conTitle: 'Beperkingen' },

    { type: 'diagnostic', variant: 'warning', title: 'Waarschuwing: Vervagen is NIET 100% veilig', icon: 'mdi:alert', badge: 'Beveiliging', html: 'Gaussiaanse vervaging is mathematisch omkeerbaar via geavanceerde inverse algoritmen. Als informatie KRITIEK is (juridische documenten, identiteit), gebruik dan <strong>Verpixelen of Vlakke Dekking</strong>. Vervagen is esthetisch beter maar minder veilig.' },

    { type: 'glossary', items: [
        {
            term: 'Verpixelen',
            definition: 'Resolutie verminderen door het gebied te verdelen in uniforme kleurblokken. Onomkeerbaar. Maximale beveiliging tegen AI-gezichtsherkenning.'
        },
        {
            term: 'Gaussiaanse Vervaging',
            definition: 'Mathematische afvlakking gebaseerd op de normale verdeling. Theoretisch omkeerbaar via deconvolution, maar in de praktijk erg moeilijk.'
        },
        {
            term: 'Vlakke Dekking',
            definition: 'Ondoorzichtig blok van egale kleur. Maximale beveiliging, maximale juridische privacy, visueel minder elegant.'
        },
        {
            term: 'TinyFaceDetector',
            definition: 'Lichtgewicht convolutioneel neuraal netwerk (CNN) voor het detecteren van gezichten. Draait lokaal in de browser zonder een externe server nodig te hebben.'
        },
        {
            term: 'Privacy by Design (PbD)',
            definition: 'Benadering waarbij privacy vanaf het systeemontwerp wordt geïntegreerd, niet later toegevoegd. Onze lokale benadering is Privacy by Design.'
        }
    ] },

    { type: 'message', title: 'Privacy in Jouw Controle', ariaLabel: 'Informatie over privacybescherming', html: 'We bewaren of verwerken je foto\'s niet op externe servers. Er zijn geen trackingcookies. Geen bewerkingsgeschiedenis. We weten niet wat je verbergt omdat we je afbeeldingen nooit zien. Volledige controle, volledige privacy, volledige vrijheid.' },

    { type: 'title', text: 'Veilig Delen op Sociale Netwerken', level: 3 },
    { type: 'paragraph', html: 'Vraag jezelf af voordat je een foto op internet plaatst: is er informatie waarvan ik liever niet wil dat deze openbaar is? Gezichten van kinderen, nummerplaten, adressen, documentnummers. Een privacysessie van 2 minuten nu voorkomt jarenlange problemen.' }
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
    inLanguage: 'nl',
};

export const content: PrivacyBlurLocaleContent = {
    slug,
    title,
    description,
    ui,
    seo,
    faqTitle: "Veelgestelde Vragen",
    faq,
    bibliographyTitle: "Referenties",
    bibliography,
    howTo,
    schemas: [faqSchema as any, howToSchema as any, appSchema],
};
