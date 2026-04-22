import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { CollageMakerUI, CollageMakerLocaleContent } from '../index';

const slug = 'criar-collage-fotos-online-gratis-composicoes-profissionais';
const title = 'Criador de Collage Online: Desenhe composições profissionais';
const description = 'Crie colagens de fotos gratuitamente em segundos. Escolha entre vários layouts, ajuste as bordas e descarregue em alta qualidade sem marcas de água.';

const ui: CollageMakerUI = {
    dropTitle: "Arraste as imagens para aqui",
    dropSub: "ou {link} - min. 2, max. 9",
    dropLink: "selecionar ficheiros",
    imgsLoaded: "Imagens carregadas",
    layoutLabel: "Layout",
    settingsLabel: "Ajustes",
    borderLabel: "Borda",
    borderColorLabel: "Cor da borda",
    bgColorLabel: "Fundo",
    downloadBtn: "Descarregar",
    previewTitle: "Pré-visualização",
    needsImgs: "Necessita de {n} imagens",
    errorMin: "Necessita de pelo menos 2 imagens",
    errorMax: "Máximo de 9 imagens permitido",
    errorLoad: "Erro ao carregar imagens",
    faqTitle: "Perguntas Frequentes": "Referências"
};

const faq: CollageMakerLocaleContent['faq'] = [
    {
        question: "Como posso alterar a ordem das fotos?",
        answer: "As fotos são colocadas na colagem seguindo a ordem em que aparecem na lista de imagens carregadas. Pode remover uma e carregá-la novamente para ajustar a sua posição.",
    },
    {
        question: "Qual é o formato de saída da colagem?",
        answer: "A colagem é descarregada em formato WebP de alta resolução, ideal para partilhar nas redes sociais sem perda de nitidez.",
    },
];

const howTo: CollageMakerLocaleContent['howTo'] = [
    {
        name: "Carregue as suas fotos",
        text: "Selecione entre 2 e 9 imagens do seu explorador de ficheiros.",
    },
    {
        name: "Escolha um layout",
        text: "Selecione a grelha que melhor se adapta ao número de fotos que carregou.",
    },
    {
        name: "Personalize o estilo",
        text: "Ajuste a espessura e a cor da borda para dar um acabamento profissional.",
    },
    {
        name: "Descarregue e partilhe",
        text: "Pressione o botão de criar e descarregue instantaneamente a sua composição final.",
    },
];

const seo: CollageMakerLocaleContent['seo'] = [
    {
        type: 'summary',
        title: 'Criador de Collage Online Profissional',
        items: [
            'Múltiplos layouts e grelhas predefinidas',
            'Personalização de bordas e cores de fundo',
            'Alta resolução de 1200px pronta para as redes sociais',
            'Processamento instantâneo sem limites de utilização'
        ]
    },
    { type: 'title', text: 'Design de Colagem: Composições que Contam Histórias', level: 2 },
    { type: 'paragraph', html: 'Uma colagem é mais do que uma mistura de fotos; é uma narrativa visual que comunica emoção e contexto. A nossa ferramenta permite criar composições geométricas profissionais para o Instagram, Facebook, Pinterest ou projetos pessoais sem a necessidade de Photoshop ou software dispendioso.' },

    { type: 'stats', items: [
        { value: '2-9', label: 'Imagens por Colagem', icon: 'mdi:image-multiple' },
        { value: '1200px', label: 'Resolução HD', icon: 'mdi:video-high-definition' },
        { value: 'Instantânea', label: 'Geração', icon: 'mdi:lightning-bolt' }
    ], columns: 3 },

    { type: 'title', text: 'Composição Visual: Princípios de Design', level: 3 },
    { type: 'paragraph', html: 'A composição é a arte de organizar elementos visuais de forma a guiar o olhar do espetador e comunicar uma intenção. Uma boa colagem equilibra:' },
    { type: 'list', items: [
        '<strong>Equilíbrio:</strong> Distribuição visual do peso (imagens claras vs escuras, grandes vs pequenas).',
        '<strong>Fluxo Visual:</strong> O olhar deve percorrer a composição naturalmente, sem pontos mortos.',
        '<strong>Contraste:</strong> Variações de cor, tamanho e forma que captam a atenção.',
        '<strong>Unidade:</strong> Coerência temática - as imagens devem \"falar juntas\" sobre a mesma história.'
    ], icon: 'mdi:check' },

    { type: 'card', title: 'Designs Inteligentes e Adaptáveis', html: 'O nosso sistema calcula automaticamente a distribuição ideal do espaço com base no número de fotos. 2 imagens = grelha simétrica; 5 imagens = distribuição assimétrica equilibrada. Cada grelha é desenhada para maximizar o impacto visual.' },

    { type: 'comparative', items: [
        {
            title: 'Para Redes Sociais',
            description: 'Instagram, TikTok, Facebook - formatos quadrados',
            icon: 'mdi:share-all',
            points: [
                '1200px é perfeito para o feed do Instagram',
                'O formato quadrado evita o corte ao publicar',
                'Bordas personalizáveis para branding'
            ],
            highlight: true
        },
        {
            title: 'Para Portefólios',
            description: 'Vitrinas visuais para fotógrafos e designers',
            icon: 'mdi:briefcase-outline',
            points: [
                'Mostre múltiplos ângulos de um projeto',
                'Narrativa visual coesa',
                'Impressão de digitais books profissionais'
            ]
        },
        {
            title: 'Para Presentes Pessoais',
            description: 'Impressões, molduras e álbuns digitais',
            icon: 'mdi:gift-outline',
            points: [
                'Recordações de eventos (casamentos, viagens)',
                'Alta resolução pronta para impressão',
                'Design instantâneo sem esforço manual'
            ]
        }
    ], columns: 3 },

    { type: 'title', text: 'Personalização: Bordas e Cores', level: 3 },
    { type: 'table', headers: ['Elemento', 'Efeito Visual', 'Recomendação'], rows: [
        ['Borda Branca', 'Limpo, minimalista, moderno', 'Redes sociais, portefólios digitais'],
        ['Borda Preta', 'Dramático, profissional, artístico', 'Fotografia de arte, moda, luxo'],
        ['Borda Neutra (cinzento)', 'Versátil, académico, corporativo', 'Negócios, educação, neutralidade'],
        ['Sem Borda', 'Fusão, continuidade, imersivo', 'Fundo uniforme, fotos fluidas']
    ] },

    { type: 'proscons', items: [
        {
            pro: 'Designs profissionais predefinidos - sem necessidade de conhecimentos de composição',
            con: 'Opções limitadas às grelhas preestabelecidas'
        },
        {
            pro: 'Resolução de 1200px pronta para as redes sociais sem redimensionamento',
            con: 'Não tão personalizável como o Photoshop'
        },
        {
            pro: 'Processamento 100% local - privacidade, velocidade, sem limites',
            con: 'Requer um navegador moderno'
        },
        {
            pro: 'Totalmente gratuito, sem marcas de água, sem publicidade',
            con: 'Sem opções de edição individual (corte, rotação)'
        }
    ], proTitle: 'Vantagens', conTitle: 'Limitações' },

    { type: 'diagnostic', variant: 'success', title: 'Pronto para Redes Sociais', icon: 'mdi:check-circle-outline', badge: 'Otimizado', html: '1200x1200px é a resolução ideal para o Instagram. Suporta qualquer proporção de aspeto, mas a saída quadrada maximiza o impacto no feed, elimina o corte automático e fica bem tanto em desktop, como em tablet e telemóvel.' },

    { type: 'glossary', items: [
        {
            term: 'Composição Visual',
            definition: 'Arte de organizar elementos (cor, forma, espaço) para guiar o olhar do espetador e comunicar uma intenção emocional.'
        },
        {
            term: 'Regra dos Terços',
            definition: 'Princípio de composição: divide a imagem em 9 áreas iguais (3x3). Posicione os assuntos nas linhas de interseção para o máximo impacto.'
        },
        {
            term: 'Grelha Simétrica',
            definition: 'Divisões iguais do espaço. Tranquilizador, ordenado. Ideal para pares de fotos ou números pares.'
        },
        {
            term: 'Grelha Assimétrica',
            definition: 'Divisões desiguais. Dinâmico, interessante, visual. Ideal para 5 ou mais fotos com variedade de tamanhos.'
        },
        {
            term: 'Equilíbrio Visual',
            definition: 'Equilíbrio percetual do peso visual. Imagem clara + escura = equilíbrio; grande + pequena = equilíbrio.'
        }
    ] },

    { type: 'message', title: 'Narrativa Visual Instantânea', ariaLabel: 'Informações sobre composição e colagens', html: 'Cada colagem conta uma história. O nosso designer automático garante que as suas histórias visuais sejam equilibradas, profissionais e prontas para o mundo. Sem ter de esperar que um designer gráfico faça o trabalho.' },

    { type: 'title', text: 'Crie, Partilhe, Inspire', level: 3 },
    { type: 'paragraph', html: 'Uma colagem bem feita é a diferença entre um post esquecível e um que os seus seguidores recordarão e partilharão. Use a composição inteligente para que as suas histórias visuais tenham impacto.' }
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

export const content: CollageMakerLocaleContent = {
    slug,
    title,
    description,
    ui,
    seo,
    faqTitle: "Perguntas Frequentes",
    faq: "Referências",
    bibliography,
    howTo,
    schemas: [faqSchema as any, howToSchema as any, appSchema],
};
