
import { BookOpen, Calculator, Zap, Cpu } from "lucide-react";

export const Coursework = () => {
  const courseworkCategories = [
    {
      category: "Power Systems",
      icon: Zap,
      courses: [
        "Power Distribution and Utilization",
        "Power System Protection", 
        "Power System Analysis",
        "Power Electronics",
        "Electrical Power Transmission"
      ],
      color: "from-blue-500 to-blue-600"
    },
    {
      category: "Control Systems",
      icon: Calculator,
      courses: [
        "Control Systems",
        "Control of DC and AC Drives",
        "Embedded Systems",
        "Digital Signal Processing",
        "Process Control"
      ],
      color: "from-green-500 to-green-600"
    }
  ];

  return (
    <section id="coursework" className="py-20 bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Relevant Coursework
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive academic foundation in electrical engineering principles and applications
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {courseworkCategories.map((category, index) => (
            <div 
              key={category.category}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`h-2 bg-gradient-to-r ${category.color}`}></div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} text-white mr-4`}>
                    <category.icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">{category.category}</h3>
                </div>
                <ul className="space-y-2">
                  {category.courses.map((course) => (
                    <li key={course} className="text-gray-600 flex items-center">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 flex-shrink-0"></div>
                      {course}
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
