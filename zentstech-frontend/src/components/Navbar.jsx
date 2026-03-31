import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaBars, FaTimes } from 'react-icons/fa'
import { useState } from 'react'
import ThemeToggle from './ThemeToggle'
import Logo from '../assets/react.svg'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Roadmap', path: '/roadmap' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <nav className="fixed w-full bg-white dark:bg-secondary/95 dark:backdrop-blur-md z-40 shadow-lg dark:shadow-2xl transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-accent hover:text-accentLight transition-colors duration-300">
          <img src={Logo} alt="ZentsTech" className="w-8 h-8" />
          ZentsTech
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-lightText dark:text-text hover:text-accent dark:hover:text-accent transition-colors duration-300 font-medium"
            >
              {link.name}
            </Link>
          ))}
          <ThemeToggle />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-lightText dark:text-text text-2xl"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden bg-white dark:bg-primary border-t border-gray-200 dark:border-accent/20"
        >
          <div className="flex flex-col gap-4 p-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-lightText dark:text-text hover:text-accent transition-colors duration-300 font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  )
}