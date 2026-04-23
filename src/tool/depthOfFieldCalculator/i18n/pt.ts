import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { DepthOfFieldUI, DepthOfFieldLocaleContent } from '../index';

const slug = 'calculadora-profundidade-de-campo';
const title = 'Calculadora de Profundidade de Campo: DoF em Tempo Real';
const description = 'Calcule a profundidade de campo, distância hiperfocal e limites de foco em tempo real. Compatível com todos os sensores com precisão de 1/3 de stop.';

const ui: DepthOfFieldUI = {
    title: 'Profundidade de Campo',
    paramsTitle: 'Parâmetros',
    sensorLabel: 'Sensor da Câmara',
    moreLabel: 'Mais sensores…',
    apertureLabel: 'Abertura',
    focalLabel: 'Distância Focal',
    distanceLabel: 'Distância do Sujeito',
    metersLabel: 'm',
    feetLabel: 'ft',
    resultsTitle: 'Resultados',
    totalDofLabel: 'Profundidade de Campo Total',
    infiniteLabel: 'Infinito',
    nearLimitLabel: 'Limite Próximo',
    farLimitLabel: 'Limite Distante',
    hyperfocalLabel: 'Hiperfocal',
    cocLabel: 'Círculo de Confusão',
    cocUnit: 'mm',
    showDetailsLabel: 'Mostrar detalhes técnicos',
    hideDetailsLabel: 'Ocultar detalhes técnicos',
    errorBelowFocal: 'A distância do sujeito deve ser superior à distância focal.',
};

const faq: DepthOfFieldLocaleContent['faq'] = [
    {
        question: 'O que é a profundidade de campo?',
        answer: 'A profundidade de campo (DoF) é o intervalo de distância numa cena que aparece aceitavelmente nítido na imagem final. É determinada pela abertura, distância focal, distância do sujeito e tamanho do sensor.',
    },
    {
        question: 'O que é a distância hiperfocal?',
        answer: 'A distância hiperfocal é a distância de focagem mais próxima para a qual os objetos no infinito ainda estão aceitavelmente nítidos. Focar nesta distância maximiza a profundidade de campo.',
    },
    {
        question: 'Porque é que uma abertura maior reduz a DoF?',
        answer: 'Uma abertura mais ampla recolhe luz sobre uma área maior da lente, o que aumenta o tamanho do círculo de confusão para os pontos fora de foco, estreitando a zona de nitidez.',
    },
    {
        question: 'Como é que o tamanho do sensor afeta a profundidade de campo?',
        answer: 'Sensores maiores usam um limiar de círculo de confusão maior. No entanto, para campos de visão equivalentes, sensores maiores produzem DoF mais rasa porque exigem distâncias focais mais longas.',
    },
];

const howTo: DepthOfFieldLocaleContent['howTo'] = [
    {
        name: 'Selecione o sensor da sua câmara',
        text: 'Escolha o formato de sensor que corresponde ao corpo da sua câmara. Isto define o valor do círculo de confusão (CoC) usado nos cálculos.',
    },
    {
        name: 'Defina a abertura e focal',
        text: 'Escolha um f-stop em incrementos de 1/3. O seletor de distância focal usa uma escala logarítmica para maior precisão em grande angular.',
    },
    {
        name: 'Ajuste a distância do sujeito',
        text: 'Defina a distância entre a câmara e o sujeito principal. Alterne entre metros e pés conforme necessário.',
    },
    {
        name: 'Consulte os resultados',
        text: 'A barra de focagem visualiza a zona nítida. Os limites próximo e distante mostram as fronteiras exatas da focagem aceitável.',
    },
];

const seo: DepthOfFieldLocaleContent['seo'] = [
    { type: 'title', text: 'Compreender a Profundidade de Campo em Fotografia e Cinema', level: 2 },
    { type: 'paragraph', html: 'A profundidade de campo é uma das ferramentas criativas mais poderosas. Uma <strong>profundidade de campo rasa</strong> isola os sujeitos, enquanto uma <strong>profundidade de campo ampla</strong> mantém toda a paisagem nítida. Esta calculadora dá-lhe o controlo total.' },

    { type: 'title', text: 'As Três Variáveis que Controlam a DoF', level: 3 },
    { type: 'table', headers: ['Variável', 'Aumento →', 'Efeito na DoF'], rows: [
        ['Abertura', 'f/1.4 → f/16', 'Abertura maior = DoF mais rasa'],
        ['Distância Focal', '24mm → 200mm', 'Focal mais longa = DoF mais rasa à mesma distância'],
        ['Distância Sujeito', '1m → 10m', 'Sujeito mais longe = DoF mais ampla'],
    ]},

    { type: 'title', text: 'A Distância Hiperfocal: Nitidez Máxima', level: 3 },
    { type: 'paragraph', html: 'Ao focar na <strong>distância hiperfocal</strong>, tudo desde metade dessa distância até ao infinito parecerá nítido. Ideal para fotografia de paisagem.' },
    { type: 'tip', title: 'Dica prática', html: 'Para fotografia de rua, defina o foco para a distância hiperfocal. Com uma lente de 35mm em APS-C a f/8, a hiperfocal é aprox. <strong>4 metros</strong>: tudo de 2m ao infinito ficará nítido.' },

    { type: 'title', text: 'Tamanho do Sensor e Círculo de Confusão', level: 3 },
    { type: 'paragraph', html: 'O <strong>círculo de confusão (CoC)</strong> define a nitidez aceitável. Um sensor Full Frame tem um CoC de 0,030 mm; um smartphone usa ~0,006 mm. CoC menores significam critérios de nitidez mais rigorosos.' },
    { type: 'stats', columns: 3, items: [
        { label: 'Full Frame', value: '0,030 mm', icon: 'mdi:camera' },
        { label: 'APS-C', value: '0,019 mm', icon: 'mdi:camera-outline' },
        { label: 'Smartphone', value: '0,006 mm', icon: 'mdi:cellphone' },
    ]},

    { type: 'title', text: 'DoF no Cinema: Focal vs. Sensor', level: 3 },
    { type: 'paragraph', html: 'Filmar em Super 35 exige frequentemente focais mais longas para comprimir a perspetiva, criando o "look cinematográfico". Um 85mm luminoso é a escolha clássica para retrato.' },
    { type: 'diagnostic', variant: 'success', title: 'A Regra de Distribuição do Foco', icon: 'mdi:lightbulb-outline', badge: 'Técnica Pro', html: 'Para um sujeito a 3m com uma 50mm a f/2.8 : a zona nítida atrás do sujeito é sempre maior do que à frente – aprox. na <strong>proporção 2:1</strong>.' },
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
