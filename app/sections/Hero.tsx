"use client";

import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { FaUser, FaDownload } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex flex-col md:flex-row items-center justify-between gap-12 py-20 px-6 md:px-12 lg:px-20 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyber-green/10 rounded-full blur-[128px] -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyber-blue/10 rounded-full blur-[128px] -z-10" />

      {/* Left Content */}
      <motion.div
        className="space-y-6 w-full md:w-1/2"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <h1 className="text-2xl sm:text-3xl md:text-5xl text-[#00ff9c] font-extrabold leading-tight bg-clip-text drop-shadow-[0_2px_2px_rgba(0,255,156,0.4)]">
          👋 Hello, I'm SANTHOSHKUMAR R
        </h1>

        <h2 className="text-base sm:text-lg md:text-2xl bg-clip-text text-[#00ff9c]">
          Cybersecurity Enthusiast 🔐 | Developer 💻
        </h2>

        <motion.div 
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
          className="flex flex-wrap gap-4"
        >
          <motion.a
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(0, 255, 156, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            href="#projects"
            className="px-8 py-4 bg-cyber-green text-black font-bold rounded-xl shadow-lg shadow-cyber-green/20 transition-all flex items-center gap-2"
          >
            <FaTerminal className="text-sm" />
            Explore Projects
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
            whileTap={{ scale: 0.95 }}
            href="/resume.pdf"
            download
            className="border border-green-500 text-green-300 px-4 py-2 sm:px-6 sm:py-3 rounded-full hover:bg-green-500 hover:text-black transition shadow-md flex items-center justify-center gap-2 w-full sm:w-auto"
          >
            <FaDownload className="w-4 h-4" />
            Resume CV
          </motion.a>
        </motion.div>

        <motion.div 
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 }
          }}
          className="flex items-center gap-6 pt-4 text-slate-500"
        >
          <a href="https://www.linkedin.com/in/santhoshkumar-r07" target="_blank" className="hover:text-cyber-green transition-colors hover:scale-110"><FaLinkedin size={24} /></a>
          <a href="https://github.com/R-Santhoshkumar" target="_blank" className="hover:text-cyber-green transition-colors hover:scale-110"><FaGithub size={24} /></a>
        </motion.div>
      </motion.div>

      {/* Right Content - 3D & Terminal */}
      <motion.div
        className="flex-1 relative w-full flex flex-col items-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="w-full relative">
          <CyberGlobe />
          
          {/* Floating Terminal Overlay */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[90%] md:w-[80%] glass-morphism rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
          >
            <div className="bg-white/5 px-4 py-2 flex items-center justify-between border-b border-white/5">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
              </div>
              <span className="text-[10px] font-mono text-slate-500">santhosh@kali: ~</span>
            </div>
            <div className="p-4 font-mono text-xs md:text-sm space-y-2">
              <div className="flex gap-2">
                <span className="text-cyber-green font-bold">➜</span>
                <span className="text-cyber-purple font-bold">whoami</span>
              </div>
              <div className="text-white pl-4">Santhoshkumar_R [Associate_SOC_Engineer]</div>
              
              <div className="flex gap-2">
                <span className="text-cyber-green font-bold">➜</span>
                <span className="text-cyber-purple font-bold">ls</span>
                <span className="text-white">active_tasks/</span>
              </div>
              <div className="text-cyber-blue font-bold pl-4 grid grid-cols-2 gap-x-4">
                <span>Log_Analysis.sh</span>
                <span>Incident_Response.py</span>
                <span>Vulnerability_Scan.nessus</span>
                <span>Traffic_Audit.pcap</span>
              </div>
              
              <div className="flex gap-2 items-center">
                <span className="text-cyber-green font-bold">➜</span>
                <span className="text-cyber-purple font-bold">tail</span>
                <span className="text-white">-f soc_logs.txt</span>
              </div>
              <div className="text-red-400/80 text-[10px] pl-4 animate-pulse">
                [ALERT] Suspicious SSH activity detected on 192.168.1.105...
              </div>
              
              <div className="flex gap-2 items-center">
                <span className="text-cyber-green font-bold">➜</span>
                <div className="w-2 h-4 bg-cyber-green animate-pulse" />
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
