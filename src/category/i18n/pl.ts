import type { CategoryLocaleContent } from '../../types';

export const content: CategoryLocaleContent = {
  slug: 'audiowizualne-fotografia',
  title: 'Narzędzia Audiowizualne i Fotograficzne',
  description: 'Profesjonalne narzędzia i kalkulatory dla filmowców, fotografów i twórców cyfrowych treści audiowizualnych.',
  seo: [
    {
      type: 'summary',
      title: 'Profesjonalne Narzędzia Audiowizualne',
      items: [
        'Inteligentne kalkulatory do timelapsów, efektów i kompozycji.',
        'Narzędzia prywatności do czyszczenia metadanych EXIF.',
        'Synchronizacja napisów i edycja czasu.',
        'Analiza rozdzielczości, jakości druku i optymalnej odległości oglądania.'
      ],
    },
    {
      type: 'title',
      text: 'Profesjonalny Przybornik do Produkcji Audiowizualnej',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Nasz kompleksowy zestaw narzędzi rozwiązuje najczęstsze wyzwania techniczne na każdym etapie produkcji audiowizualnej. Od precyzyjnych obliczeń interwałów dla kinowych timelapsów po ochronę prywatności poprzez czyszczenie metadanych EXIF w plikach multimedialnych.',
    },
    {
      type: 'stats',
      items: [
        {
          value: '12+',
          label: 'Specjalistyczne narzędzia',
          icon: 'mdi:cog'
        },
        {
          value: '100%',
          label: 'Precyzyjne obliczenia',
          icon: 'mdi:chart-line'
        },
        {
          value: '0%',
          label: 'Dane zapisane na serwerze',
          icon: 'mdi:shield-check'
        }
      ],
      columns: 3
    },
    {
      type: 'title',
      text: 'Kategorie Narzędzi',
      level: 3,
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Timelapse i Kinematografia',
          description: 'Oblicz interwały, całkowity czas trwania i liczbę klatek na sekundę dla swoich ujęć kinowych.',
          icon: 'mdi:film',
          points: [
            'Obliczanie wymaganej liczby klatek',
            'Czas trwania w sekundach/minutach',
            'Zmienna prędkość odtwarzania'
          ]
        },
        {
          title: 'Prywatność i Metadane',
          description: 'Chroń swoją prywatność, usuwając dane EXIF i wrażliwe metadane ze swoich plików.',
          icon: 'mdi:lock',
          points: [
            'Analiza danych EXIF',
            'Czyszczenie metadanych lokalizacji',
            'Usuwanie informacji o urządzeniu'
          ]
        },
        {
          title: 'Edycja Napisów',
          description: 'Synchronizuj, dostosowuj i edytuj napisy z precyzją co do milisekundy.',
          icon: 'mdi:text',
          points: [
            'Synchronizacja w czasie rzeczywistym',
            'Edycja czasu wejścia/wyjścia',
            'Globalna regulacja opóźnienia'
          ]
        },
        {
          title: 'Analiza Obrazu',
          description: 'Oblicz parametry techniczne dotyczące rozdzielczości, druku i odległości oglądania.',
          icon: 'mdi:image',
          points: [
            'Obliczanie DPI i rozdzielczości',
            'Zalecana odległość oglądania',
            'Analiza jakości druku'
          ],
          highlight: true
        }
      ],
      columns: 2
    },
    {
      type: 'title',
      text: 'Dlaczego warto wybrać nasze narzędzia',
      level: 3,
    },
    {
      type: 'proscons',
      items: [
        {
          pro: 'Przetwarzanie w 100% w przeglądarce - Twoje dane nigdy nie trafiają na serwery',
          con: 'Wymaga nowoczesnej przeglądarki z obsługą JavaScript'
        },
        {
          pro: 'Matematyczna precyzja we wszystkich obliczeniach audiowizualnych',
          con: 'Bardzo specyficzne przypadki mogą wymagać ręcznej walidacji'
        },
        {
          pro: 'Intuicyjny interfejs zaprojektowany dla profesjonalistów z branży',
          con: 'Najlepsze doświadczenie na ekranach komputerów/tabletów'
        },
        {
          pro: 'Całkowicie bezpłatne narzędzia bez limitów użycia',
          con: 'Brak dedykowanego wsparcia premium (dostępna społeczność)'
        }
      ],
      proTitle: 'Zalety',
      conTitle: 'Uwagi'
    },
    {
      type: 'title',
      text: 'Szybki Start',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Wybierz potrzebne narzędzie w zależności od typu projektu',
        'Wprowadź parametry techniczne (klatki, rozdzielczość, czasy itp.)',
        'Uzyskaj natychmiastowe obliczenia i precyzyjne wyniki',
        'Wyeksportuj lub zastosuj wyniki w swoim przepływie pracy',
        'Powtarzaj proces dla wielu projektów bez ograniczeń'
      ],
      icon: 'mdi:arrow-right'
    },
    {
      type: 'tip',
      title: 'Pro Tip',
      html: 'Przy pracy z wieloma klipami lub sekwencjami zalecamy zapisanie kluczowych parametrów (rozdzielczość kamery, zwykła liczba klatek na sekundę, język napisów) w dokumencie. Dzięki temu szybko do nich wrócisz bez konieczności ponownego przeliczania za każdym razem.'
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'EXIF',
          definition: 'Format pliku przechowujący metadane w obrazach cyfrowych (data, aparat, lokalizacja GPS itp.). Może stanowić zagrożenie dla prywatności.'
        },
        {
          term: 'FPS (Klatki na sekundę)',
          definition: 'Liczba klatek wyświetlanych w każdej sekundzie. Typowe wartości: 24 fps (kino), 25 fps (PAL), 30 fps (NTSC), 60 fps (płynne wideo).'
        },
        {
          term: 'DPI (Punkty na cal)',
          definition: 'Miara rozdzielczości w druku. Wyższe DPI = lepsza jakość. Dla profesjonalnej fotografii zalecane jest minimum 300 DPI.'
        },
        {
          term: 'Timelapse',
          definition: 'Technika filmowa przyspieszająca czas poprzez rejestrowanie klatek w regularnych odstępach czasu, aby stworzyć efekt szybkiego ruchu.'
        },
        {
          term: 'Synchronizacja Napisów',
          definition: 'Proces dopasowania czasu rozpoczęcia i zakończenia wyświetlania napisów do dźwięku i obrazu filmu lub serialu.'
        },
        {
          term: 'Metadane',
          definition: 'Ukryte informacje w plikach multimedialnych opisujące zawartość (autor, data utworzenia, użyte urządzenie, lokalizacja itp.).'
        }
      ]
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Jak wybrać właściwe narzędzie',
      icon: 'mdi:help-circle',
      badge: 'Przewodnik Wyboru',
      html: '<strong>Tworzysz timelapse?</strong> -> Użyj kalkulatora timelapse.<br><strong>Musisz chronić prywatność?</strong> -> Narzędzie do czyszczenia metadanych.<br><strong>Pracujesz z napisami?</strong> -> Synchronizator i edytor napisów.<br><strong>Musisz zoptymalizować obraz?</strong> -> Kalkulator rozdzielczości i odległości oglądania.'
    },
    {
      type: 'card',
      title: 'Kluczowa Funkcjonalność',
      html: 'Wszystkie nasze narzędzia działają <strong>w 100% lokalnie</strong> w Twojej przeglądarce. Oznacza to maksymalną prywatność, natychmiastową prędkość i dostęp offline (po wstępnym załadowaniu).'
    },
    {
      type: 'message',
      title: 'Ochrona Prywatności',
      ariaLabel: 'Informacje o prywatności i przechowywaniu danych',
      html: 'Nie przechowujemy, nie przetwarzamy ani nie udostępniamy Twoich danych audiowizualnych. Wszystkie obliczenia i czyszczenie metadanych odbywają się wyłącznie na Twoim urządzeniu. Masz pełną kontrolę nad swoimi treściami.'
    }
  ],
};
