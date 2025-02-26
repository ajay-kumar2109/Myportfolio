import { motion } from 'framer-motion';

const certifications = [
  { title: "AWS Certified Solutions Architect", image: "/certificates/aws_solution.png" },
  { title: "Google Data Analytics Professional Certificate", image: "google_cert.png" },
  { title: "Microsoft Azure Fundamentals", image: "azure_cert.png" },
];

const Certifications = () => {
  return (
    <section className="py-16 bg-gray-100 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Certifications</h2>
          <p className="text-md text-gray-600 max-w-2xl mx-auto">Here are some of the professional certifications I have earned.</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
              <div className="h-48 overflow-hidden flex items-center justify-center">
                <img src={cert.image} alt={cert.title} className="w-auto h-full object-contain" />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-900">{cert.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
