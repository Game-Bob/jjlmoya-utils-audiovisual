import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { VideoFrameExtractorUI, VideoFrameExtractorLocaleContent } from '../index';

const slug = 'extrator-de-fotogramas-video-online-capturar-stills-hd';
const title = 'Extrator de Fotogramas de Vídeo: Capturar imagens HD';
const description = 'Extraia imagens individuais dos seus vídeos com precisão milimétrica. Capture momentos perfeitos em HD localmente e de forma gratuita.';

const ui: VideoFrameExtractorUI = {
    uploadTitle: "Carregar um ficheiro de vídeo",
    uploadFormats: "MP4, WebM, MOV ou MKV (Máx. 500MB)",
    privacyNote: "O vídeo não é carregado para a Internet, é processado no seu navegador.",
    playLabel: "Reproduzir",
    pauseLabel: "Pausa",
    captureBtn: "Capturar fotograma",
    prevFrame: "-1F",
    nextFrame: "+1F",
    batchTitle: "Extração Automática",
    batchEvery: "A cada",
    batchStart: "Iniciar sequência",
    batchProcessing: "A extrair...",
    galleryTitle: "Fotogramas Capturados",
    galleryEmpty: "As capturas aparecerão aqui à medida que as fizer.",
    downloadAll: "Descarregar tudo",
    downloadHD: "Descarregar imagem HD",
    resetBtn: "Carregar outro vídeo"
};

const faq: VideoFrameExtractorLocaleContent['faq'] = [
    {
        question: "Posso extrair fotogramas de vídeos longos?",
        answer: "Sim, desde que o seu navegador tenha RAM suficiente para carregar o vídeo. Recomendamos ficheiros até 500MB para um desempenho ideal.",
    },
    {
        question: "Em que resolução são guardadas as capturas?",
        answer: "Las capturas são feitas na resolução nativa do vídeo original. Se o seu vídeo for 4K, obterá uma imagem 4K de alta qualidade.",
    },
];

const howTo: VideoFrameExtractorLocaleContent['howTo'] = [
    {
        name: "Carregue o seu vídeo",
        text: "Selecione o ficheiro de vídeo no seu dispositivo. Não o carregaremos para nenhum servidor.",
    },
    {
        name: "Navegue até ao momento exato",
        text: "Use a barra de linha de tempo ou os botões ±1 fotograma para uma precisão cirúrgica.",
    },
    {
        name: "Capture o fotograma",
        text: "Pressione o botão de captura para guardar o momento na galeria abaixo.",
    },
    {
        name: "Descarregue em alta qualidade",
        text: "Descarregue capturas individuais ou a sessão inteira no formato WebP otimizado.",
    },
];

const bibliography: VideoFrameExtractorLocaleContent['bibliography'] = [
    {
        name: "Capturing frames with HTML5 Video API",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video",
    },
];

const seo: VideoFrameExtractorLocaleContent['seo'] = [
    {
        type: 'summary',
        title: 'Extração Profissional de Fotogramas de Vídeo',
        items: [
            'Precisão ao fotograma individual (±1 frame) para capturas perfeitas',
            'Suporta MP4, WebM, MOV, MKV até 500MB',
            'Resolução nativa do vídeo preservada (SD, HD, 4K)',
            'Extração automática em lote em intervalos personalizados'
        ]
    },
    { type: 'title', text: 'Extração de Fotogramas: Congelar o Tempo no Vídeo', level: 2 },
    { type: 'paragraph', html: 'Às vezes, uma imagem vale mais que mil palavras. A nossa ferramenta utiliza o poder local do seu navegador para extrair fotogramas de precisão sem necessidade de software profissional.' },

    { type: 'stats', items: [
        { value: '±1', label: 'Precisão de Fotograma', icon: 'mdi:target' },
        { value: '100%', label: 'Resolução Nativa', icon: 'mdi:video-high-definition' },
        { value: '500MB', label: 'Ficheiros Suportados', icon: 'mdi:file-video' }
    ], columns: 3 },

    { type: 'title', text: 'Casos de Uso Profissionais', level: 3 },
    { type: 'comparative', items: [
        {
            title: 'Cinema e Fotografia',
            description: 'Capture fotogramas como referência visual ou composição',
            icon: 'mdi:film',
            points: [
                'Extraia stills para marketing de filmes',
                'Referências de composição de cena',
                'Análise fotograma a fotograma'
            ]
        },
        {
            title: 'Conteúdo Digital',
            description: 'Crie miniaturas e capas para redes sociais',
            icon: 'mdi:youtube',
            points: [
                'Miniaturas de YouTube em alta resolução',
                'Capas para redes sociais',
                'Imagens para apresentações'
            ],
            highlight: true
        },
        {
            title: 'Documentação Técnica',
            description: 'Extraia fotogramas de tutoriais e demonstrações',
            icon: 'mdi:book-open',
            points: [
                'Capturas de ecrã de vídeos tutoriais',
                'Documentação visual passo a passo',
                'Análise de movimento em tempo real'
            ]
        },
        {
            title: 'Desporto e Ação',
            description: 'Capture o instante preciso da máxima ação',
            icon: 'mdi:dumbbell',
            points: [
                'Análise de técnica desportiva fotograma a fotograma',
                'Captura de momentos heróicos',
                'Estudo de movimento'
            ]
        }
    ], columns: 2 },

    { type: 'title', text: 'Formatos de Vídeo Suportados', level: 3 },
    { type: 'table', headers: ['Formato', 'Extensão', 'Compatibilidade', 'Notas'], rows: [
        ['MPEG-4', 'MP4', 'Universal (100%)', 'Melhor compressão, muito usado'],
        ['WebM', 'WebM', 'Navegadores modernos', 'Compressão superior, tamanho menor'],
        ['QuickTime', 'MOV', 'Safari, alguns leitores', 'Padrão Apple'],
        ['Matroska', 'MKV', 'Navegadores modernos', 'Contentor flexível']
    ] },

    { type: 'card', title: 'Precisão ao Fotograma Individual', html: 'Mover um único fotograma para a frente ou para trás (±1 frame) é vital para capturar o instante perfeito: um salto, um sorriso, um gesto. A nossa ferramenta dá-lhe um controlo milimétrico.' },

    { type: 'proscons', items: [
        {
            pro: 'Privacidade total: o vídeo é processado 100% localmente no seu navegador',
            con: 'Limitado pelo tamanho da memória RAM disponível (~500MB recomendado)'
        },
        {
            pro: 'Resolução nativa preservada: SD, HD, 4K sem recompressão',
            con: 'Requer navegador moderno com suporte para Vídeo HTML5'
        },
        {
            pro: 'Extração automática em lote em intervalos personalizados',
            con: 'Para edição avançada (cortes), necessita de um editor de vídeo'
        },
        {
            pro: 'Exporte fotogramas em WebP otimizado ou PNG não comprimido',
            con: 'Um fotograma de cada vez (não exporta sequências GIF automatizadas)'
        }
    ], proTitle: 'Vantagens', conTitle: 'Limitações' },

    { type: 'diagnostic', variant: 'info', title: 'Resolução e Taxa de Fotogramas', icon: 'mdi:information', badge: 'Técnico', html: 'A resolução final do fotograma depende do vídeo original. Preservamos a informação nativa do vídeo sem upscaling.' },

    { type: 'glossary', items: [
        {
            term: 'Fotograma (Frame)',
            definition: 'Imagem individual numa sequência de vídeo. Um vídeo de 24 fps contém 24 fotogramas por segundo.'
        },
        {
            term: 'FPS (Fotogramas Por Segundo)',
            definition: 'Frames por segundo. Determina a fluidez do movimento.'
        },
        {
            term: 'Codec de Vídeo',
            definition: 'Algoritmo de compressão: H.264, VP9, HEVC. Determina o tamanho e qualidade.'
        },
        {
            term: 'Bitrate',
            definition: 'Quantidade de dados processados por segundo. Bitrate mais alto = qualidade superior.'
        },
        {
            term: 'Resolução de Vídeo',
            definition: 'Dimensões em píxeis: 720p, 1080p, 4K, 8K.'
        }
    ] },

    { type: 'message', title: 'Extração de Fotogramas Profissional', ariaLabel: 'Informação técnica sobre extração de vídeo', html: 'Não precisa de conversores complexos. Um fotograma perfeito está à distância de 3 cliques: carregar vídeo, navegar, capturar.' },

    { type: 'title', text: 'Congelar Momentos de Vídeo', level: 3 },
    { type: 'paragraph', html: 'Cada vídeo contém centenas de fotogramas. Use esta ferramenta para extrair esses momentos perfeitos sem comprometer a qualidade ou a privacidade.' }
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

export const content: VideoFrameExtractorLocaleContent = {
    slug,
    title,
    description,
    ui,
    seo,
    faq,
    faqTitle: 'Perguntas Frequentes sobre Extração de Fotogramas de Vídeo',
    bibliography,
    bibliographyTitle: 'Padrões Técnicos para Captura de Vídeo',
    howTo,
    schemas: [faqSchema as any, howToSchema as any, appSchema],
};
