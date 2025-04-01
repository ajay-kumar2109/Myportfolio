import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { BiPackage, BiBarChartAlt2, BiTask } from 'react-icons/bi';
import { GiFactory, GiCargoShip } from 'react-icons/gi';

const Hero = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between p-10 bg-white min-h-screen">
      {/* Left Content */}
      <div className="max-w-2xl text-left">
        <motion.h1 
          className="text-5xl font-bold text-gray-900"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {"Your Name"} <br />
          <span className="text-indigo-600">Supply Chain Analyst</span>
        </motion.h1>
        <motion.p 
          className="text-lg text-gray-700 mt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Passionate about leveraging data analytics and process optimization to improve operational efficiency.
          Experienced in demand forecasting, inventory management, logistics, and procurement, with expertise in tools
          like Excel, SQL, Python, and Power BI.
        </motion.p>
        <motion.button 
          className="mt-6 px-6 py-3 bg-indigo-600 text-white rounded-xl text-lg font-medium hover:bg-indigo-700"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          Get Started →
        </motion.button>
      </div>
      
      {/* Right Content (Animated Cards) */}
      <motion.div 
        className="relative w-full lg:w-1/2 flex justify-center mt-10 lg:mt-0"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div className="absolute top-0 left-10 bg-indigo-100 p-4 rounded-lg shadow-md">
          <BiBarChartAlt2 className="text-indigo-600 text-4xl" />
          <p className="mt-2 text-gray-800 font-medium">Supply Chain Analytics</p>
        </div>
        <div className="absolute top-20 right-10 bg-yellow-100 p-4 rounded-lg shadow-md">
          <GiFactory className="text-yellow-600 text-4xl" />
          <p className="mt-2 text-gray-800 font-medium">Inventory Optimization</p>
        </div>
        <div className="absolute bottom-10 left-10 bg-green-100 p-4 rounded-lg shadow-md">
          <GiCargoShip className="text-green-600 text-4xl" />
          <p className="mt-2 text-gray-800 font-medium">Logistics & Transportation</p>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
