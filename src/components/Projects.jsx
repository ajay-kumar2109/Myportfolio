import { motion } from 'framer-motion';
import { useState, useRef } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const [imageLoaded, setImageLoaded] = useState({});
  const projectsRef = useRef(null);

  const projects = [
    {
      title: "MLOps Pipeline using Apache Airflow",
      description: "Automated pipeline for analyzing screentime data and predicting app usage.",
      tags: ["Apache Airflow"],
      links: { github: "https://github.com/ajay-kumar2109/MLOps-Pipeline-using-Apache-Airflow" },
      image: "https://fakeimg.pl/600x400/456343/fffcfc?text=MLOps+Pipeline&font_size=40"
    },
    {
      title: "Tableau Dashboards",
      description: "Built dashboards to analyze Employee Trends, Automotive Sales, and Call Center Performance.",
      tags: ["Tableau"],
      links: { github: "https://github.com/ajay-kumar2109/Employeedashboard" },
      image: "https://fakeimg.pl/600x400/6e0808/ffffff?text=Tableau+Dashboards&font_size=64"
    },
    {
      title: "Movielytics Data Engineering",
      description: "ETL pipeline for movie data analysis using Apache Airflow and Amazon Redshift.",
      tags: ["Kaggle", "Amazon EC2", "Apache Airflow", "Amazon Redshift"],
      links: { github: "https://github.com/ajay-kumar2109/movielytics_dataEngineering_Full-project" },
      image: "https://fakeimg.pl/600x400/302222/f0ebeb?text=MovieLytics+ETL&font_size=35"
    }
  ];

  return (
    <section id="projects" ref={projectsRef} className="py-16 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Featured Projects</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">A selection of my recent projects showcasing technical expertise.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div key={project.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-48">
                <img src={project.image} alt={project.title} className={`w-full h-full object-cover transition-opacity duration-300 ${imageLoaded[project.title] ? 'opacity-100' : 'opacity-0'}`} onLoad={() => setImageLoaded(prev => ({ ...prev, [project.title]: true }))} />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (<span key={tag} className="px-2 py-1 bg-blue-100 text-blue-600 rounded-full text-xs font-medium">{tag}</span>))}
                </div>
                <motion.a href={project.links.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg text-sm hover:bg-gray-800 transition-colors" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <FaGithub className="text-sm" /> View Code
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mt-12">
          <motion.a href="https://github.com/ajay-kumar2109" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full text-sm font-medium hover:shadow-lg transition-shadow" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <span>View More Projects</span>
            <FaExternalLinkAlt className="text-sm" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
