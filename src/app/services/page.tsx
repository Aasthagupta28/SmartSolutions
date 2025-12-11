'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Code, Smartphone, Brain, Palette, ArrowRight, CheckCircle, Star } from 'lucide-react'
import Link from 'next/link'
import { useRef, useEffect } from 'react'

export default function Services() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true
      videoRef.current.volume = 0
    }
  }, [])
  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Websites and web apps built with modern tech that actually works.',
      features: [
        'React & Next.js Applications',
        'Laravel & PHP Development',
        'WordPress Custom Development',
        'Shopify Store Development',
        'E-commerce Solutions',
        'API Development & Integration',
        'Backend Development',
        'Database Design & Optimization'
      ],
      technologies: ['React', 'Next.js', 'Laravel', 'PHP', 'WordPress', 'Shopify', 'Django', 'Python'],
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50',
      iconBg: 'bg-blue-500'
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Mobile apps that work great on both iPhone and Android.',
      features: [
        'React Native Development',
        'Flutter Applications',
        'iOS & Android Apps',
        'Cross-Platform Solutions',
        'App Store Optimization',
        'Push Notifications',
        'Mobile Backend Integration',
        'Progressive Web Apps (PWA)'
      ],
      technologies: ['React Native', 'Flutter', 'iOS', 'Android', 'Firebase', 'Node.js', 'Swift', 'Kotlin'],
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50',
      iconBg: 'bg-green-500'
    },
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      description: 'AI tools, machine learning models, and automation that actually make your life easier.',
      features: [
        'AI Chatbots & Virtual Assistants',
        'Machine Learning Model Development',
        'Deep Learning & Neural Networks',
        'Computer Vision Solutions',
        'Natural Language Processing (NLP)',
        'Predictive Analytics & Forecasting',
        'Recommendation Systems',
        'AI-Powered Data Insights'
      ],
      technologies: ['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenAI', 'LangChain', 'Pandas', 'NumPy'],
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50',
      iconBg: 'bg-purple-500'
    },
    {
      icon: Brain,
      title: 'Data & Analytics',
      description: 'Data solutions that make sense of your information. SQL databases, ETL processes, and insights you can actually use.',
      features: [
        'SQL Database Design & Optimization',
        'ETL (Extract, Transform, Load) Processes',
        'Data Warehousing Solutions',
        'Business Intelligence & Reporting',
        'Data Visualization & Dashboards',
        'Real-time Data Processing',
        'Database Migration & Maintenance',
        'Data Quality & Governance'
      ],
      technologies: ['SQL', 'PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Apache Airflow', 'Tableau', 'Power BI'],
      color: 'from-indigo-500 to-blue-500',
      bgColor: 'bg-indigo-50',
      iconBg: 'bg-indigo-500'
    },
    {
      icon: Palette,
      title: 'UI/UX & Digital Marketing',
      description: 'Designs that look good and marketing that gets results. Everything you need to grow online.',
      features: [
        'Figma UI/UX Design',
        'User Experience Optimization',
        'Brand Identity & Logo Design',
        'SEO & Content Marketing',
        'Social Media Management',
        'Google Analytics Setup',
        'Conversion Rate Optimization',
        'Digital Marketing Strategy'
      ],
      technologies: ['Figma', 'Adobe Creative Suite', 'Google Analytics', 'SEO Tools', 'Social Media APIs', 'Marketing Automation'],
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-50',
      iconBg: 'bg-orange-500'
    },
    {
      icon: Code,
      title: 'Backend Development',
      description: "Backend systems and APIs that scale with your business and don't break under pressure.",
      features: [
        'Django & Python Backend',
        'FastAPI Development',
        'RESTful API Development',
        'Database Design & Management',
        'Microservices Architecture',
        'Cloud Integration (AWS, Azure)',
        'Database Optimization',
        'Security Implementation'
      ],
      technologies: ['Django', 'FastAPI', 'Python', 'PostgreSQL', 'MongoDB', 'Redis', 'AWS', 'Docker'],
      color: 'from-indigo-500 to-purple-500',
      bgColor: 'bg-indigo-50',
      iconBg: 'bg-indigo-500'
    },
    {
      icon: Brain,
      title: 'Testing & Quality Assurance',
      description: 'Testing that catches bugs before your users do. Quality assurance that actually matters.',
      features: [
        'Automated Testing',
        'Manual Testing',
        'Performance Testing',
        'Security Testing',
        'API Testing',
        'Mobile App Testing',
        'Load Testing',
        'Quality Assurance'
      ],
      technologies: ['Selenium', 'Jest', 'Cypress', 'Postman', 'JMeter', 'TestRail', 'Bug Tracking'],
      color: 'from-teal-500 to-cyan-500',
      bgColor: 'bg-teal-50',
      iconBg: 'bg-teal-500'
    }
  ]

  const process = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'We sit down with you, ask questions, and figure out exactly what you need and why.'
    },
    {
      step: '02',
      title: 'Design & Prototyping',
      description: 'We sketch out ideas, show you mockups, and get your feedback before we start building.'
    },
    {
      step: '03',
      title: 'Development & Testing',
      description: 'We build your solution step by step, test as we go, and keep you updated on progress.'
    },
    {
      step: '04',
      title: 'Deployment & Support',
      description: 'We launch your project and stick around to help with updates, fixes, and new features.'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
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
            <source src="/video.mp4" type="video/mp4" />
          </video>
          {/* Dark Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-purple-900/70 to-slate-900/80"></div>
          {/* Additional overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 via-transparent to-pink-600/30"></div>
        </div>
        
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl lg:text-6xl font-poppins font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-aqua to-primary-400 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
              We build the tech your business needs. From websites to AI tools, we've got the skills and experience to make it happen.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`${service.bgColor} rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2`}
              >
                {/* Header */}
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`w-16 h-16 ${service.iconBg} rounded-2xl flex items-center justify-center`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-poppins font-bold text-navy">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-poppins font-semibold text-navy mb-4">What We Offer:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="font-poppins font-semibold text-navy mb-4">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-white/80 text-gray-700 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <Link
                  href="/contact"
                  className="inline-flex items-center bg-gradient-to-r from-navy to-aqua text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  <span>Get Quote</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
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
            <h2 className="text-4xl lg:text-5xl font-poppins font-bold text-navy mb-6">
              Our <span className="bg-gradient-to-r from-aqua to-primary-500 bg-clip-text text-transparent">Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A proven methodology that ensures your project is delivered on time, 
              within budget, and exceeds your expectations.
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
                  <div className="w-20 h-20 bg-gradient-to-r from-navy to-aqua rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">{step.step}</span>
                  </div>
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-1/2 w-full h-0.5 bg-gradient-to-r from-aqua to-primary-500"></div>
                  )}
                </div>
                <h3 className="text-xl font-poppins font-semibold text-navy mb-3">
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

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl lg:text-5xl font-poppins font-bold text-navy mb-6">
                Why Choose <span className="bg-gradient-to-r from-aqua to-primary-500 bg-clip-text text-transparent">Smart IT Core?</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                We combine technical expertise with business acumen to deliver solutions 
                that drive real results and transform your business.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-navy to-aqua rounded-xl flex items-center justify-center flex-shrink-0">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-poppins font-semibold text-navy mb-2">98% Client Satisfaction</h3>
                    <p className="text-gray-600">Our track record speaks for itself with consistently high client satisfaction ratings.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-aqua to-primary-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-poppins font-semibold text-navy mb-2">On-Time Delivery</h3>
                    <p className="text-gray-600">We understand the importance of deadlines and deliver projects on time, every time.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-poppins font-semibold text-navy mb-2">Innovation First</h3>
                    <p className="text-gray-600">We stay ahead of the curve with cutting-edge technologies and innovative solutions.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="relative w-24 h-24 mx-auto mb-4">
                    <Image
                      src="/logo2.png"
                      alt="SMART IT CORE SOLUTIONS Logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-2xl font-poppins font-bold text-navy mb-2">Ready to Start?</h3>
                  <p className="text-gray-600 mb-6">Let's discuss your project and create something amazing together.</p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center bg-gradient-to-r from-navy to-aqua text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
                  >
                    <span>Get Free Consultation</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}