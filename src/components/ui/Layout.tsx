'use client'

import React, { ReactNode, useEffect } from 'react'
import { usePathname, useParams } from 'next/navigation'
import Header from '@/components/ui/Header'
import { navbarLinks, secondaryNavlinks } from '@/menus'
import { Params } from 'next/dist/server/request/params'

export default function Layout({ children }: { children: ReactNode }) {
  const pathName: string = usePathname()
  const { slug }: Params = useParams()

  useEffect(() => {
    if (pathName === '/') {
      document.title = 'Forneria Messina - Home'
    } else {
      document.title = `Forneria Messina - ${pathName
        .slice(1)
        .charAt(0)
        .toUpperCase()}${pathName.slice(2).replace('-', ' ').replace('-', ' ')}`
    }

    if (pathName === `/eventi/${slug}`) {
      document.title = `Forneria Messina - ${slug?.charAt(0).toUpperCase()}${slug?.slice(1).replace('-', ' ').replace('-', ' ')}`
    }
  }, [pathName, slug])

  return (
    <>
      <Header list={pathName === '/' ? navbarLinks : secondaryNavlinks} />
      <main className="flex min-h-screen w-screen flex-col">{children}</main>
    </>
  )
}
