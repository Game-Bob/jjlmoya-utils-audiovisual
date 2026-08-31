import { bibliography } from '../bibliography';
import { createSchemas } from '../schema';
import type { VideoExportPlannerLocaleContent } from '../entry';
import type { VideoExportPlannerUI } from '../ui';

const ui: VideoExportPlannerUI = {
  workflowHint: '화면, 오디오 및 재생 시간을 설정하세요. 아래 데이터 릴이 인코더용 내보내기 예상치로 변환합니다.',
  presetLabel: '납품 프리셋으로 시작하기',
  presetYoutube: 'YouTube SDR',
  presetSocial: '소셜 1080p 60',
  presetMaster: '4K 마스터 납품',
  sourceSettingsTitle: '내보내기 설정',
  resolutionLabel: '프레임 크기',
  frameRateLabel: '프레임 레이트',
  codecLabel: '비디오 코덱',
  durationLabel: '프로그램 재생 시간',
  minutesUnit: '분',
  videoBitrateLabel: '비디오 비트레이트',
  audioBitrateLabel: '오디오 비트레이트',
  overheadLabel: '컨테이너 오버헤드',
  selectedOutputTitle: '선택된 내보내기',
  estimatedFileSizeLabel: '예상 파일 크기',
  totalDataRateLabel: '총 데이터 전송률',
  videoDataLabel: '비디오 스트림',
  audioDataLabel: '오디오 스트림',
  containerOverheadLabel: '컨테이너 오버헤드',
  dataReelLabel: '시간 경과에 따른 선택 내보내기를 보여주는 데이터 릴',
  comparisonTitle: '코덱별 기준점',
  codecColumn: '코덱',
  suggestedVideoColumn: '권장 비디오 전송률',
  estimatedSizeColumn: '예상 크기',
  planningNote: '코덱 행은 용량 계획용 참고치이며 동일한 화질을 보장하지는 않습니다.',
  statusReady: '계산 준비 완료',
  statusCheck: '강조된 가정 사항을 확인하세요',
  warningDuration: '파일을 계산하려면 0보다 큰 재생 시간을 입력하세요.',
  warningVideoBitrate: '해상도 대비 비디오 비트레이트가 너무 낮습니다. 압축 손실을 확인하세요.',
  warningAudioBitrate: '오디오 비트레이트가 일반 범위를 초과했습니다. 용량 증가가 의도된 것인지 확인하세요.',
  warningOverhead: '컨테이너 오버헤드가 높습니다. 저장 공간을 확보하기 전에 메타데이터를 확인하세요.',
  resolution480: '480p 854 x 480',
  resolution720: '720p 1280 x 720',
  resolution1080: '1080p 1920 x 1080',
  resolution1440: '1440p 2560 x 1440',
  resolution2160: '4K 3840 x 2160',
  codecH264: 'H.264 AVC',
  codecH265: 'H.265 HEVC',
  codecAv1: 'AV1',
  faqTitle: '비디오 내보내기 플래너 자주 묻는 질문',
  bibliographyTitle: '출처',
};

const faq = [
  { question: '예상 비디오 파일 크기는 어떻게 계산되나요?', answer: '비디오 및 오디오 비트레이트를 더하고 재생 시간을 곱한 후 컨테이너 오버헤드 비율을 적용합니다.' },
  { question: '코덱 비교표의 기준점이 다른 이유는 무엇인가요?', answer: 'H.264, H.265, AV1은 동일한 원본 소재에서도 압축 효율이 다르기 때문입니다.' },
  { question: '권장 비트레이트를 필수 기준으로 사용해야 하나요?', answer: '아닙니다. 인코더 및 영상에 맞게 테스트하기 위한 초기 기준값으로 활용하세요.' },
  { question: '플랫폼 업로드 후의 용량도 예측할 수 있나요?', answer: '플랫폼에서 재인코딩하기 전의 파일 크기를 예상합니다.' },
];

const howTo = [
  { name: '납품 포맷 선택', text: '편집 타임라인과 일치하는 프레임 크기 및 프레임 레이트를 선택합니다.' },
  { name: '코덱 및 비트레이트 선택', text: '사용할 코덱을 선택하고 비디오 및 오디오 비트레이트를 입력합니다.' },
  { name: '재생 시간 및 오버헤드 설정', text: '재생 시간을 분 단위로 입력하고 컨테이너 오버헤드 비율을 설정합니다.' },
  { name: '비교 및 저장 공간 확보', text: '예상 용량을 확인하고 내보내기용 저장 공간을 확보합니다.' },
];

const seo = [
  { type: 'summary' as const, title: '비디오 내보내기 전 저장 공간 계획', items: ['재생 시간 및 비트레이트로 파일 크기 예상', 'H.264, H.265, AV1 시나리오 비교', '비디오, 오디오 및 컨테이너 오버헤드 분리 계산', '플랫폼 재압축을 제외한 순수 내보내기 계산'] },
  { type: 'title' as const, text: '내보내기 예상치 해석 방법', level: 2 as const },
  { type: 'paragraph' as const, html: '비디오 내보내기는 시간의 흐름에 따른 비트 스트림입니다. 비디오와 오디오 비트레이트를 합산하여 전체 파일 크기를 바이트 단위로 계산합니다.' },
  { type: 'title' as const, text: '초기 비트레이트 설정 방법', level: 2 as const },
  { type: 'paragraph' as const, html: '목표 플랫폼의 권장 사양에서 시작하세요. 전체 렌더링 전에 반드시 짧은 샘플 영상으로 화질을 확인하세요.' },
  { type: 'list' as const, items: ['원본 타임라인과 프레임 레이트 일치시키기', 'Mbps와 kbps 단위 구분하기', '임시 렌더링 및 백업을 위한 여유 공간 확보하기', '실제 재생 크기로 테스트 샘플 확인하기'] },
  { type: 'title' as const, text: '코덱 비교표 활용법', level: 2 as const },
  { type: 'paragraph' as const, html: '코덱 비교표는 저장 공간 계획을 돕기 위한 가이드입니다. 실제 결과는 영상의 복잡도에 따라 달라집니다.' },
  { type: 'tip' as const, title: '계산 결과의 한계', html: '계산 결과가 최종 화질을 보장하지는 않습니다. 최종 납품 전 샘플을 검증하세요.' },
];

const title = '비디오 내보내기 비트레이트 및 파일 크기 플래너';
const description = '비디오 재생 시간과 비트레이트로 내보내기 용량을 계산하고 H.264, H.265, AV1 코덱별 기준치를 비교하세요.';

export const content: VideoExportPlannerLocaleContent = {
  slug: 'video-export-bitrate-file-size-planner', title, description, ui, seo, faq, bibliography, howTo,
  schemas: createSchemas({ title, description, faq, howTo, language: 'ko' }),
};
