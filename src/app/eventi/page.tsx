'use client'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/Select'
import Image from 'next/image'
import React, { useState } from 'react'
import useEventiQuery from '@/hooks/use-eventi-query'
import { useRouter } from 'next/navigation'

export default function Eventi() {
  const [location, setLocation] = useState('')
  const { data: eventi, isLoading, isError } = useEventiQuery()

  const router = useRouter()

  const handleClick = (slug: string) => {
    router.push(`/eventi/${slug.toLowerCase().split(' ').join('-')}`)
  }

  return (
    <section className="mt-20 flex flex-col gap-12 p-24 pad:p-14">
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
        {location === ''
          ? eventi?.map((event) => (
              <li
                key={event.id}
                className="h-min-42 flex flex-col items-center justify-center gap-4 rounded-lg bg-white p-4"
              >
                <h2
                  className="text-center text-xl font-semibold hover:cursor-pointer"
                  onClick={() => handleClick(event.titolo)}
                >
                  {event.titolo}
                </h2>
                {event.immagine ? (
                  <Image
                    src={event.immagine}
                    alt={event.titolo}
                    width={430}
                    height={530}
                  />
                ) : (
                  <p>Immagine non disponibile</p>
                )}
                <p className="line-clamp-3 w-full p-2">{event.descrizione}</p>
              </li>
            ))
          : eventi
              ?.filter(
                (evento) =>
                  evento.ristorante.trim().toLowerCase() ===
                  location.trim().toLowerCase(),
              )
              .map((event) => (
                <li
                  key={event.id}
                  className="h-min-42 flex h-fit flex-col items-center justify-center gap-4 rounded-lg bg-white p-4"
                >
                  <h2
                    className="text-center text-xl font-semibold hover:cursor-pointer"
                    onClick={() => handleClick(event.titolo)}
                  >
                    {event.titolo}
                  </h2>
                  {event.immagine ? (
                    <Image
                      src={event.immagine}
                      alt={event.titolo}
                      width={430}
                      height={530}
                    />
                  ) : (
                    <p>Immagine non disponibile</p>
                  )}
                  <p className="line-clamp-3 w-full p-2">{event.descrizione}</p>
                </li>
              ))}
      </ul>
    </section>
  )
}
