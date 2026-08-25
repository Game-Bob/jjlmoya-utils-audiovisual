import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { FAQItem, HowToStep, ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';
import type { AdamsZoneSystemUI } from '../ui';

const slug = 'ansel-adams-zonesysteem-visualisator-belichtingszones';
const title = 'Ansel Adams Zonesysteem Visualisator Belichtingszones';
const description = 'Verken de Zones 0 tot IX, plaats een gemeten toon met exacte stopcorrecties en koppel belichtingskeuzes aan normale, N minus en N plus ontwikkeling.';

const ui: AdamsZoneSystemUI = {
  faqTitle: 'Vragen over het Zonesysteem',
  bibliographyTitle: 'Bronvermelding',
  orientationTitle: 'Zoneplaatsing',
  orientationText: 'Kies de gemeten toon in de scene, selecteer de gewenste doelzone en gebruik de stopverschuiving als belichtingsinstructie. De ontwikkelingsnotitie helpt bij het beschermen van hooglichten of het openen van schaduwen.',
  measuredToneLabel: 'Gemeten toon in de scene',
  targetPlacementLabel: 'Plaats die toon op',
  developmentLabel: 'Ontwikkelingsintentie',
  normalDevelopment: 'Normaal',
  minusDevelopment: 'N minus',
  plusDevelopment: 'N plus',
  presetsLabel: 'Start met een praktijknotitie',
  presetShadow: 'Schaduw met textuur',
  presetSkin: 'Lichte huid',
  presetSnow: 'Sneeuw in zonlicht',
  presetNight: 'Nachtschaduw',
  zoneStripLabel: 'Zonestrip van zwart naar wit',
  meterBaselineLabel: 'Belichtingsmeter referentie: Zone V',
  selectedToneLabel: 'Gemeten toon',
  placementResultLabel: 'Resultaat van plaatsing',
  exposureShiftLabel: 'Belichtingsverschuiving t.o.v. middengrijs',
  tonalDistanceLabel: 'Afstand vanaf gemeten toon',
  luminanceLabel: 'Relatieve luminantie',
  stopsFromMiddleLabel: 'Stops vanaf Zone V',
  developmentAdviceLabel: 'Negatiefbeoordeling',
  techniqueLabel: 'Donkere kamer instructie',
  resetLabel: 'Voorbeeld herstellen',
  meterAssumption: 'Een reflectielichtmeter plaatst elke meting standaard op middengrijs (Zone V) tenzij u compenseert.',
  zonePrefix: 'Zone',
  zoneNames: 'Zuiver zwart|Bijna zwart|Diepe schaduw|Schaduw met textuur|Donkere middentoon|Middengrijs|Lichte middentoon|Hooglichten met textuur|Felle hooglichten|Bijna wit',
  zoneDescriptions: 'Maximaal zwart zonder zichtbare textuur.|Eerste scheiding van zwart met vrijwel geen textuur.|Eerste spoor van textuur in belangrijke donkere schaduwen.|Bruikbare schaduwtextuur en een veelgebruikt ankerpunt.|Open schaduw en donker bladerdak met duidelijke vorm.|Neutraal referentiepunt van de belichtingsmeter.|Lichte huid, verweerde steen en helder bladerdak.|Heldere textuur die doordacht doordrukbaar blijft.|Zeer heldere toon met nauwelijks resterende textuur.|Vrijwel zuiver wit met slechts een spoor van scheiding.',
  increaseExposure: 'Open de belichting met het aangegeven aantal stops om de meting in de gekozen zone te brengen.',
  decreaseExposure: 'Knijp de belichting toe met het aangegeven aantal stops om de meting in de gekozen zone te houden.',
  holdExposure: 'Houd de meting ongewijzigd omdat de doelzone Zone V is.',
  protectHighlights: 'Hooglichtencontrole',
  openShadows: 'Schaduwscheiding',
  balancedPlacement: 'Balanced placement',
  normalAdvice: 'Normale ontwikkeling houdt het scenecontrast dicht bij het gemeten bereik.',
  minusAdvice: 'N minus ontwikkeling comprimeert een helder bereik en houdt hooglichten doordrukbaar.',
  plusAdvice: 'N plus ontwikkeling rekt een smal bereik uit en geeft belangrijke schaduwen meer scheiding.',
};

const faq: FAQItem[] = [
  {
    question: 'Wat meet het Zonesysteem?',
    answer: 'Het Zonesysteem visualiseert en regelt het tonale bereik van een foto van diepzwart tot helder wit. Het verbindt de gemeten helderheid met de gekozen eindzone en ontwikkelingskeuzes.',
  },
  {
    question: 'Waarom begint de belichtingsmeter bij Zone V?',
    answer: 'Een reflectielichtmeter is geijkt om zijn gemiddelde meting als middengrijs te behandelen. Om schaduwen donker of hooglichten helder te houden, moet u bewust afwijken van Zone V.',
  },
  {
    question: 'Hoeveel stops scheiden de zones?',
    answer: 'Aaneensluitende volle zones liggen precies een stop uit elkaar. Van Zone V naar Zone VII gaan vereist twee stops meer belichting.',
  },
  {
    question: 'Wat betekenen N minus en N plus?',
    answer: 'Het zijn ontwikkelingsaanpassingen om contrast te sturen. N minus vermindert negatiefcontrast bij een steil scenecontrast, terwijl N plus het verhoogt bij een vlak scenecontrast.',
  },
];

const howTo: HowToStep[] = [
  { name: 'Gemeten toon kiezen', text: 'Selecteer de zone die het gemeten motiefdeel het beste beschrijft.' },
  { name: 'Doelplaatsing kiezen', text: 'Tik op de zone waarin u die toon op het negatief of de afdruk wilt laten verschijnen.' },
  { name: 'Belichtingsstap toepassen', text: 'Gebruik de aangegeven stopverschuiving om het diafragma of de sluitertijd aan te passen.' },
  { name: 'Ontwikkeling afstemmen', text: 'Gebruik de ontwikkelingsnotitie als richtlijn voor de verwerkingstijd in de donkere kamer.' },
];

const seo: ToolLocaleContent<AdamsZoneSystemUI>['seo'] = [
  {
    type: 'summary',
    title: 'Visuele praktijkgids voor het Zonesysteem',
    items: [
      'Analyseer elke zone van Zone 0 tot Zone IX op een duidelijke tonenstrip',
      'Vertaal een gewenste zoneplaatsing in een exacte stopcorrectie vanaf Zone V',
      'Vergelijk de gemeten helderheid met de gewenste weergave in de uiteindelijke afdruk',
      'Gebruik N minus, normaal en N plus bewust als instrumenten voor contrastbeheersing',
    ],
  },
  { type: 'title', text: 'Hoe het Ansel Adams Zonesysteem werkt', level: 2 },
  {
    type: 'paragraph',
    html: 'Het Zonesysteem verdeelt een continu helderheidsbereik in tien praktische referentiezones. Zone V is het middengrijs van de belichtingsmeter. Elke aangrenzende zone verschilt een volle stop.',
  },
  { type: 'title', text: 'Belichting aflezen van de zonestrip', level: 2 },
  {
    type: 'table',
    headers: ['Plaatsing', 'Visuele werking', 'Actie op belichtingsmeter'],
    rows: [
      ['Zone II', 'Diepe schaduw met nauwelijks zichtbare textuur', '3 stops minder belichten dan Zone V'],
      ['Zone III', 'Belangrijke schaduwtextuur met doordrukbaar detail', '2 stops minder belichten dan Zone V'],
      ['Zone V', 'Neutrale middengrijs referentie', 'Belichtingswaarde ongewijzigd overnemen'],
      ['Zone VI', 'Lichte middentoon zoals een lichte huid', '1 stop meer belichten dan Zone V'],
      ['Zone VII', 'Heldere textuur die behouden moet blijven', '2 stops meer belichten dan Zone V'],
    ],
  },
  {
    type: 'tip',
    title: 'Gebruik plaatsing als een creatieve keuze',
    html: 'Zie de belichtingsmeter niet als een gebod om alles grijs te maken. Bepaal welke toon de belangrijkste textuur draagt en plaats die bewust.',
  },
  { type: 'title', text: 'Wanneer de ontwikkeling het contrast aanpast', level: 2 },
  {
    type: 'list',
    items: [
      '<strong>Normale ontwikkeling:</strong> Houdt het gemeten bereik binnen de standaard negatiefwaarden.',
      '<strong>N minus ontwikkeling:</strong> Comprimeert een hoog contrast om hooglichten doordrukbaar te houden.',
      '<strong>N plus ontwikkeling:</strong> Vergroot een laag contrast voor een betere schaduwscheiding.',
    ],
  },
  {
    type: 'glossary',
    items: [
      { term: 'Zone', definition: 'Praktisch tonaal bereik op een afstand van steeds een volle belichtingsstop.' },
      { term: 'Plaatsing', definition: 'Bewuste toewijzing van een gemeten helderheid aan een gekozen zone.' },
      { term: 'Middengrijs', definition: 'Neutrale referentie van Zone V voor reflectielichtmeters.' },
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
  inLanguage: 'nl',
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
