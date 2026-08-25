import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { EquivalentExposureUI } from '../ui';
import type { ToolLocaleContent, FAQItem, HowToStep } from '../../../types';

const slug = 'calculadora-exposicao-equivalente';
const title = 'Calculadora de Exposição Equivalente Triângulo de Exposição';
const description = 'Calcule as configurações equivalentes de abertura, velocidade de obturador e ISO para manter o valor EV constante.';

const ui: EquivalentExposureUI = {
  "title": "Calculadora de Exposição Equivalente",
  "subtitle": "Calcule os parâmetros recíprocos de abertura, velocidade e ISO para manter um valor de exposição constante.",
  "baseSettingsTitle": "Configuração de Exposição Base",
  "targetSettingsTitle": "Configuração Equivalente Alvo",
  "lockModeLabel": "Calcular Automaticamente",
  "isoLabel": "Sensibilidade ISO",
  "apertureLabel": "Abertura (stop f)",
  "shutterLabel": "Velocidade do Obturador",
  "lockIsoOption": "Calcular ISO (Manter Abertura e Velocidade)",
  "lockApertureOption": "Calcular Abertura (Manter ISO e Velocidade)",
  "lockShutterOption": "Calcular Velocidade (Manter ISO e Abertura)",
  "presetsTitle": "Predefinições Rápidas",
  "presetSunny16": "Regra do Sol 16",
  "presetOvercast": "Dia Nublado",
  "presetIndoor": "Luz Interior",
  "presetNight": "Fotografia Noturna",
  "targetEvLabel": "EV Alvo"
};

const faq: FAQItem[] = [
  {
    "question": "O que é o Valor de Exposição (EV)?",
    "answer": "O EV é uma escala logarítmica que combina abertura e velocidade a ISO 100. A fórmula é EV = log2(N^2 / t)."
  },
  {
    "question": "Como as exposições equivalentes mantêm o brilho?",
    "answer": "Ao compensar stops entre ISO, velocidade e abertura, a luz captada pelo sensor permanece constante."
  },
  {
    "question": "O que é a regra do Sol 16?",
    "answer": "Em dia ensolarado a f/16, a velocidade do obturador é o inverso do ISO (ex: ISO 100 requer 1/100s)."
  },
  {
    "question": "Como a abertura altera a profundidade de campo?",
    "answer": "Abrir a abertura reduz a profundidade de campo isolando o assunto com um fundo desfocado."
  }
];

const howTo: HowToStep[] = [
  {
    "name": "Selecionar Configurações Base",
    "text": "Escolha os valores base de ISO, abertura e velocidade."
  },
  {
    "name": "Escolher Modo de Cálculo",
    "text": "Selecione a variável a ser calculada automaticamente."
  },
  {
    "name": "Ajustar Parâmetros Criativos",
    "text": "Modifique os valores para ver a reciprocidade instantânea."
  },
  {
    "name": "Avaliar Efeitos Visuais",
    "text": "Inspecione o diagrama vetorial para profundidade e ruído."
  }
];

const seo: ToolLocaleContent<EquivalentExposureUI>['seo'] = [
  {
    type: 'summary',
    title: 'Recursos de Reciprocidade de Exposição',
    items: [
      "Cálculo exato de 1/3 de EV entre ISO, Abertura e Velocidade",
      "Visualizador vetorial dinâmico do Triângulo de Exposição em SVG",
      "Feedback sobre profundidade de campo, movimento e ruído",
      "Predefinições rápidas para Sol 16, Nublado e Noite"
    ],
  },
  { type: 'title', text: 'Compreendendo o Triângulo de Exposição', level: 2 },
  {
    type: 'paragraph',
    html: 'A exposição em fotografia é governada pela interação contínua entre a abertura do diafragma, a velocidade do obturador e a sensibilidade ISO do sensor. Qualquer alteração feita em uma dessas variáveis exige uma compensação recíproca nas outras para manter a quantidade total de luz captada.',
  },
  {
    type: 'stats',
    items: [
      { value: 'EV 15', label: 'Luz Solar Base (Sol 16)', icon: 'mdi:white-balance-sunny' },
      { value: '1/3 EV', label: 'Precisão de Terços de Stop', icon: 'mdi:tune-vertical' },
      { value: '2:1 DOF', label: 'Proporção Padrão de Foco', icon: 'mdi:camera-iris' },
    ],
    columns: 3,
  },
  { type: 'title', text: 'Objetivo Criativo', level: 3 },
  {
    type: 'table',
    headers: [
      "Objetivo Criativo",
      "Ajuste de Abertura",
      "Ajuste de Obturador",
      "Ajuste de ISO",
      "Consequência Visual"
    ],
    rows: [
      [
        "Congelar Ação",
        "Abrir (f/2.8)",
        "Mais rápida (1/1000s)",
        "Manter constante",
        "Menor profundidade de campo"
      ],
      [
        "Nitidez em Paisagem",
        "Fechar (f/11)",
        "Mais lenta (1/30s)",
        "Manter constante",
        "Exige tripé ou apoio"
      ],
      [
        "Pouca Luz à Mão",
        "Abrir ao máximo (f/1.4)",
        "Limite de pulso (1/60s)",
        "Aumentar (ISO 3200)",
        "Maior ruído digital"
      ],
      [
        "Qualidade Estúdio",
        "Abertura ótima (f/8)",
        "Sincro Flash (1/200s)",
        "ISO 100 base",
        "Máxima faixa dinâmica"
      ]
    ],
  },
  { type: 'title', text: 'Impacto Criativo dos Ajustes Equivalentes', level: 3 },
  {
    type: 'paragraph',
    html: 'Embora configurações de exposição equivalentes gerem exatamente o mesmo brilho geral no sensor, a estética e o aspecto visual da imagem final diferem significativamente com base nas escolhas de abertura, velocidade e ISO:',
  },
  {
    type: 'list',
    items: [
      "<strong>Abertura:</strong> Controla a profundidade de campo e o desfoque do fundo. Aberturas grandes criam um efeito bokeh suave.",
      "<strong>Velocidade:</strong> Controla o tempo de exposição e o congelamento ou registro do movimento dos elementos na cena.",
      "<strong>ISO:</strong> Amplifica o sinal elétrico do sensor em baixa luz ao custo de um aumento no ruído digital."
    ],
    icon: 'mdi:check-circle',
  },
  {
    type: 'comparative',
    items: [
      {
        title: 'Configuração Fundo Desfocado',
        description: 'Grande abertura para retratos',
        icon: 'mdi:account-box-outline',
        points: [
          "Abertura f/1.4 a f/2.8",
          "Velocidade rápida",
          "Bokeh suave"
        ],
      },
      {
        title: 'Configuração Paisagem Profunda',
        description: 'Abertura fechada para nitidez total',
        icon: 'mdi:image-filter-hdr',
        points: [
          "Ponto ideal f/8 a f/11",
          "Velocidade lenta no tripé",
          "Máxima resolução"
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
        pro: 'Precisão de terços de stop idêntica aos seletores da câmera',
        con: 'Não considera a falha de reciprocidade em filme ou T-stops',
      },
      {
        pro: 'Visualização SVG dinâmica com status de nitidez',
        con: 'Exige ajuste manual do fator de corte',
      },
    ],
  },
  {
    type: 'glossary',
    items: [
      {
        "term": "Valor de Exposição (EV)",
        "definition": "Escala logarítmica que combina abertura e velocidade."
      },
      {
        "term": "Lei da Reciprocidade",
        "definition": "Princípio de proporcionalidade entre luz e tempo."
      },
      {
        "term": "Stop de Luz",
        "definition": "Unidade relativa equivalente a dobrar ou reduzir à metade a luz."
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
  inLanguage: 'pt',
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
