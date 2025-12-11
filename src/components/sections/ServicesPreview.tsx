'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Code, Smartphone, Brain, Palette, ArrowRight } from 'lucide-react'

const ServicesPreview = () => {
  const services = [
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      description: 'Chatbots that answer customer questions, automation that saves you time, and AI tools that help you make better decisions from your data.',
      technologies: ['AI/ML', 'Python', 'TensorFlow', 'ChatGPT'],
      color: 'from-purple-500 to-pink-500',
      bgGradient: 'from-purple-50 to-pink-50',
      borderColor: 'border-purple-200',
      hoverBorder: 'hover:border-purple-400'
    },
    {
      icon: Code,
      title: 'Web Development',
      description: 'Fast websites and web apps that work great on any device. Whether you need a simple site or a complex platform, we build it right.',
      technologies: ['React', 'Next.js', 'Laravel', 'WordPress'],
      color: 'from-pink-500 to-rose-500',
      bgGradient: 'from-pink-50 to-rose-50',
      borderColor: 'border-pink-200',
      hoverBorder: 'hover:border-pink-400'
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Mobile apps that feel native on both iPhone and Android. We build apps people actually want to use.',
      technologies: ['React Native', 'Flutter', 'iOS', 'Android'],
      color: 'from-purple-600 to-indigo-500',
      bgGradient: 'from-purple-50 to-indigo-50',
      borderColor: 'border-purple-200',
      hoverBorder: 'hover:border-purple-400'
    },
    {
      icon: Palette,
      title: 'UI/UX & Digital Marketing',
      description: 'Designs that look great and work even better. Plus, we help you get found online with SEO and marketing that actually brings in customers.',
      technologies: ['Figma', 'SEO', 'Marketing', 'Analytics'],
      color: 'from-pink-600 to-purple-500',
      bgGradient: 'from-pink-50 to-purple-50',
      borderColor: 'border-pink-200',
      hoverBorder: 'hover:border-pink-400'
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #000 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - New Design */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-2xl lg:text-3xl font-lato font-extrabold text-slate-900 mb-6 whitespace-nowrap">
            Our Services
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Whether you need a custom website, mobile app, or AI-powered tool, we've got you covered. We focus on delivering solutions that actually work for your business.
          </p>
        </motion.div>

        {/* Services Grid - All 4 in One Row with Theme-Matching Design */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.08,
                type: "spring",
                stiffness: 120,
                damping: 20
              }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -8,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="group relative"
            >
              {/* Card with Theme Colors */}
              <div className={`relative bg-gradient-to-br ${service.bgGradient} rounded-xl p-5 border-2 ${service.borderColor} ${service.hoverBorder} shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden h-full flex flex-col`}>
                {/* Top Gradient Accent Line */}
                <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${service.color}`}></div>
                
                {/* Subtle Glow Effect on Hover */}
                <motion.div
                  className={`absolute -inset-1 bg-gradient-to-r ${service.color} rounded-xl opacity-0 group-hover:opacity-15 blur-md transition-opacity duration-500`}
                />

                {/* Icon - Compact and Animated */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, rotate: -90 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.08 + 0.15,
                    type: "spring",
                    stiffness: 150
                  }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    rotate: [0, -8, 8, -8, 0],
                    scale: 1.1,
                    transition: { duration: 0.4 }
                  }}
                  className="mb-3 flex justify-center relative z-10"
                >
                  <div className={`w-14 h-14 bg-gradient-to-br ${service.color} rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300`}>
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                </motion.div>

                {/* Title - Compact */}
                <motion.h3
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.08 + 0.2 }}
                  viewport={{ once: true }}
                  className="text-base md:text-lg font-lato font-bold text-slate-900 mb-2 text-center group-hover:text-purple-600 transition-colors relative z-10"
                >
                  {service.title}
                </motion.h3>

                {/* Description - Compact Height */}
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.08 + 0.25 }}
                  viewport={{ once: true }}
                  className="text-xs md:text-sm text-gray-600 leading-snug mb-3 text-center flex-grow relative z-10 line-clamp-3"
                >
                  {service.description}
                </motion.p>

                {/* Technology Tags - Compact */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.08 + 0.3 }}
                  viewport={{ once: true }}
                  className="flex flex-wrap gap-1.5 mb-3 justify-center relative z-10"
                >
                  {service.technologies.slice(0, 3).map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ 
                        delay: index * 0.08 + 0.3 + techIndex * 0.04,
                        duration: 0.25
                      }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.08 }}
                      className="px-2 py-0.5 bg-white/80 text-gray-700 text-[10px] md:text-xs font-medium rounded-md border border-gray-200/50 hover:bg-purple-100 hover:border-purple-300 hover:text-purple-700 transition-colors cursor-default shadow-sm"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>

                {/* Learn More Link - Centered */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.08 + 0.35 }}
                  viewport={{ once: true }}
                  className="flex justify-center relative z-10 mt-auto"
                >
                  <Link
                    href="/services"
                    className="inline-flex items-center text-purple-600 font-semibold text-sm hover:text-purple-700 transition-colors group-hover:gap-1.5 gap-1"
                  >
                    <span>Learn More</span>
                    <motion.span
                      animate={{ x: [0, 3, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, delay: index * 0.15 }}
                      className="inline-block"
                    >
                      <ArrowRight className="w-3.5 h-3.5" />
                    </motion.span>
                  </Link>
                </motion.div>

                {/* Decorative Corner Elements - Subtle */}
                <div className={`absolute top-1.5 right-1.5 w-2 h-2 bg-gradient-to-br ${service.color} rounded-full opacity-0 group-hover:opacity-60 transition-opacity duration-300`}></div>
                <div className={`absolute bottom-1.5 left-1.5 w-1.5 h-1.5 bg-gradient-to-br ${service.color} rounded-full opacity-0 group-hover:opacity-60 transition-opacity duration-300`}></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section - New Design */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 rounded-3xl p-12 overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 left-0 w-72 h-72 bg-purple-500 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500 rounded-full blur-3xl"></div>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-2xl font-lato font-extrabold text-white mb-4 whitespace-nowrap">
                Ready to Scale Your Business?
              </h3>
              <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                Let's build something extraordinary together. Get started with a free consultation today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="group bg-white text-slate-900 px-10 py-5 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-white/20 flex items-center justify-center space-x-2"
                >
                  <span>Start Free Consultation</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </Link>
                <Link
                  href="/portfolio"
                  className="border-2 border-white/30 text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-white/10 hover:border-white/50 transition-all duration-300 hover:scale-110 backdrop-blur-sm"
                >
                  Explore Portfolio
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesPreview
