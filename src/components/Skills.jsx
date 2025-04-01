import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaDatabase, FaChartLine, FaTruck, FaWarehouse, FaBoxes } from 'react-icons/fa';
import { SiTableau, SiPowerbi, SiSap, SiOracle, SiExcel } from 'react-icons/si';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('supplyChain');

  const skillCategories = {
    supplyChain: {
      title: "Supply Chain Management",
      icon: "🚛",
      colorClass: "bg-blue-500",
      borderClass: "border-blue-500",
      iconClass: "text-blue-500",
      skills: [
        { name: "Logistics Optimization", icon: <FaTruck />, level: 90 },
        { name: "Inventory Management", icon: <FaWarehouse />, level: 85 },
        { name: "Procurement", icon: "🛒", level: 80 },
        { name: "Supply Planning", icon: "📦", level: 85 },
        { name: "Demand Forecasting", icon: "📊", level: 90 }
      ]
    },
    erpSystems: {
      title: "ERP & Systems",
      icon: "🔗",
      colorClass: "bg-purple-500",
      borderClass: "border-purple-500",
      iconClass: "text-purple-500",
      skills: [
        { name: "SAP", icon: <SiSap />, level: 85 },
        { name: "Oracle ERP", icon: <SiOracle />, level: 80 },
        { name: "Microsoft Dynamics", icon: "💼", level: 75 },
        { name: "NetSuite", icon: "🌐", level: 70 },
        { name: "Odoo", icon: "🔄", level: 75 }
      ]
    },
    dataAnalytics: {
      title: "Data & Analytics",
      icon: "📈",
      colorClass: "bg-green-500",
      borderClass: "border-green-500",
      iconClass: "text-green-500",
      skills: [
        { name: "Power BI", icon: <SiPowerbi />, level: 80 },
        { name: "Tableau", icon: <SiTableau />, level: 85 },
        { name: "Excel (Advanced)", icon: <SiExcel />, level: 90 },
        { name: "SQL", icon: <FaDatabase />, level: 85 },
        { name: "Python for Analytics", icon: "🐍", level: 75 }
      ]
    },
    inventory: {
      title: "Inventory & Warehousing",
      icon: "📦",
      colorClass: "bg-yellow-500",
      borderClass: "border-yellow-500",
      iconClass: "text-yellow-500",
      skills: [
        { name: "Warehouse Management", icon: <FaBoxes />, level: 90 },
        { name: "Inventory Optimization", icon: <FaWarehouse />, level: 85 },
        { name: "Stock Replenishment", icon: "🔄", level: 80 },
        { name: "FIFO/LIFO", icon: "📌", level: 75 },
        { name: "ABC Analysis", icon: "🅰️", level: 90 }
      ]
    }
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            <span className="font-mono text-blue-500">02.</span> Skills & Expertise
          </h2>
          <p className="text-xl text-gray-600">
            Key competencies in supply chain and analytics
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(skillCategories).map(([key, category]) => (
            <motion.button
              key={key}
              onClick={() => setActiveCategory(key)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-full flex items-center gap-2 transition-all duration-300
                border-2 shadow-sm hover:shadow-md
                ${activeCategory === key 
                  ? `${category.colorClass} text-white border-transparent` 
                  : `bg-white text-gray-700 ${category.borderClass} hover:bg-gray-50`}`}
            >
              <span className="text-xl">{category.icon}</span>
              {category.title}
            </motion.button>
          ))}
        </div>

        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="grid md:grid-cols-2 gap-6"
        >
          {skillCategories[activeCategory].skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white p-6 rounded-xl shadow-md border border-gray-100"
            >
              <div className="flex items-center gap-4 mb-4">
                <span className={`text-2xl ${skillCategories[activeCategory].iconClass}`}>
                  {typeof skill.icon === 'string' ? skill.icon : skill.icon}
                </span>
                <h3 className="font-semibold text-gray-900">{skill.name}</h3>
              </div>
              <div className="relative h-2 bg-gray-100 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className={`absolute h-full ${skillCategories[activeCategory].colorClass}`}
                />
              </div>
              <div className="mt-2 text-right">
                <span className={`text-sm font-medium ${skillCategories[activeCategory].iconClass}`}>
                  {skill.level}%
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

