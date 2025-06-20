
import { ExternalLink, Github, Lightbulb, Zap, Cpu, Magnet } from "lucide-react";

export const ProjectPortfolio = () => {
  const projects = [
    {
      title: "Resistance Butt Welding Machine",
      description: "Designed a high-current transformer, validated through simulations and Finite Element Analysis (FEA), developed mechanical components, and built a functional hardware prototype.",
      image: "https://images.unsplash.com/photo-1565349320852-b5e3f6a59d6e?w=600&h=400&fit=crop",
      technologies: ["ANSYS Maxwell", "FEA", "Transformer Design", "Mechanical Engineering"],
      icon: Zap,
      color: "from-blue-500 to-blue-600",
      category: "Power Electronics"
    },
    {
      title: "Solid-state DC Circuit Breaker",
      description: "Proposed and implemented a fast, low-loss solid-state DC circuit breaker with reclosing and rebreaking capabilities, validated through simulations and hardware testing.",
      image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=600&h=400&fit=crop",
      technologies: ["MATLAB", "Simulink", "Power Electronics", "Circuit Design"],
      icon: Cpu,
      color: "from-green-500 to-green-600",
      category: "Protection Systems"
    },
    {
      title: "DC to AC Converter (Inverter)",
      description: "Designed, simulated, and implemented a PCB-based inverter for DC to AC power conversion with variable-frequency output.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop",
      technologies: ["PCB Design", "Power Electronics", "Inverter Design", "Variable Frequency"],
      icon: Lightbulb,
      color: "from-purple-500 to-purple-600",
      category: "Power Conversion"
    },
    {
      title: "Magnetic Levitation System",
      description: "Developed an analog PID controller circuit and levitation system, and successfully achieved stable levitation of a metallic object.",
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&h=400&fit=crop",
      technologies: ["PID Control", "Analog Circuits", "Control Systems", "Embedded Systems"],
      icon: Magnet,
      color: "from-orange-500 to-orange-600",
      category: "Control Systems"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Sample Projects
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Showcasing innovative engineering solutions across power systems, control systems, and electronics
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <div className={`bg-gradient-to-r ${project.color} text-white px-3 py-1 rounded-full text-sm font-medium`}>
                    {project.category}
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <div className={`bg-gradient-to-r ${project.color} text-white p-3 rounded-lg shadow-lg`}>
                    <project.icon size={24} />
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
