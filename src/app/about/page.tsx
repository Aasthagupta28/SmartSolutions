'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Target, Eye, Heart, Users, Award, Clock, Globe, Zap, ArrowRight } from 'lucide-react'
import { useRef, useEffect } from 'react'

export default function About() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true
      videoRef.current.volume = 0
    }
  }, [])
  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for perfection in every project, delivering solutions that exceed expectations and drive measurable results.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and work closely with our clients to understand their unique needs and goals.'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'We stay ahead of the curve by embracing cutting-edge technologies and creative problem-solving approaches.'
    },
    {
      icon: Heart,
      title: 'Integrity',
      description: 'We maintain the highest ethical standards, ensuring transparency, honesty, and trust in all our relationships.'
    }
  ]

  const stats = [
    { number: '98%', label: 'Client Satisfaction Rate', icon: Award, gradient: 'from-purple-400 to-pink-400' },
    { number: '5+', label: 'Years of Excellence', icon: Users, gradient: 'from-blue-400 to-cyan-400' },
    { number: '100%', label: 'Quality Commitment', icon: Clock, gradient: 'from-pink-400 to-rose-400' },
    { number: '24/7', label: 'Round-the-Clock Support', icon: Globe, gradient: 'from-purple-400 to-indigo-400' }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section - Dark Blue Background with bg.png */}
      <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center justify-center overflow-visible pb-24 md:pb-32">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <div 
            className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: 'url(/bg.png)' }}
          ></div>
          {/* Dark Overlay */}
          <div className="absolute inset-0"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-5xl mx-auto"
          >
            <h1 className="text-2xl md:text-3xl lg:text-3xl font-lato font-bold text-white mb-6 whitespace-nowrap">
              About <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Smart IT Core Solutions</span>
            </h1>
            <div className="text-base md:text-lg lg:text-xl text-gray-200 leading-relaxed space-y-4 text-left max-w-4xl mx-auto">
              <p>
                We're a young, dynamic and fast-paced digital transformation partner. We offer a gamut of technology services to Small, Medium or Large scale enterprises, helping them cut costs and take a step into the future with digital technologies.
              </p>
              <p>
                Our services include Web Development, Mobile Development, AI & Machine Learning, Data & Analytics, Backend Development, UI/UX Design, Digital Marketing, Testing & Quality Assurance, and more.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission, Vision & Name - Large White Card */}
      <section className="py-0 bg-white relative overflow-visible z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 md:-mt-32 lg:-mt-40 relative z-20">
          {/* Large Rounded White Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-t-[3rem] md:rounded-[3rem] p-8 md:p-12 lg:p-16 shadow-2xl"
          >
            {/* Mission, Vision & Name - Stacked Vertically */}
            <div className="space-y-8 md:space-y-12">
              {/* Our Mission */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-6"
              >
                <div className="flex-shrink-0 mt-1">
                  <ArrowRight className="w-8 h-8 text-purple-600" />
                </div>
                <div className="flex-grow">
                  <h2 className="text-xl md:text-2xl lg:text-2xl font-lato font-extrabold text-slate-900 mb-4 whitespace-nowrap">
                    Our Mission
                  </h2>
                  <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                    We strive to create a mutually beneficial eco-system of enterprise, nature, and humanity through digital transformations powered by passion, innovation, and excellence.
                  </p>
                </div>
              </motion.div>

              {/* Our Vision */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex items-start space-x-6"
              >
                <div className="flex-shrink-0 mt-1">
                  <ArrowRight className="w-8 h-8 text-purple-600" />
                </div>
                <div className="flex-grow">
                  <h2 className="text-xl md:text-2xl lg:text-2xl font-lato font-extrabold text-slate-900 mb-4 whitespace-nowrap">
                    Our Vision
                  </h2>
                  <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                    We aim to become a globally preferred partner to business enterprises while being committed to their business goals and a sustainable future.
                  </p>
                </div>
              </motion.div>

              {/* Our Name */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="flex items-start space-x-6"
              >
                <div className="flex-shrink-0 mt-1">
                  <ArrowRight className="w-8 h-8 text-purple-600" />
                </div>
                <div className="flex-grow">
                  <h2 className="text-xl md:text-2xl lg:text-2xl font-lato font-extrabold text-slate-900 mb-4 whitespace-nowrap">
                    Our Name
                  </h2>
                  <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                    Smart IT Core Solutions symbolizes our commitment to excellence in delivering state-of-the-art technology services that we can carry forward into the future. We focus on building smart, core solutions that form the foundation of your digital transformation.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section - New Design */}
      <section className="py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #000 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-2xl lg:text-3xl font-lato font-extrabold text-slate-900 mb-6 whitespace-nowrap">
              Our <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">Values</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              The principles that guide everything we do and shape our company culture.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30, rotateY: -10 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-white rounded-2xl p-8 border-2 border-slate-200 hover:border-purple-300 shadow-lg hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 hover:-translate-y-3 text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <value.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-lato font-extrabold text-slate-900 mb-4 group-hover:text-purple-600 transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section - New Design */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-0 right-0 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl"
          ></motion.div>
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{ duration: 10, repeat: Infinity, delay: 1 }}
            className="absolute bottom-0 left-0 w-96 h-96 bg-pink-500/30 rounded-full blur-3xl"
          ></motion.div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-2xl lg:text-3xl font-lato font-extrabold text-white mb-6 whitespace-nowrap">
              Our <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">Impact</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Numbers that reflect our commitment to excellence and client success.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105 text-center"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${stat.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className={`text-5xl font-extrabold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2`}>
                  {stat.number}
                </div>
                <div className="text-gray-300 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section - New Design */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2],
              x: [0, 50, 0]
            }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-10 right-10 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl"
          ></motion.div>
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.4, 0.2],
              x: [0, -50, 0]
            }}
            transition={{ duration: 10, repeat: Infinity, delay: 1 }}
            className="absolute bottom-10 left-10 w-96 h-96 bg-pink-500/30 rounded-full blur-3xl"
          ></motion.div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-2xl lg:text-3xl font-lato font-extrabold text-white mb-6 whitespace-nowrap">
              Our <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">Expertise</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Delivering excellence through innovation and technical mastery
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center lg:text-left"
            >
              <div className="relative w-45 h-45 mx-auto lg:mx-0">
                <Image
                  src="/logo2.png"
                  alt="SMART IT CORE SOLUTIONS Logo"
                  fill
                  className="object-contain drop-shadow-lg"
                />
              </div>
              <h3 className="text-xl lg:text-2xl font-lato font-extrabold text-white mb-4 whitespace-nowrap">Smart IT Core Solutions</h3>
              <p className="text-xl bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent font-bold mb-6">Your Technology Partner</p>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                With extensive expertise in modern technology stacks, cloud computing, and intelligent automation, 
                we bring years of combined experience to every project. Our team is dedicated to delivering 
                scalable, secure, and innovative solutions that transform businesses and drive digital success.
              </p>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-4 hover:bg-white/15 transition-all duration-300">
                  <div className="text-3xl font-extrabold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-1">5+</div>
                  <div className="text-gray-300 text-sm font-medium">Years Experience</div>
                </div>
                <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-4 hover:bg-white/15 transition-all duration-300">
                  <div className="text-3xl font-extrabold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-1">5+</div>
                  <div className="text-gray-300 text-sm font-medium">Projects Led</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300">
                <h4 className="text-xl font-lato font-extrabold text-white mb-4">Expertise</h4>
                <div className="flex flex-wrap gap-2">
                  {['React', 'Django', 'Laravel', 'WordPress', 'Shopify', 'React Native', 'Python', 'AI/ML', 'SQL', 'ETL', 'SEO', 'Figma'].map((skill) => (
                    <span key={skill} className="px-3 py-1.5 bg-purple-500/20 text-purple-200 text-sm font-semibold rounded-lg border border-purple-400/30 hover:bg-purple-500/30 hover:border-purple-400/50 transition-all duration-300">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300">
                <h4 className="text-xl font-lato font-extrabold text-white mb-4">Vision</h4>
                <p className="text-gray-300 leading-relaxed">
                  "To create a world where technology empowers every business to achieve their dreams, 
                  regardless of size or industry. We believe in building solutions that are not just 
                  functional, but transformative."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - New Design */}
      <section className="py-24 bg-gradient-to-b from-white via-purple-50/30 to-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #000 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-2xl lg:text-3xl font-lato font-extrabold text-slate-900 mb-6 whitespace-nowrap">
              Why Choose <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">Smart IT Core?</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              We combine technical expertise with business acumen to deliver solutions that drive real results.
            </p>
          </motion.div>

          {/* 3 Cards - Unique Design with Equal Heights */}
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl w-full">
              <motion.div
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1, type: "spring", stiffness: 100 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="relative group h-full"
              >
                {/* Animated Gradient Background */}
                <motion.div
                  animate={{ 
                    backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
                  }}
                  transition={{ duration: 5, repeat: Infinity }}
                  className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-pink-500/5 to-transparent rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"
                ></motion.div>
                <div className="relative bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 border-l-4 border-purple-500 hover:border-purple-600 transition-all duration-300 h-full flex flex-col">
                  <motion.div
                    initial={{ opacity: 0, scale: 0, rotate: -180 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.15, rotate: [0, -10, 10, -10, 0] }}
                    className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg"
                  >
                    <Zap className="w-8 h-8 text-white" />
                  </motion.div>
                  <motion.h3
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="text-2xl font-lato font-extrabold text-slate-900 mb-4"
                  >
                    Cutting-Edge Technology
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="text-slate-600 leading-relaxed flex-grow"
                  >
                    We use the latest frameworks, tools, and methodologies to build future-proof solutions.
                  </motion.p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 100 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="relative group h-full"
              >
                {/* Animated Gradient Background */}
                <motion.div
                  animate={{ 
                    backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
                  }}
                  transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
                  className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-transparent rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"
                ></motion.div>
                <div className="relative bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 border-l-4 border-blue-500 hover:border-blue-600 transition-all duration-300 h-full flex flex-col">
                  <motion.div
                    initial={{ opacity: 0, scale: 0, rotate: -180 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 0.8, delay: 0.3, type: "spring" }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.15, rotate: [0, -10, 10, -10, 0] }}
                    className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg"
                  >
                    <Users className="w-8 h-8 text-white" />
                  </motion.div>
                  <motion.h3
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="text-2xl font-lato font-extrabold text-slate-900 mb-4"
                  >
                    Expert Team
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="text-slate-600 leading-relaxed flex-grow"
                  >
                    Our experienced developers and designers bring years of expertise to every project.
                  </motion.p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3, type: "spring", stiffness: 100 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="relative group h-full"
              >
                {/* Animated Gradient Background */}
                <motion.div
                  animate={{ 
                    backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
                  }}
                  transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                  className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-rose-500/5 to-transparent rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"
                ></motion.div>
                <div className="relative bg-gradient-to-br from-pink-50 to-rose-50 rounded-3xl p-8 border-l-4 border-pink-500 hover:border-pink-600 transition-all duration-300 h-full flex flex-col">
                  <motion.div
                    initial={{ opacity: 0, scale: 0, rotate: -180 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, type: "spring" }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.15, rotate: [0, -10, 10, -10, 0] }}
                    className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg"
                  >
                    <Award className="w-8 h-8 text-white" />
                  </motion.div>
                  <motion.h3
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="text-2xl font-lato font-extrabold text-slate-900 mb-4"
                  >
                    Proven Track Record
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="text-slate-600 leading-relaxed flex-grow"
                  >
                    98% client satisfaction rate with proven expertise in modern technologies, delivering solutions on time and within budget.
                  </motion.p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
