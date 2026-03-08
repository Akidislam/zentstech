import { motion } from 'framer-motion'

export default function ServiceCard({ icon: Icon, title, description }) {
  return (
    <motion.div
      whileHover={{ y: -12, boxShadow: '0 0 40px rgba(37, 99, 235, 0.4)' }}
      className="relative group"
    >
      {/* Glow background */}
      <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 smooth-transition blur-xl"></div>

      {/* Card */}
      <div className="relative bg-white dark:bg-gradient-to-br dark:from-secondary/80 dark:to-tertiary/40 p-8 rounded-lg border border-gray-200 dark:border-accent/20 hover:border-accent/50 dark:hover:border-accent/50 smooth-transition shadow-cardLight dark:shadow-card overflow-hidden transition-all duration-300">
        {/* Icon container */}
        <motion.div
          className="text-accent mb-6 text-5xl"
          whileHover={{ scale: 1.2, rotate: 10 }}
          transition={{ duration: 0.3 }}
        >
          <Icon />
        </motion.div>

        {/* Content */}
        <h3 className="text-xl font-bold mb-3 text-lightText dark:text-text group-hover:text-accent smooth-transition transition-colors duration-300">
          {title}
        </h3>
        <p className="text-lightTextMuted dark:text-textMuted text-sm leading-relaxed transition-colors duration-300">
          {description}
        </p>

        {/* Bottom accent */}
        <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-accent to-accentLight group-hover:w-full smooth-transition"></div>
      </div>
    </motion.div>
  )
}