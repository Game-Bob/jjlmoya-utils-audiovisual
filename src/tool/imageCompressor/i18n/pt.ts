import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ImageCompressorUI, ImageCompressorLocaleContent } from '../index';

const slug = 'compressor-imagens-online-reduzir-tamanho-sem-perder-qualidade';
const title = 'Compressor de Imagens Online: Reduza o peso sem perder qualidade';
const description = 'Otimize e comprima as suas fotos JPG, PNG e WebP gratuitamente. Reduza o tamanho do ficheiro para melhorar a velocidade de carregamento do seu site localmente.';

const ui: ImageCompressorUI = {
    dropTitle: "Otimizar Imagens",
    dropSubtitle: "Arraste as suas fotos para reduzir o seu peso instantaneamente.",
    settingsTitle: "Definições de Compressão",
    qualityLabel: "Qualidade Visual",
    widthLabel: "Largura Máxima (Píxeis)",
    convertToWebpLabel: "Converter para WebP",
    compressionLabel: "Compressão",
    compressBtn: "Comprimir Imagem",
    processingLabel: "A processar...",
    resultsTitle: "Imagens Otimizadas",
    originalSizeLabel: "Tamanho Original",
    newSizeLabel: "Novo Tamanho",
    reductionLabel: "Poupança",
    downloadBtn: "Descarregar",
    addMoreBtn: "Adicionar mais",
    browseFilesBtn: "Procurar ficheiros",
    processedFilesTitle: "Ficheiros Processados",
    downloadAllBtn: "Descarregar Tudo",
    adjustThisImage: "Ajustar esta imagem",
    downloadTitle: "Download",
    maxWidthLabel: "Largura máx (px)",
    closeBtn: "Fechar",
    totalSavingsLabel: "Poupança total",
    noSavings: "Sem poupança líquida",
};

const faq: ImageCompressorLocaleContent['faq'] = [
    {
        question: "Como funciona a compressão sem perda?",
        answer: "Utilizamos algoritmos que removem metadados desnecessários e otimizam a codificação dos píxeis. Ao escolher WebP, é utilizada uma tecnologia de compressão mais avançada do que os formatos tradicionais.",
    },
    {
        question: "As minhas imagens são carregadas para algum servidor?",
        answer: "Não. Todo o processamento ocorre 100% no seu navegador (Client-Side). As suas fotos nunca saem do seu computador, garantindo privacidade absoluta.",
    },
    {
        question: "Por que devo converter para WebP?",
        answer: "WebP é o formato padrão moderno para a web. Oferece uma qualidade superior ao JPG e PNG com um peso até 30% menor, o que acelera o tempo de carregamento da página.",
    },
];

const howTo: ImageCompressorLocaleContent['howTo'] = [
    {
        name: "Carregue a imagem",
        text: "Carregue o ficheiro que deseja comprimir (JPG, PNG ou WebP).",
    },
    {
        name: "Ajuste a qualidade",
        text: "Utilize o seletor para encontrar o equilíbrio perfeito entre o tamanho do ficheiro e a qualidade visual (recomendado: 75 85%).",
    },
    {
        name: "Redimensione (opcional)",
        text: "Se a imagem for muito grande, pode especificar uma largura máxima para reduzir a sua resolução.",
    },
    {
        name: "Descarregue o resultado",
        text: "Prima o botão de download para obter a sua imagem otimizada pronta a usar.",
    },
];

const seo: ImageCompressorLocaleContent['seo'] = [
    {
        type: 'summary',
        title: 'Otimização Profissional de Imagens Web',
        items: [
            'Compressão inteligente de JPG, PNG e WebP',
            'Reduza o peso em 50-80% mantendo a qualidade visual',
            'Processamento 100% local - privacidade garantida',
            'Melhore o Core Web Vitals e o posicionamento SEO'
        ]
    },
    { type: 'title', text: 'Otimização de Imagens: Velocidade Web e Core Web Vitals', level: 2 },
    { type: 'paragraph', html: 'Na era do imediatismo digital, um site lento perde utilizadores. Imagens não otimizadas representam 60-70% do peso total de uma página web. Otimizá-las é o primeiro passo para melhorar as suas métricas do Google (LCP, CLS) e o seu posicionamento nos resultados de pesquisa.' },

    { type: 'stats', items: [
        { value: '50-80%', label: 'Redução de Peso Típica', icon: 'mdi:trending-down' },
        { value: '100%', label: 'Privacidade Local', icon: 'mdi:lock' },
        { value: '+30%', label: 'Mais rápido que o JPG', icon: 'mdi:speedometer' }
    ], columns: 3 },

    { type: 'title', text: 'Formatos de Compressão Explicados', level: 3 },
    { type: 'table', headers: ['Formato', 'Compressão', 'Casos de Uso', 'Compatibilidade'], rows: [
        ['JPEG', 'Lossy 50-90%', 'Fotos de câmara, conteúdo editorial', 'Universal (100%)'],
        ['PNG', 'Lossless 30-50%', 'Gráficos, logótipos, transparências', 'Universal (100%)'],
        ['WebP', 'Lossy/Lossless 25-35% mais', 'Web moderna, redes sociais', '95% dos navegadores modernos'],
        ['AVIF', 'Lossy/Lossless melhoria de 20%', 'Web de próxima geração', 'Apenas novos navegadores']
    ] },

    { type: 'card', title: 'Por que o WebP é o Futuro', html: 'A Google desenvolveu o WebP especificamente para a web. Oferece uma compressão superior ao JPEG e PNG, mantendo ou melhorando a qualidade visual. É 25-35% menor que os equivalentes JPEG. Os navegadores modernos suportam-no em 95%.' },

    { type: 'title', text: 'Compressão Lossy vs Lossless', level: 3 },
    { type: 'comparative', items: [
        {
            title: 'Compressão Lossy',
            description: 'JPG, WebP - Remove informação visual impercetível',
            icon: 'mdi:compress',
            points: [
                'Reduz 70-90% do peso original',
                'Impercetível ao olho humano se a qualidade for mantida >75%',
                'Ideal para fotografia realista',
                'Não recomendado para logótipos ou texto nítido'
            ],
            highlight: true
        },
        {
            title: 'Compressão Lossless',
            description: 'PNG, WebP lossless - Mantém 100% dos dados visuais',
            icon: 'mdi:shield',
            points: [
                'Reduz 20-50% do peso',
                'Qualidade perfeita, sem degradação',
                'Ideal para gráficos, logótipos, transparências',
                'Ficheiros mais pesados que em Lossy'
            ]
        }
    ], columns: 2 },

    { type: 'title', text: 'Impacto no SEO e na Conversão', level: 3 },
    { type: 'list', items: [
        '<strong>Core Web Vitals:</strong> O Google penaliza sites lentos. Imagens otimizadas melhoram o LCP (Largest Contentful Paint) diretamente.',
        '<strong>Taxa de Rejeição:</strong> Cada segundo de atraso = 7% mais rejeição. Imagens mais rápidas = menos utilizadores que abandonam o site.',
        '<strong>Ranking de Pesquisa:</strong> A velocidade é um fator de posicionamento. Otimizar imagens impulsiona o posicionamento.',
        '<strong>Conversão:</strong> Tempos de carregamento mais rápidos = mais conversões. Estudos mostram +10% de conversão com a otimização.'
    ], icon: 'mdi:check' },

    { type: 'proscons', items: [
        {
            pro: 'Privacidade total: processamento 100% local, sem servidores na nuvem',
            con: 'Requer navegador com suporte para Canvas API (é universal)'
        },
        {
            pro: 'WebP é 25-35% menor que o JPEG com igual qualidade',
            con: 'Versões antigas do Safari e IE não suportam WebP (fallback disponível)'
        },
        {
            pro: 'Processamento instantâneo de múltiplas imagens',
            con: 'Imagens muito grandes (>50MB) podem exigir tempo de espera'
        },
        {
            pro: 'Redimensionamento opcional: reduz a resolução bem como a compressão',
            con: 'Redimensionar perde informação - melhor otimizar a resolução na fonte'
        }
    ], proTitle: 'Vantagens', conTitle: 'Limitações' },

    { type: 'diagnostic', variant: 'warning', title: 'Cuidado: Compressão Excessiva Degrada', icon: 'mdi:alert', badge: 'Qualidade', html: 'Mantenha a qualidade >75% para fotografia e >85% para conteúdo editorial. Abaixo disso, os artefactos de compressão (manchas, riscas) tornam-se visíveis. Uma imagem que parece boa em miniatura pode parecer má em tamanho grande.' },

    { type: 'glossary', items: [
        {
            term: 'Compressão Lossy',
            definition: 'Remove dados visuais que o olho humano percebe como \"ruído\". Ideal para fotografia. JPEG, WebP lossy, HEIC são lossy.'
        },
        {
            term: 'Compressão Lossless',
            definition: 'Reduz o tamanho sem perder informação visual. PNG e WebP lossless. Ideal para gráficos, logótipos, transparências.'
        },
        {
            term: 'Core Web Vitals (Google)',
            definition: 'Métricas de experiência do utilizador: LCP (velocidade de carregamento), FID (latência de interação), CLS (estabilidade visual). Afetam o ranking SEO.'
        },
        {
            term: 'WebP',
            definition: 'Formato desenvolvido pela Google. 25-35% menor que o JPEG. Suportado por 95% dos navegadores modernos (todos exceto IE).'
        },
        {
            term: 'Artefactos de Compressão',
            definition: 'Defeitos visuais causados por compressão excessiva: manchas, riscas de cor, contornos desfocados. Impercetíveis com qualidade >75%.'
        }
    ] },

    { type: 'message', title: 'Otimização Web Profissional', ariaLabel: 'Informação sobre otimização de imagens para SEO', html: 'Não é vaidade técnica: comprimir imagens é um investimento direto na experiência do utilizador e no ranking do Google. Cada kilobyte conta no telemóvel. A nossa ferramenta transforma o que antes exigia software profissional ($$$) num processo gratuito de 3 cliques.' },

    { type: 'title', text: 'Preparado para a Web Moderna', level: 3 },
    { type: 'paragraph', html: 'Utilize compressão inteligente e o formato WebP para que a sua presença online seja rápida, responsiva e competitiva na pesquisa. Qualidade profissional, peso mínimo, carregamento instantâneo.' }
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

export const content: ImageCompressorLocaleContent = {
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
