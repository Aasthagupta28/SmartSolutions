'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Play, CheckCircle } from 'lucide-react'
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
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
        {/* Dark Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-purple-900/70 to-slate-900/80"></div>
        {/* Additional overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 via-transparent to-blue-600/30"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
        ></motion.div>
        <motion.div
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.15, 0.3, 0.15]
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
          className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
        ></motion.div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 flex items-center min-h-screen">
        <div className="flex flex-col items-center text-center w-full">
          {/* Centered Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="max-w-5xl mx-auto w-full"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-poppins font-extrabold text-white leading-tight mb-4"
            >
              Transform Your
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
                Digital Future
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-base sm:text-lg lg:text-xl text-gray-300 mb-6 leading-relaxed max-w-3xl mx-auto"
            >
              Need a reliable tech partner? We build custom websites, mobile apps, and AI-powered tools that help your business grow. Real solutions, real results.
            </motion.p>

            {/* Features - New Design */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6 max-w-4xl mx-auto"
            >
              {features.map((feature, index) => (
                <motion.div 
                  key={feature}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                  className="group relative"
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-3 hover:bg-white/10 transition-all duration-300">
                    <CheckCircle className="w-5 h-5 text-purple-400 mb-1.5 group-hover:text-pink-400 transition-colors mx-auto" />
                    <span className="text-white text-xs sm:text-sm font-medium block">{feature}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons - New Design */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6"
            >
              <Link
                href="/contact"
                className="group relative px-8 py-3.5 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-base sm:text-lg rounded-xl hover:from-purple-500 hover:to-pink-500 transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/50 flex items-center space-x-3 overflow-hidden"
              >
                <span className="relative z-10">Start Your Project</span>
                <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-2 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </Link>
              
              <button className="group px-8 py-3.5 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white font-bold text-base sm:text-lg rounded-xl hover:bg-white/20 hover:border-white/50 transition-all duration-300 hover:scale-110 flex items-center space-x-3">
                <Play className="w-5 h-5" />
                <span>View Portfolio</span>
              </button>
            </motion.div>

            {/* Stats - New Design */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 w-full max-w-4xl mx-auto"
            >
              {[
                { number: '100+', label: 'Projects Delivered', color: 'from-purple-500 to-pink-500' },
                { number: '98%', label: 'Client Satisfaction', color: 'from-blue-500 to-cyan-500' },
                { number: '24/7', label: 'Support Available', color: 'from-pink-500 to-purple-500' }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.3 + index * 0.1 }}
                  className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 sm:p-5 hover:bg-white/10 transition-all duration-300 hover:scale-105"
                >
                  <div className={`text-3xl sm:text-4xl font-extrabold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1.5`}>
                    {stat.number}
                  </div>
                  <div className="text-gray-300 text-xs sm:text-sm font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator - New Design */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-8 h-12 border-2 border-purple-400/50 rounded-full flex justify-center backdrop-blur-sm bg-white/5"
        >
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-2 h-4 bg-gradient-to-b from-purple-400 to-pink-400 rounded-full mt-2"
          ></motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
