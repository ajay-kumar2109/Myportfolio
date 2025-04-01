import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaMedium, FaEnvelope } from 'react-icons/fa';
import { BiCode, BiData, BiCloud, BiPackage, BiBarChartAlt2, BiTruck, BiTask } from 'react-icons/bi';
import { GiFactory, GiSupplyChain } from 'react-icons/gi';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-b from-gray-50 to-white pt-20">
      {/* Background Animation */}
      <motion.div
        className="absolute inset-0 opacity-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 2 }}
      >
        <GiSupplyChain size={300} className="absolute top-10 left-10 text-blue-300 animate-spin-slow" />
        <BiPackage size={250} className="absolute bottom-10 right-10 text-purple-300 animate-bounce-slow" />
      </motion.div>
      
      <div className="w-full max-w-6xl mx-auto px-4 flex flex-col items-center">
        {/* Social Icons */}
        <motion.div className="text-center mb-12" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="flex justify-center gap-8">
            {[
              { icon: <FaGithub size={35} />, url: 'https://github.com/ajay-kumar2109', color: 'hover:text-gray-800', label: 'GitHub' },
              { icon: <FaLinkedin size={35} />, url: 'https://www.linkedin.com/in/ajaykumarsurada/', color: 'hover:text-blue-600', label: 'LinkedIn' },
              { icon: <FaMedium size={35} />, url: 'https://medium.com/@ajaysurada123', color: 'hover:text-green-600', label: 'Medium' },
              { icon: <FaEnvelope size={35} />, url: 'mailto:ajaysurada21@gmail.com', color: 'hover:text-red-500', label: 'Email' }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-gray-600 transition-all duration-300 ${social.color} relative group`}
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                animate={{ opacity: 1, y: 0, transition: { delay: index * 0.1 } }}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Introduction */}
        <div className="text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
              Ajay Kumar Surada
            </h1>
          </motion.div>

          {/* Role Title */}
          <motion.div className="text-2xl md:text-3xl font-bold text-gray-700 mb-6" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <span>Optimizing Supply Chains</span>
              <span>📦</span>
              <span>Driving Efficiency</span>
              <span>⚡</span>
              <span>Seamless supply chain operations</span>
              <span>🛒</span>
            </div>
          </motion.div>

          {/* About Section */}
          <motion.p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
            <strong>Supply Chain Analyst</strong> with a passion for leveraging <strong>data analytics</strong> and <strong>process optimization</strong> to improve operational efficiency. 
            Experienced in <strong>demand forecasting</strong>, <strong>inventory management</strong>, <strong>logistics</strong>, and <strong>procurement</strong>. 
            Proficient in tools like <strong>Excel, SQL, Python, and Power BI</strong>.
          </motion.p>

          {/* Key Skills */}
          <motion.div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
            {[
              { skill: 'Supply Chain Analytics', icon: <BiBarChartAlt2 size={20} /> },
              { skill: 'Demand Planning & Forecasting', icon: <BiData size={20} /> },
              { skill: 'Inventory Optimization', icon: <BiPackage size={20} /> },
              { skill: 'Logistics & Transportation', icon: <BiTruck size={20} /> },
              { skill: 'Data Visualization & Reporting', icon: <BiCloud size={20} /> },
              { skill: 'ERP & SAP Systems', icon: <GiFactory size={20} /> },
              { skill: 'Process Improvement', icon: <BiTask size={20} /> }
            ].map((item, index) => (
              <motion.div key={index} className="flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm" whileHover={{ scale: 1.1 }}>
                {item.icon} {item.skill}
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div className="flex justify-center gap-4">
            <motion.a
              href="#contact"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium shadow-lg flex items-center gap-2 group"
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(88, 80, 236, 0.5)" }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Hire Me</span>
              <motion.span className="text-2xl" animate={{ rotate: [0, 14, -14, 0], scale: [1, 1.2, 1.2, 1] }} transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}>
                👋
              </motion.span>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
