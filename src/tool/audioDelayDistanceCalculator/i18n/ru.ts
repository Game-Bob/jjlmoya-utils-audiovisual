import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { AudioDelayUI } from '../ui';
import type { ToolLocaleContent, FAQItem, HowToStep } from '../../../types';

const slug = 'kalkulyator-zaderzhki-audiogromkosti-rasstoyanie-temperatura';
const title = 'Калькулятор Задержки Звука по Расстоянию и Температуре';
const description = 'Рассчитайте время акустической задержки, скорость звука в воздухе, фазовое смещение, количество цифровых сэмплов и затухание SPL для линий задержки PA.';

const ui: AudioDelayUI = {
  title: 'Калькулятор Задержки Звука по Расстоянию и Температуре',
  subtitle: 'Рассчитайте время задержки распространения звука, фазовый сдвиг, количество сэмплов и затухание SPL для дополнительных систем задержки PA.',
  unitSystemLabel: 'Система Единиц',
  unitMetric: 'Метрическая (м, °C)',
  unitImperial: 'Имперская (ft, °F)',
  distanceLabel: 'Расстояние до Линии Задержки',
  temperatureLabel: 'Температура Воздуха',
  humidityLabel: 'Относительная Влажность',
  sampleRateLabel: 'Частота Дискретизации Консоли',
  presetsTitle: 'Быстрые Пресеты Сценариев',
  presetSummerFestival: 'Летний Фестиваль (35°C, 40м)',
  presetIndoorConcert: 'Концерт в Зале (20°C, 25м)',
  presetTheater: 'Акустический Театр (22°C, 15m)',
  presetWinterOutdoor: 'Зимнее Мероприятие (5°C, 50м)',
  resultDelayMs: 'Время Задержки',
  resultSamples: 'Цифровые Сэмплы',
  resultSpeed: 'Скорость Звука',
  resultSplLoss: 'Затухание SPL',
  phaseStatusLabel: 'Статус Фазового Согласования',
  statusDirectZone: 'Синхронизация Прямой Волны',
  statusHaasZone: 'Зона Эффекта Хааса',
  statusEchoZone: 'Зона Заметного Эха',
  statusExtremeZone: 'Критическое Смещение Задержки',
  advicePhaseAligned: 'Сигналы акустически синхронизированы в пределах 5 мс. Требуется минимальная обработка задержки.',
  adviceMinorHaas: 'Звук попадает в зону Хааса (5-35 мс). Естественная локализация остается на главной сцене.',
  adviceHaasDelayNeeded: 'Линии задержки требуется точный временной сдвиг для предотвращения отчетливого эха.',
  adviceCriticalDelayNeeded: 'Высокое смещение задержки. Примените точную задержку сэмплов во избежание гребенчатой фильтрации.',
  unitMeters: 'м',
  unitFeet: 'футы',
  unitCelsius: '°C',
  unitFahrenheit: '°F',
  mainSpeakerLabel: 'Главный PA',
  delaySpeakerLabel: 'Линия Задержки',
  audienceLabel: 'Зона Зрителей',
  haasZoneLegend: 'Зона Хааса (5-35 мс)',
};

const faq: FAQItem[] = [
  {
    question: 'Почему температура воздуха важна при расчете задержки звука?',
    answer: 'Скорость звука в воздухе напрямую зависит от температуры. При 0 градусах Цельсия звук распространяется со скоростью 331.3 м/с, а при 30 градусах увеличивается до 349 м/с.',
  },
];

const howTo: HowToStep[] = [
  {
    name: 'Измерьте Физическое Расстояние',
    text: 'Измерьте расстояние между портальной системой и линией задержки с помощью лазерного дальномера.',
  },
];

const seo: ToolLocaleContent<AudioDelayUI>['seo'] = [
  {
    type: 'summary',
    title: 'Функции Фазового Согласования Задержки',
    items: [
      'Точный расчет скорости звука на основе температуры и влажности',
      'Мгновенная конвертация в сэмплы цифровой консоли',
      'Оценка зоны эффекта Хааса и фазового согласования',
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

export const content: ToolLocaleContent<AudioDelayUI> = {
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
