import { motion } from "framer-motion";

const certifications = [
  {
    name: "AWS Certified Cloud Practitioner",
    image: "/certificates/aws_solution.png",
  },
  {
    name: "Microsoft Azure Fundamentals",
    image: "https://fakeimg.pl/200x200/654321/ffffff?text=Azure",
  },
  {
    name: "Google Data Analytics",
    image: "https://fakeimg.pl/200x200/ff5733/ffffff?text=Google+Analytics",
  },
  {
    name: "PMP - Project Management Professional",
    image: "https://fakeimg.pl/200x200/009688/ffffff?text=PMP",
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-16 bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-white text-center mb-10"
        >
          Certifications
        </motion.h2>

        {/* Certification Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative bg-gray-800 rounded-3xl shadow-xl p-6 flex flex-col items-center 
                        justify-center text-center transform hover:scale-105 transition-transform duration-300"
            >
              {/* Certification Image */}
              <div className="w-32 h-32 bg-gray-700 rounded-full flex items-center justify-center shadow-lg">
                <img
                  src={cert.image}
                  alt={cert.name}
                  className="w-28 h-28 object-contain drop-shadow-lg"
                />
              </div>

              {/* Certification Name */}
              <h3 className="mt-4 text-lg font-semibold text-white">{cert.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
