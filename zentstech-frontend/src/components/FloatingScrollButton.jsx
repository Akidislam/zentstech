import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaArrowUp } from 'react-icons/fa'

export default function FloatingScrollButton() {
  const [isVisible, setIsVisible] = useState(false)

  const SCROLL_THRESHOLD = 300

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY

      // Show button after scrolling more than 300px
      setIsVisible(scrollY > SCROLL_THRESHOLD)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          onClick={scrollToTop}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="fixed bottom-8 right-8 z-50 group"
          aria-label="Scroll to top"
        >
          {/* Main button container */}
          <div className="relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-accent to-accentDark hover:from-accentDark hover:to-accent text-white rounded-full shadow-glowLg hover:shadow-glow2xl transition-all duration-300 cursor-pointer overflow-hidden">
            {/* Background shine effect on hover */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20"
              animate={{ x: [-100, 100] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            ></motion.div>

            {/* Icon with animation */}
            <motion.div
              animate={{ y: [-2, 2, -2] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="flex items-center justify-center relative z-10"
            >
              <FaArrowUp size={24} className="md:w-6 md:h-6" />
            </motion.div>
          </div>

          {/* Animated pulse ring effect */}
          <motion.div
            animate={{ scale: [1, 1.3], opacity: [1, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 rounded-full border-2 border-accent"
          ></motion.div>

          {/* Animated glow background on hover */}
          <motion.div
            animate={{
              boxShadow: [
                '0 0 20px rgba(37, 99, 235, 0.3)',
                '0 0 40px rgba(37, 99, 235, 0.5)',
                '0 0 20px rgba(37, 99, 235, 0.3)',
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 bg-gradient-to-r from-accent to-accentLight rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg"
          ></motion.div>

          {/* Tooltip on hover */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileHover={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-full right-0 mb-4 px-3 py-2 bg-dark dark:bg-secondary text-white text-xs md:text-sm font-semibold rounded-lg shadow-lg whitespace-nowrap pointer-events-none"
          >
            Back to Top
            {/* Tooltip arrow */}
            <div className="absolute top-full right-4 w-2 h-2 bg-dark dark:bg-secondary transform rotate-45"></div>
          </motion.div>
        </motion.button>
      )}
    </AnimatePresence>
  )
}