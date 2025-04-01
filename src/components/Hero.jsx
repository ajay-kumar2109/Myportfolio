import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaMedium, FaEnvelope } from 'react-icons/fa';
import { BiCode, BiData, BiCloud, BiCart, BiPackage, BiLineChart } from 'react-icons/bi';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-b from-gray-50 to-white pt-20">
      <div className="w-full max-w-6xl mx-auto px-4 flex flex-col items-center">
        {/* Social Icons */}
        <motion.div 
          className="text-center mb-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex justify-center gap-6">
            {[ 
              { icon: <FaGithub size={30} />, url: 'https://github.com/ajay-kumar2109' },
              { icon: <FaLinkedin size={30} />, url: 'https://www.linkedin.com/in/ajaykumarsurada/' },
              { icon: <FaMedium size={30} />, url: 'https://medium.com/@ajaysurada123' },
              { icon: <FaEnvelope size={30} />, url: 'mailto:ajaysurada21@gmail.com' }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 transition-all duration-300 hover:text-blue-600"
                whileHover={{ scale: 1.2 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="text-center">
          {/* Greeting and Name */}
          <motion.h1
            className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Ajay Kumar Surada
          </motion.h1>

          {/* Role Title */}
          <motion.div
            className="text-2xl font-semibold text-gray-700 mb-6 flex items-center justify-center gap-3 flex-wrap"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <BiPackage className="text-blue-600 text-3xl" /> Supply Chain Optimization
            <BiLineChart className="text-purple-600 text-3xl" /> Data-Driven Decisions
            <BiCart className="text-green-600 text-3xl" /> Streamlined Logistics
          </motion.div>

          {/* Tagline */}
          <motion.p
            className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            Supply Chain Analyst passionate about leveraging <strong>data analytics</strong> and <strong>process optimization</strong> to enhance operational efficiency. Skilled in <strong>forecasting, inventory management, logistics, and procurement</strong> using tools like <strong>Excel, SQL, Python, and Power BI</strong>.
          </motion.p>

          {/* Skills */}
          <motion.div
            className="flex justify-center gap-4 mb-8 flex-wrap"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            {[ 
              { label: 'Global Supply Chain', icon: <BiGlobe className="text-blue-600 text-xl" /> },
              { label: 'Demand Forecasting', icon: <BiLineChart className="text-purple-600 text-xl" /> },
              { label: 'ERP & Inventory', icon: <BiPackage className="text-green-600 text-xl" /> },
              { label: 'Data Analytics', icon: <BiData className="text-blue-600 text-xl" /> }
            ].map((skill, index) => (
              <motion.span
                key={index}
                className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm flex items-center gap-2"
                whileHover={{ scale: 1.1 }}
              >
                {skill.icon} {skill.label}
              </motion.span>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.a
            href="#contact"
            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium shadow-lg flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Hire Me 👋
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
