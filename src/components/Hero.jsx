import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Hero = () => {
  const skills = [
    "Supply Chain Analytics",
    "Demand Planning & Forecasting",
    "Inventory Optimization",
    "Logistics & Transportation",
    "Data Visualization & Reporting",
    "ERP & SAP Systems",
    "Process Improvement",
  ];

  return (
    <section className="bg-white text-gray-900 px-4 py-8 md:px-8 md:py-16 flex flex-col md:flex-row items-center justify-between min-h-screen w-full">
      {/* Left Side - Intro */}
      <div className="max-w-2xl w-full text-center md:text-left">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight"
        >
          Ajay Kumar Surada <br className="md:hidden" /> 
          <span className="block mt-2 md:mt-0">Supply Chain Analyst</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-base sm:text-lg text-gray-600 mt-4"
        >
          Passionate about leveraging data analytics and process optimization to enhance operational efficiency. Expertise in demand forecasting, inventory management, logistics, and procurement with tools like Excel, SQL, Python, and Power BI.
        </motion.p>
      </div>

      {/* Right Side - Skills Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-10 md:mt-0 w-full md:w-auto">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 * index }}
            className="bg-gray-100 p-3 sm:p-4 rounded-xl shadow-md text-center text-xs sm:text-sm font-semibold"
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
