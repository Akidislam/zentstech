import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'
import ThemeToggle from './ThemeToggle'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-0 z-50 glass border-b border-accent/10 dark:border-accent/10 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="relative group">
            <span className="text-2xl font-bold glow-text">ZentsTech</span>
            <div className="absolute -bottom-2 left-0 w-0 h-1 bg-accent group-hover:w-full smooth-transition rounded-full"></div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="relative text-textMuted dark:text-textMuted hover:text-accent dark:hover:text-accent smooth-transition group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover:w-full smooth-transition"></span>
              </Link>
            ))}
          </div>

          {/* Right side: Theme toggle + CTA */}
          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            <button className="px-6 py-2 bg-accent hover:bg-accentDark dark:bg-accent dark:hover:bg-accentDark rounded-lg font-semibold text-white smooth-transition shadow-glow hover:shadow-glowLg transition-all duration-300">
              Get Started
            </button>
          </div>

          {/* Mobile: Menu + Theme toggle */}
          <div className="md:hidden flex items-center gap-3">
            <ThemeToggle />
            <button
              onClick={toggleMenu}
              className="text-accent hover:text-accentLight dark:text-accent dark:hover:text-accentLight smooth-transition"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? 'auto' : 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <div className="pb-4 border-t border-accent/10 dark:border-accent/10 space-y-2 bg-white dark:bg-secondary transition-colors duration-300">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="block py-2 px-2 text-textMuted dark:text-textMuted hover:text-accent dark:hover:text-accent smooth-transition"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <button className="w-full mt-4 px-4 py-2 bg-accent hover:bg-accentDark dark:bg-accent dark:hover:bg-accentDark rounded-lg font-semibold text-white smooth-transition transition-all duration-300">
              Get Started
            </button>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  )
}