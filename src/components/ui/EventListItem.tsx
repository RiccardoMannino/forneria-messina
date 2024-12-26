import Image from 'next/image'
import React from 'react'

type Event = {
  id: number
  titolo: string
  descrizione: string
  immagine: string
}

export default function EventList({
  eventi,
  handleClick,
}: {
  eventi: Array<any> | undefined | null
  handleClick: (slug: string) => void
}) {
  return (
    <>
      {eventi
        ?.filter((evento) => evento.ristorante.trim().toLowerCase())
        .map((event: Event) => (
          <li
            key={event.id}
            className="flex min-h-96 flex-col items-center justify-center gap-4 rounded-lg bg-white p-4"
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
            <div className="line-clamp-3 w-full p-2">
              {event.descrizione?.split('\n').map((para, index) => (
                <p className="text-center" key={index}>
                  {para}
                </p>
              ))}
            </div>
          </li>
        ))}
    </>
  )
}
