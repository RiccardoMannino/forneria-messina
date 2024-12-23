'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import useEventiQuery from '@/hooks/use-eventi-query'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/Select'
import EventList from '@/components/ui/EventListItem'
import Section from '@/components/ui/Section'
import Image from 'next/image'
import Pin from '@/assets/map-pin.svg'
import Whatsapp from '@/assets/brand-whatsapp.svg'
import Clock from '@/assets/clock.svg'
import Facebook from '@/assets/brand-facebook.svg'
import Instagram from '@/assets/brand-instagram.svg'
import Trip from '@/assets/brand-tripadvisor.svg'
import Link from 'next/link'
import Button from '@/components/ui/Button'

export default function Eventi() {
  const [location, setLocation] = useState('Palermo')
  const { data: eventi, isLoading, isError } = useEventiQuery()

  const router = useRouter()

  const handleClick = (slug: string) => {
    router.push(`/eventi/${slug.toLowerCase().split(' ').join('-')}`)
  }

  console.log(location)

  return (
    <>
      <Section className="mt-20 flex flex-col gap-12 p-24 pad:p-14">
        <div className="flex justify-between">
          <h1 className="text-4xl font-bold tracking-tighter text-[#FFAB00]">
            Eventi
          </h1>
          <Select value={location} onValueChange={setLocation}>
            <SelectTrigger className="w-[180px] bg-white font-semibold text-[#FFAB00]">
              <SelectValue placeholder="Ristoranti" />
            </SelectTrigger>
            <SelectContent className="border-transparent">
              <SelectGroup>
                <SelectItem
                  className="bg-white font-semibold text-[#FFAB00] hover:bg-[#282828]"
                  value="Palermo"
                >
                  Palermo
                </SelectItem>
                <SelectItem
                  className="bg-white font-semibold text-[#FFAB00] hover:bg-[#282828]"
                  value="San Martino"
                >
                  San Martino
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <ul className="grid grid-cols-1 items-stretch gap-12 lg:grid-cols-2">
          <EventList
            eventi={eventi}
            handleClick={handleClick}
            location={location}
          />
        </ul>
      </Section>
      <footer
        id="contatti"
        className="mt-20 flex w-full flex-col items-center justify-center gap-6 px-4 py-8 text-white"
      >
        <h1 className="text-center text-xl font-bold tracking-tighter phone:text-xl md:text-3xl">
          Contatti
        </h1>

        <div className="align-center grid grid-cols-3 place-items-start gap-6 pad:grid-cols-1 pad:gap-10">
          <div className="flex flex-col items-center gap-2 place-self-stretch text-wrap font-semibold phone:text-sm md:text-base lg:text-lg">
            <Image src={Pin} alt="Indirizzo" width={50} height={50} />
            <p>Indirizzo</p>
            {location === 'San Martino' ? (
              <p className="text-center">
                Viale Regione Siciliana 100
                <br /> San Martino delle Scale - Monreale 90144 Palermo (PA)
              </p>
            ) : location === 'Palermo' ? (
              <p>
                Viale Delle Alpi 4 <br />
                90144 Palermo (PA)
              </p>
            ) : (
              ''
            )}
          </div>
          {location === 'San Martino' ? (
            <div className="flex w-full flex-col items-center justify-center gap-2 text-wrap font-semibold phone:text-sm md:text-base pad:place-self-center lg:text-lg">
              <Image src={Whatsapp} alt="Indirizzo" width={50} height={50} />
              <p>Recapiti</p>

              <p className="text-center">Tel.+39 091 418286 / +39 3338504841</p>
              <p>eventiforneriamessina@gmail.com</p>
            </div>
          ) : location === 'Palermo' ? (
            <div className="flex w-full flex-col items-center justify-center gap-2 text-wrap font-semibold phone:text-sm md:text-base pad:place-self-center lg:text-lg">
              <Image src={Whatsapp} alt="Indirizzo" width={50} height={50} />
              <p>Recapiti</p>
              <p className="text-center">Tel. 0917376696</p>
              <p>messinagianmichele@gmail.com</p>
            </div>
          ) : (
            ''
          )}
          {(location === 'San Martino' && (
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
          )) ||
            (location === 'Palermo' && (
              <div className="flex flex-col items-center justify-center gap-2 place-self-center self-center text-wrap font-semibold phone:text-sm md:text-base lg:place-self-center lg:text-lg">
                <Image src={Clock} alt="Indirizzo" width={50} height={50} />
                <p>Orari</p>
                <p>Lunedì-Sabato</p>
                <p>18.00-24.00</p>
                <p>Domenica</p>
                <p>Chiusi</p>
              </div>
            ))}
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
            {location === 'Palermo'
              ? '   P.iva 07197120822'
              : 'P.iva IT05788810827'}
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
