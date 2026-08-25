import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { FAQItem, HowToStep, ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';
import type { AdamsZoneSystemUI } from '../ui';

const slug = 'ansel-adams-zon-system-visualiserare-exponeringszoner';
const title = 'Ansel Adams Zon System Visualiserare Exponeringszoner';
const description = 'Utforska Zoner 0 till IX, placera en uppmatt ton med exakta blandarsteg och koppla exponeringsbeslut till normal, N minus och N plus framkallning.';

const ui: AdamsZoneSystemUI = {
  faqTitle: 'Fragor om Zonsystemet',
  bibliographyTitle: 'Kallor',
  orientationTitle: 'Zonplacering',
  orientationText: 'Valj tonen du matut i scenen, valj zon dar du vill placera den och anvand stegskillnaden som exponeringsinstruktion. Framkallningsnoteringen hjalper till att skydda hogdagrar eller oppna skuggor.',
  measuredToneLabel: 'Uppmatt ton i scenen',
  targetPlacementLabel: 'Placera den tonen i',
  developmentLabel: 'Framkallningsavsikt',
  normalDevelopment: 'Normal',
  minusDevelopment: 'N minus',
  plusDevelopment: 'N plus',
  presetsLabel: 'Starta med en faltanteckning',
  presetShadow: 'Strukturerad skugga',
  presetSkin: 'Ljus hy',
  presetSnow: 'Snö i solljus',
  presetNight: 'Nattskugga',
  zoneStripLabel: 'Zonremsa fran svart till vitt',
  meterBaselineLabel: 'Ljusmatarreferens: Zon V',
  selectedToneLabel: 'Uppmatt ton',
  placementResultLabel: 'Placeringsresultat',
  exposureShiftLabel: 'Exponeringsforskjutning fran mellangratt',
  tonalDistanceLabel: 'Avstand fran uppmatt ton',
  luminanceLabel: 'Relativ luminans',
  stopsFromMiddleLabel: 'Steg fran Zon V',
  developmentAdviceLabel: 'Negativbedomning',
  techniqueLabel: 'Mörkrumsanvisning',
  resetLabel: 'Aterstall exempel',
  meterAssumption: 'En reflektionsljusmatare placerar varje matning pa mellangratt i Zon V om du inte kompenserar.',
  zonePrefix: 'Zon',
  zoneNames: 'Rent svart|Nastan svart|Djup skugga|Strukturerad skugga|Mork mellanfarg|Mellangratt|Ljus mellanfarg|Strukturerad hogdagrar|Lystriga hogdagrar|Nastan vitt',
  zoneDescriptions: 'Maximalt svart utan synlig struktur.|Första separation fran svart utan tydlig struktur.|Första spår av struktur i viktig mörk skugga.|Användbar skuggstruktur och en vanlig placeringspunkt.|Öppen skugga och mörkt lövverk med tydlig form.|Ljusmätarens neutrala referenspunkt.|Ljus hy, vittrad sten och ljust lövverk.|Ljus struktur som förblir kopieringsbar.|Mycket ljus ton med nästan ingen återstående struktur.|Nästan rent vitt med endast ett spår av separation.',
  increaseExposure: 'Öka exponeringen med det angivna antalet steg för att lyfta mätningen till vald zon.',
  decreaseExposure: 'Minska exponeringen med det angivna antalet steg för att hålla mätningen i vald zon.',
  holdExposure: 'Behåll mätarens avläsning oförändrad eftersom målet är Zon V.',
  protectHighlights: 'Högdagarkontroll',
  openShadows: 'Skuggseparation',
  balancedPlacement: 'Balanserad placering',
  normalAdvice: 'Normal framkallning håller scenens kontrast nära det uppmätta omfånget.',
  minusAdvice: 'N minus framkallning komprimerar ett kontrastrikt omfång och håller högdagrar kopieringsbara.',
  plusAdvice: 'N plus framkallning expanderar ett platt omfång och ger viktigare skuggor bättre separation.',
};

const faq: FAQItem[] = [
  {
    question: 'Vad mäter Zonsystemet?',
    answer: 'Zonsystemet är en metod för att visualisera och kontrollera en fotografis tonomfång från djupsvart till rent vitt. Det kopplar samman uppmätt ljusstyrka med vald zon och framkallningsbeslut.',
  },
  {
    question: 'Varför börjar ljusmätaren vid Zon V?',
    answer: 'En reflektionsljusmätare är kalibrerad för att behandla sitt genomsnitt som mellangrått. För att behålla en mörk skugga mörk eller en ljus yta ljus måste du kompensera bort från Zon V.',
  },
  {
    question: 'Hur många bländarsteg skiljer zonerna åt?',
    answer: 'Närliggande hela zoner skiljs åt av exakt ett bländarsteg. Att gå från Zon V till Zon VII kräver två steg mer exponering.',
  },
  {
    question: 'Vad betyder N minus och N plus?',
    answer: 'Det är framkallningsjusteringar för att styra negativkontrasten. N minus minskar kontrasten vid hårda motiv, medan N plus ökar kontrasten vid platta motiv.',
  },
];

const howTo: HowToStep[] = [
  { name: 'Välj uppmätt ton', text: 'Välj den zon som bäst beskriver den del av motivet som du mätte.' },
  { name: 'Välj slutlig placering', text: 'Klicka på den zon där du vill att tonen ska hamna i negativet eller utskriften.' },
  { name: 'Tillämpa exponeringsändringen', text: 'Använd stegavståndet för att justera bländare eller slutartid.' },
  { name: 'Anpassa framkallningen', text: 'Använd framkallningsnoteringen som vägledning för tiden i mörkrummet.' },
];

const seo: ToolLocaleContent<AdamsZoneSystemUI>['seo'] = [
  {
    type: 'summary',
    title: 'Visuell fältguide för Zonsystemet',
    items: [
      'Utforska alla zoner från Zon 0 till Zon IX på en tydlig tonremsa',
      'Översätt önskad zonplacering till en exakt stegkorrigering från Zon V',
      'Jämför uppmätt ljusstyrka med hur ytan ska återges i den slutliga bilden',
      'Använd N minus, normal och N plus som medvetna verktyg för kontraststyring',
    ],
  },
  { type: 'title', text: 'Hur Ansel Adams Zonsystem fungerar', level: 2 },
  {
    type: 'paragraph',
    html: 'Zonsystemet delar upp ett kontinuerligt ljusomfång i tio praktiska referenszoner. Zon V motsvarar ljusmätarens mellangrå referens.',
  },
  { type: 'title', text: 'Avläsning av exponering från zonremsan', level: 2 },
  {
    type: 'table',
    headers: ['Placering', 'Visuell effekt', 'Åtgärd på ljusmätaren'],
    rows: [
      ['Zon II', 'Djup skugga med knappt synlig struktur', 'Minska exponeringen med 3 steg från Zon V'],
      ['Zon III', 'Viktig skuggstruktur med teckning', 'Minska exponeringen med 2 steg från Zon V'],
      ['Zon V', 'Neutral mellangrå referens', 'Behåll ljusmätarens värde oförändrat'],
      ['Zon VI', 'Ljus mellanfärg som ljus hy', 'Öka exponeringen med 1 steg från Zon V'],
      ['Zon VII', 'Ljus struktur värd att bevara', 'Öka exponeringen med 2 steg från Zon V'],
    ],
  },
  {
    type: 'tip',
    title: 'Använd placering för kreativa beslut',
    html: 'Se inte mätaren som ett krav på att göra allt grått. Välj den ton som bär den viktigaste strukturen och placera den medvetet.',
  },
  { type: 'title', text: 'När framkallningen ändrar kontrasten', level: 2 },
  {
    type: 'list',
    items: [
      '<strong>Normal framkallning:</strong> Behåller motivets kontrast inom standardgränserna för negativet.',
      '<strong>N minus framkallning:</strong> Komprimerar hög kontrast för att förhindra att högdagrar blir utfrätta.',
      '<strong>N plus framkallning:</strong> Expanderar låg kontrast för bättre separation i skuggorna.',
    ],
  },
  {
    type: 'glossary',
    items: [
      { term: 'Zon', definition: 'Praktiskt tonintervall med ett bländarstegs avstånd från nästa.' },
      { term: 'Placering', definition: 'Medvetet val av målzon för en uppmätt ton i motivet.' },
      { term: 'Mellangrått', definition: 'Neutral referens i Zon V som används vid kalibrering av ljusmätare.' },
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
  step: howTo.map((step) => ({ '@type': 'HowToStep', name: step.name, text: step.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'PhotographyApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'sv',
};

export const content: ToolLocaleContent<AdamsZoneSystemUI> = {
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
