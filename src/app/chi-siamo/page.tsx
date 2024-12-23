'use client'

import Section from '@/components/ui/Section'
import Image from 'next/image'
import Logo from '../../assets/logo_forneria.png'
import Facebook from '@/assets/brand-facebook.svg'
import Instagram from '@/assets/brand-instagram.svg'
import Trip from '@/assets/brand-tripadvisor.svg'
import Link from 'next/link'
import Button from '@/components/ui/Button'

export default function ChiSiamo() {
  return (
    <>
      <Section className="mt-36 flex h-screen w-full flex-col items-center justify-center pad:mt-20">
        <Image
          src={Logo}
          alt="Viaggio nel Gusto"
          width={400}
          height={400}
          className="pad:h-[300px] pad:w-[300px]"
        />
        <h1 className="text-4xl font-semibold text-white pad:text-2xl">
          Viaggio nel Gusto
        </h1>
        <div className="mt-20 flex flex-col gap-6 text-center">
          <h2 className="text-5xl font-bold text-[#FFAB00] pad:text-3xl">
            La Nostra Storia
          </h2>
          <h2 className="text-5xl font-bold text-[#FFAB00] pad:text-3xl">
            Forneria Messina
          </h2>
        </div>
      </Section>
      <Section className="flex flex-col gap-6 bg-white shadow-[inset_0_4px_4px_rgba(0,0,0,0.6)]">
        <div className="flex flex-col gap-6 p-14 text-3xl font-semibold pad:text-center pad:text-xl">
          <p>
            Quella di Forneria Messina non è soltanto la storia di un’attività
            commerciale, ma è anche e soprattutto la storia di una famiglia
            genuina proprio come i suoi prodotti.
          </p>
          <p>
            La storia della Forneria Messina, inizia nel 1980 quando Pietro
            Messina decise di riaccendere il vecchio forno a legna dove spesso
            aiutava la madre a fare il pane.
          </p>
          <p>
            In quell’anno Gianmichele che oggi insieme alla sorella Lorena con
            passione gestisce la Forneria, era appena un bambino, ma fu subito
            coinvolto dall’iniziativa del padre Pietro:“Ricordo che quei mesi
            estivi furono come una grande festa, perché il profumo del pane
            appena sfornato attirava tantissima gente che veniva a San Martino
            per le vacanze estive ed io con la mia bicicletta Totòcannatella
            cominciai a fare le consegne presso le varie villette della
            borgata”, racconta Gianmichele oggi.
          </p>
          <p>
            Durante quell’estate Pietro capì che cominciare a fare il pane
            poteva essere il modo per lavorare rimanendo sempre a contatto con
            la famiglia, fu così che decise di realizzare un forno più grande.
          </p>
          <p>
            All’inizio l’attività si concentrava solo sulla produzione di pane
            per il vicinato, poi con l’aiuto della Signora Elisabetta, la moglie
            di Pietro, l’attività si estese alla produzione di pizze, sfincioni
            e biscotti caserecci.
          </p>
          <p>
            Nel frattempo Gianmichele e le sorelle, Fabiana e Lorena,
            collaboravano con passione all’attività del panificio, con
            l’obiettivo di ampliare l’attività del panificio estendendola alla
            vendita di prodotti caseari quali ricotta, formaggi e anche ai
            salumi provenienti dai produttori artigianali.
          </p>
          <p>
            Gli anni passarono e Pietro ed Elisabetta ebbero l’importante ruolo
            di trasmettere ai figli tutto l’entusiasmo e l’amore per la famiglia
            e per il lavoro. Il 2000 segnò una delle tappa importanti per
            Gianmichele e anche per la Forneria: fu l’anno in cui decise di
            sposarsi, anzi la fidanzata Elena decise, come precisa lo stesso
            Gianmichele.
          </p>
          <p>
            I due giovani coniugi trascorsero 40 giorni in California e ne
            tornarono colmi di idee e progetti. Il primo passo fu quello di
            trasformare in enoteca il piccolo locale adiacente al panificio
            prendendo spunto dal modo in cui i Californiani gestivano il Mondo
            del vino. Gli anni passarono e nel frattempo Gianmichele si impegnò
            nella gestione dell’enoteca, mentre la moglie Elena insieme alle
            sorelle e al cognato Benny si occuparono della produzione
            gastronomica della Forneria: salumi, formaggi, pane, pizza,pasta
            fresca, focacce, sfincione e infine l’ormai famoso “Pane Cunzatu”.
          </p>
          <p>
            Ed eccoci giunti al 2009, anno che segnò un’altra tappa importante
            perché fu l’anno in cui il Signor Pietro, comprendendo di avere
            portato a compimento tutti i doveri famigliari e di potersi per
            questo godere finalmente la sua meritata pensione, decise di
            lasciare il testimone ai figli che ampliarono l’attività realizzando
            una cucina e delle sale in cui potere accogliere clienti e amici.
          </p>
          <p>
            Oggi l’attività è cresciuta e insieme a essa anche la numerosità
            dello staff e la passione per questa attività che odora e parla di
            casa.
          </p>
          <p>
            I nuovi componenti dello staff vengono subito accolti in famiglia,
            la loro attenzione vi coccolerà dall’inizio alla fine della vostra
            permanenza alla Forneria Messina così da rendere la vostra
            esperienza estremamente piacevole e da lasciarvi un buon ricordo che
            vi darà di certo un motivo in più per tornare presto a trovarci.
          </p>
          <p>
            I componenti dello staff sono quasi tutti giovani con idee nuove,
            sono loro che vi delizieranno con piatti fantasiosi, colorati,
            leggeri, ben preparati, ma pur sempre realizzati seguendo gli
            insegnamenti e le tradizioni della nostra famiglia. Oggi l’azienda è
            cresciuta, abbiamo dei collaboratori, ma si lavora ancora con la
            stessa filosofia e con la stessa passione con cui papà Pietro e
            mamma Elisabetta hanno creato l’azienda oltre 40 anni or sono,
            sempre con Dolcezza Gusto e Qualità!
          </p>
        </div>
      </Section>
      <footer
        id="contatti"
        className="flex flex-col items-center justify-center gap-4 px-4 py-8 sm:px-6"
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
            P.iva IT05788810827 - 07197120822
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
