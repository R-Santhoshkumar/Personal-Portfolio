"use client";

import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-15 px-4 max-w-7xl mx-auto flex flex-col items-center gap-2"
    >
      <h2 className="text-3xl font-bold mb-4 text-green-400 text-center">
        Contact Me
      </h2>

      <p className="text-gray-400 mb-8 text-center max-w-2xl text-base md:text-lg">
        Whether you’d like to collaborate, chat about cybersecurity, or just say hello —
        feel free to reach out through any of the platforms below. I'm always open to
        connecting with like-minded people!
      </p>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="flex items-center gap-6 md:gap-10"
      >
        {/* Email */}
        <a
          href="mailto:dr.r.santhoshkumar@gmail.com"
          className="group bg-white/10 border border-white/20 p-4 rounded-full transition transform hover:scale-110 hover:shadow-[0_0_20px_#00ff9c] text-green-400"
          aria-label="Email"
        >
          <FaEnvelope className="text-2xl md:text-3xl group-hover:text-white transition" />
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/santhoshkumar-r07"
          target="_blank"
          rel="noopener noreferrer"
          className="group bg-white/10 border border-white/20 p-4 rounded-full transition transform hover:scale-110 hover:shadow-[0_0_20px_#00ff9c] text-green-400"
          aria-label="LinkedIn"
        >
          <FaLinkedin className="text-2xl md:text-3xl group-hover:text-white transition" />
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/R-Santhoshkumar"
          target="_blank"
          rel="noopener noreferrer"
          className="group bg-white/10 border border-white/20 p-4 rounded-full transition transform hover:scale-110 hover:shadow-[0_0_20px_#00ff9c] text-green-400"
          aria-label="GitHub"
        >
          <FaGithub className="text-2xl md:text-3xl group-hover:text-white transition" />
        </a>
      </motion.div>
    </section>
  );
}
