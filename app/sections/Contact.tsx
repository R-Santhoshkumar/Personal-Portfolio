"use client";

import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaDownload,
  FaUser,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 px-4 max-w-7xl mx-auto flex flex-col items-center justify-between gap-10"
    >
      <h2 className="text-3xl font-bold mb-4 text-green-400 text-center">
        Ready to secure the future?
      </h2>
      <p className="text-gray-400 mb-12 text-center max-w-2xl mx-auto">
        I'm always open to discussing new opportunities, collaborations, or just
        connecting about cybersecurity.
      </p>

      <div className="w-full mx-auto flex flex-col md:flex-row relative">
        {/* Left: Form */}
        <motion.form
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="md:w-1/2 pr-0 md:pr-10 mb-10 md:mb-0"
        >
          <div className="bg-white/5 backdrop-blur-md gap-2 flex flex-col border border-white/10 rounded-xl p-8 shadow-xl hover:shadow-green-400/30 transition">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 bg-white/10 text-white placeholder-gray-400 rounded-md border border-white/10 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-4 bg-white/10 text-white placeholder-gray-400 rounded-md border border-white/10 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <textarea
              rows={5}
              placeholder="Your Message"
              className="w-full p-4 mb-6 bg-white/10 text-white placeholder-gray-400 rounded-md border border-white/10 focus:outline-none focus:ring-2 focus:ring-green-400"
            ></textarea>
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-600 text-black px-6 py-3 rounded-md font-semibold transition"
            >
              Send Message
            </button>
          </div>
        </motion.form>

        {/* Vertical Divider for md+ only */}
        <div className="hidden md:block left-1/2 top-0 bottom-0 w-px bg-green-800/30" />

        {/* Right: Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="pl-0 md:pl-10 flex flex-col justify-center"
        >
          <div className="p-8 space-y-6 text-left items-center flex flex-col text-gray-300 text-base md:text-lg">
            <p className="flex items-center gap-4 hover:text-white transition">
              <FaEnvelope className="text-green-400 text-2xl md:text-3xl" />
              dr.r.santhoshkumar@gmail.com
            </p>
            <p className="flex items-center gap-4 hover:text-white transition">
              <FaLinkedin className="text-green-400 text-2xl md:text-3xl" />
              <a
                href="https://www.linkedin.com/in/santhoshkumar-r07"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Santhoshkumar R
              </a>
            </p>
            <p className="flex items-center gap-4 hover:text-white transition">
              <FaGithub className="text-green-400 text-2xl md:text-3xl" />
              <a
                href="https://github.com/R-Santhoshkumar"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                R-Santhoshkumar
              </a>
            </p>
            
          </div>
        </motion.div>
      </div>
    </section>
  );
}
