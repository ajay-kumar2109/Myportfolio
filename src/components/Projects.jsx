import { useState } from "react";
import { motion } from "framer-motion";

const allProjects = [
    {
      title: "MLOps Pipeline using Apache Airflow: Overview",
      description: "The goal of this pipeline is to streamline the process of analyzing screentime data by automating its preprocessing and utilizing machine learning to predict app usage.",
      tags: ["Apache Airflow"],
      links: {
        github: "https://github.com/ajay-kumar2109/MLOps-Pipeline-using-Apache-Airflow/tree/main?tab=readme-ov-file#overview",
      },
      image: "/certificates/airflow.png"
    },
    {
      title: "Tableau Dashboards",
      description: "I created Tableau dashboards to analyze: 1. Employee Trends 2. Automotive Sales 3. Call Center Performance",
      tags: ["Tableau"],
      links: {
        github: "https://github.com/ajay-kumar2109/Employeedashboard",
      },
      image: "/certificates/dashboard.png"
    },
        {
      title: "Movielytics Data Engineering Projects",
      description: "The aim of this project, is to perform Extract, Transform, Load, on movies data, to answer questions the business may have about its users",
      tags: ["Kaggle", "Amazon Ec2", "Apache Airflow", "Amazon Redshift"],
      links: {
        github: "https://github.com/ajay-kumar2109/movielytics_dataEngineering_Full-project",
      },
      image: "/certificates/movie.png"
    },
    {
      title: "Retail Sales",
      description: "Real-time dashboard for monitoring ETL processes with live data streaming and interactive visualizations.",
      tags: ["React", "Node.js", "Apache Kafka", "D3.js"],
      links: {
        github: "https://github.com/ajay-kumar2109/retailSales",
      },
      image: "/certificates/sales1.png"
    },
    {
      title: "Amazon Sales Analysis",
      description: "The Amazon Sales Analysis project is a Python-based data analysis endeavor aimed at exploring and understanding sales data obtained from Amazon. ",
      tags: [],
      links: {
        github: "https://github.com/ajay-kumar2109/Sales_Analysis_Amazon",
      },
      image: "/certificates/amazon.png"
    },
    {
      title: "healthcare-provider-fraud-detection",
      description: "Automated CI/CD pipeline tool with custom workflows and cloud integrations.",
      tags: [],
      links: {
        github: "https://github.com/ajay-kumar2109/healthcare-provider-fraud-detection",
      },
      image: "/certificates/healthcare.png"
    },
    {
      title: "8-week-sql-coding-challenge",
      description: "Advanced analytics platform with real-time data processing and visualization.",
      tags: ["PostgreSQL"],
      links: {
        github: "https://github.com/ajay-kumar2109/8-week-sql-coding-challenge",
      },
      image: "https://fakeimg.pl/600x400/041317/ffffff?text=8+week+sql&font=bebas&font_size=55"
    },
    {
      title: "Credit_Card_Report_Analysis",
      description: "Comprehensive blockchain explorer with transaction tracking and smart contract analysis.",
      tags: [],
      links: {
        github: "https://github.com/ajay-kumar2109/Credit_Card_Report_Analysis",
      },
      image: "https://fakeimg.pl/600x400/454682/ffffff?text=Credit+Card&font=bebas"
    },
    {
      title: "Toronto-real-estate Analysis",
      description: "Intelligent code completion and suggestion system using machine learning.",
      tags: [],
      links: {
        github: "https://github.com/ajay-kumar2109/Toronto-real-estate",
      },
      image: "https://fakeimg.pl/600x400/32636e/ffffff?text=Toronto-real-estate&font=bebas&font_size=55"
    }
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
              className="bg-white shadow-lg rounded-3xl overflow-hidden transform transition-all hover:scale-105"
            >
              {/* Image Section */}
              <div className="w-full h-80 flex items-center justify-center bg-gray-200">
                <img
                  src={project.image}
                  alt={project.name}
                  className="max-w-full h-full object-contain p-4"
                />
              </div>

              {/* Project Details */}
              <div className="p-6 text-center">
                <h3 className="text-2xl font-semibold text-gray-900">{project.name}</h3>
                <p className="text-gray-600 mt-2">{project.description}</p>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-lg font-medium text-blue-600 hover:text-blue-800 transition"
                >
                  View Project →
                </a>
              </div>
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
