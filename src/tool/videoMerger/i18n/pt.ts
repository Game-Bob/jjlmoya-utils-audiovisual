import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { VideoMergerUI, VideoMergerLocaleContent } from '../index';

const slug = 'juntar-videos-online';
const title = 'Juntar Vídeos Online: Una múltiplos vídeos rápido e grátis';
const description = 'Junte e concatene múltiplos vídeos em um só, gratuitamente, online e localmente. Sem marca d\'água, sem uploads, 100% privado no seu navegador.';

const ui: VideoMergerUI = {
    uploadTitle: "Faça upload dos seus ficheiros de vídeo",
    uploadFormats: "Arraste múltiplos vídeos ou clique para selecioná-los",
    privacyNote: "Os seus vídeos são processados 100% localmente. Nada é enviado para a internet.",
    addMoreBtn: "Adicionar mais vídeos",
    mergeBtn: "Juntar vídeos agora",
    mergingStatus: "A juntar vídeos...",
    downloadBtn: "Descarregar vídeo unificado",
    resetBtn: "Começar de novo",
    emptyList: "Arraste ou selecione vídeos para começar a juntá-los.",
    listTitle: "Ordem dos vídeos a juntar",
    optionsTitle: "Configurações de saída",
    optionResolution: "Resolução",
    optionFps: "Quadros por segundo (FPS)",
    optionsQualityNote: "A resolução final será ajustada mantendo a proporção original no formato letterbox se os vídeos tiverem dimensões diferentes.",
    faqTitle: "Perguntas Frequentes sobre Junção de Vídeos",
    bibliographyTitle: "Bibliografia e Referências",
    resolutionWarning: "Atenção: Alguns vídeos têm resoluções diferentes e serão adaptados automaticamente."
};

const faq: VideoMergerLocaleContent['faq'] = [
    {
        question: "É seguro fazer upload dos meus vídeos nesta ferramenta?",
        answer: "Sim, é totalmente seguro. A ferramenta funciona 100% localmente no seu navegador. Os seus vídeos nunca são transmitidos pela internet ou guardados em qualquer servidor.",
    },
    {
        question: "O que acontece se os meus vídeos tiverem dimensões diferentes?",
        answer: "A nossa ferramenta redimensiona automaticamente os vídeos para se adaptarem à resolução de saída escolhida. Para proporções que não correspondam exatamente, margens pretas (letterboxing) serão adicionadas para preservar a proporção original.",
    },
    {
        question: "O áudio dos vídeos é preservado ao juntá-los?",
        answer: "Sim. As faixas de áudio de cada vídeo são capturadas e misturadas sequencialmente em perfeita sincronização com cada segmento de imagem.",
    },
];

const howTo: VideoMergerLocaleContent['howTo'] = [
    {
        name: "Selecione ou arraste os seus vídeos",
        text: "Carregue todos os ficheiros de vídeo que deseja juntar diretamente do seu computador ou telemóvel.",
    },
    {
        name: "Organize a ordem",
        text: "Ordene os vídeos carregados utilizando os botões de cima e baixo na lista para decidir a sequência de reprodução.",
    },
    {
        name: "Ajuste as opções",
        text: "Escolha a resolução de saída e os quadros por segundo (FPS) do vídeo unificado.",
    },
    {
        name: "Juntar e exportar",
        text: "Pressione o botão de juntar. Aguarde o processamento em tempo real ser concluído e descarregue o ficheiro resultante.",
    },
];

const seo: VideoMergerLocaleContent['seo'] = [
    {
        type: 'summary',
        title: 'Junção Profissional de Vídeos 100% Local',
        items: [
            'Processamento em tempo real diretamente no seu navegador',
            'Suporta múltiplos vídeos de diferentes tamanhos e formatos (MP4, WEBM, MOV)',
            'Resolução de saída selecionável (720p, 1080p, 2K, 4K)',
            'Faixas de áudio combinadas de forma perfeitamente sequencial'
        ]
    },
    { type: 'title', text: 'Juntar Vídeos Online Grátis: Simplicidade e Privacidade sem Limites', level: 2 },
    { type: 'paragraph', html: 'Pergunta-se <strong>como juntar dois vídeos num só</strong> sem complicações? Já não precisa de descarregar programas pesados ou aplicações pagas. A nossa ferramenta para <strong>juntar vídeos online grátis</strong> permite-lhe concatenar e unir todos os clipes de que necessita em segundos. Por funcionar de forma 100% local, não tem de fazer o upload dos seus ficheiros para nenhum servidor, garantindo total privacidade e permitindo-lhe <strong>juntar vídeos pesados</strong> sem tempos de espera no upload.' },
    
    { type: 'title', text: 'Juntar Vídeos sem Marca de Água', level: 3 },
    { type: 'paragraph', html: 'Um dos maiores inconvenientes de outras aplicações é que estragam o seu conteúdo. Connosco, pode <strong>juntar vídeos online sem marca de água</strong>. O ficheiro que descarregar será exatamente a sua criação, limpa, profissional e pronta para partilhar no YouTube, Instagram, TikTok ou para uso pessoal.' },

    { type: 'stats', items: [
        { value: '100%', label: 'Privado e Local', icon: 'mdi:shield-check' },
        { value: '0MB', label: 'Sem Dados de Upload', icon: 'mdi:upload-off' },
        { value: '4K', label: 'Resolução Máxima', icon: 'mdi:video-high-definition' }
    ], columns: 3 },

    { type: 'title', text: 'Casos de Uso Comuns para Juntar Vídeos', level: 3 },
    { type: 'comparative', items: [
        {
            title: 'Redes Sociais',
            description: 'União rápida de stories, TikToks ou reels num único vídeo',
            icon: 'mdi:instagram',
            points: [
                'Junte pequenos clipes gravados com o telemóvel',
                'Prepare conteúdo sequencial para o Instagram ou YouTube',
                'União sem marcas de água irritantes'
            ]
        },
        {
            title: 'Apresentações',
            description: 'Junte introduções e gravações de demonstração',
            icon: 'mdi:presentation',
            points: [
                'Junte uma intro animada com o corpo da apresentação',
                'Junte curtas demonstrações de software',
                'Exportação limpa no formato padrão MP4/WEBM'
            ],
            highlight: true
        },
        {
            title: 'Compilações Familiares',
            description: 'Una múltiplos vídeos das suas férias ou celebrações',
            icon: 'mdi:home-heart',
            points: [
                'Crie um único vídeo com todos os momentos da festa',
                'Agrupe memórias de viagens cronologicamente',
                'Fácil de partilhar por estar num único ficheiro'
            ]
        },
        {
            title: 'Vídeos Educativos',
            description: 'Concatene capítulos ou aulas curtas de formação',
            icon: 'mdi:school',
            points: [
                'Agrupe pequenos tutoriais independentes',
                'Adicione um clipe de encerramento às suas aulas',
                'Estruture o seu curso de forma profissional'
            ]
        }
    ], columns: 2 },

    { type: 'title', text: 'A Melhor App para Juntar Vídeos pelo Navegador', level: 2 },
    { type: 'paragraph', html: 'Esta não é apenas mais uma página web; é uma verdadeira <strong>app para juntar vídeos</strong> que opera diretamente a partir do seu navegador graças às modernas APIs de vídeo HTML5. Pode <strong>juntar vídeos MP4</strong>, WEBM e mais, misturando resoluções (o nosso sistema aplica letterboxing automaticamente se as dimensões variarem) e escolhendo os quadros por segundo (FPS) da sua exportação final.' },

    { type: 'title', text: 'Comparação de Abordagens de Junção', level: 3 },
    { type: 'table', headers: ['Características', 'A Nossa Ferramenta Local', 'Conversores Online Clássicos', 'Editores Profissionais'], rows: [
        ['Privacidade', 'Total (Processado no seu dispositivo)', 'Baixa (Exige upload para servidores)', 'Total (Instalado no dispositivo)'],
        ['Consumo de Rede', 'Zero (Sem uploads de gigabytes)', 'Muito alto (Upload e download)', 'Zero'],
        ['Marca de Água', 'NÃO (100% limpo)', 'Sim (Nas versões gratuitas)', 'NÃO (Se comprar a licença)'],
        ['Preço', '100% Grátis', 'Grátis com limites ou subscrição', 'Normalmente caros'],
        ['Curva de Aprendizagem', 'Muito baixa (Arraste, ordene e junte)', 'Baixa', 'Muito alta (Requer treino)']
    ] },

    { type: 'proscons', items: [
        {
            pro: 'Privacidade garantida: Segurança máxima pois nenhum ficheiro sai do seu dispositivo',
            con: 'A velocidade de junção de vídeos pesados depende da RAM e do processador do seu computador'
        },
        {
            pro: 'Resultados profissionais: 100% grátis, sem registos e sem marcas de água',
            con: 'Ao juntar vídeos com dimensões díspares (vertical vs horizontal), serão aplicadas margens pretas'
        },
        {
            pro: 'Versatilidade: Exportação rápida com codificação eficiente para web e redes sociais',
            con: 'Não permite adicionar transições complexas (fades 3D) ou efeitos visuais cinematográficos'
        }
    ], title: 'Vantagens e Considerações' },

    { type: 'title', text: 'Comece a Juntar os Seus Vídeos Hoje Mesmo', level: 2 },
    { type: 'paragraph', html: 'Já não há desculpas para ter centenas de fragmentos de vídeo desorganizados. Faça upload dos seus ficheiros, coloque-os na ordem desejada e pressione o botão. Descubra a forma mais rápida, segura e privada de <strong>juntar vídeos online</strong>.' }
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

export const content: VideoMergerLocaleContent = {
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
