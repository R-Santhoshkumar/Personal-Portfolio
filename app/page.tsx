// app/page.tsx
import Navbar from '@/components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import InternshipExperience from './sections/InternshipExperience';
import Education from './sections/Education';
import Footer from '@/components/footer';

export default function HomePage() {
  return (
    <>
        <Hero />
        <div className="my-10 border-t border-slate-700 w-3/4 mx-auto" />

        <About />
        <div className="my-10 border-t border-slate-700 w-3/4 mx-auto" />

        <InternshipExperience />
        <div className="my-10 border-t border-slate-700 w-3/4 mx-auto" />

        <Skills />
        <div className="my-10 border-t border-slate-700 w-3/4 mx-auto" />

        <Projects />
        <div className="my-10 border-t border-slate-700 w-3/4 mx-auto" />

        <Education />
        <div className="my-10 border-t border-slate-700 w-3/4 mx-auto" />

        <Contact />
      
    </>
  );
}
