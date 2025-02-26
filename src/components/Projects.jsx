import { useState } from "react";
import { motion } from "framer-motion";

const projectsData = [
  {
    title: "Sales Dashboard",
    image: "https://fakeimg.pl/600x400/3498db/ffffff?text=Sales+Dashboard",
    description: "A Power BI dashboard displaying sales trends, revenue, and KPIs.",
    url: "https://yourprojecturl.com",
  },
  {
    title: "Marketing Analytics",
    image: "https://fakeimg.pl/600x400/2ecc71/ffffff?text=Marketing+Analytics",
    description: "A Tableau dashboard analyzing marketing campaign performance.",
    url: "https://yourprojecturl.com",
  },
  {
    title: "Customer Retention Insights",
    image: "https://fakeimg.pl/600x400/e74c3c/ffffff?text=Retention+Insights",
    description: "A Looker Studio dashboard tracking customer retention trends.",
    url: "https://yourprojecturl.com",
  },
  {
    title: "Website Traffic Analysis",
    image: "https://fakeimg.pl/600x400/f1c40f/ffffff?text=Traffic+Analysis",
    description: "A Google Analytics dashboard for monitoring website traffic.",
    url: "https://yourprojecturl.com",
  },
];

const Projects = () => {
  const [visibleProjects, setVisibleProjects] = useState(2);

  const loadMoreProjects = () => {
    setVisibleProjects((prev) => prev + 2);
  };

  return (
    <section id="projects" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-gray-900 text-center mb-10"
        >
          Projects
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {projectsData.slice(0, visibleProjects).map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              {/* Large Image with Hover Effect on Desktop */}
              <div className="relative group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover"
                />

                {/* Hover Effect for Larger Screens */}
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden sm:flex">
                  <p className="text-white text-lg font-semibold px-4 text-center">{project.description}</p>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 bg-white text-gray-900 font-bold py-2 px-4 rounded-full"
                  >
                    View Project
                  </a>
                </div>
              </div>

              {/* Mobile-Friendly Display (No Hover) */}
              <div className="p-6 sm:hidden">
                <h3 className="text-2xl font-bold text-gray-800">{project.title}</h3>
                <p className="text-gray-600 mt-2">{project.description}</p>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block bg-gray-900 text-white font-bold py-2 px-4 rounded-full"
                >
                  View Project
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleProjects < projectsData.length && (
          <div className="text-center mt-10">
            <button
              onClick={loadMoreProjects}
              className="bg-gray-900 text-white font-bold py-3 px-6 rounded-full hover:bg-gray-700 transition duration-300"
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
