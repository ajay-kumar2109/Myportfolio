import { motion } from 'framer-motion';
import { useState, useRef } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const [imageLoaded, setImageLoaded] = useState({});
  const projectsRef = useRef(null);

  const projects = [
        {
      title: "MLOps Pipeline using Apache Airflow: Overview",
      description: "The goal of this pipeline is to streamline the process of analyzing screentime data by automating its preprocessing and utilizing machine learning to predict app usage.",
      tags: ["Apache Airflow"],
      links: {
        github: "https://github.com/ajay-kumar2109/MLOps-Pipeline-using-Apache-Airflow/tree/main?tab=readme-ov-file#overview",
      },
      image: "https://fakeimg.pl/600x400/456343/fffcfc?text=MLOps+Pipeline+using+Apache+Airflow&font_size=40"
    },
    {
      title: "Tableau Dashboards",
      description: "I created Tableau dashboards to analyze: 1. Employee Trends 2. Automotive Sales 3. Call Center Performance",
      tags: ["Tableau"],
      links: {
        github: "https://github.com/ajay-kumar2109/Employeedashboard",
      },
      image: "https://fakeimg.pl/600x400/6e0808/ffffff?text=Tableau+Dashboards&font_size=64"
    },
        {
      title: "Movielytics Data Engineering Projects",
      description: "The aim of this project, is to perform Extract, Transform, Load, on movies data, to answer questions the business may have about its users",
      tags: ["Kaggle", "Amazon Ec2", "Apache Airflow", "Amazon Redshift"],
      links: {
        github: "https://github.com/ajay-kumar2109/movielytics_dataEngineering_Full-project",
      },
      image: "https://fakeimg.pl/600x400/302222/f0ebeb?text=MovieLytics+DataEngineering+Full+Project&font=bebas&font_size=35"
    },
    {
      title: "Retail Sales",
      description: "Real-time dashboard for monitoring ETL processes with live data streaming and interactive visualizations.",
      tags: ["React", "Node.js", "Apache Kafka", "D3.js"],
      links: {
        github: "https://github.com/ajay-kumar2109/retailSales",
      },
      image: "https://fakeimg.pl/600x400/408b9c/ffffff?text=Retail+Sales&font=bebas&font_size=55"
    },
    {
      title: "Amazon Sales Analysis",
      description: "The Amazon Sales Analysis project is a Python-based data analysis endeavor aimed at exploring and understanding sales data obtained from Amazon. ",
      tags: [],
      links: {
        github: "https://github.com/ajay-kumar2109/Sales_Analysis_Amazon",
      },
      image: "https://fakeimg.pl/600x400/c73434/241313?text=Amazon+Sales+Analysis&font=noto-serif&font_size=52"
    },
    {
      title: "healthcare-provider-fraud-detection",
      description: "Automated CI/CD pipeline tool with custom workflows and cloud integrations.",
      tags: [],
      links: {
        github: "https://github.com/ajay-kumar2109/healthcare-provider-fraud-detection",
      },
      image: "https://fakeimg.pl/600x400/408b9c/ffffff?text=Health+care+Fraud+Detection&font=bebas&font_size=55"
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

  return (
    <section 
      id="projects"
      ref={projectsRef}
      className="py-16 bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            Featured Projects
          </h2>
          <p className="text-md text-gray-600 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my technical skills and problem-solving abilities.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              {/* Project Image */}
              <div className="relative h-48">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 z-10"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />
                <img
                  src={project.image}
                  alt={project.title}
                  className={`w-full h-full object-cover transition-opacity duration-300 
                            ${imageLoaded[project.title] ? 'opacity-100' : 'opacity-0'}`}
                  onLoad={() => setImageLoaded(prev => ({ ...prev, [project.title]: true }))}
                />
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* GitHub Link */}
                <motion.a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg
                           text-sm hover:bg-gray-800 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FaGithub className="text-sm" />
                  View Code
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* More Projects Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/ajay-kumar2109"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500
                     text-white rounded-full text-sm font-medium hover:shadow-lg transition-shadow"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>View More Projects</span>
            <FaExternalLinkAlt className="text-sm" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
