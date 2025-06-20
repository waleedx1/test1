
import { Mail, LinkedinIcon, GithubIcon, Youtube, Award } from "lucide-react";

export const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "wajahat.abdullah@email.com",
      href: "mailto:wajahat.abdullah@email.com"
    },
    {
      icon: Award,
      label: "PEC Registration",
      value: "ELECT/86064",
      href: "https://verification.pec.org.pk/v/eV/sED/i.aspx?eid=322F303836303634"
    }
  ];

  const socialLinks = [
    {
      icon: LinkedinIcon,
      label: "LinkedIn",
      href: "#",
      color: "hover:text-blue-600"
    },
    {
      icon: GithubIcon,
      label: "GitHub", 
      href: "#",
      color: "hover:text-gray-800"
    },
    {
      icon: Youtube,
      label: "YouTube (38K+ Subscribers)",
      href: "#",
      color: "hover:text-red-600"
    }
  ];

  const achievements = [
    "Gold Medal for securing first position in B.Sc. Electrical Engineering",
    "Academic Excellence Award at UOL Annual Dinner & Excellence Awards Ceremony",
    "Gold Medal winner in Inquizitive'2018 quiz competition",
    "Academic Excellence Scholarship recipient for every semester",
    "Ranked first in every semester of B.Sc. Electrical Engineering"
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-600 to-purple-700">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Interested in collaborating on electrical engineering projects or discussing 
            innovative solutions? I'd love to hear from you!
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto mb-12">
          {/* Contact Information */}
          <div className="space-y-6 mb-12">
            {contactInfo.map((info) => (
              <a
                key={info.label}
                href={info.href}
                className="flex items-center p-6 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all duration-300 group"
              >
                <div className="bg-white/20 p-4 rounded-lg mr-6 group-hover:bg-white/30 transition-colors">
                  <info.icon className="text-white" size={28} />
                </div>
                <div>
                  <p className="text-blue-200 text-sm font-medium">{info.label}</p>
                  <p className="text-white font-semibold text-lg">{info.value}</p>
                </div>
              </a>
            ))}
          </div>
          
          {/* Social Links */}
          <div className="text-center">
            <h4 className="text-xl font-semibold text-white mb-6">Follow Me</h4>
            <div className="flex justify-center space-x-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="bg-white/10 p-4 rounded-lg hover:bg-white/20 transition-all duration-300 hover:scale-110 group"
                  title={social.label}
                >
                  <social.icon className="text-white group-hover:text-blue-200" size={28} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Awards Section */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 mb-8">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Awards & Achievements</h3>
          <div className="grid gap-3">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex items-center text-blue-100">
                <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3 flex-shrink-0"></div>
                {achievement}
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center pt-8 border-t border-white/20">
          <p className="text-blue-200">
            © 2024 Wajahat Abdullah. Gold Medalist Electrical Engineer passionate about innovation and excellence.
          </p>
        </div>
      </div>
    </section>
  );
};
