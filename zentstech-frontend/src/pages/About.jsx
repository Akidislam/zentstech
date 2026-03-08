import { motion } from 'framer-motion'
import Arnob from '../assets/aboutus/arnob.jpg'
import Shafi from '../assets/aboutus/shafi.jpg'
import Akid from '../assets/aboutus/akid.jpg'
import Shakib from '../assets/aboutus/shakib.jpg'

export default function About() {
  const team = [
    { name: 'Emily Chen', role: 'Developer', description: 'Full-stack specialist with proven expertise' },
    { name: 'David Rodriguez', role: 'Operations Manager', description: 'Ensuring seamless project delivery' },
  ]

  return (
    <div className="bg-white dark:bg-primary min-h-screen py-24 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-6xl md:text-7xl font-bold mb-6 text-lightText dark:text-text transition-colors duration-300">
            About <span className="glow-text">ZentsTech</span>
          </h1>
          <p className="text-xl text-lightTextMuted dark:text-textMuted max-w-2xl mx-auto transition-colors duration-300">
            Pioneering IT solutions that empower businesses to achieve their digital transformation goals.
          </p>
        </motion.div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="group"
          >
            <div className="bg-gradient-to-br from-white dark:from-secondary/80 to-gray-50 dark:to-tertiary/40 p-10 rounded-lg border border-gray-200 dark:border-accent/20 hover:border-accent/50 smooth-transition shadow-cardLight dark:shadow-card h-full transition-all duration-300">
              <div className="text-accent text-5xl mb-6">👁️</div>
              <h2 className="text-3xl font-bold text-lightText dark:text-text mb-4 group-hover:text-accent smooth-transition transition-colors duration-300">Our Vision</h2>
              <p className="text-lightTextMuted dark:text-textMuted text-lg leading-relaxed transition-colors duration-300">
                To be the leading IT solutions provider, empowering businesses worldwide through innovative technology, exceptional service, and unwavering commitment to excellence.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="group"
          >
            <div className="bg-gradient-to-br from-white dark:from-secondary/80 to-gray-50 dark:to-tertiary/40 p-10 rounded-lg border border-gray-200 dark:border-accent/20 hover:border-accent/50 smooth-transition shadow-cardLight dark:shadow-card h-full transition-all duration-300">
              <div className="text-accent text-5xl mb-6">🎯</div>
              <h2 className="text-3xl font-bold text-lightText dark:text-text mb-4 group-hover:text-accent smooth-transition transition-colors duration-300">Our Mission</h2>
              <p className="text-lightTextMuted dark:text-textMuted text-lg leading-relaxed transition-colors duration-300">
                Deliver cutting-edge IT solutions that drive growth, efficiency, and digital transformation for our clients while maintaining the highest standards of quality and integrity.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-lightText dark:text-text mb-6 text-center transition-colors duration-300">
            Meet Our <span className="glow-text">Team</span>
          </h2>
          <p className="text-lg text-lightTextMuted dark:text-textMuted text-center mb-20 max-w-2xl mx-auto transition-colors duration-300">
            Experienced professionals dedicated to your success.
          </p>

          {/* Founder Section - CEO & Founder */}
          <div className="mb-20 pb-20 border-b border-gray-200 dark:border-accent/10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Founder Image */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className="flex justify-center md:justify-start group"
                >
                  <div className="relative">
                    {/* Background glow effect */}
                    <motion.div
                      animate={{
                        boxShadow: [
                          '0 0 20px rgba(37, 99, 235, 0.3)',
                          '0 0 40px rgba(37, 99, 235, 0.5)',
                          '0 0 20px rgba(37, 99, 235, 0.3)',
                        ],
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="absolute inset-0 bg-gradient-to-r from-accent to-accentLight rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl -z-10"
                    ></motion.div>

                    {/* Image container */}
                    <motion.img
                      src={Arnob}
                      alt="Arnob - CEO & Founder"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                      className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300"
                    />

                    {/* Corner accent badge */}
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      viewport={{ once: true }}
                      className="absolute -bottom-4 -right-4 bg-gradient-to-br from-accent to-accentLight text-white font-bold px-4 py-2 rounded-full shadow-xl"
                    >
                      CEO
                    </motion.div>
                  </div>
                </motion.div>

                {/* Founder Info */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="flex flex-col justify-center"
                >
                  <motion.div
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.3 }}
                    className="mb-4"
                  >
                    <span className="inline-block px-4 py-2 bg-accent/10 dark:bg-accent/20 text-accent rounded-full text-sm font-semibold mb-6 transition-colors duration-300">
                      Founder & CEO
                    </span>
                  </motion.div>

                  <h2 className="text-5xl md:text-6xl font-bold text-lightText dark:text-white mb-4 transition-colors duration-300">
                    Arnob
                  </h2>

                  <p className="text-xl font-semibold text-accent mb-6 transition-colors duration-300">
                    CEO & Founder of ZentsTech
                  </p>

                  <p className="text-lg text-lightTextMuted dark:text-textMuted leading-relaxed mb-6 transition-colors duration-300">
                    With over 15 years of experience in the IT industry, Arnob founded ZentsTech with a vision to revolutionize digital solutions. His leadership philosophy centers on innovation, client success, and building technology that makes a real impact.
                  </p>

                  <p className="text-lg text-lightTextMuted dark:text-textMuted leading-relaxed mb-8 transition-colors duration-300">
                    Under his strategic direction, ZentsTech has grown into a trusted partner for organizations worldwide. Arnob is passionate about driving digital transformation and helping businesses unlock their full potential through cutting-edge IT solutions.
                  </p>

                  {/* Key achievements */}
                  <div className="grid grid-cols-3 gap-4">
                    <motion.div
                      whileHover={{ y: -5 }}
                      transition={{ duration: 0.3 }}
                      className="bg-accent/10 dark:bg-accent/20 p-4 rounded-lg text-center transition-colors duration-300"
                    >
                      <p className="text-2xl font-bold text-accent">15+</p>
                      <p className="text-xs md:text-sm text-lightTextMuted dark:text-textMuted transition-colors duration-300">Years Experience</p>
                    </motion.div>
                    <motion.div
                      whileHover={{ y: -5 }}
                      transition={{ duration: 0.3 }}
                      className="bg-accent/10 dark:bg-accent/20 p-4 rounded-lg text-center transition-colors duration-300"
                    >
                      <p className="text-2xl font-bold text-accent">100+</p>
                      <p className="text-xs md:text-sm text-lightTextMuted dark:text-textMuted transition-colors duration-300">Clients Served</p>
                    </motion.div>
                    <motion.div
                      whileHover={{ y: -5 }}
                      transition={{ duration: 0.3 }}
                      className="bg-accent/10 dark:bg-accent/20 p-4 rounded-lg text-center transition-colors duration-300"
                    >
                      <p className="text-2xl font-bold text-accent">50+</p>
                      <p className="text-xs md:text-sm text-lightTextMuted dark:text-textMuted transition-colors duration-300">Projects Delivered</p>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* CTO Section - Mirza Shafi */}
          <div className="mb-20 pb-20 border-b border-gray-200 dark:border-accent/10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* CTO Image - Right side on desktop, top on mobile */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className="flex justify-center md:justify-end group order-2 md:order-2"
                >
                  <div className="relative">
                    {/* Background glow effect */}
                    <motion.div
                      animate={{
                        boxShadow: [
                          '0 0 20px rgba(37, 99, 235, 0.3)',
                          '0 0 40px rgba(37, 99, 235, 0.5)',
                          '0 0 20px rgba(37, 99, 235, 0.3)',
                        ],
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="absolute inset-0 bg-gradient-to-r from-accent to-accentLight rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl -z-10"
                    ></motion.div>

                    {/* Image container */}
                    <motion.img
                      src={Shafi}
                      alt="Mirza Shafi - CTO & Lead Developer"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                      className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300"
                    />

                    {/* Corner accent badge */}
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      viewport={{ once: true }}
                      className="absolute -bottom-4 -left-4 bg-gradient-to-br from-accent to-accentLight text-white font-bold px-4 py-2 rounded-full shadow-xl"
                    >
                      CTO
                    </motion.div>
                  </div>
                </motion.div>

                {/* CTO Info - Left side on desktop, below image on mobile */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="flex flex-col justify-center order-1 md:order-1"
                >
                  <motion.div
                    whileHover={{ x: -10 }}
                    transition={{ duration: 0.3 }}
                    className="mb-4"
                  >
                    <span className="inline-block px-4 py-2 bg-accent/10 dark:bg-accent/20 text-accent rounded-full text-sm font-semibold mb-6 transition-colors duration-300">
                      CTO & Lead Developer
                    </span>
                  </motion.div>

                  <h2 className="text-5xl md:text-6xl font-bold text-lightText dark:text-white mb-4 transition-colors duration-300">
                    Mirza Shafi
                  </h2>

                  <p className="text-xl font-semibold text-accent mb-6 transition-colors duration-300">
                    CTO & Lead Developer of ZentsTech
                  </p>

                  <p className="text-lg text-lightTextMuted dark:text-textMuted leading-relaxed mb-6 transition-colors duration-300">
                    As Chief Technology Officer, Mirza Shafi drives ZentsTech's technical innovation and development excellence. With deep expertise in full-stack development and cloud architecture, he ensures that every solution we deliver meets the highest standards of quality and scalability.
                  </p>

                  <p className="text-lg text-lightTextMuted dark:text-textMuted leading-relaxed mb-8 transition-colors duration-300">
                    Mirza's technical vision and hands-on leadership have been instrumental in building ZentsTech's robust development infrastructure. He is committed to fostering a culture of continuous learning and innovation within the engineering team.
                  </p>

                  {/* Key achievements */}
                  <div className="grid grid-cols-3 gap-4">
                    <motion.div
                      whileHover={{ y: -5 }}
                      transition={{ duration: 0.3 }}
                      className="bg-accent/10 dark:bg-accent/20 p-4 rounded-lg text-center transition-colors duration-300"
                    >
                      <p className="text-2xl font-bold text-accent">12+</p>
                      <p className="text-xs md:text-sm text-lightTextMuted dark:text-textMuted transition-colors duration-300">Years Development</p>
                    </motion.div>
                    <motion.div
                      whileHover={{ y: -5 }}
                      transition={{ duration: 0.3 }}
                      className="bg-accent/10 dark:bg-accent/20 p-4 rounded-lg text-center transition-colors duration-300"
                    >
                      <p className="text-2xl font-bold text-accent">80+</p>
                      <p className="text-xs md:text-sm text-lightTextMuted dark:text-textMuted transition-colors duration-300">Projects Built</p>
                    </motion.div>
                    <motion.div
                      whileHover={{ y: -5 }}
                      transition={{ duration: 0.3 }}
                      className="bg-accent/10 dark:bg-accent/20 p-4 rounded-lg text-center transition-colors duration-300"
                    >
                      <p className="text-2xl font-bold text-accent">50+</p>
                      <p className="text-xs md:text-sm text-lightTextMuted dark:text-textMuted transition-colors duration-300">Team Members Led</p>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Web Developer & DevOps Engineer Section - Akid */}
          <div className="mb-20 pb-20 border-b border-gray-200 dark:border-accent/10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Akid Image */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className="flex justify-center md:justify-start group"
                >
                  <div className="relative">
                    {/* Background glow effect */}
                    <motion.div
                      animate={{
                        boxShadow: [
                          '0 0 20px rgba(37, 99, 235, 0.3)',
                          '0 0 40px rgba(37, 99, 235, 0.5)',
                          '0 0 20px rgba(37, 99, 235, 0.3)',
                        ],
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="absolute inset-0 bg-gradient-to-r from-accent to-accentLight rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl -z-10"
                    ></motion.div>

                    {/* Image container */}
                    <motion.img
                      src={Akid}
                      alt="Akid - Web Developer & DevOps Engineer"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                      className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300"
                    />

                    {/* Corner accent badge */}
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      viewport={{ once: true }}
                      className="absolute -bottom-4 -right-4 bg-gradient-to-br from-accent to-accentLight text-white font-bold px-3 py-1 rounded-full shadow-xl text-sm"
                    >
                      DevOps
                    </motion.div>
                  </div>
                </motion.div>

                {/* Akid Info */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="flex flex-col justify-center"
                >
                  <motion.div
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.3 }}
                    className="mb-4"
                  >
                    <span className="inline-block px-4 py-2 bg-accent/10 dark:bg-accent/20 text-accent rounded-full text-sm font-semibold mb-6 transition-colors duration-300">
                      Web Developer & DevOps Engineer
                    </span>
                  </motion.div>

                  <h2 className="text-5xl md:text-6xl font-bold text-lightText dark:text-white mb-4 transition-colors duration-300">
                    Akid islam
                  </h2>

                  <p className="text-xl font-semibold text-accent mb-6 transition-colors duration-300">
                    Web Developer & DevOps Engineer at ZentsTech
                  </p>

                  <p className="text-lg text-lightTextMuted dark:text-textMuted leading-relaxed mb-6 transition-colors duration-300">
                    Akid is a versatile full-stack web developer and DevOps engineer with expertise in modern web technologies and cloud infrastructure. He specializes in building scalable applications and managing robust deployment pipelines that ensure optimal performance and reliability.
                  </p>

                  <p className="text-lg text-lightTextMuted dark:text-textMuted leading-relaxed mb-8 transition-colors duration-300">
                    With a strong foundation in both frontend and backend development, combined with DevOps proficiency, Akid bridges the gap between development and operations. His dedication to automation and continuous integration has significantly improved ZentsTech's development workflow and deployment efficiency.
                  </p>

                  {/* Key achievements */}
                  <div className="grid grid-cols-3 gap-4">
                    <motion.div
                      whileHover={{ y: -5 }}
                      transition={{ duration: 0.3 }}
                      className="bg-accent/10 dark:bg-accent/20 p-4 rounded-lg text-center transition-colors duration-300"
                    >
                      <p className="text-2xl font-bold text-accent">8+</p>
                      <p className="text-xs md:text-sm text-lightTextMuted dark:text-textMuted transition-colors duration-300">Years Experience</p>
                    </motion.div>
                    <motion.div
                      whileHover={{ y: -5 }}
                      transition={{ duration: 0.3 }}
                      className="bg-accent/10 dark:bg-accent/20 p-4 rounded-lg text-center transition-colors duration-300"
                    >
                      <p className="text-2xl font-bold text-accent">60+</p>
                      <p className="text-xs md:text-sm text-lightTextMuted dark:text-textMuted transition-colors duration-300">Deployments Managed</p>
                    </motion.div>
                    <motion.div
                      whileHover={{ y: -5 }}
                      transition={{ duration: 0.3 }}
                      className="bg-accent/10 dark:bg-accent/20 p-4 rounded-lg text-center transition-colors duration-300"
                    >
                      <p className="text-2xl font-bold text-accent">40+</p>
                      <p className="text-xs md:text-sm text-lightTextMuted dark:text-textMuted transition-colors duration-300">Web Applications</p>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Senior Web Developer Section - Shakib */}
          <div className="mb-20 pb-20 border-b border-gray-200 dark:border-accent/10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Shakib Image - Right side on desktop, top on mobile */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className="flex justify-center md:justify-end group order-2 md:order-2"
                >
                  <div className="relative">
                    {/* Background glow effect */}
                    <motion.div
                      animate={{
                        boxShadow: [
                          '0 0 20px rgba(37, 99, 235, 0.3)',
                          '0 0 40px rgba(37, 99, 235, 0.5)',
                          '0 0 20px rgba(37, 99, 235, 0.3)',
                        ],
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="absolute inset-0 bg-gradient-to-r from-accent to-accentLight rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl -z-10"
                    ></motion.div>

                    {/* Image container */}
                    <motion.img
                      src={Shakib}
                      alt="Shakib - Senior Web Developer"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                      className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300"
                    />

                    {/* Corner accent badge */}
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      viewport={{ once: true }}
                      className="absolute -bottom-4 -left-4 bg-gradient-to-br from-accent to-accentLight text-white font-bold px-4 py-2 rounded-full shadow-xl"
                    >
                      Senior Dev
                    </motion.div>
                  </div>
                </motion.div>

                {/* Shakib Info - Left side on desktop, below image on mobile */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="flex flex-col justify-center order-1 md:order-1"
                >
                  <motion.div
                    whileHover={{ x: -10 }}
                    transition={{ duration: 0.3 }}
                    className="mb-4"
                  >
                    <span className="inline-block px-4 py-2 bg-accent/10 dark:bg-accent/20 text-accent rounded-full text-sm font-semibold mb-6 transition-colors duration-300">
                      Senior Web Developer
                    </span>
                  </motion.div>

                  <h2 className="text-5xl md:text-6xl font-bold text-lightText dark:text-white mb-4 transition-colors duration-300">
                    Shakib Parvez khan
                  </h2>

                  <p className="text-xl font-semibold text-accent mb-6 transition-colors duration-300">
                    Senior Web Developer at ZentsTech
                  </p>

                  <p className="text-lg text-lightTextMuted dark:text-textMuted leading-relaxed mb-6 transition-colors duration-300">
                    As a Senior Web Developer, Shakib brings extensive expertise in modern frontend and backend technologies. With a keen eye for clean code architecture and user experience, he leads the development of complex web applications that serve millions of users with exceptional performance.
                  </p>

                  <p className="text-lg text-lightTextMuted dark:text-textMuted leading-relaxed mb-8 transition-colors duration-300">
                    Shakib's mentorship and technical leadership have been crucial in elevating ZentsTech's development standards. He is passionate about emerging technologies, best practices, and creating elegant solutions that solve real-world business problems.
                  </p>

                  {/* Key achievements */}
                  <div className="grid grid-cols-3 gap-4">
                    <motion.div
                      whileHover={{ y: -5 }}
                      transition={{ duration: 0.3 }}
                      className="bg-accent/10 dark:bg-accent/20 p-4 rounded-lg text-center transition-colors duration-300"
                    >
                      <p className="text-2xl font-bold text-accent">10+</p>
                      <p className="text-xs md:text-sm text-lightTextMuted dark:text-textMuted transition-colors duration-300">Years Web Dev</p>
                    </motion.div>
                    <motion.div
                      whileHover={{ y: -5 }}
                      transition={{ duration: 0.3 }}
                      className="bg-accent/10 dark:bg-accent/20 p-4 rounded-lg text-center transition-colors duration-300"
                    >
                      <p className="text-2xl font-bold text-accent">100+</p>
                      <p className="text-xs md:text-sm text-lightTextMuted dark:text-textMuted transition-colors duration-300">Projects Completed</p>
                    </motion.div>
                    <motion.div
                      whileHover={{ y: -5 }}
                      transition={{ duration: 0.3 }}
                      className="bg-accent/10 dark:bg-accent/20 p-4 rounded-lg text-center transition-colors duration-300"
                    >
                      <p className="text-2xl font-bold text-accent">30+</p>
                      <p className="text-xs md:text-sm text-lightTextMuted dark:text-textMuted transition-colors duration-300">Developers Mentored</p>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Other Team Members */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-lightText dark:text-text mb-12 text-center transition-colors duration-300">
              Extended Leadership Team
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className="group"
                >
                  <div className="bg-gradient-to-br from-white dark:from-secondary/80 to-gray-50 dark:to-tertiary/40 p-8 rounded-lg border border-gray-200 dark:border-accent/20 hover:border-accent/50 smooth-transition shadow-cardLight dark:shadow-card text-center transition-all duration-300">
                    {/* Avatar */}
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                      className="w-28 h-28 bg-gradient-to-br from-accent to-accentDark rounded-full mx-auto mb-6 flex items-center justify-center text-4xl font-bold text-white"
                    >
                      {member.name.charAt(0)}
                    </motion.div>

                    {/* Info */}
                    <h3 className="text-2xl font-bold text-lightText dark:text-text mb-2 group-hover:text-accent smooth-transition transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p className="text-accent font-semibold mb-3 transition-colors duration-300">{member.role}</p>
                    <p className="text-lightTextMuted dark:text-textMuted leading-relaxed transition-colors duration-300">
                      {member.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}