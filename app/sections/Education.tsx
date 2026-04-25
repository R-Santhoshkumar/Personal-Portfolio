"use client";

import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

const education = [
  {
    title: "M.Tech Integrated CSE",
    institution: "Bharathidasan University",
    year: "2020 - 2026",
    details: "6-year integrated program focusing on advanced software engineering, network security, and modern computing architectures.",
    status: "Ongoing"
  },
  {
    title: "Higher Secondary Education",
    institution: "Sri Chaitanya Institute",
    year: "2019 - 2020",
    details: "Specialized in Mathematics, Physics, and Chemistry (MPC) with a focus on logical reasoning and technical fundamentals.",
    status: "Completed"
  },
  {
    title: "Secondary Education",
    institution: "Kendriya Vidyalaya",
    year: "2017 - 2018",
    details: "Foundational academic training with a strong emphasis on core scientific and mathematical principles.",
    status: "Completed"
  }
];

export default function Education() {
  return (
    <section id="education" className="py-24 px-4 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
        <div className="space-y-2">
          <h2 className="text-cyber-green font-mono text-sm tracking-widest uppercase">Academic Path</h2>
          <h3 className="text-4xl font-bold">Education <span className="text-slate-500">History</span></h3>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {education.map((edu, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group relative p-8 rounded-3xl border border-white/5 glass-morphism overflow-hidden flex flex-col"
          >
            <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
              <FaGraduationCap size={80} />
            </div>

            <div className="relative z-10 space-y-4 flex-grow">
              <div className="flex items-start justify-between">
                <span className="px-3 py-1 bg-cyber-green/10 text-cyber-green text-[10px] font-bold uppercase tracking-widest rounded-full border border-cyber-green/20">
                  {edu.status}
                </span>
                <span className="text-slate-500 font-mono text-sm">{edu.year}</span>
              </div>

              <h4 className="text-2xl font-bold leading-tight group-hover:text-cyber-green transition-colors">
                {edu.title}
              </h4>
              <p className="text-white/80 font-medium">{edu.institution}</p>
              <p className="text-slate-400 text-sm leading-relaxed">
                {edu.details}
              </p>
            </div>
            
            <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
              <div className="flex gap-1">
                {[1, 2, 3].map(dot => (
                  <div key={dot} className="w-1.5 h-1.5 rounded-full bg-cyber-green/30" />
                ))}
              </div>
              <FaGraduationCap className="text-slate-700" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
