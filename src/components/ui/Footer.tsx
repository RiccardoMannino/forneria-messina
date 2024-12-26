import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import Pin from '@/assets/map-pin.svg'
import Whatsapp from '@/assets/brand-whatsapp.svg'
import Clock from '@/assets/clock.svg'
import Facebook from '@/assets/brand-facebook.svg'
import Instagram from '@/assets/brand-instagram.svg'
import Trip from '@/assets/brand-tripadvisor.svg'
import Button from '@/components/ui/Button'

type Eventi = {
  ristorante: string
}

export default function Footer({
  eventi,
  id,
  location,
}: {
  eventi?: Eventi | undefined | null
  id: string
  location?: string
}) {
  return (
    <footer
      id={id}
      className="mt-20 flex w-full flex-col items-center justify-center gap-6 px-4 py-8 text-white"
    >
      <h1 className="mb-10 text-center text-xl font-bold tracking-tighter phone:text-xl md:text-3xl">
        Contatti
      </h1>

      <div
        className={`align-center grid grid-cols-3 ${location === 'Palermo' || eventi?.ristorante === 'Palermo' ? 'w-full' : ''} place-items-start gap-6 pad:grid-cols-1 pad:gap-10`}
      >
        <div className="flex flex-col items-center gap-2 place-self-stretch text-wrap font-semibold phone:text-sm md:text-base lg:text-lg">
          <Image src={Pin} alt="Indirizzo" width={50} height={50} />
          <p>Indirizzo</p>
          {location === 'San Martino' ||
          eventi?.ristorante === 'San Martino' ? (
            <p className="text-center">
              Viale Regione Siciliana 100
              <br /> San Martino delle Scale - Monreale 90144 Palermo (PA)
            </p>
          ) : (
            <p>
              Viale Delle Alpi 4 <br />
              90144 Palermo (PA)
            </p>
          )}
        </div>
        <div className="flex w-full flex-col items-center justify-center gap-2 text-wrap font-semibold phone:text-sm md:text-base pad:place-self-center lg:text-lg">
          <Image src={Whatsapp} alt="Indirizzo" width={50} height={50} />
          {location === 'San Martino' ||
          eventi?.ristorante === 'San Martino' ? (
            <>
              <p>Recapiti</p>
              <p className="text-center">Tel.+39 091 418286 / +39 3338504841</p>
              <p>eventiforneriamessina@gmail.com</p>
            </>
          ) : (
            <>
              <p className="text-center">Tel. 0917376696</p>
              <p>messinagianmichele@gmail.com</p>
            </>
          )}
        </div>
        <div className="flex flex-col items-center justify-center gap-2 place-self-center self-center text-wrap font-semibold phone:text-sm md:text-base lg:place-self-center lg:text-lg">
          <Image src={Clock} alt="Indirizzo" width={50} height={50} />
          {location === 'San Martino' ||
          eventi?.ristorante === 'San Martino' ? (
            <>
              <p>Orari</p>
              <p>Lunedì 7.30 - 15.00</p>
              <p> Martedì Chiusi </p>
              <p>Mercoledì 07.30 - 14.00 / 16:30 - 22.30</p>
              <p>Giovedì 07.30 - 14.00 / 16:30 - 22.30 </p>
              <p>Venerdì 07.30 - 14.00 / 16:30 - 22.30 </p>
              <p>Sabato 07.30 - 23.00 </p>
              <p>Domenica 08.00 - 17.00</p>
            </>
          ) : (
            <>
              <p>Orari</p>
              <p>Lunedì-Sabato</p>
              <p>18.00-24.00</p>
              <p>Domenica</p>
              <p>Chiusi</p>
            </>
          )}
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
          {location === 'Palermo' || eventi?.ristorante === 'Palermo'
            ? '   P.iva 07197120822'
            : 'P.iva IT05788810827'}
        </p>
      </div>
      <div className="mt-10 flex w-auto gap-10">
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
        <Button className="flex gap-3 border-2 border-white transition duration-1000 hover:bg-white hover:text-[#FFAB00]">
          <span>
            <Link
              href={
                location === 'Palermo' || eventi?.ristorante === 'Palermo'
                  ? 'https://forneriamessinapalermo.plateform.app/welcome'
                  : 'https://forneriamessina.plateform.app/reserve'
              }
              target="_blank"
            >
              Prenota il tuo Tavolo
            </Link>
          </span>
        </Button>
      </div>
    </footer>
  )
}
