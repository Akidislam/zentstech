import { useState } from 'react'
import { motion } from 'framer-motion'

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))

    setSubmitted(true)
    setLoading(false)
    setTimeout(() => setSubmitted(false), 4000)
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      onSubmit={handleSubmit}
      className="space-y-6 bg-white dark:bg-gradient-to-br dark:from-secondary/80 dark:to-tertiary/40 p-8 md:p-10 rounded-lg border border-gray-200 dark:border-accent/20 shadow-cardLight dark:shadow-card transition-all duration-300"
    >
      <div>
        <label className="block text-lightText dark:text-text font-semibold mb-3 transition-colors duration-300">Full Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full bg-gray-50 dark:bg-primary/50 border border-gray-200 dark:border-accent/30 rounded-lg px-4 py-3 text-lightText dark:text-text placeholder-lightTextMuted dark:placeholder-textMuted focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 smooth-transition transition-all duration-300"
          placeholder="Your name"
        />
      </div>

      <div>
        <label className="block text-lightText dark:text-text font-semibold mb-3 transition-colors duration-300">Email Address</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full bg-gray-50 dark:bg-primary/50 border border-gray-200 dark:border-accent/30 rounded-lg px-4 py-3 text-lightText dark:text-text placeholder-lightTextMuted dark:placeholder-textMuted focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 smooth-transition transition-all duration-300"
          placeholder="your@email.com"
        />
      </div>

      <div>
        <label className="block text-lightText dark:text-text font-semibold mb-3 transition-colors duration-300">Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows="6"
          className="w-full bg-gray-50 dark:bg-primary/50 border border-gray-200 dark:border-accent/30 rounded-lg px-4 py-3 text-lightText dark:text-text placeholder-lightTextMuted dark:placeholder-textMuted focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 smooth-transition resize-none transition-all duration-300"
          placeholder="Tell us about your project..."
        />
      </div>

      <motion.button
        type="submit"
        disabled={loading}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full bg-gradient-to-r from-accent to-accentDark hover:shadow-glowLg text-white font-bold py-3 rounded-lg smooth-transition shadow-glow disabled:opacity-50 transition-all duration-300"
      >
        {loading ? 'Sending...' : 'Send Message'}
      </motion.button>

      {submitted && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="p-4 bg-green-50 dark:bg-green-500/20 border border-green-200 dark:border-green-500/50 rounded-lg text-green-700 dark:text-green-300 text-center font-semibold transition-all duration-300"
        >
          ✓ Message sent successfully! We'll get back to you soon.
        </motion.div>
      )}
    </motion.form>
  )
}