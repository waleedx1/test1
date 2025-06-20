
import { Youtube, Zap, TrendingUp, Heart, Mountain, Users } from "lucide-react";

export const Hobbies = () => {
  const hobbies = [
    {
      title: "YouTube Content Creation",
      icon: Youtube,
      description: "Own and manage a YouTube channel with 38K+ subscribers, creating educational and engaging content",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=300&fit=crop",
      color: "from-red-500 to-red-600"
    },
    {
      title: "Emerging Technologies",
      icon: Zap,
      description: "Passionate about Agentic AI, LLMs, Blockchain, Smart Grids, IBRs, and Grid-Forming Inverters",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop",
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Entrepreneurship & Finance",
      icon: TrendingUp,
      description: "Exploring entrepreneurial opportunities and developing financial literacy skills",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop",
      color: "from-green-500 to-green-600"
    },
    {
      title: "Personal Development",
      icon: Heart,
      description: "Committed to continuous learning, self-improvement, and maintaining physical fitness",
      image: "https://images.unsplash.com/photo-1434596922112-19c563067271?w=400&h=300&fit=crop",
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Outdoor Exploration",
      icon: Mountain,
      description: "Enjoying outdoor activities and exploring nature for inspiration and relaxation",
      image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=400&h=300&fit=crop",
      color: "from-orange-500 to-orange-600"
    },
    {
      title: "Professional Networking",
      icon: Users,
      description: "Building meaningful connections and contributing to the professional engineering community",
      image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=400&h=300&fit=crop",
      color: "from-indigo-500 to-indigo-600"
    }
  ];

  return (
    <section id="hobbies" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Hobbies & Interests
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Beyond engineering, I pursue diverse interests that fuel creativity and personal growth
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hobbies.map((hobby, index) => (
            <div 
              key={hobby.title}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={hobby.image} 
                  alt={hobby.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <div className={`bg-gradient-to-r ${hobby.color} text-white p-3 rounded-lg shadow-lg`}>
                    <hobby.icon size={24} />
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">{hobby.title}</h3>
                <p className="text-gray-600 leading-relaxed">{hobby.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Life Philosophy</h3>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            I believe in continuous learning and maintaining a balance between technical expertise and personal interests. 
            My diverse passions not only provide personal fulfillment but also inspire innovative approaches to engineering challenges. 
            Whether I'm creating YouTube content, exploring emerging technologies, or engaging with the professional community, 
            each experience contributes to my growth as both an engineer and an individual.
          </p>
        </div>
      </div>
    </section>
  );
};
