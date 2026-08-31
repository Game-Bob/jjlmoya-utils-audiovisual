import { bibliography } from '../bibliography';
import { createSchemas } from '../schema';
import type { VideoExportPlannerLocaleContent } from '../entry';
import type { VideoExportPlannerUI } from '../ui';

const ui: VideoExportPlannerUI = {
  workflowHint: 'Ustaw obraz, dzwiek i czas trwania. Ponizsza rolka danych przekształci te wybory w szacunkowa wartosc eksportu dla Twojego kodera.',
  presetLabel: 'Rozpocznij od szablonu docelowego',
  presetYoutube: 'YouTube SDR',
  presetSocial: 'Social 1080p 60',
  presetMaster: 'Przekazanie 4K Master',
  sourceSettingsTitle: 'Ustawienia eksportu',
  resolutionLabel: 'Rozmiar klatki',
  frameRateLabel: 'Liczba klatek na sekunde',
  codecLabel: 'Kodek wideo',
  durationLabel: 'Czas trwania programu',
  minutesUnit: 'minut',
  videoBitrateLabel: 'Bitrate wideo',
  audioBitrateLabel: 'Bitrate audio',
  overheadLabel: 'Narzut kontenera',
  selectedOutputTitle: 'Wybrany eksport',
  estimatedFileSizeLabel: 'Szacowany rozmiar pliku',
  totalDataRateLabel: 'Całkowita przepływnosc danych',
  videoDataLabel: 'Strumien wideo',
  audioDataLabel: 'Strumien audio',
  containerOverheadLabel: 'Narzut kontenera',
  dataReelLabel: 'Rolka danych pokazujaca wybrany eksport w czasie',
  comparisonTitle: 'Punkty wyjsciowe dla kodekow',
  codecColumn: 'Kodek',
  suggestedVideoColumn: 'Sugerowana przepływnosc wideo',
  estimatedSizeColumn: 'Szacowany rozmiar',
  planningNote: 'Wiersze kodekow sa wytycznymi planowania i nie gwarantuja identycznej jakosci.',
  statusReady: 'Gotowy do szacowania',
  statusCheck: 'Sprawdz wyroznione załozenia',
  warningDuration: 'Dodaj czas trwania wiekszy niz zero, aby oszacowac plik.',
  warningVideoBitrate: 'Bitrate wideo jest niezwykle niski dla tej rozdzielczosci. Sprawdz kompresje.',
  warningAudioBitrate: 'Bitrate audio przekracza typowy zakres. Potwierdz, czy dodatkowe miejsce jest zamierzone.',
  warningOverhead: 'Narzut kontenera jest wysoki. Sprawdz metadane przed rezerwacja miejsca.',
  resolution480: '480p 854 x 480',
  resolution720: '720p 1280 x 720',
  resolution1080: '1080p 1920 x 1080',
  resolution1440: '1440p 2560 x 1440',
  resolution2160: '4K 3840 x 2160',
  codecH264: 'H.264 AVC',
  codecH265: 'H.265 HEVC',
  codecAv1: 'AV1',
  faqTitle: 'Pytania dotyczące planera eksportu wideo',
  bibliographyTitle: 'Źródła',
};

const faq = [
  { question: 'Jak obliczany jest szacowany rozmiar pliku wideo?', answer: 'Planer sumuje bitrate wideo i audio, mnoży łączną przepływność przez czas trwania i dodaje procentowy narzut kontenera.' },
  { question: 'Dlaczego tabela kodeków pokazuje różne punkty wyjściowe?', answer: 'H.264, H.265 i AV1 osiągają różną wydajność kompresji na tym samym materiale.' },
  { question: 'Czy należy traktować sugerowany bitrate jako wymóg?', answer: 'Nie. Traktuj go jako punkt wyjścia do testów na własnym materiale wideo.' },
  { question: 'Czy planer przewiduje rozmiar po przesłaniu na platformę?', answer: 'Szacuje rozmiar pliku przed transkodowaniem wykonywanym przez platformę.' },
];

const howTo = [
  { name: 'Wybierz format wyjściowy', text: 'Wybierz rozmiar klatki i liczbę klatek odpowiadające sekwencji.' },
  { name: 'Wybierz kodek i bitrate', text: 'Wybierz kodek i wprowadź bitrate wideo oraz audio.' },
  { name: 'Ustaw czas trwania i narzut', text: 'Wprowadź czas w minutach i zostaw rezerwę na narzut kontenera.' },
  { name: 'Porównaj i zarezerwuj miejsce', text: 'Odczytaj rozmiar i zarezerwuj odpowiednią przestrzeń dyskową.' },
];

const seo = [
  { type: 'summary' as const, title: 'Zaplanuj miejsce przed eksportem wideo', items: ['Szacuj rozmiar pliku na podstawie czasu trwania i bitrate', 'Porównaj scenariusze dla H.264, H.265 i AV1', 'Rozdziel narzut wideo, audio i kontenera', 'Pomiń rekompresję platformy w obliczeniach'] },
  { type: 'title' as const, text: 'Co oznacza szacunkowy rozmiar eksportu', level: 2 as const },
  { type: 'paragraph' as const, html: 'Eksport wideo to strumień bitów w czasie. Planer przelicza bitrate wideo i audio na łączny rozmiar pliku wyrażony w bajtach.' },
  { type: 'title' as const, text: 'Jak wybrać początkowy bitrate', level: 2 as const },
  { type: 'paragraph' as const, html: 'Rozpocznij od specyfikacji platformy docelowej. Przed wyrenderowaniem całości przetestuj krótki fragment wideo.' },
  { type: 'list' as const, items: ['Dopasuj klatkaż do oryginalnej sekwencji.', 'Różnicuj Mbps od kbps.', 'Zarezerwuj dodatkowe miejsce na pliki robocze.', 'Sprawdź próbkę w pełnej rozdzielczości.'] },
  { type: 'title' as const, text: 'Jak czytać porównanie kodeków', level: 2 as const },
  { type: 'paragraph' as const, html: 'Tabela kodeków pomaga zaplanować przestrzeń dyskową. Ostateczny wynik zależy od złożoności sceny.' },
  { type: 'tip' as const, title: 'Ograniczenia szacunków', html: 'Wynik nie gwarantuje ostatecznej jakości obrazu. Przetestuj próbkę przed przekazaniem.' },
];

const title = 'Planer bitrate i rozmiaru pliku eksportu wideo';
const description = 'Szacuj rozmiar pliku wideo na podstawie czasu trwania i bitrate oraz porównuj punkty startowe dla H.264, H.265 i AV1.';

export const content: VideoExportPlannerLocaleContent = {
  slug: 'planer-bitrate-rozmiaru-pliku-eksportu-wideo', title, description, ui, seo, faq, bibliography, howTo,
  schemas: createSchemas({ title, description, faq, howTo, language: 'pl' }),
};
