import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { PrintQualityCalculatorUI, PrintQualityCalculatorLocaleContent } from '../index';

const slug = 'calculadora-qualidade-impressao-pixeis-para-cm-dpi';
const title = 'Calculadora de Qualidade de Impressão: Pixais para CM e DPI';
const description = 'Calcule o tamanho máximo de impressão das suas fotos com base na resolução. Converta píxeis em centímetros e polegadas para garantir uma impressão profissional.';

const ui: PrintQualityCalculatorUI = {
    dropTitle: "Analisar Resolução",
    dropSubtitle: "Arraste a sua imagem para calcular o seu tamanho de impressão.",
    resultsTitle: "Especificações do Ficheiro",
    dpiDensityLabel: "Densidade de Impressão Desejada (DPI)",
    dpiPointsLabel: "pontos por polegada",
    maxPrintTitle: "Tamanho Máximo de Impressão",
    standardFormatsTitle: "Formatos Padrão Suportados",
    formatColumn: "Formato",
    measureColumn: "Medidas",
    supportColumn: "Suportado?",
    qualityExcellent: "Qualidade Excelente",
    qualityGood: "Boa Qualidade",
    qualityFair: "Qualidade de Ecrã",
    qualityPoor: "Não Adequado",
    qualityExcellentDesc: "Ideal para revistas de arte, livros de fotografia e visualização de perto.",
    qualityGoodDesc: "Suficiente para pósteres e visualização a média distância.",
    qualityFairDesc: "Adequado para visualização digital ou painéis publicitários distantes.",
    qualityPoorDesc: "A imagem parecerá pixelizada. A impressão não é recomendada.",
    unitCm: "cm",
    unitInches: "pol",
    dpiScreenLabel: "Ecrã",
    dpiNewspaperLabel: "Jornal",
    dpiPrintLabel: "Impressão",
    dpiFineArtLabel: "Fine Art",
    formatPostal: "Postal",
    formatQuartilla: "Quartilha",
    formatFolio: "Fólio",
    formatDoubleFolio: "Duplo Fólio",
    formatSmallPoster: "Póster Pequeno",
    formatLargePoster: "Póster Grande",
    formatPlane: "Planta",
    supportedText: "Sim (Coberto)",
    notSupportedPrefix: "Não (",
    invalidImageError: "Por favor, selecione uma imagem válida",
    faqTitle: "Perguntas Frequentes",
    bibliographyTitle: "Referências"
};

const faq: PrintQualityCalculatorLocaleContent['faq'] = [
    {
        question: "O que é DPI e por que é importante?",
        answer: "DPI (Dots Per Inch - Pontos por Polegada) indica quantos pontos de tinta a impressora colocará numa polegada linear. Quanto maior o DPI, mais nítida será a imagem, mas menor será o tamanho físico total que os seus píxeis cobrirão.",
    },
    {
        question: "Qual é o DPI ideal para imprimir uma foto?",
        answer: "O padrão industrial é de 300 DPI para uma excelente qualidade fotográfica. Para impressões de grande formato que serão vistas de longe, 150 DPI podem ser suficientes.",
    },
    {
        question: "Posso aumentar o DPI da minha imagem sem perder qualidade?",
        answer: "Não. Aumentar o DPI sem alterar os píxeis simplesmente reduz o tamanho da impressão. Se \"inventar\" píxeis através de software (upscaling), a imagem poderá parecer desfocada.",
    },
];

const howTo: PrintQualityCalculatorLocaleContent['howTo'] = [
    {
        name: "Carregue a sua imagem",
        text: "Carregue a fotografia que deseja imprimir para conhecer as suas dimensões em píxeis.",
    },
    {
        name: "Ajuste o DPI",
        text: "Deslize a barra para ver como o tamanho final muda de acordo com a densidade de pontos (72 a 600 DPI).",
    },
    {
        name: "Verifique o formato",
        text: "Consulte a tabela de formatos padrão (A4, A3, etc.) para ver se a sua resolução cobre o papel desejado.",
    },
    {
        name: "Confirme a qualidade",
        text: "Certifique se de que o indicador marca \"Qualidade Excelente\" antes de enviar para impressão.",
    },
];

const bibliography: PrintQualityCalculatorLocaleContent['bibliography'] = [
    {
        name: "Formatos de papel internacionais (ISO 216)",
        url: "https://www.iso.org/standard/36631.html",
    },
    {
        name: "Guia de resolução de imagem - Adobe",
        url: "https://www.adobe.com/pt/creativecloud/photography/discover/image-resolution.html",
    },
];

const seo: PrintQualityCalculatorLocaleContent['seo'] = [
    {
        type: 'summary',
        title: 'Cálculo Profissional de Resolução de Impressão',
        items: [
            'Converta píxeis em centímetros e polegadas com precisão',
            'Calcule o tamanho máximo com base no DPI desejado',
            'Compatibilidade com formatos padrão (A4, A3, etc.)',
            'Guia para 4 níveis de qualidade: Excelente a Não Adequado'
        ]
    },
    { type: 'title', text: 'Guia Definitivo de Qualidade de Impressão e DPI', level: 2 },
    { type: 'paragraph', html: 'Já alguma vez imprimiu uma foto e o resultado foi desfocado ou pixelizado? O segredo reside na relação matemática entre <strong>Píxeis</strong> e <strong>DPI</strong> (Pontos por Polegada). Esta ferramenta calcula o tamanho máximo exato a que pode imprimir as suas imagens sem perder a qualidade profissional.' },

    { type: 'stats', items: [
        { value: '300', label: 'DPI Padrão Profissional', icon: 'mdi:target' },
        { value: '100%', label: 'Cálculos Precisos', icon: 'mdi:check' },
        { value: 'ISO 216', label: 'Formatos Suportados', icon: 'mdi:file-document' }
    ], columns: 3 },

    { type: 'title', text: 'Compreender o DPI: Píxeis vs Pontos', level: 3 },
    { type: 'paragraph', html: 'A confusão comum é pensar que DPI e píxeis são a mesma coisa. Não são. Os píxeis estão NO seu ficheiro digital. O DPI é a forma como a impressora os converte em tinta no papel.' },
    { type: 'list', items: [
        '<strong>DPI (Pontos por Polegada):</strong> Quantos pontos de tinta a impressora coloca numa polegada linear (2,54 cm).',
        '<strong>Píxeis:</strong> Pequenos quadrados de dados no seu ficheiro digital. Uma foto de 3000x2000 píxeis tem informação constante, independentemente do DPI.',
        '<strong>A Fórmula:</strong> Tamanho de impressão (polegadas) = Píxeis / DPI. Exemplo: 3000 píxeis / 300 DPI = 10 polegadas (25,4 cm)'
    ], icon: 'mdi:check' },

    { type: 'title', text: 'Níveis de Qualidade DPI Explicados', level: 3 },
    { type: 'table', headers: ['DPI', 'Qualidade Visual', 'Casos de Uso', 'Distância de Visualização'], rows: [
        ['600+ DPI', 'Excelente (Perfeito)', 'Livros de arte, revistas de luxo, fotografia fine art', 'Menos de 10 cm'],
        ['300-400 DPI', 'Excelente (Profissional)', 'Fotografia, livros, catálogos de empresas', '20-30 cm (mão)'],
        ['150-200 DPI', 'Boa (Impressão Web)', 'Pósteres, calendários, visualização média', '1-2 metros'],
        ['72-100 DPI', 'Ecrã (Aceitável)', 'Painéis publicitários, faixas distantes', '5+ metros'],
        ['10-30 DPI', 'Baixa (Não Adequado)', 'Painéis gigantes, visualização extremamente distante', '50+ metros']
    ] },

    { type: 'card', title: 'A Regra de Ouro dos 300 DPI', html: 'Para impressão fotográfica e editorial profissional, o padrão industrial é <strong>300 DPI</strong>. Isto garante que o olho humano a uma distância normal (20-30 cm) não perceba os pontos individuais de tinta. Com menos de 300 DPI, a grelha de píxeis torna-se visível.' },

    { type: 'comparative', items: [
        {
            title: 'Fotografia de Mão (Fotos 10x15)',
            description: '300 DPI obrigatórios - visualização de perto',
            icon: 'mdi:image',
            points: [
                'A 3000x2000 píxeis = máximo 10x6,7 polegadas',
                'Qualidade Excelente garantida',
                'Padrão para álbuns e presentes'
            ]
        },
        {
            title: 'Póster de Parede A3 (30x42 cm)',
            description: '150 DPI suficientes - visualização à distância',
            icon: 'mdi:wall-fire',
            points: [
                'Visualização de 1-2 metros',
                'Menos píxeis necessários',
                'Poupe na qualidade da câmara'
            ],
            highlight: true
        },
        {
            title: 'Painel Publicitário (200x300 cm)',
            description: '15-30 DPI - visualização de muitos metros',
            icon: 'mdi:sign',
            points: [
                'Observado a mais de 20 metros de distância',
                'Mesmo a baixa resolução parece bem',
                'Otimize ficheiros grandes'
            ]
        }
    ], columns: 3 },

    { type: 'title', text: 'Preparar Ficheiros para Impressão Profissional', level: 3 },
    { type: 'proscons', items: [
        {
            pro: 'CMYK vs RGB: As impressoras usam tinta (CMYK), os ecrãs usam luz (RGB). Converta para evitar surpresas nas cores.',
            con: 'As cores podem mudar ao converter - verifique a pré-visualização primeiro'
        },
        {
            pro: 'Sangria: Adicione 3mm extra por lado se a imagem deve chegar à borda do papel',
            con: 'Sem sangria, as bordas cortadas podem ficar brancas'
        },
        {
            pro: 'O upscaling NÃO funciona: Aumentar os píxeis no Photoshop adiciona informação falsa (desfocagem)',
            con: 'Se deseja imprimir em grande, precisa da foto original em alta resolução'
        },
        {
            pro: 'Formatos: TIFF sem compressão ou JPEG de alta qualidade para fotos; vetorial (AI, EPS) para logótipos',
            con: 'O PNG não suporta nativamente CMYK na maioria das tipografias'
        }
    ], proTitle: 'Recomendações', conTitle: 'Contrapartidas' },

    { type: 'diagnostic', variant: 'warning', title: 'Erro Comum: O Mito do Upscaling', icon: 'mdi:alert', badge: 'Crítico', html: '<strong>NÃO aumente o DPI no Photoshop sem alterar os píxeis.</strong> Aumentar de 72 DPI para 300 DPI simplesmente reduz o tamanho físico da impressão. Se \"adicionar píxeis\" através de interpolação (upscaling), a imagem parecerá desfocada. Precisa de píxeis REAIS da fonte.' },

    { type: 'glossary', items: [
        {
            term: 'DPI (Pontos por Polegada)',
            definition: 'Medida de resolução de impressão: quantos pontos de tinta por polegada linear (2,54 cm). 300 DPI = 300x300 = 90.000 pontos por polegada quadrada.'
        },
        {
            term: 'CMYK',
            definition: 'Espaço de cor de impressão: Ciano, Magenta, Amarelo, Preto (Key black). Baseado em tinta subtrativa. Diferente de RGB (luz aditiva de ecrãs).'
        },
        {
            term: 'Sangria (Bleed)',
            definition: 'Área extra (tipicamente 3mm) que é impressa e depois cortada. Garante que a imagem chegue ao bordo sem deixar margens brancas.'
        },
        {
            term: 'Resolução Nativa',
            definition: 'Píxeis REAIS captados pela câmara, sem manipulação. Aumentar o DPI sem alterar píxeis não gera \"resolução nativa\".'
        },
        {
            term: 'Interpolação (Upscaling)',
            definition: 'Algoritmo que inventa novos píxeis com base nos existentes. Útil para pequenos aumentos, mas perde nitidez em grandes ampliações.'
        }
    ] },

    { type: 'message', title: 'Precisão Técnica para Resultados Profissionais', ariaLabel: 'Informações sobre cálculos de impressão', html: 'A nossa calculadora converte píxeis em centímetros considerando os padrões internacionais (ISO 216 para papel). Não é apenas uma calculadora: é o seu validador para saber se essa foto serve para esse tamanho de impressão mantendo a qualidade profissional.' },

    { type: 'title', text: 'Conclusão: Imprima Sem Surpresas', level: 3 },
    { type: 'paragraph', html: 'A diferença entre uma bela impressão e uma dececionante é conhecer a relação entre píxeis e DPI. Use esta calculadora para validar os seus ficheiros ANTES de ir à tipografia. Assim evita gastos desnecessários e resultados frustrantes.' }
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

export const content: PrintQualityCalculatorLocaleContent = {
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
