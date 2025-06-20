
import { Zap, Cpu, Settings, Database, Code, Wrench } from "lucide-react";

export const Skills = () => {
  const skillCategories = [
    {
      title: "Software Tools",
      icon: Code,
      skills: ["MATLAB/Simulink", "ETAP", "DigSilent PowerFactory", "ANSYS Maxwell", "CST Studio", "AutoCAD", "Multisim", "Proteus"],
      color: "from-blue-400 to-purple-500"
    },
    {
      title: "Technical Skills",
      icon: Settings,
      skills: ["Power System Studies", "System Design", "Finite Element Analysis", "PCB Design & Fabrication", "LaTeX"],
      color: "from-green-400 to-teal-500"
    },
    {
      title: "Programming",
      icon: Cpu,
      skills: ["C++", "MATLAB", "Embedded Systems", "Arduino", "Python (Learning)", "Machine Learning (Learning)"],
      color: "from-purple-400 to-pink-500"
    },
    {
      title: "Power Systems",
      icon: Zap,
      skills: ["Power Distribution", "Power System Protection", "Power Electronics", "Power Transmission", "Control Systems"],
      color: "from-yellow-400 to-orange-500"
    },
    {
      title: "Soft Skills",
      icon: Wrench,
      skills: ["Self-Motivation", "Problem Solving", "Critical Thinking", "Creativity", "Attention to Detail"],
      color: "from-red-400 to-orange-500"
    },
    {
      title: "Currently Learning",
      icon: Database,
      skills: ["Python", "Machine Learning", "Optimization", "PSCAD", "PSS/E", "Advanced Power Studies"],
      color: "from-teal-400 to-blue-500"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`h-2 bg-gradient-to-r ${category.color}`}></div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} text-white mr-4`}>
                    <category.icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">{category.title}</h3>
                </div>
                <ul className="space-y-2">
                  {category.skills.map((skill) => (
                    <li key={skill} className="text-gray-600 flex items-center">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
