import type { Metadata } from 'next'
import { ReactNode } from 'react'
import './globals.css'
import { Nunito_Sans } from 'next/font/google'
import Layout from '@/components/ui/Layout'

import { ReactQueryClientProvider } from '@/components/ReactQueryClientProvider'
import { AnimatePresence } from 'framer-motion'

const nunito = Nunito_Sans({
  subsets: ['latin'],
  variable: '--font-nunito-sans',
})

export const metadata: Metadata = {
  title: 'Forneria Messina',
  description: 'Ristorante di Forneria Messina',
  icons: '/favicon.ico',
  authors: { name: 'Riccardo Mannino' },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <ReactQueryClientProvider>
      <html lang="en" className="overflow-x-hidden scroll-smooth">
        <body className={`${nunito.variable} bg-[#282828] antialiased`}>
          <AnimatePresence mode={'wait'}>
            <Layout>{children}</Layout>
          </AnimatePresence>
        </body>
      </html>
    </ReactQueryClientProvider>
  )
}
