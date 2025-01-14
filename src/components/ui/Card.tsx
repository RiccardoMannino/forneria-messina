import { cn } from '@/lib/utils'
import Image, { StaticImageData } from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import { Transition } from 'framer-motion'

type Card = {
  ristorante: string
  children: React.ReactNode
  className?: string
  src: string | StaticImageData
  onClick?: () => void
  animate?: boolean
  initial?: boolean
  transition?: Transition | undefined
}

export default function Card({
  ristorante,
  children,
  className,
  src,
  onClick,
  animate,
  initial,
  transition,
}: Card) {
  return (
    <>
      <motion.div
        className={cn(
          `relative mx-5 flex h-auto w-auto cursor-pointer flex-col text-nowrap rounded-xl text-center text-white shadow-[0px_0px_8px_2px_#fff] phonesm:max-w-96 phonesm:text-sm md:h-80 md:w-96`,
        )}
        onClick={onClick}
        animate={animate}
        initial={initial}
        transition={transition}
      >
        <div className="z-10 flex flex-col p-4 font-semibold phonesm:truncate phonesm:text-wrap">
          <p className="mb-6 mt-4 text-xl phonesm:text-sm">{ristorante}</p>
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
