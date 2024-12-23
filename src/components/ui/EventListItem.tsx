import Image from 'next/image'
import React from 'react'

export default function EventList({
  eventi,
  location,
  handleClick,
}: {
  eventi: Array<any> | undefined | null
  handleClick: (slug: string) => void
  location: string
}) {
  return (
    <>
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
                <p className="line-clamp-3 w-full p-2">
                  {event.descrizione?.split('\n')}
                </p>
              </li>
            ))}
    </>
  )
}
