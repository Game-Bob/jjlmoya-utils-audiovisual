import type { CategoryLocaleContent } from '../../types';

export const content: CategoryLocaleContent = {
  slug: 'audiovisual-photography',
  title: '시청각 및 사진 도구',
  description: '영화 제작자, 사진작가 및 디지털 시청각 콘텐츠 제작자를 위한 전문가용 도구 및 계산기.',
  seo: [
    {
      type: 'summary',
      title: '전문 시청각 도구',
      items: [
        '타임랩스, 효과 및 구도를 위한 스마트 계산기.',
        'EXIF 메타데이터를 삭제하는 개인정보 보호 도구.',
        '자막 동기화 및 타이밍 편집.',
        '해상도 분석, 인쇄 품질 및 최적의 시청 거리.'
      ],
    },
    {
      type: 'title',
      text: '시청각 제작을 위한 전문 툴박스',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '당사의 종합 유틸리티 제품군은 시청각 제작의 모든 단계에서 발생하는 가장 일반적인 기술적 과제를 해결합니다. 영화 같은 타임랩스를 위한 정밀한 간격 계산부터 멀티미디어 파일의 EXIF 메타데이터 삭제를 통한 개인정보 보호까지 지원합니다.',
    },
    {
      type: 'stats',
      items: [
        {
          value: '12+',
          label: '특화된 도구',
          icon: 'mdi:cog'
        },
        {
          value: '100%',
          label: '정밀한 계산',
          icon: 'mdi:chart-line'
        },
        {
          value: '0%',
          label: '서버 저장 데이터',
          icon: 'mdi:shield-check'
        }
      ],
      columns: 3
    },
    {
      type: 'title',
      text: '도구 카테고리',
      level: 3,
    },
    {
      type: 'comparative',
      items: [
        {
          title: '타임랩스 및 시네마틱',
          description: '시네마틱 샷의 간격, 총 소요 시간 및 프레임 속도를 계산합니다.',
          icon: 'mdi:film',
          points: [
            '필요 프레임 수 계산',
            '초/분 단위 소요 시간',
            '가변 재생 속도'
          ]
        },
        {
          title: '개인정보 및 메타데이터',
          description: '파일에서 EXIF 데이터 및 민감한 메타데이터를 제거하여 개인정보를 보호합니다.',
          icon: 'mdi:lock',
          points: [
            'EXIF 데이터 분석',
            '위치 메타데이터 삭제',
            '기기 정보 제거'
          ]
        },
        {
          title: '자막 편집',
          description: '밀리초 단위로 자막을 동기화, 조정 및 편집합니다.',
          icon: 'mdi:text',
          points: [
            '실시간 동기화',
            '시작/종료 시간 편집',
            '전체 지연 시간 조정'
          ]
        },
        {
          title: '이미지 분석',
          description: '해상도, 인쇄 및 시청 거리에 대한 기술적 파라미터를 계산합니다.',
          icon: 'mdi:image',
          points: [
            'DPI 및 해상도 계산',
            '권장 시청 거리',
            '인쇄 품질 분석'
          ],
          highlight: true
        }
      ],
      columns: 2
    },
    {
      type: 'title',
      text: '당사의 도구를 선택해야 하는 이유',
      level: 3,
    },
    {
      type: 'proscons',
      items: [
        {
          pro: '100% 브라우저 기반 처리 - 귀하의 데이터는 서버로 업로드되지 않습니다',
          con: '자바스크립트를 지원하는 최신 브라우저가 필요합니다'
        },
        {
          pro: '모든 시청각 계산에서의 수학적 정밀함',
          con: '매우 특수한 경우 수동 검증이 필요할 수 있습니다'
        },
        {
          pro: '업계 전문가를 위해 설계된 직관적인 인터페이스',
          con: '데스크톱/태블릿 화면에서 최상의 경험을 제공합니다'
        },
        {
          pro: '사용 제한이 없는 완전 무료 도구',
          con: '전담 프리미엄 지원 없음 (커뮤니티 이용 가능)'
        }
      ],
      proTitle: '장점',
      conTitle: '고려 사항'
    },
    {
      type: 'title',
      text: '빠른 시작 가이드',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '프로젝트 유형에 따라 필요한 도구를 선택합니다',
        '기술 파라미터(프레임, 해상도, 시간 등)를 입력합니다',
        '즉각적인 계산과 정밀한 결과를 확인합니다',
        '결과를 내보내거나 워크플로우에 적용합니다',
        '횟수 제한 없이 여러 프로젝트에서 이 과정을 반복하세요'
      ],
      icon: 'mdi:arrow-right'
    },
    {
      type: 'tip',
      title: '프로 팁',
      html: '여러 클립이나 시퀀스 작업을 할 때는 주요 파라미터(카메라 해상도, 평소 프레임 속도, 자막 언어)를 문서에 저장해 두는 것이 좋습니다. 그러면 매번 다시 계산할 필요 없이 빠르게 액세스할 수 있습니다.'
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'EXIF',
          definition: '디지털 이미지에 메타데이터(날짜, 카메라, GPS 위치 등)를 저장하는 파일 형식입니다. 개인정보 보호 위험이 될 수 있습니다.'
        },
        {
          term: 'FPS (프레임 퍼 세컨드)',
          definition: '초당 재생되는 프레임 수입니다. 일반적인 값: 24 fps (영화), 25 fps (PAL), 30 fps (NTSC), 60 fps (부드러운 비디오).'
        },
        {
          term: 'DPI (도트 퍼 인치)',
          definition: '인쇄 시 해상도 측정 단위입니다. DPI가 높을수록 품질이 좋아집니다. 전문가급 사진의 경우 최소 300 DPI가 권장됩니다.'
        },
        {
          term: '타임랩스 (Timelapse)',
          definition: '정기적인 간격으로 프레임을 캡처하여 시간을 가속화함으로써 빠른 움직임 효과를 만드는 영화 기법입니다.'
        },
        {
          term: '자막 동기화',
          definition: '자막의 시작/종료 시간을 영화나 시리즈의 오디오 및 비디오와 맞추는 과정입니다.'
        },
        {
          term: '메타데이터',
          definition: '미디어 파일에 숨겨진 콘텐츠 설명 정보(작성자, 생성일, 사용 기기, 위치 등)입니다.'
        }
      ]
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: '올바른 도구를 선택하는 방법',
      icon: 'mdi:help-circle',
      badge: '선택 가이드',
      html: '<strong>타임랩스를 만드시나요?</strong> -> 타임랩스 계산기를 사용하세요.<br><strong>개인정보를 보호해야 하나요?</strong> -> 메타데이터 삭제 도구.<br><strong>자막 작업을 하시나요?</strong> -> 자막 동기화 및 편집기.<br><strong>이미지를 최적화해야 하나요?</strong> -> 해상도 및 시청 거리 계산기.'
    },
    {
      type: 'card',
      title: '주요 기능',
      html: '당사의 모든 도구는 브라우저 내에서 <strong>100% 로컬</strong>로 작동합니다. 이는 최대 수준의 개인정보 보호, 즉각적인 속도 및 오프라인 액세스(초기 로드 후)를 의미합니다.'
    },
    {
      type: 'message',
      title: '개인정보 보호',
      ariaLabel: '개인정보 보호 및 데이터 저장 정보',
      html: '당사는 귀하의 시청각 데이터를 저장, 처리 또는 공유하지 않습니다. 모든 계산 및 메타데이터 삭제는 귀하의 장치에서만 이루어집니다. 귀하의 콘텐츠에 대한 완전한 통제권은 귀하에게 있습니다.'
    }
  ],
};
