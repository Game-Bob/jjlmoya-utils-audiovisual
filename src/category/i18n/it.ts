import type { CategoryLocaleContent } from '../../types';

export const content: CategoryLocaleContent = {
  slug: 'audiovisivo-fotografia',
  title: 'Strumenti Audiovisivi e Fotografici',
  description: 'Strumenti professionali e calcolatori per registi, fotografi e creatori di contenuti audiovisivi digitali.',
  seo: [
    {
      type: 'summary',
      title: 'Strumenti Audiovisivi Professionali',
      items: [
        'Calcolatori intelligenti per timelapse, effetti e composizione.',
        'Strumenti di privacy per pulire i metadati EXIF.',
        'Sincronizzazione dei sottotitoli e modifica dei tempi.',
        'Analisi della risoluzione, qualità di stampa e distanza di visione ottimale.'
      ],
    },
    {
      type: 'title',
      text: 'Cassetta degli Attrezzi Professionale per la Produzione Audiovisiva',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'La nostra suite completa di utility risolve le sfide tecniche più comuni in ogni fase della produzione audiovisiva. Dai calcoli precisi degli intervalli per timelapse cinematografici alla protezione della privacy tramite la pulizia dei metadati EXIF nei file multimediali.',
    },
    {
      type: 'stats',
      items: [
        {
          value: '10+',
          label: 'Strumenti specializzati',
          icon: 'mdi:cog'
        },
        {
          value: '100%',
          label: 'Calcoli precisi',
          icon: 'mdi:chart-line'
        },
        {
          value: '0%',
          label: 'Dati memorizzati sul server',
          icon: 'mdi:shield-check'
        }
      ],
      columns: 3
    },
    {
      type: 'title',
      text: 'Categorie di Strumenti',
      level: 3,
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Timelapse e Cinematografica',
          description: 'Calcola intervalli, durata totale e frame rate per i tuoi scatti cinematografici.',
          icon: 'mdi:film',
          points: [
            'Calcolo dei fotogrammi necessari',
            'Durata in secondi/minuti',
            'Velocità di riproduzione variabile'
          ]
        },
        {
          title: 'Privacy e Metadati',
          description: 'Proteggi la tua privacy rimuovendo i dati EXIF e i metadati sensibili dai tuoi file.',
          icon: 'mdi:lock',
          points: [
            'Analisi dei dati EXIF',
            'Pulizia dei metadati di posizione',
            'Rimozione delle informazioni sul dispositivo'
          ]
        },
        {
          title: 'Modifica Sottotitoli',
          description: 'Sincronizza, regola e modifica i sottotitoli con precisione al millisecondo.',
          icon: 'mdi:text',
          points: [
            'Sincronizzazione in tempo reale',
            'Modifica dei tempi di inizio/fine',
            'Regolazione globale del ritardo'
          ]
        },
        {
          title: 'Analisi Immagine',
          description: 'Calcola i parametri tecnici per risoluzione, stampa e distanza di visione.',
          icon: 'mdi:image',
          points: [
            'Calcolo DPI e risoluzione',
            'Distanza di visione consigliata',
            'Analisi della qualità di stampa'
          ],
          highlight: true
        }
      ],
      columns: 2
    },
    {
      type: 'title',
      text: 'Perché scegliere i nostri strumenti',
      level: 3,
    },
    {
      type: 'proscons',
      items: [
        {
          pro: 'Elaborazione 100% via browser: i tuoi dati non vengono mai caricati sui server',
          con: 'Richiede un browser moderno con supporto JavaScript'
        },
        {
          pro: 'Precisione matematica in tutti i calcoli audiovisivi',
          con: 'Casi molto specifici potrebbero richiedere una convalida manuale'
        },
        {
          pro: 'Interfaccia intuitiva progettata per i professionisti del settore',
          con: 'Esperienza migliore su schermi desktop/tablet'
        },
        {
          pro: 'Strumenti completamente gratuiti senza limiti d\'uso',
          con: 'Nessun supporto premium dedicato (comunità disponibile)'
        }
      ],
      proTitle: 'Vantaggi',
      conTitle: 'Considerazioni'
    },
    {
      type: 'title',
      text: 'Guida Rapida',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Seleziona lo strumento necessario in base al tipo di progetto',
        'Inserisci i parametri tecnici (fotogrammi, risoluzione, tempi, ecc.)',
        'Ottieni calcoli istantanei e risultati precisi',
        'Esporta o applica i risultati al tuo flusso di lavoro',
        'Ripeti il processo per più progetti senza limiti'
      ],
      icon: 'mdi:arrow-right'
    },
    {
      type: 'tip',
      title: 'Consiglio Pro',
      html: 'Per lavori con clip o sequenze multiple, consigliamo di salvare i parametri chiave (risoluzione camera, frame rate abituale, lingua sottotitoli) in un documento. In questo modo potrai accedervi rapidamente senza dover ricalcolare ogni volta.'
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'EXIF',
          definition: 'Formato file che memorizza metadati nelle immagini digitali (data, fotocamera, posizione GPS, ecc.). Può essere un rischio per la privacy.'
        },
        {
          term: 'FPS (Fotogrammi per secondo)',
          definition: 'Numero di fotogrammi riprodotti al secondo. Valori comuni: 24 fps (cinema), 25 fps (PAL), 30 fps (NTSC), 60 fps (video fluido).'
        },
        {
          term: 'DPI (Punti per pollice)',
          definition: 'Misura della risoluzione in stampa. DPI più elevato = migliore qualità. Per la fotografia professionale, è consigliato un minimo di 300 DPI.'
        },
        {
          term: 'Timelapse',
          definition: 'Tecnica cinematografica che accelera il tempo catturando fotogrammi a intervalli regolari per creare un effetto di movimento rapido.'
        },
        {
          term: 'Sincronizzazione Sottotitoli',
          definition: 'Processo di allineamento dei tempi di inizio/fine dei sottotitoli con l\'audio e il video di film o serie.'
        },
        {
          term: 'Metadati',
          definition: 'Informazioni nascoste nei file multimediali che descrivono il contenuto (autore, data di creazione, dispositivo utilizzato, posizione, ecc.).'
        }
      ]
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Come scegliere lo strumento giusto',
      icon: 'mdi:help-circle',
      badge: 'Guida alla Scelta',
      html: '<strong>Creazione di un timelapse?</strong> -> Usa il calcolatore di timelapse.<br><strong>Devi proteggere la privacy?</strong> -> Strumento di pulizia dei metadati.<br><strong>Lavori con i sottotitoli?</strong> -> Sincronizzatore ed editor di sottotitoli.<br><strong>Devi ottimizzare un\'immagine?</strong> -> Calcolatore di risoluzione e distanza di visione.'
    },
    {
      type: 'card',
      title: 'Funzionalità Chiave',
      html: 'Tutti i nostri strumenti funzionano <strong>al 100% localmente</strong> nel tuo browser. Ciò significa massima privacy, velocità istantanea e accesso offline (dopo il caricamento iniziale).'
    },
    {
      type: 'message',
      title: 'Protezione della Privacy',
      ariaLabel: 'Informazioni sulla privacy e la conservazione dei dati',
      html: 'Non memorizziamo, elaboriamo o condividiamo i tuoi dati audiovisivi. Tutti i calcoli e la pulizia dei metadati avvengono esclusivamente sul tuo dispositivo. Hai il pieno controllo dei tuoi contenuti.'
    }
  ],
};
