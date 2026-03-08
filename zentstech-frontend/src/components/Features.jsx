import { motion } from 'framer-motion'
import { FiZap, FiShield, FiTrendingUp } from 'react-icons/fi'

export default function Features() {
  const features = [
    { icon: FiZap, title: 'Fast & Efficient', description: 'Lightning-fast solutions optimized for peak performance and reliability.' },
    { icon: FiShield, title: 'Secure & Reliable', description: 'Enterprise-grade security protocols for complete peace of mind.' },
    { icon: FiTrendingUp, title: 'Scalable Growth', description: 'Solutions that evolve and grow seamlessly with your business.' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="py-24 px-4 bg-white dark:bg-primary relative overflow-hidden transition-colors duration-300">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-accent/5 to-transparent"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-lightText dark:text-text transition-colors duration-300">
            Why Choose <span className="glow-text">ZentsTech</span>
          </h2>
          <p className="text-lg text-lightTextMuted dark:text-textMuted max-w-2xl mx-auto transition-colors duration-300">
            We deliver excellence through innovation, reliability, and customer-centric solutions.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="bg-white dark:bg-gradient-to-br dark:from-secondary/60 dark:to-tertiary/40 p-8 rounded-lg border border-gray-200 dark:border-accent/20 hover:border-accent/50 dark:hover:border-accent/50 smooth-transition shadow-cardLight dark:shadow-card text-center transition-all duration-300">
                {/* Icon */}
                <motion.div
                  className="text-accent text-6xl mb-6 flex justify-center"
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <feature.icon />
                </motion.div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-4 text-lightText dark:text-text group-hover:text-accent smooth-transition transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-lightTextMuted dark:text-textMuted leading-relaxed transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}