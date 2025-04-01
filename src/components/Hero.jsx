import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaMedium, FaEnvelope, FaTruck } from 'react-icons/fa';
import { BiPackage, BiBarChartAlt2, BiTask } from 'react-icons/bi';
import { GiFactory, GiCargoShip } from 'react-icons/gi';

const Hero = () => {
  return (
    <section className="relative w-full h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-600 to-purple-500 text-white">
      <motion.div 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }} 
        className="text-center"
      >
        <h1 className="text-5xl font-bold">Supply Chain Analyst</h1>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          Passionate about leveraging data analytics and process optimization to improve operational efficiency. 
          Experienced in demand forecasting, inventory management, logistics, and procurement with expertise in 
          Excel, SQL, Python, and Power BI.
        </p>
      </motion.div>

      <motion.div 
        className="mt-10 flex space-x-6 text-3xl"
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 0.5, duration: 1 }}
      >
        <FaGithub className="hover:text-gray-300 cursor-pointer" />
        <FaLinkedin className="hover:text-gray-300 cursor-pointer" />
        <FaMedium className="hover:text-gray-300 cursor-pointer" />
        <FaEnvelope className="hover:text-gray-300 cursor-pointer" />
      </motion.div>

      <motion.div 
        className="absolute bottom-10 flex space-x-10 text-6xl opacity-20"
        animate={{ x: [0, 20, -20, 0] }} 
        transition={{ repeat: Infinity, duration: 5 }}
      >
        <GiFactory />
        <BiPackage />
        <FaTruck />
        <GiCargoShip />
        <BiBarChartAlt2 />
        <BiTask />
      </motion.div>
    </section>
  );
};

export default Hero;
