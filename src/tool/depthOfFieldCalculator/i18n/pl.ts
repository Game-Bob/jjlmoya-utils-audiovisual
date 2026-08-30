import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { DepthOfFieldUI } from '../ui';
import type { ToolLocaleContent, FAQItem, HowToStep } from '../../../types';

export type DepthOfFieldLocaleContent = ToolLocaleContent<DepthOfFieldUI>;

const slug = 'kalkulator-glebi-ostrosci';
const title = 'Kalkulator Głębi Ostrości Rozkład i Hiperfokalna';
const description = 'Oblicz dokładnie głębię ostrości (DoF), odległość hiperfokalną oraz bliską i dalszą granicę ostrości dla dowolnego aparatu i obiektywu.';

const ui: DepthOfFieldUI = {
    title: 'Kalkulator Głębi Ostrości',
    subtitle: 'Obliczanie akceptowalnego zakresu ostrości, odległości hiperfokalnej oraz stref ostrości przed i za obiektem.',
    sensorTitle: 'Aparat i Matryca',
    sensorLabel: 'Rozmiar Matrycy / Aparat',
    customCocLabel: 'Własny Krążek Rozproszenia (CoC mm)',
    lensTitle: 'Parametry Obiektywu',
    focalLengthLabel: 'Ogniskowa (mm)',
    apertureLabel: 'Przysłona (f-stop)',
    distanceTitle: 'Odległość od Obiektu',
    subjectDistanceLabel: 'Odległość',
    presetsTitle: 'Szybkie Ustawienia',
    presetPortrait: 'Portret (85mm f/1.8)',
    presetLandscape: 'Krajobraz (24mm f/8)',
    presetStreet: 'Fotografia Uliczna (35mm f/5.6)',
    presetMacro: 'Makro (100mm f/2.8)',
};

const faq: FAQItem[] = [
    {
        question: 'Czym jest głębia ostrości (DoF)?',
        answer: 'Głębia ostrości to zakres odległości w przestrzeni obiektu, w którym elementy obrazu wydają się ostre i akceptowalnie wyraźne.',
    },
    {
        question: 'Co to jest odległość hiperfokalna?',
        answer: 'Odległość hiperfokalna to punkt ostrości, przy którym głębia ostrości rozciąga się od połowy tej odległości aż do nieskończoności.',
    },
    {
        question: 'Dlaczego rozmiar matrycy wpływa na głębię ostrości?',
        answer: 'Mniejsze matryce wymagają większego powiększenia obrazu, co zmniejsza dopuszczalny krążek rozproszenia i zmienia głębię ostrości przy tej samej ogniskowej.',
    },
    {
        question: 'Jak przysłona wpływa na dyfrakcję?',
        answer: 'Bardzo małe otwory przysłony (np. f/16, f/22) powodują ugięcie fal świetlnych, co obniża ogólną ostrość obrazu mimo większej głębi.',
    },
];

const howTo: HowToStep[] = [
    {
        name: 'Wybierz rozmiar matrycy',
        text: 'Wybierz aparat lub format matrycy z listy, aby automatycznie ustawić odpowiedni krążek rozproszenia.',
    },
    {
        name: 'Wprowadź ogniskową i przysłonę',
        text: 'Podaj ogniskową obiektywu w milimetrach oraz wybraną wartość przysłony. Użyj suwaków do szybkiej regulacji.',
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
    { type: 'paragraph', html: 'Głębia ostrości to jedno z najpotężniejszych narzędzi kreatywnych w rękach fotografa oraz operatora kamery. <strong>Mała głębia ostrości</strong> skutecznie izoluje temat od tła, tworząc piękny rozmyty efekt bokeh, podczas gdy <strong>duża głębia ostrości</strong> utrzymuje idealną ostrość wszystkich planów w fotografii krajobrazowej i architekturze. Ten kalkulator zapewnia precyzyjne obliczenia optyczne dla każdego formatu.' },

    { type: 'title', text: 'Trzy zmienne kontrolujące DoF', level: 3 },
    { type: 'table', headers: ['Zmienna', 'Wzrost →', 'Efekt na DoF'], rows: [
        ['Przysłona', 'f/1.4 → f/16', 'Większa przysłona (mniejsza liczba f) = mniejsza głębia ostrości'],
        ['Ogniskowa', '24mm → 200mm', 'Dłuższa ogniskowa = mniejsza głębia ostrości przy tej samej odległości'],
        ['Odległość', '1m → 10m', 'Dalszy obiekt od aparatu = większa głębia ostrości'],
    ]},

    { type: 'title', text: 'Odległość hiperfokalna: Maksymalna ostrość', level: 3 },
    { type: 'paragraph', html: 'Ustawiając ostrość dokładnie na <strong>odległość hiperfokalną</strong>, cała przestrzeń od połowy tej odległości aż po nieskończoność pozostanie w strefie akceptowalnej ostrości. Jest to kluczowa technika w fotografii krajobrazowej i ulicznej, pozwalająca maksymalizować ostrość całego kadru bez konieczności przymykania przysłony do granic dyfrakcji.' },
    { type: 'tip', title: 'Porada praktyczna w terenie', html: 'W fotografii ulicznej warto ustawić ostrość na odległość hiperfokalną. Przy ogniskowej 35mm na aparacie z matrycą APS-C przy przysłonie f/8 wynosi ona około <strong>4 metrów</strong>: oznacza to, że wszystko w zakresie od 2 metrów aż po nieskończoność będzie akceptowalnie ostre na zdjęciu.' },

    { type: 'title', text: 'Rozmiar matrycy i krążek rozproszenia', level: 3 },
    { type: 'paragraph', html: '<strong>Krążek rozproszenia (Circle of Confusion - CoC)</strong> definiuje graniczną wielkość plamki światła na matrycy, która na gotowym zdjęciu wydaje się jeszcze punktem. Matryca Full Frame posiada normatywny CoC o wartości 0,030 mm, podczas gdy matryca smartfona około 0,006 mm. Mniejszy CoC wymaga znacznie ostrzejszych kryteriów optycznych.' },
    { type: 'stats', columns: 3, items: [
        { label: 'Full Frame', value: '0,030 mm', icon: 'mdi:camera' },
        { label: 'APS-C', value: '0,019 mm', icon: 'mdi:camera-outline' },
        { label: 'Smartfon', value: '0,006 mm', icon: 'mdi:cellphone' },
    ]},

    { type: 'title', text: 'DoF w kinie: Ogniskowa vs Matryca', level: 3 },
    { type: 'paragraph', html: 'Filmowanie w formacie Super 35 lub Full Frame często wykorzystuje dłuższe ogniskowe obiektywów dla uzyskania pożądanego, plastycznego wyglądu kinowego. Jasny obiektyw portretowy 85mm z przysłoną f/1.8 to klasyczne narzędzie do budowania głębi planów w kadrze.' },
    { type: 'diagnostic', variant: 'success', title: 'Zasada dystrybucji ostrości', icon: 'mdi:lightbulb-outline', badge: 'Technika Pro', html: 'Dla obiektu znajdującego się w odległości 3m przy ogniskowej 50mm i przysłonie f/2.8: strefa akceptowalnej ostrości za obiektem jest zawsze większa niż przed nim - zazwyczaj w przybliżonym <strong>stosunku 2:1</strong> przy umiarkowanych odległościach.' },
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
