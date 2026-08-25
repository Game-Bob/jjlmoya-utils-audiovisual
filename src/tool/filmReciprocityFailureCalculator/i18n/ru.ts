import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { FAQItem, HowToStep, ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';
import type { FilmReciprocityFailureCalculatorUI } from '../ui';

const slug = 'kalkulyator-effekta-shvarczshilda-fotoplenka';
const title = 'Калькулятор Эффекта Шварцшильда (Невзаимозаместимость Пленки)';
const description = 'Корректируйте выдержку при длительных экспозициях на фотопленку по официальным коэффициентам ILFORD и KENTMERE.';

const ui: FilmReciprocityFailureCalculatorUI = {
  faqTitle: 'Вопросы об эффекте Шварцшильда в фотопленке',
  bibliographyTitle: 'Источники',
  studyLabel: 'Расчет длительной экспозиции',
  studyTitle: 'Дайте фотоэмульсии время',
  studyText: 'Экспонометр мгновенно замеряет падающий свет. Эмульсии требуется больше времени для формирования той же плотности.',
  filmLabel: 'Выберите тип фотопленки',
  filmHint: 'Используйте официальный коэффициент для выбранной фотопленки ILFORD или KENTMERE.',
  measuredTimeLabel: 'Введите выдержку экспонометра',
  measuredTimeHint: 'Корректировка применяется к выдержкам более 1 секунды.',
  secondsUnit: 'секунд',
  filmMenuLabel: 'Меню фотопленок',
  presetsLabel: 'Быстрые настройки',
  presetShort: 'Порог эффекта',
  presetNight: 'Ночная улица',
  presetDeepNight: 'Глубокая ночь',
  resultLabel: 'Скорректированная выдержка',
  correctedTimeLabel: 'Итоговая рекомендуемая выдержка',
  addedTimeLabel: 'Дополнительное время',
  correctionStopsLabel: 'Поправка в ступенях (EV)',
  correctionFactorLabel: 'Коэффициент пленки',
  noCorrection: 'Корректировка не требуется',
  correctionNeeded: 'Эффект Шварцшильда учитывается',
  longExposure: 'Область длительных выдержек',
  meterTimeLabel: 'Замер экспонометра',
  filmTimeLabel: 'Расчетное время',
  exposurePathLabel: 'Визуализация длительности выдержки',
  exposurePathText: 'Шкала визуально удлиняется от начального замера экспонометра до итогового времени.',
  formulaLabel: 'Формула расчета',
  formulaText: 'Скорректированное время = время замера в степени коэффициента пленки.',
  manufacturerNote: 'Коэффициенты взяты из официальной документации HARMAN. Используйте результат как точку отсчета.',
  resetLabel: 'Сбросить расчет',
  invalidTime: 'Введите значение выдержки больше нуля.',
  sourceLabel: 'Примечание производителя',
};

const faq: FAQItem[] = [
  {
    question: 'Что такое эффект Шварцшильда (нарушение взаимозаместимости)?',
    answer: 'Эффект Шварцшильда - это снижение эффективной светочувствительности пленки при длительных выдержках. Тот же объем света, полученный за долгое время, дает меньшую плотность негатива, чем показывает экспонометр.',
  },
  {
    question: 'Как калькулятор рассчитывает скорректированное время?',
    answer: 'Применяется формула HARMAN: скорректированное время (Tc) равно замеру (Tm) в степени P. Выдержки до 1 секунды включительно не требуют поправки.',
  },
  {
    question: 'Почему у каждой пленки свой коэффициент поправки?',
    answer: 'Эффективность галогенидов серебра различается в зависимости от эмульсии. HARMAN публикует индивидуальные коэффициенты для HP5+, FP4+, DELTA и KENTMERE.',
  },
  {
    question: 'Гарантирует ли расчетное время идеальный негатив?',
    answer: 'Нет. При очень длинных выдержках влияют погрешности экспонометра, контраст сюжета и условия проявки. Используйте расчет как ориентир и делайте экспозиционную вилку (брекетинг).',
  },
];

const howTo: HowToStep[] = [
  { name: 'Выберите фотопленку', text: 'Укажите пленку в камере для применения ее официального коэффициента.' },
  { name: 'Введите замер экспонометра', text: 'Введите значение выдержки в секундах.' },
  { name: 'Считайте скорректированную выдержку', text: 'Установите выдержку затвора на вычисленное значение.' },
  { name: 'Сделайте брекетинг', text: 'При очень длинных ночных съемках сделайте несколько кадров с небольшим отклонением.' },
];

const seo: ToolLocaleContent<FilmReciprocityFailureCalculatorUI>['seo'] = [
  {
    type: 'summary',
    title: 'Подтвержденная поправка для длительных выдержек',
    items: [
      'Применяет официальный коэффициент для 11 черно-белых фотопленок ILFORD и KENTMERE',
      'Сравнивает замер экспонометра с реальным временем, необходимым фотоэмульсии',
      'Показывает добавочное время, поправку в ступенях EV и визуальную шкалу',
      'Содержит три готовых пресета для упрощения ночной съемки',
    ],
  },
  { type: 'title', text: 'Почему длительные выдержки требуют поправки Шварцшильда', level: 2 },
  {
    type: 'paragraph',
    html: 'При стандартных выдержках работает закон взаимозаместимости (экспозиция = освещенность x время). При длинных выдержках эмульсия теряет эффективность формирования центров скрытого изображения. Экспонометр показывает физически верное, но химически недостаточное время.',
  },
  { type: 'title', text: 'Формула производителя в основе расчета', level: 2 },
  {
    type: 'table',
    headers: ['Фотопленка', 'Официальный коэффициент', 'Пример при 10 секундах'],
    rows: [
      ['ILFORD HP5+', '1.31', '20.4 секунды'],
      ['ILFORD FP4+', '1.26', '18.2 секунды'],
      ['ILFORD SFX 200', '1.43', '26.9 секунды'],
      ['KENTMERE 400', '1.30', '20.0 секунд'],
    ],
  },
  {
    type: 'paragraph',
    html: 'Калькулятор использует Tc = Tm<sup>P</sup>, где Tm - время в секундах, Tc - итоговое время, а P - коэффициент HARMAN. До 1 секунды поправка не требуется.',
  },
  {
    type: 'tip',
    title: 'Используйте результат как стартовую точку',
    html: 'Длительные выдержки зависят от множества факторов. Ошибки экспонометрии, контраст кадра и режим проявки меняют плотность негатива. Для ответственных кадров делайте вилку выдержек.',
  },
  { type: 'title', text: 'Когда применять поправку на эффект Шварцшильда', level: 2 },
  {
    type: 'list',
    items: [
      '<strong>Используйте официальные данные:</strong> Сверяйте фотопленку со спецификациями производителя.',
      '<strong>Соблюдайте режим проявки:</strong> Проявитель и агитация влияют на итоговый контраст негатива.',
      '<strong>Делайте брекетинг на длинных выдержках:</strong> Чем длиннее выдержка, тем полезнее пробные кадры.',
    ],
  },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })),
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howTo.map((step) => ({ '@type': 'HowToStep', name: step.name, text: step.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'PhotographyApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'ru',
};

export const content: ToolLocaleContent<FilmReciprocityFailureCalculatorUI> = {
  slug,
  title,
  description,
  ui,
  seo,
  faq,
  bibliography,
  howTo,
  schemas: [appSchema, faqSchema, howToSchema],
};
