import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { DepthOfFieldUI, DepthOfFieldLocaleContent } from '../index';

const slug = 'kalkulyator-glubiny-rezkosti';
const title = 'Калькулятор глубины резкости: DoF в реальном времени';
const description = 'Расчет глубины резкости, гиперфокального расстояния и границ фокуса. Поддержка всех размеров матриц с точностью до 1/3 стопа.';

const ui: DepthOfFieldUI = {
    title: 'Глубина резкости',
    paramsTitle: 'Параметры',
    sensorLabel: 'Матрица камеры',
    moreLabel: 'Больше матриц...',
    apertureLabel: 'Диафрагма',
    focalLabel: 'Фокусное расстояние',
    distanceLabel: 'Расстояние до объекта',
    metersLabel: 'м',
    feetLabel: 'фт',
    resultsTitle: 'Результаты',
    totalDofLabel: 'Общая глубина резкости',
    infiniteLabel: 'Бесконечность',
    nearLimitLabel: 'Ближняя граница',
    farLimitLabel: 'Дальняя граница',
    hyperfocalLabel: 'Гиперфокал',
    cocLabel: 'Кружок рассеяния',
    cocUnit: 'мм',
    showDetailsLabel: 'Показать тех. детали',
    hideDetailsLabel: 'Скрыть тех. детали',
    errorBelowFocal: 'Расстояние должно быть больше фокусного расстояния.',
};

const faq: DepthOfFieldLocaleContent['faq'] = [
    {
        question: 'Что такое глубина резкости?',
        answer: 'Глубина резко изображаемого пространства (ГРИП) - это диапазон расстояний в сцене, которые выглядят резкими. Зависит от диафрагмы, фокусного расстояния, дистанции и матрицы.',
    },
    {
        question: 'Что такое гиперфокальное расстояние?',
        answer: 'Это минимальная дистанция фокусировки, при которой объекты на бесконечности остаются резкими. Фокусировка на это расстояние дает максимальную ГРИП.',
    },
    {
        question: 'Почему открытая диафрагма уменьшает ГРИП?',
        answer: 'Широкое отверстие собирает свет с большой площади линзы, что увеличивает кружок рассеяния для точек вне фокуса, сужая зону резкости.',
    },
    {
        question: 'Как размер матрицы влияет на ГРИП?',
        answer: 'Большие матрицы имеют больший порог кружка рассеяния. Однако при эквивалентных углах обзора они дают меньшую ГРИП, так как требуют больших фокусных расстояний.',
    },
];

const howTo: DepthOfFieldLocaleContent['howTo'] = [
    {
        name: 'Выберите матрицу вашей камеры',
        text: 'Выберите формат матрицы вашей камеры. Это определит значение кружка рассеяния (CoC) для расчетов.',
    },
    {
        name: 'Установите диафрагму и фокус',
        text: 'Выберите значение диафрагмы с шагом 1/3. Шкала фокусного расстояния логарифмическая для точности на широком угле.',
    },
    {
        name: 'Задайте дистанцию до объекта',
        text: 'Укажите расстояние от камеры до объекта. Можно переключаться между метрами и футами.',
    },
    {
        name: 'Изучите результаты',
        text: 'Индикатор фокуса визуализирует резкую зону. Ближняя и дальняя границы показывают точный диапазон резкости.',
    },
];

const seo: DepthOfFieldLocaleContent['seo'] = [
    { type: 'title', text: 'Понимание глубины резкости в фотографии и кино', level: 2 },
    { type: 'paragraph', html: 'Глубина резко изображаемого пространства (ГРИП) - один из важнейших и мощнейших творческих инструментов в арсенале фотографа и видеооператора. <strong>Малая глубина резкости</strong> эффективно отделяет главный объект от заднего плана, создавая мягкий размытый боке, а <strong>большая глубина резкости</strong> позволяет сохранить высокую чёткость всех планов при съемке пейзажей, интерьеров и архитектуры. Наш калькулятор обеспечивает точный оптический расчет для любых форматов сенсоров.' },

    { type: 'title', text: 'Три фактора управления ГРИП', level: 3 },
    { type: 'table', headers: ['Фактор', 'Увеличение →', 'Влияние на ГРИП'], rows: [
        ['Диафрагма', 'f/1.4 → f/16', 'Больше относительное отверстие = меньше глубина резкости'],
        ['Фокусное раст.', '24мм → 200мм', 'Больше фокусное расстояние = меньше глубина резкости при той же дистанции'],
        ['Дистанция', '1м → 10м', 'Увеличение расстояния до объекта = больше глубина резкости'],
    ]},

    { type: 'title', text: 'Гиперфокальное расстояние: максимум резкости', level: 3 },
    { type: 'paragraph', html: 'При точной фокусировке объектива на <strong>гиперфокальное расстояние</strong> всё пространство от половины этого расстояния и вплоть до бесконечности будет находиться в зоне приемлемой резкости. Это ключевая профессиональная техника для пейзажной и репортажной съемки, позволяющая получить максимум детализации по всему кадру.' },
    { type: 'tip', title: 'Практический совет', html: 'Для стрит-фотографии установите фокус на гиперфокал. С объективом 35мм на камере APS-C при f/8 это составит около <strong>4 метров</strong>: всё от 2 метров до бесконечности будет резким.' },

    { type: 'title', text: 'Размер матрицы и кружок рассеяния', level: 3 },
    { type: 'paragraph', html: '<strong>Кружок рассеяния (Circle of Confusion - CoC)</strong> определяет допустимый размер пятна нерезкости на сенсоре. Для Full Frame допустимый CoC составляет 0.030 мм, а для смартфона - около 0.006 мм.' },
    { type: 'stats', columns: 3, items: [
        { label: 'Full Frame', value: '0.030 мм', icon: 'mdi:camera' },
        { label: 'APS-C', value: '0.019 мм', icon: 'mdi:camera-outline' },
        { label: 'Смартфон', value: '0.006 мм', icon: 'mdi:cellphone' },
    ]},

    { type: 'title', text: 'ГРИП в кино: Фокус vs Матрица', level: 3 },
    { type: 'paragraph', html: 'В кинематографе на формате Super 35 или Full Frame часто применяют длиннофокусную оптику для визуального сжатия перспективы и создания характерного киноизображения.' },
    { type: 'diagnostic', variant: 'success', title: 'Правило распределения фокуса', icon: 'mdi:lightbulb-outline', badge: 'Профи-прием', html: 'Для объекта на расстоянии 3м с объективом 50мм на f/2.8: зона резкости позади объекта всегда больше, чем перед ним - примерно в <strong>пропорции 2:1</strong>.' },
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
    inLanguage: 'ru',
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
