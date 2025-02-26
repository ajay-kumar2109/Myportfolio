import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Sales Dashboard",
    image: "https://fakeimg.pl/600x400/123456/ffffff?text=Sales+Dashboard",
    description: "An interactive Power BI dashboard analyzing sales performance.",
    link: "https://example.com/sales-dashboard",
  },
  {
    title: "Customer Retention Analysis",
    image: "https://fakeimg.pl/600x400/654321/ffffff?text=Customer+Retention",
    description: "A data-driven project showcasing retention trends over time.",
    link: "https://example.com/customer-retention",
  },
  {
    title: "Website Traffic Report",
    image: "https://fakeimg.pl/600x400/ff5733/ffffff?text=Website+Traffic",
    description: "Web analytics dashboard tracking visitor behavior and sources.",
    link: "https://example.com/traffic-report",
  },
];

const Projects = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section id="projects" className="py-16 bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-white text-center mb-10"
        >
          Projects
        </motion.h2>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative bg-gray-800 rounded-3xl shadow-xl p-6"
            >
              {/* Image with hover effect on desktop */}
              <div className="overflow-hidden rounded-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover rounded-lg transition-transform duration-300"
                  style={{ objectFit: "contain" }} // Ensures no cropping
                />
              </div>

              {/* Mobile View: Description Below Image */}
              {isMobile ? (
                <div className="mt-4 text-center">
                  <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                  <p className="text-gray-400 mt-2">{project.description}</p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block mt-3 text-blue-400 hover:underline"
                  >
                    View Project
                  </a>
                </div>
              ) : (
                // Desktop Hover Effect
                <motion.div
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-black bg-opacity-80 flex flex-col items-center 
                            justify-center text-white text-center opacity-0 transition-opacity duration-300"
                >
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                  <p className="mt-2">{project.description}</p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 text-blue-400 hover:underline"
                  >
                    View Project
                  </a>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
