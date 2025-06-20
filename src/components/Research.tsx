
import { Microscope, Calendar, Trophy } from "lucide-react";

export const Research = () => {
  const researchProjects = [
    {
      title: "Design and Development of Resistance Butt Welding Machine",
      institution: "University of Lahore - Final Year Project",
      period: "2019 - 2020",
      description: "Introduced a simplified and economical butt welding machine design suitable for local bulk production, targeting cost-sensitive manufacturing environments.",
      achievements: [
        "Conducted comprehensive market research and literature review to assess existing technologies",
        "Designed a high current transformer, validated through computer simulations including Finite Element Analysis",
        "Developed a working prototype with complete mechanical structure and welding operation mechanism",
        "Presented the work at ICEEST 2022 conference, handling manuscript writing, submission, revisions, and final presentation"
      ],
      technologies: ["ANSYS Maxwell", "Finite Element Analysis", "Transformer Design", "Mechanical Design"]
    },
    {
      title: "Design and Development of Solid-State DC Circuit Breaker",
      institution: "University of Lahore - Research Project",
      period: "2019 - 2020",
      description: "Proposed a solid-state DC circuit breaker with low conduction loss, quick reclosing, and rebreaking capability to address control and stability challenges in DC power systems.",
      achievements: [
        "Verified operating modes and performance through comprehensive Simulink/MATLAB simulations",
        "Designed the breaker to interrupt and clear faults within approximately 200 µs, significantly reducing potential damage",
        "Incorporated a recharging mechanism for the commutation capacitor, enabling rebreaking capability",
        "Improved system protection by enabling fast operation and minimizing electrical losses",
        "Presented research findings at ICEEST 2022 conference"
      ],
      technologies: ["MATLAB", "Simulink", "Power Electronics", "Circuit Breaker Design", "Fault Analysis"]
    }
  ];

  return (
    <section id="research" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Research Experience
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Contributing to innovative research in electrical engineering and power systems
          </p>
        </div>
        
        <div className="space-y-12">
          {researchProjects.map((project, index) => (
            <div 
              key={project.title}
              className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{project.title}</h3>
                  <p className="text-blue-600 font-semibold mb-2">{project.institution}</p>
                </div>
                <div className="flex items-center text-blue-600 ml-4">
                  <Microscope size={32} />
                </div>
              </div>
              
              <div className="flex items-center text-gray-600 mb-4">
                <Calendar size={16} className="mr-2" />
                {project.period}
              </div>
              
              <p className="text-gray-700 mb-6 leading-relaxed">{project.description}</p>
              
              <div className="mb-6">
                <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                  <Trophy size={20} className="mr-2 text-yellow-600" />
                  Key Achievements:
                </h4>
                <ul className="space-y-2">
                  {project.achievements.map((achievement, achIndex) => (
                    <li key={achIndex} className="text-gray-600 flex items-start">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="bg-white/70 text-gray-700 px-3 py-1 rounded-full text-sm border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
