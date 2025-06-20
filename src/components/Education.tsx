
import { GraduationCap, Award, BookOpen, ExternalLink } from "lucide-react";

export const Education = () => {
  const education = [
    {
      degree: "Bachelor of Science in Electrical Engineering",
      school: "University of Lahore",
      year: "Sep 2016 - Jun 2020",
      gpa: "3.91/4.00",
      rank: "1st out of 200+",
      honors: "Gold Medal • Highest Distinction",
      verification: "WES Verified Credential"
    }
  ];

  const certifications = [
    "Registered Engineer with PEC under Washington Accord (ELECT/86064)",
    "Advanced Power System Protection – iMentors (April 2025)",
    "Substation Design using DIgSILENT PowerFactory – iMentors (May 2025)",
    "The Complete Electrical Power with ETAP & Manual Analysis – Udemy (Ongoing)"
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Education & Certifications
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-8 flex items-center">
              <GraduationCap className="mr-3 text-blue-600" size={28} />
              Education
            </h3>
            
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                  <h4 className="text-xl font-bold text-gray-800 mb-2">{edu.degree}</h4>
                  <p className="text-blue-600 font-semibold mb-2">{edu.school}</p>
                  <div className="flex flex-col sm:flex-row sm:justify-between text-gray-600 mb-2">
                    <span>{edu.year}</span>
                    <span>GPA: {edu.gpa}</span>
                  </div>
                  <p className="text-gray-700 mb-2">
                    <strong>Class Rank:</strong> {edu.rank}
                  </p>
                  <p className="text-gray-700 mb-2">
                    <strong>Honors:</strong> {edu.honors}
                  </p>
                  <div className="flex items-center text-blue-600">
                    <ExternalLink size={16} className="mr-2" />
                    <span className="text-sm">{edu.verification}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-8 flex items-center">
              <Award className="mr-3 text-blue-600" size={28} />
              Certifications & Training
            </h3>
            
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-gradient-to-r from-green-50 to-teal-50 rounded-lg p-4 hover:shadow-lg transition-shadow duration-300 flex items-center">
                  <BookOpen className="text-green-600 mr-4 flex-shrink-0" size={20} />
                  <span className="text-gray-700">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
