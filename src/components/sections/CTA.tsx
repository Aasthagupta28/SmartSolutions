'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, MessageCircle, Mail, Phone } from 'lucide-react'

const CTA = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Background Elements - New Design */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
            x: [0, 50, 0]
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-10 left-10 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl"
        ></motion.div>
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
            x: [0, -50, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
          className="absolute bottom-10 right-10 w-96 h-96 bg-pink-500/30 rounded-full blur-3xl"
        ></motion.div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djJoLTJ2LTJoMnptMCAwVjMyaDJ2MmgtMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Main CTA Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-2xl lg:text-3xl font-lato font-extrabold text-white mb-6 whitespace-nowrap">
              Ready to Transform{' '}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                Your Business?
              </span>
            </h2>
            
            <p className="text-xl lg:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Got a project in mind? Let's chat. We'll give you a free consultation to see if we're a good fit for what you're building.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-6 justify-center mb-12"
          >
            <Link
              href="/contact"
              className="group relative px-10 py-5 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-lg rounded-xl hover:from-purple-500 hover:to-pink-500 transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/50 flex items-center justify-center space-x-3 overflow-hidden"
            >
              <span className="relative z-10">Get Free Consultation</span>
              <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-2 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </Link>
            
            <Link
              href="/services"
              className="group px-10 py-5 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white font-bold text-lg rounded-xl hover:bg-white/20 hover:border-white/50 transition-all duration-300 hover:scale-110 flex items-center justify-center space-x-3"
            >
              <span>View Our Services</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>

          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            {/* WhatsApp */}
            <a
              href="https://wa.me/919805871945"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white/5 backdrop-blur-md border-2 border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-purple-400/50 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-purple-500/20"
            >
              <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-lato font-semibold text-white mb-2">WhatsApp</h3>
              <p className="text-gray-200 text-sm">Quick response via WhatsApp</p>
            </a>

            {/* Email */}
            <a
              href="mailto:info@smartitcoresolutions.com"
              className="group bg-white/5 backdrop-blur-md border-2 border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-purple-400/50 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-purple-500/20"
            >
              <div className="w-16 h-16 bg-aqua rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-lato font-semibold text-white mb-2">Email Us</h3>
              <p className="text-gray-200 text-sm">info@smartitcoresolutions.com</p>
            </a>

            {/* Phone */}
            <a
              href="tel:+919805871945"
              className="group bg-white/5 backdrop-blur-md border-2 border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-purple-400/50 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-purple-500/20"
            >
              <div className="w-16 h-16 bg-primary-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-lato font-semibold text-white mb-2">Call Us</h3>
              <p className="text-gray-200 text-sm">+91 9805871945</p>
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default CTA
