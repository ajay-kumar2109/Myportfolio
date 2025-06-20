import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FaBriefcase, FaBuilding, FaCalendar, FaTools, FaDatabase, FaCloud, FaNetworkWired } from 'react-icons/fa';

const Employment = () => {
  const [activeJob, setActiveJob] = useState(0);

  const jobs = [
    {
      title: "Data Analyst",
      company: "Canadian tire",
      period: "Sep 2023 – Aug 2024",
      location: "Vancouver ,BC Canada",
      type: "data",
      achievements: [
        "Partnered with General and Operations Managers to monitor sales, margin, and cost KPIs across retail stores and ecommerce channels, aligning daily results with overall budget targets.",
        "Built and maintained seasonal inventory planning models in Excel, forecasting purchasing volumes to meet demand without exceeding stock or spend constraints",
        "Designed Power BI dashboards tracking sales performance, traffic, conversion, labor utilization, and expense ratios to provide a real-time overview of store operations",
        "Analyzed weekly and monthly retail sales trends across regions and categories to identify underperforming segments and opportunities for growth."
      ],
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
        "Automated inventory analysis systems using Python, reducing waste by 15% and improving profit margins.",
        "Built sales forecasting models with Python and statistical analysis, achieving 92% accuracy in projections.",
        "Partnered with suppliers to align replenishment schedules, ensuring 100% on-time delivery for 10+ high-priority SKUs.",
        "Designed VBA macros for financial reporting, saving 40+ hours/month in manual data preparation."
      ],
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
      achievements: [
        "Extracted and analyzed data from multiple sources using SQL, identifying trends and patterns to support strategic business decisions.",
        "Created dynamic Power BI dashboards with advanced DAX calculations, enabling stakeholders to explore key performance indicators interactively.",
        "Assisted in maintaining and updating prebuilt Power BI dashboards to reflect business changes, ensuring reports remained relevant and accurate",
        "Built Excel models with advanced formulas and pivot tables, streamlining data analysis for ad-hoc business requests"
      ],
      skills: ["SQL", "Power BI", "Python", "Data Optimization", "Logistics Analytics"],
      colorClass: {
        bg: "bg-green-500",
        text: "text-green-500",
        light: "bg-green-100",
        lightText: "text-green-700"
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
