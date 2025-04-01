import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaMedium, FaEnvelope } from 'react-icons/fa';
import { BiPackage, BiBarChartAlt2, BiTask } from 'react-icons/bi';
import { GiFactory, GiCargoShip } from 'react-icons/gi';

const Hero = () => {
    return (
        <div className="bg-white text-gray-900 min-h-screen flex flex-col items-center justify-center p-6">
            <motion.h1 
                initial={{ opacity: 0, y: -20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 1 }} 
                className="text-4xl font-bold text-center mb-4"
            >
                Supply Chain Analyst
            </motion.h1>
            <motion.p 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ delay: 0.5, duration: 1 }}
                className="text-lg text-center mb-6 max-w-2xl"
            >
                Passionate about leveraging data analytics and process optimization to improve operational efficiency. Experienced in demand forecasting, inventory management, logistics, and procurement, with expertise in tools like Excel, SQL, Python, and Power BI.
            </motion.p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
                {[
                    { icon: <BiBarChartAlt2 size={40} />, label: "Supply Chain Analytics" },
                    { icon: <GiFactory size={40} />, label: "Demand Planning & Forecasting" },
                    { icon: <BiPackage size={40} />, label: "Inventory Optimization" },
                    { icon: <GiCargoShip size={40} />, label: "Logistics & Transportation" },
                    { icon: <BiTask size={40} />, label: "Data Visualization & Reporting" },
                    { icon: <FaGithub size={40} />, label: "ERP & SAP Systems" },
                    { icon: <FaLinkedin size={40} />, label: "Process Improvement" },
                ].map((skill, index) => (
                    <motion.div 
                        key={index} 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2, duration: 0.5 }}
                        className="flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow-md hover:shadow-lg"
                    >
                        {skill.icon}
                        <p className="mt-2 font-semibold">{skill.label}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Hero;
