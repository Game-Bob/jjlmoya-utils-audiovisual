import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { TvDistanceUI, TvDistanceLocaleContent } from '../index';

const slug = 'calculadora-distancia-tv-thx-4k-ecra-ideal';
const title = 'Calculadora de Distância TV: Ecrã Ideal THX e 4K';
const description = 'Calcule a distância ideal para ver televisão com base no tamanho e resolução. Optimize o seu Home Cinema com os padrões THX e SMPTE.';

const ui: TvDistanceUI = {
    specTitle: "Especificações",
    diagonalLabel: "Tamanho Diagonal",
    resolutionLabel: "Resolução",
    thxRecommendation: "Recomendação THX",
    thxDescription: "A THX recomenda uma distância que cubra um ângulo de visão de 40 graus para uma experiência cinematográfica imersiva.",
    simulationBadge: "Simulação em Tempo Real",
    tvWidthLabel: "cm de largura",
    userLocationLabel: "Sua Localização",
    minLimitLabel: "Limite Mínimo",
    optimalLimitLabel: "Distância Ideal",
    maxLimitLabel: "Limite Máximo",
    unitMeters: "m",
    unitCm: "cm"
};

const faq: TvDistanceLocaleContent['faq'] = [
    {
        question: "Porque é que a resolução é importante no cálculo da distância?",
        answer: "Em resoluções mais altas (como 4K ou 8K), os píxeis são menores. Isso permite sentar-se mais perto sem perceber a grelha de píxeis, aumentando a imersão.",
    },
    {
        question: "O que é o ângulo de visão de 40 graus?",
        answer: "É o padrão recomendado pela THX para que o ecrã ocupe uma grande parte da sua visão periférica, semelhante à experiência de uma sala de cinema profissional.",
    },
    {
        question: "Posso sentar-me mais longe do que o recomendado?",
        answer: "Sim, mas perderá o benefício das altas resoluções. Se se sentar muito longe de uma TV 4K, o seu olho não conseguirá distinguir os detalhes extras e verá como se fosse 1080p.",
    },
];

const howTo: TvDistanceLocaleContent['howTo'] = [
    {
        name: "Indique as polegadas",
        text: "Mova o seletor para escolher o tamanho da sua televisão atual ou daquela que planeia comprar.",
    },
    {
        name: "Selecione a resolução",
        text: "Escolha entre 1080p, 4K ou 8K para ajustar os limites de acuidade visual.",
    },
    {
        name: "Visualize a simulação",
        text: "Observe no diagrama como a relação de tamanho entre si e o ecrã muda.",
    },
    {
        name: "Ajuste o seu sofá",
        text: "Coloque o seu assento dentro do intervalo de 'Distância Ideal' para maximizar a imersão cinematográfica.",
    },
];

const bibliography: TvDistanceLocaleContent['bibliography'] = [
    {
        name: "THX - HDTV Set Up Guide",
        url: "https://www.thx.com/questions/what-is-the-best-viewing-distance-for-my-tv/",
    },
    {
        name: "SMPTE - Standards Documentation",
        url: "https://www.smpte.org/",
    },
];

const seo: TvDistanceLocaleContent['seo'] = [
    {
        type: 'summary',
        title: 'Distância TV Ideal por Resolução e Tamanho',
        items: [
            'Padrões THX (40°) para experiência cinematográfica imersiva',
            'Cálculos para 1080p, 4K e 8K com máxima precisão',
            'Simulação visual em tempo real da sua configuração',
            'Evite a fadiga ocular e maximize a imersão no conteúdo'
        ]
    },
    { type: 'title', text: 'Ciência da Imersão: Distância TV Ideal', level: 2 },
    { type: 'paragraph', html: 'Não se trata apenas de conforto, mas de fisiologia visual humana. Se se sentar muito longe de um ecrã 4K, está a desperdiçar dinheiro em píxeis que a sua visão não pode aproveitar. E se se sentar muito perto, causa fadiga ocular.' },

    { type: 'stats', items: [
        { value: '40°', label: 'Ângulo Ideal THX', icon: 'mdi:eye' },
        { value: '100%', label: 'Píxeis Aproveitados', icon: 'mdi:video-high-definition' },
        { value: 'Zero', label: 'Fadiga Visual', icon: 'mdi:heart-pulse' }
    ], columns: 3 },

    { type: 'title', text: 'Dois Padrões Profissionais: THX vs SMPTE', level: 3 },
    { type: 'paragraph', html: 'Existem duas autoridades principais na indústria audiovisual que definem como otimizar a sua experiência de visualização:' },
    { type: 'comparative', items: [
        {
            title: 'Padrão THX',
            description: 'Ângulo de visão de 40° - Mais imersivo',
            icon: 'mdi:filmstrip',
            points: [
                'O ecrã ocupa mais da sua visão periférica',
                'Experiência cinematográfica imersiva',
                'Ideal para filmes de ação, desporto ao vivo',
                'Requer mais espaço na sala'
            ],
            highlight: true
        },
        {
            title: 'Padrão SMPTE',
            description: 'Ângulo de visão de 30° - Mais relaxado',
            icon: 'mdi:television',
            points: [
                'Distância de assento mais confortável',
                'Recomendação profissional conservadora',
                'Ideal para conteúdos variados (notícias, séries)',
                'Melhor para salas menores'
            ]
        }
    ], columns: 2 },

    { type: 'title', text: 'Como a Resolução Muda a Equação', level: 3 },
    { type: 'table', headers: ['Resolução', 'TV de 55"', 'Distância Mínima (sem píxeis visíveis)', 'Distância Ideal THX'], rows: [
        ['1080p (Full HD)', '55 polegadas', '2.0 m', '2.3 m'],
        ['4K (Ultra HD)', '55 polegadas', '1.2 m', '1.5 m'],
        ['8K', '55 polegadas', '0.8 m', '1.0 m']
    ] },

    { type: 'paragraph', html: 'Como pode ver, uma resolução mais alta permite sentar-se mais perto sem perceber a estrutura de píxeis. Uma TV 4K pode ser apreciada a partir de 1.2 metros; uma 1080p necessita de pelo menos 2 metros.' },

    { type: 'card', title: 'O Limite da Acuidade Visual Humana', html: 'O olho humano tem uma capacidade limite de resolução. Além de uma certa distância, não consegue distinguir mais detalhes, mesmo que o ecrã tenha 8K. Os nossos cálculos colocam-no exatamente na "zona ideal".' },

    { type: 'diagnostic', variant: 'info', title: 'Fadiga Ocular e Distância', icon: 'mdi:information', badge: 'Saúde Visual', html: 'Estar muito perto causa fadiga porque os olhos precisam de se acomodar constantemente a ângulos extremos. Estar muito longe causa esforço para distinguir detalhes. O nosso calculador coloca-o no "sweet spot" (40° para THX).' },

    { type: 'proscons', items: [
        {
            pro: 'THX 40° cria uma verdadeira imersione cinematográfica - como numa sala profissional',
            con: 'Requer mais espaço disponível na sala'
        },
        {
            pro: '4K permite sentar-se mais perto que 1080p - útil em espaços pequenos',
            con: 'Deve estar à distância mínima para aproveitar os píxeis extra'
        },
        {
            pro: 'Evite a fadiga ocular posicionando-se corretamente desde o início',
            con: 'A maioria das salas domésticas NÃO segue estes padrões'
        },
        {
            pro: 'Pode validar se a sua TV atual está bem posicionada',
            con: 'Se estiver errada, requer a mudança de móveis'
        }
    ], proTitle: 'Vantagens', conTitle: 'Limitações' },

    { type: 'glossary', items: [
        {
            term: 'Ângulo de Visão (em graus)',
            definition: 'Ângulo visual que o ecrã cobre a partir da sua posição. 40° = muito imersivo; 20° = conteúdo de fundo (não imersivo).'
        },
        {
            term: 'THX (Tomlinson Holman Experiment)',
            definition: 'Certificação de qualidade audiovisual criada pela Lucasfilm. Define padrões para cinemas e home cinema. 40° é a sua recomendação principal.'
        },
        {
            term: 'SMPTE (Society of Motion Picture Technical Engineers)',
            definition: 'Organização de padrões técnicos para cinema e vídeo. Recomenda 30° como uma distância profissional conservadora.'
        },
        {
            term: 'Acuidade Visual Humana',
            definition: 'Capacidade do olho em distinguir detalhes finos. Um píxel individual é impercetível após uma certa distância.'
        },
        {
            term: '4K (Ultra HD)',
            definition: 'Resolução de ~3840x2160 píxeis. 4 vezes mais píxeis que 1080p.'
        }
    ] },

    { type: 'message', title: 'Otimização Profissional de Sala Audiovisual', ariaLabel: 'Informação sobre padrões de configuração de TV', html: 'Os cinemas profissionais gastam milhões para garantir que a distância, o ângulo e a iluminação são perfeitos. O nosso calculador traz esses mesmos princípios para sua casa.' },

    { type: 'title', text: 'Configure o Seu Home Cinema Profissionalmente', level: 3 },
    { type: 'paragraph', html: 'A distância é TÃO IMPORTANTE QUANTO o tamanho do ecrã e a resolução. Siga estes padrões para transformar a sua sala numa autêntica sala cinematográfica.' }
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

export const content: TvDistanceLocaleContent = {
    slug,
    title,
    description,
    ui,
    seo,
    faq,
    faqTitle: 'Perguntas Frequentes sobre Distância de Visualização TV',
    bibliography,
    bibliographyTitle: 'Padrões Profissionais para Configuração de Televisão',
    howTo,
    schemas: [faqSchema as any, howToSchema as any, appSchema],
};
