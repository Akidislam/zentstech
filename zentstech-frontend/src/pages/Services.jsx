import { motion } from 'framer-motion'
import ServiceCard from '../components/ServiceCard'
import {
  FiCode, FiSmartphone, FiGlobe, FiBox, FiLock, FiServer,
  FiPenTool, FiCpu, FiTrendingUp, FiAward, FiFilm, FiVideo, FiLayout
} from 'react-icons/fi'

export default function Services() {
  const allServices = [
    { icon: FiCode, title: 'Web Development', description: 'Custom web applications with modern frameworks and best practices' },
    { icon: FiSmartphone, title: 'Android App Development', description: 'Native and cross-platform mobile applications' },
    { icon: FiGlobe, title: 'WordPress Website', description: 'Professional WordPress sites with SEO optimization' },
    { icon: FiBox, title: '3D Building Design', description: 'Architectural visualization and 3D modeling' },
    { icon: FiLock, title: 'Web Security Support', description: 'Comprehensive security audits and ongoing support' },
    { icon: FiServer, title: 'Domain & Hosting', description: 'Reliable hosting solutions and domain registration' },
    { icon: FiPenTool, title: 'Logo/Poster/Jersey Design', description: 'Creative graphic design for branding' },
    { icon: FiCpu, title: 'AI Automation Chatbot', description: 'Intelligent chatbots powered by AI' },
    { icon: FiTrendingUp, title: 'Digital Marketing & SEO', description: 'Boost visibility with modern marketing strategies' },
    { icon: FiAward, title: 'University Project Support', description: 'Expert assistance for academic projects' },
    { icon: FiFilm, title: 'Video Editing', description: 'Professional video production and editing' },
    { icon: FiVideo, title: 'AI Video Creation', description: 'Generate videos with AI technology' },
    { icon: FiLayout, title: 'UI/UX Design', description: 'Beautiful and user-friendly interface designs' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  return (
    <div className="bg-primary min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-6xl md:text-7xl font-bold mb-6 text-text">
            Our <span className="glow-text">Services</span>
          </h1>
          <p className="text-xl text-textMuted max-w-3xl mx-auto leading-relaxed">
            Comprehensive IT solutions tailored to meet the unique needs of your business. Choose from our extensive range of professional services.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {allServices.map((service, index) => (
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
      </div>
    </div>
  )
}