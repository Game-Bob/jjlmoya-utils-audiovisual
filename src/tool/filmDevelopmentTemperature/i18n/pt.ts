import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { FilmDevelopmentTemperatureUI } from '../ui';
import { bibliography } from '../bibliography';

const ui: FilmDevelopmentTemperatureUI = {
  faqTitle: 'Perguntas sobre temperatura de revelação de filme',
  bibliographyTitle: 'Referências principais',
  chooseDocumentedCombination: 'Escolha uma combinação documentada de filme e revelador',
  filmLabel: 'Filme fotográfico',
  developerLabel: 'Revelador',
  dilutionLabel: 'Diluição',
  temperatureLabel: 'Temperatura do revelador',
  temperatureHelp: 'Introduza a temperatura do revelador no tanque. O guia parte do tempo documentado a 20 °C.',
  unitSwitchLabel: 'Unidade de temperatura',
  metricLabel: 'Métrico °C',
  imperialLabel: 'Imperial °F',
  currentReadingLabel: 'Leitura no laboratório',
  baseTimeLabel: 'A 20 °C',
  adjustedTimeLabel: 'Tempo inicial ajustado',
  temperatureGuideLabel: 'Notas de temperatura de campo',
  temperatureGuideHelp: 'Guia prático em torno da temperatura medida. A linha destacada corresponde à sua leitura.',
  sourceLabel: 'Combinação documentada',
  eiLabel: 'Ajuste do fotómetro',
  statusCool: 'Banho mais frio',
  statusSteady: 'Próximo do padrão',
  statusWarm: 'Banho mais quente',
  warningShortTime: 'Menos de 5 minutos aumenta o risco de revelação irregular. Escolha um processo documentado ou aumente o tempo apenas com testes próprios.',
  warningOutOfRange: 'Esta medida está no limite do intervalo recomendado. Mantenha a temperatura estável e verifique os dados do fabricante.',
  guideNotice: 'Esta é uma referência inicial, não uma garantia. A agitação, o equipamento, o contraste pretendido e o seu processo alteram o resultado.',
  resetLabel: 'Restaurar a primeira combinação documentada',
  minutesLabel: 'min',
  secondsLabel: 'seg',
  currentBadge: 'Atual',
  belowFiveMinutes: 'Menos de 5 minutos',
  tableTemperature: 'Temperatura',
  tableTime: 'Tempo guia',
  tableDifference: 'Diferença para 20 °C',
  currentRow: 'Atual',
};

const softwareApplication: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Calculadora de Tempo de Revelação de Filme por Temperatura',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  description: 'Ajuste o tempo de revelação de filme a preto e branco de acordo com a temperatura medida do revelador.',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
};

const faqPage: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Qual é a temperatura de base utilizada pela calculadora?', acceptedAnswer: { '@type': 'Answer', text: 'Cada combinação parte do tempo oficial do fabricante especificado a 20 °C e ajusta-o conforme a temperatura real.' } },
    { '@type': 'Question', name: 'Os tempos ajustados são garantidos?', acceptedAnswer: { '@type': 'Answer', text: 'Não. São referências práticas iniciais. A agitação, o tipo de tanque, a conservação do revelador e o contraste desejado alteram o resultado.' } },
    { '@type': 'Question', name: 'Por que motivo existe um aviso para tempos inferiores a 5 minutos?', acceptedAnswer: { '@type': 'Answer', text: 'Tempos de revelação muito curtos deixam pouca margem para encher, agitar e esvaziar o tanque, aumentando o risco de revelação irregular.' } },
    { '@type': 'Question', name: 'O que devo fazer se o meu filme ou revelador não estiverem na lista?', acceptedAnswer: { '@type': 'Answer', text: 'Consulte a ficha técnica oficial do fabricante ou uma tabela de revelação reconhecida. Esta ferramenta não inventa dados não documentados.' } },
  ],
};

const howTo: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Como ajustar o tempo de revelação de filme por temperatura',
  step: [
    { '@type': 'HowToStep', name: 'Selecione o filme', text: 'Escolha o tipo de filme a preto e branco carregado no seu tanque.' },
    { '@type': 'HowToStep', name: 'Combine o revelador e a diluição', text: 'Selecione o revelador oficial e a diluição exata indicados na tabela.' },
    { '@type': 'HowToStep', name: 'Meça a temperatura', text: 'Meça e introduza a temperatura real da solução de revelador.' },
    { '@type': 'HowToStep', name: 'Aplique o tempo ajustado', text: 'Utilize o tempo calculado como ponto de partida prático para o seu trabalho de laboratório.' },
  ],
};

export const content: ToolLocaleContent<FilmDevelopmentTemperatureUI> = {
  slug: 'calculadora-tempo-revelacao-filme-temperatura',
  title: 'Calculadora de Tempo de Revelação de Filme por Temperatura',
  description: 'Ajuste o tempo de revelação de filme a preto e branco de acordo com a temperatura medida do revelador, com uma tabela clara.',
  ui,
  seo: [
    { type: 'title', level: 2, text: 'Como compensar o tempo de revelação de filme segundo a temperatura' },
    { type: 'paragraph', html: 'Selecione a combinação exata de filme, revelador e diluição documentada na tabela, e insira a temperatura medida da solução de trabalho. A calculadora toma como base o tempo oficial a 20 °C e estabelece o tempo inicial ajustado.' },
    { type: 'title', level: 3, text: 'Interprete o resultado como um ponto de partida seguro' },
    { type: 'paragraph', html: 'A temperatura altera a atividade química: uma solução mais quente exige menos tempo, enquanto uma solução mais fria exige uma duração maior. A tabela de referência evidencia a tendência temporal em torno da sua medição.' },
    { type: 'tip', title: 'Mantenha a consistência no laboratório fotográfico', html: 'Não considere um tempo calculado como uma verdade absoluta. O ritmo de agitação, o formato do tanque, o estado do revelador e os seus próprios testes são essenciais.' },
    { type: 'title', level: 3, text: 'A importância de utilizar combinações oficiais comprovadas' },
    { type: 'list', items: ['A combinação de filme e revelador define o grão, a nitidez e a sensibilidade efetiva.', 'A diluição altera o ritmo de esgotamento da química e não pode ser estimada arbitrariamente.', 'Tempos inferiores a 5 minutos requerem atenção redobrada devido ao tempo gasto a encher e esvaziar o tanque.'] },
  ],
  faq: [
    { question: 'Qual é a temperatura de base utilizada pela calculadora?', answer: 'Cada combinação parte do tempo oficial do fabricante especificado a 20 °C e ajusta-o conforme a temperatura real.' },
    { question: 'Os tempos ajustados são garantidos?', answer: 'Não. São referências práticas iniciais. A agitação, o tipo de tanque, a conservação do revelador e o contraste desejado alteram o resultado.' },
    { question: 'Por que motivo existe um aviso para tempos inferiores a 5 minutos?', answer: 'Tempos de revelação muito curtos deixam pouca margem para encher, agitar e esvaziar o tanque, aumentando o risco de revelação irregular.' },
    { question: 'O que devo fazer se o meu filme ou revelador não estiverem na lista?', answer: 'Consulte a ficha técnica oficial do fabricante ou uma tabela de revelação reconhecida. Esta ferramenta não inventa dados não documentados.' },
  ],
  bibliography,
  howTo: [
    { name: 'Selecione o filme', text: 'Escolha o tipo de filme a preto e branco carregado no seu tanque.' },
    { name: 'Combine o revelador e a diluição', text: 'Selecione o revelador oficial e a diluição exata indicados na tabela.' },
    { name: 'Meça a temperatura', text: 'Meça e introduza a temperatura real da solução de revelador.' },
    { name: 'Aplique o tempo ajustado', text: 'Utilize o tempo calculado como ponto de partida prático para o seu trabalho de laboratório.' },
  ],
  schemas: [softwareApplication, faqPage, howTo],
};
