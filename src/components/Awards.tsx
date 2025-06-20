
import { Award, Trophy, Medal, Star } from "lucide-react";

export const Awards = () => {
  const awards = [
    {
      title: "Gold Medal",
      description: "Graduated first out of 200+ students with highest GPA",
      icon: Medal,
      color: "from-yellow-500 to-yellow-600",
      year: "2023"
    },
    {
      title: "Dean's List",
      description: "Consistent academic excellence throughout degree",
      icon: Trophy,
      color: "from-blue-500 to-blue-600",
      year: "2019-2023"
    },
    {
      title: "PEC Registered Engineer",
      description: "Professional Engineer Council registration under Washington Accord",
      icon: Award,
      color: "from-green-500 to-green-600",
      year: "2023"
    },
    {
      title: "Research Excellence",
      description: "Published research in peer-reviewed journals",
      icon: Star,
      color: "from-purple-500 to-purple-600",
      year: "2022-2023"
    }
  ];

  return (
    <section id="awards" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Awards & Achievements
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Recognition for academic excellence and professional achievements
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {awards.map((award, index) => (
            <div 
              key={award.title}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 text-center group hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`mx-auto w-16 h-16 rounded-full bg-gradient-to-r ${award.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <award.icon size={32} className="text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-2">{award.title}</h3>
              <p className="text-gray-600 mb-3 leading-relaxed">{award.description}</p>
              <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${award.color} text-white`}>
                {award.year}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
