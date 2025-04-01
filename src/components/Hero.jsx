import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaMedium, FaEnvelope } from "react-icons/fa";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const skills = [
  "Supply Chain Analytics",
  "Demand Planning & Forecasting",
  "Inventory Optimization",
  "Logistics & Transportation",
  "Data Visualization & Reporting",
  "ERP & SAP Systems",
  "Process Improvement",
];

export default function Hero() {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between px-8 py-16 bg-white min-h-screen">
      {/* Left Side Content */}
      <div className="max-w-2xl text-center lg:text-left">
        <motion.h1 
          initial={{ opacity: 0, y: -50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-gray-900"
        >
          Hi, I'm <span className="text-indigo-600">[Your Name]</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, x: -50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 1 }}
          className="text-lg text-gray-600 mt-4"
        >
          A Supply Chain Analyst passionate about optimizing logistics, forecasting demand, and improving processes.
        </motion.p>
        {/* Social Icons */}
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1.2 }}
          className="flex gap-4 mt-6 justify-center lg:justify-start"
        >
          <a href="#" className="text-gray-600 hover:text-indigo-600 text-2xl"><FaGithub /></a>
          <a href="#" className="text-gray-600 hover:text-indigo-600 text-2xl"><FaLinkedin /></a>
          <a href="#" className="text-gray-600 hover:text-indigo-600 text-2xl"><FaMedium /></a>
          <a href="#" className="text-gray-600 hover:text-indigo-600 text-2xl"><FaEnvelope /></a>
        </motion.div>
        {/* Hire Me Button */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 1.2 }}
          className="mt-6"
        >
          <Button className="px-6 py-3 bg-indigo-600 text-white rounded-xl shadow-lg hover:bg-indigo-700">
            Hire Me Now
          </Button>
        </motion.div>
      </div>
      {/* Right Side - Skills as Cards */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 1 }}
        className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-10 lg:mt-0"
      >
        {skills.map((skill, index) => (
          <Card key={index} className="p-4 text-center shadow-md border border-gray-200 rounded-xl">
            <CardContent className="text-gray-800 font-semibold">{skill}</CardContent>
          </Card>
        ))}
      </motion.div>
    </section>
  );
}
