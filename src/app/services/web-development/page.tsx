'use client'

import { motion } from 'framer-motion'
import { Code, CheckCircle, ArrowRight, Star, Clock, Users, Shield, Zap } from 'lucide-react'
import Link from 'next/link'

export default function WebDevelopment() {
  const features = [
    {
      icon: Code,
      title: 'React & Next.js Applications',
      description: 'Fast, SEO-friendly websites built with React and Next.js. They load quick and rank well in search engines.',
      benefits: ['Server-side rendering', 'Automatic code splitting', 'Built-in performance optimization', 'SEO-friendly']
    },
    {
      icon: Code,
      title: 'Laravel & PHP Development',
      description: 'Solid backend systems built with Laravel that can grow with your business.',
      benefits: ['MVC architecture', 'Built-in authentication', 'Database migrations', 'API development']
    },
    {
      icon: Code,
      title: 'WordPress Custom Development',
      description: 'WordPress sites customized for your business. We build themes and plugins that do exactly what you need.',
      benefits: ['Custom post types', 'Advanced custom fields', 'Performance optimization', 'Security hardening']
    },
    {
      icon: Code,
      title: 'Shopify Store Development',
      description: 'Full online stores on Shopify. Custom themes, payment setup, and everything you need to sell online.',
      benefits: ['Custom checkout process', 'Payment gateway integration', 'Inventory management', 'Mobile optimization']
    }
  ]

  const technologies = [
    { name: 'React', category: 'Frontend', description: 'Modern UI library for building interactive user interfaces' },
    { name: 'Next.js', category: 'Framework', description: 'Full-stack React framework with server-side rendering' },
    { name: 'Laravel', category: 'Backend', description: 'Elegant PHP framework for web artisans' },
    { name: 'WordPress', category: 'CMS', description: 'Most popular content management system' },
    { name: 'Shopify', category: 'E-commerce', description: 'Leading e-commerce platform for online stores' },
    { name: 'Django', category: 'Backend', description: 'High-level Python web framework' },
    { name: 'Python', category: 'Language', description: 'Versatile programming language for web development' },
    { name: 'Node.js', category: 'Runtime', description: 'JavaScript runtime for server-side development' }
  ]

  const process = [
    {
      step: '01',
      title: 'Discovery & Analysis',
      description: 'We talk to you about what you need, who your customers are, and what tech will work best. Then we make a plan.'
    },
    {
      step: '02',
      title: 'Design & Prototyping',
      description: "We sketch out the design, show you what it'll look like, and get your approval before we start coding."
    },
    {
      step: '03',
      title: 'Development & Integration',
      description: 'We build your site using solid code practices. Clean, maintainable code that works well.'
    },
    {
      step: '04',
      title: 'Testing & Deployment',
      description: "We test everything, make sure it's fast, and launch it. Then we're here if you need help or updates."
    }
  ]

  const stats = [
    { number: '50+', label: 'Projects Completed', icon: Code },
    { number: '98%', label: 'Client Satisfaction', icon: Star },
    { number: '24/7', label: 'Support Available', icon: Clock },
    { number: '100%', label: 'On-Time Delivery', icon: Shield }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-600 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-400/20 rounded-full blur-3xl"></div>
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
              <Code className="w-6 h-6 text-white mr-3" />
              <span className="text-white font-semibold">Web Development</span>
            </div>
            
            <h1 className="text-2xl lg:text-3xl font-lato font-bold text-white mb-6 whitespace-nowrap">
              Professional <span className="bg-gradient-to-r from-cyan-400 to-white bg-clip-text text-transparent">Web Development</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed mb-8">
              We build custom websites and web apps using React, Laravel, WordPress, and Shopify. 
              Fast, secure, and built to handle your business needs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105"
              >
                <span>Get Free Quote</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                <span>View Our Services</span>
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
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
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
              Our <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">Web Development</span> Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We handle everything from planning to launch. Our websites help your business grow and give users a great experience.
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
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center">
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
              Technologies We <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">Master</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We stay updated with the latest technologies and frameworks to deliver 
              cutting-edge web solutions that meet modern standards.
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
                className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Code className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-lato font-bold text-navy mb-2">{tech.name}</h3>
                  <p className="text-sm text-blue-600 font-medium mb-2">{tech.category}</p>
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
              Our Development <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We follow a process that works. Your project gets delivered on time, on budget, and meets your needs.
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
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">{step.step}</span>
                  </div>
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-1/2 w-full h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500"></div>
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
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl lg:text-2xl font-lato font-bold text-white mb-6 whitespace-nowrap">
              Ready to Build Your <span className="bg-gradient-to-r from-cyan-400 to-white bg-clip-text text-transparent">Dream Website?</span>
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
              Let's talk about your project and build a website that helps your business grow.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="tel:+919805871945"
                className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
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
