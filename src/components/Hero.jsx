import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaMedium, FaEnvelope } from 'react-icons/fa';
import { BiPackage, BiBarChartAlt2, BiTask } from 'react-icons/bi';
import { GiFactory, GiCargoShip } from 'react-icons/gi';

const Hero = () => {
  return (
    <section className="bg-white text-gray-900 dark:bg-gray-900 dark:text-white py-20 flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold">Your Name</h1>
        <p className="mt-4 text-lg max-w-2xl">
          Supply Chain Analyst with a passion for leveraging data analytics and process optimization to improve operational efficiency. Experienced in demand forecasting, inventory management, logistics, and procurement, with expertise in tools like Excel, SQL, Python, and Power BI.
        </p>
      </motion.div>

      <motion.div
        className="flex flex-wrap justify-center gap-4 mt-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        {[
          'Supply Chain Analytics',
          'Demand Planning & Forecasting',
          'Inventory Optimization',
          'Logistics & Transportation',
          'Data Visualization & Reporting',
          'ERP & SAP Systems',
          'Process Improvement'
        ].map((skill, index) => (
          <motion.span
            key={index}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md"
            whileHover={{ scale: 1.1 }}
          >
            {skill}
          </motion.span>
        ))}
      </motion.div>
    </section>
  );
};

export default Hero;
