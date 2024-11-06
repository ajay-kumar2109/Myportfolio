import { motion } from 'framer-motion';

const Certifications = () => {
  const certifications = [
    {
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2023",
      credentialId: "AWS-123456",
      image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-1.2.1&auto=format&fit=crop&w=2400&q=80",
      skills: ["Cloud Architecture", "AWS Services", "Security", "Scalability"],
      link: "https://www.credly.com/badges/your-badge-id"
    },
    {
      name: "Python Professional Certification",
      issuer: "Python Institute",
      date: "2022",
      credentialId: "PY-789012",
      image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?ixlib=rb-1.2.1&auto=format&fit=crop&w=2400&q=80",
      skills: ["Python", "Data Structures", "Algorithms", "OOP"],
      link: "https://www.python.org/cert/"
    },
    {
      name: "Microsoft Certified: Azure Developer Associate",
      issuer: "Microsoft",
      date: "2022",
      credentialId: "MS-345678",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=2400&q=80",
      skills: ["Azure", "Cloud Development", "DevOps", "Microservices"],
      link: "https://learn.microsoft.com/en-us/certifications/"
    }
  ];

  return (
    <section id="certifications" className="section-padding bg-white">
      <div className="max-w-[980px] mx-auto container-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4">
            Certifications
          </h2>
        </motion.div>

        <div className="grid gap-8">
          {certifications.map((cert, index) => (
            <motion.a
              key={index}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-gray-50 rounded-2xl overflow-hidden"
            >
              <div className="relative">
                {/* Background Image with Gradient Overlay */}
                <div className="absolute inset-0">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-blue-800/90 mix-blend-multiply" />
                  <img
                    src={cert.image}
                    alt={cert.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="relative p-8 md:p-12">
                  <div className="max-w-2xl">
                    {/* Badge */}
                    <div className="inline-flex items-center px-3 py-1 rounded-full 
                                  bg-white/10 backdrop-blur-sm text-white text-sm mb-6">
                      {cert.date}
                    </div>

                    {/* Title and Issuer */}
                    <h3 className="text-2xl md:text-3xl font-semibold text-white mb-2">
                      {cert.name}
                    </h3>
                    <p className="text-white/80 text-lg mb-4">
                      {cert.issuer}
                    </p>

                    {/* Credential ID */}
                    <p className="text-white/60 text-sm mb-6">
                      Credential ID: {cert.credentialId}
                    </p>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="px-4 py-2 rounded-full text-sm
                                   bg-white/10 backdrop-blur-sm text-white"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* View Certificate Button */}
                    <div className="mt-8 inline-flex items-center text-white group-hover:text-blue-200 transition-colors duration-300">
                      <span className="mr-2">View Certificate</span>
                      <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" 
                           fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;