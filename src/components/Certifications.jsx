import { motion } from "framer-motion";

const certifications = [
  {
    title: "AWS Certified Solutions Architect",
    image: "/certificates/aws_solution.png",
  },
  {
    title: "Google Data Analytics Professional",
    image: "/certificates/google-data-analytics.png",
  },
  {
    title: "Microsoft Azure Fundamentals",
    image: "/certificates/azure-fundamentals.png",
  },
  {
    title: "Certified Scrum Master",
    image: "/certificates/csm.png",
  },
  {
    title: "PMP (Project Management Professional)",
    image: "/certificates/pmp.png",
  },
  {
    title: "IBM Data Science Professional",
    image: "/certificates/ibm-data-science.png",
  },
];

const Certifications = () => {
  return (
    <section
      id="certifications"
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
            Certifications
          </h2>
          <p className="text-md text-gray-600 max-w-2xl mx-auto">
            Here are some of my professional certifications showcasing my expertise.
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              {/* Certification Badge */}
              <img
                src={cert.image}
                alt={cert.title}
                className="h-24 w-auto object-contain"
              />

              {/* Certificate Name */}
              <p className="mt-3 text-lg font-medium text-gray-900 text-center">
                {cert.title}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
