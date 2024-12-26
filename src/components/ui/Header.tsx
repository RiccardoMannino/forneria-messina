'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import Logo from '../../assets/logo_forneria.png'
import Link from 'next/link'
import { motion } from 'framer-motion'

type List = {
  name: string
  href: string
}[]

export default function Header({ list }: { list: List }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.header className={`fixed z-40 w-full bg-[#282828]/70 pb-2`}>
      <div className="w-screen px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="mt-4 md:flex md:items-center md:gap-12">
            <Image
              className="pad:h-26 relative z-20 h-auto w-auto pad:w-24"
              src={Logo}
              alt="Logo Forneria"
              width={100}
              height={100}
            />
          </div>
          <div className="flex items-center justify-center gap-12">
            <nav
              aria-label="Global"
              className="items-center justify-center pad:hidden"
            >
              <motion.ul className="flex-wrap items-center gap-6 text-base md:text-lg pad:hidden xmd:flex">
                {list.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="rounded-2xl p-2 font-semibold text-slate-200 transition hover:bg-slate-200 hover:p-2 hover:text-[#FFAB00]"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </motion.ul>
            </nav>
            <div onClick={() => setOpen(!open)} className="hidden pad:block">
              <button className="relative z-20 rounded bg-gray-100 p-2 text-[#FFAB00] transition delay-100 hover:bg-[#FFAB00] hover:text-slate-200">
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  animate={{ rotate: open ? 0 : 180 }}
                  transition={{ duration: 1 }}
                >
                  {!open ? (
                    <path d="M4 6h16M4 12h16M4 18h16" />
                  ) : (
                    <>
                      <path d="M6 6L18 18" stroke="currentColor" />
                      <path d="M6 18L18 6" stroke="currentColor" />
                    </>
                  )}
                </motion.svg>
              </button>
            </div>
            <motion.div
              className={`${(open && 'fixed left-0 top-0 z-10 hidden pad:inline-flex pad:w-screen') || 'fixed right-0 top-0 z-10 w-screen bg-[#282828] xmd:hidden'}`}
              animate={{ x: open ? 0 : 1000 }}
              initial={false}
              transition={{
                duration: 1.8,
                type: open ? 'easeIn' : 'easeOut',
                delay: 0.3,
              }}
            >
              <motion.ul
                initial={false}
                animate={open ? 'open' : 'closed'}
                variants={{
                  open: {
                    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
                  },
                  closed: {
                    transition: { staggerChildren: 0.15, staggerDirection: -1 },
                  },
                }}
                className="flex h-dvh w-full flex-col items-center justify-center bg-[#36363a] text-center text-sm"
              >
                {list.map((link) => (
                  <motion.li
                    variants={{
                      open: {
                        opacity: 1,
                        transition: {
                          duration: 1,
                        },
                      },
                      closed: {
                        opacity: 0,
                        transition: {
                          duration: 0.3,
                        },
                      },
                    }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="my-2 w-fit rounded-md p-2 text-2xl font-semibold text-slate-200 transition duration-700 hover:bg-[#434349] hover:text-[#FFAB00]"
                    key={link.name}
                  >
                    <Link href={link.href} onClick={() => setOpen(false)}>
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.header>
  )
}
