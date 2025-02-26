import { useState } from "react";
import { motion } from "framer-motion";

const allProjects = [
  {
    name: "Sales Dashboard",
    image: "/your-uploaded-path/sales-dashboard.png",
    description: "A Power BI dashboard for analyzing sales performance trends and revenue insights.",
    url: "https://your-project-link.com",
  },
  {
    name: "Customer Insights Dashboard",
    image: "/your-uploaded-path/customer-insights.png",
    description: "An interactive analytics tool to track customer behavior and improve engagement strategies.",
    url: "https://your-project-link.com",
  },
  {
    name: "Financial Report",
    image: "/your-uploaded-path/financial-report.png",
    description: "A real-time financial analytics dashboard with budgeting and forecasting tools.",
    url: "https://your-project-link.com",
  },
  {
    name: "Marketing Performance Tracker",
    image: "/your-uploaded-path/marketing-tracker.png",
    description: "A visual dashboard tracking marketing campaign performance across multiple channels.",
    url: "https://your-project-link.com",
  },
  {
    name: "E-commerce Sales Analysis",
    image: "/your-uploaded-path/ecommerce-sales.png",
    description: "An advanced dashboard analyzing e-commerce sales and customer trends.",
    url: "https://your-project-link.com",
  },
  {
    name: "Employee Productivity Tracker",
    image: "/your-uploaded-path/employee-productivity.png",
    description: "A performance dashboard that tracks employee efficiency and KPIs.",
    url: "https://your-project-link.com",
  },
];

const Projects = () => {
  const [visibleProjects, setVisibleProjects] = useState(4); // Show only 4 projects initially

  const loadMoreProjects = () => {
    setVisibleProjects((prev) => prev + 2); // Load 2 more projects on click
  };

  return (
    <section id="projects" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-gray-900 text-center mb-12"
        >
          Featured Projects
        </motion.h2>

        {/* Project Grid - 2 per row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {allProjects.slice(0, visibleProjects).map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              {/* Image Section */}
              <div className="w-full h-80 flex items-center justify-center bg-gray-200 rounded-3xl shadow-lg overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="max-w-full h-full object-contain p-4"
                />
              </div>

              {/* Project Details Below Image */}
              <h3 className="text-2xl font-semibold text-gray-900 mt-4">{project.name}</h3>
              <p className="text-gray-600 mt-2">{project.description}</p>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block text-lg font-medium text-blue-600 hover:text-blue-800 transition"
              >
                View Project →
              </a>
            </motion.div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleProjects < allProjects.length && (
          <div className="text-center mt-8">
            <button
              onClick={loadMoreProjects}
              className="bg-blue-600 text-white px-6 py-3 rounded-xl text-lg font-semibold hover:bg-blue-700 transition"
            >
              Load More Projects ↓
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
