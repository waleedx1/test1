
import { ExternalLink, Github, Zap, Cpu, Wind, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Portfolio = () => {
  const projects = [
    {
      title: "Smart Grid Monitoring System",
      description: "IoT-based monitoring system for electrical grid parameters with real-time data analytics and predictive maintenance capabilities.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop",
      technologies: ["Python", "IoT", "MQTT", "MongoDB", "React"],
      icon: Zap,
      category: "Power Systems",
      links: {
        github: "#",
        demo: "#"
      }
    },
    {
      title: "Industrial Automation Controller",
      description: "PLC-based automation system for manufacturing processes with HMI interface and data logging capabilities.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
      technologies: ["PLC", "SCADA", "C++", "Modbus", "SQL"],
      icon: Cpu,
      category: "Control Systems",
      links: {
        github: "#",
        demo: "#"
      }
    },
    {
      title: "Wind Farm Control System",
      description: "Centralized control system for wind turbine farm optimization with weather prediction integration and grid synchronization.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop",
      technologies: ["MATLAB", "Simulink", "C#", "OPC-UA", "PostgreSQL"],
      icon: Wind,
      category: "Renewable Energy",
      links: {
        github: "#",
        demo: "#"
      }
    },
    {
      title: "Home Energy Management System",
      description: "Smart home energy optimization system with solar panel integration, battery storage, and mobile app control.",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&h=400&fit=crop",
      technologies: ["Arduino", "React Native", "Firebase", "MQTT", "Solar"],
      icon: Home,
      category: "Smart Home",
      links: {
        github: "#",
        demo: "#"
      }
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Portfolio
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore my latest projects showcasing expertise in electrical engineering, 
            automation, and renewable energy systems.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:scale-[1.02]"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg p-2">
                    <project.icon className="text-blue-600" size={24} />
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-3">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="flex items-center hover:bg-blue-50 hover:border-blue-300 transition-colors"
                  >
                    <Github size={16} className="mr-2" />
                    Code
                  </Button>
                  <Button 
                    size="sm"
                    className="flex items-center bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Demo
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            size="lg"
            variant="outline"
            className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};
