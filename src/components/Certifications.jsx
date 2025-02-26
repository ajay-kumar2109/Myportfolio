import { useState } from "react";
import { motion } from "framer-motion";

const certifications = [
  {
    title: "AWS Certified Cloud Practitioner",
    image: "/certificates/aws_solution.png",
  },
  {
    title: "Google Data Analytics",
    image: "https://fakeimg.pl/500x300/6e0808/ffffff?text=Google+Analytics",
  },
  {
    title: "Microsoft Azure Fundamentals",
    image: "https://fakeimg.pl/500x300/302222/f0ebeb?text=Azure+Fundamentals",
  },
  {
    title: "Scrum Master Certified",
    image: "https://fakeimg.pl/500x300/408b9c/ffffff?text=Scrum+Master",
  },
  {
    title: "PMP Certification",
    image: "https://fakeimg.pl/500x300/041317/ffffff?text=PMP+Certification",
  },
  {
    title: "Google Cloud Certified",
    image: "https://fakeimg.pl/500x300/1a237e/ffffff?text=Google+Cloud+Certified",
  },
];

const Certifications = () => {
  const [visibleCount, setVisibleCount] = useState(4);

  return (
    <section id="certifications" className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-gray-900 text-center mb-10"
        >
          Certifications
        </motion.h2>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {certifications.slice(0, visibleCount).map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-all"
            >
              {/* Image with Overlay */}
              <div className="relative w-full h-64">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                  <p className="text-white text-lg font-semibold">{cert.title}</p>
                </div>
              </div>

              {/* Certification Title */}
              <div className="p-4 text-center">
                <p className="text-lg font-semibold text-gray-800">{cert.title}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Show More Button */}
        {visibleCount < certifications.length && (
          <div className="text-center mt-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setVisibleCount(certifications.length)}
              className="px-6 py-3 text-white bg-gradient-to-r from-blue-500 to-purple-500 
                         rounded-full text-lg font-medium shadow-lg hover:shadow-xl transition"
            >
              Show More
            </motion.button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Certifications;
