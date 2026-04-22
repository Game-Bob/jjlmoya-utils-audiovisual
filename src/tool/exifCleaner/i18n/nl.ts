import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ExifCleanerUI, ExifCleanerLocaleContent } from '../index';

const slug = 'exif-metadata-cleaner-verwijder-gps-foto-privacy';
const title = 'EXIF Metadata Cleaner: Verwijder GPS en Verborgen Gegevens uit Foto\'s';
const description = 'Gratis online tool om EXIF-metadata, GPS-coördinaten en cameraspecificaties uit je afbeeldingen te wissen voordat je ze deelt. 100% privé: werkt zonder foto\'s naar internet te uploaden.';

const ui: ExifCleanerUI = {
    dropTitle: "Sleep je afbeelding hierheen",
    dropSubtitle: "Verwijder GPS metadata, cameramodel en verborgen instellingen.",
    dropLocalInfo: "100% lokale verwerking. Er wordt niets naar de cloud geüpload.",
    selectButton: "Selecteer Afbeelding",
    processingText: "Metadata aan het wissen...",
    analysisCompleted: "Analyse voltooid",
    downloadButton: "Gereinigde afbeelding downloaden",
    resetButton: "Reinig nog een afbeelding",
    privacyRiskTitle: "PRIVACYRISICO\'S GEDETECTEERD:",
    gpsLabel: "GPS:",
    gpsDetected: "GEDETECTEERD",
    gpsNotFound: "NIET GEVONDEN",
    cameraLabel: "CAMERA:",
    softwareLabel: "SOFTWARE:",
    dateLabel: "DATUM:",
    otherTechnicalDetails: "ANDERE TECHNISCHE DETAILS",
    noMetadataFound: "Geen leesbare EXIF-metadata gevonden.",
    alreadyCleanInfo: "De afbeelding is mogelijk al schoon.",
    previewLabel: "Voorvertoning",
    faqTitle: "Veelgestelde vragen over fotoprivacy": "Ressources en technische EXIF documentatie",
};

const faq: ExifCleanerLocaleContent['faq'] = [
    {
        question: "Wat zijn EXIF-metadata?",
        answer: "EXIF (Exchangeable Image File Format) is verborgen informatie die je camera of telefoon in elke foto opslaat. Het bevat de exacte datum, het model van het apparaat, opname-instellingen (ISO, diafragma) en, cruciaal, de GPS-coördinaten van de plaats waar de foto is gemaakt.",
    },
    {
        question: "Is het veilig om deze online tool te gebruiken?",
        answer: "Ja, omdat de verwerking 100% lokaal in je browser plaatsvindt. Je foto's worden nooit naar een server geüpload; de reiniging gebeurt rechtstreeks in het geheugen van je apparaat, wat absolute privacy garandeert.",
    },
    {
        question: "Welke specifieke gegevens verwijdert de cleaner?",
        answer: "Het wist alle EXIF-tags (GPS, cameramerk, serienummer), IPTC (auteursrecht, auteur) en XMP (bewerkingsgeschiedenis). Je afbeelding wordt 'schoon', waarbij alleen de visuele pixels behouden blijven.",
    },
    {
        question: "Verliest de afbeelding kwaliteit bij het wissen van metadata?",
        answer: "Nee. We verwijderen alleen de technische 'header' van het bestand. De afbeeldingsgegevens (pixels) blijven identiek, dus de visuele kwaliteit wordt op geen enkele manier beïnvloed.",
    },
];

const howTo: ExifCleanerLocaleContent['howTo'] = [
    {
        name: "Selecteer de afbeeldingen",
        text: "Sleep je foto's hierheen of selecteer ze via je bestandsverkenner. Je kunt er meerdere tegelijk verwerken.",
    },
    {
        name: "Analyseer de huidige gegevens",
        text: "De tool laat je zien welke gevoelige informatie is gedetecteerd (bijv. 'GPS-coördinaten gedetecteerd').",
    },
    {
        name: "Verwerken en reinigen",
        text: "Klik op de knop 'reinigen' om direct alle metadata-tags te verwijderen.",
    },
    {
        name: "Veilige foto's downloaden",
        text: "Sla de nieuwe versies van je afbeeldingen op, nu geanonimiseerd en klaar om veilig te worden gedeeld op sociale media.",
    },
];

const seo: ExifCleanerLocaleContent['seo'] = [
    {
        type: 'summary',
        title: 'EXIF Metadata Cleaner: Bescherm je Privacy',
        items: [
            'Verwijder direct GPS-coördinaten en locatie uit je foto\'s',
            'Wis cameramodel, serienummer en technische informatie',
            '100% browser-gebaseerde verwerking - je afbeeldingen verlaten nooit je apparaat',
            'Behoudt visuele kwaliteit - alleen verborgen gegevens worden verwijderd'
        ]
    },
    { type: 'title', text: 'Volledige gids over privacy en EXIF metadata in digitale fotografie', level: 2 },
    { type: 'paragraph', html: 'Heb je je ooit afgevraagd hoeveel persoonlijke informatie je deelt als je een foto uploadt naar sociale media? EXIF-metadata zijn als een <strong>onzichtbare vingerafdruk</strong> die alles kan onthullen, van je exacte thuislocatie tot de prijs van je fotoapparatuur. Deze gids legt uit hoe je je privacy effectief kunt beschermen.' },

    { type: 'stats', items: [
        { value: '100%', label: 'Privacy - Lokale verwerking', icon: 'mdi:shield-check' },
        { value: '0%', label: 'Gegevens opgeslagen op servers', icon: 'mdi:database' },
        { value: 'Direct', label: 'Verwijdering van Metadata', icon: 'mdi:lightning-bolt' }
    ], columns: 3 },

    { type: 'title', text: 'Welke informatie is verborgen in je foto\'s?', level: 3 },
    { type: 'paragraph', html: 'Meer dan 90% van de digitale foto\'s bevat gevoelige informatie die je beveiliging in gevaar kan brengen. Hier zijn alle gegevens die onthuld kunnen worden:' },
    { type: 'list', items: [
        '<strong>GPS-coördinaten:</strong> De exacte breedte- en lengtegraad waar de opname is gemaakt (thuisadres, werk, veelbezochte plaatsen).',
        '<strong>Apparaatidentificatie:</strong> Merk, model en serienummer van de camera of smartphone (waardevolle informatie).',
        '<strong>Technische instellingen:</strong> ISO, diafragma (f/), belichtingstijd en brandpuntsafstand (maakt identificatie van je specifieke apparatuur mogelijk).',
        '<strong>Exacte datum en tijd:</strong> Een volledige tijdlijn van je dagelijkse activiteiten.',
        '<strong>Bewerkingsgeschiedenis:</strong> Gebruikte software, bewerkingssoftware en datum van laatste wijziging.',
        '<strong>Auteursrechtgegevens:</strong> Fotograaf, auteursrecht en persoonlijke opmerkingen.'
    ] },

    { type: 'title', text: 'Echte beveiligingsrisico\'s: Use cases', level: 3 },
    { type: 'comparative', items: [
        {
            title: 'Professionele fotografen',
            description: 'Risico op diefstal van dure apparatuur die via het serienummer is geïdentificeerd',
            icon: 'mdi:camera',
            points: [
                'Dieven zoeken naar fotografen met waardevolle spullen',
                'GPS identificeert het thuisadres van de eigenaar',
                'Het serienummer vergemakkelijkt doorverkoop op het dark web'
            ]
        },
        {
            title: 'Ouders en Influencers',
            description: 'Extreem gevaar: real-time locatie van kinderen',
            icon: 'mdi:alert',
            points: [
                'Predatoren volgen locaties via OSINT',
                'Predatoren kunnen dagelijkse routines identificeren',
                'Risico op stalking en fysieke tracking'
            ],
            highlight: true
        },
        {
            title: 'Sociale media gebruikers',
            description: 'Blootstelling van persoonlijke en professionele privacy',
            icon: 'mdi:share-variant',
            points: [
                'Posten vanaf kantoor onthult de werklocatie',
                'Geolocatie maakt het mogelijk om een schatting van het salaris te maken',
                'Publieke gegevens maken gerichte profilering mogelijk'
            ]
        },
        {
            title: 'Reizigers en Nomaden',
            description: 'Gevaar voor inbraak in onbewoonde woningen',
            icon: 'mdi:map',
            points: [
                'Gepubliceerde GPS duidt op een leeg huis tijdens reizen',
                'Apparatuurgegevens trekken criminelen aan',
                'Reishistorie onthult schema\'s en patronen'
            ]
        }
    ], columns: 2 },

    { type: 'title', text: 'Hoe deze tool werkt', level: 3 },
    { type: 'list', items: [
        '<strong>1. Selecteer je afbeeldingen:</strong> Sleep foto\'s of gebruik de kiezer. Je kunt er meerdere tegelijk verwerken.',
        '<strong>2. Automatische analyse:</strong> De tool detecteert en toont alle aanwezige metadata (GPS, cameramodel, datum, etc.).',
        '<strong>3. Direct wissen:</strong> Met één klik wordt 100% van de schadelijke metadata verwijderd.',
        '<strong>4. Veilige download:</strong> Ontvang geanonimiseerde afbeeldingen die klaar zijn om zonder risico op netwerken te worden gedeeld.',
        '<strong>5. Geen residu:</strong> De schone afbeelding behoudt al zijn originele visuele kwaliteit.'
    ], icon: 'mdi:check' },

    { type: 'card', title: 'Privacy Technologie', icon: 'mdi:shield-check', html: 'Deze tool gebruikt de <strong>Canvas API van de browser</strong> om pixel voor pixel een schone kopie van de afbeelding te maken, wat garandeert dat:<br><br>- Er geen gegevens naar servers worden verzonden<br>- Je afbeelding nooit je apparaat verlaat<br>- 100% anonieme en veilige verwerking plaatsvindt<br>- Je de tool zelfs zonder internetverbinding kunt gebruiken (na de eerste keer laden)' },

    { type: 'title', text: 'Welke specifieke gegevens worden verwijderd?', level: 3 },
    { type: 'table', headers: ['Type Metadata', 'Voorbeelden', 'Risico'], rows: [
        ['EXIF (Exchangeable)', 'GPS, ISO, Diafragma, Sluitertijd, Cameramodel', 'KRITIEK'],
        ['IPTC (Publicatie)', 'Auteursrecht, Auteur, Trefwoorden, Scènelocatie', 'HOOG'],
        ['XMP (XML)', 'Bewerkingsgeschiedenis, Gebruikte software, Toegepaste bewerkingen', 'GEMIDDELD'],
        ['Basis bestandsgegevens', 'Aanmaakdatum, Exacte tijd, Apparaat', 'HOOG']
    ] },

    { type: 'proscons', items: [
        {
            pro: 'Totale privacy - 100% browser-gebaseerde verwerking',
            con: 'Vereist een moderne browser met JavaScript-ondersteuning'
        },
        {
            pro: 'Direct - het schoonmaken van een foto duurt minder dan 1 seconde',
            con: 'Het verwerken van grote foto\'s kan traag zijn op oudere apparaten'
        },
        {
            pro: 'Geen kwaliteitsverlies - verwijdert alleen technische gegevens, geen pixels',
            con: 'Bewerkt de afbeelding niet (bijsnijden, draaien, etc.)'
        },
        {
            pro: 'Volledig gratis zonder limieten - verwerk onbeperkt foto\'s',
            con: 'Geen premium ondersteuning of cloudopslag'
        }
    ], proTitle: 'Belangrijkste voordelen', conTitle: 'Beperkingen' },

    { type: 'tip', title: 'Digitale Veiligheidstip', html: '<strong>Maak je foto\'s schoon VOORDAT je ze plaatst</strong> op een sociaal netwerk. Zelfs als je een bericht verwijdert, kunnen metadata zijn geïndexeerd door zoekmachines of archieven. Voorkomen is beter dan genezen. Maak er een gewoonte van: <br><br><em>Foto → EXIF reinigen → Plaatsen</em>' },

    { type: 'diagnostic', variant: 'warning', title: 'Echte risico\'s van het niet schoonmaken', icon: 'mdi:alert-circle', badge: 'Kritieke Beveiliging', html: '<strong>Gedocumenteerde gevallen:</strong><br>- Ouders die foto\'s van kinderen plaatsen - predatoren volgden GPS<br>- Reizende fotografen - huizen beroofd terwijl ze weg waren<br>- Influencers - woonlocaties geïdentificeerd door obsessieve fans<br><br>Het is geen paranoia: het is digitale basishygiëne in 2026.' },

    { type: 'glossary', items: [
        {
            term: 'EXIF',
            definition: 'Exchangeable Image File Format. Een standaard die technische metadata opslaat in afbeeldingsbestanden: GPS, cameragegevens, belichtingsinstellingen. Aanwezig in ~90% van de digitale foto\'s zonder medeweten van de gebruiker.'
        },
        {
            term: 'GPS-coördinaten',
            definition: 'Precieze breedte- en lengtegraad van de exacte locatie waar de foto is gemaakt. In combinatie met sociale media maakt dit fysieke tracking van personen mogelijk.'
        },
        {
            term: 'IPTC',
            definition: 'International Press Telecommunications Council. Leesbare publicatie-metadata: auteursrecht, auteur, trefwoorden, beschrijving. Standaard in professionele fotografie.'
        },
        {
            term: 'XMP',
            definition: 'Extensible Metadata Platform. Een XML-formaat dat de bewerkingsgeschiedenis vastlegt in software zoals Lightroom of Photoshop. Het kan alle gemaakte bewerkingen onthullen.'
        },
        {
            term: 'OSINT',
            definition: 'Open Source Intelligence. Een techniek voor het verzamelen van openbare informatie (sociale media, metadata, records) om mensen zonder hun medeweten te profileren.'
        },
        {
            term: 'Digitale anonimisering',
            definition: 'Het proces van het verwijderen of onleesbaar maken van identificeerbare informatie: locatie, apparaat, gedragspatronen. Essentieel voor online privacy.'
        }
    ] },

    { type: 'message', title: 'Je privacy is je eigen verantwoordelijkheid', ariaLabel: 'Informatie over privacy en gegevensrechten', html: 'Wij slaan je afbeeldingen niet op, verwerken ze niet en delen ze niet. <strong>Je hebt de volledige controle.</strong> Alle bewerkingen vinden uitsluitend plaats in je browser. Wanneer je dit tabblad sluit, blijft er geen record van je activiteit achter. Dit is hoe je je privacy op internet beschermt: tools die je gegevens respecteren.' },

    { type: 'title', text: 'Conclusie: Deel zonder sporen', level: 3 },
    { type: 'paragraph', html: 'Het beschermen van je digitale identiteit begint bij kleine details. Je foto\'s schoonmaken voordat je ze publiceert is een <strong>essentiële digitale hygiëne-gewoonte</strong> in 2026. Het beschermt niet alleen je locatie: het beschermt je familie, je bezittingen en je professionele privacy. Een onschuldig lijkende foto kan meer over je onthullen dan je ooit had gedacht.' }
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

export const content: ExifCleanerLocaleContent = {
    slug,
    title,
    description,
    ui,
    seo,
    faqTitle: "Veelgestelde Vragen",
    faq: "Referenties",
    bibliography,
    howTo,
    schemas: [faqSchema as any, howToSchema as any, appSchema],
};
