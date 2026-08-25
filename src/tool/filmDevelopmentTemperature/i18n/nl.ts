import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { FilmDevelopmentTemperatureUI } from '../ui';
import { bibliography } from '../bibliography';

const ui: FilmDevelopmentTemperatureUI = {
  faqTitle: 'Vragen over filmontwikkeling temperatuur',
  bibliographyTitle: 'Primaire referenties',
  chooseDocumentedCombination: 'Kies een gedocumenteerde combinatie van film en ontwikkelaar',
  filmLabel: 'Filmtype',
  developerLabel: 'Ontwikkelaar',
  dilutionLabel: 'Verdunning',
  temperatureLabel: 'Temperatuur ontwikkelaar',
  temperatureHelp: 'Voer de gemeten temperatuur van de ontwikkelaar in de tank in. De gids gaat uit van de gedocumenteerde tijd bij 20 °C.',
  unitSwitchLabel: 'Temperatuureenheid',
  metricLabel: 'Metrisch °C',
  imperialLabel: 'Imperiaal °F',
  currentReadingLabel: 'Donkere kamer meting',
  baseTimeLabel: 'Bij 20 °C',
  adjustedTimeLabel: 'Aangepaste starttijd',
  temperatureGuideLabel: 'Temperatuur notities in het veld',
  temperatureGuideHelp: 'Praktische gids rondom de gemeten temperatuur. De gemarkeerde rij is jouw meting.',
  sourceLabel: 'Gedocumenteerde combinatie',
  eiLabel: 'Belichtingsinstelling',
  statusCool: 'Koudere ontwikkelaar',
  statusSteady: 'Dicht bij standaard',
  statusWarm: 'Warmere ontwikkelaar',
  warningShortTime: 'Ontwikkeltijden onder 5 minuten verhogen het risico op ongelijkmatige ontwikkeling. Kies een gedocumenteerd proces of verleng de tijd na eigen tests.',
  warningOutOfRange: 'Dit is de grens van het aanbevolen bereik. Houd de temperatuur van de ontwikkelaar stabiel en controleer de fabrikantgegevens.',
  guideNotice: 'Dit is een richtlijn, geen garantie. Agitatie, apparatuur, doelcontrast en je eigen proces beinvloeden het eindresultaat.',
  resetLabel: 'Herstel de eerste gedocumenteerde combinatie',
  minutesLabel: 'min',
  secondsLabel: 'sec',
  currentBadge: 'Huidig',
  belowFiveMinutes: 'Onder 5 minuten',
  tableTemperature: 'Temperatuur',
  tableTime: 'Richtlijn tijd',
  tableDifference: 'Verschil t.o.v. 20 °C',
  currentRow: 'Huidig',
};

const softwareApplication: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Filmontwikkeltijd Calculator op Temperatuur',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  description: 'Pas de ontwikkeltijd van zwart-wit film aan op basis van de gemeten temperatuur van de ontwikkelaar.',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
};

const faqPage: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Welke basistemperatuur gebruikt de calculator?', acceptedAnswer: { '@type': 'Answer', text: 'Elke geselecteerde combinatie vertrekt van de officiele fabriekstijd bij 20 °C en past deze aan volgens de gemeten temperatuur.' } },
    { '@type': 'Question', name: 'Zijn de berekende tijden gegarandeerd juist?', acceptedAnswer: { '@type': 'Answer', text: 'Nee. Het zijn praktische uitgangspunten. Agitatie, het type ontwikkeltank, ouderdom van de chemie en het gewenste contrast veranderen de uitkomst.' } },
    { '@type': 'Question', name: 'Waarom waarschuwt de calculator bij tijden onder 5 minuten?', acceptedAnswer: { '@type': 'Answer', text: 'Zeer korte ontwikkeltijden laten te weinig ruimte voor gelijkmatig ingieten, agiteren en leeggieten, waardoor het risico op vlekken toeneemt.' } },
    { '@type': 'Question', name: 'Wat moet ik doen als mijn film en ontwikkelaar niet in de lijst staan?', acceptedAnswer: { '@type': 'Answer', text: 'Raadpleeg het technische datablad van de fabrikant of een vertrouwde ontwikkeltabel. Deze tool bedenkt geen onofficiële combinaties.' } },
  ],
};

const howTo: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Filmontwikkeltijd aanpassen aan de temperatuur',
  step: [
    { '@type': 'HowToStep', name: 'Kies de film', text: 'Selecteer het type zwart-wit film dat in je ontwikkeltank zit.' },
    { '@type': 'HowToStep', name: 'Koppel ontwikkelaar en verdunning', text: 'Kies de juiste combinatie van ontwikkelaar en verdunning uit de tabel.' },
    { '@type': 'HowToStep', name: 'Meet de temperatuur', text: 'Meet en voer de werkelijke temperatuur van het ontwikkelbad in.' },
    { '@type': 'HowToStep', name: 'Lees de starttijd af', text: 'Gebruik de berekende tijd als praktisch vertrekpunt in je donkere kamer.' },
  ],
};

export const content: ToolLocaleContent<FilmDevelopmentTemperatureUI> = {
  slug: 'ontwikkeltijd-calculator-film-temperatuur-compensatie',
  title: 'Filmontwikkeltijd Calculator op Temperatuur',
  description: 'Pas de ontwikkeltijd van zwart-wit film aan op basis van de gemeten temperatuur van de ontwikkelaar, met een duidelijke referentietabel.',
  ui,
  seo: [
    { type: 'title', level: 2, text: 'Hoe je de filmontwikkeltijd aanpast aan temperatuurverschillen' },
    { type: 'paragraph', html: 'Selecteer de exacte combinatie van film, ontwikkelaar en verdunning uit de gedocumenteerde tabel, en voer de gemeten temperatuur van het bad in. De calculator neemt de officiele tijd bij 20 °C en bereken een aangepaste starttijd.' },
    { type: 'title', level: 3, text: 'Gebruik het resultaat als een verstandig uitgangspunt' },
    { type: 'paragraph', html: 'Temperatuur verandert de chemische activiteit direct: een warmere ontwikkelaar vraagt kortere tijd, terwijl een koelere ontwikkelaar juist meer tijd nodig heeft. De tabel geeft de tijdsschommelingen rond jouw meting helder weer.' },
    { type: 'tip', title: 'Behoud een nauwkeurig proces in de donkere kamer', html: 'Zie berekende tijden nooit als een absolute wet. Agitatiepatroon, vorm van de tank, versheid van de chemie en je eigen voorkeur voor negatiefcontrast blijven doorslaggevend.' },
    { type: 'title', level: 3, text: 'Het belang van officieel gedocumenteerde combinaties' },
    { type: 'list', items: ['De combinatie van film en ontwikkelaar bepaalt de korrelstructuur, scherpte en effectieve ISO-gevoeligheid.', 'Verdunning verandert hoe snel de chemie uitgeput raakt en kan niet zomaar worden omgerekend.', 'Ontwikkeltijden korter dan 5 minuten vragen extra oplettendheid vanwege gietverschillen tijdens het proces.'] },
  ],
  faq: [
    { question: 'Welke basistemperatuur gebruikt de calculator?', answer: 'Elke geselecteerde combinatie vertrekt van de officiele fabriekstijd bij 20 °C en past deze aan volgens de gemeten temperatuur.' },
    { question: 'Zijn de berekende tijden gegarandeerd juist?', answer: 'Nee. Het zijn praktische uitgangspunten. Agitatie, het type ontwikkeltank, ouderdom van de chemie en het gewenste contrast veranderen de uitkomst.' },
    { question: 'Waarom waarschuwt de calculator bij tijden onder 5 minuten?', answer: 'Zeer korte ontwikkeltijden laten te weinig ruimte voor gelijkmatig ingieten, agiteren en leeggieten, waardoor het risico op vlekken toeneemt.' },
    { question: 'Wat moet ik doen als mijn film en ontwikkelaar niet in de lijst staan?', answer: 'Raadpleeg het technische datablad van de fabrikant of een vertrouwde ontwikkeltabel. Deze tool bedenkt geen onofficiële combinaties.' },
  ],
  bibliography,
  howTo: [
    { name: 'Kies de film', text: 'Selecteer het type zwart-wit film dat in je ontwikkeltank zit.' },
    { name: 'Koppel ontwikkelaar en verdunning', text: 'Kies de juiste combinatie van ontwikkelaar en verdunning uit de tabel.' },
    { name: 'Meet de temperatuur', text: 'Meet en voer de werkelijke temperatuur van het ontwikkelbad in.' },
    { name: 'Lees de starttijd af', text: 'Gebruik de berekende tijd als praktisch vertrekpunt in je donkere kamer.' },
  ],
  schemas: [softwareApplication, faqPage, howTo],
};
