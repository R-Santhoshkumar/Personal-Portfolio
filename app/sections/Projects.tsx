"use client";

import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub, FaShieldAlt, FaNetworkWired, FaCloud, FaSearch } from "react-icons/fa";

const projects = [
  {
    title: "VAPT Project",
    category: "Offensive Security",
    icon: <FaShieldAlt className="text-red-400" />,
    desc: "Full-scale VAPT project using Kali Linux, SEToolkit, and Nessus. Simulated phishing and MitM attacks, followed by host hardening via GPO.",
    tech: ["Kali Linux", "Nessus", "SEToolkit", "VAPT"],
    color: "from-red-500/20 to-orange-500/20",
    size: "md:col-span-2"
  },
  {
    title: "Enterprise Network",
    category: "Networking",
    icon: <FaNetworkWired className="text-blue-400" />,
    desc: "Multi-location network design with OSPF, ACLs, and PAT using Cisco Packet Tracer.",
    tech: ["Cisco Packet Tracer", "OSPF", "ACLs"],
    color: "from-blue-500/20 to-cyan-500/20",
    size: "md:col-span-1"
  },
  {
    title: "Azure Bastion & Peering",
    category: "Cloud Security",
    icon: <FaCloud className="text-cyber-green" />,
    desc: "Secure VNet peering with Azure Bastion for private VM management.",
    tech: ["Azure", "Bastion", "VNet"],
    color: "from-cyber-green/20 to-emerald-500/20",
    size: "md:col-span-1"
  },
  {
    title: "Digital Forensics",
    category: "Investigation",
    icon: <FaSearch className="text-purple-400" />,
    desc: "Deep-dive investigation using Autopsy 4.21.0. Recovered deleted files and analyzed registry timelines.",
    tech: ["Autopsy", "Forensics", "NTFS"],
    color: "from-purple-500/20 to-pink-500/20",
    size: "md:col-span-2"
  },
  {
    title: "High Availability Web",
    category: "Cloud Infrastructure",
    icon: <FaCloud className="text-orange-400" />,
    desc: "Load-balanced web infrastructure on Azure with failover mechanisms.",
    tech: ["Load Balancer", "Azure", "NSGs"],
    color: "from-orange-500/20 to-yellow-500/20",
    size: "md:col-span-2"
  },
  {
    title: "Secure Subnet Design",
    category: "Cloud Security",
    icon: <FaShieldAlt className="text-cyber-blue" />,
    desc: "Segmented public/private subnets with strict NSG rules for isolation.",
    tech: ["Azure", "NSGs", "Linux"],
    color: "from-cyber-blue/20 to-indigo-500/20",
    size: "md:col-span-1"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div className="space-y-2">
          <h2 className="text-cyber-green font-mono text-sm tracking-widest uppercase">My Portfolio</h2>
          <h3 className="text-4xl font-bold">Featured <span className="text-slate-500">Projects</span></h3>
        </div>
        <p className="text-slate-400 max-w-md text-sm md:text-base">
          A collection of projects ranging from offensive security simulations to 
          scalable cloud architecture and digital forensics.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`group relative p-8 rounded-3xl border border-white/5 glass-morphism overflow-hidden ${project.size}`}
          >
            {/* Background Glow */}
            <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
            
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex items-start justify-between mb-6">
                <div className="p-3 bg-white/5 rounded-2xl border border-white/10 text-2xl">
                  {project.icon}
                </div>
                <div className="flex gap-3 text-slate-500">
                  <a href="#" className="hover:text-white transition-colors"><FaGithub size={20} /></a>
                  <a href="#" className="hover:text-white transition-colors"><FaExternalLinkAlt size={18} /></a>
                </div>
              </div>

              <span className="text-xs font-mono text-cyber-green mb-2 uppercase tracking-wider">
                {project.category}
              </span>
              <h4 className="text-2xl font-bold mb-3 group-hover:text-cyber-green transition-colors">
                {project.title}
              </h4>
              <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                {project.desc}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map(t => (
                  <span key={t} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-medium text-slate-300">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
