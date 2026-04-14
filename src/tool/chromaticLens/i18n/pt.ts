import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ChromaticLensUI, ChromaticLensLocaleContent } from '../index';

const slug = 'chromatic-lens-extracao-paleta-cores-online';
const title = 'Chromatic Lens: Extração de Paleta de Cores Online';
const description = 'Extraia paletas de cores profissionais de qualquer imagem gratuitamente. Identifique cores dominantes nas suas fotos usando algoritmos matemáticos.';

const ui: ChromaticLensUI = {
    dropTitle: "Analisar Cores",
    dropSubtitle: "Arraste uma imagem para extrair o seu ADN cromático.",
    processingLabel: "A extrair paleta...",
    paletteTitle: "Paleta Extraída",
    copyLabel: "Copiar HEX",
    copiedLabel: "Copiado!",
    colorCountLabel: "Número de cores",
    changeImage: "Alterar imagem",
    faqTitle: "Perguntas frequentes sobre extração de cores",
    bibliographyTitle: "Recursos e documentação técnica"
};

const faq: ChromaticLensLocaleContent['faq'] = [
    {
        question: "Como funciona a extração de cores?",
        answer: "Utilizamos o algoritmo 'Median Cut', que agrupa os píxeis da imagem de acordo com a sua proximidade no espaço de cor RGB para encontrar os tons mais representativos.",
    },
    {
        question: "Posso copiar as cores para o meu editor de design?",
        answer: "Sim, ao clicar em cada cor, o código HEX será automaticamente copiado para a sua área de transferência, pronto para ser colado no Photoshop, Figma ou CSS.",
    },
    {
        question: "Que tipos de imagem posso analisar?",
        answer: "Qualquer ficheiro JPG, PNG ou WebP. O processamento é local, pelo que imagens grandes serão analisadas rapidamente sem consumir dados de rede.",
    },
];

const howTo: ChromaticLensLocaleContent['howTo'] = [
    {
        name: "Carregar a imagem",
        text: "Carregue a fotografia da qual deseja extrair inspiração cromática.",
    },
    {
        name: "Ajustar precisão",
        text: "Selecione quantas cores dominantes deseja que a ferramenta identifique (de 3 a 12).",
    },
    {
        name: "Analisar o resultado",
        text: "A paleta aparecerá instantaneamente com os seus códigos hexadecimais correspondentes.",
    },
    {
        name: "Copiar e usar",
        text: "Clique nos tons para os guardar e aplicar no seu projeto de design.",
    },
];

const bibliography: ChromaticLensLocaleContent['bibliography'] = [
    {
        name: "Median Cut Algorithm - Wikipedia",
        url: "https://en.wikipedia.org/wiki/Median_cut",
    },
    {
        name: "Teoria da Cor para Designers",
        url: "https://www.smashingmagazine.com/2010/01/color-theory-for-designers-part-1-the-meaning-of-color/",
    },
];

const seo: ChromaticLensLocaleContent['seo'] = [
    {
        type: 'summary',
        title: 'Extração Inteligente de Paleta de Cores',
        items: [
            'Algoritmo profissional Median Cut para análise de cores',
            'Extraia 3-12 cores dominantes de qualquer imagem',
            'Códigos HEX copiáveis diretamente para a área de transferência',
            'Processamento 100% local - ideal para criativos'
        ]
    },
    { type: 'title', text: 'Extração de Paleta de Cores: Ciência e Design', level: 2 },
    { type: 'paragraph', html: 'Já se perguntou por que uma fotografia de filme parece tão harmoniosa? Não é coincidência; é a teoria da cor em ação. O Chromatic Lens permite extrair essa harmonia diretamente do píxel, transformando-a em códigos HEX utilizáveis nos seus projetos de design.' },

    { type: 'stats', items: [
        { value: 'Instantânea', label: 'Análise de Cores', icon: 'mdi:lightning-bolt' },
        { value: '100%', label: 'Privacidade Local', icon: 'mdi:lock' },
        { value: 'RGB', label: 'Espaço de Cor Preciso', icon: 'mdi:palette' }
    ], columns: 3 },

    { type: 'title', text: 'O Algoritmo Median Cut Explicado', level: 3 },
    { type: 'paragraph', html: 'A extração inteligente de paletas não é uma simples amostragem aleatória de píxeis. Utiliza o algoritmo Median Cut, uma técnica de partição recursiva que assegura uma representação fiel:' },
    { type: 'list', items: [
        '<strong>Divisão Recursiva:</strong> O \"cubo de cores\" RGB da imagem é dividido recursivamente em caixas mais pequenas.',
        '<strong>Equilíbrio de Volume:</strong> Cada partição procura agrupar píxeis do mesmo espaço de cor com volumes semelhantes.',
        '<strong>Média Ponderada:</strong> A cor resultante de cada caixa é a média de todos os píxeis que contém.',
        '<strong>Representação Fiel:</strong> As cores dominantes refletem a atmosfera visual real da imagem, não uma simples amostra.'
    ], icon: 'mdi:check' },

    { type: 'card', title: 'Fluxo de Trabalho Criativo', html: 'Ideal para desenvolvedores web, designers UX/UI, artistas digitais e criativos que procuram capturar instantaneamente a essência visual de uma fotografia, filme ou referência visual para aplicar nas suas interfaces, ilustrações ou paletas de marca.' },

    { type: 'title', text: 'Casos de Uso em Design Digital', level: 3 },
    { type: 'comparative', items: [
        {
            title: 'Designers UX/UI',
            description: 'Extraia paletas de imagens hero para criar interfaces coesas',
            icon: 'mdi:palette',
            points: [
                'Cores de fundo harmoniosas',
                'Botões e elementos secundários',
                'Contraste calculado automaticamente'
            ]
        },
        {
            title: 'Desenvolvedores Web',
            description: 'Crie folhas de estilo CSS diretamente de referências visuais',
            icon: 'mdi:code-braces',
            points: [
                'Copie HEX diretamente para CSS',
                'Variáveis de cor em SCSS/CSS',
                'Temas coesos sem design prévio'
            ],
            highlight: true
        },
        {
            title: 'Artistas Digitais e Ilustradores',
            description: 'Capture referências cromáticas de filmes, natureza ou arte',
            icon: 'mdi:brush',
            points: [
                'Paletas de referência de obras-primas',
                'Estudos de cor cinematográficos',
                'Inspiração visual imediata'
            ]
        },
        {
            title: 'Especialistas em Branding',
            description: 'Desenvolva identidades visuais baseadas em fotografias guia',
            icon: 'mdi:tag-multiple',
            points: [
                'Extraia as cores da marca a partir de imagens',
                'Crie guias cromáticos profissionais',
                'Garanta a consistência visual'
            ]
        }
    ], columns: 2 },

    { type: 'title', text: 'Teoria da Cor Aplicada', level: 3 },
    { type: 'table', headers: ['Conceito de Cor', 'Definição', 'Aplicação Prática'], rows: [
        ['Harmonia Cromática', 'Combinação de cores visualmente equilibrada', 'Identidade visual coesa na UI'],
        ['Contraste', 'Diferença de brilho entre cores', 'Legibilidade e hierarquia visual'],
        ['Saturação', 'Intensidade da cor de um tom', 'Profissionalismo (baixa) vs Energia (alta)'],
        ['Temperatura da Cor', 'Cores quentes (vermelhos) vs cores frias (azuis)', 'Psicologia emocional do design'],
        ['Paleta Monocromática', 'Variações de um único tom', 'Elegância e minimalismo']
    ] },

    { type: 'proscons', items: [
        {
            pro: 'Precisão matemática na extração - não é uma seleção visual aproximada',
            con: 'Cores quase invisíveis podem ser incluídas se tiverem muitos píxeis'
        },
        {
            pro: 'Cópia instantânea para a área de transferência - integração perfeita no fluxo de trabalho',
            con: 'Necessita de um navegador moderno compatível com a API Canvas'
        },
        {
            pro: 'Privacidade total - análise 100% local sem submissão de dados',
            con: 'Nenhum histórico de análises anteriores guardado'
        },
        {
            pro: 'Compatível com qualquer formato de imagem digital',
            con: 'As cores finais dependem da compressão e qualidade da imagem'
        }
    ], proTitle: 'Vantagens', conTitle: 'Limitações' },

    { type: 'diagnostic', variant: 'success', title: 'Representação Realista de Cores', icon: 'mdi:check-circle-outline', badge: 'Algoritmo Avançado', html: 'Ao contrário de ferramentas que simplesmente amostram píxeis aleatórios, o nosso sistema utiliza o algoritmo Median Cut que pondera a contagem total de píxeis de cada tom, garantendo que a paleta resultante reflita fielmente a atmosfera visual e a psicologia das cores da imagem original.' },

    { type: 'glossary', items: [
        {
            term: 'Median Cut',
            definition: 'Algoritmo de quantização de cor que divide recursivamente o espaço RGB em caixas, garantindo uma distribuição uniforme. Historicamente utilizado na tecnologia de cores indexadas e GIF.'
        },
        {
            term: 'Espaço de Cor RGB',
            definition: 'Modelo de cor baseado em vermelho, verde e azul. Cada cor é representada como uma combinação destes três valores (0-255). Padrão em ecrãs digitais e web.'
        },
        {
            term: 'Código HEX',
          definition: 'Notação hexadecimal de 6 dígitos (#RRGGBB) que representa a cor na web: #FF0000 (vermelho), #00FF00 (verde), #0000FF (azul). Universal em CSS, Figma e Adobe.'
        },
        {
            term: 'Saturação de Cor',
            definition: 'Intensidade ou pureza da cor. Alta saturation = cor viva; baixa saturation = cor acinzentada. Afeta a perceção emocional do design.'
        },
        {
            term: 'Harmonia Cromática',
            definition: 'A seleção e combinação de cores para obter um resultado visualmente agradável. Pode ser monocromática, complementar, análoga ou triádica.'
        }
    ] },

    { type: 'message', title: 'Análise Cromática Profissional', ariaLabel: 'Informação técnica sobre análise de cores', html: 'O Chromatic Lens transforma a análise visual manual em precisão algorítmica. Não se limita a extrair cores: captura a essência emocional e visual de qualquer imagem, colocando-a diretamente na sua área de transferência como códigos HEX prontos a usar. Privacidade total, sem limites no volume de análise.' },

    { type: 'title', text: 'Design a partir de Inspiração Visual', level: 3 },
    { type: 'paragraph', html: 'A melhor paleta de cores é aquela que captura a intenção visual da sua referência. O Chromatic Lens automatiza o que costumava ser um processo manual: observar, analisar, anotar. Agora, basta arrastar uma imagem e obter códigos HEX profissionais em segundos.' }
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

export const content: ChromaticLensLocaleContent = {
    slug,
    title,
    description,
    ui,
    seo,
    faqTitle: "Perguntas Frequentes",
    faq,
    bibliographyTitle: "Referências",
    bibliography,
    howTo,
    schemas: [faqSchema as any, howToSchema as any, appSchema],
};
