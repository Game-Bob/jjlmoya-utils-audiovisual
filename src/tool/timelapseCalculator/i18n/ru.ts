import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { TimelapseUI, TimelapseLocaleContent } from '../index';

const slug = 'kalkulyator-timelaps-giperlaps-idealnye-intervaly';
const title = 'Калькулятор таймлапса и гиперлапса: Идеальные интервалы';
const description = 'Рассчитайте точный интервал между фото, общую продолжительность и объем памяти для ваших таймлапсов. Незаменимый инструмент для фотографов.';

const ui: TimelapseUI = {
    title: "Калькулятор таймлапса",
    paramsTitle: "Параметры",
    eventDuration: "Как долго длится реальное событие?",
    hours: "Часы",
    minutes: "Минуты",
    videoDuration: "Какова длительность итогового видео?",
    seconds: "Продолж. (сек)",
    fps: "FPS",
    resultsTitle: "Результаты",
    intervalLabel: "Настройте интервалометр на:",
    secondsUnit: "секунд",
    totalPhotos: "Всего фото",
    speed: "Скорость",
    shutterSpeed: "Выдержка",
    storage: "Объем (RAW)",
    rule180Info: "Правило 180° рекомендует выдержку в половину интервала для плавного размытия движения.",
};

const faq: TimelapseLocaleContent['faq'] = [
    {
        question: "Как выбрать правильный интервал для моего таймлапса?",
        answer: "Это зависит от скорости движения, которое вы снимаете. Для быстро движущихся облаков используйте 2-3 секунды. Для движения солнца или звезд — 15-30 секунд. Для роста растений или строительства — 5-15 минут.",
    },
    {
        question: "Сколько фотографий мне нужно для минутного видео?",
        answer: "Стандартное видео имеет частоту 24 или 30 кадров в секунду (fps). Для одной минуты видео при 24fps вам потребуется ровно 1440 фотографий (60 секунд * 24 фото/сек).",
    },
    {
        question: "Что такое 'Flicker' и как его избежать?",
        answer: "Это неприятное мерцание, вызванное небольшими колебаниями экспозиции между кадрами. Чтобы избежать его, всегда используйте ручной режим (M), фиксированный баланс белого и объективы с ручным кольцом диафрагмы.",
    },
    {
        question: "Почему важна выдержка?",
        answer: "Чтобы движение выглядело плавным (правило 180°), выдержка должна составлять примерно половину интервала. Например, если интервал 2 секунды, попробуйте снимать на 1 секунде.",
    },
];

const howTo: TimelapseLocaleContent['howTo'] = [
    {
        name: "Определите длину итогового видео",
        text: "Укажите, сколько секунд или минут должен длиться результирующий ролик (например, 10 секунд для Instagram).",
    },
    {
        name: "Выберите выходной FPS",
        text: "Выберите плавность видео: 24 (кино), 30 (веб) или 60 (плавное замедленное движение).",
    },
    {
        name: "Настройте интервал съемки",
        text: "Настройте, через сколько секунд камера будет делать снимок в зависимости от скорости сцены.",
    },
    {
        name: "Проверьте объем памяти",
        text: "Калькулятор подскажет, сколько гигабайт займет сессия. Убедитесь, что на вашей SD карте достаточно места.",
    },
];

const seo: TimelapseLocaleContent['seo'] = [
    { type: 'title', text: 'Полное руководство по интервалам таймлапса и гиперлапса', level: 2 },
    { type: 'paragraph', html: 'Математическая разница между любительским ускоренным видео и <strong>кинематографичным таймлапсом</strong> заключается в одном факторе: <strong>интервале</strong>. Этот калькулятор избавляет от догадок, позволяя точно спланировать съемку.' },
    
    { type: 'title', text: 'Таблица рекомендуемых интервалов (шпаргалка)', level: 3 },
    { type: 'paragraph', html: 'Используйте эту справочную таблицу для настройки интервалометра в зависимости от объекта съемки.' },
    { type: 'table', headers: ['Объект / Сцена', 'Рекомендуемый интервал', 'Длительность события (минимум)'], rows: [
        ['Быстрые облака / Шторм', '1 - 2 секунды', '20 - 30 мин'],
        ['Городской трафик / Люди (Blur)', '0.5 - 2 секунды', '15 - 20 мин'],
        ['Закат / Рассвет (Holy Grail)', '5 - 10 секунд', '1.5 - 2.5 часа'],
        ['Медленные облака / Тени', '10 - 15 секунд', '2 - 3 часа'],
        ['Звезды / Млечный Путь (Astro)', '15 - 30 секунд*', '3 - 5 часов'],
        ['Стройка / Рост растений', '5 - 15 минут', 'Дни / Недели']
    ]},
    { type: 'tip', title: 'Заметка для астрофото', html: 'Интервал обычно диктуется временем экспозиции (правило 500) + 1 или 2 секунды буфера для записи на карту.' },

    { type: 'title', text: 'Правило 180° (Motion Blur)', level: 3 },
    { type: 'paragraph', html: 'Частая ошибка в таймлапсе — получение "дерганого" видео. Для плавного киношного вида вам нужно <strong>размытие движения (motion blur)</strong>.' },
    { type: 'card', title: 'Правило', icon: 'mdi:information', html: 'Ваша выдержка должна составлять половину от интервала. <br /><br /> <em>Пример:</em> Если вы снимаете каждые <strong>4 секунды</strong>, экспозиция должна быть <strong>2 секунды</strong>.' },

    { type: 'title', text: 'Мерцание (Flicker) и ручная диафрагма', level: 3 },
    { type: 'paragraph', html: '"Flicker" — это раздражающее мерцание, вызванное микроколебаниями в раскрытии диафрагмы между снимками.' },
    { type: 'list', items: [
        '<strong>Lens Twist:</strong> Приоткройте замок объектива на зеркалках, чтобы прервать электронную связь и зафиксировать диафрагму механически.',
        '<strong>Все в ручном режиме:</strong> ISO, баланс белого и фокус должны быть фиксированы.',
        '<strong>Снимайте в RAW:</strong> Необходимо для коррекции экспозиции и цвета при постобработке.'
    ]},

    { type: 'diagnostic', variant: 'success', title: 'Продвинутая техника: "Святой Грааль"', icon: 'mdi:crown', badge: 'Pro-техника', html: '"Святой Грааль" (Holy Grail) относится к плавному переходу от дня к ночи (или наоборот). Это сложнейшая техническая задача.' },
    
    { type: 'stats', columns: 3, items: [
        { label: 'Bulb Ramping', value: 'Постепенная экспозиция', icon: 'mdi:brightness-6' },
        { label: 'Post-Pro', value: 'LRTimelapse', icon: 'mdi:television-guide' },
        { label: 'Стратегия', value: 'Ночной интервал', icon: 'mdi:weather-night' }
    ]},

    { type: 'title', text: 'Заключение: Дзен простой механики', level: 3 },
    { type: 'paragraph', html: 'Освоение таймлапса начинается с понимания математики вашего интервалометра.' }
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

export const content: TimelapseLocaleContent = {
    slug,
    title,
    description,
    ui,
    seo,
    faq,
    faqTitle: 'Часто задаваемые вопросы о производстве таймлапсов',
    bibliography: 'Теория и ресурсы таймлапса',
    howTo,
    schemas: [faqSchema as any, howToSchema as any, appSchema],
};
