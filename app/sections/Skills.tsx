"use client";

import { motion } from "framer-motion";
import { FaShieldAlt, FaCloud, FaCode, FaTools } from "react-icons/fa";

const skillCategories = [
  {
    title: "Security Tools",
    icon: <FaShieldAlt />,
    skills: [
      { name: "Burp Suite", logo: "/icons/burp.png" },
      { name: "OWASP ZAP", logo: "/icons/zap.png" },
      { name: "Kali Linux", logo: "/icons/kalilinux.png" },
      { name: "Nessus", logo: "/icons/Nessus1.png" },
      { name: "Wireshark", logo: "/icons/wireshark.png" },
      { name: "Autopsy", logo: "/icons/autopsy.png" },
      { name: "Sophos", logo: "https://images.contentstack.io/v3/assets/blt38f1f401b66100ad/blt620a39aa9a1ee88d/68c46bea0c78665c44b7cd9f/logo.png?width=52&quality=80&auto=webp&format=auto&cache=true&immutable=true&cache-control=max-age%3D31536000" },
    ]
  },
  {
    title: "Cloud & Dev",
    icon: <FaCloud />,
    skills: [
      { name: "Azure", logo: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flogos-world.net%2Fwp-content%2Fuploads%2F2021%2F05%2FAzure-Logo.png&f=1&nofb=1&ipt=d4aa53f1964f1bd7e3b5c66e4bfafe448c1b8fa25526ba1aff725b595d9139a8" },
      { name: "AWS", logo: "/icons/aws.png" },
      { name: "GitHub", logo: "https://cdn-icons-png.flaticon.com/512/25/25231.png" },
    ]
  },
  {
    title: "Languages",
    icon: <FaCode />,
    skills: [
      { name: "Python", logo: "https://cdn-icons-png.flaticon.com/512/5968/5968350.png" },
      { name: "JavaScript", logo: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png" },
      { name: "React", logo: "https://cdn-icons-png.flaticon.com/512/1126/1126012.png" },
      { name: "Node.js", logo: "https://cdn-icons-png.flaticon.com/512/5968/5968322.png" },
    ]
  },
  {
    title: "Infrastructure",
    icon: <FaTools />,
    skills: [
      { name: "Linux", logo: "https://cdn-icons-png.flaticon.com/512/6124/6124995.png" },
      { name: "Tailwind", logo: "https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg" },
      { name: "HTML/CSS", logo: "https://cdn-icons-png.flaticon.com/512/732/732212.png" },
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-4 max-w-7xl mx-auto">
      <div className="text-center space-y-4 mb-16">
        <h2 className="text-cyber-green font-mono text-sm tracking-widest uppercase">Expertise</h2>
        <h3 className="text-4xl font-bold">Tech <span className="text-slate-500">Stack</span></h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {skillCategories.map((cat, i) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-morphism rounded-3xl p-6 border border-white/5"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-cyber-green/10 rounded-lg text-cyber-green">
                {cat.icon}
              </div>
              <h4 className="font-bold text-lg">{cat.title}</h4>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {cat.skills.map(skill => (
                <div key={skill.name} className="flex flex-col items-center gap-2 p-3 bg-white/5 rounded-2xl hover:bg-white/10 transition-colors">
                  <div className="w-10 h-10 flex items-center justify-center text-white">
                    <img src={skill.logo} alt={skill.name} className="max-w-full max-h-full object-contain transition-all" />
                  </div>
                  <span className="text-[10px] text-slate-400 font-medium text-center">{skill.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
