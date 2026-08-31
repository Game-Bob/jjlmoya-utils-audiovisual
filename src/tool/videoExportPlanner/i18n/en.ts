import { bibliography } from '../bibliography';
import { createSchemas } from '../schema';
import type { VideoExportPlannerLocaleContent } from '../entry';
import { DEFAULT_UI_EN } from '../ui';

const faq = [
  { question: 'How is the estimated video file size calculated?', answer: 'The planner adds the video bitrate and audio bitrate, multiplies the combined data rate by the duration, converts bits to bytes and then applies the container overhead percentage. The result is a storage estimate, not a prediction of the exact encoded file.' },
  { question: 'Why does the codec table show different starting points?', answer: 'H.264, H.265 and AV1 can reach different compression efficiencies on the same material. The table uses simple planning factors to compare storage scenarios; it does not claim that the rows deliver identical quality or that one encoder will always be smaller.' },
  { question: 'Should I use the suggested bitrate as a requirement?', answer: 'No. Treat it as a first number to test against your footage, delivery platform and encoder. Fine texture, grain, rapid motion, HDR and text overlays can need more data, while simple scenes can need less.' },
  { question: 'Does this planner predict platform upload size?', answer: 'It estimates the file before a platform transcodes it. Upload services may reject settings, recompress the file or create several derivatives, so keep the original export and check the platform requirements separately.' },
];

const howTo = [
  { name: 'Choose the delivery shape', text: 'Pick a frame size and frame rate that match the sequence you are exporting. Avoid changing frame rate merely to make the estimate smaller.' },
  { name: 'Choose a codec and rates', text: 'Select the codec you plan to encode, then enter the video bitrate and audio bitrate from the export preset or delivery specification.' },
  { name: 'Set duration and overhead', text: 'Enter the programme duration in minutes and leave a small overhead allowance for the container, metadata and stream packaging.' },
  { name: 'Compare and reserve storage', text: 'Read the selected file size and the codec starting points, then reserve storage for the export plus any source, proxy and platform derivative files.' },
];

const seo = [
  { type: 'summary' as const, title: 'Plan storage before exporting video', items: ['Estimate file size from duration and combined stream rates', 'Compare H.264, H.265 and AV1 planning scenarios', 'Separate video, audio and container overhead', 'Keep platform recompression outside the estimate'] },
  { type: 'title' as const, text: 'What the export estimate tells you', level: 2 as const },
  { type: 'paragraph' as const, html: 'A video export is a timed stream of bits. The planner converts the video bitrate from megabits per second and the audio bitrate from kilobits per second into a combined rate, multiplies that rate by the programme duration and converts the result into bytes. The overhead field then gives the file a practical allowance for the container and its metadata.' },
  { type: 'title' as const, text: 'How to choose a starting bitrate', level: 2 as const },
  { type: 'paragraph' as const, html: 'Start from the delivery specification when one exists. For example, YouTube publishes reference ranges by frame size and frame rate, while export applications expose CBR and VBR choices for different workflows. The preset buttons are convenient starting points, but your footage is the test: inspect motion, fine texture, gradients and small text in a short sample before rendering the whole programme.' },
  { type: 'list' as const, items: ['Match the export frame rate to the recorded or edited sequence unless the delivery brief says otherwise.', 'Keep video and audio units distinct: Mbps is megabits per second, while kbps is kilobits per second.', 'Reserve additional space for source media, intermediate renders, captions and platform derivatives.', 'Compare a short sample at the intended playback size before committing to a long export.'] },
  { type: 'title' as const, text: 'How to read the codec comparison', level: 2 as const },
  { type: 'paragraph' as const, html: 'The codec table is a storage planning view, not a quality leaderboard. Its lower rows represent a smaller target under a simple efficiency assumption. Actual results depend on the encoder, rate control mode, scene complexity, grain, motion, bit depth and the platform that receives the file. If the destination will transcode, preserve a high quality source export even when the upload copy is smaller.' },
  { type: 'tip' as const, title: 'Limit of the estimate', html: 'The result cannot certify playback compatibility, visual quality, platform acceptance or the final size of a VBR encode. Validate a representative sample and follow the destination specification before delivery.' },
];

const title = 'Video Export Bitrate and File Size Planner';
const description = 'Estimate video export size from duration and stream rates, then compare codec-aware starting points for H.264, H.265 and AV1 workflows.';

export const content: VideoExportPlannerLocaleContent = {
  slug: 'video-export-bitrate-file-size-planner', title, description, ui: DEFAULT_UI_EN, seo, faq, bibliography, howTo,
  schemas: createSchemas({ title, description, faq, howTo, language: 'en' }),
};
