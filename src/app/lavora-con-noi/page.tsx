import Section from '@/components/ui/Section'
import Image from 'next/image'
import Work from '../../assets/lavora_con_noi.jpg'
import Link from 'next/link'
import Pin from '@/assets/map-pin.svg'
import Whatsapp from '@/assets/brand-whatsapp.svg'
import Clock from '@/assets/clock.svg'
import Facebook from '@/assets/brand-facebook.svg'
import Instagram from '@/assets/brand-instagram.svg'
import Trip from '@/assets/brand-tripadvisor.svg'
import Button from '@/components/ui/Button'

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
      <Section className="flex w-full p-10">
        <article className="flex flex-col items-center justify-center gap-10">
          <h1 className="mb-10 text-3xl font-semibold text-[#FFab00]">
            Lavora con noi
          </h1>
          <div className="flex flex-col justify-center gap-4 text-xl font-semibold text-white pad:text-center">
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
              FORNERIA! Per alcune posizioni ricerchiamo esperienza, un buon
              curriculum e un passato luccicante.
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
      <footer
        id="contatti"
        className="mt-20 flex w-full flex-col items-center justify-center gap-6 border-t-4 border-gray-200 px-4 pb-8 pt-10 text-white"
      >
        <h1 className="text-center text-xl font-bold tracking-tighter phone:text-xl md:text-3xl">
          Contatti
        </h1>
        <div className="align-center grid grid-cols-3 place-items-start gap-6 pad:grid-cols-1 pad:gap-10">
          <div className="flex flex-col items-center gap-2 place-self-stretch text-wrap font-semibold phone:text-sm md:text-base lg:text-lg">
            <Image src={Pin} alt="Indirizzo" width={50} height={50} />
            <p>Indirizzo</p>
            <p className="text-center">
              Viale Regione Siciliana 100
              <br /> San Martino delle Scale - Monreale 90144 Palermo (PA)
            </p>
          </div>
          <div className="flex w-full flex-col items-center justify-center gap-2 text-wrap font-semibold phone:text-sm md:text-base pad:place-self-center lg:text-lg">
            <Image src={Whatsapp} alt="Indirizzo" width={50} height={50} />
            <p>Recapiti</p>
            <p className="text-center">Tel.+39 091 418286 / +39 3338504841</p>
            <p>eventiforneriamessina@gmail.com</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-2 place-self-center self-center text-wrap font-semibold phone:text-sm md:text-base lg:place-self-center lg:text-lg">
            <Image src={Clock} alt="Indirizzo" width={50} height={50} />
            <p>Orari</p>
            <p>Lunedì 7.30 - 15.00</p>
            <p> Martedì Chiusi </p>
            <p>Mercoledì 07.30 - 14.00 / 16:30 - 22.30</p>
            <p>Giovedì 07.30 - 14.00 / 16:30 - 22.30 </p>
            <p>Venerdì 07.30 - 14.00 / 16:30 - 22.30 </p>
            <p>Sabato 07.30 - 23.00 </p>
            <p>Domenica 08.00 - 17.00</p>
          </div>
        </div>
        <div className="mt-24 flex w-full justify-center gap-10 border-t-4 border-gray-200 pt-10">
          <Image
            src={Facebook}
            alt="facebook"
            width={50}
            height={50}
            className="cursor-pointer rounded-md transition duration-200 hover:-translate-y-1"
          />
          <Image
            src={Instagram}
            alt="Instagram}"
            width={50}
            height={50}
            className="cursor-pointer rounded-md transition duration-200 hover:-translate-y-1"
          />
          <Image
            src={Trip}
            alt="Tripadvisor"
            width={50}
            height={50}
            className="cursor-pointer rounded-md transition duration-200 hover:-translate-y-1"
          />
        </div>

        <div className="mt-5 flex flex-col items-center justify-center gap-6 text-lg font-semibold text-[#fff]">
          <p className="cursor-pointer transition duration-100 hover:cursor-pointer hover:text-[#FFAB00]">
            <Link href={'/privacy'}>Privacy e cookie policy</Link>
          </p>
          <p className="cursor-pointer transition duration-100 hover:cursor-pointer hover:text-[#FFAB00]">
            P.iva IT05788810827
          </p>
        </div>
        <div className="mt-10 flex w-auto">
          <Button className="flex gap-3 border-2 border-white transition duration-1000 hover:bg-white hover:text-[#FFAB00]">
            <span>
              <Link href={'https://www.forneriashop.it'} target="_blank">
                Visita il nostro Shop Online
              </Link>
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="icon icon-tabler icons-tabler-outline icon-tabler-shopping-cart stroke-current stroke-2 transition duration-1000"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
              <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
              <path d="M17 17h-11v-14h-2" />
              <path d="M6 5l14 1l-1 7h-13" />
            </svg>
          </Button>
        </div>
      </footer>
    </>
  )
}
