import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FiSun, FiMoon } from 'react-icons/fi'

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true)
  const [mounted, setMounted] = useState(false)

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

    // Determine initial theme
    const shouldBeDark = savedTheme ? savedTheme === 'dark' : prefersDark

    setIsDark(shouldBeDark)
    applyTheme(shouldBeDark)
    setMounted(true)
  }, [])

  // Apply theme to document
  const applyTheme = (dark) => {
    const htmlElement = document.documentElement

    if (dark) {
      htmlElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      htmlElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  // Toggle theme
  const toggleTheme = () => {
    const newTheme = !isDark
    setIsDark(newTheme)
    applyTheme(newTheme)
  }

  // Don't render until mounted to avoid hydration mismatch
  if (!mounted) {
    return (
      <div className="w-14 h-8 bg-gray-300 rounded-full animate-pulse"></div>
    )
  }

  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="relative inline-flex items-center justify-center w-14 h-8 bg-gray-300 dark:bg-slate-700 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 dark:focus:ring-offset-primary"
      aria-label="Toggle theme"
    >
      {/* Toggle slider */}
      <motion.div
        layout
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        className="absolute w-6 h-6 bg-white dark:bg-slate-800 rounded-full shadow-md"
        style={{
          left: isDark ? 'calc(100% - 26px)' : '2px',
        }}
      />

      {/* Icons */}
      <div className="relative w-full h-full flex items-center justify-between px-1.5 z-10">
        {/* Moon icon (left - dark mode) */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: isDark ? 1 : 0.5, 
            scale: isDark ? 1 : 0.8 
          }}
          transition={{ duration: 0.2 }}
          className="text-slate-600 dark:text-slate-300"
        >
          <FiMoon size={16} />
        </motion.div>

        {/* Sun icon (right - light mode) */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: !isDark ? 1 : 0.5, 
            scale: !isDark ? 1 : 0.8 
          }}
          transition={{ duration: 0.2 }}
          className="text-yellow-400 dark:text-slate-400"
        >
          <FiSun size={16} />
        </motion.div>
      </div>
    </motion.button>
  )
}