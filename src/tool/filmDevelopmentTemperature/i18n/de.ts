import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { FilmDevelopmentTemperatureUI } from '../ui';
import { bibliography } from '../bibliography';

const ui: FilmDevelopmentTemperatureUI = {
  faqTitle: 'Fragen zur Filmentwicklungs Temperatur',
  bibliographyTitle: 'Wichtigste Referenzen',
  chooseDocumentedCombination: 'Wähle eine dokumentierte Kombination aus Film und Entwickler',
  filmLabel: 'Filmtyp',
  developerLabel: 'Entwickler',
  dilutionLabel: 'Verdünnung',
  temperatureLabel: 'Entwickler Temperatur',
  temperatureHelp: 'Gib die gemessene Temperatur des Entwicklers im Tank ein. Die Anleitung basiert auf der Standardzeit bei 20 °C.',
  unitSwitchLabel: 'Temperatureinheit',
  metricLabel: 'Metrisch °C',
  imperialLabel: 'Imperial °F',
  currentReadingLabel: 'Dunkelkammer Messung',
  baseTimeLabel: 'Bei 20 °C',
  adjustedTimeLabel: 'Angepasste Startzeit',
  temperatureGuideLabel: 'Temperatur Tabellenhinweise',
  temperatureGuideHelp: 'Praktischer Leitfaden rund um die gemessene Temperatur. Die hervorgehobene Zeile entspricht Ihrer Messung.',
  sourceLabel: 'Dokumentierte Kombination',
  eiLabel: 'Belichtungseinstellung',
  statusCool: 'Kühleres Bad',
  statusSteady: 'Nahe Standard',
  statusWarm: 'Wärmeres Bad',
  warningShortTime: 'Zeiten unter 5 Minuten erhöhen das Risiko einer ungleichmäßigen Entwicklung. Wählen Sie einen dokumentierten Prozess oder verlängern Sie die Zeit nur mit eigenen Tests.',
  warningOutOfRange: 'Dies ist der Rand des empfohlenen Bereichs. Halten Sie die Entwicklertemperatur stabil und überprüfen Sie die Herstellerangaben.',
  guideNotice: 'Dies ist ein praktischer Orientierungswert, keine Garantie. Kipprhythmus, Ausrüstung, Zielkontrast und eigener Prozess beeinflussen das Ergebnis.',
  resetLabel: 'Erste dokumentierte Kombination wiederherstellen',
  minutesLabel: 'Min',
  secondsLabel: 'Sek',
  currentBadge: 'Aktuell',
  belowFiveMinutes: 'Unter 5 Minuten',
  tableTemperature: 'Temperatur',
  tableTime: 'Richtzeit',
  tableDifference: 'Abweichung von 20 °C',
  currentRow: 'Aktuell',
};

const softwareApplication: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Filmentwicklungszeit Rechner nach Temperatur',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  description: 'Passen Sie dokumentierte Entwicklungszeiten für Schwarzweißfilme an die gemessene Entwicklertemperatur an.',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
};

const faqPage: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Welche Basistemperatur verwendet der Rechner?', acceptedAnswer: { '@type': 'Answer', text: 'Jede gewählte Kombination startet von der offiziellen Herstellerzeit bei 20 °C und passt diese an die gemessene Entwicklertemperatur an.' } },
    { '@type': 'Question', name: 'Sind die berechneten Zeiten eine Garantie?', acceptedAnswer: { '@type': 'Answer', text: 'Nein. Sie dienen als praktische Ausgangswerte. Kipprhythmus, Tankgeometrie, Entwickleralter und Zielkontrast beeinflussen das Ergebnis.' } },
    { '@type': 'Question', name: 'Warum warnt der Rechner bei Entwicklungszeiten unter 5 Minuten?', acceptedAnswer: { '@type': 'Answer', text: 'Sehr kurze Entwicklungszeiten lassen wenig Spielraum für gleichmäßiges Einfüllen und Ausgießen, was zu ungleichmäßiger Entwicklung führen kann.' } },
    { '@type': 'Question', name: 'Was tun, wenn meine Film- und Entwicklerkombination nicht gelistet ist?', acceptedAnswer: { '@type': 'Answer', text: 'Nutzen Sie das technische Datenblatt des Herstellers oder eine verlässliche Entwicklungstabelle. Das Tool erfindet keine undokumentierten Zeiten.' } },
  ],
};

const howTo: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Filmentwicklungszeit an die Temperatur anpassen',
  step: [
    { '@type': 'HowToStep', name: 'Film auswählen', text: 'Wählen Sie den geladenen Schwarzweißfilm aus der Liste.' },
    { '@type': 'HowToStep', name: 'Entwickler und Verdünnung wählen', text: 'Wählen Sie die genaue dokumentierte Entwicklerkombination.' },
    { '@type': 'HowToStep', name: 'Temperatur messen', text: 'Messen und tragen Sie die tatsächliche Temperatur der Entwicklerlösung ein.' },
    { '@type': 'HowToStep', name: 'Startzeit ablesen', text: 'Nutzen Sie die angepasste Zeit als praxisnahe Orientierung für Ihre Dunkelkammerarbeit.' },
  ],
};

export const content: ToolLocaleContent<FilmDevelopmentTemperatureUI> = {
  slug: 'entwicklungszeit-rechner-film-temperatur-kompensation',
  title: 'Filmentwicklungszeit Rechner nach Temperatur',
  description: 'Passen Sie dokumentierte Entwicklungszeiten für Schwarzweißfilme an die gemessene Entwicklertemperatur an, mit übersichtlicher Referenztabelle.',
  ui,
  seo: [
    { type: 'title', level: 2, text: 'So passen Sie die Filmentwicklungszeit an die Temperatur an' },
    { type: 'paragraph', html: 'Wählen Sie die exakte Kombination aus Film, Entwickler und Verdünnung laut Herstellertabelle und geben Sie die gemessene Temperatur der Entwicklerlösung ein. Der Rechner nutzt die Referenzzeit bei 20 °C und berechnet die angepasste Entwicklungszeit.' },
    { type: 'title', level: 3, text: 'Ergebnisse als praxisnahen Startwert verstehen' },
    { type: 'paragraph', html: 'Die Temperatur verändert die chemische Aktivität des Entwicklers: Eine wärmere Lösung benötigt weniger Zeit, während eine kältere Lösung mehr Zeit braucht. Die Referenztabelle verdeutlicht die Tendenz rund um Ihren Messwert.' },
    { type: 'tip', title: 'Für gleichbleibende Dunkelkammer Ergebnisse', html: 'Betrachten Sie berechnete Zeiten nicht als universelles Rezept. Kipprhythmus, Dose, Alter des Entwicklers und eigener Kontrastwunsch bleiben entscheidend.' },
    { type: 'title', level: 3, text: 'Warum dokumentierte Kombinationen wichtig sind' },
    { type: 'list', items: ['Die Paarung aus Film und Entwickler bestimmt Korn, Schärfe und effektive Empfindlichkeit.', 'Die Verdünnung verändert die Entwicklungsdynamik und kann nicht einfach hochgerechnet werden.', 'Zeiten unter 5 Minuten erfordern besondere Vorsicht, da kleine Gießabweichungen prozentual stark ins Gewicht fallen.'] },
  ],
  faq: [
    { question: 'Welche Basistemperatur verwendet der Rechner?', answer: 'Jede gewählte Kombination startet von der offiziellen Herstellerzeit bei 20 °C und passt diese an die gemessene Entwicklertemperatur an.' },
    { question: 'Sind die berechneten Zeiten eine Garantie?', answer: 'Nein. Sie dienen als praktische Ausgangswerte. Kipprhythmus, Tankgeometrie, Entwickleralter und Zielkontrast beeinflussen das Ergebnis.' },
    { question: 'Warum warnt der Rechner bei Entwicklungszeiten unter 5 Minuten?', answer: 'Sehr kurze Entwicklungszeiten lassen wenig Spielraum für gleichmäßiges Einfüllen und Ausgießen, was zu ungleichmäßiger Entwicklung führen kann.' },
    { question: 'Was tun, wenn meine Film- und Entwicklerkombination nicht gelistet ist?', answer: 'Nutzen Sie das technische Datenblatt des Herstellers oder eine verlässliche Entwicklungstabelle. Das Tool erfindet keine undokumentierten Zeiten.' },
  ],
  bibliography,
  howTo: [
    { name: 'Film auswählen', text: 'Wählen Sie den geladenen Schwarzweißfilm aus der Liste.' },
    { name: 'Entwickler und Verdünnung wählen', text: 'Wählen Sie die genaue dokumentierte Entwicklerkombination.' },
    { name: 'Temperatur messen', text: 'Messen und tragen Sie die tatsächliche Temperatur der Entwicklerlösung ein.' },
    { name: 'Startzeit ablesen', text: 'Nutzen Sie die angepasste Zeit als praxisnahe Orientierung für Ihre Dunkelkammerarbeit.' },
  ],
  schemas: [softwareApplication, faqPage, howTo],
};
