import type { CategoryLocaleContent } from '../../types';

export const content: CategoryLocaleContent = {
  slug: 'audiovisuell-fotografie',
  title: 'Audiovisuelle und Fotografie Tools',
  description: 'Professionelle Tools und Rechner für Filmemacher, Fotografen und Ersteller digitaler audiovisueller Inhalte.',
  seo: [
    {
      type: 'summary',
      title: 'Professionelle audiovisuelle Tools',
      items: [
        'Intelligente Rechner für Timelapses, Effekte und Komposition.',
        'Privacy-Tools zum Bereinigen von EXIF-Metadaten.',
        'Untertitelsynchronisierung und Timing-Bearbeitung.',
        'Auflösungsanalyse, Druckqualität und optimaler Betrachtungsabstand.'
      ],
    },
    {
      type: 'title',
      text: 'Professionelle Toolbox für die audiovisuelle Produktion',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Unsere umfassende Suite von Dienstprogrammen löst die gängigsten technischen Herausforderungen in jeder Phase der audiovisuellen Produktion. Von präzisen Intervallberechnungen für cineastische Zeitraffer bis hin zum Datenschutz durch die Bereinigung von EXIF-Metadaten in Ihren Multimediadateien.',
    },
    {
      type: 'stats',
      items: [
        {
          value: '12+',
          label: 'Spezialisierte Tools',
          icon: 'mdi:cog'
        },
        {
          value: '100%',
          label: 'Präzise Berechnungen',
          icon: 'mdi:chart-line'
        },
        {
          value: '0%',
          label: 'Daten auf Server gespeichert',
          icon: 'mdi:shield-check'
        }
      ],
      columns: 3
    },
    {
      type: 'title',
      text: 'Tool Kategorien',
      level: 3,
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Timelapse und Cineastik',
          description: 'Berechnen Sie Intervalle, Gesamtdauer und Bildraten für Ihre Filmaufnahmen.',
          icon: 'mdi:film',
          points: [
            'Berechnung der benötigten Bilder',
            'Dauer in Sekunden/Minuten',
            'Variable Wiedergabegeschwindigkeit'
          ]
        },
        {
          title: 'Datenschutz und Metadaten',
          description: 'Schützen Sie Ihre Privatsphäre, indem Sie EXIF-Daten und sensible Metadaten aus Ihren Dateien entfernen.',
          icon: 'mdi:lock',
          points: [
            'Analyse von EXIF-Daten',
            'Bereinigung von Standort-Metadaten',
            'Entfernung von Geräteinformationen'
          ]
        },
        {
          title: 'Untertitel Bearbeitung',
          description: 'Synchronisieren, justieren und bearbeiten Sie Untertitel mit Millisekunden-Präzision.',
          icon: 'mdi:text',
          points: [
            'Echtzeit-Synchronisierung',
            'Bearbeitung der Ein- und Ausgangszeiten',
            'Globale Verzögerungsanpassung'
          ]
        },
        {
          title: 'Bildanalyse',
          description: 'Berechnen Sie technische Parameter für Auflösung, Druck und Betrachtungsabstand.',
          icon: 'mdi:image',
          points: [
            'DPI- und Auflösungsberechnung',
            'Empfohlener Betrachtungsabstand',
            'Druckqualitätsanalyse'
          ],
          highlight: true
        }
      ],
      columns: 2
    },
    {
      type: 'title',
      text: 'Warum unsere Tools?',
      level: 3,
    },
    {
      type: 'proscons',
      items: [
        {
          pro: '100% browserbasierte Verarbeitung – Ihre Daten werden niemals auf Server hochgeladen',
          con: 'Erfordert einen modernen Browser mit JavaScript-Unterstützung'
        },
        {
          pro: 'Mathematische Präzision bei allen audiovisuellen Berechnungen',
          con: 'Sehr spezifische Fälle können eine manuelle Validierung erfordern'
        },
        {
          pro: 'Intuitive Benutzeroberfläche für Branchenprofis',
          con: 'Beste Erfahrung auf Desktop- oder Tablet-Bildschirmen'
        },
        {
          pro: 'Völlig kostenlose Tools ohne Nutzungseinschränkungen',
          con: 'Kein dedizierter Premium-Support (Community verfügbar)'
        }
      ],
      proTitle: 'Vorteile',
      conTitle: 'Zu beachten'
    },
    {
      type: 'title',
      text: 'Schnellstart Anleitung',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Wählen Sie das Tool aus, das Sie für Ihr Projekt benötigen',
        'Geben Sie die technischen Parameter ein (Bilder, Auflösung, Zeiten usw.)',
        'Erhalten Sie sofortige Berechnungen und präzise Ergebnisse',
        'Exportieren oder wenden Sie die Ergebnisse auf Ihren Workflow an',
        'Wiederholen Sie den Vorgang für mehrere Projekte ohne Limits'
      ],
      icon: 'mdi:arrow-right'
    },
    {
      type: 'tip',
      title: 'Pro Tipp',
      html: 'Für die Arbeit mit mehreren Clips oder Sequenzen empfehlen wir, Ihre wichtigsten Parameter (Kameraauflösung, übliche Bildrate, Untertitelsprache) in einem Dokument zu speichern. So können Sie schnell darauf zugreifen, ohne jedes Mal neu rechnen zu müssen.'
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'EXIF',
          definition: 'Dateiformat, das Metadaten in digitalen Bildern speichert (Datum, Kamera, GPS-Standort usw.). Es kann ein Datenschutzrisiko darstellen.'
        },
        {
          term: 'FPS (Bilder pro Sekunde)',
          definition: 'Anzahl der pro Sekunde abgespielten Einzelbilder. Gängige Werte: 24 fps (Kino), 25 fps (PAL), 30 fps (NTSC), 60 fps (flüssiges Video).'
        },
        {
          term: 'DPI (Punkte pro Zoll)',
          definition: 'Maß für die Auflösung im Druck. Höheres DPI = bessere Qualität. Für professionelle Fotografie wird ein Minimum von 300 DPI empfohlen.'
        },
        {
          term: 'Timelapse (Zeitraffer)',
          definition: 'Kinematografische Technik, die die Zeit beschleunigt, indem sie Bilder in regelmäßigen Abständen aufnimmt, um einen Effekt schneller Bewegung zu erzeugen.'
        },
        {
          term: 'Untertitelsynchronisierung',
          definition: 'Prozess der zeitlichen Abstimmung von Start- und Endzeit der Untertitel mit dem Audio und Video von Filmen oder Serien.'
        },
        {
          term: 'Metadaten',
          definition: 'Versteckte Informationen in Mediendateien, die den Inhalt beschreiben (Autor, Erstellungsdatum, verwendetes Gerät, Standort usw.).'
        }
      ]
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'So wählen Sie das richtige Tool',
      icon: 'mdi:help-circle',
      badge: 'Auswahlhilfe',
      html: '<strong>Erstellen Sie einen Zeitraffer?</strong> -> Nutzen Sie den Timelapse-Rechner.<br><strong>Müssen Sie Ihre Privatsphäre schützen?</strong> -> Metadaten-Bereinigungs-Tool.<br><strong>Arbeiten Sie mit Untertiteln?</strong> -> Untertitel-Sync und Editor.<br><strong>Müssen Sie ein Bild optimieren?</strong> -> Auflösungs- und Betrachtungsabstands-Rechner.'
    },
    {
      type: 'card',
      title: 'Kernfunktionalität',
      html: 'Alle unsere Tools funktionieren <strong>zu 100% lokal</strong> in Ihrem Browser. Das bedeutet maximalen Datenschutz, sofortige Geschwindigkeit und Offline-Zugriff (nach dem ersten Laden).'
    },
    {
      type: 'message',
      title: 'Datenschutz',
      ariaLabel: 'Informationen über Datenschutz und Datenspeicherung',
      html: 'Wir speichern, verarbeiten oder teilen Ihre audiovisuellen Daten nicht. Alle Berechnungen und Metadaten-Bereinigungen erfolgen ausschließlich auf Ihrem Gerät. Sie haben die volle Kontrolle über Ihre Inhalte.'
    }
  ],
};
