// app/page.tsx
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import InternshipExperience from "./sections/InternshipExperience";
import Education from "./sections/Education";

export default function HomePage() {
  return (
    <div className="space-y-0">
      <Hero />
      <About />
      <InternshipExperience />
      <Skills />
      <Projects />
      <Education />
      <Contact />
    </div>
  );
}
