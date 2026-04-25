"use client";

import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope, FaPaperPlane } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-4 max-w-5xl mx-auto">
      <div className="glass-morphism rounded-[40px] p-8 md:p-16 border border-white/5 relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-cyber-green/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyber-blue/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

        <div className="relative z-10 flex flex-col items-center text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-cyber-green font-mono text-sm tracking-widest uppercase">Get In Touch</h2>
            <h3 className="text-4xl md:text-6xl font-bold tracking-tight">
              Let's build something <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-green to-cyber-blue italic">
                secure together.
              </span>
            </h3>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
              I'm currently looking for new opportunities and collaborations in cybersecurity. 
              Whether you have a question or just want to connect, my inbox is always open!
            </p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-6"
          >
            {[
              { icon: <FaEnvelope />, href: "mailto:dr.r.santhoshkumar@gmail.com", label: "Email" },
              { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/santhoshkumar-r07", label: "LinkedIn" },
              { icon: <FaGithub />, href: "https://github.com/R-Santhoshkumar", label: "GitHub" }
            ].map((link, i) => (
              <motion.a
                key={i}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-cyber-green/30 transition-all text-white font-bold group"
              >
                <span className="text-cyber-green group-hover:scale-110 transition-transform">{link.icon}</span>
                {link.label}
              </motion.a>
            ))}
          </motion.div>

          <a 
            href="mailto:dr.r.santhoshkumar@gmail.com"
            className="flex items-center gap-2 text-cyber-green font-mono text-sm hover:underline underline-offset-8"
          >
            <FaPaperPlane className="text-xs" />
            dr.r.santhoshkumar@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
}
