import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaMedium, FaEnvelope } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-50 to-white pt-20 px-6 text-center">
      <motion.div 
        className="flex gap-6 mb-8"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {[{ icon: <FaGithub />, url: 'https://github.com/ajay-kumar2109' },
          { icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/ajaykumarsurada/' },
          { icon: <FaMedium />, url: 'https://medium.com/@ajaysurada123' },
          { icon: <FaEnvelope />, url: 'mailto:ajaysurada21@gmail.com' }
        ].map((social, index) => (
          <motion.a 
            key={index} 
            href={social.url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-600 text-2xl hover:text-blue-600 transition-transform duration-300"
            whileHover={{ scale: 1.1 }}
          >
            {social.icon}
          </motion.a>
        ))}
      </motion.div>

      <motion.h1 
        className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Ajay Kumar Surada
      </motion.h1>

      <motion.p 
        className="text-lg text-gray-600 max-w-xl mx-auto mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Supply Chain Analyst leveraging data analytics and process optimization to drive efficiency in inventory, logistics, and procurement.
      </motion.p>

      <motion.div 
        className="flex flex-wrap justify-center gap-3 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {["Global Supply Chain", "Demand Forecasting", "ERP & Inventory", "Data Analytics", "Lead Time Optimization"].map((skill, index) => (
          <motion.span 
            key={index} 
            className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm"
            whileHover={{ scale: 1.1 }}
          >
            {skill}
          </motion.span>
        ))}
      </motion.div>

      <motion.a 
        href="#contact" 
        className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg font-medium"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Hire Me
      </motion.a>
    </section>
  );
};

export default Hero;
