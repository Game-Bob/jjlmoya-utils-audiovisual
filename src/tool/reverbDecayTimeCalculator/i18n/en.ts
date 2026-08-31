import { bibliography } from '../bibliography';
import { createSchemas } from '../schema';
import type { ReverbDecayLocaleContent } from '../entry';
import { DEFAULT_UI_EN } from '../ui';

const faq = [
  { question: 'What does RT60 mean?', answer: 'RT60 is the estimated time for a room response to fall by 60 dB after the source stops. It is a planning measure, not a substitute for an impulse-response measurement.' },
  { question: 'What is equivalent absorption?', answer: 'Equivalent absorption is the total sound-absorbing area expressed in square-metre sabins. It combines the area and absorption coefficient of the surfaces and objects that shape the room tail.' },
  { question: 'Why does the calculator use BPM?', answer: 'Tempo gives the pre-delay a musical reference. The suggestion is capped and deliberately conservative so it remains a starting point for listening rather than an automatic mix setting.' },
];

const howTo = [
  { name: 'Estimate the room volume', text: 'Enter the enclosed volume in cubic metres. Use the actual room volume when possible, including the ceiling height.' },
  { name: 'Estimate total absorption', text: 'Enter the equivalent absorption in square-metre sabins from a room estimate, acoustic report or material data.' },
  { name: 'Choose the content target', text: 'Select speech, voice, vocals, acoustic music, orchestral music or an ambient wash to set a useful working window.' },
  { name: 'Tune by ear and measurement', text: 'Use the RT60 and curve as a first pass, then confirm the room or mix with a measured response and listen at the intended position.' },
];

const seo = [
  { type: 'summary' as const, title: 'A room tail estimate for sound design', items: ['Sabine RT60 from volume and equivalent absorption', 'Working windows for speech, voice and music', 'BPM-aware pre-delay suggestion for a first mix pass', 'Visible -60 dB decay curve with a target band'] },
  { type: 'title' as const, text: 'How the RT60 estimate works', level: 2 as const },
  { type: 'paragraph' as const, html: 'The calculator applies the Sabine relationship <code>RT60 = 0.1611 × V ÷ A</code>. V is the room volume in cubic metres and A is the equivalent absorption in square-metre sabins. Increasing the absorbing area shortens the tail; increasing the volume lengthens it. The number is useful for planning a reverb direction, but it is still an estimate because absorption varies with frequency, distribution, air losses and occupancy.' },
  { type: 'title' as const, text: 'Read the curve before changing the plugin', level: 2 as const },
  { type: 'paragraph' as const, html: 'The coral line is the predicted energy decay and the teal band is the selected content window. If the line reaches -60 dB before the band, the room is likely to feel dry for that use. If it runs beyond the band, speech or rhythmic detail may need more absorption, a shorter decay or a lower send. The suggested pre-delay is a tempo reference only; it cannot account for every arrangement, source distance or room mode.' },
];

const title = 'Reverb Decay Time Calculator';
const description = 'Estimate RT60 from room volume and absorption, then find a practical decay window and pre-delay starting point for speech, vocals and music.';

export const content: ReverbDecayLocaleContent = {
  slug: 'reverb-decay-time-calculator', title, description, ui: DEFAULT_UI_EN, seo, faq, bibliography, howTo,
  schemas: createSchemas({ title, description, faq, howTo, language: 'en' }),
};
