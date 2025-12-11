'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Target, Eye, Heart, Users, Award, Clock, Globe, Zap } from 'lucide-react'
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
    { number: '100+', label: 'Projects Delivered', icon: Users, gradient: 'from-purple-400 to-pink-400' },
    { number: '98%', label: 'Client Satisfaction', icon: Award, gradient: 'from-blue-400 to-cyan-400' },
    { number: '5+', label: 'Years Experience', icon: Clock, gradient: 'from-pink-400 to-rose-400' },
    { number: '24/7', label: 'Support Available', icon: Globe, gradient: 'from-purple-400 to-indigo-400' }
  ]

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
              About
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                SMART IT CORE SOLUTIONS
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              We're a team of developers and designers who build software that works. Websites, mobile apps, AI tools—we make the tech that helps businesses grow. Simple as that.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision - New Design */}
      <section className="py-24 bg-gradient-to-b from-white via-purple-50/30 to-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #000 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 border-2 border-slate-200 hover:border-purple-300 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <Eye className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-3xl font-poppins font-extrabold text-slate-900">Our Vision</h2>
              </div>
              <p className="text-lg text-slate-600 leading-relaxed">
                We want to be the go-to tech team when businesses need something built right. Our goal? Help companies grow with technology that makes sense, not headaches.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 border-2 border-slate-200 hover:border-purple-300 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <Target className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-3xl font-poppins font-extrabold text-slate-900">Our Mission</h2>
              </div>
              <p className="text-lg text-slate-600 leading-relaxed">
                We build software that solves actual problems. Website, mobile app, or AI tool—doesn't matter. We focus on making things that work and help your business win.
              </p>
            </motion.div>
          </div>
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
            <h2 className="text-5xl lg:text-6xl font-poppins font-extrabold text-slate-900 mb-6">
              Our
              <br />
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                Values
              </span>
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
                  <h3 className="text-xl font-poppins font-extrabold text-slate-900 mb-4 group-hover:text-purple-600 transition-colors">
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
            <h2 className="text-5xl lg:text-6xl font-poppins font-extrabold text-white mb-6">
              Our
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                Impact
              </span>
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
            <h2 className="text-5xl lg:text-6xl font-poppins font-extrabold text-white mb-6">
              Our
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                Expertise
              </span>
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
              <h3 className="text-3xl font-poppins font-extrabold text-white mb-4">Smart IT Core Solutions</h3>
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
                  <div className="text-3xl font-extrabold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-1">50+</div>
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
                <h4 className="text-xl font-poppins font-extrabold text-white mb-4">Expertise</h4>
                <div className="flex flex-wrap gap-2">
                  {['React', 'Django', 'Laravel', 'WordPress', 'Shopify', 'React Native', 'Python', 'AI/ML', 'SQL', 'ETL', 'SEO', 'Figma'].map((skill) => (
                    <span key={skill} className="px-3 py-1.5 bg-purple-500/20 text-purple-200 text-sm font-semibold rounded-lg border border-purple-400/30 hover:bg-purple-500/30 hover:border-purple-400/50 transition-all duration-300">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300">
                <h4 className="text-xl font-poppins font-extrabold text-white mb-4">Vision</h4>
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
            <h2 className="text-5xl lg:text-6xl font-poppins font-extrabold text-slate-900 mb-6">
              Why Choose
              <br />
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                Smart IT Core?
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              We combine technical expertise with business acumen to deliver solutions that drive real results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-start space-x-4 bg-white rounded-2xl p-6 border-2 border-slate-200 hover:border-purple-300 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Zap className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-poppins font-extrabold text-slate-900 mb-2">Cutting-Edge Technology</h3>
                  <p className="text-slate-600">We use the latest frameworks, tools, and methodologies to build future-proof solutions.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 bg-white rounded-2xl p-6 border-2 border-slate-200 hover:border-purple-300 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Users className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-poppins font-extrabold text-slate-900 mb-2">Expert Team</h3>
                  <p className="text-slate-600">Our experienced developers and designers bring years of expertise to every project.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 bg-white rounded-2xl p-6 border-2 border-slate-200 hover:border-purple-300 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-rose-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Award className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-poppins font-extrabold text-slate-900 mb-2">Proven Track Record</h3>
                  <p className="text-slate-600">98% client satisfaction rate with 50+ successful projects delivered on time and within budget.</p>
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
              <div className="bg-gradient-to-br from-slate-100 via-purple-50 to-pink-50 rounded-3xl p-8 h-96 flex items-center justify-center border-2 border-slate-200 shadow-xl">
                <div className="text-center">
                  <div className="relative w-32 h-32 mx-auto mb-4">
                    <Image
                      src="/logo2.png"
                      alt="SMART IT CORE SOLUTIONS Logo"
                      fill
                      className="object-contain drop-shadow-lg"
                    />
                  </div>
                  <h3 className="text-2xl font-poppins font-extrabold text-slate-900 mb-2">SMART IT CORE SOLUTIONS</h3>
                  <p className="text-slate-600 font-medium">Intelligent solutions for a smarter future</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
