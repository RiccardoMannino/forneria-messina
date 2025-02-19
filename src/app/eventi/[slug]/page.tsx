'use client'

import useEventoQuery from '@/hooks/use-evento-query'

import { useParams } from 'next/navigation'
import Image from 'next/image'
import React from 'react'
import Section from '@/components/ui/Section'
import Link from 'next/link'
import Footer from '@/components/ui/Footer'

export default function Evento() {
  const { slug } = useParams()

  const { data: evento, isLoading, isError } = useEventoQuery(slug as string)

  const formatDescription = (descrizione: string) => {
    const paragraphs = (
      <div className="mt-10">
        {descrizione?.split('\n').map((para, index) => {
          // Se il paragrafo contiene la parola
          if (para.includes('PRENOTA ADESSO')) {
            return (
              <Link
                href="#"
                className="mb-4 flex text-[#FFAB00] pad:justify-center pad:text-center"
                key={index}
              >
                {para}
              </Link>
            )
          } else {
            // Altrimenti ritorna il paragrafo normale
            return (
              <p className="mb-4 pad:mb-8 pad:text-center" key={index}>
                {para}
              </p>
            )
          }
        })}
      </div>
    )
    return paragraphs
  }

  return (
    <>
      <Section className="mt-20 flex flex-col gap-12 p-24 pad:p-14">
        <div className="flex flex-col text-xl font-bold text-white">
          <h1 className="mb-8 text-center text-3xl">{evento?.titolo}</h1>
          {evento?.immagine ? (
            <Image
              src={evento?.immagine}
              alt={evento?.titolo}
              width={430}
              height={530}
              className="my-10 self-center"
            />
          ) : (
            <p>Immagine non disponibile</p>
          )}
          {formatDescription(evento?.descrizione)}
        </div>
      </Section>
      <Footer eventi={evento} id="contatti" />
    </>
  )
}
