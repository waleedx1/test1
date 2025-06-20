
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Education } from "@/components/Education";
import { Coursework } from "@/components/Coursework";
import { Experience } from "@/components/Experience";
import { Research } from "@/components/Research";
import { ProjectPublications } from "@/components/ProjectPublications";
import { ProjectPortfolio } from "@/components/ProjectPortfolio";
import { Awards } from "@/components/Awards";
import { Hobbies } from "@/components/Hobbies";
import { Contact } from "@/components/Contact";
import { Navigation } from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Education />
      <Coursework />
      <Experience />
      <Research />
      <ProjectPublications />
      <ProjectPortfolio />
      <Awards />
      <Hobbies />
      <Contact />
    </div>
  );
};

export default Index;
