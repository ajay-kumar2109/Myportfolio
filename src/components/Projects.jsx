import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const [visibleProjects, setVisibleProjects] = useState(4);
  
  const projects = [
    {
      title: "MLOps Pipeline using Apache Airflow",
      description: "Streamlines the process of analyzing screentime data by automating preprocessing and utilizing machine learning to predict app usage.",
      tags: ["Apache Airflow"],
      links: { github: "https://github.com/ajay-kumar2109/MLOps-Pipeline-using-Apache-Airflow/tree/main?tab=readme-ov-file#overview" },
      image: "https://raw.githubusercontent.com/ajay-kumar2109/MLOps-Pipeline-using-Apache-Airflow/main/dashboard.png"
    },
    {
      title: "Tableau Dashboards",
      description: "Created Tableau dashboards to analyze Employee Trends, Automotive Sales, and Call Center Performance.",
      tags: ["Tableau"],
      links: { github: "https://github.com/ajay-kumar2109/Employeedashboard" },
      image: "https://raw.githubusercontent.com/ajay-kumar2109/Employeedashboard/main/dashboard_preview.png"
    },
    {
      title: "Movielytics Data Engineering Projects",
      description: "Performs Extract, Transform, Load (ETL) on movie data to answer business-related questions about user behavior.",
      tags: ["Kaggle", "Amazon EC2", "Apache Airflow", "Amazon Redshift"],
      links: { github: "https://github.com/ajay-kumar2109/movielytics_dataEngineering_Full-project" },
      image: "https://raw.githubusercontent.com/ajay-kumar2109/movielytics_dataEngineering_Full-project/main/dashboard_preview.png"
    },
    // Add more projects here
  ];

  return (
    <section className="py-16 bg-gray-100 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Featured Projects</h2>
          <p className="text-md text-gray-600 max-w-2xl mx-auto">Here are some of my recent projects, showcasing technical skills and problem-solving abilities.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.slice(0, visibleProjects).map((project, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
              <div className="h-48 overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="px-2 py-1 bg-blue-100 text-blue-600 rounded-full text-xs font-medium">{tag}</span>
                  ))}
                </div>
                <motion.a href={project.links.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg text-sm hover:bg-gray-800 transition">
                  <FaGithub className="text-sm" /> View Code
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        {visibleProjects < projects.length && (
          <motion.div className="text-center mt-8">
            <button onClick={() => setVisibleProjects(visibleProjects + 4)} className="px-6 py-3 bg-blue-500 text-white rounded-full text-sm font-medium hover:bg-blue-600 transition">Load More</button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;
