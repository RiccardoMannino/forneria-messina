import Image from 'next/image'
import Pin from '../../assets/map-pin.svg'
import Clock from '../../assets/clock.svg'
import Whatsapp from '../../assets/brand-whatsapp.svg'
import Link from 'next/link'
import Facebook from '../../assets/brand-facebook.svg'
import Instagram from '../../assets/brand-instagram.svg'
import Trip from '../../assets/brand-tripadvisor.svg'
import Button from '@/components/ui/Button'

export default function PalermoPage() {
  return (
    <>
      <div className="mt-36 flex h-[600px] w-full items-center justify-center bg-[url(../assets/background_palermo.png)] bg-cover">
        <Image src="/LOGO_PALERMO.png" alt="Palermo" width={400} height={400} />
      </div>
      <section className="my-20 flex flex-col gap-6 text-white phone:mx-5 sm:mx-10 md:mx-20">
        <h1 className="mx-auto my-8 text-wrap pt-12 text-xl font-bold tracking-tighter phone:text-xl md:text-3xl">
          LA PIZZA E LA BISTECCA CHE NON TI ASPETTI
        </h1>
        <p className="font-semibold phone:text-sm md:text-base lg:text-lg">
          La Forneria Messina nel 2024 raddoppia con la nuova apertura a Palermo
          in via delle Alpi n.4, continuando a mantenere lo stesso marchio, che
          ormai è conosciuto in tutta la provincia e oltre con un numero sempre
          crescente di ospiti e amici appassionati.
        </p>
        <p className="font-semibold phone:text-sm md:text-base lg:text-lg">
          La pizza e la bistecca non solo sono sempre stati i piatti più amati e
          richiesti nel nostro locale ma rappresentano anche due grandi
          eccellenze gastronomiche del nostro Paese.
        </p>
        <p className="font-semibold phone:text-sm md:text-base lg:text-lg">
          Nel corso degli anni la Forneria Messina si è distinta per la proposta
          di prodotti di prim’ordine, una selezione di materie prime di alta
          qualità; basta poco per creare pietanze e pizze eccellenti anche
          perché la famiglia Messina ha fatto della formazione la base per la
          sua proposta.
        </p>
        <p className="font-semibold phone:text-sm md:text-base lg:text-lg">
          Tutto lo Staff della Forneria Messina, con passione e coraggio svolge
          una continua ricerca delle migliori materie prime, spesso poco
          conosciute ai più, al fine di soddisfare i nuovi trend di
          comportamento dei nostri ospiti che ricercano prodotti eccellenti
          proposti in forme innovative.
        </p>
        <p className="font-semibold phone:text-sm md:text-base lg:text-lg">
          Una cucina essenziale, senza fronzoli.
        </p>
        <p className="font-semibold phone:text-sm md:text-base lg:text-lg">
          Quindi succulente bistecche alla brace, stinchi di maiale alla birra,
          porchetta di qualità, baccalà Giraldo, la migliore qualità in
          assoluto, pizze con impasti particolari e topping di eccellenza.
        </p>
        <p className="font-semibold phone:text-sm md:text-base lg:text-lg">
          Poi tante birre artigianali alla spina, quattro a marchio Forneria
          Messina KRAFT BEER, nate dalla passione verso le birre artigianali e
          dell’amicizia con il birrificio RentOn e il birrificio Bruton, quattro
          birre prodotte con l’idea di ritrovare in bicchiere ciò che avremmo
          voluto bere noi per primi.
        </p>
        <p className="font-semibold phone:text-sm md:text-base lg:text-lg">
          Abbiamo selezionato con cura le materie prime, per mettere a punto
          ricette del tutto originali e formulare quattro proposte diverse per
          chi vuole bere Birre artigianali esclusive.
        </p>
        <p className="font-semibold phone:text-sm md:text-base lg:text-lg">
          Abbiamo deciso di puntare su questi due simboli di italianità nel
          mondo, offrendo un menu più breve per garantire ai nostri ospiti solo
          piatti realizzati con i migliori ingredienti e la massima cura: da noi
          la qualità delle materie prime è sempre garantita!
        </p>
        <p className="font-semibold phone:text-sm md:text-base lg:text-lg">
          Crediamo di essere il primo brand in Italia che ha deciso di
          specializzarsi unicamente in due tipologie di portate, la pizza e la
          bistecca. La Forneria Messina, nella nuova sede di Palermo con i suoi
          250 mq e 110 posti a sedere, è un locale moderno, composto da aree
          relax con divani in cui poter gustare le nostre birre ed ascoltare
          buona musica.
        </p>
        <p className="font-semibold phone:text-sm md:text-base lg:text-lg">
          Infine disponiamo di uno spazio esterno dedicato ai cocktail, sposando
          la filosofia del food pairing abbinando elementi di contrasto tra cibo
          e bevande.
        </p>
      </section>
      <section className="mx-20 mb-10 flex gap-6 text-wrap text-white pad:flex-col pad:items-center pad:justify-center pad:text-center">
        <Image
          src="/logo_forneria.png"
          alt="Forneria Messina"
          width={204}
          height={210}
          className="xmd:w-30 pad:h-38 self-center pad:w-40 xmd:h-40"
        />
        <div className="flex flex-col gap-0.5 text-wrap font-semibold phone:text-sm md:text-base lg:text-lg">
          <h1 className="mt-6 phone:text-xl">
            PERCHÈ SCEGLIERE LA FORNERIA MESSINA
          </h1>
          <p>
            L’attenzione e la cura dell&apos;ospite sono, per la Forneria
            Messina, una vera priorità.
          </p>
          <p>
            In un ambiente ricercato, arricchito da numerosi dettagli di arredo,
            puoi vivere momenti convivali con amici e parenti, che resteranno
            nella tua memoria per sempre.
          </p>
          <p>
            Il nostro staff, serio e professionale, sa essere al tempo stesso,
            allegro e gioioso.
          </p>
          <p>
            Ci piace creare un’atmosfera divertente nella nostra pizzeria e
            comunicare emozioni autentiche, attraverso proposte ricercate e un
            servizio attento e curato durante tutta la permanenza.
          </p>
          <p>Insomma una proposta unica per un esperienza indimenticabile.</p>
        </div>
      </section>

      <footer
        id="contatti"
        className="mt-20 flex w-full flex-col items-center justify-center gap-6 px-0 py-8 text-white"
      >
        <h1 className="text-center text-xl font-bold tracking-tighter phone:text-xl md:text-3xl">
          Contatti
        </h1>
        <div className="align-center mb-10 grid grid-cols-3 place-items-start gap-20 pad:grid-cols-1 pad:gap-10">
          <div className="flex flex-col items-center gap-2 place-self-stretch text-wrap font-semibold phone:text-sm md:text-base lg:text-lg">
            <Image src={Pin} alt="Indirizzo" width={50} height={50} />
            <p>Indirizzo</p>
            <p>
              Viale Delle Alpi 4 <br />
              90144 Palermo (PA)
            </p>
          </div>
          <div className="flex w-full flex-col items-center justify-center gap-2 text-wrap font-semibold phone:text-sm md:text-base pad:place-self-center lg:text-lg">
            <Image src={Whatsapp} alt="Indirizzo" width={50} height={50} />
            <p>Recapiti</p>
            <p className="text-center">Tel. 0917376696</p>
            <p>messinagianmichele@gmail.com</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-2 place-self-center self-center text-wrap font-semibold phone:text-sm md:text-base lg:place-self-center lg:text-lg">
            <Image src={Clock} alt="Indirizzo" width={50} height={50} />
            <p>Orari</p>
            <p>Lunedì-Sabato</p>
            <p>18.00-24.00</p>
            <p>Domenica</p>
            <p>Chiusi</p>
          </div>
        </div>

        <div className="flex w-full justify-center gap-10 border-t-4 border-gray-200 pt-10">
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
            P.iva 07197120822
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
              stroke-width="2"
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
