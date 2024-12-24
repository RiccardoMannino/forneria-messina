'use client'

import useEventoQuery from '@/hooks/use-evento-query'

import { useParams } from 'next/navigation'
import Image from 'next/image'
import React from 'react'
import Section from '@/components/ui/Section'
import Pin from '@/assets/map-pin.svg'
import Whatsapp from '@/assets/brand-whatsapp.svg'
import Clock from '@/assets/clock.svg'
import Facebook from '@/assets/brand-facebook.svg'
import Instagram from '@/assets/brand-instagram.svg'
import Trip from '@/assets/brand-tripadvisor.svg'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import Footer from '@/components/ui/Footer'

export default function Evento() {
  const { slug } = useParams()

  const { data: eventi, isLoading, isError } = useEventoQuery(slug as string)
  console.log(eventi?.ristorante)
  const formatDescription = (description: string) => {
    const paragraphs = (
      <div>
        {description?.split('\n').map((para, index) => (
          <p className="mb-4 text-justify pad:mb-8 pad:text-center" key={index}>
            {para}
          </p>
        ))}
      </div>
    )
    return paragraphs
  }

  return (
    <>
      <Section className="mt-20 flex flex-col gap-12 p-24 pad:p-14">
        <div className="flex flex-col text-xl font-bold text-white">
          <h1 className="mb-8 text-center text-3xl">{eventi?.titolo}</h1>
          {eventi?.immagine ? (
            <Image
              src={eventi?.immagine}
              alt={eventi?.titolo}
              width={430}
              height={530}
              className="my-10 self-center"
            />
          ) : (
            <p>Immagine non disponibile</p>
          )}
          <span className="mt-10">
            {formatDescription(eventi?.descrizione)}
          </span>
        </div>
      </Section>
      <Footer eventi={eventi} id="contatti" />
    </>
  )
}
