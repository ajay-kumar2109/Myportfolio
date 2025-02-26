import { useState } from "react";
import { motion } from "framer-motion";

const projects = [
  {
    name: "Sales Dashboard",
    image: "/your-uploaded-path/sales-dashboard.png",
    description: "A Power BI dashboard for analyzing sales performance.",
    url: "https://your-project-link.com",
  },
  {
    name: "Customer Insights Dashboard",
    image: "/your-uploaded-path/customer-insights.png",
    description: "An interactive dashboard to track customer behavior.",
    url: "https://your-project-link.com",
  },
  {
    name: "Financial Report",
    image: "/your-uploaded-path/financial-report.png",
    description: "A detailed financial analytics dashboard.",
    url: "https://your-project-link.com",
  },
];

const Projects = () => {
  const [visibleProjects, setVisibleProjects] = useState(3);
  
  return (
    <section id="projects" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-gray-900 text-center mb-10"
        >
          My Projects
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.slice(0, visibleProjects).map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative bg-gray-100 rounded-2xl shadow-xl p-4 flex flex-col items-center transition-transform transform hover:scale-105"
            >
              {/* Fixing image size so all thumbnails remain consistent */}
              <div className="w-full h-60 overflow-hidden flex items-center justify-center">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Hover Effect for Desktop */}
              <div className="hidden md:flex absolute inset-0 bg-white opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center p-4">
                <p className="text-gray-900 font-medium">{project.description}</p>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 text-blue-600 underline"
                >
                  View Project
                </a>
              </div>

              {/* Project name and URL always visible on mobile */}
              <div className="md:hidden text-center mt-4">
                <h3 className="text-xl font-semibold text-gray-900">{project.name}</h3>
                <p className="text-gray-600">{project.description}</p>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline mt-1 block"
                >
                  View Project
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleProjects < projects.length && (
          <div className="text-center mt-8">
            <button
              onClick={() => setVisibleProjects((prev) => prev + 3)}
              className="px-6 py-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
