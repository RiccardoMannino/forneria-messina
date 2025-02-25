import Section from '@/components/ui/Section'
import Image from 'next/image'
import Work from '../../assets/lavora_con_noi.jpg'
import Link from 'next/link'
import Footer from '@/components/ui/Footer'

export default function LavoraConNoi() {
  return (
    <>
      <Section className="mt-36 flex w-full">
        <Image
          src={Work}
          alt="lavora con noi"
          width={400}
          height={400}
          className="w-full"
        />
      </Section>
      <Section className="flex w-full p-4">
        <article className="flex flex-col items-center justify-center gap-10">
          <h1 className="mb-10 text-3xl font-semibold text-[#FFab00]">
            Lavora con noi
          </h1>
          <div className="flex flex-col justify-center gap-4 text-lg font-semibold text-white phone:text-center">
            <p> Vuoi entrare a far parte dello staff di Forneria Messina?</p>
            <p>Inviaci la tua candidatura!</p>
            <p>Ciao.</p>
            <p>
              Sono Gianmichele della Forneria Messina di San Martino delle
              Scale.
            </p>
            <p>
              Siamo alla ricerca di persone volenterose, appassionate e
              intraprendenti per riempire le nuove fila all’interno della nostra
              FORNERIA!
            </p>
            <p>
              {' '}
              Per alcune posizioni ricerchiamo esperienza, un buon curriculum e
              un passato luccicante.
            </p>
            <p>
              Per altre posizioni cerchiamo attitudine, voglia di imparare e di
              crescere.
            </p>
            <p>
              In tutti i casi ricerchiamo voglia di fare, entusiasmo e un amore
              smodato per la cucina fatta come una volta e l’attenzione al
              cliente.
            </p>
            <p>
              Se, leggendo queste righe qualcosa dentro di te si è illuminato,
              continua a leggere, perché sei la persona giusta per noi!
            </p>
            <p>
              PERCHÉ LAVORARE CON LA FORNERIA MESSINA? Il primo aspetto che devi
              sapere: Con “LA FORNERIA MESSINA” sarà tutto nero su bianco, così
              saremo tranquilli tutti.
            </p>
            <p>
              Con La F. M. non avrai a che fare con titolari sgarbati,
              prepotenti e impreparati, ma con professionisti che lavorano nella
              ristorazione da sempre, e lo faranno per sempre, e per questo sono
              alla costante ricerca di persone che li accompagnino nel loro
              viaggio…
            </p>
            <p>
              Con “LA FORNERIA MESSINA ” avrai la possibilità (ma anche la
              responsabilità!) di portare tutto ciò che di positivo la cucina
              “fatta in casa” ha da trasmettere a PALERMO e nel mondo.
            </p>
            <p>
              Con “LA F.M.” acquisirai competenze che non esistono nel mercato
              della ristorazione , ma che si sono rivelate semplicemente
              fondamentali. Insomma, con noi potrai CRESCERE. Lo sappiamo che lo
              leggi dappertutto.
            </p>
            <p>
              Nel nostro caso è vero per davvero: se ci darai la dimostrazione
              di valere e di credere in noi, noi ti valorizzeremo e crederemo in
              te!
            </p>
            <p>
              Avrai accesso a diversi training durante i quali imparerai tutto
              quello che ti serve per conoscere il nostro Brand ed
              innamorartene. Se sei interessato a candidarti per entrare a far
              parte della nostro Staff, leggi con attenzione il resto della
              pagina. CHI RICERCHIAMO: Semplicissimo: Operatori di Cucina, Banco
              e Sala.
            </p>
            <p>
              Ne abbiamo per tutti i gusti! Il luogo di lavoro? San Martino
              delle Scale – Monreale (PA) Sei semplicemente la persona perfetta
              per il ruolo di Operatore Cucina se possiedi i seguenti requisiti:
              Capacità di lavoro in un team; Conoscenza delle materie prime;
              Capacità di gestire un menu per i diversi momenti della giornata;
              Esperienza pregressa nel ruolo o diploma scuola alberghiera;
              Ordine e pulizia; Interesse di crescita professionale;
              Flessibilità.
            </p>
            <p>
              Devi essere disponibile a lavorare su turni, anche spezzati, anche
              nei weekend e nei festivi!
            </p>
            <p> Operatore Banco e di Sala.</p>
            <p>
              Sei semplicemente la persona perfetta per il ruolo di Operatore
              Banco e di Sala se possiedi i seguenti requisiti: Proattività,
              energia e SORRISO! Capacità di lavorare in team e a contatto con
              il pubblico; Esperienza pregressa nella ristorazione, anche
              minima, preferibilmente servizio di sala e/o di Bar; Flessibilità.
            </p>
            <p>
              Devi essere disponibile a lavorare su turni, anche spezzati, anche
              nei weekend e nei festivi! Gestire flussi anche elevati di clienti
              nelle ore di punta continuando a garantire un servizio accurato al
              cliente; Se sei interessato ad avere un colloquio per entrare nel
              nostro staff, scrivimi a:
              <Link
                className="mx-1 text-[#FFab00]"
                href={'mailto:eventiforneriamessina@gmail.com'}
                target={'_blank'}
              >
                eventiforneriamessina@gmail.com
              </Link>
              Metti come oggetto “LAVORA CON NOI“, dove ti preghiamo di
              dettagliare le tue motivazioni a venire a lavorare alla Forneria
              Messina ed allegando il tuo Curriculum Vitae in formato “pdf”.
            </p>
            <p>
              Pensi di essere la persona giusta? Ecco L’UNICA COSA che DEVI
              FARE: Scrivimi direttamente al mio indirizzo mail
              <Link
                className="mx-1 text-[#FFab00]"
                href={'mailto:eventiforneriamessina@gmail.com'}
                target={'_blank'}
              >
                eventiforneriamessina@gmail.com
              </Link>
              , allegandomi il CV, e rispondendo a questa semplice domanda:
              “Dammi 3 ragioni sul perché dovrei scegliere proprio te piuttosto
              che un’altra persona per lavorare alla Forneria Messina” Leggerò
              personalmente la tua mail e ti risponderò in ogni caso, sia se
              abbiamo deciso di darti un’opportunità, sia se per questa volta
              non è andata bene.
            </p>
            <p> Attendo tue.</p>
            <p> Grazie.</p>
            <p>Gianmichele Messina</p>
            <p> Forneria Messina, San Martino delle Scale.</p>
          </div>
        </article>
      </Section>
      <Footer location="San Martino" id="contatti" />
    </>
  )
}
