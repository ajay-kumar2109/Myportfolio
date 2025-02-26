import { useState } from "react";

const certifications = [
  {
    title: "AWS Certified Cloud Practitioner",
    image: "/certificates/aws_solution.png",
  },
  {
    title: "Google Data Analytics",
    image: "https://fakeimg.pl/300x200/6e0808/ffffff?text=Google+Analytics",
  },
  {
    title: "Microsoft Azure Fundamentals",
    image: "https://fakeimg.pl/300x200/302222/f0ebeb?text=Azure+Fundamentals",
  },
  {
    title: "Scrum Master Certified",
    image: "https://fakeimg.pl/300x200/408b9c/ffffff?text=Scrum+Master",
  },
  {
    title: "PMP Certification",
    image: "https://fakeimg.pl/300x200/041317/ffffff?text=PMP+Certification",
  },
];

const Certifications = () => {
  const [visibleCount, setVisibleCount] = useState(4);

  return (
    <section id="certifications" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
          Certifications
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {certifications.slice(0, visibleCount).map((cert, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="w-60 h-40 flex items-center justify-center overflow-hidden rounded-lg border border-gray-200">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="mt-3 text-lg font-semibold text-gray-700 text-center">
                {cert.title}
              </p>
            </div>
          ))}
        </div>

        {visibleCount < certifications.length && (
          <div className="text-center mt-6">
            <button
              onClick={() => setVisibleCount(certifications.length)}
              className="px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-md transition"
            >
              Show More
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Certifications;
