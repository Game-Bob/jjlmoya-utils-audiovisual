import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { DepthOfFieldUI, DepthOfFieldLocaleContent } from '../index';

const slug = 'kalkulator-glebi-ostrosci';
const title = 'Kalkulator Głębi Ostrości: DoF w czasie rzeczywistym';
const description = 'Oblicz głębię ostrości, odległość hiperfokalną i limity ostrości w czasie rzeczywistym. Obsługuje wszystkie rozmiary matryc z precyzją 1/3 stopnia.';

const ui: DepthOfFieldUI = {
    title: 'Głębia Ostrości',
    paramsTitle: 'Parametry',
    sensorLabel: 'Matryca Aparatu',
    moreLabel: 'Więcej matryc…',
    apertureLabel: 'Przysłona',
    focalLabel: 'Ogniskowa',
    distanceLabel: 'Odległość od Obiektu',
    metersLabel: 'm',
    feetLabel: 'ft',
    resultsTitle: 'Wyniki',
    totalDofLabel: 'Całkowita Głębia Ostrości',
    infiniteLabel: 'Nieskończoność',
    nearLimitLabel: 'Bliższa Granica',
    farLimitLabel: 'Dalsza Granica',
    hyperfocalLabel: 'Hiperfokalna',
    cocLabel: 'Krążek Rozproszenia',
    cocUnit: 'mm',
    showDetailsLabel: 'Pokaż szczegóły techniczne',
    hideDetailsLabel: 'Ukryj szczegóły techniczne',
    errorBelowFocal: 'Odległość od obiektu musi być większa niż ogniskowa.',
};

const faq: DepthOfFieldLocaleContent['faq'] = [
    {
        question: 'Co to jest głębia ostrości?',
        answer: 'Głębia ostrości (DoF) to zakres odległości w scenie, który na zdjęciu wydaje się akceptowalnie ostry. Zależy od przysłony, ogniskowej, odległości od obiektu i rozmiaru matrycy.',
    },
    {
        question: 'Co to jest odległość hiperfokalna?',
        answer: 'Odległość hiperfokalna to najmniejsza odległość ostrzenia, przy której obiekty w nieskończoności są nadal akceptowalnie ostre. Ustawienie ostrości na tę odległość maksymalizuje głębię ostrości.',
    },
    {
        question: 'Dlaczego większa przysłona zmniejsza głębię ostrości?',
        answer: 'Szerszy otwór przysłony zbiera światło z większego obszaru soczewki, co zwiększa krążek rozproszenia dla punktów poza płaszczyzną ostrości, zawężając strefę akceptowalnej ostrości.',
    },
    {
        question: 'Jak rozmiar matrycy wpływa na głębię ostrości?',
        answer: 'Większe matryce mają wyższy próg krążka rozproszenia. Jednak przy ekwiwalentnych kątach widzenia większe matryce dają mniejszą głębię, ponieważ wymagają dłuższych ogniskowych.',
    },
];

const howTo: DepthOfFieldLocaleContent['howTo'] = [
    {
        name: 'Wybierz matrycę aparatu',
        text: 'Wybierz format matrycy odpowiadający Twojemu aparatowi. Ustala to wartość krążka rozproszenia (CoC) używaną do obliczeń.',
    },
    {
        name: 'Ustaw przysłonę i ogniskową',
        text: 'Wybierz przysłonę w krokach co 1/3 stopnia. Suwak ogniskowej ma skalę logarytmiczną dla większej precyzji w szerokim kącie.',
    },
    {
        name: 'Ustaw odległość od obiektu',
        text: 'Ustaw odległość między aparatem a głównym tematem. Przełączaj między metrami i stopami według potrzeb.',
    },
    {
        name: 'Odczytaj wyniki',
        text: 'Pasek ostrości wizualizuje strefę ostrości. Granice bliższa i dalsza pokazują dokładny zakres akceptowalnej ostrości.',
    },
];

const seo: DepthOfFieldLocaleContent['seo'] = [
    { type: 'title', text: 'Zrozumienie głębi ostrości w fotografii i filmie', level: 2 },
    { type: 'paragraph', html: 'Głębia ostrości to jedno z najpotężniejszych narzędzi kreatywnych. <strong>Mała głębia ostrości</strong> izoluje temat, podczas gdy <strong>duża głębia</strong> utrzymuje ostrość całego krajobrazu. Ten kalkulator daje Ci pełną kontrolę.' },

    { type: 'title', text: 'Trzy zmienne kontrolujące DoF', level: 3 },
    { type: 'table', headers: ['Zmienna', 'Wzrost →', 'Efekt na DoF'], rows: [
        ['Przysłona', 'f/1.4 → f/16', 'Większa przysłona = mniejsza głębia'],
        ['Ogniskowa', '24mm → 200mm', 'Dłuższa ogniskowa = mniejsza głębia przy tej samej odległości'],
        ['Odległość', '1m → 10m', 'Dalszy obiekt = większa głębia'],
    ]},

    { type: 'title', text: 'Odległość hiperfokalna: Maksymalna ostrość', level: 3 },
    { type: 'paragraph', html: 'Ustawiając ostrość na <strong>odległość hiperfokalną</strong>, wszystko od połowy tej odległości do nieskończoności będzie ostre. Kluczowe w fotografii krajobrazowej.' },
    { type: 'tip', title: 'Porada praktyczna', html: 'W fotografii ulicznej ustaw ostrość na hiperfokalną. Przy 35mm na APS-C i f/8 wynosi ona ok. <strong>4 metrów</strong>: wszystko od 2m do nieskończoności będzie ostre.' },

    { type: 'title', text: 'Rozmiar matrycy i krążek rozproszenia', level: 3 },
    { type: 'paragraph', html: '<strong>Krążek rozproszenia (CoC)</strong> definiuje akceptowalną ostrość. Matryca Full Frame ma CoC 0,030 mm; smartfon ok. 0,006 mm. Mniejszy CoC oznacza ostrzejsze kryteria.' },
    { type: 'stats', columns: 3, items: [
        { label: 'Full Frame', value: '0,030 mm', icon: 'mdi:camera' },
        { label: 'APS-C', value: '0,019 mm', icon: 'mdi:camera-outline' },
        { label: 'Smartfon', value: '0,006 mm', icon: 'mdi:cellphone' },
    ]},

    { type: 'title', text: 'DoF w kinie: Ogniskowa vs Matryca', level: 3 },
    { type: 'paragraph', html: 'Filmowanie w formacie Super 35 często wykorzystuje dłuższe ogniskowe dla uzyskania "filmowego wyglądu". Jasny obiektyw 85mm to klasyk w portrecie.' },
    { type: 'diagnostic', variant: 'success', title: 'Zasada dystrybucji ostrości', icon: 'mdi:lightbulb-outline', badge: 'Technika Pro', html: 'Dla obiektu w odległości 3m przy 50mm i f/2.8: strefa ostrości za obiektem jest zawsze większa niż przed nim – około w <strong>stosunku 2:1</strong>.' },
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
    inLanguage: 'pl',
};

export const content: DepthOfFieldLocaleContent = {
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
