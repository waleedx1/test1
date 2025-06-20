
import { Briefcase, MapPin, Calendar } from "lucide-react";

export const Experience = () => {
  const experiences = [
    {
      title: "Internship – LESCO, 132kV Substation",
      company: "LESCO",
      location: "New Garden Town, Lahore",
      period: "Jun 2019 - Jul 2019",
      description: "Expanded prior knowledge through in-depth exposure to substation protection systems, including relay coordination and fault isolation strategies.",
      achievements: [
        "Observed execution of shutdown procedures and real-time maintenance operations",
        "Gained hands-on experience with protection relay systems",
        "Learned fault isolation strategies and coordination techniques"
      ]
    },
    {
      title: "Internship – NTDC, 220kV Substation",
      company: "NTDC",
      location: "New Kot Lakhpat, Lahore",
      period: "Jun 2018 - Sep 2018",
      description: "Gained foundational exposure to high-voltage power transmission systems, including transformers, circuit breakers, and busbars.",
      achievements: [
        "Hands-on observation of real-time grid operations",
        "Experience with high-voltage transmission equipment",
        "Understanding of maintenance practices in power systems"
      ]
    }
  ];

  const leadership = [
    {
      title: "General Secretary",
      company: "Electrical and Control Engineering Society, University of Lahore",
      location: "Lahore, Pakistan",
      period: "Sep 2019 - Mar 2020",
      description: "Led society operations, organized technical workshops, and coordinated student training initiatives.",
      achievements: [
        "Successfully managed society operations and events",
        "Organized technical workshops for students",
        "Coordinated training initiatives and professional development programs"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        {/* Work Experience */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Work Experience</h3>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-gray-800 mb-1">{exp.title}</h4>
                    <p className="text-blue-600 font-semibold mb-2">{exp.company}</p>
                  </div>
                  <Briefcase className="text-blue-600 flex-shrink-0 ml-4" size={24} />
                </div>
                
                <div className="flex flex-col sm:flex-row sm:items-center text-gray-600 mb-4 space-y-1 sm:space-y-0 sm:space-x-4">
                  <div className="flex items-center">
                    <MapPin size={16} className="mr-1" />
                    {exp.location}
                  </div>
                  <div className="flex items-center">
                    <Calendar size={16} className="mr-1" />
                    {exp.period}
                  </div>
                </div>
                
                <p className="text-gray-700 mb-4">{exp.description}</p>
                
                <div>
                  <h5 className="font-semibold text-gray-800 mb-2">Key Learning:</h5>
                  <ul className="space-y-1">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="text-gray-600 flex items-start">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership Experience */}
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Leadership Experience</h3>
          <div className="space-y-8">
            {leadership.map((exp, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-gray-800 mb-1">{exp.title}</h4>
                    <p className="text-blue-600 font-semibold mb-2">{exp.company}</p>
                  </div>
                  <Briefcase className="text-blue-600 flex-shrink-0 ml-4" size={24} />
                </div>
                
                <div className="flex flex-col sm:flex-row sm:items-center text-gray-600 mb-4 space-y-1 sm:space-y-0 sm:space-x-4">
                  <div className="flex items-center">
                    <MapPin size={16} className="mr-1" />
                    {exp.location}
                  </div>
                  <div className="flex items-center">
                    <Calendar size={16} className="mr-1" />
                    {exp.period}
                  </div>
                </div>
                
                <p className="text-gray-700 mb-4">{exp.description}</p>
                
                <div>
                  <h5 className="font-semibold text-gray-800 mb-2">Key Achievements:</h5>
                  <ul className="space-y-1">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="text-gray-600 flex items-start">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
