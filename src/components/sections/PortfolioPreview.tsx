'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ExternalLink, Github, ArrowRight } from 'lucide-react'

const PortfolioPreview = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with React, Django, and payment integration.',
      image: '/api/placeholder/400/300',
      technologies: ['React', 'Django', 'Stripe', 'PostgreSQL'],
      category: 'Web Development',
      link: '#',
      github: '#'
    },
    {
      title: 'AI Chatbot Assistant',
      description: 'Intelligent customer support chatbot with natural language processing.',
      image: '/api/placeholder/400/300',
      technologies: ['OpenAI', 'Python', 'FastAPI', 'React'],
      category: 'AI & Automation',
      link: '#',
      github: '#'
    },
    {
      title: 'Mobile Banking App',
      description: 'Secure mobile banking application with biometric authentication.',
      image: '/api/placeholder/400/300',
      technologies: ['React Native', 'Node.js', 'MongoDB', 'AWS'],
      category: 'Mobile Development',
      link: '#',
      github: '#'
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-white via-purple-50/30 to-white relative overflow-hidden">
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
            Featured{' '}
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Here's what we've been working on. Real projects, real clients, real results.
          </p>
        </motion.div>

        {/* Projects Grid - New Design */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
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
                  </div>

                  <h3 className="text-xl font-lato font-extrabold text-slate-900 mb-3 group-hover:text-purple-600 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-slate-600 mb-4 leading-relaxed text-sm">
                    {project.description}
                  </p>

                  {/* Technologies - New Design */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 bg-slate-100 text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 hover:bg-purple-50 hover:border-purple-200 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            href="/portfolio"
            className="group relative inline-flex items-center bg-gradient-to-r from-purple-600 to-pink-600 text-white px-10 py-5 rounded-xl font-bold text-lg hover:shadow-xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-110 overflow-hidden"
          >
            <span className="relative z-10">View All Projects</span>
            <ArrowRight className="w-5 h-5 ml-3 relative z-10 group-hover:translate-x-2 transition-transform" />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default PortfolioPreview
