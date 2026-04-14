import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { PrivacyBlurUI, PrivacyBlurLocaleContent } from '../index';

const slug = 'editor-privacidade-online-pixelizar-desfocar-rostos-fotos';
const title = 'Editor de Privacidade Online: Pixelize e esconda rostos em fotos';
const description = 'Proteja a sua identidade censurando áreas sensíveis das suas fotos. Pixelize rostos, desfoque documentos ou cubra informações privadas 100% localmente.';

const ui: PrivacyBlurUI = {
    toolPixel: "Pixelizar",
    toolBlur: "Desfocar",
    toolSolid: "Sólido",
    intensityLabel: "Intensidade",
    undoButton: "Desfazer",
    downloadButton: "Guardar",
    dropTitle: "Editor de Privacidade",
    dropSubtitle: "Arraste a sua imagem aqui ou clique para começar",
    privacySecureLabel: "100% Local",
    offlineLabel: "Offline",
    autoDetectFaces: "Auto Detetar",
    loadingModels: "A carregar modelos...",
    noFacesDetected: "Nenhum rosto detetado automaticamente.",
    faqTitle: "Perguntas Frequentes",
    bibliographyTitle: "Referências"
};

const faq: PrivacyBlurLocaleContent['faq'] = [
    {
        question: "As minhas fotos são enviadas para algum servidor?",
        answer: "Não. O editor de privacidade funciona inteiramente no seu navegador. Os píxeis são modificados localmente e nada é enviado para fora do seu dispositivo.",
    },
    {
        question: "Como funciona a deteção automática de rostos?",
        answer: "Utilizamos uma rede neuronal leve (TinyFaceDetector) que corre no seu navegador para identificar características faciais sem necessidade de uma ligação externa.",
    },
];

const howTo: PrivacyBlurLocaleContent['howTo'] = [
    {
        name: "Carregue a sua foto",
        text: "Arraste ou selecione a imagem que contém informações sensíveis que deseja ocultar.",
    },
    {
        name: "Escolha a ferramenta",
        text: "Selecione entre pixelizar, desfocar ou cobertura sólida dependendo do nível de privacidade de que necessita.",
    },
    {
        name: "Marque a área",
        text: "Clique e arraste sobre a zona que deseja proteger (rostos, matrículas, nomes, etc.).",
    },
    {
        name: "Guarde o resultado",
        text: "Descarregue a imagem processada com a segurança de que os dados originais estão inacessíveis.",
    },
];

const bibliography: PrivacyBlurLocaleContent['bibliography'] = [
    {
        name: "Privacy by Design (PbD) - AGPD",
        url: "https://www.aepd.es/es/guias-y-herramientas/guias/guia-de-privacidad-desde-el-diseno",
    },
];

const seo: PrivacyBlurLocaleContent['seo'] = [
    {
        type: 'summary',
        title: 'Editor de Privacidade: Pixelizar, Desfocar e Ocultar',
        items: [
            'Três ferramentas de edição: Pixelizar, Desfocar, Cobertura Sólida',
            'Deteção automática de rostos com IA (TinyFaceDetector)',
            'Processamento 100% local - as suas fotos nunca saem do navegador',
            'Sem marcas de água, sem limites, completamente gratuito'
        ]
    },
    { type: 'title', text: 'Privacidade Digital: Como Proteger os Seus Dados Visuais', level: 2 },
    { type: 'paragraph', html: 'Na era das redes sociais, partilhar fotos sem controlo pode expor dados pessoais sensíveis. A nossa ferramenta permite-lhe ocultar informações críticas (rostos, matrículas, nomes, moradas) antes de as carregar para a Internet, garantindo que a sua privacidade permanece sob o seu total controlo.' },

    { type: 'stats', items: [
        { value: '3', label: 'Métodos de Ocultação', icon: 'mdi:tools' },
        { value: '100%', label: 'Privacidade Local', icon: 'mdi:shield-check' },
        { value: 'IA', label: 'Deteção de Rostos', icon: 'mdi:brain' }
    ], columns: 3 },

    { type: 'title', text: 'Os Três Métodos de Ocultação Explicados', level: 3 },
    { type: 'comparative', items: [
        {
            title: 'Pixelizar',
            description: 'Divide a área em quadrados, impossível de reconhecer',
            icon: 'mdi:blur',
            points: [
                'Máxima ofuscação irreversível',
                'Mais seguro contra reconhecimento facial',
                'Visível, clarifica que algo foi ocultado',
                'Ideal: rostos em fotos públicas'
            ]
        },
        {
            title: 'Desfocar (Blur)',
            description: 'Suavização Gaussiana - aspeto mais natural',
            icon: 'mdi:blur-off',
            points: [
                'Aspeto visual mais elegante',
                'Mantém alguma coerência de tons',
                'Matematicamente reversível (teoricamente)',
                'Ideal: informações menos sensíveis'
            ],
            highlight: true
        },
        {
            title: 'Cobertura Sólida',
            description: 'Bloco de cor opaco - máxima privacidade',
            icon: 'mdi:rectangle',
            points: [
                'Ocultação visível e óbvia',
                'Máxima segurança legal/privacidade',
                'Altera a composição visual',
                'Ideal: documentos, dados sensíveis'
            ]
        }
    ], columns: 3 },

    { type: 'title', text: 'Deteção Automática de Rostos com IA', level: 3 },
    { type: 'paragraph', html: 'A nossa ferramenta utiliza o TinyFaceDetector, uma rede neuronal compacta que corre diretamente no seu navegador para identificar rostos automaticamente:' },
    { type: 'list', items: [
        '<strong>100% Local:</strong> O modelo de IA corre no seu GPU/CPU, não em servidores remotos.',
        '<strong>Sem Internet:</strong> Após o descarregamento inicial, funciona completamente offline.',
        '<strong>Privacidade Garantida:</strong> Ninguém vê os rostos: nem a Google, nem a OpenAI, nem nós.',
        '<strong>Automático One-Click:</strong> Deteta rostos e permite-lhe escolher ocultar com um clique.'
    ], icon: 'mdi:check' },

    { type: 'card', title: 'Privacy by Design', html: 'Ao processar as imagens utilizando o GPU e CPU locais do seu navegador, garantimos que as fotos originais nunca saem do seu dispositivo. Mesmo que mude de ideias, nada foi transmitido. Este é o padrão máximo de privacidade digital.' },

    { type: 'title', text: 'Casos de Uso de Privacidade', level: 3 },
    { type: 'table', headers: ['Informação Sensível', 'Método Recomendado', 'Urgência'], rows: [
        ['Rostos de pessoas', 'Pixelizar ou Desfocar', 'Crítico'],
        ['Matrículas de veículos', 'Pixelizar (irreversível)', 'Crítico'],
        ['Documentos de identidade', 'Cobertura Sólida ou Pixelizar', 'Crítico'],
        ['Nomes/Moradas escritos', 'Cobertura Sólida ou Pixelizar', 'Alta'],
        ['Números de telefone', 'Pixelizar ou Cobertura', 'Alta'],
        ['Informação médica', 'Cobertura Sólida', 'Crítico'],
        ['Sinais WiFi visíveis', 'Pixelizar', 'Média']
    ] },

    { type: 'proscons', items: [
        {
            pro: 'Privacidade total: processamento 100% local, sem servidores, sem armazenamento',
            con: 'Requer navegador moderno com suporte para Canvas e WebGL'
        },
        {
            pro: 'Deteção automática de rostos poupa tempo manual',
            con: 'IA não é perfeita - rostos de perfil ou parciais podem não ser detetados'
        },
        {
            pro: 'Três métodos permitem escolher segurança vs estética',
            con: 'Sem opções avançadas (smart warp, preenchimento contextual)'
        },
        {
            pro: 'Completamente gratuito, sem publicidade, sem limites',
            con: 'Não equivale a software profissional como o Photoshop'
        }
    ], proTitle: 'Vantagens', conTitle: 'Limitações' },

    { type: 'diagnostic', variant: 'warning', title: 'Aviso: Desfocar NÃO é 100% seguro', icon: 'mdi:alert', badge: 'Segurança', html: 'O desfoque gaussiano é matematicamente reversível através de algoritmos inversos sofisticados. Se a informação for CRÍTICA (documentos legais, identidade), utilize <strong>Pixelizar ou Cobertura Sólida</strong>. O desfoque é esteticamente melhor, mas menos seguro.' },

    { type: 'glossary', items: [
        {
            term: 'Pixelização',
            definition: 'Reduzir a resolução dividindo a área em blocos de cor uniforme. Irreversível. Máxima segurança contra reconhecimento facial por IA.'
        },
        {
            term: 'Desfoque Gaussiano',
            definition: 'Suavização matemática baseada na distribuição normal. Teoricamente reversível através de deconvolution, mas praticamente muito difícil.'
        },
        {
            term: 'Cobertura Sólida',
            definition: 'Bloco opaco de cor uniforme. Máxima segurança, máxima privacidade legal, menos elegante visualmente.'
        },
        {
            term: 'TinyFaceDetector',
            definition: 'Rede neuronal convolucional leve (CNN) para detetar rostos. Corre localmente no navegador sem necessidade de um servidor externo.'
        },
        {
            term: 'Privacy by Design (PbD)',
            definition: 'Abordagem onde a privacidade é integrada a partir do design do sistema, não adicionada mais tarde. A nossa abordagem local é Privacy by Design.'
        }
    ] },

    { type: 'message', title: 'Privacidade no Seu Controlo', ariaLabel: 'Informações sobre proteção de privacidade', html: 'Não armazenamos nem processamos as suas fotos em servidores remotos. Não existem cookies de rastreio. Sem históricos de edição. Não sabemos o que oculta porque nunca vemos as suas imagens. Controlo total, privacidade total, liberdade total.' },

    { type: 'title', text: 'Partilhe com Segurança nas Redes Sociais', level: 3 },
    { type: 'paragraph', html: 'Antes de publicar qualquer foto na Internet, pergunte-se: existe informação que eu preferia que não fosse pública? Rostos de crianças, matrículas, moradas, números de documentos. Uma sessão de privacidade de 2 minutos agora evita anos de problemas.' }
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

export const content: PrivacyBlurLocaleContent = {
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
