import type { CategoryLocaleContent } from '../../types';

export const content: CategoryLocaleContent = {
  slug: 'audiovisual-e-fotografia',
  title: 'Ferramentas Audiovisuais e Fotografia',
  description: 'Ferramentas profissionais e calculadoras para cineastas, fotógrafos e criadores de conteúdo audiovisual digital.',
  seo: [
    {
      type: 'summary',
      title: 'Ferramentas Audiovisuais Profissionais',
      items: [
        'Calculadoras inteligentes para timelapses, efeitos e composição.',
        'Ferramentas de privacidade para limpar metadados EXIF.',
        'Sincronização de legendas e edição de tempo.',
        'Análise de resolução, qualidade de impressão e distância de visualização ideal.'
      ],
    },
    {
      type: 'title',
      text: 'Caixa de Ferramentas Profissional para Produção Audiovisual',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'A nossa suite abrangente de utilitários resolve os desafios técnicos mais comuns em todas as fases da produção audiovisual. Desde cálculos precisos de intervalos para timelapses cinematográficos até à proteção da privacidade através da limpeza de metadados EXIF nos seus ficheiros multimédia.',
    },
    {
      type: 'stats',
      items: [
        {
          value: '10+',
          label: 'Ferramentas especializadas',
          icon: 'mdi:cog'
        },
        {
          value: '100%',
          label: 'Cálculos precisos',
          icon: 'mdi:chart-line'
        },
        {
          value: '0%',
          label: 'Dados armazenados no servidor',
          icon: 'mdi:shield-check'
        }
      ],
      columns: 3
    },
    {
      type: 'title',
      text: 'Categorias de Ferramentas',
      level: 3,
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Timelapse e Cinemática',
          description: 'Calcule intervalos, duração total e taxas de fotogramas para as suas filmagens.',
          icon: 'mdi:film',
          points: [
            'Cálculo de fotogramas necessários',
            'Duração em segundos/minutos',
            'Velocidade de reprodução variável'
          ]
        },
        {
          title: 'Privacidade e Metadados',
          description: 'Proteja a sua privacidade removendo dados EXIF e metadados sensíveis dos seus ficheiros.',
          icon: 'mdi:lock',
          points: [
            'Análise de dados EXIF',
            'Limpeza de metadados de localização',
            'Remoção de informações do dispositivo'
          ]
        },
        {
          title: 'Edição de Legendas',
          description: 'Sincronize, ajuste e edite legendas com precisão de milissegundos.',
          icon: 'mdi:text',
          points: [
            'Sincronização em tempo real',
            'Edição de tempos de entrada/saída',
            'Ajuste global de atraso'
          ]
        },
        {
          title: 'Análise de Imagem',
          description: 'Calcule parâmetros técnicos para resolução, impressão e distância de visualização.',
          icon: 'mdi:image',
          points: [
            'Cálculo de DPI e resolução',
            'Distância de visualização recomendada',
            'Análise de qualidade de impressão'
          ],
          highlight: true
        }
      ],
      columns: 2
    },
    {
      type: 'title',
      text: 'Porquê Escolher as Nossas Ferramentas',
      level: 3,
    },
    {
      type: 'proscons',
      items: [
        {
          pro: 'Processamento 100% no navegador - os seus dados nunca são carregados para servidores',
          con: 'Requer um navegador moderno com suporte para JavaScript'
        },
        {
          pro: 'Precisão matemática em todos os cálculos audiovisuais',
          con: 'Casos muito específicos podem exigir validação manual'
        },
        {
          pro: 'Interface intuitiva concebida para profissionais da indústria',
          con: 'Melhor experiência em ecrãs de desktop/tablet'
        },
        {
          pro: 'Ferramentas completamente gratuitas sem limites de utilização',
          con: 'Sem suporte premium dedicado (comunidade disponível)'
        }
      ],
      proTitle: 'Vantagens',
      conTitle: 'Considerações'
    },
    {
      type: 'title',
      text: 'Guia de Início Rápido',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Selecione a ferramenta que necessita com base no seu tipo de projeto',
        'Introduza os parâmetros técnicos (fotogramas, resolução, tempos, etc.)',
        'Obtenha cálculos instantâneos e resultados precisos',
        'Exporte ou aplique os resultados no seu fluxo de trabalho',
        'Repita o processo para múltiplos projetos sem limites'
      ],
      icon: 'mdi:arrow-right'
    },
    {
      type: 'tip',
      title: 'Dica Pro',
      html: 'Para trabalhos com vários clips ou sequências, recomendamos guardar os seus parâmetros principais (resolução da câmara, taxa de fotogramas habitual, idioma das legendas) num documento. Desta forma, pode aceder rapidamente a eles sem precisar de recalcular cada vez.'
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'EXIF',
          definition: 'Formato de ficheiro que armazena metadatos em imagens digitais (data, câmara, localização GPS, etc.). Pode ser um risco para a privacidade.'
        },
        {
          term: 'FPS (Fotogramas por Segundo)',
          definition: 'Número de fotogramas reproduzidos a cada segundo. Valores comuns: 24 fps (cinema), 25 fps (PAL), 30 fps (NTSC), 60 fps (vídeo fluido).'
        },
        {
          term: 'DPI (Pontos por Polegada)',
          definition: 'Medida de resolução na impressão. Maior DPI = melhor qualidade. Para fotografia profissional, recomenda-se um mínimo de 300 DPI.'
        },
        {
          term: 'Timelapse',
          definition: 'Técnica cinematográfica que acelera o tempo capturando fotogramas em intervalos regulares para criar um efeito de movimento rápido.'
        },
        {
          term: 'Sincronização de Legendas',
          definition: 'Processo de alinhamento do tempo de início/fim das legendas com o áudio e vídeo de um filme ou série.'
        },
        {
          term: 'Metadatos',
          definition: 'Informações ocultas em ficheiros de média que descrevem o conteúdo (autor, data de criação, dispositivo utilizado, localização, etc.).'
        }
      ]
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Como Escolher a Ferramenta Certa',
      icon: 'mdi:help-circle',
      badge: 'Guia de Seleção',
      html: '<strong>Criar um timelapse?</strong> -> Use a calculadora de timelapse.<br><strong>Precisa de proteger a privacidade?</strong> -> Ferramenta de limpeza de metadatos.<br><strong>Trabalhar com legendas?</strong> -> Sincronizador e editor de legendas.<br><strong>Precisa de otimizar a imagem?</strong> -> Calculadora de resolução e distância de visualização.'
    },
    {
      type: 'card',
      title: 'Funcionalidade Chave',
      html: 'Todas as nossas ferramentas funcionam <strong>100% localmente</strong> no seu navegador. Isto significa máxima privacidade, velocidade instantânea e acesso offline (após o carregamento inicial).'
    },
    {
      type: 'message',
      title: 'Proteção de Privacidade',
      ariaLabel: 'Informações sobre privacidade e armazenamento de dados',
      html: 'Não armazenamos, processamos ou partilhamos os seus dados audiovisuais. Todos os cálculos e limpezas de metadatos ocorrem exclusivamente no seu dispositivo. Você tem o controlo total do seu conteúdo.'
    }
  ],
};
