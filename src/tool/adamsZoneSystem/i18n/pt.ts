import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { FAQItem, HowToStep, ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';
import type { AdamsZoneSystemUI } from '../ui';

const slug = 'visualizador-sistema-de-zonas-ansel-adams-zonas-exposicao';
const title = 'Visualizador do Sistema de Zonas Ansel Adams Zonas Exposicao';
const description = 'Explore da Zona 0 a IX, posicione um tom medido com mudanças de stop exatas e conecte decisões de exposição com revelação normal, N menos e N mais.';

const ui: AdamsZoneSystemUI = {
  faqTitle: 'Perguntas sobre o Sistema de Zonas',
  bibliographyTitle: 'Fontes',
  orientationTitle: 'Colocação de zonas',
  orientationText: 'Escolha o tom medido na cena, selecione a zona onde deseja posicioná-lo e use a diferença de stops como instrução de exposição. A nota de revelação ajuda a proteger as luzes ou a abrir as sombras.',
  measuredToneLabel: 'Tom medido na cena',
  targetPlacementLabel: 'Posicionar esse tom em',
  developmentLabel: 'Intenção de revelação',
  normalDevelopment: 'Normal',
  minusDevelopment: 'N menos',
  plusDevelopment: 'N mais',
  presetsLabel: 'Começar com uma nota de campo',
  presetShadow: 'Sombra com textura',
  presetSkin: 'Pele clara',
  presetSnow: 'Neve ao sol',
  presetNight: 'Sombra noturna',
  zoneStripLabel: 'Faixa de zonas do preto ao branco',
  meterBaselineLabel: 'Referência do fotômetro: Zona V',
  selectedToneLabel: 'Tom medido',
  placementResultLabel: 'Resultado da colocação',
  exposureShiftLabel: 'Deslocamento de exposição em relação ao cinza médio',
  tonalDistanceLabel: 'Distância a partir do tom medido',
  luminanceLabel: 'Luminância relativa',
  stopsFromMiddleLabel: 'Stops a partir da Zona V',
  developmentAdviceLabel: 'Leitura do negativo',
  techniqueLabel: 'Direção de laboratório',
  resetLabel: 'Restaurar exemplo',
  meterAssumption: 'Um fotômetro de luz refletida coloca qualquer leitura no cinza médio da Zona V a menos que você aplique compensação.',
  zonePrefix: 'Zona',
  zoneNames: 'Preto puro|Quase preto|Sombra profunda|Sombra com textura|Tom médio escuro|Cinza médio|Tom médio claro|Luzes com textura|Luzes brilhantes|Quase branco',
  zoneDescriptions: 'Preto máximo sem textura visível.|Primeira separação do preto sem textura perceptível.|Primeiro sinal de textura na sombra escura importante.|Textura útil em sombras e ponto de ancoragem habitual.|Sombra aberta e folhagem escura com forma clara.|Ponto de referência neutro do fotômetro.|Pele clara, pedra desgastada e folhagem brilhante.|Textura brilhante que deve permanecer imprimível.|Tom muito brilhante com pouca textura restante.|Quase branco puro com apenas um traço de separação.',
  increaseExposure: 'Abra a exposição no valor indicado para elevar a leitura até a zona escolhida.',
  decreaseExposure: 'Reduza a exposição no valor indicado para manter a leitura na zona escolhida.',
  holdExposure: 'Mantenha a leitura do fotômetro sem alteração porque o objetivo é a Zona V.',
  protectHighlights: 'Controle de luzes',
  openShadows: 'Separação de sombras',
  balancedPlacement: 'Colocação equilibrada',
  normalAdvice: 'A revelação normal mantém o contraste da cena próximo do intervalo medido.',
  minusAdvice: 'A revelação N menos comprime um intervalo brilhante e mantém as luzes imprimíveis.',
  plusAdvice: 'A revelação N mais expande um intervalo estreito e dá maior separação às sombras importantes.',
};

const faq: FAQItem[] = [
  {
    question: 'O que mede o Sistema de Zonas?',
    answer: 'O Sistema de Zonas é um método para visualizar e controlar a gama tonal de uma fotografia desde o preto profundo até o branco brilhante. Ele conecta a luminância medida à zona final e às decisões de laboratório.',
  },
  {
    question: 'Por que o fotômetro começa na Zona V?',
    answer: 'Um fotômetro de luz refletida é calibrado para considerar sua leitura média como um cinza médio neutro. Para manter uma sombra escura ou um elemento claro brilhante, é preciso compensar a leitura.',
  },
  {
    question: 'Quantos stops separam as zonas?',
    answer: 'As zonas inteiras adjacentes estão separadas por um stop completo. Mover-se da Zona V para a Zona VII requer dois stops a mais de exposição.',
  },
  {
    question: 'O que significam N menos e N mais?',
    answer: 'São ajustes de revelação usados para gerenciar o contraste da cena. N menos reduz o contraste do negativo para sujeitos de alto contraste, enquanto N mais aumenta o contraste para sujeitos planos.',
  },
];

const howTo: HowToStep[] = [
  { name: 'Escolher o tom medido', text: 'Selecione a zona que melhor descreve o ponto medido com o fotômetro.' },
  { name: 'Selecionar a colocação final', text: 'Toque na zona onde deseja que esse tom apareça no negativo ou na impressão.' },
  { name: 'Aplicar a mudança de exposição', text: 'Use a diferença em stops para decidir se deve abrir ou fechar o diafragma.' },
  { name: 'Ajustar a intenção de revelação', text: 'Use a recomendação de revelação para orientar o tempo no laboratório.' },
];

const seo: ToolLocaleContent<AdamsZoneSystemUI>['seo'] = [
  {
    type: 'summary',
    title: 'Guia visual do Sistema de Zonas no campo',
    items: [
      'Explore cada tom da Zona 0 à Zona IX em uma escala graduada legível',
      'Traduza a colocação desejada em uma mudança de stops precisa a partir da Zona V',
      'Compare o tom medido com o tom que deseja preservar na cópia final',
      'Utilize N menos, normal e N mais para controlar o contraste com precisão',
    ],
  },
  { type: 'title', text: 'Como funciona o Sistema de Zonas de Ansel Adams', level: 2 },
  {
    type: 'paragraph',
    html: 'O Sistema de Zonas converte um intervalo contínuo de luminância em dez zonas de referência. A Zona V representa o cinza médio do fotômetro.',
  },
  { type: 'title', text: 'Leitura de exposição na faixa de zonas', level: 2 },
  {
    type: 'table',
    headers: ['Colocação', 'Significado visual', 'Ação no fotômetro'],
    rows: [
      ['Zona II', 'Sombra profunda com textura quase imperceptível', 'Reduzir exposição em 3 stops a partir da Zona V'],
      ['Zona III', 'Textura importante em sombras', 'Reduzir exposição em 2 stops a partir da Zona V'],
      ['Zona V', 'Referência neutra de cinza médio', 'Manter a leitura do fotômetro sem alteração'],
      ['Zona VI', 'Tom médio claro como pele clara', 'Aumentar exposição em 1 stop a partir da Zona V'],
      ['Zona VII', 'Textura brilhante a preservar', 'Aumentar exposição em 2 stops a partir da Zona V'],
    ],
  },
  {
    type: 'tip',
    title: 'Use a colocação para tomar decisões criativas',
    html: 'Não interprete a leitura do fotômetro como uma obrigação de transformar tudo em cinza. Escolha o tom principal e posicione-o deliberadamente.',
  },
  { type: 'title', text: 'Quando a revelação altera o contraste', level: 2 },
  {
    type: 'list',
    items: [
      '<strong>Revelação normal:</strong> Mantém o contraste do sujeito dentro dos padrões normais do negativo.',
      '<strong>Revelação N menos:</strong> Comprime um sujeito de alto contraste para evitar que as luzes estourem.',
      '<strong>Revelação N mais:</strong> Expande um sujeito plano para separar melhor as sombras.',
    ],
  },
  {
    type: 'glossary',
    items: [
      { term: 'Zona', definition: 'Intervalo tonal de referência separado do próximo por um stop de exposição.' },
      { term: 'Colocação', definition: 'Escolha deliberada da zona final em que um tom medido deve aparecer.' },
      { term: 'Cinza médio', definition: 'Referência neutra da Zona V utilizada pelos fotômetros de luz refletida.' },
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
  inLanguage: 'pt',
};

export const content: ToolLocaleContent<AdamsZoneSystemUI> = {
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
