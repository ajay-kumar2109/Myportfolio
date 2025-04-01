import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaMedium, FaEnvelope } from 'react-icons/fa';
import { BiPackage, BiLineChart, BiStore, BiTimeFive } from 'react-icons/bi';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-50 to-white pt-20">
      <div className="w-full max-w-4xl mx-auto px-4 text-center">
        
        {/* Social Links */}
        <motion.div className="flex justify-center gap-6 mb-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          {[ 
            { icon: <FaGithub size={30} />, url: 'https://github.com/ajay-kumar2109' },
            { icon: <FaLinkedin size={30} />, url: 'https://www.linkedin.com/in/ajaykumarsurada/' },
            { icon: <FaMedium size={30} />, url: 'https://medium.com/@ajaysurada123' },
            { icon: <FaEnvelope size={30} />, url: 'mailto:ajaysurada21@gmail.com' }
          ].map((social, index) => (
            <motion.a key={index} href={social.url} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-all">
              {social.icon}
            </motion.a>
          ))}
        </motion.div>

        {/* Name & Title */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">Ajay Kumar Surada</h1>
          <p className="text-xl text-gray-700 mt-3">Supply Chain Analyst | Data-Driven Decision Maker</p>
        </motion.div>

        {/* Keywords with Icons */}
        <motion.div className="flex flex-wrap justify-center gap-4 mt-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          {[
            { text: 'Global Supply Chain', icon: <BiPackage size={20} /> },
            { text: 'Demand Forecasting', icon: <BiLineChart size={20} /> },
            { text: 'ERP & Inventory', icon: <BiStore size={20} /> },
            { text: 'Data Analytics', icon: <BiLineChart size={20} /> },
            { text: 'Lead Time Optimization', icon: <BiTimeFive size={20} /> }
          ].map((skill, index) => (
            <motion.div key={index} className="flex items-center gap-2 bg-blue-100 text-blue-600 px-3 py-2 rounded-full text-sm">
              {skill.icon}
              {skill.text}
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div className="mt-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <a href="#contact" className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-md hover:shadow-lg transition-all">
            Hire Me
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
