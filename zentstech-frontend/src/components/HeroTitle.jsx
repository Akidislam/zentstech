import { motion } from 'framer-motion'

export default function HeroTitle() {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -8 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className="mb-6 cursor-pointer group relative"
    >
      {/* Premium glow background on hover */}
      <div className="absolute -inset-8 bg-gradient-to-r from-accent/20 via-accentLight/20 to-accent/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-2xl -z-10 group-hover:blur-3xl"></div>

      {/* Additional shimmer effect */}
      <div className="absolute -inset-8 bg-gradient-to-r from-transparent via-white/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>

      <h1 className="relative text-6xl md:text-7xl lg:text-8xl font-bold leading-tight transition-all duration-500 ease-out tracking-tight">
        {/* Main heading with smooth color transition */}
        <span className="block mb-4 bg-gradient-to-r from-lightText via-lightText to-lightTextMuted dark:from-white dark:via-white dark:to-accentLight bg-clip-text text-transparent group-hover:from-accent group-hover:via-accentLight group-hover:to-accent transition-all duration-500">
          Innovative IT Solutions
        </span>

        {/* Subtitle with vibrant gradient */}
        <span className="block bg-gradient-to-r from-accent via-accentLight to-accent bg-clip-text text-transparent group-hover:drop-shadow-2xl group-hover:shadow-glowXl transition-all duration-500">
          for Modern Business
        </span>
      </h1>

      {/* Decorative animated line */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        whileHover={{ scaleX: 1.3, opacity: 1 }}
        className="h-1 bg-gradient-to-r from-transparent via-accent to-transparent rounded-full mt-6 origin-center group-hover:shadow-glowLg transition-all duration-500"
      ></motion.div>
    </motion.div>
  )
}