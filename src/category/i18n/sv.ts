import type { CategoryLocaleContent } from '../../types';

export const content: CategoryLocaleContent = {
  slug: 'audiovisuellt-fotografi',
  title: 'Audiovisuella och Fotografi verktyg',
  description: 'Professionella verktyg och kalkylatorer för filmskapare, fotografer och skapare av digitalt audiovisuellt innehåll.',
  seo: [
    {
      type: 'summary',
      title: 'Professionella audiovisuella verktyg',
      items: [
        'Smarta kalkylatorer för timelapses, effekter och komposition.',
        'Integritetsverktyg för att rensa EXIF-metadata.',
        'Synkronisering av undertexter och tidsredigering.',
        'Upplösningsanalys, utskriftskvalitet och optimalt betraktningsavstånd.'
      ],
    },
    {
      type: 'title',
      text: 'Professionell verktygslåda för audiovisuell produktion',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Vår omfattande samling verktyg löser de vanligaste tekniska utmaningarna i varje steg av den audiovisuella produktionen. Från exakta intervallberäkningar för cinematiska timelapses till integritetsskydd genom rensning av EXIF-metadata i dina multimediafiler.',
    },
    {
      type: 'stats',
      items: [
        {
          value: '10+',
          label: 'Specialiserade verktyg',
          icon: 'mdi:cog'
        },
        {
          value: '100%',
          label: 'Exakta beräkningar',
          icon: 'mdi:chart-line'
        },
        {
          value: '0%',
          label: 'Data sparad på servern',
          icon: 'mdi:shield-check'
        }
      ],
      columns: 3
    },
    {
      type: 'title',
      text: 'Verktygskategorier',
      level: 3,
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Timelapse och Cinematic',
          description: 'Beräkna intervall, total varaktighet och bildhastigheter för dina cinematiska tagningar.',
          icon: 'mdi:film',
          points: [
            'Beräkning av antal bilder som krävs',
            'Varaktighet i sekunder/minuter',
            'Variabel uppspelningshastighet'
          ]
        },
        {
          title: 'Integritet och Metadata',
          description: 'Skydda din integritet genom att ta bort EXIF-data och känslig metadata från dina filer.',
          icon: 'mdi:lock',
          points: [
            'Analys av EXIF-data',
            'Rensning av platsmetadata',
            'Borttagning av enhetsinformation'
          ]
        },
        {
          title: 'Redigering av Undertexter',
          description: 'Synkronisera, justera och redigera undertexter med millisekundprecision.',
          icon: 'mdi:text',
          points: [
            'Synkronisering i realtid',
            'Redigering av start- och sluttid',
            'Global justering av fördröjning'
          ]
        },
        {
          title: 'Bildanalys',
          description: 'Beräkna tekniska parametrar för upplösning, utskrift och betraktningsavstånd.',
          icon: 'mdi:image',
          points: [
            'BPI- och upplösningsberäkning',
            'Rekommenderat betraktningsavstånd',
            'Analys av utskriftskvalitet'
          ],
          highlight: true
        }
      ],
      columns: 2
    },
    {
      type: 'title',
      text: 'Varför välja våra verktyg',
      level: 3,
    },
    {
      type: 'proscons',
      items: [
        {
          pro: '100% webbläsarbaserad bearbetning - dina data laddas aldrig upp till servrar',
          con: 'Kräver en modern webbläsare med stöd för JavaScript'
        },
        {
          pro: 'Matematisk precision i alla audiovisuella beräkningar',
          con: 'Vissa specifika fall kan kräva manuell validering'
        },
        {
          pro: 'Intuitivt gränssnitt designat för proffs i branschen',
          con: 'Bäst upplevelse på stationära datorer eller surfplattor'
        },
        {
          pro: 'Helt kostnadsfria verktyg utan användningsbegränsningar',
          con: 'Inget dedikerat premiumstöd (community finns tillgängligt)'
        }
      ],
      proTitle: 'Fördelar',
      conTitle: 'Att tänka på'
    },
    {
      type: 'title',
      text: 'Snabbguide',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Välj verktyget du behöver baserat på din projekttyp',
        'Ange tekniska parametrar (bilder, upplösning, tider, etc.)',
        'Få omedelbara beräkningar och exakta resultat',
        'Exportera eller applicera resultaten i ditt arbetsflöde',
        'Upprepa processen för flera projekt utan begränsningar'
      ],
      icon: 'mdi:arrow-right'
    },
    {
      type: 'tip',
      title: 'Proffstips',
      html: 'För arbete med flera klipp eller sekvenser rekommenderar vi att du sparar dina viktigaste parametrar (kameraupplösning, vanlig bildhastighet, undertextspråk) i ett dokument. På så sätt kan du snabbt komma åt dem utan att behöva räkna om varje gång.'
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'EXIF',
          definition: 'Filformat som lagrar metadata i digitala bilder (datum, kamera, GPS-plats, etc.). Det kan innebära en integritetsrisk.'
        },
        {
          term: 'FPS (Bilder per sekund)',
          definition: 'Antal bilder som spelas upp varje sekund. Vanliga värden: 24 fps (film), 25 fps (PAL), 30 fps (NTSC), 60 fps (flytande video).'
        },
        {
          term: 'DPI (Punkter per tum)',
          definition: 'Mått på upplösning vid utskrift. Högre DPI = bättre kvalitet. För professionell fotografering rekommenderas minst 300 DPI.'
        },
        {
          term: 'Timelapse (Tidsförlopp)',
          definition: 'Filmfotograferingsteknik som påskyndar tiden genom att ta bilder med jämna mellanrum för att skapa en snabbrörlig effekt.'
        },
        {
          term: 'Synkronisering av Undertexter',
          definition: 'Processen att anpassa start- och sluttid för undertexter till ljudet och videon i en film eller serie.'
        },
        {
          term: 'Metadata',
          definition: 'Dold information i mediafiler som beskriver innehållet (författare, skapandedatum, enhet som används, plats, etc.).'
        }
      ]
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Hur man väljer rätt verktyg',
      icon: 'mdi:help-circle',
      badge: 'Valguide',
      html: '<strong>Skapar du en timelapse?</strong> -> Använd timelapse-kalkylatorn.<br><strong>Behöver du skydda integriteten?</strong> -> Verktyg för rensning av metadata.<br><strong>Arbetar du med undertexter?</strong> -> Undertextsynk och redigerare.<br><strong>Behöver du optimera en bild?</strong> -> Kalkylator för upplösning och betraktningsavstånd.'
    },
    {
      type: 'card',
      title: 'Nyckelfunktionalitet',
      html: 'Alla våra verktyg fungerar <strong>100% lokalt</strong> i din webbläsare. Detta innebär maximal integritet, omedelbar hastighet och offlineåtkomst (efter första laddningen).'
    },
    {
      type: 'message',
      title: 'Integritetsskydd',
      ariaLabel: 'Information om integritet och datalagring',
      html: 'Vi lagrar, bearbetar eller delar inte dina audiovisuella data. Alla beräkningar och rensning av metadata sker uteslutande på din enhet. Du har full kontroll över ditt innehåll.'
    }
  ],
};
