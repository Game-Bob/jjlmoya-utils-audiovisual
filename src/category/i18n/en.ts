import type { CategoryLocaleContent } from '../../types';

export const content: CategoryLocaleContent = {
  slug: 'audiovisual-photography-tools-professional-calculators',
  title: 'Audiovisual and Photography Tools',
  description: 'Professional tools and calculators for filmmakers, photographers, and digital audiovisual content creators.',
  seo: [
    {
      type: 'summary',
      title: 'Professional Audiovisual Tools',
      items: [
        'Smart calculators for timelapses, effects, and composition.',
        'Privacy tools to clean EXIF metadata.',
        'Subtitle synchronization and timing editing.',
        'Resolution analysis, print quality, and optimal viewing distance.'
      ],
    },
    {
      type: 'title',
      text: 'Professional Toolbox for Audiovisual Production',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Our comprehensive suite of utilities solves the most common technical challenges in every stage of audiovisual production. From precise interval calculations for cinematic timelapses to privacy protection through EXIF metadata cleaning in your multimedia files.',
    },
    {
      type: 'stats',
      items: [
        {
          value: '12+',
          label: 'Specialized tools',
          icon: 'cog'
        },
        {
          value: '100%',
          label: 'Precise calculations',
          icon: 'chart'
        },
        {
          value: '0%',
          label: 'Data stored on server',
          icon: 'shield'
        }
      ],
      columns: 3
    },
    {
      type: 'title',
      text: 'Tool Categories',
      level: 3,
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Timelapse and Cinematic',
          description: 'Calculate intervals, total duration, and frame rates for your cinematic shots.',
          icon: 'film',
          points: [
            'Required frame calculation',
            'Duration in seconds/minutes',
            'Variable playback speed'
          ]
        },
        {
          title: 'Privacy and Metadata',
          description: 'Protect your privacy by removing EXIF data and sensitive metadata from your files.',
          icon: 'lock',
          points: [
            'EXIF data analysis',
            'Location metadata cleaning',
            'Device information removal'
          ]
        },
        {
          title: 'Subtitle Editing',
          description: 'Synchronize, adjust, and edit subtitles with millisecond precision.',
          icon: 'text',
          points: [
            'Real-time synchronization',
            'In/out time editing',
            'Global delay adjustment'
          ]
        },
        {
          title: 'Image Analysis',
          description: 'Calculate technical parameters for resolution, printing, and viewing distance.',
          icon: 'mdi:image',
          points: [
            'DPI and resolution calculation',
            'Recommended viewing distance',
            'Print quality analysis'
          ],
          highlight: true
        }
      ],
      columns: 2
    },
    {
      type: 'title',
      text: 'Why Choose Our Tools',
      level: 3,
    },
    {
      type: 'proscons',
      items: [
        {
          pro: '100% browser-based processing - your data is never uploaded to servers',
          con: 'Requires a modern browser with JavaScript support'
        },
        {
          pro: 'Mathematical precision in all audiovisual calculations',
          con: 'Very specific cases may require manual validation'
        },
        {
          pro: 'Intuitive interface designed for industry professionals',
          con: 'Best experience on desktop/tablet screens'
        },
        {
          pro: 'Completely free tools with no usage limits',
          con: 'No dedicated premium support (community available)'
        }
      ],
      proTitle: 'Advantages',
      conTitle: 'Considerations'
    },
    {
      type: 'title',
      text: 'Quick Start Guide',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Select the tool you need based on your project type',
        'Enter technical parameters (frames, resolution, times, etc.)',
        'Get instant calculations and precise results',
        'Export or apply results to your workflow',
        'Repeat the process for multiple projects without limits'
      ],
      icon: 'mdi:arrow-right'
    },
    {
      type: 'tip',
      title: 'Pro Tip',
      html: 'For work with multiple clips or sequences, we recommend saving your key parameters (camera resolution, usual frame rate, subtitle language) in a document. This way you can quickly access them without needing to recalculate every time.'
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'EXIF',
          definition: 'File format that stores metadata in digital images (date, camera, GPS location, etc.). It can be a privacy risk.'
        },
        {
          term: 'FPS (Frames Per Second)',
          definition: 'Number of frames played each second. Common values: 24 fps (cinema), 25 fps (PAL), 30 fps (NTSC), 60 fps (fluid video).'
        },
        {
          term: 'DPI (Dots Per Inch)',
          definition: 'Resolution measure in printing. Higher DPI = better quality. For professional photography, a minimum of 300 DPI is recommended.'
        },
        {
          term: 'Timelapse',
          definition: 'Cinematographic technique that speeds up time by capturing frames at regular intervals to create a fast-motion effect.'
        },
        {
          term: 'Subtitle Synchronization',
          definition: 'Process of aligning the start/end time of subtitles with movie or series audio and video.'
        },
        {
          term: 'Metadata',
          definition: 'Hidden information in media files describing content (author, creation date, device used, location, etc.).'
        }
      ]
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'How to Choose the Right Tool',
      icon: 'help',
      badge: 'Selection Guide',
      html: '<strong>Creating a timelapse?</strong> -> Use the timelapse calculator.<br><strong>Need to protect privacy?</strong> -> Metadata cleaning tool.<br><strong>Working with subtitles?</strong> -> Subtitle sync and editor.<br><strong>Need to optimize image?</strong> -> Resolution and viewing distance calculator.'
    },
    {
      type: 'card',
      title: 'Key Functionality',
      html: 'All our tools work <strong>100% locally</strong> in your browser. This means maximum privacy, instant speed, and offline access (after initial load).'
    },
    {
      type: 'message',
      title: 'Privacy Protection',
      ariaLabel: 'Information about privacy and data storage',
      html: 'We do not store, process, or share your audiovisual data. All calculations and metadata cleaning occur exclusively on your device. You have full control of your content.'
    }
  ],
};
