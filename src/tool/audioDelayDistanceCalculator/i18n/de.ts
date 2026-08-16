import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { AudioDelayUI } from '../ui';
import type { ToolLocaleContent, FAQItem, HowToStep } from '../../../types';

const slug = 'audio-delay-abstand-temperatur-rechner';
const title = 'Audio Delay Abstand und Temperatur Rechner';
const description = 'Berechnen Sie akustische Verzögerungszeit, Schallgeschwindigkeit in der Luft, Phasenversatz, digitale Samples und SPL Dämpfung für PA Delay Towers.';

const ui: AudioDelayUI = {
  title: 'Audio Delay Abstand und Temperatur Rechner',
  subtitle: 'Berechnen Sie Schalllaufzeit, akustischen Phasenversatz, Sample Anzahl und SPL Dämpfung für PA Delay Lautsprecher.',
  unitSystemLabel: 'Einheitensystem',
  unitMetric: 'Metrisch (m, °C)',
  unitImperial: 'Imperial (ft, °F)',
  distanceLabel: 'Abstand zum Delay Lautsprecher',
  temperatureLabel: 'Umgebungslufttemperatur',
  humidityLabel: 'Relative Luftfeuchtigkeit',
  sampleRateLabel: 'Konsolen Abtastrate',
  presetsTitle: 'Schnelle Szenen Voreinstellungen',
  presetSummerFestival: 'Sommerfestival (35°C, 40m)',
  presetIndoorConcert: 'Hallenkonzert (20°C, 25m)',
  presetTheater: 'Akustisches Theater (22°C, 15m)',
  presetWinterOutdoor: 'Winter Open Air (5°C, 50m)',
  resultDelayMs: 'Verzögerungszeit',
  resultSamples: 'Digitale Samples',
  resultSpeed: 'Schallgeschwindigkeit',
  resultSplLoss: 'SPL Dämpfung',
  phaseStatusLabel: 'Akustischer Phasenanpassungsstatus',
  statusDirectZone: 'Direkte Wellenfront Synchronisation',
  statusHaasZone: 'Haas Vorrangszone',
  statusEchoZone: 'Wahrnehmbare Echozone',
  statusExtremeZone: 'Kritischer Verzögerungsversatz',
  advicePhaseAligned: 'Signale sind innerhalb von 5ms akustisch synchron. Minimale Verzögerungsverarbeitung erforderlich.',
  adviceMinorHaas: 'Schall trifft in der Haas Zone ein (5-35ms). Natürliche Ortung bleibt auf der Hauptbühne.',
  adviceHaasDelayNeeded: 'Delay Tower erfordert exakten Zeitversatz zur Vermeidung von Echodurchschlag.',
  adviceCriticalDelayNeeded: 'Hoher Verzögerungsversatz. Präzises Sample Delay anwenden zur Vermeidung von Kammfiltereffekten.',
  unitMeters: 'm',
  unitFeet: 'ft',
  unitCelsius: '°C',
  unitFahrenheit: '°F',
  mainSpeakerLabel: 'Haupt PA',
  delaySpeakerLabel: 'Delay Tower',
  audienceLabel: 'Zuschauerbereich',
  haasZoneLegend: 'Haas Zone (5-35ms)',
};

const faq: FAQItem[] = [
  {
    question: 'Warum ist die Lufttemperatur bei der Audio Delay Berechnung wichtig?',
    answer: 'Die Schallgeschwindigkeit in der Luft hängt direkt von der Temperatur ab. Bei 0 Grad Celsius breitet sich Schall mit 331.3 Metern pro Sekunde aus, während er bei 30 Grad Celsius auf etwa 349 Meter pro Sekunde beschleunigt. Das Ignorieren der Umgebungstemperatur führt zu Phasenauslöschungen und Kammfiltereffekten.',
  },
  {
    question: 'Was ist der Haas Effekt in der Beschallungstechnik?',
    answer: 'Der Haas Effekt oder Gesetz der ersten Wellenfront besagt, dass das menschliche Gehör den Schall in Richtung des zuerst eintreffenden Signals ortet, wenn sekundäre Signale innerhalb von 5 bis 35 Millisekunden mit ähnlicher Lautstärke eintreffen.',
  },
  {
    question: 'Wie rechnet man Audio Delay in Digitalkonsolen Samples um?',
    answer: 'Multiplizieren Sie die Verzögerungszeit in Sekunden mit der Abtastrate des Mischpults. Zum Beispiel entsprechen 50 Millisekunden Delay bei 48 kHz exakt 2400 digitalen Samples.',
  },
];

const howTo: HowToStep[] = [
  {
    name: 'Physischen Abstand Messen',
    text: 'Messen Sie den Abstand zwischen der Haupt PA und dem Delay Tower mit einem Laser Entfernungsmesser.',
  },
  {
    name: 'Umgebungstemperatur Prüfen',
    text: 'Geben Sie die aktuelle Lufttemperatur des Veranstaltungsortes ein.',
  },
  {
    name: 'Abtastrate der Konsole Wählen',
    text: 'Stellen Sie die Abtastrate Ihres Mischpults ein (44.1 kHz, 48 kHz, 96 kHz oder 192 kHz).',
  },
  {
    name: 'Berechnetes Delay Anwenden',
    text: 'Tragen Sie die Verzögerungszeit in Millisekunden oder Samples in den Lautsprecherprozessor ein.',
  },
];

const seo: ToolLocaleContent<AudioDelayUI>['seo'] = [
  {
    type: 'summary',
    title: 'Funktionen der Akustischen Delay Anpassung',
    items: [
      'Präzise Berechnung der Schallgeschwindigkeit basierend auf Temperatur und Feuchtigkeit',
      'Sofortige Umrechnung in Digitalkonsolen Samples (44.1k, 48k, 96k, 192k)',
      'Akustische Phasenausrichtung und Bewertung der Haas Effekt Zone',
      'Schalldruckpegel Dämpfungsschätzung in Dezibel',
    ],
  },
  { type: 'title', text: 'Schallausbreitung und Thermodynamik der Atmosphäre', level: 2 },
  {
    type: 'paragraph',
    html: 'Schall breitet sich als mechanische Druckwelle in der Luft aus. Seine Geschwindigkeit wird primär durch die Lufttemperatur bestimmt. Temperaturänderungen zwischen Nachmittags Soundcheck und Abendkonzert verändern die Schallgeschwindigkeit spürbar.',
  },
  {
    type: 'stats',
    items: [
      { value: '343.2 m/s', label: 'Schallgeschwindigkeit bei 20°C', icon: 'mdi:speedometer' },
      { value: '5-35 ms', label: 'Haas Vorrangsfenster', icon: 'mdi:timer-sand' },
      { value: '48/96 kHz', label: 'Sample Genauigkeit der Konsole', icon: 'mdi:sine-wave' },
    ],
    columns: 3,
  },
  { type: 'title', text: 'Akustische Phasenanpassung und Kammfiltervermeidung', level: 3 },
  {
    type: 'paragraph',
    html: 'Wenn zwei räumlich getrennte Lautsprecher dasselbe Audiosignal ohne präzise Laufzeitanpassung abgeben, überlagern sich die Wellenfronten mit Phasenunterschieden. Dies führt zu Kammfiltereffekten und Klangverfärbungen.',
  },
  {
    type: 'list',
    items: [
      '<strong>Laufzeitanpassung:</strong> Verzögert sekundäre Lautsprecher zur Anpassung an die Haupt PA.',
      '<strong>Kammfiltervermeidung:</strong> Eliminiert Phasenauslöschungen im gesamten hörbaren Frequenzbereich.',
      '<strong>Haas Ortung:</strong> Erhält die Wahrnehmung der akustischen Quelle auf der Hauptbühne.',
      '<strong>Sample Genauigkeit:</strong> Liefert exakte digitale Sample Werte für Ausgangsmatrizen.',
    ],
    icon: 'mdi:check-circle',
  },
  {
    type: 'comparative',
    items: [
      {
        title: 'Direkte PA Ausrichtung',
        description: 'Physische Verzögerung entspricht der Schalldistanz',
        icon: 'mdi:target',
        points: ['Perfekte Phasenkohärenz', 'Ideal für Nearfills', 'Null Kammfilterung'],
      },
      {
        title: 'Haas Offset Ausrichtung',
        description: 'Physische Verzögerung plus 5 bis 15ms Vorrangsoffset',
        icon: 'mdi:music-clef-treble',
        points: ['Natürliche Bühnenortung', 'Verbesserte Sprachverständlichkeit', 'Ideal für Delay Towers'],
        highlight: true,
      },
    ],
    columns: 2,
  },
  {
    type: 'table',
    headers: ['Beschallungsszenario', 'Abstand (m)', 'Temp (°C)', 'Verzögerung (ms)', 'Samples (48kHz)'],
    rows: [
      ['Theater Rang Infill', '15 m', '22 °C', '43.5 ms', '2.090 Samples'],
      ['Hallenkonzert', '25 m', '20 °C', '72.8 ms', '3.494 Samples'],
      ['Festival Hauptbühne', '40 m', '35 °C', '113.6 ms', '5.453 Samples'],
      ['Winter Open Air', '50 m', '5 °C', '149.5 ms', '7.176 Samples'],
    ],
  },
  {
    type: 'proscons',
    items: [
      {
        pro: 'Sub Millisekunden Sample Genauigkeit für digitale Mischpulte',
        con: 'Erfordert exakte Messung des physischen Abstandes',
      },
      {
        pro: 'Berücksichtigt Umgebungstemperatur und Luftfeuchtigkeit',
        con: 'Windgeschwindigkeiten im Freien erfordern kontinuierliche Überwachung',
      },
    ],
    proTitle: 'Vorteile',
    conTitle: 'Einschränkungen',
  },
  {
    type: 'glossary',
    items: [
      {
        term: 'Haas Effekt',
        definition: 'Psychoakustisches Phänomen bei dem das Gehör den Schall dem zuerst eintreffenden Signal zuordnet.',
      },
      {
        term: 'Kammfilterung',
        definition: 'Frequenzgangverzerrung durch Überlagerung eines Signals mit einer verzögerten Version.',
      },
      {
        term: 'Abtastrate',
        definition: 'Anzahl der pro Sekunde verarbeiteten Audiosamples eines Digitalmischpults.',
      },
    ],
  },
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
  inLanguage: 'de',
};

export const content: ToolLocaleContent<AudioDelayUI> = {
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
