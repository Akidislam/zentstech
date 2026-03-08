import { motion } from 'framer-motion'
import { FiStar } from 'react-icons/fi'

export default function Testimonials() {
  const testimonials = [
    {
      name: 'John Smith',
      company: 'TechCorp Inc',
      role: 'CEO',
      message: 'ZentsTech transformed our entire IT infrastructure. Their expertise and support are unmatched.',
      rating: 5,
    },
    {
      name: 'Sarah Johnson',
      company: 'Digital Ventures',
      role: 'CTO',
      message: 'Professional, responsive, and innovative. Best partnership decision we\'ve made.',
      rating: 5,
    },
    {
      name: 'Mike Davis',
      company: 'StartupXYZ',
      role: 'Founder',
      message: 'Exceptional service quality and customer support. They truly care about client success.',
      rating: 5,
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="py-24 px-4 bg-gray-50 dark:bg-secondary relative overflow-hidden transition-colors duration-300">
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-lightText dark:text-text transition-colors duration-300">
            What Our Clients <span className="glow-text">Say</span>
          </h2>
          <p className="text-lg text-lightTextMuted dark:text-textMuted max-w-2xl mx-auto transition-colors duration-300">
            Trusted by leading companies around the world.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="bg-white dark:bg-gradient-to-br dark:from-primary/80 dark:to-secondary/40 p-8 rounded-lg border border-gray-200 dark:border-accent/20 hover:border-accent/50 dark:hover:border-accent/50 smooth-transition shadow-cardLight dark:shadow-card h-full transition-all duration-300">
                {/* Rating */}
                <div className="flex text-accent mb-6 gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FiStar key={i} fill="currentColor" size={20} />
                  ))}
                </div>

                {/* Message */}
                <p className="text-lightTextMuted dark:text-textMuted mb-8 italic text-lg leading-relaxed transition-colors duration-300">
                  "{testimonial.message}"
                </p>

                {/* Author */}
                <div className="border-t border-gray-200 dark:border-accent/10 pt-6 transition-colors duration-300">
                  <p className="text-lightText dark:text-text font-bold text-lg transition-colors duration-300">{testimonial.name}</p>
                  <p className="text-accent font-semibold text-sm">{testimonial.role}</p>
                  <p className="text-lightTextMuted dark:text-textMuted text-sm transition-colors duration-300">{testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}