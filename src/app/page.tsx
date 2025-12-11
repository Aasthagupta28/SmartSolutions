'use client'

import { motion } from 'framer-motion'
import Hero from '@/components/sections/Hero'
import ServicesPreview from '@/components/sections/ServicesPreview'
import Testimonials from '@/components/sections/Testimonials'
import CTA from '@/components/sections/CTA'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <ServicesPreview />
      <Testimonials />
      <CTA />
    </div>
  )
}
