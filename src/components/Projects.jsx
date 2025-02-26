import { motion } from "framer-motion";

const certifications = [
  {
    title: "AWS Certified Solutions Architect",
    image: "/certificates/aws_solution.png",
  },
  {
    title: "Google Data Analytics Certificate",
    image: "https://fakeimg.pl/400x400/ff5733/ffffff?text=Google+Badge",
  },
  {
    title: "Microsoft Azure Fundamentals",
    image: "https://fakeimg.pl/400x400/654321/ffffff?text=Azure+Badge",
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-gray-900 text-center mb-10"
        >
          Certifications
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-3xl shadow-xl p-8 flex flex-col items-center"
            >
              {/* Bigger Image */}
              <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 flex items-center justify-center">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Certification Title */}
              <h3 className="text-xl font-semibold text-gray-800 mt-6 text-center">
                {cert.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
