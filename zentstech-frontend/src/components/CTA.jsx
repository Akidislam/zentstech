import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function CTA() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="py-24 px-4 bg-gradient-to-r from-accent to-accentDark dark:from-accent dark:to-accentDark relative overflow-hidden transition-all duration-300"
    >
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center relative z-10"
      >
        <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white transition-colors duration-300">
          Ready to Transform Your Business?
        </h2>
        <p className="text-xl text-white/90 mb-10 leading-relaxed">
          Join thousands of companies trusting ZentsTech with their IT solutions. Let's build something extraordinary together.
        </p>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            to="/contact"
            className="inline-block bg-white dark:bg-dark hover:bg-gray-100 dark:hover:bg-primary text-accent font-bold px-10 py-4 rounded-lg smooth-transition shadow-2xl transition-all duration-300"
          >
            Start Your Project Today
          </Link>
        </motion.div>
      </motion.div>
    </motion.section>
  )
}