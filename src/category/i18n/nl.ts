import type { CategoryLocaleContent } from '../../types';

export const content: CategoryLocaleContent = {
  slug: 'audiovisueel-fotografie',
  title: 'Audiovisuele en Fotografie Tools',
  description: 'Professionele tools en calculators voor filmmakers, fotografen en makers van digitale audiovisuele content.',
  seo: [
    {
      type: 'summary',
      title: 'Professionele Audiovisuele Tools',
      items: [
        'Slimme calculators voor timelapses, effecten en compositie.',
        'Privacytools om EXIF-metadata op te schonen.',
        'Ondertitelsynchronisatie en timingbewerking.',
        'Resolutieanalyse, printkwaliteit en optimale kijkafstand.'
      ],
    },
    {
      type: 'title',
      text: 'Professionele Toolbox voor Audiovisuele Productie',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Onze uitgebreide suite aan hulpmiddelen lost de meest voorkomende technische uitdagingen op in elke fase van de audiovisuele productie. Van nauwkeurige intervalberekeningen voor cinematografische timelapses tot privacybescherming via het opschonen van EXIF-metadata in uw multimediabestanden.',
    },
    {
      type: 'stats',
      items: [
        {
          value: '12+',
          label: 'Specialistische tools',
          icon: 'mdi:cog'
        },
        {
          value: '100%',
          label: 'Nauwkeurige berekeningen',
          icon: 'mdi:chart-line'
        },
        {
          value: '0%',
          label: 'Data opgeslagen op server',
          icon: 'mdi:shield-check'
        }
      ],
      columns: 3
    },
    {
      type: 'title',
      text: 'Tool categorieën',
      level: 3,
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Timelapse en Cinematic',
          description: 'Bereken intervallen, totale duur en framesnelheden voor uw cinematografische beelden.',
          icon: 'mdi:film',
          points: [
            'Berekening van benodigde frames',
            'Duur in seconden/minuten',
            'Variabele afspeelsnelheid'
          ]
        },
        {
          title: 'Privacy en Metadata',
          description: 'Bescherm uw privacy door EXIF-data en gevoelige metadata uit uw bestanden te verwijderen.',
          icon: 'mdi:lock',
          points: [
            'Analyse van EXIF-data',
            'Opschonen van locatie-metadata',
            'Verwijderen van apparaatinformatie'
          ]
        },
        {
          title: 'Ondertiteling Bewerken',
          description: 'Synchroniseer, pas aan en bewerk ondertitels met precisie op de milliseconde.',
          icon: 'mdi:text',
          points: [
            'Real-time synchronisatie',
            'Bewerken van begin- en eindtijden',
            'Globale vertragingsaanpassing'
          ]
        },
        {
          title: 'Beeldanalyse',
          description: 'Bereken technische parameters voor resolutie, printen en kijkafstand.',
          icon: 'mdi:image',
          points: [
            'DPI- en resolutieberekening',
            'Aanbevolen kijkafstand',
            'Analyse van printkwaliteit'
          ],
          highlight: true
        }
      ],
      columns: 2
    },
    {
      type: 'title',
      text: 'Waarom Kiezen Voor Onze Tools',
      level: 3,
    },
    {
      type: 'proscons',
      items: [
        {
          pro: '100% browser-gebaseerde verwerking - uw data wordt nooit naar servers geüpload',
          con: 'Vereist een moderne browser met JavaScript-ondersteuning'
        },
        {
          pro: 'Mathematische precisie in alle audiovisuele berekeningen',
          con: 'Zeer specifieke gevallen kunnen handmatige validatie vereisen'
        },
        {
          pro: 'Intuïtieve interface ontworpen voor professionals uit de sector',
          con: 'Beste ervaring op desktop/tablet schermen'
        },
        {
          pro: 'Volledig gratis tools zonder gebruikslimieten',
          con: 'Geen toegewijde premium ondersteuning (community beschikbaar)'
        }
      ],
      proTitle: 'Voordelen',
      conTitle: 'Overwegingen'
    },
    {
      type: 'title',
      text: 'Snelstartgids',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Selecteer de tool die u nodig heeft op basis van uw projecttype',
        'Voer technische parameters in (frames, resolutie, tijden, etc.)',
        'Krijg direct berekeningen en nauwkeurige resultaten',
        'Exporteer of pas resultaten toe op uw workflow',
        'Herhaal het proces voor meerdere projecten zonder limieten'
      ],
      icon: 'mdi:arrow-right'
    },
    {
      type: 'tip',
      title: 'Pro Tip',
      html: 'Voor werk met meerdere clips of sequenties raden we aan om uw belangrijkste parameters (cameraresolutie, gebruikelijke framesnelheid, taal van de ondertiteling) in een document op te slaan. Zo heeft u er snel toegang toe zonder alles elke keer opnieuw te hoeven berekenen.'
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'EXIF',
          definition: 'Bestandsformaat dat metadata opslaat in digitale afbeeldingen (datum, camera, GPS-locatie, etc.). Het kan een privacyrisico vormen.'
        },
        {
          term: 'FPS (Frames Per Seconde)',
          definition: 'Aantal frames dat per seconde wordt afgespeeld. Veelvoorkomende waarden: 24 fps (bioscoop), 25 fps (PAL), 30 fps (NTSC), 60 fps (vloeiende video).'
        },
        {
          term: 'DPI (Dots Per Inch)',
          definition: 'Maatstaf voor resolutie bij het printen. Hogere DPI = betere kwaliteit. Voor professionele fotografie wordt minimaal 300 DPI aanbevolen.'
        },
        {
          term: 'Timelapse',
          definition: 'Cinematografische techniek die de tijd versnelt door beelden met regelmatige tussenpozen vast te leggen om een effect van versnelde beweging te creëren.'
        },
        {
          term: 'Ondertitelsynchronisatie',
          definition: 'Proces waarbij de start- en eindtijd van ondertitels wordt afgestemd op de audio en video van een film of serie.'
        },
        {
          term: 'Metadata',
          definition: 'Verborgen informatie in mediabestanden die de inhoud beschrijft (auteur, aanmaakdatum, gebruikt apparaat, locatie, etc.).'
        }
      ]
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Hoe de Juiste Tool Te Kiezen',
      icon: 'mdi:help-circle',
      badge: 'Selectiegids',
      html: '<strong>Een timelapse maken?</strong> -> Gebruik de timelapse calculator.<br><strong>Privacy beschermen?</strong> -> Hulpprogramma voor het opschonen van metadata.<br><strong>Werken met ondertitels?</strong> -> Ondertitelsynchronisatie en editor.<br><strong>Beeld optimaliseren?</strong> -> Calculator voor resolutie en kijkafstand.'
    },
    {
      type: 'card',
      title: 'Kernfunctionaliteit',
      html: 'Al onze tools werken <strong>100% lokaal</strong> in uw browser. Dit betekent maximale privacy, onmiddellijke snelheid en offline toegang (na de eerste keer laden).'
    },
    {
      type: 'message',
      title: 'Privacybescherming',
      ariaLabel: 'Informatie over privacy en gegevensopslag',
      html: 'Wij slaan uw audiovisuele gegevens niet op, verwerken ze niet en delen ze niet. Alle berekeningen en het opschonen van metadata vinden uitsluitend plaats op uw apparaat. U heeft de volledige controle over uw content.'
    }
  ],
};
