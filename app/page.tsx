// app/page.tsx
import Navbar from "@/components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import InternshipExperience from "./sections/InternshipExperience";
import Education from "./sections/Education";
import Footer from "@/components/footer";

export default function HomePage() {
  return (
    <>
      <Hero />
      <div className="relative w-3/4 mx-auto my-10 h-[1px] bg-slate-800 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-400 to-transparent " />
      </div>

      <About />
      <div className="relative w-3/4 mx-auto my-10 h-[1px] bg-slate-800 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-400 to-transparent " />
      </div>

      <InternshipExperience />
      <div className="relative w-3/4 mx-auto my-10 h-[1px] bg-slate-800 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-400 to-transparent " />
      </div>

      <Skills />
      <div className="relative w-3/4 mx-auto my-10 h-[1px] bg-slate-800 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-400 to-transparent " />
      </div>

      <Projects />
      <div className="relative w-3/4 mx-auto my-10 h-[1px] bg-slate-800 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-400 to-transparent " />
      </div>

      <Education />
      <div className="relative w-3/4 mx-auto my-10 h-[1px] bg-slate-800 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-400 to-transparent " />
      </div>

      <Contact />
    </>
  );
}
