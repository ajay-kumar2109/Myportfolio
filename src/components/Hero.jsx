import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaMedium, FaEnvelope } from 'react-icons/fa';
import { BiPackage, BiBarChartAlt2, BiTruck, BiTask } from 'react-icons/bi';
import { GiFactory, GiConveyorBelt } from 'react-icons/gi';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-b from-gray-50 to-white pt-20">
      <div className="w-full max-w-6xl mx-auto px-4 flex flex-col items-center">
        {/* Social Icons */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex justify-center gap-8">
            {[{ icon: <FaGithub size={35} />, url: 'https://github.com/ajay-kumar2109' },
              { icon: <FaLinkedin size={35} />, url: 'https://www.linkedin.com/in/ajaykumarsurada/' },
              { icon: <FaMedium size={35} />, url: 'https://medium.com/@ajaysurada123' },
              { icon: <FaEnvelope size={35} />, url: 'mailto:ajaysurada21@gmail.com' }].map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 transition-all duration-300 hover:scale-110"
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0, transition: { delay: index * 0.1 } }}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="text-center">
          {/* Name & Title */}
          <motion.h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}>
            Ajay Kumar Surada
          </motion.h1>
          <motion.p className="text-xl text-gray-600 mb-6 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}>
            Supply Chain Analyst with a passion for leveraging data analytics and process optimization to improve operational efficiency. Experienced in demand forecasting, inventory management, logistics, and procurement, with expertise in tools like Excel, SQL, Python, and Power BI.
          </motion.p>
          
          {/* Key Skills with Icons */}
          <motion.div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-gray-700 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}>
            {[{ icon: <GiConveyorBelt size={30} />, text: 'Supply Chain Analytics' },
              { icon: <BiBarChartAlt2 size={30} />, text: 'Demand Planning' },
              { icon: <BiPackage size={30} />, text: 'Inventory Optimization' },
              { icon: <BiTruck size={30} />, text: 'Logistics & Transportation' },
              { icon: <BiTask size={30} />, text: 'Process Improvement' },
              { icon: <GiFactory size={30} />, text: 'ERP & SAP Systems' }].map((skill, index) => (
              <motion.div key={index} className="flex items-center gap-3 bg-blue-100 p-4 rounded-lg shadow-sm"
                whileHover={{ scale: 1.1 }}>
                {skill.icon}
                <span className="text-lg font-medium">{skill.text}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Call-to-Action Button */}
          <motion.a
            href="#contact"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium shadow-lg hover:bg-blue-700"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}>
            Hire Me
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
