import { bibliography } from '../bibliography';
import { createSchemas } from '../schema';
import type { ReverbDecayLocaleContent } from '../entry';
import type { ReverbDecayUI } from '../ui';

const ui: ReverbDecayUI = {
  title: 'Calculadora de tiempo de reverberación', subtitle: 'Define la cola de la sala antes de abrir un plugin de reverb.', volumeLabel: 'Volumen de la sala', absorptionLabel: 'Absorción equivalente estimada', bpmLabel: 'Tempo', targetLabel: 'Destino sonoro', volumeHint: 'Volumen de aire cerrado, no superficie del suelo.', absorptionHint: 'Absorción total en sabinios de metro cuadrado.', bpmHint: 'Sirve para situar un pre-delay musical.', targetSpeech: 'Voz y diálogo', targetPodcast: 'Podcast y locución', targetVocals: 'Voz cantada principal', targetAcoustic: 'Música acústica', targetOrchestral: 'Música orquestal', targetAmbient: 'Cama ambiental', resultRt60: 'RT60 estimado', resultTarget: 'Ventana de trabajo', resultPreDelay: 'Pre-delay sugerido', resultAbsorption: 'Absorción para el objetivo', resultReading: 'Lectura', statusTooDry: 'Cola corta', statusOnTarget: 'Dentro del objetivo', statusTooWet: 'Cola larga', adviceTooDry: 'La sala se apagará antes del objetivo elegido. Reduce la absorción o deja que el efecto aporte la cola que falta.', adviceOnTarget: 'La cola estimada cae dentro de la ventana elegida. Escucha la claridad en la distancia real antes de fijar el ajuste.', adviceTooWet: 'La sala seguirá sonando más allá del objetivo. Más absorción, un decay más corto o menos envío pueden recuperar definición.', curveTitle: 'La cola de la sala', curveDrop: 'caída de 60 dB', curveSeconds: 'segundos', formulaLabel: 'Estimación de Sabine: RT60 = 0,1611 × volumen ÷ absorción.', assumptionLabel: 'Estimación de planificación, no respuesta medida. La absorción cambia con frecuencia, posición y ocupación.', targetRangeTemplate: 'Ventana de trabajo: __MIN__-__MAX__ s', resetLabel: 'Restablecer ejemplo', unitVolume: 'm³', unitSabins: 'm² sabinio', unitVolumeImperial: 'ft³', unitSabinsImperial: 'ft² sabinio', unitSystemLabel: 'Sistema de medida', unitMetric: 'Métrico', unitImperial: 'Imperial', unitBpm: 'BPM', unitSeconds: 's', unitMilliseconds: 'ms',
};
const faq = [
  { question: '¿Qué significa RT60?', answer: 'RT60 es el tiempo estimado que necesita la respuesta de una sala para caer 60 dB después de detenerse la fuente. Sirve para planificar, pero no sustituye una medición de respuesta impulsional.' },
  { question: '¿Qué es la absorción equivalente?', answer: 'Es la superficie total absorbente expresada en sabinios de metro cuadrado. Combina el área y el coeficiente de absorción de las superficies y objetos que forman la cola sonora.' },
  { question: '¿Por qué se usa el BPM?', answer: 'El tempo da una referencia musical al pre-delay. La sugerencia tiene límites y es solo un punto de partida para escuchar, no un ajuste automático de mezcla.' },
];
const howTo = [
  { name: 'Estimar el volumen', text: 'Introduce el volumen cerrado en metros cúbicos, incluida la altura real del techo cuando sea posible.' },
  { name: 'Estimar la absorción total', text: 'Introduce la absorción equivalente en sabinios a partir de un informe acústico, una estimación de sala o datos de materiales.' },
  { name: 'Elegir el objetivo', text: 'Selecciona voz, locución, canto, música acústica, orquesta o ambiente para definir una ventana de trabajo útil.' },
  { name: 'Ajustar escuchando y midiendo', text: 'Usa el RT60 y la curva como primera aproximación y confirma después con una medición y una escucha desde la posición prevista.' },
];
const seo = [
  { type: 'summary' as const, title: 'Una estimación de la cola acústica', items: ['RT60 de Sabine a partir de volumen y absorción equivalente', 'Ventanas de trabajo para voz, locución y música', 'Pre-delay sugerido con una referencia de BPM', 'Curva visible hasta una caída de 60 dB con banda objetivo'] },
  { type: 'title' as const, text: 'Cómo funciona la estimación RT60', level: 2 as const },
  { type: 'paragraph' as const, html: 'La calculadora aplica la relación de Sabine <code>RT60 = 0,1611 × V ÷ A</code>. V es el volumen en metros cúbicos y A la absorción equivalente en sabinios de metro cuadrado. Al aumentar la superficie absorbente se acorta la cola; al aumentar el volumen se alarga. El valor ayuda a planificar una dirección de reverb, pero sigue siendo aproximado porque la absorción depende de la frecuencia, la distribución, las pérdidas del aire y la ocupación.' },
  { type: 'title' as const, text: 'Leer la curva antes de mover el plugin', level: 2 as const },
  { type: 'paragraph' as const, html: 'La línea coral representa la caída de energía prevista y la banda verde azulado marca la ventana del contenido. Si llega a -60 dB antes de la banda, la sala puede sentirse seca. Si la supera, la palabra o el detalle rítmico pueden necesitar más absorción, un decay más corto o menos envío. El pre-delay es solo una referencia de tempo: no conoce el arreglo, la distancia de la fuente ni los modos de la sala.' },
];
const title = 'Calculadora de tiempo de reverberación RT60';
const description = 'Estima el RT60 con el volumen y la absorción de una sala, y encuentra un decay y un pre-delay iniciales para voz, diálogo y música.';
export const content: ReverbDecayLocaleContent = { slug: 'calculadora-tiempo-reverberacion-rt60', title, description, ui, seo, faq, bibliography, howTo, schemas: createSchemas({ title, description, faq, howTo, language: 'es' }) };
