import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiChevronDown } from 'react-icons/fi'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  // Scroll to services section
  const scrollToServices = () => {
    const servicesSection = document.getElementById("featured-services")
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <section className="relative min-h-screen bg-white dark:bg-gradient-to-b dark:from-secondary dark:to-primary flex items-center py-20 px-4 overflow-hidden transition-colors duration-300">
      {/* Background elements - Animated */}
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-20 left-10 w-96 h-96 bg-accent/10 dark:bg-accent/10 rounded-full blur-3xl"
      ></motion.div>
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity, delay: 1 }}
        className="absolute bottom-0 right-10 w-96 h-96 bg-accent/5 dark:bg-accent/5 rounded-full blur-3xl"
      ></motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto text-center relative z-10"
      >
        {/* Main Hero Heading with Container Hover Effect */}
        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.05, y: -8 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
          className="mb-6 cursor-pointer group relative"
        >
          {/* Glow background on hover */}
          <div className="absolute -inset-8 bg-gradient-to-r from-accent/20 to-accentLight/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl -z-10"></div>

          <h1 className="relative text-6xl md:text-7xl lg:text-8xl font-bold leading-tight transition-all duration-500 ease-out tracking-tight">
            {/* Main Title - Gradient Text */}
            <span className="block mb-4 bg-gradient-to-r from-lightText to-lightTextMuted dark:from-white dark:to-accentLight bg-clip-text text-transparent group-hover:from-accent group-hover:to-accentLight transition-all duration-500">
              Innovative IT Solutions
            </span>

            {/* Subtitle - Accent Gradient */}
            <span className="block bg-gradient-to-r from-accent via-accentLight to-accent bg-clip-text text-transparent group-hover:drop-shadow-2xl transition-all duration-500">
              for Modern Business
            </span>
          </h1>

          {/* Animated accent line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            whileHover={{ scaleX: 1.2 }}
            className="h-1 bg-gradient-to-r from-transparent via-accent to-transparent rounded-full mt-6 origin-center group-hover:shadow-glow transition-all duration-500"
          ></motion.div>
        </motion.div>

        {/* Tagline */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-lightTextMuted dark:text-textMuted mb-12 max-w-3xl mx-auto leading-relaxed transition-colors duration-300"
        >
          Transform your business with cutting-edge technology, expert IT services, and innovative solutions tailored to your needs.
        </motion.p>

        {/* CTA Buttons with enhanced animations */}
        <motion.div
          variants={itemVariants}
          className="flex gap-4 justify-center flex-wrap"
        >
          {/* Primary CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.8 }}
            whileHover={{ scale: 1.08, y: -6 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/services"
              className="relative inline-block px-8 py-4 bg-gradient-to-r from-accent to-accentDark text-white font-bold rounded-lg shadow-glow hover:shadow-glowLg transition-all duration-500 ease-out overflow-hidden group"
            >
              {/* Animated shine effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20"
                animate={{ x: [-100, 100] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              ></motion.div>
              <span className="relative z-10 flex items-center justify-center gap-2">
                Explore Services
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  →
                </motion.span>
              </span>
            </Link>
          </motion.div>

          {/* Secondary CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2 }}
            whileHover={{ scale: 1.08, y: -6 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/contact"
              className="relative inline-block px-8 py-4 border-2 border-accent text-accent hover:text-white dark:hover:text-dark font-bold rounded-lg transition-all duration-500 ease-out overflow-hidden group"
            >
              {/* Animated background fill */}
              <motion.div
                className="absolute inset-0 bg-accent"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                style={{ zIndex: -1 }}
              ></motion.div>
              <span className="relative z-10">Get Started</span>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll to Explore Button - Fixed Position Bottom Right */}
      <motion.button
        onClick={scrollToServices}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 2.5 }}
        whileHover={{ scale: 1.1, y: -4 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-8 right-8 md:bottom-12 md:right-12 z-40 group"
      >
        {/* Button container with glow */}
        <div className="relative">
          {/* Animated glow background */}
          <motion.div
            animate={{ 
              boxShadow: [
                "0 0 20px rgba(37, 99, 235, 0.3)",
                "0 0 40px rgba(37, 99, 235, 0.5)",
                "0 0 20px rgba(37, 99, 235, 0.3)"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 bg-gradient-to-r from-accent to-accentLight rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg"
          ></motion.div>

          {/* Main button */}
          <div className="relative flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r from-accent to-accentDark hover:from-accentDark hover:to-accent text-white rounded-full shadow-glowLg hover:shadow-glow2xl transition-all duration-300 cursor-pointer">
            {/* Icon animation */}
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="flex flex-col items-center justify-center"
            >
              <FiChevronDown size={28} className="md:w-8 md:h-8" />
            </motion.div>
          </div>

          {/* Pulse ring effect */}
          <motion.div
            animate={{ scale: [1, 1.3], opacity: [1, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 rounded-full border-2 border-accent"
          ></motion.div>

          {/* Tooltip */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileHover={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-full right-0 mb-4 px-4 py-2 bg-dark dark:bg-secondary text-white text-sm font-semibold rounded-lg shadow-lg whitespace-nowrap pointer-events-none"
          >
            Explore More
            {/* Tooltip arrow */}
            <div className="absolute top-full right-4 w-2 h-2 bg-dark dark:bg-secondary transform rotate-45"></div>
          </motion.div>
        </div>
      </motion.button>

      {/* Optional: Scroll indicator in the center bottom (hidden on small screens) */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 2.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden lg:flex flex-col items-center gap-2"
      >
        <span className="text-sm text-lightTextMuted dark:text-textMuted">Scroll to explore</span>
        <svg
          className="w-6 h-6 text-accent animate-pulse"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </motion.div>
    </section>
  )
}