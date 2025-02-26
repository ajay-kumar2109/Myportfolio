import { useState } from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Sales Performance Dashboard",
    image: "https://fakeimg.pl/900x500/123456/ffffff?text=Sales+Dashboard",
    description: "Interactive dashboard analyzing sales trends and performance metrics.",
    url: "https://your-project-link.com/sales-dashboard",
  },
  {
    title: "Customer Segmentation Analysis",
    image: "https://fakeimg.pl/900x500/654321/ffffff?text=Customer+Segmentation",
    description: "Data-driven insights into customer behavior using clustering techniques.",
    url: "https://your-project-link.com/customer-segmentation",
  },
  {
    title: "Financial Forecasting Model",
    image: "https://fakeimg.pl/900x500/ff5733/ffffff?text=Financial+Forecasting",
    description: "Predictive analytics model for financial trends and budget planning.",
    url: "https://your-project-link.com/financial-forecasting",
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
            <motion.a
              key={index}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-gray-100 rounded-2xl shadow-lg overflow-hidden 
                        hover:shadow-xl transition-transform transform hover:scale-105"
            >
              {/* Full Image Visibility */}
              <div className="relative w-full h-auto">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto object-contain rounded-2xl"
                />
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 
                              flex flex-col items-center justify-center text-center px-6 transition-opacity duration-300">
                <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                <p className="text-gray-200 mt-2">{project.description}</p>
                <span className="mt-4 px-4 py-2 bg-blue-500 text-white text-sm rounded-lg">
                  View Project
                </span>
              </div>
            </motion.a>
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
