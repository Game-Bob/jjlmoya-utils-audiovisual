import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { FAQItem, HowToStep, ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';
import type { AdamsZoneSystemUI } from '../ui';

const slug = 'visualizador-sistema-de-zonas-ansel-adams-zonas-de-exposicion';
const title = 'Visualizador del Sistema de Zonas Ansel Adams Zonas de Exposición';
const description = 'Explora de la Zona 0 a la IX, coloca un tono medido con cambios de paso exactos y conecta decisiones de exposición con revelado normal, N menos y N más.';

const ui: AdamsZoneSystemUI = {
  faqTitle: 'Preguntas sobre el Sistema de Zonas',
  bibliographyTitle: 'Fuentes',
  orientationTitle: 'Colocación de la zona',
  orientationText: 'Elige el tono que has medido en la escena, selecciona la zona donde deseas situarlo y utiliza el cambio de pasos como tu instrucción de exposición. La nota de revelado ayuda a proteger luces o abrir sombras cuando la escena lo requiere.',
  measuredToneLabel: 'Tono medido en la escena',
  targetPlacementLabel: 'Situar ese tono en',
  developmentLabel: 'Intención de revelado',
  normalDevelopment: 'Normal',
  minusDevelopment: 'N menos',
  plusDevelopment: 'N más',
  presetsLabel: 'Comenzar con una nota de campo',
  presetShadow: 'Sombra con textura',
  presetSkin: 'Piel clara',
  presetSnow: 'Nieve al sol',
  presetNight: 'Sombra nocturna',
  zoneStripLabel: 'Tira de zonas de negro a blanco',
  meterBaselineLabel: 'Referencia del exposímetro: Zona V',
  selectedToneLabel: 'Tono medido',
  placementResultLabel: 'Resultado de la colocación',
  exposureShiftLabel: 'Desplazamiento de exposición respecto al gris neutro',
  tonalDistanceLabel: 'Desplazamiento desde el tono medido',
  luminanceLabel: 'Luminancia relativa',
  stopsFromMiddleLabel: 'Pasos respecto a la Zona V',
  developmentAdviceLabel: 'Lectura del negativo',
  techniqueLabel: 'Dirección de laboratorio',
  resetLabel: 'Restablecer ejemplo',
  meterAssumption: 'Un exposímetro de luz reflejada sitúa cualquier lectura en el gris medio de la Zona V a menos que apliques compensación.',
  zonePrefix: 'Zona',
  zoneNames: 'Negro puro|Casi negro|Sombra profunda|Sombra con textura|Tono medio oscuro|Gris medio|Tono medio claro|Luces con textura|Luces luminosas|Casi blanco',
  zoneDescriptions: 'Negro máximo sin textura visible.|Primera separación respecto al negro, con textura casi imperceptible.|Primer indicio de textura en la sombra importante más oscura.|Textura útil en sombras y anclaje habitual de colocación.|Sombras abiertas y follaje oscuro con forma clara.|Punto de referencia neutro del exposímetro.|Piel clara, piedra desgastada y follaje brillante.|Textura brillante que debe mantenerse copiable o legible.|Tono muy brillante con apenas restos de textura.|Casi blanco puro con solo una traza de separación.',
  increaseExposure: 'Abre la exposición según la cantidad indicada para elevar la lectura a la zona elegida.',
  decreaseExposure: 'Reduce la exposición según la cantidad indicada para mantener la lectura en la zona elegida.',
  holdExposure: 'Conserva la lectura del exposímetro sin cambios porque el objetivo es la Zona V.',
  protectHighlights: 'Control de altas luces',
  openShadows: 'Separación de sombras',
  balancedPlacement: 'Colocación equilibrada',
  normalAdvice: 'El revelado normal mantiene el contraste de la escena cercano al rango medido.',
  minusAdvice: 'El revelado N menos comprime un rango de sujeto brillante y mantiene las altas luces copiables.',
  plusAdvice: 'El revelado N más expande un rango de sujeto estrecho y da mayor separación a las sombras importantes.',
};

const faq: FAQItem[] = [
  {
    question: '¿Qué mide el Sistema de Zonas?',
    answer: 'El Sistema de Zonas es un método para visualizar y controlar el rango tonal de una fotografía desde el negro profundo hasta el blanco brillante. Relaciona la luminancia medida del sujeto con una zona final y con las decisiones de exposición y revelado.',
  },
  {
    question: '¿Por qué el exposímetro comienza en la Zona V?',
    answer: 'Un exposímetro de luz reflejada está calibrado para considerar su lectura promedio como un gris medio de referencia. Si deseas que una sombra se mantenga oscura o que un elemento claro permanezca brillante, debes compensar apartándote de la Zona V.',
  },
  {
    question: '¿Cuántos pasos de luz separan las zonas?',
    answer: 'Las zonas completas adyacentes están separadas por un paso de luz. Desplazarse de la Zona V a la Zona VII requiere dos pasos más de exposición, mientras que pasar de la Zona V a la Zona III requiere dos pasos menos.',
  },
  {
    question: '¿Qué significan N menos y N más?',
    answer: 'Son opciones de revelado utilizadas para gestionar el contraste de la escena. N menos reduce el contraste del negativo en rangos amplios, mientras que N más aumenta el contraste en sujetos de rango estrecho. Los tiempos exactos dependen de la película, el revelador y los ensayos del laboratorio.',
  },
];

const howTo: HowToStep[] = [
  { name: 'Elegir el tono medido', text: 'Selecciona la zona que mejor describa la zona medida con el exposímetro, como sombra con textura o tono medio claro.' },
  { name: 'Seleccionar la colocación final', text: 'Toca la zona donde deseas que aparezca ese tono en el negativo o copia y observa la distancia respecto a la Zona V.' },
  { name: 'Aplicar el cambio de exposición', text: 'Utiliza la variación de pasos mostrada para decidir si debes abrir, cerrar o mantener el diafragma respecto al exposímetro.' },
  { name: 'Ajustar la intención de revelado', text: 'Usa la recomendación de revelado como indicación de contraste y aplica tus tiempos ensayados de película y revelador.' },
];

const seo: ToolLocaleContent<AdamsZoneSystemUI>['seo'] = [
  {
    type: 'summary',
    title: 'Guía visual del Sistema de Zonas de campo',
    items: [
      'Explora cada tono de la Zona 0 a la Zona IX en una tira graduada legible',
      'Traduce la colocación deseada en un cambio de pasos preciso desde la Zona V',
      'Compara el tono medido con el tono que deseas conservar en la copia final',
      'Utiliza N menos, normal y N más como decisiones creativas de contraste',
    ],
  },
  { type: 'title', text: 'Cómo funciona el Sistema de Zonas de Ansel Adams', level: 2 },
  {
    type: 'paragraph',
    html: 'El Sistema de Zonas convierte un rango continuo de luminancias en diez zonas de referencia prácticas. La Zona V es el gris medio de referencia del exposímetro. Cada zona adyacente dista un paso completo, por lo que colocar un tono medido en la Zona III significa dos pasos por debajo de la referencia del exposímetro y situarlo en la Zona VII equivale a dos pasos por encima.',
  },
  { type: 'title', text: 'Lectura de exposición en la tira de zonas', level: 2 },
  {
    type: 'table',
    headers: ['Colocación', 'Significado visual', 'Acción en exposímetro'],
    rows: [
      ['Zona II', 'Sombra profunda con textura apenas visible', 'Reducir exposición 3 pasos desde la Zona V'],
      ['Zona III', 'Textura importante en sombras', 'Reducir exposición 2 pasos desde la Zona V'],
      ['Zona V', 'Referencia neutra de gris medio', 'Mantener la lectura del exposímetro sin cambios'],
      ['Zona VI', 'Tono medio claro como piel clara', 'Aumentar exposición 1 paso desde la Zona V'],
      ['Zona VII', 'Textura brillante que debe preservarse', 'Aumentar exposición 2 pasos desde la Zona V'],
    ],
  },
  {
    type: 'tip',
    title: 'Utiliza la colocación para tomar decisiones creativas',
    html: 'No interpretes la lectura del exposímetro como una orden para convertirlo todo en gris. Decide qué tono contiene la textura o el valor principal en el encuadre, colócalo deliberadamente y deja que el resto de la escena se distribuya.',
  },
  { type: 'title', text: 'Cuándo el revelado modifica el contraste', level: 2 },
  {
    type: 'list',
    items: [
      '<strong>Revelado normal:</strong> Mantiene el rango del sujeto probado cercano al contraste esperado del negativo.',
      '<strong>Revelado N menos:</strong> Comprime un rango de sujeto muy brillante cuando las luces corren riesgo de empastarse.',
      '<strong>Revelado N más:</strong> Expande un rango de sujeto estrecho cuando las sombras importantes necesitan mayor separación.',
    ],
  },
  {
    type: 'glossary',
    items: [
      { term: 'Zona', definition: 'Referencia tonal práctica separada de sus vecinas por un paso completo de exposición.' },
      { term: 'Colocación', definition: 'Elección deliberada de la zona final donde debe aparecer un tono medido del sujeto.' },
      { term: 'Gris medio', definition: 'Referencia de la Zona V utilizada por los exposímetros de luz reflejada como punto neutro.' },
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
  inLanguage: 'es',
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
