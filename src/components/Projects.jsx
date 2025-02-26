import { useState } from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Sales Performance Dashboard",
    image: "https://fakeimg.pl/900x500/123456/ffffff?text=Sales+Dashboard",
    description: "Interactive dashboard analyzing sales trends and performance metrics.",
  },
  {
    title: "Customer Segmentation Analysis",
    image: "https://fakeimg.pl/900x500/654321/ffffff?text=Customer+Segmentation",
    description: "Data-driven insights into customer behavior using clustering techniques.",
  },
  {
    title: "Financial Forecasting Model",
    image: "https://fakeimg.pl/900x500/ff5733/ffffff?text=Financial+Forecasting",
    description: "Predictive analytics model for financial trends and budget planning.",
  },
  {
    title: "Marketing Campaign Insights",
    image: "https://fakeimg.pl/900x500/2e8b57/ffffff?text=Marketing+Insights",
    description: "Visual analysis of marketing campaigns and conversion rates.",
  },
  {
    title: "Website Traffic Analysis",
    image: "https://fakeimg.pl/900x500/008b8b/ffffff?text=Website+Traffic",
    description: "Real-time analytics for tracking user engagement on websites.",
  },
  {
    title: "Supply Chain Optimization",
    image: "https://fakeimg.pl/900x500/ffcc00/ffffff?text=Supply+Chain+Optimization",
    description: "Data visualization for supply chain efficiency and logistics improvement.",
  },
];

const Projects = () => {
  const [visibleCount, setVisibleCount] = useState(3);

  return (
    <section id="projects" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-gray-900 text-center mb-10"
        >
          Projects
        </motion.h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.slice(0, visibleCount).map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-100 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-transform transform hover:scale-105"
            >
              {/* Enlarged Image Section */}
              <div className="relative w-full h-[400px]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover rounded-t-2xl"
                />
              </div>

              {/* Project Details */}
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800">{project.title}</h3>
                <p className="text-gray-600 mt-2">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleCount < projects.length && (
          <div className="text-center mt-12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setVisibleCount(projects.length)}
              className="px-6 py-3 text-white bg-gradient-to-r from-blue-500 to-purple-500 
                         rounded-full text-lg font-medium shadow-lg hover:shadow-xl transition"
            >
              Load More
            </motion.button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
