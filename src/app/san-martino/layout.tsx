import type { Metadata } from 'next'
import { ReactNode } from 'react'
import Layout from '@/components/ui/Layout'

export const metadata: Metadata = {
  description: 'Ristorante di Forneria Messina , San Martino delle Scale',
  keywords: 'Forneria Messina - San Martino',
  icons: '../favicon.ico',
  authors: { name: 'Riccardo Mannino' },
  openGraph: {
    type: 'website',
    url: 'https://forneria-messina.vercel.app/san-martino',
    title: 'Forneria Messina - San Martino',
    description: 'Ristorante di Forneria Messina , San Martino delle Scale',
    siteName: 'Forneria Messina - San Martino',
    // images: [
    //   {
    //     url: 'https://example.com/og.png',
    //   },
    // ],
  },
}

export default function SanMartinoLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return <Layout>{children}</Layout>
}
