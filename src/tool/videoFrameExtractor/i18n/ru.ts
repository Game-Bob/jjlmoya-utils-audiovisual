import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { VideoFrameExtractorUI, VideoFrameExtractorLocaleContent } from '../index';

const slug = 'onlajn-ekstraktor-kadrov-video-zahvat-stills-hd';
const title = 'Экстрактор кадров видео: Захват HD снимков';
const description = 'Извлекайте отдельные изображения из видео с точностью до кадра. Сохраняйте идеальные моменты в HD локально и бесплатно.';

const ui: VideoFrameExtractorUI = {
    uploadTitle: "Загрузить видеофайл",
    uploadFormats: "MP4, WebM, MOV или MKV (Макс. 500 МБ)",
    privacyNote: "Видео не загружается в интернет, оно обрабатывается прямо в вашем браузере.",
    playLabel: "Играть",
    pauseLabel: "Пауза",
    captureBtn: "Захватить кадр",
    prevFrame: "-1F",
    nextFrame: "+1F",
    batchTitle: "Автоматическое извлечение",
    batchEvery: "Каждые",
    batchStart: "Начать серию",
    batchProcessing: "Извлечение...",
    galleryTitle: "Захваченные кадры",
    galleryEmpty: "Здесь появятся ваши снимки.",
    downloadAll: "Скачать всё",
    downloadHD: "Скачать HD изображение",
    resetBtn: "Загрузить другое видео"
};

const faq: VideoFrameExtractorLocaleContent['faq'] = [
    {
        question: "Можно ли извлекать кадры из длинных видео?",
        answer: "Да, если в вашем браузере достаточно оперативной памяти для загрузки видео. Мы рекомендуем файлы до 500 МБ для лучшей работы.",
    },
    {
        question: "В каком разрешении сохраняются снимки?",
        answer: "Снимки создаются в исходном разрешении вашего видео. Если видео в 4K, вы получите высококачественное изображение 4K.",
    },
];

const howTo: VideoFrameExtractorLocaleContent['howTo'] = [
    {
        name: "Загрузите видео",
        text: "Выберите файл на устройстве. Мы не отправляем его на наши серверы.",
    },
    {
        name: "Перейдите к точному моменту",
        text: "Используйте шкалу времени или кнопки «±1 кадр» для идеальной точности.",
    },
    {
        name: "Захватите кадр",
        text: "Нажмите кнопку захвата, чтобы сохранить кадр в галерее ниже.",
    },
    {
        name: "Скачайте в высоком качестве",
        text: "Скачивайте отдельные кадры или всю серию в оптимизированном формате WebP.",
    },
];

const seo: VideoFrameExtractorLocaleContent['seo'] = [
    {
        type: 'summary',
        title: 'Профессиональное извлечение кадров из видео',
        items: [
            'Точность до одного кадра (±1 кадр) для идеального снимка',
            'Поддержка MP4, WebM, MOV, MKV до 500 МБ',
            'Сохранение исходного разрешения (SD, HD, 4K)',
            'Автоматическое пакетное извлечение через интервалы'
        ]
    },
    { type: 'title', text: 'Экстракция кадров: Остановите мгновение', level: 2 },
    { type: 'paragraph', html: 'Иногда один кадр стоит тысячи слов. Наш инструмент использует ресурсы вашего браузера для точного извлечения кадров без необходимости установки сложного ПО.' },

    { type: 'stats', items: [
        { value: '±1', label: 'Точность до кадра', icon: 'mdi:target' },
        { value: '100%', label: 'Исходное разрешение', icon: 'mdi:video-high-definition' },
        { value: '500MB', label: 'Поддержка файлов', icon: 'mdi:file-video' }
    ], columns: 3 },

    { type: 'title', text: 'Для профессионалов', level: 3 },
    { type: 'comparative', items: [
        {
            title: 'Кино и фото',
            description: 'Захват кадров для референсов и композиции',
            icon: 'mdi:film',
            points: [
                'Снимки для маркетинга фильмов',
                'Референсы по композиции сцен',
                'Покадровый анализ'
            ]
        },
        {
            title: 'Цифровой контент',
            description: 'Создание превью и обложек для соцсетей',
            icon: 'mdi:youtube',
            points: [
                'HD обложки для YouTube',
                'Контент для соцсетей',
                'Изображения для презентаций'
            ],
            highlight: true
        },
        {
            title: 'Техдокументация',
            description: 'Извлечение кадров из туториалов',
            icon: 'mdi:book-open',
            points: [
                'Скриншоты инструкций',
                'Пошаговая визуализация',
                'Анализ движения'
            ]
        },
        {
            title: 'Спорт и экшн',
            description: 'Захват решающего момента',
            icon: 'mdi:dumbbell',
            points: [
                'Покадровый разбор техники',
                'Захват пикового момента',
                'Изучение движения'
            ]
        }
    ], columns: 2 },

    { type: 'title', text: 'Поддерживаемые форматы', level: 3 },
    { type: 'table', headers: ['Формат', 'Расширение', 'Совместимость', 'Заметки'], rows: [
        ['MPEG-4', 'MP4', 'Универсально (100%)', 'Лучшее сжатие'],
        ['WebM', 'WebM', 'Современные браузеры', 'Отличное качество'],
        ['QuickTime', 'MOV', 'Safari, плееры', 'Стандарт Apple'],
        ['Matroska', 'MKV', 'Современные браузеры', 'Гибкий контейнер']
    ] },

    { type: 'card', title: 'Точность до кадра', html: 'Возможность перемещаться на один кадр (±1) критически важна для захвата идеального момента: прыжка, улыбки, жеста. Вы получаете полный контроль.' },

    { type: 'proscons', items: [
        {
            pro: 'Полная приватность: видео обрабатывается только в вашем браузере',
            con: 'Зависимость от оперативной памяти (~до 500 МБ)'
        },
        {
            pro: 'Без потери качества: SD, HD, 4K без пересжатия',
            con: 'Нужен современный браузер с поддержкой HTML5 Video'
        },
        {
            pro: 'Автоматическое извлечение через интервалы',
            con: 'Для полноценного монтажа нужен видеоредактор'
        },
        {
            pro: 'Экспорт в WebP или PNG',
            con: 'Экспорт по одному кадру (без создания GIF)'
        }
    ], proTitle: 'Преимущества', conTitle: 'Ограничения' },

    { type: 'diagnostic', variant: 'info', title: 'Разрешение и FPS', icon: 'mdi:information', badge: 'Техинфо', html: 'Финальное разрешение зависит от оригинала. Мы не используем апскейлинг, сохраняя нативные данные видео.' },

    { type: 'glossary', items: [
        {
            term: 'Кадр',
            definition: 'Отдельное изображение в видео. В видео 24 fps их 24 в каждой секунде.'
        },
        {
            term: 'FPS',
            definition: 'Количество кадров в секунду. Определяет плавность.'
        },
        {
            term: 'Видеокодек',
            definition: 'Алгоритм сжатия: H.264, VP9, HEVC.'
        },
        {
            term: 'Битрейт',
            definition: 'Количество данных в секунду. Выше битрейт — выше качество.'
        },
        {
            term: 'Разрешение',
            definition: 'Размеры в пикселях: 1080p, 4K и др.'
        }
    ] },

    { type: 'message', title: 'Профессиональное извлечение', ariaLabel: 'Техническая информация', html: 'Вам не нужны сложные конвертеры. Идеальный кадр в 3 клика: загрузка, навигация, захват.' },

    { type: 'title', text: 'Заморозьте момент', level: 3 },
    { type: 'paragraph', html: 'Каждое видео содержит сотни кадров. Найдите среди них лучшие моменты без потери качества и нарушения приватности.' }
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

export const content: VideoFrameExtractorLocaleContent = {
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
