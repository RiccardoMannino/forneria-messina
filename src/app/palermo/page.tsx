'use client'

import Image from 'next/image'
import Footer from '@/components/ui/Footer'
import Section from '@/components/ui/Section'
import Logo from '../../assets/logo_forneria.png'

export default function PalermoPage() {
  return (
    <>
      <div className="mt-36 flex h-[600px] w-full items-center justify-center bg-[url(../assets/background_palermo.png)] bg-cover">
        <Image src="/LOGO_PALERMO.png" alt="Palermo" width={400} height={400} />
      </div>
      <Section className="my-20 flex flex-col gap-6 text-white phone:mx-5 sm:mx-10 md:mx-20">
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
      </Section>
      <Section className="mx-20 mb-10 flex gap-6 text-wrap text-white pad:flex-col pad:items-center pad:justify-center pad:text-center">
        <Image
          src={Logo}
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
      </Section>

      <Footer id="contatti" location="Palermo" />
    </>
  )
}
