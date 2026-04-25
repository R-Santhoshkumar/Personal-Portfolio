"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 px-4 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-center gap-16">
        {/* Left Side: Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative group"
        >
          <div className="absolute -inset-4 bg-gradient-to-r from-cyber-green to-cyber-blue opacity-20 group-hover:opacity-40 blur-2xl transition-opacity duration-500 rounded-full" />
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-3xl overflow-hidden border-2 border-white/10 glass shadow-2xl">
            <img
              src="/santhoshkumar.png"
              alt="Santhosh Kumar"
              className="w-full h-full object-cover transition-all duration-700"
            />
          </div>
        </motion.div>

        {/* Right Side: Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex-1 space-y-6"
        >
          <div className="space-y-2">
            <h2 className="text-cyber-green font-mono text-sm tracking-widest uppercase">The Story</h2>
            <h3 className="text-4xl font-bold">Bridging <span className="text-slate-500">Code & Security</span></h3>
          </div>

          <div className="space-y-4 text-slate-400 leading-relaxed text-lg">
            <p>
              I am <span className="text-white font-semibold">Santhoshkumar R</span>, a cybersecurity enthusiast 
              committed to mastering the art of digital defense. My journey is fueled by a relentless curiosity 
              for how systems work and, more importantly, how they can be protected.
            </p>
            <p>
              Specializing in <span className="text-cyber-green">Offensive Security</span>, 
              <span className="text-cyber-blue">Cloud Infrastructure</span>, and 
              <span className="text-cyber-purple">Digital Forensics</span>, I bridge the gap between 
              robust development and ironclad security.
            </p>
            
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <span className="block text-white font-bold mb-1 italic">Mindset</span>
                <span className="text-sm text-slate-500 font-mono">Continuous Learning</span>
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <span className="block text-white font-bold mb-1 italic">Mission</span>
                <span className="text-sm text-slate-500 font-mono">Securing the Digital Frontier</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
