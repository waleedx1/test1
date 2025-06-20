
import { FileText, Calendar, Users, ExternalLink } from "lucide-react";

export const ProjectPublications = () => {
  const publications = [
    {
      title: "Design and Development of Improved Micro Butt Welding Power Plant",
      authors: "W. Abdullah, M. Barkat, M. Ijaz, R. Khan, R. Muzammel and A. Raza",
      conference: "2022 International Conference on Electrical Engineering and Sustainable Technologies (ICEEST)",
      location: "Lahore, Pakistan",
      year: "2022",
      description: "Presented an innovative design for economical butt welding machines suitable for local manufacturing environments.",
      keywords: ["Welding Technology", "Power Electronics", "Manufacturing", "Cost Optimization"]
    },
    {
      title: "Design and Development of Solid-state DC Circuit Breaker",
      authors: "U. Tahir, W. Abdullah and L. Ali",
      conference: "2022 International Conference on Electrical Engineering and Sustainable Technologies (ICEEST)",
      location: "Lahore, Pakistan", 
      year: "2022",
      description: "Proposed a novel solid-state DC circuit breaker with enhanced protection capabilities and fast operation.",
      keywords: ["DC Protection", "Power Electronics", "Circuit Breakers", "Fault Clearing"]
    }
  ];

  return (
    <section id="publications" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Publications
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Contributing to the academic community through research publications in electrical engineering
          </p>
        </div>
        
        <div className="space-y-8">
          {publications.map((pub, index) => (
            <div 
              key={pub.title}
              className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">{pub.title}</h3>
                  <div className="flex items-center text-gray-600 mb-2">
                    <Users size={16} className="mr-2" />
                    <span className="italic">{pub.authors}</span>
                  </div>
                  <div className="flex items-center text-blue-600 font-semibold mb-2">
                    <FileText size={16} className="mr-2" />
                    <span>{pub.conference}</span>
                  </div>
                  <div className="flex items-center text-gray-600 mb-4">
                    <Calendar size={16} className="mr-2" />
                    <span>{pub.location}, {pub.year}</span>
                  </div>
                </div>
                <div className="flex items-center text-blue-600 ml-4">
                  <FileText size={32} />
                </div>
              </div>
              
              <p className="text-gray-700 mb-4 leading-relaxed">{pub.description}</p>
              
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Keywords:</h4>
                <div className="flex flex-wrap gap-2">
                  {pub.keywords.map((keyword) => (
                    <span 
                      key={keyword}
                      className="bg-white/70 text-gray-700 px-3 py-1 rounded-full text-sm border"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6">
            <h4 className="text-lg font-bold text-gray-800 mb-2">Research Impact</h4>
            <p className="text-gray-700">
              Both publications were presented at the International Conference on Electrical Engineering 
              and Sustainable Technologies (ICEEST) 2022, contributing to the advancement of power 
              electronics and protection systems research.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
