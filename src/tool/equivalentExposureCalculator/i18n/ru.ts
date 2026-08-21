import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { EquivalentExposureUI } from '../ui';
import type { ToolLocaleContent, FAQItem, HowToStep } from '../../../types';

const slug = 'kalkulyator-ekvivalentnoj-ekspoziczii';
const title = 'Калькулятор эквивалентной экспозиции Треугольник экспозиции';
const description = 'Рассчитайте эквивалентные настройки диафрагмы, выдержки и ISO для сохранения экспозиционного числа EV.';

const ui: EquivalentExposureUI = {
  "title": "Калькулятор эквивалентной экспозиции",
  "subtitle": "Рассчитайте взаимные параметры диафрагмы, выдержки и ISO для поддержания постоянного значения экспозиции.",
  "baseSettingsTitle": "Базовые настройки экспозиции",
  "targetSettingsTitle": "Целевые эквивалентные настройки",
  "lockModeLabel": "Рассчитывать автоматически",
  "isoLabel": "Чувствительность ISO",
  "apertureLabel": "Диафрагма (f число)",
  "shutterLabel": "Выдержка",
  "lockIsoOption": "Рассчитать ISO (Сохранять диафрагму и выдержку)",
  "lockApertureOption": "Рассчитать диафрагму (Сохранять ISO и выдержку)",
  "lockShutterOption": "Рассчитать выдержку (Сохранять ISO и диафрагму)",
  "presetsTitle": "Быстрые пресеты",
  "presetSunny16": "Правило Солнце 16",
  "presetOvercast": "Облачный день",
  "presetIndoor": "Освещение в помещении",
  "presetNight": "Ночная съемка",
  "targetEvLabel": "Целевое EV"
};

const faq: FAQItem[] = [
  {
    "question": "Что такое экспозиционное число (EV) и как оно рассчитывается?",
    "answer": "EV - это логарифмическая шкала, сочетающая диафрагму и выдержку при ISO 100. Формула: EV = log2(N^2 / t)."
  },
  {
    "question": "Как эквивалентная экспозиция сохраняет яркость изображения?",
    "answer": "Компенсируя ступени между ISO, выдержкой и диафрагмой, общее количество света на матрице остается неизменным."
  },
  {
    "question": "Что такое правило Солнце 16?",
    "answer": "В солнечный день при f/16 правильная выдержка равна обратной величине ISO (например, ISO 100 требует 1/100 с)."
  },
  {
    "question": "Как выбор диафрагмы меняет глубину резкости?",
    "answer": "Открытие диафрагмы уменьшает глубину резкости, изолируя объект мягким размытием фона."
  }
];

const howTo: HowToStep[] = [
  {
    "name": "Задать базовые настройки",
    "text": "Выберите базовые значения ISO, диафрагмы и выдержки."
  },
  {
    "name": "Выбрать режим расчета",
    "text": "Укажите переменную для автоматического расчета."
  },
  {
    "name": "Изменить творческие параметры",
    "text": "Меняйте целевые значения для мгновенного пересчета взаимности."
  },
  {
    "name": "Оценить визуальные эффекты",
    "text": "Проверьте векторную схему на предмет глубины резкости и шума."
  }
];

const seo: ToolLocaleContent<EquivalentExposureUI>['seo'] = [
  {
    type: 'summary',
    title: 'Особенности взаимозаместимости экспозиции',
    items: [
    "Точный расчет с шагом 1/3 EV для ISO, диафрагмы и выдержки",
    "Интерактивный векторный треугольник экспозиции в SVG",
    "Обратная связь по глубине резкости, смазу и шуму",
    "Быстрые пресеты для Солнца 16, облачности и ночи"
],
  },
  { type: 'title', text: 'Понимание треугольника экспозиции', level: 2 },
  {
    type: 'paragraph',
    html: 'Экспозиция определяется диафрагмой, выдержкой и ISO. Любое изменение требует взаимной компенсации.',
  },
  {
    type: 'stats',
    items: [
      { value: 'EV 15', label: 'Дневной свет (Солнце 16)', icon: 'mdi:white-balance-sunny' },
      { value: '1/3 EV', label: 'Точность до третей ступени', icon: 'mdi:tune-vertical' },
      { value: '2:1 DOF', label: 'Стандартное распределение фокуса', icon: 'mdi:camera-iris' },
    ],
    columns: 3,
  },
  { type: 'title', text: 'Творческая задача', level: 3 },
  {
    type: 'table',
    headers: [
    "Творческая задача",
    "Диафрагма",
    "Выдержка",
    "ISO",
    "Визуальный результат"
],
    rows: [
    [
        "Заморозить движение",
        "Открыть (f/2.8)",
        "Быстрее (1/1000s)",
        "Без изменений",
        "Меньше глубина резкости"
    ],
    [
        "Резкость пейзажа",
        "Закрыть (f/11)",
        "Медленнее (1/30s)",
        "Без изменений",
        "Требуется штатив"
    ],
    [
        "Съемка с рук в темноте",
        "Макс. открыть (f/1.4)",
        "Предел для рук (1/60s)",
        "Увеличить (ISO 3200)",
        "Больше шума"
    ],
    [
        "Студийное качество",
        "Оптимальная (f/8)",
        "Синхронизация (1/200s)",
        "Базовое ISO 100",
        "Максимальный динамический диапазон"
    ]
],
  },
  { type: 'title', text: 'Творческое влияние эквивалентных настроек', level: 3 },
  {
    type: 'paragraph',
    html: 'Хотя эквивалентные экспозиции дают одинаковую яркость, характер снимка отличается:',
  },
  {
    type: 'list',
    items: [
    "<strong>Диафрагма:</strong> Управляет глубиной резкости и боке.",
    "<strong>Выдержка:</strong> Управляет передачей движения.",
    "<strong>ISO:</strong> Усиливает сигнал матрицы ценой шума."
],
    icon: 'mdi:check-circle',
  },
  {
    type: 'comparative',
    items: [
      {
        title: 'Размытый фон',
        description: 'Открытая диафрагма для портретов',
        icon: 'mdi:account-box-outline',
        points: [
          "Диафрагма f/1.4 до f/2.8",
          "Быстрая выдержка",
          "Мягкое боке"
],
      },
      {
        title: 'Глубокий пейзаж',
        description: 'Закрытая диафрагма для резкости',
        icon: 'mdi:image-filter-hdr',
        points: [
          "Оптимум f/8 до f/11",
          "Длинная выдержка со штатива",
          "Максимальное разрешение"
],
        highlight: true,
      },
    ],
    columns: 2,
  },
  {
    type: 'proscons',
    items: [
      {
        pro: 'Точность в 1/3 ступени соотносится с дисками камеры',
        con: 'Не учитывает эффект Шварцшильда и T стопы',
      },
      {
        pro: 'SVG визуализация с отображением резкости',
        con: 'Требует ручного учета кроп фактора',
      },
    ],
    proTitle: 'Технические плюсы',
    conTitle: 'Физические ограничения',
  },
  {
    type: 'glossary',
    items: [
    {
        "term": "Экспозиционное число (EV)",
        "definition": "Логарифмическая шкала, сочетающая диафрагму и выдержку."
    },
    {
        "term": "Закон взаимозаместимости",
        "definition": "Принцип пропорциональности экспозиции от освещенности и времени."
    },
    {
        "term": "Ступень экспозиции (Стоп)",
        "definition": "Относительная единица изменения количества света вдвое."
    }
],
  },
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

export const content: ToolLocaleContent<EquivalentExposureUI> = {
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
