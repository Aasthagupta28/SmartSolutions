'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, MessageCircle, Send, CheckCircle } from 'lucide-react'
import { useState, useRef, useEffect } from 'react'

export default function Contact() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    budget: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: '',
        email: '',
        company: '',
        service: '',
        budget: '',
        message: ''
      })
    }, 3000)
  }

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      details: 'info@smartitcoresolutions.com',
      link: 'mailto:info@smartitcoresolutions.com'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: '+91 9805871945',
      link: 'tel:+919805871945'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      details: 'Quick response via WhatsApp',
      link: 'https://wa.me/919805871945'
    },
    {
      icon: MapPin,
      title: 'Location',
      details: 'Global Remote Team',
      link: '#'
    }
  ]

  const services = [
    'Web Development (React, Laravel, WordPress, Shopify)',
    'Mobile Development (React Native, Flutter)',
    'AI & Machine Learning (Chatbots, ML Models)',
    'Data & Analytics (SQL, ETL, BI)',
    'Backend Development (Django, FastAPI)',
    'UI/UX Design (Figma)',
    'SEO & Digital Marketing',
    'Testing & Quality Assurance',
    'Consulting'
  ]

  const budgets = [
    'Under $5,000',
    '$5,000 - $15,000',
    '$15,000 - $50,000',
    '$50,000 - $100,000',
    'Over $100,000'
  ]

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true
      videoRef.current.volume = 0
    }
  }, [])

  return (
    <div className="min-h-screen">
      {/* Hero Section - New Design */}
      <section className="relative py-32 overflow-hidden">
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
          <motion.div
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.15, 0.25, 0.15],
              x: [0, 100, 0]
            }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute top-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
          ></motion.div>
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.15, 0.25, 0.15],
              x: [0, -100, 0]
            }}
            transition={{ duration: 12, repeat: Infinity, delay: 1 }}
            className="absolute bottom-0 left-0 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl"
          ></motion.div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <h1 className="text-5xl lg:text-7xl xl:text-8xl font-poppins font-extrabold text-white mb-8">
              Get In
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                Touch
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Got a project in mind? Let's talk. We'll figure out what you need and how we can help make it happen.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info - New Design */}
      <section className="py-24 bg-gradient-to-b from-white via-purple-50/30 to-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #000 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form - New Design */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 shadow-xl border-2 border-slate-200 hover:border-purple-300 transition-all duration-300"
            >
              <h2 className="text-3xl font-poppins font-extrabold text-slate-900 mb-6">
                Send us a Message
              </h2>
              
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <CheckCircle className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-poppins font-extrabold text-slate-900 mb-2">
                    Message Sent!</h3>
                  <p className="text-slate-600">
                    Thank you for your message. We'll get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-semibold text-slate-700 mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300"
                        placeholder="Your company name"
                      />
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-sm font-semibold text-slate-700 mb-2">
                        Service Needed
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300"
                      >
                        <option value="">Select a service</option>
                        {services.map((service) => (
                          <option key={service} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="budget" className="block text-sm font-semibold text-slate-700 mb-2">
                      Project Budget
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300"
                    >
                      <option value="">Select budget range</option>
                      {budgets.map((budget) => (
                        <option key={budget} value={budget}>{budget}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
                      Project Details *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                        className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300"
                      placeholder="Tell us about your project, goals, and any specific requirements..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-poppins font-extrabold text-slate-900 mb-6">
                  Get in Touch
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed mb-8">
                  We're here to help you transform your business with cutting-edge technology. 
                  Reach out to us through any of the channels below.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.title}
                    href={info.link}
                    target={info.link.startsWith('http') ? '_blank' : '_self'}
                    rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group flex items-center space-x-4 p-6 bg-white rounded-2xl border-2 border-slate-200 hover:border-purple-300 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                  >
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg ${
                      index === 0 ? 'bg-gradient-to-br from-purple-500 to-pink-500' :
                      index === 1 ? 'bg-gradient-to-br from-blue-500 to-cyan-500' :
                      index === 2 ? 'bg-gradient-to-br from-green-500 to-emerald-500' :
                      'bg-gradient-to-br from-pink-500 to-rose-500'
                    }`}>
                      <info.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="font-poppins font-extrabold text-slate-900 mb-1 group-hover:text-purple-600 transition-colors">
                        {info.title}
                      </h3>
                      <p className="text-slate-600">{info.details}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Quick Response Promise - New Design */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 rounded-2xl p-6 text-white border-2 border-purple-500/30"
              >
                <h3 className="text-xl font-poppins font-extrabold mb-4">
                  Quick Response Promise
                </h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-medium">Response within 24 hours</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-medium">Free consultation call</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-pink-500 rounded-lg flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-medium">No obligation quote</span>
                  </li>
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section - New Design */}
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
            <h2 className="text-5xl lg:text-6xl font-poppins font-extrabold text-slate-900 mb-6">
              Frequently Asked
              <br />
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Got questions? We've got answers. Here are some common questions 
              about our services and process.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                question: "How long does a typical project take?",
                answer: "Project timelines vary based on complexity. Simple websites take 2-4 weeks, while complex applications can take 2-6 months. We provide detailed timelines during consultation."
              },
              {
                question: "Do you provide ongoing support?",
                answer: "Yes! We offer comprehensive maintenance and support packages to keep your project running smoothly after launch."
              },
              {
                question: "What technologies do you use?",
                answer: "We use modern technologies like React, Next.js, Django, Python, React Native, Flutter, and various AI/ML frameworks depending on project requirements."
              },
              {
                question: "Can you work with our existing team?",
                answer: "Absolutely! We can integrate with your existing development team or work independently, whichever works best for your project."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, rotateY: -10 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 border-2 border-slate-200 hover:border-purple-300 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <h3 className="text-lg font-poppins font-extrabold text-slate-900 mb-3 group-hover:text-purple-600 transition-colors">
                  {faq.question}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
