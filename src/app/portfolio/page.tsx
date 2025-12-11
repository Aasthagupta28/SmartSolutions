'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, Star, Calendar, User, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { useRef, useEffect } from 'react'

export default function Portfolio() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true
      videoRef.current.volume = 0
    }
  }, [])
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with React, Django, and payment integration. Features include user authentication, product management, shopping cart, and secure payment processing.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Django', 'PostgreSQL', 'Stripe', 'AWS'],
      category: 'Web Development',
      client: 'TechStart Inc.',
      year: '2024',
      link: '#',
      github: '#',
      featured: true
    },
    {
      title: 'AI Customer Support Chatbot',
      description: 'Intelligent customer support chatbot powered by OpenAI GPT-4. Handles customer inquiries, provides product information, and escalates complex issues to human agents.',
      image: '/api/placeholder/600/400',
      technologies: ['OpenAI', 'Python', 'FastAPI', 'React', 'LangChain'],
      category: 'AI & Automation',
      client: 'SupportPro Solutions',
      year: '2024',
      link: '#',
      github: '#',
      featured: true
    },
    {
      title: 'Mobile Banking App',
      description: 'Secure mobile banking application with biometric authentication, real-time transactions, and comprehensive financial management features.',
      image: '/api/placeholder/600/400',
      technologies: ['React Native', 'Node.js', 'MongoDB', 'AWS', 'Biometric Auth'],
      category: 'Mobile Development',
      client: 'SecureBank',
      year: '2023',
      link: '#',
      github: '#',
      featured: false
    },
    {
      title: 'Data Analytics Dashboard',
      description: 'Real-time business intelligence dashboard with interactive charts, automated reports, and data visualization for enterprise clients.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'D3.js', 'Python', 'PostgreSQL', 'Docker'],
      category: 'Web Development',
      client: 'DataFlow Corp',
      year: '2023',
      link: '#',
      github: '#',
      featured: false
    },
    {
      title: 'Food Delivery App',
      description: 'Cross-platform food delivery application with real-time tracking, payment integration, and restaurant management system.',
      image: '/api/placeholder/600/400',
      technologies: ['Flutter', 'Firebase', 'Node.js', 'MongoDB', 'Google Maps'],
      category: 'Mobile Development',
      client: 'FoodieExpress',
      year: '2023',
      link: '#',
      github: '#',
      featured: false
    },
    {
      title: 'AI Content Generator',
      description: 'Automated content generation system using advanced NLP models. Creates blog posts, social media content, and marketing materials.',
      image: '/api/placeholder/600/400',
      technologies: ['OpenAI', 'Python', 'Django', 'React', 'Redis'],
      category: 'AI & Automation',
      client: 'ContentPro Agency',
      year: '2023',
      link: '#',
      github: '#',
      featured: false
    }
  ]

  const categories = ['All', 'Web Development', 'Mobile Development', 'AI & Automation', 'UI/UX Design']

  return (
    <div className="min-h-screen">
      {/* Hero Section - New Design with bg.png */}
      <section className="relative py-32 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <div 
            className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: 'url(/bg.png)' }}
          ></div>
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
            <h1 className="text-2xl lg:text-3xl xl:text-3xl font-lato font-extrabold text-white mb-8 whitespace-nowrap">
              Featured <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">Projects</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Here's what we've built. Real projects, real clients, real results. Take a look at the work we're proud of.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Categories - New Design */}
      <section className="py-10 bg-gradient-to-b from-slate-50 to-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-3 rounded-xl border-2 border-slate-200 text-slate-700 font-semibold hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 hover:text-white hover:border-transparent transition-all duration-300 hover:scale-110 hover:shadow-lg"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects - New Design */}
      <section className="py-24 bg-gradient-to-b from-white via-purple-50/30 to-white relative overflow-hidden">
        {/* Background Pattern */}
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
              Success Stories That
              <br />
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                Inspire Innovation
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Explore our most impactful projects that demonstrate our expertise in delivering 
              cutting-edge solutions across various industries.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20">
            {projects.filter(project => project.featured).map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50, rotateX: -10 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-white rounded-3xl overflow-hidden border-2 border-slate-200 hover:border-purple-300 shadow-xl hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 hover:-translate-y-4">
                  {/* Project Image - New Design */}
                  <div className="relative h-72 bg-gradient-to-br from-slate-100 via-purple-50 to-pink-50 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl flex items-center justify-center shadow-2xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                        <span className="text-5xl font-extrabold text-white">{project.title.charAt(0)}</span>
                      </div>
                    </div>
                    {/* Overlay on hover - New Design */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-900/90 to-pink-900/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-6">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center hover:scale-110 hover:rotate-6 transition-all duration-300 shadow-2xl"
                      >
                        <ExternalLink className="w-6 h-6 text-white" />
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center hover:bg-white/30 hover:scale-110 transition-all duration-300"
                      >
                        <Github className="w-6 h-6 text-white" />
                      </a>
                    </div>
                  </div>

                  {/* Project Content - New Design */}
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-5">
                      <span className="px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 text-sm font-bold rounded-xl border border-purple-200">
                        {project.category}
                      </span>
                      <div className="flex items-center space-x-2 bg-yellow-50 px-3 py-1.5 rounded-xl border border-yellow-200">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span className="text-yellow-700 text-sm font-bold">Featured</span>
                      </div>
                    </div>

                    <h3 className="text-xl lg:text-2xl font-lato font-extrabold text-slate-900 mb-4 group-hover:text-purple-600 transition-colors whitespace-nowrap">
                      {project.title}
                    </h3>

                    <p className="text-slate-600 mb-6 leading-relaxed text-base">
                      {project.description}
                    </p>

                    {/* Project Meta - New Design */}
                    <div className="flex items-center space-x-6 mb-6 text-sm">
                      <div className="flex items-center space-x-2 bg-slate-50 px-3 py-2 rounded-lg">
                        <User className="w-4 h-4 text-purple-600" />
                        <span className="text-slate-700 font-semibold">{project.client}</span>
                      </div>
                      <div className="flex items-center space-x-2 bg-slate-50 px-3 py-2 rounded-lg">
                        <Calendar className="w-4 h-4 text-pink-600" />
                        <span className="text-slate-700 font-semibold">{project.year}</span>
                      </div>
                    </div>

                    {/* Technologies - New Design */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 bg-slate-100 text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 hover:bg-purple-50 hover:border-purple-200 hover:text-purple-700 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons - New Design */}
                    <div className="flex space-x-3">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3.5 rounded-xl font-bold text-center hover:shadow-xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105"
                      >
                        View Project
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3.5 border-2 border-slate-200 text-slate-700 rounded-xl font-bold hover:bg-slate-50 hover:border-purple-300 transition-all duration-300"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Projects - New Design */}
      <section className="py-24 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
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
              All Our
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              A comprehensive showcase of innovative solutions across industries and cutting-edge technologies.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30, rotateY: -10 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-white rounded-2xl overflow-hidden border-2 border-slate-200 hover:border-purple-300 shadow-lg hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 hover:-translate-y-3">
                  {/* Project Image - New Design */}
                  <div className="relative h-56 bg-gradient-to-br from-slate-100 via-blue-50 to-purple-50 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                        <span className="text-4xl font-extrabold text-white">{project.title.charAt(0)}</span>
                      </div>
                    </div>
                    {/* Overlay on hover - New Design */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-900/90 to-pink-900/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center hover:scale-110 hover:rotate-6 transition-all duration-300 shadow-2xl"
                      >
                        <ExternalLink className="w-6 h-6 text-white" />
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center hover:bg-white/30 hover:scale-110 transition-all duration-300"
                      >
                        <Github className="w-6 h-6 text-white" />
                      </a>
                    </div>
                  </div>

                  {/* Project Content - New Design */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1.5 bg-gradient-to-r from-purple-50 to-pink-50 text-purple-700 text-xs font-bold rounded-lg border border-purple-200">
                        {project.category}
                      </span>
                      {project.featured && (
                        <div className="flex items-center space-x-1 bg-yellow-50 px-2 py-1 rounded-lg border border-yellow-200">
                          <Star className="w-3 h-3 text-yellow-500 fill-current" />
                          <span className="text-yellow-700 text-xs font-bold">Featured</span>
                        </div>
                      )}
                    </div>

                    <h3 className="text-xl font-lato font-extrabold text-slate-900 mb-3 group-hover:text-purple-600 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-slate-600 mb-4 leading-relaxed text-sm">
                      {project.description}
                    </p>

                    {/* Technologies - New Design */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 bg-slate-100 text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 hover:bg-purple-50 hover:border-purple-200 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2.5 py-1 bg-slate-100 text-slate-700 text-xs font-semibold rounded-lg border border-slate-200">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Project Meta - New Design */}
                    <div className="flex items-center justify-between text-xs mb-4">
                      <div className="flex items-center space-x-1.5 bg-slate-50 px-2 py-1 rounded-lg">
                        <User className="w-3.5 h-3.5 text-purple-600" />
                        <span className="text-slate-700 font-semibold">{project.client}</span>
                      </div>
                      <div className="flex items-center space-x-1.5 bg-slate-50 px-2 py-1 rounded-lg">
                        <Calendar className="w-3.5 h-3.5 text-pink-600" />
                        <span className="text-slate-700 font-semibold">{project.year}</span>
                      </div>
                    </div>

                    {/* Action Buttons - New Design */}
                    <div className="flex space-x-2">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2.5 rounded-xl font-bold text-center text-sm hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105"
                      >
                        View
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2.5 border-2 border-slate-200 text-slate-700 rounded-xl font-bold hover:bg-slate-50 hover:border-purple-300 transition-all duration-300"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - New Design */}
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
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl lg:text-3xl font-lato font-extrabold text-white mb-6 whitespace-nowrap">
              Ready to Build
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                Something Amazing?
              </span>
            </h2>
            <p className="text-xl lg:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Let's discuss your project and create something extraordinary together. 
              Get started with a free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
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
                className="px-10 py-5 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white font-bold text-lg rounded-xl hover:bg-white/20 hover:border-white/50 transition-all duration-300 hover:scale-110"
              >
                View Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
