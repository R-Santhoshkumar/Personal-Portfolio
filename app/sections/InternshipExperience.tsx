"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { FaShieldAlt, FaServer, FaBug, FaCode } from "react-icons/fa";
import { MdSecurity } from "react-icons/md";

const internships = [
  {
    title: "Associate - L1 SOC Support Engineer",
    company: "VDart",
    duration: "Apr 2026 - Present",
    icon: <MdSecurity size={24} />,
    description: "Monitoring and analyzing security events, responding to incidents, and supporting SOC operations to ensure organizational security integrity.",
    color: "bg-blue-600"
  },
  {
    title: "Cybersecurity Intern",
    company: "VDart",
    duration: "Aug 2025 - Sep 2025",
    icon: <MdSecurity size={24} />,
    description: "Gained practical knowledge in GRC and cybersecurity, focusing on security audits, VAPT, risk assessment, and ISO policies.",
    color: "bg-green-500"
  },
  {
    title: "Web Security Intern",
    company: "IIIT Kottayam",
    duration: "May 2025 - Jul 2025",
    icon: <FaBug size={24} />,
    description: "Identified and mitigated vulnerabilities like SQLi and XSS using Burp Suite and OWASP ZAP.",
    color: "bg-red-500"
  },
  {
    title: "Technical Intern",
    company: "Bharathidasan University",
    duration: "Jan 2025 - Mar 2025",
    icon: <FaServer size={24} />,
    description: "Focused on core networking concepts and system troubleshooting, hardware/software diagnostics.",
    color: "bg-blue-500"
  },
  {
    title: "Cybersecurity Intern",
    company: "KGiSL",
    duration: "Jul 2024 - Jan 2025",
    icon: <FaShieldAlt size={24} />,
    description: "Hands-on experience in Cisco Networking, Red Hat Linux, and AWS cloud security.",
    color: "bg-purple-500"
  },
  {
    title: "Cybersecurity Intern",
    company: "Edu-versity",
    duration: "May 2024 - Jun 2024",
    icon: <FaCode size={24} />,
    description: "Covered network security, ethical hacking, and threat analysis protocols.",
    color: "bg-yellow-500"
  }
];

export default function InternshipExperience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section id="experience" ref={containerRef} className="py-24 px-4 max-w-5xl mx-auto">
      <div className="space-y-2 mb-16">
        <h2 className="text-cyber-green font-mono text-sm tracking-widest uppercase text-center">Journey</h2>
        <h3 className="text-4xl font-bold text-center">Professional <span className="text-slate-500">Experience</span></h3>
      </div>

      <div className="relative">
        {/* Static Background Line */}
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-white/10" />
        
        {/* Animated Connecting Line */}
        <motion.div 
          style={{ scaleY, originY: 0 }}
          className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-cyber-green z-0"
        />

        <div className="space-y-12 relative z-10">
          {internships.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`flex flex-col md:flex-row items-center gap-8 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Content Card */}
              <div className="flex-1 w-full">
                <div className={`p-6 rounded-3xl glass-morphism border border-white/5 hover:border-cyber-green/30 transition-all group ${
                  index % 2 === 0 ? "md:text-right" : "md:text-left"
                }`}>
                  <span className="text-xs font-mono text-cyber-green mb-1 block">{item.duration}</span>
                  <h4 className="text-xl font-bold mb-1 group-hover:text-cyber-green transition-colors">{item.title}</h4>
                  <p className="text-white/80 font-medium mb-3">{item.company}</p>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>

              {/* Icon / Center Point */}
              <div className="relative z-10 flex items-center justify-center">
                <div className={`w-14 h-14 rounded-full glass-morphism flex items-center justify-center p-2 shadow-2xl border-2 border-white/10 overflow-hidden text-white`}>
                  {item.icon}
                </div>
                <div className="absolute w-2 h-2 rounded-full bg-white md:block hidden" />
              </div>

              {/* Spacer */}
              <div className="flex-1 md:block hidden" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
