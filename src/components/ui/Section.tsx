'use client'

import { ReactNode, useRef, useState } from 'react'
import { useInView, motion } from 'framer-motion'

export default function Section({
  children,
  transition,
  transform,
  opacity,
  className,
  translate,
  id,
  initial,
  ...props
}: {
  children: ReactNode
  transition?: string
  transform?: string
  translate?: string
  opacity?: number
  className?: string
  id?: string
  initial?: boolean
}) {
  const ref = useRef(null)
  const isInView = useInView(ref)

  const style = {
    transform: isInView ? transform : translate,
    opacity: isInView ? opacity : 0,
    transition: transition,
    initial: initial,
  }

  return (
    <motion.section
      id={id}
      ref={ref}
      className={className}
      style={style}
      {...props}
    >
      {children}
    </motion.section>
  )
}
