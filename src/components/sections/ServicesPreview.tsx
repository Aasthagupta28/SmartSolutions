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
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Code,
      title: 'Web Development',
      description: 'Fast websites and web apps that work great on any device. Whether you need a simple site or a complex platform, we build it right.',
      technologies: ['React', 'Next.js', 'Laravel', 'WordPress'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Mobile apps that feel native on both iPhone and Android. We build apps people actually want to use.',
      technologies: ['React Native', 'Flutter', 'iOS', 'Android'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Palette,
      title: 'UI/UX & Digital Marketing',
      description: 'Designs that look great and work even better. Plus, we help you get found online with SEO and marketing that actually brings in customers.',
      technologies: ['Figma', 'SEO', 'Marketing', 'Analytics'],
      color: 'from-orange-500 to-red-500'
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
          <h2 className="text-5xl lg:text-6xl font-poppins font-extrabold text-slate-900 mb-6">
            Our Services
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Whether you need a custom website, mobile app, or AI-powered tool, we've got you covered. We focus on delivering solutions that actually work for your business.
          </p>
        </motion.div>

        {/* Services Grid - Completely New Design */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-white rounded-3xl p-8 border-2 border-slate-200 hover:border-purple-300 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 transform hover:-translate-y-2">
                {/* Icon with New Design */}
                <div className="mb-6">
                  <div className={`relative w-20 h-20 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                    <service.icon className="w-10 h-10 text-white" />
                    <div className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-poppins font-extrabold text-slate-900 mb-4 group-hover:text-purple-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-600 leading-relaxed mb-6 text-base">
                  {service.description}
                </p>

                {/* Technologies - New Style */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 bg-slate-100 text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 hover:bg-purple-50 hover:border-purple-200 hover:text-purple-700 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* CTA - New Design */}
                <Link
                  href="/services"
                  className="inline-flex items-center text-purple-600 font-bold hover:text-pink-600 transition-colors group-hover:gap-3 gap-2"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </Link>
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
              <h3 className="text-4xl font-poppins font-extrabold text-white mb-4">
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
