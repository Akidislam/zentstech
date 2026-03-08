import { motion } from 'framer-motion'
import ContactForm from '../components/ContactForm'
import { FiMail, FiPhone, FiMapPin, FiClock } from 'react-icons/fi'

export default function Contact() {
  const contactInfo = [
    { icon: FiMapPin, label: 'Address', value: '123 Tech Street, Silicon Valley, CA 94025' },
    { icon: FiPhone, label: 'Phone', value: '+1 (555) 123-4567' },
    { icon: FiMail, label: 'Email', value: 'hello@zentstech.com' },
    { icon: FiClock, label: 'Hours', value: 'Mon - Fri: 9:00 AM - 6:00 PM EST' },
  ]

  return (
    <div className="bg-primary min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-6xl md:text-7xl font-bold mb-6 text-text">
            Get In <span className="glow-text">Touch</span>
          </h1>
          <p className="text-xl text-textMuted max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                whileHover={{ x: 10 }}
                className="flex gap-6 items-start group cursor-pointer"
              >
                <div className="text-accent text-4xl mt-2 group-hover:scale-110 smooth-transition">
                  <info.icon />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-text mb-2 group-hover:text-accent smooth-transition">
                    {info.label}
                  </h3>
                  <p className="text-textMuted text-lg">{info.value}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <ContactForm />
          </motion.div>
        </div>

        {/* Google Maps Embed */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-lg overflow-hidden border border-accent/20 shadow-card"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.2126537725406!2d-121.88601!3d37.3382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fcae773e99999%3A0x1234567890abcdef!2s123%20Tech%20Street%2C%20Silicon%20Valley%2C%20CA%2094025!5e0!3m2!1sen!2sus!4v1234567890"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="ZentsTech Location"
          ></iframe>
        </motion.div>
      </div>
    </div>
  )
}