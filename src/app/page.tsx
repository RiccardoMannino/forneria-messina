'use client'

import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import VideoSection from '@/components/ui/VideoSection'
import Section from '@/components/ui/Section'
import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards'
import SanMartino from '../assets/logo_sanmartino.png'
import Palermo from '../assets/logo_palermo.png'
import Whatsapp from '../assets/brand-whatsapp.svg'
import Trip from '../assets/brand-tripadvisor.svg'
import Facebook from '../assets/brand-facebook.svg'
import Instagram from '../assets/brand-instagram.svg'

const testimonials = [
  {
    quote:
      "Eccellenza nei sapori e negli ingredienti di qualità Ottima pizza sia come impasto che come qualità degli ingredienti ben dosati e sposati tre di loro. Nonostante la salsa e la ricotta l'impasto non risultava bagnato ma ben croccante. Focaccine con la porchetta davvero sublimi. Cortesia e celerità nonostante era sabato sera, Consigliatissima",
    name: 'Daniela B',
  },
  {
    quote:
      'Un luogo dove si incontra la magia delle montagne siciliane e l’antica  arte culinaria della panificazione. In questo ristorante dove si respira l’atmosfera delle più buone e gustose ricette siciliane unite a vini di pregio e a birre artigianali non seconde a nessuno a livello internazionale, è possibile trascorrere una lieta serata da soli o in compagnia di amici e/o parenti. Insomma un vero mix di gusto, relax e sicilianità. Consigliatissimo … a mezz’ora da Palermo.',
    name: 'Angelo Casto - Google',
  },
  {
    quote:
      'Si mangia veramente bene!!!! Ottima accoglienza e pietanze super, consigliate le fettuccine fresche al sugo di cinghiale ed anche se siamo in montagna i paccheri con gambero fresco di Mazara e pesto di pistacchi una meraviglia oltre che per la vista anche per il palato. Complimenti al titolare Gianmichele ed al suo professionale staff.',
    name: 'Samuele Manno - TripAdvisor',
  },
  {
    quote:
      'COME SENTIRSI A CASA È sempre così . Sei titubante nel raggiungere il ristorante , vuoi perché sei stanco o perché preferisci mangiare qualcosa al volo. Ma dal momento che varchi quella porta è come entrare in un mondo magico. L’accoglienza del personale , il calore dell’ambiente , la gentilezza dei padroni di casa , riescono a trasformare la fatica che hai accumulato in una rilassante e confortevole serata. L’estasi arriva nel momento che mordi la prima focaccina con porchetta , il resto lascio a voi il piacere di provare. Continuate così è sempre al top!',
    name: 'TripAdvisor',
  },
  {
    quote:
      'Andate in questo ristorante, ne vale la pena! Cibo ottimo (la qualità si sente TUTTA). Ci sono poi due simpatici ragazzi che vi serviranno al tavolo che sono davvero bravi, sanno esporre i piatti in maniera esaustiva tanto da aumentare la vostra curiosità (Pietro e Mario, ricordatevi i loro nomi). Saranno la vostra rovina perché vi faranno provare tutto il meglio che questo posto ha da offrire. Metto questo locale tra i miei preferiti.',
    name: 'Davide - Google',
  },
]

export default function IndexPage() {
  const router = useRouter()

  return (
    <>
      <VideoSection src="/video.mp4" />
      <Section
        id="ristoranti"
        className="my-20 flex w-full flex-col items-center justify-center gap-10"
        transition="all ease 0.9s"
        transform="none"
        translate="translateX(-200px)"
      >
        <div className="relative top-[130px] flex flex-col gap-10">
          <h1 className="mx-auto my-8 pt-12 text-center text-4xl font-bold tracking-tighter text-white">
            I Locali
          </h1>
          <h2 className="mb-16 text-center text-xl font-semibold tracking-tighter text-white pad:mx-5">
            Per orari, info e prenotazioni, clicca sulla foto del locale di tuo
            interesse
          </h2>

          <div className="mx-auto flex h-auto gap-20 phone:flex-col sm:flex-col md:flex-col lg:flex-row">
            <Card
              ristorante="San Martino Delle Scale - Monreale"
              className="bg-[url(../assets/background_sanmartino.png)]"
              src={SanMartino}
              onClick={() => router.push('/san-martino')}
            >
              <div className="my-6 phone:text-sm">
                <p>Via Regione Siciliana , 100</p>
                <p>90046 San Martino Delle Scale - Monreale (PA)</p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="flex self-center">
                  Tel. 091418286
                  <span className="ml-2">
                    <Image
                      src={Whatsapp}
                      alt="whatsapp"
                      width={20}
                      height={20}
                      className="rounded-md"
                    />
                  </span>
                </p>
                <p>eventiforneriamessina@gmail.com</p>
              </div>
            </Card>
            <Card
              ristorante="Palermo"
              className="bg-[url(../assets/background_palermo.png)]"
              src={Palermo}
              onClick={() => router.push('/palermo')}
            >
              <div className="my-6 font-semibold">
                <p>Viale Delle Alpi , 4</p>
                <p>90144 Palermo (PA)</p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="flex self-center">
                  Tel. 0917376696
                  <span className="ml-2">
                    <Image
                      src={Whatsapp}
                      alt="whatsapp"
                      width={20}
                      height={20}
                      className="rounded-md"
                    />
                  </span>
                </p>
                <p>messinagianmichele@gmail.com</p>
              </div>
            </Card>
          </div>
        </div>
      </Section>

      <Section
        transition={'all ease 0.9s'}
        transform={'none'}
        translate={'translateX(200px)'}
        className="mt-20 w-full"
      >
        <div className="mt-20 flex flex-col items-center justify-center gap-10">
          <h1 className="text-4xl font-semibold tracking-tighter text-white">
            Prenota il tuo tavolo
          </h1>
          <div className="mx-3 flex gap-8 pad:flex-col">
            <Button className="bg-[url(../assets/background_sanmartino.png)] bg-cover">
              <Link
                href="https://forneriamessina.plateform.app/reserve"
                target="_blank"
              >
                Monreale - San Martino Delle Scale
              </Link>
            </Button>
            <Button className="bg-[url(../assets/background_palermo.png)] bg-cover">
              <Link
                href="https://forneriamessinapalermo.plateform.app/welcome"
                target="_blank"
              >
                Palermo - Viale Delle Alpi
              </Link>
            </Button>
          </div>
        </div>
      </Section>

      <Section id="testimonials" className="mb-20 overflow-hidden">
        <div className="relative top-[130px] flex w-full flex-col items-center justify-center">
          <h1 className="mb-4 text-4xl font-semibold tracking-tighter text-white">
            Dicono di noi
          </h1>
          <div className="relative flex h-[30rem] flex-col items-center justify-center overflow-hidden rounded-md bg-[#282828] antialiased pad:h-[40rem]">
            <InfiniteMovingCards
              items={testimonials}
              direction="right"
              speed="slow"
            />
          </div>
          <h1 className="mt-10 flex cursor-pointer items-center p-2.5 pb-36 text-xl font-semibold tracking-tighter text-white transition duration-150 hover:scale-110 md:text-4xl">
            <Link
              href={
                'https://www.tripadvisor.it/Restaurant_Review-g2295464-d3626551-Reviews-Forneria_Messina-San_Martino_delle_Scale_Province_of_Palermo_Sicily.html'
              }
              target="_blank"
            >
              Leggi tutte le recensioni qui
            </Link>
          </h1>
        </div>
      </Section>

      <footer
        id="contatti"
        className="flex flex-col items-center justify-center gap-4 border-t-4 border-gray-200 px-4 py-8 dark:border-gray-700 dark:bg-gray-800 sm:px-6"
      >
        <div className="flex gap-10">
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
        <div className="mt-24 w-auto">
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
              className="icon icon-tabler icons-tabler-outline icon-tabler-shopping-cart stroke-current transition duration-1000"
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
