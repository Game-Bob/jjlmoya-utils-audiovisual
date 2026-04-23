import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ExifCleanerUI, ExifCleanerLocaleContent } from '../index';

const slug = 'limpeza-metadados-exif-remover-gps-privacidade-fotos';
const title = 'Limpeza de Metadados EXIF: Remover GPS e Dados Ocultos das Fotos';
const description = 'Ferramenta online gratuita para apagar metadados EXIF, coordenadas GPS e especificações da câmara das suas imagens antes de as partilhar. 100% privado: funciona sem carregar fotos para a Internet.';

const ui: ExifCleanerUI = {
    dropTitle: "Arraste a sua imagem para aqui",
    dropSubtitle: "Remova metadados GPS, modelo da câmara e definições ocultas.",
    dropLocalInfo: "Processamento 100% local. Nada é carregado para a nuvem.",
    selectButton: "Selecionar Imagem",
    processingText: "A limpar metadados...",
    analysisCompleted: "Análise Concluída",
    downloadButton: "Descarregar Imagem Limpa",
    resetButton: "Limpar outra imagem",
    privacyRiskTitle: "RISCOS DE PRIVACIDADE DETETADOS:",
    gpsLabel: "GPS:",
    gpsDetected: "DETETADO",
    gpsNotFound: "NÃO ENCONTRADO",
    cameraLabel: "CÂMARA:",
    softwareLabel: "SOFTWARE:",
    dateLabel: "DATA:",
    otherTechnicalDetails: "OUTROS DETALHES TÉCNICOS",
    noMetadataFound: "Nenhum metadado EXIF legível encontrado.",
    alreadyCleanInfo: "A imagem já poderá estar limpa.",
    previewLabel: "Pré-visualização",
};

const faq: ExifCleanerLocaleContent['faq'] = [
    {
        question: "O que são metadados EXIF?",
        answer: "EXIF (Exchangeable Image File Format) são informações ocultas que a sua câmara ou telemóvel guarda dentro de cada foto. Incluem a data exata, o modelo do dispositivo, definições de disparo (ISO, abertura) e, o que é mais crítico, as coordenadas GPS do local onde a foto foi tirada.",
    },
    {
        question: "É seguro utilizar esta ferramenta online?",
        answer: "Sim, porque o processamento é 100% local no seu navegador. As suas fotos nunca são carregadas para qualquer servidor; a limpeza acontece diretamente na memória do seu dispositivo, garantindo privacidade absoluta.",
    },
    {
        question: "Que dados específicos a ferramenta remove?",
        answer: "Apaga todas as tags EXIF (GPS, marca da câmara, número de série), IPTC (direitos de autor, autor) e XMP (histórico de edição). A sua imagem torna-se 'limpa', preservando apenas os píxeis visuais.",
    },
    {
        question: "A imagem perde qualidade ao limpar os metadados?",
        answer: "Não. Apenas removemos o 'cabeçalho' de dados técnicos do ficheiro. Os dados da imagem (píxeis) permanecem idênticos, pelo que a qualidade visual não é minimamente afetada.",
    },
];

const howTo: ExifCleanerLocaleContent['howTo'] = [
    {
        name: "Selecione as imagens",
        text: "Arraste as suas fotos ou selecione as no seu explorador de ficheiros. Pode processar várias de uma só vez.",
    },
    {
        name: "Analise os dados atuais",
        text: "A ferramenta mostrar lhe á que informações sensíveis detetou (por exemplo, 'Coordenadas GPS detetadas').",
    },
    {
        name: "Processe e limpe",
        text: "Clique no botão de limpeza para remover instantaneamente todas as tags de metadados.",
    },
    {
        name: "Descarregue fotos seguras",
        text: "Guarde as novas versões das suas imagens, agora anonimizadas e prontas para serem partilhadas em segurança nas redes sociais.",
    },
];

const seo: ExifCleanerLocaleContent['seo'] = [
    {
        type: 'summary',
        title: 'Limpeza de Metadados EXIF: Proteja a Sua Privacidade',
        items: [
            'Remova instantaneamente coordenadas GPS e localização das suas fotos',
            'Apague o modelo da câmara, número de série e informações técnicas',
            'Processamento 100% baseado no navegador - as imagens nunca saem do seu dispositivo',
            'Mantém a qualidade visual - apenas os dados ocultos são removidos'
        ]
    },
    { type: 'title', text: 'Guia Completo sobre Privacidade e Metadados EXIF na Fotografia Digital', level: 2 },
    { type: 'paragraph', html: 'Já se perguntou quanta informação pessoal partilha ao carregar uma foto para as redes sociais? Os metadados EXIF são como uma <strong>impressão digital invisível</strong> que pode revelar tudo, desde a sua localização exata em casa até ao preço do seu equipamento fotográfico. Este guia explica como proteger a sua privacidade de forma eficaz.' },

    { type: 'stats', items: [
        { value: '100%', label: 'Privacidade - Processamento Local', icon: 'mdi:shield-check' },
        { value: '0%', label: 'Dados guardados em servidores', icon: 'mdi:database' },
        { value: 'Instantânea', label: 'Remoção de Metadados', icon: 'mdi:lightning-bolt' }
    ], columns: 3 },

    { type: 'title', text: 'Que informações estão ocultas nas suas fotos?', level: 3 },
    { type: 'paragraph', html: 'Mais de 90% das fotos digitais contêm informações sensíveis que podem comprometer a sua segurança. Aqui estão todos os dados que podem ser revelados:' },
    { type: 'list', items: [
        '<strong>Coordenadas GPS:</strong> A latitude e longitude exatas onde a captura foi feita (morada de casa, trabalho, locais visitados frequentemente).',
        '<strong>Identificação do Equipamento:</strong> Marca, modelo e número de série da câmara ou smartphone (informação valiosa).',
        '<strong>Definições Técnicas:</strong> ISO, abertura (f/), tempo de exposição e distância focal (permite identificar o seu equipamento específico).',
        '<strong>Data e Hora Exatas:</strong> Uma linha do tempo completa das suas atividades diárias.',
        '<strong>Histórico de Edição:</strong> Software utilizado, software de edição e data da última modificação.',
        '<strong>Dados de Copyright:</strong> Fotógrafo, direitos de autor e notas pessoais.'
    ] },

    { type: 'title', text: 'Riscos de Segurança Reais: Casos de Uso', level: 3 },
    { type: 'comparative', items: [
        {
            title: 'Fotógrafos Profissionais',
            description: 'Risco de roubo de equipamento caro identificado pelo número de série',
            icon: 'mdi:camera',
            points: [
                'Ladrões procuram fotógrafos com equipamento valioso',
                'O GPS identifica a morada de casa do proprietário',
                'O número de série facilita a revenda na dark web'
            ]
        },
        {
            title: 'Pais e Influenciadores',
            description: 'Perigo extremo: localização em tempo real de crianças',
            icon: 'mdi:alert',
            points: [
                'Predadores rastreiam localizações usando OSINT',
                'Predadores podem identificar rotinas diárias',
                'Risco de perseguição e rastreamento físico'
            ],
            highlight: true
        },
        {
            title: 'Utilizadores de Redes Sociais',
            description: 'Exposição da privacidade pessoal e profissional',
            icon: 'mdi:share-variant',
            points: [
                'Publicar do escritório revela a localização do local de trabalho',
                'A geolocalização permite inferir o salário aproximado',
                'Dados públicos permitem a criação de perfis direcionados'
            ]
        },
        {
            title: 'Viajantes e Nómadas',
            description: 'Perigo de roubo em casas desocupadas',
            icon: 'mdi:map',
            points: [
                'GPS publicado indica casa vazia durante a viagem',
                'Dados do equipamento atraem criminosos',
                'Históricos de viagens revelam horários e padrões'
            ]
        }
    ], columns: 2 },

    { type: 'title', text: 'Como funciona esta ferramenta', level: 3 },
    { type: 'list', items: [
        '<strong>1. Selecione as suas imagens:</strong> Arraste as fotos ou use o seletor. Pode processar várias simultaneamente.',
        '<strong>2. Análise automática:</strong> A ferramenta deteta e mostra todos os metadados presentes (GPS, modelo da câmara, data, etc.).',
        '<strong>3. Limpeza instantânea:</strong> Com um clique, remove 100% dos metadados prejudiciais.',
        '<strong>4. Descarregamento seguro:</strong> Receba imagens anonimizadas prontas a partilhar nas redes sem riscos.',
        '<strong>5. Sem resíduos:</strong> A imagem limpa mantém toda a sua qualidade visual original.'
    ], icon: 'mdi:check' },

    { type: 'card', title: 'Tecnologia de Privacidade', icon: 'mdi:shield-check', html: 'Esta ferramenta utiliza a <strong>API Canvas do navegador</strong> para criar uma cópia limpa da imagem píxel por píxel, garantindo que:<br><br>- Nenhum dado é enviado para servidores<br>- A sua imagem nunca sai do seu dispositivo<br>- O processamento é 100% anónimo e seguro<br>- Pode utilizá-la mesmo sem ligação à Internet (após o carregamento inicial)' },

    { type: 'title', text: 'Que dados específicos são removidos?', level: 3 },
    { type: 'table', headers: ['Tipo de Metadados', 'Exemplos', 'Risco'], rows: [
        ['EXIF (Intercambiável)', 'GPS, ISO, Abertura, Velocidade de Obturador, Modelo de Câmara', 'CRÍTICO'],
        ['IPTC (Publicação)', 'Direitos de Autor, Autor, Palavras-chave, Localização da Cena', 'ALTO'],
        ['XMP (XML)', 'Histórico de Edição, Software Utilizado, Edições Efetuadas', 'MÉDIO'],
        ['Dados Básicos do Ficheiro', 'Data de Criação, Hora Exata, Dispositivo', 'ALTO']
    ] },

    { type: 'proscons', items: [
        {
            pro: 'Privacidade Total - processamento 100% baseado no navegador',
            con: 'Requer um navegador moderno com suporte para JavaScript'
        },
        {
            pro: 'Instantânea - limpar uma foto demora menos de 1 segundo',
            con: 'O processamento de fotos grandes pode ser lento em dispositivos antigos'
        },
        {
            pro: 'Zero Perda de Qualidade - apenas remove dados técnicos, não píxeis',
            con: 'Não edita a imagem (cortes, rotações, etc.)'
        },
        {
            pro: 'Completamente Gratuita e Sem Limites - processe fotos ilimitadas',
            con: 'Sem suporte premium ou armazenamento na nuvem'
        }
    ], proTitle: 'Vantagens Chave', conTitle: 'Limitações' },

    { type: 'tip', title: 'Dica de Segurança Digital', html: '<strong>Limpe as suas fotos ANTES de publicar</strong> em qualquer rede social. Mesmo que apague uma publicação, os metadados podem ter sido indexados por motores de busca ou arquivos. A prevenção é o melhor remédio. Torne isso um hábito: <br><br><em>Foto → Limpar EXIF → Publicar</em>' },

    { type: 'diagnostic', variant: 'warning', title: 'Riscos Reais de Não Limpar', icon: 'mdi:alert-circle', badge: 'Segurança Crítica', html: '<strong>Casos documentados:</strong><br>- Pais a publicar fotos de crianças - predadores rastrearam o GPS<br>- Fotógrafos em viagem - casas assaltadas enquanto estavam fora<br>- Influenciadores - locais de residência identificados por fãs obsessivos<br><br>Não é paranoia: é higiene digital básica em 2026.' },

    { type: 'glossary', items: [
        {
            term: 'EXIF',
            definition: 'Exchangeable Image File Format. Um padrão que armazena metadados técnicos em ficheiros de imagem: GPS, dados da câmara, definições de exposição. Presente em cerca de 90% das fotos digitais sem intenção do utilizador.'
        },
        {
            term: 'Coordenadas GPS',
            definition: 'Latitude e longitude precisas do local exato onde a foto foi tirada. Combinado com as redes sociais, permite o rastreamento físico de pessoas.'
        },
        {
            term: 'IPTC',
            definition: 'International Press Telecommunications Council. Metadados de publicação legíveis: direitos de autor, autor, palavras-chave, descrição. Padrão na fotografia profissional.'
        },
        {
            term: 'XMP',
            definition: 'Extensible Metadata Platform. Um formato XML que regista o histórico de edição em software como o Lightroom ou Photoshop. Pode revelar todas as edições efetuadas.'
        },
        {
            term: 'OSINT',
            definition: 'Open Source Intelligence. Uma técnica de recolha de informações públicas (redes sociais, metadados, registos) para traçar o perfil de pessoas sem o seu conhecimento.'
        },
        {
            term: 'Anonimização Digital',
            definition: 'O processo de remover ou ofuscar informações identificáveis: localização, dispositivo, padrões de comportamento. Essencial para a privacidade online.'
        }
    ] },

    { type: 'message', title: 'A Sua Privacidade é a Sua Responsabilidade', ariaLabel: 'Informação sobre privacidade e direitos de dados', html: 'Não guardamos, processamos ou partilhamos as suas imagens. <strong>Tem total controlo.</strong> Todas as operações ocorrem exclusivamente no seu navegador. Quando fecha este separador, não resta qualquer registo da sua atividade. É assim que protege a sua privacidade na Internet: ferramentas que respeitam os seus dados.' },

    { type: 'title', text: 'Conclusão: Partilhe Sem Rasto', level: 3 },
    { type: 'paragraph', html: 'Proteger a sua identidade digital começa nos pequenos detalhes. Limpar as suas fotos antes de as publicar é um <strong>hábito de higiene digital essencial</strong> em 2026. Não protege apenas a sua localização: protege a sua família, os seus bens e a sua privacidade profissional. Uma foto aparentemente inocente pode revelar mais sobre si do que alguma vez imaginou.' }
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

export const content: ExifCleanerLocaleContent = {
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
