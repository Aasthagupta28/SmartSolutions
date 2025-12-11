'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Play } from 'lucide-react'
import { useRef, useEffect } from 'react'

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null)

  const features = [
    'Free Consultation',
    '24/7 Support',
    'Modern Technology',
    'Scalable Solutions'
  ]

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true
      videoRef.current.volume = 0
    }
  }, [])


  return (
    <section className="relative min-h-[70vh] flex items-start justify-center overflow-visible pb-32">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/video2.mp4" type="video/mp4" />
        </video>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-purple-900/70 to-slate-900/80"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 via-transparent to-blue-600/30"></div>
      </div>

      {/* Simple Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 sm:pt-40 lg:pt-48">
        <div className="flex flex-col items-center text-center w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto w-full"
          >
            {/* Main Heading - Large Font */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-lato font-bold text-white mb-4 leading-tight">
              Transform Your <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">Digital Future</span>
            </h1>

            {/* Subtitle - Smaller font */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-base sm:text-lg text-gray-300 mb-6 max-w-3xl mx-auto"
            >
              Need a reliable tech partner? We build custom websites, mobile apps, and AI-powered tools that help your business grow. Real solutions, real results.
            </motion.p>

            {/* Features - Simple text, no icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap justify-center gap-4 mb-8 text-sm text-gray-300"
            >
              {features.map((feature) => (
                <span key={feature} className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                  {feature}
                </span>
              ))}
            </motion.div>

            {/* CTA Buttons - Simple */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            >
              <Link
                href="/contact"
                className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center gap-2"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              
              <Link
                href="/services"
                className="px-8 py-3 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300 flex items-center gap-2"
              >
                <Play className="w-4 h-4" />
                <span>Our Services</span>
              </Link>
            </motion.div>

          </motion.div>
        </div>
      </div>

      {/* Simple Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-white/60 text-xs">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1.5 h-3 bg-white/60 rounded-full mt-2"
            ></motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
