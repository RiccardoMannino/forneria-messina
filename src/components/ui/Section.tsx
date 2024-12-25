'use client'

import { ReactNode, useRef } from 'react'
import { useInView, motion } from 'motion/react'
import { AnimatePresence } from 'framer-motion'

interface SectionProps {
  children: ReactNode
  transition?: string
  transform?: string
  translate?: string
  opacity?: number
  className?: string
  id?: string
}

export default function Section({
  children,
  transform = 'translateY(0)',
  translate = 'translateY(50px)',
  opacity = 1,
  transition = 'opacity 0.5s ease, transform 0.5s ease',
  className,
  id,
}: SectionProps) {
  const ref = useRef<HTMLElement>(null)

  const isInView = useInView(ref)

  const style = {
    transform: isInView ? transform : translate,
    opacity: isInView ? opacity : 0,
    transition,
  }

  return (
    <motion.section id={id} ref={ref} style={style} className={className}>
      {children}
    </motion.section>
  )
}
