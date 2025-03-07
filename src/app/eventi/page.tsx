'use client'

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import useEventiQuery from '@/hooks/use-eventi-query'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/Select'
import EventList from '@/components/ui/EventListItem'
import Section from '@/components/ui/Section'
import Footer from '@/components/ui/Footer'

type ConfigData = {
  supabaseUrl: string
  supabaseKey: string
}

export default function Eventi() {
  const [location, setLocation] = useState('Palermo')
  const [config, setConfig] = useState<ConfigData>({} as ConfigData)
  const { data: eventi, isLoading, isError } = useEventiQuery()

  const router = useRouter()

  useEffect(() => {
    const fetchConfig = async () => {
      try {
        const response = await fetch('/api/getConfig')
        const data: ConfigData = await response.json()
        setConfig(data)
      } catch (error) {
        console.error('Errore durante il fetch della configurazione:', error)
      }
    }

    fetchConfig()
  }, [])

  const handleClick = (slug: string) => {
    router.push(`/eventi/${slug.toLowerCase().split(' ').join('-')}`)
  }

  return (
    <>
      <Section className="mt-20 flex flex-col gap-12 p-24 pad:p-14">
        <div className="flex justify-between">
          <h1 className="text-4xl font-bold tracking-tighter text-[#FFAB00] pad:text-3xl">
            Eventi
          </h1>
          <Select value={location} onValueChange={setLocation}>
            <SelectTrigger
              className={`${location === 'San Martino' ? 'pad:w-[130px]' : 'pad:w-[115px]'} w-[180px] bg-white font-semibold text-[#FFAB00]`}
            >
              <SelectValue placeholder="Ristoranti" />
            </SelectTrigger>
            <SelectContent className="border-transparent">
              <SelectGroup>
                <SelectItem
                  className="bg-white font-semibold text-[#FFAB00] hover:bg-[#282828]"
                  value="Palermo"
                >
                  Palermo
                </SelectItem>
                <SelectItem
                  className="bg-white font-semibold text-[#FFAB00] hover:bg-[#282828]"
                  value="San Martino"
                >
                  San Martino
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <ul className="grid grid-cols-1 items-stretch gap-12 lg:grid-cols-2">
          <EventList
            eventi={eventi}
            handleClick={handleClick}
            location={location}
          />
        </ul>
      </Section>
      <Footer location={location} id="contatti" />
    </>
  )
}
