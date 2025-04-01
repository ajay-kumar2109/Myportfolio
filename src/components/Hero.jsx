import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { BiPackage, BiBarChartAlt2, BiTask } from "react-icons/bi";
import { GiFactory, GiCargoShip } from "react-icons/gi";
import { Button } from "@/components/ui/button";

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
    <section className="bg-white text-gray-900 p-8 md:p-16 flex flex-col md:flex-row items-center justify-between min-h-screen">
      <div className="max-w-2xl">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold leading-tight"
        >
          {"Your Name"} <br /> Supply Chain Analyst
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg text-gray-600 mt-4"
        >
          Passionate about leveraging data analytics and process optimization to enhance operational efficiency. Expertise in demand forecasting, inventory management, logistics, and procurement with tools like Excel, SQL, Python, and Power BI.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-6"
        >
          <Button className="bg-purple-600 text-white px-6 py-3 rounded-lg shadow-lg text-lg">
            Hire Me Now
          </Button>
        </motion.div>
      </div>

      {/* Skills Section */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-10 md:mt-0">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 * index }}
            className="bg-gray-100 p-4 rounded-xl shadow-md text-center text-sm font-semibold"
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
