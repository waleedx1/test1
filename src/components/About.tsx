
export const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <p className="text-lg text-gray-600 leading-relaxed">
              I am a Gold Medalist Electrical Engineer with a strong academic background, 
              complemented by professional and research experience. I graduated first out of 
              200+ students with a GPA of 3.91/4.00 from the University of Lahore.
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              I am highly motivated and driven by curiosity, bringing passion for solving 
              complex problems along with energy, enthusiasm, innovative thinking, and a 
              mindset of continuous improvement. I am a registered engineer with PEC under 
              the Washington Accord.
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              Beyond engineering, I manage a YouTube channel with 38K+ subscribers and am 
              passionate about emerging technologies like Agentic AI, Smart Grids, and Grid-Forming 
              Inverters, along with sustainability, entrepreneurship, and personal development.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow duration-300">
              <div className="text-3xl font-bold text-blue-600 mb-2">1st</div>
              <div className="text-gray-700">Class Rank</div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow duration-300">
              <div className="text-3xl font-bold text-green-600 mb-2">3.91</div>
              <div className="text-gray-700">GPA/4.00</div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow duration-300">
              <div className="text-3xl font-bold text-purple-600 mb-2">38K+</div>
              <div className="text-gray-700">YouTube Subscribers</div>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow duration-300">
              <div className="text-3xl font-bold text-orange-600 mb-2">2</div>
              <div className="text-gray-700">Publications</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
