// app/sections/About.tsx
"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 px-4 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
      {/* Left Side: Intro */}
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="md:w-1/2 text-left"
      >
        <h2 className="text-3xl font-bold text-green-400 mb-6">About Me</h2>
        <p className="text-slate-300 text-base text-lg leading-relaxed">
          Hello! I’m <strong>R. Santhoshkumar</strong>, a passionate and self-motivated cybersecurity enthusiast driven by a deep interest in building secure, efficient systems. My core focus lies in <strong>Cybersecurity</strong>, with particular attention to areas such as <strong>Cloud Security</strong>, <strong>Digital Forensics</strong>, and <strong>Offensive Security</strong>.
          <br /><br />
          I’ve worked independently on various security-focused projects and am continually expanding my knowledge in areas like <strong>Linux environments</strong>, <strong>networking</strong>, and threat analysis. I take pride in exploring vulnerabilities, automating defense techniques, and contributing to a safer digital space.
          <br /><br />
          Outside the command line, I’m always experimenting with tools, writing scripts, and staying updated with the latest in infosec. I’m actively seeking opportunities to learn, collaborate, and contribute to impactful security initiatives.
          <br /><br />
          If you're looking to collaborate or connect on all things tech and security, let’s talk!
        </p>
      </motion.div>

      {/* Right Side: Terminal UI */}
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="md:w-1/2 w-full items-center"
      >
        {/* Terminal component placeholder */}
        {/* Replace with the custom Kali-style terminal you already created */}
        <center><div className="rounded-lg overflow-hidden shadow-lg  w-100 text-green-400 font-mono">
          <img src="/santhoshkumar_profile.png" alt="" />
        </div></center>
      </motion.div>
    </section>
  );
}
