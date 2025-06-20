
import { ArrowDown, Mail, LinkedinIcon, GithubIcon, Youtube } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center animate-fade-in">
          {/* Left side - Image */}
          <div className="flex justify-center lg:justify-start">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
              alt="Professional headshot"
              className="w-80 h-80 rounded-full shadow-2xl border-4 border-white hover:scale-105 transition-transform duration-300"
            />
          </div>
          
          {/* Right side - Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">
              Waleed <span className="text-blue-600">Abdullah</span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl text-gray-600 mb-6 font-light">
              Gold Medalist Electrical Engineer
            </h2>
            
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              Highly motivated Electrical Engineer with a strong academic background, 
              complemented by professional and research experience. Passionate about solving 
              complex problems with energy, enthusiasm, innovative thinking, and a mindset 
              of continuous improvement.
            </p>
            
            {/* Social Links */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-8">
              <a 
                href="mailto:waleed.abdullah@email.com"
                className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <Mail size={20} />
                Email
              </a>
              
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl text-gray-700 hover:text-blue-600 transition-all duration-300 hover:scale-110"
                >
                  <LinkedinIcon size={24} />
                </a>
                <a 
                  href="#" 
                  className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl text-gray-700 hover:text-blue-600 transition-all duration-300 hover:scale-110"
                >
                  <GithubIcon size={24} />
                </a>
                <a 
                  href="#" 
                  className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl text-gray-700 hover:text-red-600 transition-all duration-300 hover:scale-110"
                >
                  <Youtube size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="text-center mt-12">
          <a 
            href="#about" 
            className="inline-flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-300 animate-bounce"
          >
            <ArrowDown size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};
