import { motion } from "framer-motion";

const Certifications = () => {
  const certifications = [
    {
      name: "AWS Certified Solutions Architect",
      image: "/certificates/aws-cert.png", // Place images in the public/certificates folder
    },
    {
      name: "Google Data Analytics Certificate",
      image: "/certificates/google-data.png",
    },
    {
      name: "Microsoft Azure Fundamentals",
      image: "/certificates/azure-fundamentals.png",
    },
    {
      name: "PMP - Project Management Professional",
      image: "/certificates/pmp-cert.png",
    },
    {
      name: "Scrum Master Certification",
      image: "/certificates/scrum-master.png",
    },
    {
      name: "IBM Data Science Certificate",
      image: "/certificates/ibm-data-science.png",
    },
  ];

  return (
    <section id="certifications" className="py-16 bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Certifications</h2>
          <p className="text-md text-gray-600 max-w-2xl mx-auto">
            Here are some of my professional certifications demonstrating my expertise.
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow p-4 flex flex-col items-center"
            >
              {/* Certificate Image */}
              <div className="relative w-full h-48 flex items-center justify-center bg-gray-100 rounded-lg overflow-hidden">
                <motion.img
                  src={cert.image}
                  alt={cert.name}
                  className="max-h-40 object-contain transition-transform duration-300 hover:scale-105"
                />
              </div>

              {/* Certificate Name */}
              <h3 className="text-lg font-semibold text-gray-900 mt-4 text-center">{cert.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
