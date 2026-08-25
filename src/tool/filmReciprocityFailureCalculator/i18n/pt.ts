import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { FAQItem, HowToStep, ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';
import type { FilmReciprocityFailureCalculatorUI } from '../ui';

const slug = 'calculadora-falha-reciprocidade-filme-fotografico';
const title = 'Calculadora de Falha de Reciprocidade em Filme Fotográfico';
const description = 'Corrija exposições longas em fotografia analógica com os fatores oficiais de filmes ILFORD e KENTMERE.';

const ui: FilmReciprocityFailureCalculatorUI = {
  faqTitle: 'Perguntas sobre a falha de reciprocidade em filme',
  bibliographyTitle: 'Fontes',
  studyLabel: 'Estudo de exposição longa',
  studyTitle: 'Dê tempo à emulsão',
  studyText: 'O fotómetro mede a luz instantânea. A emulsão necessita de mais tempo para formar a mesma densidade.',
  filmLabel: 'Escolha um filme fotográfico',
  filmHint: 'Utilize o fator oficial publicado para o filme ILFORD ou KENTMERE selecionado.',
  measuredTimeLabel: 'Introduza o tempo do fotómetro',
  measuredTimeHint: 'A correção aplica-se a exposições superiores a 1 segundo.',
  secondsUnit: 'segundos',
  filmMenuLabel: 'Menu de filmes',
  presetsLabel: 'Predefinições de campo',
  presetShort: 'Limite de reciprocidade',
  presetNight: 'Rua noturna',
  presetDeepNight: 'Noite profunda',
  resultLabel: 'Exposição corrigida',
  correctedTimeLabel: 'Tempo final recomendado',
  addedTimeLabel: 'Tempo Adicional',
  correctionStopsLabel: 'Aumento em stops (EV)',
  correctionFactorLabel: 'Fator do filme',
  noCorrection: 'Sem necessidade de correção',
  correctionNeeded: 'Correção de reciprocidade ativa',
  longExposure: 'Zona de exposição longa',
  meterTimeLabel: 'Leitura fotómetro',
  filmTimeLabel: 'Tempo ajustado',
  exposurePathLabel: 'Evolução visual da exposição',
  exposurePathText: 'A tira de filme aumenta gradualmente do tempo medido até ao tempo corrigido.',
  formulaLabel: 'Fórmula de cálculo',
  formulaText: 'Tempo corrigido = tempo medido elevado à potência do fator do filme.',
  manufacturerNote: 'Fatores provenientes da documentação técnica da HARMAN. Utilize o resultado como ponto de partida.',
  resetLabel: 'Reiniciar cálculo',
  invalidTime: 'Introduza um tempo superior a zero.',
  sourceLabel: 'Nota do fabricante',
};

const faq: FAQItem[] = [
  {
    question: 'O que é a falha de reciprocidade em fotografia analógica?',
    answer: 'A falha de reciprocidade (efeito Schwarzschild) é a perda de sensibilidade do filme durante exposições longas. A mesma luz recebida em maior tempo produz menor densidade do que a prevista pelo fotómetro.',
  },
  {
    question: 'Como calcula a ferramenta o tempo corrigido?',
    answer: 'Aplica a fórmula oficial da HARMAN: tempo corrigido (Tc) igual ao tempo medido (Tm) elevado à potência do fator P. Exposições de 1 segundo ou menos não sofrem alteração.',
  },
  {
    question: 'Por que razão cada filme tem um fator diferente?',
    answer: 'A resposta dos cristais de halogéneo de prata varia conforme a emulsão. A HARMAN publica um fator específico para HP5+, FP4+, DELTA e KENTMERE.',
  },
  {
    question: 'O tempo calculado garante um negativo perfeito?',
    answer: 'Não. Em exposições muito longas intervêm outras variáveis como a precisão da medição, o contraste da cena e a revelação. Utilize o resultado como ótima referência e faça bracketing.',
  },
];

const howTo: HowToStep[] = [
  { name: 'Selecione o filme', text: 'Escolha o filme carregado na câmara para aplicar o seu fator oficial.' },
  { name: 'Introduza o tempo medido', text: 'Escreva os segundos indicados pelo fotómetro.' },
  { name: 'Consulte a exposição ajustada', text: 'Defina a velocidade do obturador para o novo tempo corrigido.' },
  { name: 'Faça bracketing de exposição', text: 'Em fotografias noturnas longas, faça exposições adicionais em redor do tempo calculado.' },
];

const seo: ToolLocaleContent<FilmReciprocityFailureCalculatorUI>['seo'] = [
  {
    type: 'summary',
    title: 'Correção documentada para exposição longa',
    items: [
      'Aplica o fator oficial para 11 filmes a preto e branco ILFORD e KENTMERE',
      'Compara a leitura do fotómetro com o tempo real necessário pela emulsão',
      'Mostra os segundos extra, a compensação em stops EV e a representação visual',
      'Inclui três predefinições práticas para facilitar fotos noturnas',
    ],
  },
  { type: 'title', text: 'Por que motivo a exposição longa exige corrigir a reciprocidade', level: 2 },
  {
    type: 'paragraph',
    html: 'Em velocidades de obturador normais, a lei da reciprocidade indica que a exposição é o produto da intensidade da luz pelo tempo. Em exposições longas, a emulsão perde eficiência na formação da imagem latente. O fotómetro indica um tempo fisicamente correto mas quimicamente insuficiente.',
  },
  { type: 'title', text: 'A fórmula do fabricante utilizada no cálculo', level: 2 },
  {
    type: 'table',
    headers: ['Filme', 'Fator oficial', 'Exemplo a 10 segundos'],
    rows: [
      ['ILFORD HP5+', '1.31', '20.4 segundos'],
      ['ILFORD FP4+', '1.26', '18.2 segundos'],
      ['ILFORD SFX 200', '1.43', '26.9 segundos'],
      ['KENTMERE 400', '1.30', '20.0 segundos'],
    ],
  },
  {
    type: 'paragraph',
    html: 'A calculadora utiliza Tc = Tm<sup>P</sup>, onde Tm é o tempo medido em segundos, Tc o tempo corrigido e P o fator publicado pela HARMAN. Até 1 segundo não é necessária compensação.',
  },
  {
    type: 'tip',
    title: 'Utilize o resultado como ponto de partida',
    html: 'Exposições prolongadas dependem de várias variáveis. O contraste da cena e a revelação influenciam a densidade final. Faça bracketing em enquadramentos importantes.',
  },
  { type: 'title', text: 'Quando aplicar a correção de reciprocidade', level: 2 },
  {
    type: 'list',
    items: [
      '<strong>Utilize fatores oficiais:</strong> Faça corresponder a emulsão aos dados divulgados pelo fabricante.',
      '<strong>Mantenha um processo constante:</strong> A revelação e a agitação alteram a densidade do negativo.',
      '<strong>Faça bracketing em exposições longas:</strong> Quanto maior for o tempo, mais úteis são os testes práticos.',
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
  inLanguage: 'pt',
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
