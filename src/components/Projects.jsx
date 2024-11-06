import { motion } from 'framer-motion';
import { useState, useRef } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const [imageLoaded, setImageLoaded] = useState({});
  const projectsRef = useRef(null);

  const projects = [
    {
      title: "ETL Pipeline Dashboard",
      description: "Real-time dashboard for monitoring ETL processes with live data streaming and interactive visualizations.",
      tags: ["React", "Node.js", "Apache Kafka", "D3.js"],
      links: {
        github: "https://github.com/Subham-Maity/restock",
      },
      image: "https://via.placeholder.com/400x300/1a365d/ffffff?text=ETL+Dashboard"
    },
    {
      title: "ML Model Platform",
      description: "End-to-end machine learning model deployment platform with automated training and monitoring.",
      tags: ["Python", "TensorFlow", "FastAPI", "Docker"],
      links: {
        github: "https://github.com/Subham-Maity/python-master",
      },
      image: "https://via.placeholder.com/400x300/44337a/ffffff?text=ML+Platform"
    },
    {
      title: "CI/CD Automation Tool",
      description: "Automated CI/CD pipeline tool with custom workflows and cloud integrations.",
      tags: ["TypeScript", "Node.js", "Docker", "AWS"],
      links: {
        github: "https://github.com/Subham-Maity/java-master",
      },
      image: "https://via.placeholder.com/400x300/234e52/ffffff?text=CI/CD+Tool"
    },
    {
      title: "Data Analytics Platform",
      description: "Advanced analytics platform with real-time data processing and visualization.",
      tags: ["Python", "React", "PostgreSQL", "Redis"],
      links: {
        github: "https://github.com/Subham-Maity/typescript-master",
      },
      image: "https://via.placeholder.com/400x300/1e3a8a/ffffff?text=Analytics+Platform"
    },
    {
      title: "Blockchain Explorer",
      description: "Comprehensive blockchain explorer with transaction tracking and smart contract analysis.",
      tags: ["Solidity", "React", "Node.js", "Web3.js"],
      links: {
        github: "https://github.com/Subham-Maity/docker-master",
      },
      image: "https://via.placeholder.com/400x300/3730a3/ffffff?text=Blockchain+Explorer"
    },
    {
      title: "AI Code Assistant",
      description: "Intelligent code completion and suggestion system using machine learning.",
      tags: ["Python", "TensorFlow", "NLP", "FastAPI"],
      links: {
        github: "https://github.com/Subham-Maity/ml-master",
      },
      image: "https://via.placeholder.com/400x300/831843/ffffff?text=AI+Code+Assistant"
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