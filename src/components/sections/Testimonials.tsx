'use client'

import { motion } from 'framer-motion'

export default function Testimonials() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-purple-50/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-r from-blue-50/50 to-transparent"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-2xl lg:text-3xl font-lato font-extrabold text-slate-900 mb-6 whitespace-nowrap">
            Excellence That <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Sets Us Apart</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            We pick the right tech for each project and build solutions that actually work for your business.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {[
            {
              title: 'Smart Solutions',
              description: 'We use AI and automation when it makes sense. Our goal is to save you time on repetitive tasks so you can focus on what matters.',
              icon: '🧠',
              gradient: 'from-purple-500 to-pink-500'
            },
            {
              title: 'Built to Grow',
              description: 'Your app won\'t slow down when you get more customers. We build systems that grow with your business.',
              icon: '📈',
              gradient: 'from-blue-500 to-cyan-500'
            },
            {
              title: 'Experienced Team',
              description: 'Our skilled developers bring years of expertise to every project. They know what works and what doesn\'t.',
              icon: '👥',
              gradient: 'from-pink-500 to-rose-500'
            },
            {
              title: 'Cloud-Based Solutions',
              description: 'Everything runs on the cloud, so your apps work fast and reliably from anywhere.',
              icon: '☁️',
              gradient: 'from-indigo-500 to-purple-500'
            },
            {
              title: 'Quick Turnaround',
              description: 'We work in sprints and show you progress regularly. Changes? No problem, we adapt quickly.',
              icon: '⚡',
              gradient: 'from-yellow-500 to-orange-500'
            },
            {
              title: 'Ongoing Support',
              description: 'We stick around after launch. Need updates or fixes? We\'re here to help.',
              icon: '🛠️',
              gradient: 'from-green-500 to-emerald-500'
            }
          ].map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30, rotateY: -10 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-2xl opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500`}></div>
              <div className="relative bg-white rounded-2xl p-8 border-2 border-slate-100 hover:border-purple-200 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-3">
                <div className="text-5xl mb-4 transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">{feature.icon}</div>
                <h3 className="text-xl font-lato font-extrabold text-slate-900 mb-3 group-hover:text-purple-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 rounded-3xl p-12 overflow-hidden"
        >
          <div className="absolute inset-0 opacity-30">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute top-0 right-0 w-64 h-64 bg-purple-500 rounded-full blur-3xl"
            ></motion.div>
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
              className="absolute bottom-0 left-0 w-64 h-64 bg-pink-500 rounded-full blur-3xl"
            ></motion.div>
          </div>
          
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '98%', label: 'Client Satisfaction Rate', color: 'from-purple-400 to-pink-400' },
              { number: '5+', label: 'Years of Excellence', color: 'from-blue-400 to-cyan-400' },
              { number: '24/7', label: 'Round-the-Clock Support', color: 'from-pink-400 to-rose-400' },
              { number: '100%', label: 'Quality Commitment', color: 'from-purple-400 to-indigo-400' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105"
              >
                <div className={`text-5xl font-extrabold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                  {stat.number}
                </div>
                <div className="text-gray-300 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

