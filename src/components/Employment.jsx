import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FaBriefcase, FaBuilding, FaCalendar, FaTools, FaDatabase, FaCloud, FaNetworkWired } from 'react-icons/fa';

const Employment = () => {
  const [activeJob, setActiveJob] = useState(0);

  const jobs = [
    {
      title: "Data Engineer",
      company: "Connex",
      period: "Sep 2023 – Aug 2024",
      location: "Vancouver ,BC Canada",
      type: "data",
      skills: ["Python", "SQL", "VBA", "Data Analysis", "Forecasting"],
      colorClass: {
        bg: "bg-blue-500",
        text: "text-blue-500",
        light: "bg-blue-100",
        lightText: "text-blue-700"
      }
    },
    {
      title: "Data Analyst",
      company: "iLink Digital",
      period: "Feb 2022 – Dec 2022",
      location: "Chennai, India",
      type: "data",
      achievements: [
      skills: ["Python", "SQL", "Tableau", "Data Analytics", "Machine Learning"],
      colorClass: {
        bg: "bg-purple-500",
        text: "text-purple-500",
        light: "bg-purple-100",
        lightText: "text-purple-700"
      }
    },
    {
      title: "Data Analyst",
      company: "Cognizant",
      period: "Nov 2019 – Jan 2022",
      location: "Chennai, India",
      type: "data",
      skills: ["SQL", "Power BI", "Python", "Data Optimization", "Logistics Analytics"],
      colorClass: {
        bg: "bg-green-500",
        text: "text-green-500",
        light: "bg-green-100",
        lightText: "text-green-700"
      }
    },
    {
      title: "Junior Data Analyst",
      company: "Wipro",
      period: "Aug 2019 – June 2020",
      location: "Bangalore, India",
      type: "data",
      skills: ["Excel", "Python", "A/B Testing", "Data Validation"],
      colorClass: {
        bg: "bg-orange-500",
        text: "text-orange-500",
        light: "bg-orange-100",
        lightText: "text-orange-700"
      }
    }
  ];

  return (
    <section id="employment" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-900 mb-8">Work Experience</h2>
        <div className="grid md:grid-cols-[300px_1fr] gap-8">
          <div className="flex flex-col space-y-2">
            {jobs.map((job, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveJob(index)}
                className={`p-4 text-left rounded-lg border-2 relative transition-all duration-300 ${
                  activeJob === index ? `${job.colorClass.bg} text-white` : 'bg-white border-gray-200 hover:bg-gray-50'
                }`}
              >
                <h3 className="font-semibold">{job.company}</h3>
                <p className="text-sm opacity-80">{job.title}</p>
              </motion.button>
            ))}
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900">{jobs[activeJob].title}</h3>
            <p className={`font-semibold ${jobs[activeJob].colorClass.text}`}>{jobs[activeJob].company}</p>
            <p className="text-gray-600 flex items-center gap-2"><FaCalendar /> {jobs[activeJob].period}</p>
            <p className="text-gray-600 flex items-center gap-2"><FaBuilding /> {jobs[activeJob].location}</p>
            <h4 className="font-semibold mt-4">Key Achievements:</h4>
            <ul className="space-y-2">
              {jobs[activeJob].achievements.map((achievement, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-600">
                  <FaBriefcase className={`${jobs[activeJob].colorClass.text}`} /> {achievement}
                </li>
              ))}
            </ul>
            <h4 className="font-semibold mt-4">Technologies:</h4>
            <div className="flex flex-wrap gap-2">
              {jobs[activeJob].skills.map((skill, index) => (
                <span key={index} className={`px-3 py-1 rounded-full text-sm ${jobs[activeJob].colorClass.light} ${jobs[activeJob].colorClass.lightText}`}>
                  <FaTools className="text-xs" /> {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Employment;
