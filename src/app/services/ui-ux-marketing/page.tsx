'use client'

import { motion } from 'framer-motion'
import { Palette, CheckCircle, ArrowRight, Star, Clock, Users, Shield, Zap } from 'lucide-react'
import Link from 'next/link'

export default function UIUXMarketing() {
  const features = [
    {
      icon: Palette,
      title: 'Figma UI/UX Design',
      description: 'UI/UX designs created in Figma. We make interfaces that are easy to use and look great.',
      benefits: ['User-centered design', 'Interactive prototypes', 'Design systems', 'Collaborative workflows']
    },
    {
      icon: Palette,
      title: 'Brand Identity & Logo Design',
      description: 'Full brand identity packages. Logos, colors, fonts, and guidelines so your brand looks consistent everywhere.',
      benefits: ['Logo design', 'Brand guidelines', 'Color psychology', 'Visual identity systems']
    },
    {
      icon: Palette,
      title: 'SEO & Content Marketing',
      description: 'SEO and content that helps you rank higher in search results. We research keywords and create content people actually want to read.',
      benefits: ['Keyword research', 'On-page optimization', 'Content strategy', 'Link building']
    },
    {
      icon: Palette,
      title: 'Digital Marketing Strategy',
      description: "Digital marketing plans that bring in customers. Social media, email campaigns, ads, and tracking to see what's working.",
      benefits: ['Social media marketing', 'Email campaigns', 'PPC advertising', 'Analytics tracking']
    }
  ]

  const technologies = [
    { name: 'Figma', category: 'Design', description: 'Collaborative interface design tool' },
    { name: 'Adobe Creative Suite', category: 'Design', description: 'Professional design software suite' },
    { name: 'Google Analytics', category: 'Analytics', description: 'Web analytics service by Google' },
    { name: 'SEO Tools', category: 'Marketing', description: 'Search engine optimization tools' },
    { name: 'Social Media APIs', category: 'Marketing', description: 'APIs for social media integration' },
    { name: 'Marketing Automation', category: 'Marketing', description: 'Automated marketing workflows' },
    { name: 'Google Ads', category: 'Advertising', description: 'Google\'s online advertising platform' },
    { name: 'Facebook Ads', category: 'Advertising', description: 'Facebook\'s advertising platform' }
  ]

  const process = [
    {
      step: '01',
      title: 'Research & Strategy',
      description: 'Research your target audience, competitors, and market trends to create effective strategies.'
    },
    {
      step: '02',
      title: 'Design & Prototyping',
      description: 'Create wireframes, mockups, and interactive prototypes for user testing and feedback.'
    },
    {
      step: '03',
      title: 'Development & Implementation',
      description: 'Implement designs and marketing strategies across all digital channels.'
    },
    {
      step: '04',
      title: 'Testing & Optimization',
      description: 'Test, analyze, and optimize designs and marketing campaigns for better performance.'
    }
  ]

  const stats = [
    { number: '60+', label: 'Design Projects', icon: Palette },
    { number: '95%', label: 'Client Satisfaction', icon: Star },
    { number: '24/7', label: 'Creative Support', icon: Clock },
    { number: '100%', label: 'On-Time Delivery', icon: Shield }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-orange-600 via-red-600 to-pink-600 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-red-400/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
              <Palette className="w-6 h-6 text-white mr-3" />
              <span className="text-white font-semibold">UI/UX & Digital Marketing</span>
            </div>
            
            <h1 className="text-2xl lg:text-3xl font-lato font-bold text-white mb-6 whitespace-nowrap">
              Creative <span className="bg-gradient-to-r from-pink-400 to-white bg-clip-text text-transparent">Design & Marketing</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed mb-8">
              We design things that look great and help you get found online. From Figma designs to SEO, we help turn visitors into customers.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center bg-white text-orange-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105"
              >
                <span>Get Free Quote</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-orange-600 transition-all duration-300"
              >
                <span>View Our Work</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-orange-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl lg:text-2xl font-lato font-bold text-navy mb-6 whitespace-nowrap">
              Our <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Design & Marketing</span> Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From user experience design to digital marketing, we create compelling visual experiences 
              and marketing strategies that drive engagement and business growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-lato font-bold text-navy">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>

                <div>
                  <h4 className="font-lato font-semibold text-navy mb-4">Key Benefits:</h4>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl lg:text-2xl font-lato font-bold text-navy mb-6 whitespace-nowrap">
              Tools & Technologies We <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Master</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We use top design and marketing tools to create 
              great user experiences and campaigns that actually bring in customers.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Palette className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-lato font-bold text-navy mb-2">{tech.name}</h3>
                  <p className="text-sm text-orange-600 font-medium mb-2">{tech.category}</p>
                  <p className="text-gray-600 text-sm">{tech.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl lg:text-2xl font-lato font-bold text-navy mb-6 whitespace-nowrap">
              Our Creative <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A proven methodology that ensures your design and marketing projects 
              are delivered on time and exceed your expectations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">{step.step}</span>
                  </div>
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-1/2 w-full h-0.5 bg-gradient-to-r from-orange-500 to-red-500"></div>
                  )}
                </div>
                <h3 className="text-xl font-lato font-semibold text-navy mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl lg:text-2xl font-lato font-bold text-white mb-6 whitespace-nowrap">
              Ready to Build a Brand That <span className="bg-gradient-to-r from-pink-400 to-white bg-clip-text text-transparent">People Remember?</span>
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
              Let's discuss your design and marketing requirements and create compelling 
              visual experiences that engage your audience and drive business growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center bg-white text-orange-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="tel:+919805871945"
                className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-orange-600 transition-all duration-300"
              >
                <span>Call +91 9805871945</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
