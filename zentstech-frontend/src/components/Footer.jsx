import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerSections = [
    {
      title: 'Company',
      links: [
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' },
      ],
    },
    {
      title: 'Services',
      links: [
        { name: 'Web Development' },
        { name: 'Mobile Apps' },
        { name: 'Digital Marketing' },
        { name: 'UI/UX Design' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy' },
        { name: 'Terms of Service' },
        { name: 'Cookie Policy' },
      ],
    },
  ]

  const socialLinks = [
    { icon: FaFacebook, href: '#' },
    { icon: FaTwitter, href: '#' },
    { icon: FaLinkedin, href: '#' },
    { icon: FaGithub, href: '#' },
  ]

  return (
    <footer className="bg-white dark:bg-dark border-t border-gray-200 dark:border-accent/10 py-16 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold glow-text mb-4">ZentsTech</h3>
            <p className="text-lightTextMuted dark:text-textMuted text-sm leading-relaxed transition-colors duration-300">
              Delivering innovative IT solutions for modern businesses worldwide.
            </p>
          </motion.div>

          {/* Sections */}
          {footerSections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h4 className="text-lg font-semibold text-lightText dark:text-text mb-4 transition-colors duration-300">{section.title}</h4>
              <div className="space-y-3">
                {section.links.map((link, i) => (
                  <a
                    key={i}
                    href={link.path || '#'}
                    className="text-lightTextMuted dark:text-textMuted hover:text-accent dark:hover:text-accent smooth-transition block transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 dark:border-accent/10 py-8 transition-colors duration-300"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-lightTextMuted dark:text-textMuted text-sm transition-colors duration-300"
          >
            © {currentYear} ZentsTech. All rights reserved.
          </motion.p>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex gap-6"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                whileHover={{ scale: 1.2, color: '#2563eb' }}
                className="text-lightTextMuted dark:text-textMuted hover:text-accent smooth-transition transition-colors duration-300"
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  )
}