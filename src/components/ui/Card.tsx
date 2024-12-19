import { cn } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import { Transition } from 'framer-motion'

export default function Card({
  ristorante,
  children,
  className,
  src,
  onClick,
  animate,
  initial,
  transition,
}: {
  ristorante: string
  children: React.ReactNode
  className?: string
  src: string
  onClick?: () => void
  animate?: boolean
  initial?: boolean
  transition?: Transition | undefined
}) {
  return (
    <>
      <motion.div
        className={cn(
          `max-[390px]:text-sm max-[376px]:max-w-96 relative mx-5 flex h-auto w-auto cursor-pointer flex-col text-nowrap rounded-xl text-center text-white shadow-[0px_0px_8px_2px_#fff] md:h-80 md:w-96`,
        )}
        onClick={onClick}
        animate={animate}
        initial={initial}
        transition={transition}
      >
        <div className="max-[390px]:truncate max-[390px]:text-wrap z-10 flex flex-col p-2 font-semibold">
          <p className="max-[390px]:text-sm mb-6 mt-4 text-xl">{ristorante}</p>
          {children}
        </div>

        <div
          className={cn(
            'absolute left-0 top-0 flex h-full w-full justify-center rounded-xl bg-cover opacity-45',
            className,
          )}
        >
          <Image
            className="h-[initial] w-[initial] p-6"
            src={src}
            alt="Ristoranti"
            width={300}
            height={100}
          />
        </div>
      </motion.div>
    </>
  )
}
