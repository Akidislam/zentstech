import { motion } from 'framer-motion'
import { FaCheckCircle, FaCircle } from 'react-icons/fa'

export default function Roadmap() {
  const companyRoadmap = [
    {
      phase: '01',
      title: 'Foundation',
      description: 'Starting ZentsTech and planning core services.',
      tags: ['Planning', 'Strategy', 'Setup'],
    },
    {
      phase: '02',
      title: 'Website Development',
      description: 'Building the official ZentsTech website.',
      tags: ['Web', 'Development', 'Design'],
    },
    {
      phase: '03',
      title: 'Service Launch',
      description: 'Launching services like Web Development, Android Apps, AI Automation.',
      tags: ['Web', 'Mobile', 'AI', 'Launch'],
    },
    {
      phase: '04',
      title: 'Client Acquisition',
      description: 'Running marketing campaigns and onboarding clients.',
      tags: ['Marketing', 'Sales', 'Growth'],
    },
    {
      phase: '05',
      title: 'Expansion',
      description: 'Expanding services and building SaaS tools.',
      tags: ['SaaS', 'Expansion', 'Innovation'],
    },
  ]

  const developmentProcess = [
    {
      step: '01',
      title: 'Planning',
      description: 'Understanding project scope and initial strategy.',
      tags: ['Agile', 'Planning', 'Strategy'],
    },
    {
      step: '02',
      title: 'Analysis',
      description: 'Gathering detailed requirements and feasibility analysis.',
      tags: ['Analysis', 'Requirements', 'Discovery'],
    },
    {
      step: '03',
      title: 'Design',
      description: 'Designing UI/UX and system architecture.',
      tags: ['Design', 'UI/UX', 'Architecture'],
    },
    {
      step: '04',
      title: 'Development',
      description: 'Building the application using modern technologies.',
      tags: ['Development', 'Coding', 'Technology'],
    },
    {
      step: '05',
      title: 'Testing',
      description: 'Debugging, QA testing and performance optimization.',
      tags: ['Testing', 'QA', 'Optimization'],
    },
    {
      step: '06',
      title: 'Deployment',
      description: 'Launching the application to production.',
      tags: ['Deployment', 'Production', 'Launch'],
    },
    {
      step: '07',
      title: 'Maintenance',
      description: 'Providing long-term updates, security patches and support.',
      tags: ['Maintenance', 'Support', 'Security'],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <div className="bg-white dark:bg-primary min-h-screen py-24 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <h1 className="text-6xl md:text-7xl font-bold mb-6 text-lightText dark:text-text transition-colors duration-300">
            Our <span className="glow-text">Roadmap</span>
          </h1>
          <p className="text-xl text-lightTextMuted dark:text-textMuted max-w-2xl mx-auto transition-colors duration-300">
            Discover how ZentsTech is growing and how we develop exceptional solutions for our clients.
          </p>
        </motion.div>

        {/* Section 1: Company Roadmap */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-lightText dark:text-text mb-6 text-center transition-colors duration-300">
            Company <span className="glow-text">Roadmap</span>
          </h2>
          <p className="text-lg text-lightTextMuted dark:text-textMuted text-center mb-20 max-w-2xl mx-auto transition-colors duration-300">
            Our journey of building ZentsTech into a leading IT solutions provider.
          </p>

          {/* Company Roadmap Timeline */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            {/* Vertical timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-accent via-accent to-transparent md:block hidden"></div>

            {/* Roadmap items */}
            <div className="space-y-12">
              {companyRoadmap.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`flex items-center gap-8 md:gap-12 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Content */}
                  <div className="flex-1">
                    <motion.div
                      whileHover={{ y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="group"
                    >
                      <div className="bg-gradient-to-br from-white dark:from-secondary/80 to-gray-50 dark:to-tertiary/40 p-8 rounded-xl border border-gray-200 dark:border-accent/20 hover:border-accent/50 shadow-cardLight dark:shadow-card hover:shadow-lg transition-all duration-300">
                        <div className="flex items-center gap-4 mb-4">
                          <span className="text-accent font-bold text-sm px-3 py-1 bg-accent/10 dark:bg-accent/20 rounded-full">
                            Phase {item.phase}
                          </span>
                        </div>

                        <h3 className="text-2xl md:text-3xl font-bold text-lightText dark:text-white mb-3 group-hover:text-accent transition-colors duration-300">
                          {item.title}
                        </h3>

                        <p className="text-lightTextMuted dark:text-textMuted text-lg mb-6 leading-relaxed transition-colors duration-300">
                          {item.description}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2">
                          {item.tags.map((tag, tagIndex) => (
                            <motion.span
                              key={tagIndex}
                              whileHover={{ scale: 1.05 }}
                              className="px-3 py-1 bg-accent/10 dark:bg-accent/20 text-accent rounded-full text-sm font-medium transition-colors duration-300"
                            >
                              {tag}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Timeline node */}
                  <div className="hidden md:flex flex-col items-center z-10">
                    <motion.div
                      whileHover={{ scale: 1.3 }}
                      transition={{ duration: 0.3 }}
                      className="relative"
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-accent to-accentDark rounded-full flex items-center justify-center cursor-pointer border-4 border-white dark:border-primary shadow-lg hover:shadow-glowLg transition-all duration-300">
                        <FaCheckCircle className="text-white text-xl" />
                      </div>
                      {/* Glow effect */}
                      <motion.div
                        animate={{
                          boxShadow: [
                            '0 0 20px rgba(37, 99, 235, 0.3)',
                            '0 0 40px rgba(37, 99, 235, 0.6)',
                            '0 0 20px rgba(37, 99, 235, 0.3)',
                          ],
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute inset-0 rounded-full"
                      ></motion.div>
                    </motion.div>
                  </div>

                  {/* Mobile timeline node */}
                  <div className="md:hidden flex flex-col items-center">
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      transition={{ duration: 0.3 }}
                      className="relative"
                    >
                      <div className="w-10 h-10 bg-gradient-to-br from-accent to-accentDark rounded-full flex items-center justify-center border-4 border-white dark:border-primary shadow-lg">
                        <FaCircle className="text-white text-sm" />
                      </div>
                    </motion.div>
                  </div>

                  {/* Empty space for alternating layout */}
                  <div className="hidden md:flex-1 md:block"></div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="h-1 bg-gradient-to-r from-transparent via-accent to-transparent mb-32"
        ></motion.div>

        {/* Section 2: Development Process */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-lightText dark:text-text mb-6 text-center transition-colors duration-300">
            Our <span className="glow-text">Development Process</span>
          </h2>
          <p className="text-lg text-lightTextMuted dark:text-textMuted text-center mb-20 max-w-2xl mx-auto transition-colors duration-300">
            How we deliver exceptional solutions using Agile SDLC methodology.
          </p>

          {/* Development Process Timeline */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            {/* Vertical timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-accent via-accentLight to-accent md:block hidden"></div>

            {/* Process steps */}
            <div className="space-y-12">
              {developmentProcess.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`flex items-center gap-8 md:gap-12 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Content */}
                  <div className="flex-1">
                    <motion.div
                      whileHover={{ y: -10, scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                      className="group"
                    >
                      <div className="bg-gradient-to-br from-white dark:from-secondary/80 to-gray-50 dark:to-tertiary/40 p-8 rounded-xl border border-gray-200 dark:border-accent/20 hover:border-accent/50 shadow-cardLight dark:shadow-card hover:shadow-lg transition-all duration-300">
                        <div className="flex items-center gap-4 mb-4">
                          <span className="text-accent font-bold text-sm px-3 py-1 bg-accent/10 dark:bg-accent/20 rounded-full">
                            Step {item.step}
                          </span>
                          <span className="text-xs font-semibold text-accentLight uppercase tracking-widest">
                            Agile Process
                          </span>
                        </div>

                        <h3 className="text-2xl md:text-3xl font-bold text-lightText dark:text-white mb-3 group-hover:text-accent transition-colors duration-300">
                          {item.title}
                        </h3>

                        <p className="text-lightTextMuted dark:text-textMuted text-lg mb-6 leading-relaxed transition-colors duration-300">
                          {item.description}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2">
                          {item.tags.map((tag, tagIndex) => (
                            <motion.span
                              key={tagIndex}
                              whileHover={{ scale: 1.05 }}
                              className="px-3 py-1 bg-accentLight/10 dark:bg-accentLight/20 text-accentLight rounded-full text-sm font-medium transition-colors duration-300"
                            >
                              {tag}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Timeline node */}
                  <div className="hidden md:flex flex-col items-center z-10">
                    <motion.div
                      whileHover={{ scale: 1.3, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="relative"
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-accentLight to-accent rounded-full flex items-center justify-center cursor-pointer border-4 border-white dark:border-primary shadow-lg hover:shadow-glow transition-all duration-300">
                        <span className="text-white font-bold text-lg">{item.step}</span>
                      </div>
                      {/* Glow effect */}
                      <motion.div
                        animate={{
                          boxShadow: [
                            '0 0 20px rgba(96, 165, 250, 0.3)',
                            '0 0 40px rgba(96, 165, 250, 0.6)',
                            '0 0 20px rgba(96, 165, 250, 0.3)',
                          ],
                        }}
                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.1 }}
                        className="absolute inset-0 rounded-full"
                      ></motion.div>
                    </motion.div>
                  </div>

                  {/* Mobile timeline node */}
                  <div className="md:hidden flex flex-col items-center">
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      transition={{ duration: 0.3 }}
                      className="relative"
                    >
                      <div className="w-10 h-10 bg-gradient-to-br from-accentLight to-accent rounded-full flex items-center justify-center border-4 border-white dark:border-primary shadow-lg">
                        <span className="text-white font-bold text-xs">{item.step}</span>
                      </div>
                    </motion.div>
                  </div>

                  {/* Empty space for alternating layout */}
                  <div className="hidden md:flex-1 md:block"></div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Process Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-24 p-12 bg-gradient-to-r from-accent/10 to-accentLight/10 dark:from-accent/20 dark:to-accentLight/20 rounded-xl border border-accent/20 dark:border-accent/30 text-center"
          >
            <h3 className="text-3xl font-bold text-lightText dark:text-white mb-4 transition-colors duration-300">
              Agile Methodology at ZentsTech
            </h3>
            <p className="text-lg text-lightTextMuted dark:text-textMuted max-w-2xl mx-auto transition-colors duration-300">
              We follow strict Agile principles to ensure flexibility, continuous improvement, and client satisfaction. Our iterative approach allows us to adapt to changes quickly and deliver value at every stage of development.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}