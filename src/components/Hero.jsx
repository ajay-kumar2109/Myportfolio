import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { BiTable, BiData, BiCode, BiBarChartAlt2 } from "react-icons/bi"; // Icons for tools

const Hero = () => {
  const skills = [
    "Supply Chain Analytics",
    "Demand Planning & Forecasting",
    "Inventory Optimization",
    "Logistics & Transportation",
    "Data Visualization & Reporting",
    "ERP & SAP Systems",
  ];

  const tools = [
    { name: "Excel", icon: <BiTable size={40} /> },
    { name: "SQL", icon: <BiData size={40} /> },
    { name: "Python", icon: <BiCode size={40} /> },
    { name: "Power BI", icon: <BiBarChartAlt2 size={40} /> },
  ];

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white px-4 py-12 md:py-20 flex flex-col items-center min-h-screen w-full">
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between">
        {/* Left Side - Intro */}
        <div className="max-w-lg w-full text-center md:text-left mb-12 md:mb-0">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight"
          >
            Ajay Kumar Surada
            <span className="block text-2xl sm:text-3xl md:text-4xl mt-2 text-gray-700">
              Supply Chain Analyst
            </span>
            <span className="block w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mt-4 mx-auto md:mx-0"></span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base sm:text-lg text-gray-600 mt-6"
          >
            Passionate about leveraging data analytics and process optimization to enhance operational efficiency. Expertise in demand forecasting, inventory management, logistics, and procurement.
          </motion.p>
          {/* Hire Me Now Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8"
          >
            <a
              href="#contact"
              className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium shadow-lg hover:from-blue-700 hover:to-purple-700 transition-all"
            >
              Hire Me Now
            </a>
          </motion.div>
        </div>

        {/* Right Side - Skills Cards (Floating Effect) */}
        <div className="relative w-full md:w-1/2 h-64 md:h-96">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8, x: 50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 * index }}
              className="absolute bg-white p-4 rounded-lg shadow-lg text-center text-sm font-semibold text-gray-800 border border-gray-200"
              style={{
                top: `${10 + (index % 3) * 30}%`,
                left: `${index % 2 === 0 ? 0 : 50}%`,
                transform: `translateX(${index % 2 === 0 ? '0' : '-50%'})`,
                width: "200px",
              }}
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Footer - Expertise in Tools & Technologies */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="mt-12 text-center w-full"
      >
        <p className="text-gray-500 text-sm mb-4">
          Expertise in Tools & Technologies
        </p>
        <div className="flex justify-center gap-8 sm:gap-12 flex-wrap">
          {tools.map((tool, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
              className="flex flex-col items-center"
            >
              <span className="text-gray-600">{tool.icon}</span>
              <span className="text-gray-700 text-sm mt-2">{tool.name}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
