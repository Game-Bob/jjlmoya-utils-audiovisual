import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { TimelapseUI, TimelapseLocaleContent } from '../index';

const slug = 'calculadora-timelapse-hyperlapse-intervalos-perfeitos';
const title = 'Calculadora de Timelapse e Hyperlapse: Intervalos Perfeitos';
const description = 'Calcule o intervalo exato entre fotos, a duração total e o armazenamento para os seus timelapses. Ferramenta essencial para fotógrafos.';

const ui: TimelapseUI = {
    title: "Calculadora de Timelapse",
    paramsTitle: "Parâmetros",
    eventDuration: "Qual a duração do evento real?",
    hours: "Horas",
    minutes: "Minutos",
    videoDuration: "Que vídeo final deseja?",
    seconds: "Duração (seg)",
    fps: "FPS",
    resultsTitle: "Resultados",
    intervalLabel: "Configure o seu intervalómetro para:",
    secondsUnit: "segundos",
    totalPhotos: "Total de Fotos",
    speed: "Velocidade",
    shutterSpeed: "Velocidade do Obturador",
    storage: "Tamanho (RAW)",
    rule180Info: "A regra dos 180° sugere uma velocidade de obturação de metade do intervalo para uma desfocagem de movimento suave.",
};

const faq: TimelapseLocaleContent['faq'] = [
    {
        question: "Como escolho o intervalo correto para o meu timelapse?",
        answer: "Depende da velocidade do movimento que está a capturar. Para nuvens rápidas, use 2-3 segundos. Para o movimento do sol ou estrelas, 15-30 segundos. Para crescimento de plantas ou obras, 5-15 minutos.",
    },
    {
        question: "Quantas fotos preciso para um vídeo de um minuto?",
        answer: "Um vídeo padrão tem 24 ou 30 fotogramas por segundo (fps). Para um minuto de vídeo a 24fps, precisa de exatamente 1440 fotografias (60 segundos * 24 fotos/segundo).",
    },
    {
        question: "O que é o 'Flicker' e como posso evitá-lo?",
        answer: "É uma oscilação irritante causada por pequenas variações na exposição entre as fotos. Para evitá-lo, use sempre o modo manual (M), balanço de brancos fixo e prefira lentes com anel de abertura manual.",
    },
    {
        question: "Por que a velocidade do obturador é importante?",
        answer: "Para que o movimento pareça fluido (regra dos 180°), a velocidade do obturador deve ser aproximadamente metade do intervalo. Por exemplo, se o intervalo for de 2 segundos, tente disparar a 1 segundo.",
    },
];

const howTo: TimelapseLocaleContent['howTo'] = [
    {
        name: "Defina a duração do vídeo final",
        text: "Indique quantos segundos ou minutos deseja que o vídeo resultante dure (ex: 10 segundos para o Instagram).",
    },
    {
        name: "Selecione os FPS de saída",
        text: "Escolha a fluidez do vídeo: 24 (cinema), 30 (web) ou 60 (slow motion fluido).",
    },
    {
        name: "Ajuste o intervalo de captura",
        text: "Configure de quantos em quantos segundos a sua câmara irá disparar de acordo com a velocidade da cena.",
    },
    {
        name: "Verifique o espaço de armazenamento",
        text: "A calculadora dir lhe á quantos Gigabytes a sessão ocupará. Certifique se de que o seu cartão SD tem espaço suficiente.",
    },
];

const bibliography: TimelapseLocaleContent['bibliography'] = [
    {
        name: "Timescapes Forum - Digital Timelapse Acquisition & Processing",
        url: "https://timescapes.org/phpBB3/viewforum.php?f=4",
    },
    {
        name: "Magic Lantern - Auto ETTR & Bulb Ramping Algorithms",
        url: "https://wiki.magiclantern.fm/ettr",
    },
    {
        name: "LRTimelapse - Visual Deflicker & Holy Grail Workflow",
        url: "https://lrtimelapse.com/tutorial/advanced/",
    },
    {
        name: "PhotoPills - Advanced Timelapse Calculator & NPF Rule",
        url: "https://www.photopills.com/calculators/timelapse",
    },
];

const seo: TimelapseLocaleContent['seo'] = [
    { type: 'title', text: 'Guia Definitivo de Intervalos para Timelapse e Hyperlapse', level: 2 },
    { type: 'paragraph', html: 'A diferença entre um vídeo rápido amador e um <strong>timelapse cinematográfico</strong> reside matematicamente num único fator: <strong>o intervalo</strong>. Esta calculadora elimina as dúvidas, permitindo-lhe planear com precisão as suas capturas.' },
    
    { type: 'title', text: 'Tabela de Intervalos Recomendados (Cheat Sheet)', level: 3 },
    { type: 'paragraph', html: 'Use esta tabela de referência rápida para configurar o seu intervalómetro de acordo com o tema.' },
    { type: 'table', headers: ['Tema / Cena', 'Intervalo Sugerido', 'Duração do Evento (Mínima)'], rows: [
        ['Nuvens Rápidas / Tempestades', '1 - 2 segundos', '20 - 30 min'],
        ['Tráfego Urbano / Pessoas (Blur)', '0.5 - 2 segundos', '15 - 20 min'],
        ['Pôr-do-sol / Nascer-do-sol (Holy Grail)', '5 - 10 segundos', '1.5 - 2.5 horas'],
        ['Nuvens Lentas / Sombras', '10 - 15 segundos', '2 - 3 horas'],
        ['Estrelas / Via Láctea (Astro)', '15 - 30 segundos*', '3 - 5 horas'],
        ['Construção / Crescimento Plantas', '5 - 15 minutos', 'Dias / Semanas']
    ]},
    { type: 'tip', title: 'Nota para Astro', html: 'O intervalo é geralmente ditado pelo tempo de exposição necessário (regra 500) + 1 ou 2 segundos de margem.' },

    { type: 'title', text: 'A Regra dos 180° (Motion Blur)', level: 3 },
    { type: 'paragraph', html: 'Um erro comum no timelapse é obter um vídeo "tremido". Para obter aquele aspeto cinematográfico fluido, precisa de <strong>motion blur</strong>.' },
    { type: 'card', title: 'A Regra', icon: 'mdi:information', html: 'A sua Velocidade do Obturador deve ser metade do seu intervalo. <br /><br /> <em>Exemplo:</em> Se dispara a cada <strong>4 segundos</strong>, a sua exposição deve ser de <strong>2 segundos</strong>.' },

    { type: 'title', text: 'Flicker e Abertura Manual', level: 3 },
    { type: 'paragraph', html: 'O "Flicker" é a oscilação irritante causada por micro-variações na abertura do diafragma entre as fotos.' },
    { type: 'list', items: [
        '<strong>Lens Twist:</strong> Desbloqueie ligeiramente a lente em DSLRs para quebrar a ligação eletrónica e fixar a abertura mecanicamente.',
        '<strong>Tudo Manual:</strong> ISO, Balanço de Brancos e Foco devem ser fixos.',
        '<strong>Fotografe em RAW:</strong> Essencial para corrigir exposição e cor na pós-produção.'
    ]},

    { type: 'diagnostic', variant: 'success', title: 'Técnica Avançada: O "Santo Graal"', icon: 'mdi:crown', badge: 'Técnica Pro', html: 'O "Santo Graal" refere-se à transição suave do dia para a noite (ou vice-versa). É o desafio técnico mais difícil.' },
    
    { type: 'stats', columns: 3, items: [
        { label: 'Bulb Ramping', value: 'Exposição Gradual', icon: 'mdi:brightness-6' },
        { label: 'Post-Pro', value: 'LRTimelapse', icon: 'mdi:television-guide' },
        { label: 'Estratégia', value: 'Intervalo Noite', icon: 'mdi:weather-night' }
    ]},

    { type: 'title', text: 'Conclusão: O Zen da Mecânica Simples', level: 3 },
    { type: 'paragraph', html: 'Dominar o seu timelapse começa por entender a matemática do seu intervalómetro.' }
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

export const content: TimelapseLocaleContent = {
    slug,
    title,
    description,
    ui,
    seo,
    faq,
    faqTitle: 'Perguntas Frequentes sobre Produção de Timelapse',
    bibliography,
    bibliographyTitle: 'Teoria e Recursos para Timelapse',
    howTo,
    schemas: [faqSchema as any, howToSchema as any, appSchema],
};
