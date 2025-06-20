
import { FileText, ExternalLink, Calendar, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Publications = () => {
  const publications = [
    {
      title: "Machine Learning Approaches for Smart Grid Load Forecasting and Optimization",
      authors: ["J. Smith", "S. Johnson", "M. Davis"],
      journal: "IEEE Transactions on Smart Grid",
      year: "2020",
      volume: "11",
      issue: "4",
      pages: "3245-3256",
      doi: "10.1109/TSG.2020.1234567",
      type: "Journal Article",
      abstract: "This paper presents novel machine learning algorithms for predicting and optimizing electrical load distribution in smart grid networks, demonstrating significant improvements in efficiency and reliability.",
      citations: 47
    },
    {
      title: "High-Efficiency Wireless Power Transfer System Design for Electric Vehicle Applications",
      authors: ["J. Smith", "M. Chen", "R. Wilson"],
      conference: "IEEE International Conference on Wireless Power Transfer (ICWPT)",
      year: "2018",
      pages: "156-161",
      location: "Montreal, Canada",
      type: "Conference Paper",
      abstract: "Investigation of coil design optimization techniques for wireless charging systems, achieving 85% power transfer efficiency while minimizing electromagnetic interference.",
      citations: 23
    },
    {
      title: "Renewable Energy Integration Challenges in Modern Power Systems: A Comprehensive Review",
      authors: ["J. Smith", "A. Thompson", "K. Patel", "L. Rodriguez"],
      journal: "Renewable and Sustainable Energy Reviews",
      year: "2019",
      volume: "98",
      pages: "1-18",
      doi: "10.1016/j.rser.2019.01.045",
      type: "Review Article",
      abstract: "Comprehensive analysis of technical challenges and solutions for integrating renewable energy sources into existing power grid infrastructure.",
      citations: 89
    }
  ];

  return (
    <section id="publications" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Publications & Research Output
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Peer-reviewed publications contributing to the advancement of electrical engineering knowledge
          </p>
        </div>
        
        <div className="space-y-8">
          {publications.map((pub, index) => (
            <div 
              key={pub.title}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center mb-3">
                    <FileText className="text-blue-600 mr-3" size={24} />
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      {pub.type}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3 leading-tight">
                    {pub.title}
                  </h3>
                </div>
              </div>
              
              <div className="mb-4">
                <div className="flex items-center text-gray-600 mb-2">
                  <Users size={16} className="mr-2" />
                  <span className="font-medium">Authors:</span>
                  <span className="ml-2">{pub.authors.join(", ")}</span>
                </div>
                
                <div className="flex flex-col sm:flex-row sm:items-center text-gray-600 space-y-1 sm:space-y-0 sm:space-x-6">
                  <div className="flex items-center">
                    <Calendar size={16} className="mr-2" />
                    {pub.year}
                  </div>
                  
                  {pub.journal && (
                    <div>
                      <strong>{pub.journal}</strong>
                      {pub.volume && pub.issue && (
                        <span>, Vol. {pub.volume}, Issue {pub.issue}</span>
                      )}
                      {pub.pages && <span>, pp. {pub.pages}</span>}
                    </div>
                  )}
                  
                  {pub.conference && (
                    <div>
                      <strong>{pub.conference}</strong>
                      {pub.location && <span>, {pub.location}</span>}
                      {pub.pages && <span>, pp. {pub.pages}</span>}
                    </div>
                  )}
                </div>
              </div>
              
              <p className="text-gray-700 mb-4 leading-relaxed">{pub.abstract}</p>
              
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center space-x-4 mb-4 sm:mb-0">
                  {pub.doi && (
                    <Button variant="outline" size="sm" className="text-sm">
                      <ExternalLink size={14} className="mr-2" />
                      DOI: {pub.doi}
                    </Button>
                  )}
                  <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                    {pub.citations} citations
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Total Citations: <strong>159</strong> | H-index: <strong>3</strong>
          </p>
          <Button 
            variant="outline"
            className="border-blue-600 text-blue-600 hover:bg-blue-50"
          >
            View Full Publication List
          </Button>
        </div>
      </div>
    </section>
  );
};
