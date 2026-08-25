import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { FilmDevelopmentTemperatureUI } from '../ui';
import { bibliography } from '../bibliography';

const ui: FilmDevelopmentTemperatureUI = {
  faqTitle: 'Fragor om filmframkallning och temperatur',
  bibliographyTitle: 'Huvudreferenser',
  chooseDocumentedCombination: 'Valj en dokumenterad kombination av film och framkallare',
  filmLabel: 'Filmtyp',
  developerLabel: 'Framkallare',
  dilutionLabel: 'Gödning eller utspädning',
  temperatureLabel: 'Framkallarens temperatur',
  temperatureHelp: 'Ange den uppmatta temperaturen pa framkallaren i tanken. Guiden utgar fran dokumenterad tid vid 20 °C.',
  unitSwitchLabel: 'Temperaturenhet',
  metricLabel: 'Metrisk °C',
  imperialLabel: 'Imperial °F',
  currentReadingLabel: 'Morkrumsavlasning',
  baseTimeLabel: 'Vid 20 °C',
  adjustedTimeLabel: 'Justerad starttid',
  temperatureGuideLabel: 'Temperaturguide och tabell',
  temperatureGuideHelp: 'Praktisk guide kring den uppmatta temperaturen. Den markerade raden motsvarar din mätning.',
  sourceLabel: 'Bekräftad kombination',
  eiLabel: 'Kamera inställning EI',
  statusCool: 'Svalare bad',
  statusSteady: 'Nara standard',
  statusWarm: 'Varmare bad',
  warningShortTime: 'Mindre an 5 minuter okar risken for ojamn framkallning. Valj en dokumenterad process eller forlang tiden endast med egna tester.',
  warningOutOfRange: 'Detta ar i utkanten av det rekommenderade intervallet. Hall framkallarens temperatur stabil och kontrollera tillverkarens data.',
  guideNotice: 'Detta ar en startpunkt, inte en garanti. Agitering, utrustning, mal-kontrast och din egen process paverkar slutresultatet.',
  resetLabel: 'Aterstall till forsta dokumenterade raden',
  minutesLabel: 'min',
  secondsLabel: 'sek',
  currentBadge: 'Aktuell',
  belowFiveMinutes: 'Under 5 minuter',
  tableTemperature: 'Temperatur',
  tableTime: 'Riktlinje tid',
  tableDifference: 'Skillnad fran 20 °C',
  currentRow: 'Aktuell',
};

const softwareApplication: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Filmframkallningstid Räknare efter Temperatur',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  description: 'Justera framkallningstiden för svartvit film baserat på framkallarens uppmätta temperatur.',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
};

const faqPage: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Vilken bastemperatur utgar raknaren fran?', acceptedAnswer: { '@type': 'Answer', text: 'Varje vald kombination startar fran tillverkarens officiella tid vid 20 °C och justerar den efter den faktiska temperaturen.' } },
    { '@type': 'Question', name: 'Ar de beraknade tiderna garanterat exakta?', acceptedAnswer: { '@type': 'Answer', text: 'Nej. De ar praktiska utgangspunkter. Agitering, tanktyp, kemins alder och arskad kontrast paverkar det slutliga resultatet.' } },
    { '@type': 'Question', name: 'Varfor varnar raknaren vid tider under 5 minuter?', acceptedAnswer: { '@type': 'Answer', text: 'Korta framkallningstider ger litet utrymme for jamn pafyllning och tomning, vilket okar risken for ojamn framkallning.' } },
    { '@type': 'Question', name: 'Vad gor jag om min film och framkallare inte finns i listan?', acceptedAnswer: { '@type': 'Answer', text: 'Anvand tillverkarens tekniska datablad eller en paflitlig framkallningstabell. Detta verktyg hittar inte pa egna tider.' } },
  ],
};

const howTo: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Justera filmframkallningstid efter temperatur',
  step: [
    { '@type': 'HowToStep', name: 'Valj film', text: 'Valj den svartvita film som ar laddad i din framkallningstank.' },
    { '@type': 'HowToStep', name: 'Matcha framkallare och utspadning', text: 'Valj framkallare och den utspadning som anges i tabellen.' },
    { '@type': 'HowToStep', name: 'Mat temperaturen', text: 'Mat och ange framkallarens faktiska temperatur innan du startar.' },
    { '@type': 'HowToStep', name: 'Anvand den justerade tiden', text: 'Anvand den beraknade tiden som en praktisk utgangspunkt i morkrummet.' },
  ],
};

export const content: ToolLocaleContent<FilmDevelopmentTemperatureUI> = {
  slug: 'framkallningstid-raknare-film-temperatur-kompensation',
  title: 'Filmframkallningstid Räknare efter Temperatur',
  description: 'Justera framkallningstiden för svartvit film baserat på framkallarens uppmätta temperatur med en tydlig referenstabell.',
  ui,
  seo: [
    { type: 'title', level: 2, text: 'Hur du kompensera filmframkallningstiden for temperaturforandringar' },
    { type: 'paragraph', html: 'Valj den exakta kombinationen av film, framkallare och utspadning fran den dokumenterade tabellen och ange framkallarens uppmatta temperatur. Raknaren utgar fran 20 °C och beraknar den justerade starttiden.' },
    { type: 'title', level: 3, text: 'Anvand resultatet som en praktisk startpunkt' },
    { type: 'paragraph', html: 'Temperatur paverkar den kemiska aktiviteten direkt: en varmare framkallare kraver kortare tid, medan en svalare framkallare kraver langre tid. Referenstabellen visar tydligt tidsforandringen runt din matning.' },
    { type: 'tip', title: 'Uppratthall en noggrann morkrumsrutin', html: 'Betrakta inte beraknande tider som en absolut sanning. Agiteringsmönster, tankens form, kemins skick och dina egna preferenser for kontrast ar avgorande.' },
    { type: 'title', level: 3, text: 'Varfor det ar viktigt att utga fran bekräftade data' },
    { type: 'list', items: ['Kombinationen av film och framkallare bestammer korn, skarpa och effektiv ISO-kanslighet.', 'Utspadning forandrar hur snabbt kemin forbrukas och kan inte enkelt beraknas fran andra proportioner.', 'Tider under 5 minuter kraver extra uppmarksamhet pa grund av tiden det tar att fylla och tomma tanken.'] },
  ],
  faq: [
    { question: 'Vilken bastemperatur utgar raknaren fran?', answer: 'Varje vald kombination startar fran tillverkarens officiella tid vid 20 °C och justerar den efter den faktiska temperaturen.' },
    { question: 'Ar de beraknade tiderna garanterat exakta?', answer: 'Nej. De ar praktiska utgangspunkter. Agitering, tanktyp, kemins alder och arskad kontrast paverkar det slutliga resultatet.' },
    { question: 'Varfor varnar raknaren vid tider under 5 minuter?', answer: 'Korta framkallningstider ger litet utrymme for jamn pafyllning och tomning, vilket okar risken for ojamn framkallning.' },
    { question: 'Vad gor jag om min film och framkallare inte finns i listan?', answer: 'Anvand tillverkarens tekniska datablad eller en paflitlig framkallningstabell. Detta verktyg hittar inte pa egna tider.' },
  ],
  bibliography,
  howTo: [
    { name: 'Valj film', text: 'Valj den svartvita film som ar laddad i din framkallningstank.' },
    { name: 'Matcha framkallare och utspadning', text: 'Valj framkallare och den utspadning som anges i tabellen.' },
    { name: 'Mat temperaturen', text: 'Mat och ange framkallarens faktiska temperatur innan du startar.' },
    { name: 'Anvand den justerade tiden', text: 'Anvand den beraknade tiden som en praktisk utgangspunkt i morkrummet.' },
  ],
  schemas: [softwareApplication, faqPage, howTo],
};
