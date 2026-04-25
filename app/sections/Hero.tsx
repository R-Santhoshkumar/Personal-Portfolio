"use client";

import { motion } from "framer-motion";

import { FaTerminal, FaDownload, FaLinkedin, FaGithub } from "react-icons/fa";

import { FaTerminal, FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

import CyberGlobe from "@/components/CyberGlobe";

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
        className="flex-1 space-y-8 z-10"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        <div className="space-y-2">
          <motion.span 
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            className="text-cyber-green font-mono text-sm tracking-widest uppercase block"

          >
            &lt; Ready to secure /&gt;
          </motion.span>
          
          <motion.h1 
            variants={{
              hidden: { opacity: 0, x: -30 },
              visible: { opacity: 1, x: 0 }
            }}
            className="text-5xl md:text-7xl font-black tracking-tight leading-none pr-4"
          >
            SANTHOSH<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-green to-cyber-blue">KUMAR</span><br />
            <span className="text-white">R</span>
          </motion.h1>
        </div>

        <motion.p 
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
          className="text-lg md:text-xl text-slate-400 max-w-xl leading-relaxed"
        >
          A dedicated <span className="text-white font-semibold">Associate L1 SOC Support Engineer</span> and 
          <span className="text-white font-semibold"> Cybersecurity Enthusiast</span> focused on building 
          secure, scalable, and resilient digital infrastructures.
        </motion.p>

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
            href="/resume.md"
            download
            className="px-8 py-4 border border-white/10 glass font-bold rounded-xl transition-all flex items-center gap-2"
          >
            <FaDownload className="text-sm" />
            Resume

          >
            &lt; Ready to secure /&gt;
          </motion.span>
          
          <motion.h1 
            variants={{
              hidden: { opacity: 0, x: -30 },
              visible: { opacity: 1, x: 0 }
            }}
            className="text-5xl md:text-7xl font-black tracking-tight leading-none pr-4"
          >
            SANTHOSH<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-green to-cyber-blue">KUMAR</span><br />
            <span className="text-white">R</span>
          </motion.h1>
        </div>

        <motion.p 
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
          className="text-lg md:text-xl text-slate-400 max-w-xl leading-relaxed"
        >
          A dedicated <span className="text-white font-semibold">Associate L1 SOC Support Engineer</span> and 
          <span className="text-white font-semibold"> Cybersecurity Enthusiast</span> focused on building 
          secure, scalable, and resilient digital infrastructures.
        </motion.p>

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
            href="#contact"
            className="px-8 py-4 border border-white/10 glass font-bold rounded-xl transition-all flex items-center gap-2"
          >
            <FaEnvelope className="text-sm" />
            Contact Me

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
