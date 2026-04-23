import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { SubtitleSyncUI, SubtitleSyncLocaleContent } from '../index';

const slug = 'sincronizar-legendas-srt-online-ajustar-tempo-gratis';
const title = 'Sincronizar Legendas SRT Online: Ajustar Tempo Gratuitamente';
const description = 'Ferramenta online para adiantar ou atrasar legendas SRT. Corrija facilmente o desfasamento temporal e descarregue o ficheiro sincronizado instantaneamente.';

const ui: SubtitleSyncUI = {
    dropTitle: "Arraste o seu ficheiro .SRT aqui",
    dropSubtitle: "ou clique para procurar",
    adjustTitle: "Ajustar Tempo",
    offsetLabel: "Desfasamento (segundos)",
    offsetHelp: "Use valores negativos para adiantar (ex: -1.5) e valores positivos para atrasar.",
    linesStat: "Linhas",
    firstStat: "Primeira Legenda",
    lastStat: "Última Legenda",
    originalLabel: "ORIGINAL",
    resultLabel: "RESULTADO",
    downloadButton: "Descarregar Corrigido",
    previewBadge: "PRÉ-VISUALIZAÇÃO",
    unitSeconds: "seg"
};

const faq: SubtitleSyncLocaleContent['faq'] = [
    {
        question: "Como posso sincronizar as minhas legendas se o áudio estiver adiantado?",
        answer: "Se o áudio aparecer antes do texto, deve atrasar as legendas. Introduza um valor positivo na calculadora (ex: 2.0 para atrasá-las em 2 segundos).",
    },
    {
        question: "Que formatos de ficheiro esta ferramenta aceita?",
        answer: "Atualmente, a ferramenta está otimizada para ficheiros .SRT (SubRip), que é o padrão mais comum em reprodutores de vídeo e plataformas de streaming.",
    },
    {
        question: "É seguro carregar os meus ficheiros de legendas?",
        answer: "Sim, porque o processamento é 100% local no seu dispositivo. Os seus ficheiros não são enviados para nenhum servidor; a sincronização acontece diretamente no seu navegador.",
    },
    {
        question: "Posso sincronizar apenas parte do ficheiro?",
        answer: "Não, esta ferramenta aplica um desfasamento constante a todo o ficheiro. Se o desfasamento for progressivo, poderá necessitar de uma edição mais avançada.",
    },
];

const howTo: SubtitleSyncLocaleContent['howTo'] = [
    {
        name: "Carregue o seu ficheiro SRT",
        text: "Arraste o ficheiro de legendas que deseja corrigir para a área de carregamento.",
    },
    {
        name: "Identifique o desfasamento",
        text: "Meça quanto atraso ou adiantamento as legendas têm em relação ao áudio no seu reprodutor.",
    },
    {
        name: "Ajuste o desfasamento",
        text: "Introduza os segundos positivos (atraso) ou negativos (adiantamento) no painel de controlo.",
    },
    {
        name: "Descarregue o ficheiro",
        text: "Verifique na pré visualização se os tempos estão corretos e clique em descarregar para obter o seu novo SRT.",
    },
];

const seo: SubtitleSyncLocaleContent['seo'] = [
    {
        type: 'summary',
        title: 'Sincronização Profissional de Legendas',
        items: [
            'Correção instantânea de desfasamentos áudio-legenda',
            'Suporta ficheiros SRT (SubRip) padrão',
            'Processamento 100% local - máxima privacidade',
            'Sem instalação, sem subscrição, completamente gratuito'
        ]
    },
    { type: 'title', text: 'Sincronização Perfeita de Legendas SRT', level: 2 },
    { type: 'paragraph', html: 'Não há nada mais frustrante para um espectador do que ver diálogos que não correspondem às vozes. O desfasamento de legendas ocorre geralmente devido a diferenças entre versões de vídeo: variações na taxa de fotogramas, cortes publicitários, intros de produção ou alterações na compressão. Com esta ferramenta, resolve o problema em segundos.' },

    { type: 'stats', items: [
        { value: '100%', label: 'Processamento Local', icon: 'mdi:shield' },
        { value: 'Milissegundos', label: 'Precisão', icon: 'mdi:clock-outline' },
        { value: 'Qualquer', label: 'SEM limite de ficheiro', icon: 'mdi:file-document' }
    ], columns: 3 },

    { type: 'title', text: 'Adiantar vs Atrasar: Guia Prático', level: 3 },
    { type: 'paragraph', html: 'O primeiro passo é identificar corretamente o tipo de desfasamento. Aqui está a lógica:' },
    { type: 'list', items: [
        '<strong>Atrasar (Valor Positivo):</strong> Quando vê o texto aparecer ANTES do som. As legendas estão adiantadas. Exemplo: +2.0 segundos.',
        '<strong>Adiantar (Valor Negativo):</strong> Quando vê o texto aparecer DEPOIS do som. As legendas estão atrasadas. Exemplo: -2.0 segundos.',
        '<strong>Teste e Ajuste:</strong> Comece com pequenos incrementos (0.5s) e use a pré-visualização para validar.'
    ], icon: 'mdi:arrow-right' },

    { type: 'card', title: 'Privacidade de Nível Profissional', html: 'Ao processar o ficheiro via JavaScript no lado do cliente, garantimos que o conteúdo das suas legendas nunca sai do seu computador. Essencial para tradutores e profissionais que lidam com material confidencial ou sob NDA.' },

    { type: 'title', text: 'Casos de Uso Comuns', level: 3 },
    { type: 'comparative', items: [
        {
            title: 'Tradutores e Legendadores',
            description: 'Sincronize traduções após trabalhar com múltiplas versões de vídeo',
            icon: 'mdi:translate',
            points: [
                'Ficheiros SRT de diferentes fontes',
                'Versionamento de conteúdo (cinema vs streaming)',
                'Entrega rápida sem mudar de ferramentas'
            ]
        },
        {
            title: 'Criadores de Conteúdo',
            description: 'Recupere legendas quando o vídeo foi processado com uma taxa de fotogramas diferente',
            icon: 'mdi:video',
            points: [
                'Reutilize legendas existentes',
                'Alterações de formato (720p para 1080p)',
                'Evite o re-ajuste manual de mais de 1000 linhas'
            ],
            highlight: true
        },
        {
            title: 'Utilizadores Casuais',
            description: 'Corrija legendas descarregadas que não se ajustam perfeitamente',
            icon: 'mdi:account',
            points: [
                'Legendas genéricas fora de sincronia',
                'Filmes de diferentes regiões (PAL vs NTSC)',
                'Streaming com versões editadas'
            ]
        }
    ], columns: 3 },

    { type: 'title', text: 'Por que as Legendas Ficam Fora de Sincronia', level: 3 },
    { type: 'table', headers: ['Causa Comum', 'Descrição Técnica', 'Solução'], rows: [
        ['Diferença de Framerate', '23.976 fps vs 25 fps - diferença acumulada', 'Ajuste de desfasamento único (esta ferramenta)'],
        ['Editorialização', 'Cortes de anúncios ou conteúdo adicional removido', 'Cálculo manual + sincronização'],
        ['Versão Regional', 'PAL (25 fps Europa) vs NTSC (29.97 fps USA)', 'Desfasamento matemático simples'],
        ['Alteração de Resolução', 'Re-codificação com diferente velocidade de processamento', 'Recálculo do ficheiro original']
    ] },

    { type: 'diagnostic', variant: 'info', title: 'Limitações Técnicas a Considerar', icon: 'mdi:information', badge: 'Importante', html: 'Esta ferramenta aplica um desfasamento <strong>constante</strong> a todo o ficheiro. Se o desfasamento for <strong>progressivo</strong> (começa bem mas fica gradualmente fora de sincronia), isso indica uma diferença persistente na taxa de fotogramas. Nesse caso, o ficheiro original necessita de reprocessamento em software de edição profissional.' },

    { type: 'proscons', items: [
        {
            pro: 'Velocidade extrema - processa ficheiros grandes em milissegundos',
            con: 'Ajusta apenas desfasamento fixo, não progressivos'
        },
        {
            pro: 'Privacidade total - o conteúdo nunca sai do seu navegador',
            con: 'Requer navegador moderno com JavaScript ativado'
        },
        {
            pro: 'Formato de ficheiro universal - funciona com qualquer SRT padrão',
            con: 'Não suporta outros formatos (ASS, VTT, SCC, etc.)'
        },
        {
            pro: 'Completamente gratuito, sem publicidade, sem rasteio',
            con: 'Sem histórico de alterações ou versionamento'
        }
    ], proTitle: 'Vantagens', conTitle: 'Limitações' },

    { type: 'glossary', items: [
        {
            term: 'SRT (SubRip)',
            definition: 'O formato de legenda mais universal: ficheiro de texto com números de sequência, tempos (hh:mm:ss,mmm) e texto. Padrão de facto em reprodutores e plataformas.'
        },
        {
            term: 'Desfasamento (Offset)',
            definition: 'Quantidade fixa de tempo adicionada ou subtraída a todos os tempos no ficheiro. Pode ser segundos positivos (atraso) ou negativos (adiantamento).'
        },
        {
            term: 'Taxa de Fotogramas (fps)',
            definition: 'Fotogrammi al secondo. 24p (cinema), 25p (PAL/Europa), 29.97p (NTSC/EUA), 60p (vídeo fluido). Diferenças causam desfasamentos cumulativos.'
        },
        {
            term: 'NTSC vs PAL',
            definition: 'Padrões de televisão regionais: PAL (25 fps) na Europa; NTSC (29.97 fps) nos EUA. Diferença de velocidade de cerca de 4%.'
        },
        {
            term: 'Desfasamento Progressivo',
            definition: 'Quando a sincronização começa correta mas acaba gradualmente fora de sincronia. Indica diferença de framerate, requer reprocessamento.'
        }
    ] },

    { type: 'message', title: 'Edição Profissional com Controlo Total', ariaLabel: 'Informação técnica sobre sincronização', html: 'A nossa abordagem é simples mas poderosa: um único desfasamento, aplicado instantaneamente, processado 100% no seu navegador. Sem nuvem, sem armazenamento, sem rasteio. Simplesmente carregue, ajuste, descarregue. Controlo total sobre o seu conteúdo.' },

    { type: 'title', text: 'Conclusão: Filmes Sem Interrupções', level: 3 },
    { type: 'paragraph', html: 'A sincronização perfeita de legendas é essencial para uma experiência audiovisual de qualidade. Com esta ferramenta, transforma uma experiência frustrante numa noite de cinema perfeita, sem a necessidade de software caro ou complicado.' }
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

export const content: SubtitleSyncLocaleContent = {
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
