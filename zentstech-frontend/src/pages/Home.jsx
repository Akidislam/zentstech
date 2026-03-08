import Hero from '../components/Hero'
import Features from '../components/Features'
import Testimonials from '../components/Testimonials'
import CTA from '../components/CTA'
import ServiceCard from '../components/ServiceCard'
import { motion } from 'framer-motion'
import {
  FiCode, FiSmartphone, FiGlobe, FiBox,
  FiLock, FiServer
} from 'react-icons/fi'

export default function Home() {
  const featuredServices = [
    { icon: FiCode, title: 'Web Development', description: 'Modern, responsive websites built with cutting-edge technologies' },
    { icon: FiSmartphone, title: 'Mobile Apps', description: 'High-performance mobile applications for iOS and Android' },
    { icon: FiGlobe, title: 'WordPress Sites', description: 'Fast, SEO-optimized WordPress websites for your business' },
    { icon: FiBox, title: '3D Design', description: 'Professional 3D building visualization and product designs' },
    { icon: FiLock, title: 'Web Security', description: 'Comprehensive security solutions and 24/7 support' },
    { icon: FiServer, title: 'Domain & Hosting', description: 'Reliable hosting and professional domain management' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <div>
      <Hero />

      {/* Featured Services Section with ID for scroll target */}
      <section
        id="featured-services"
        className="py-24 px-4 bg-white dark:bg-primary relative scroll-mt-20 transition-colors duration-300"
      >
        <div className="absolute inset-0 bg-gradient-radial from-accent/5 to-transparent"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-lightText dark:text-text transition-colors duration-300">
              Our <span className="glow-text">Featured Services</span>
            </h2>
            <p className="text-lg text-lightTextMuted dark:text-textMuted max-w-2xl mx-auto transition-colors duration-300">
              Explore our comprehensive suite of IT solutions designed to drive your business forward.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {featuredServices.map((service, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                }}
              >
                <ServiceCard {...service} />
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mt-16"
          >
            <a
              href="/services"
              className="inline-block px-8 py-3 border-2 border-accent text-accent hover:bg-accent hover:text-white dark:hover:text-dark font-bold rounded-lg smooth-transition transition-all duration-300"
            >
              View All Services
            </a>
          </motion.div>
        </div>
      </section>

      <Features />
      <Testimonials />
      <CTA />
    </div>
  )
}