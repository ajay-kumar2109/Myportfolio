import { useState } from "react";

const projectsData = [
  {
    title: "MLOps Pipeline using Apache Airflow",
    description:
      "The goal of this pipeline is to streamline the process of analyzing screentime data by automating its preprocessing and utilizing machine learning to predict app usage.",
    tags: ["Apache Airflow"],
    links: {
      github:
        "https://github.com/ajay-kumar2109/MLOps-Pipeline-using-Apache-Airflow/tree/main?tab=readme-ov-file#overview",
    },
    image: "/certificates/airflow.png",
  },
  {
    title: "Data Visualization Dashboard",
    description:
      "An interactive Power BI dashboard that provides insights into sales performance, customer segmentation, and revenue trends.",
    tags: ["Power BI", "Data Analysis"],
    links: {
      github: "https://github.com/yourusername/data-viz-dashboard",
    },
    image: "/certificates/dataviz.png",
  },
  {
    title: "E-commerce Recommendation System",
    description:
      "A machine learning-based recommendation system that suggests products based on user browsing and purchase history.",
    tags: ["Machine Learning", "Python"],
    links: {
      github: "https://github.com/yourusername/ecommerce-recommendation",
    },
    image: "/certificates/recommendation.png",
  },
  // Add more projects here
];

const Projects = () => {
  const [visibleProjects, setVisibleProjects] = useState(4);

  return (
    <div className="bg-white py-10 px-5">
      <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {projectsData.slice(0, visibleProjects).map((project, index) => (
          <div
            key={index}
            className="bg-gray-100 p-4 rounded-2xl shadow-md transition-transform transform hover:scale-[1.02]"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-60 object-contain rounded-lg"
            />
            <h3 className="text-xl font-semibold mt-4">{project.title}</h3>
            <p className="text-gray-600 mt-2">{project.description}</p>
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 font-semibold mt-3 inline-block"
            >
              View Project →
            </a>
          </div>
        ))}
      </div>
      {visibleProjects < projectsData.length && (
        <div className="text-center mt-6">
          <button
            onClick={() => setVisibleProjects((prev) => prev + 4)}
            className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default Projects;
