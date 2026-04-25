"use client";

import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full py-12 border-t border-white/5 bg-[#0b1120] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="text-xl font-bold text-cyber-green tracking-tighter">
            SK<span className="text-white">.</span>
          </span>
          <p className="text-slate-500 text-xs font-mono uppercase tracking-[0.2em]">
            Securing the digital frontier
          </p>
        </div>

        <div className="text-slate-400 text-sm font-medium">
          © {currentYear} • <span className="text-white">Santhoshkumar R</span>
        </div>

        <div className="flex items-center gap-6">
          <motion.a 
            whileHover={{ y: -2 }}
            href="#home" 
            className="text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-cyber-green transition-colors"
          >
            Back to Top
          </motion.a>
        </div>
      </div>
      
      {/* Decorative Line */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyber-green/20 to-transparent" />
    </footer>
  );
}
