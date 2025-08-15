"use client";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { FaUser, FaDownload } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="home"
      className="py-20 px-4 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10"
    >
      {/* Left Content */}
      <motion.div
        className="space-y-6 w-full md:w-1/2"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold leading-tight text-transparent bg-clip-text drop-shadow-[0_2px_2px_rgba(0,255,156,0.4)]">
          👋 Hello, I'm SANTHOSHKUMAR R
        </h1>

        <h2 className="text-base sm:text-lg md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-lime-300 to-teal-300">
          Cybersecurity Enthusiast 🔐 | Developer 💻
        </h2>

        <div className="flex flex-col sm:flex-row gap-4 pt-6 w-full">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="bg-green-500 hover:bg-green-600 text-black px-4 py-2 sm:px-6 sm:py-3 rounded-full font-semibold transition shadow-md flex items-center justify-center gap-2 w-full sm:w-auto"
          >
            <FaUser className="w-4 h-4" />
            Contact me
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/resume.pdf"
            download
            className="border border-green-500 text-green-300 px-4 py-2 sm:px-6 sm:py-3 rounded-full hover:bg-green-500 hover:text-black transition shadow-md flex items-center justify-center gap-2 w-full sm:w-auto"
          >
            <FaDownload className="w-4 h-4" />
            Resume CV
          </motion.a>
        </div>
      </motion.div>

      {/* Right Panel - Dracula Terminal */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full md:w-1/2 flex justify-center items-center mb-10 md:mb-0"
      >
        <div className="bg-[#1e1e1e] border border-[#3a3f4b] rounded-lg shadow-lg w-full max-w-lg p-0 font-mono text-[#f8f8f2] text-sm backdrop-blur-sm relative overflow-hidden">
          {/* Terminal Top Bar */}
          <div className="flex items-center justify-between px-4 py-2 bg-[#2b2b2b] border-b border-[#44475a]">
            <span className="text-xs text-[#bd93f9]">santhosh@kali:~</span>
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
          </div>

          {/* Terminal Content */}

          <div className="w-auto mx-auto p-1 backdrop-blur-sm   rounded-xl shadow-lg">
            <div className="p-4 overflow-y-auto custom-scrollbar space-y-3 text-sm md:text-base font-mono text-white">
              {/* whoami */}
              <p>
                <span className="text-green-400">santhosh@kali</span>:~${" "}
                <span className="text-purple-400">whoami</span>
              </p>
              <p className="pl-6 text-cyan-300">R.Santhoshkumar</p>

              {/* aboutme.txt */}
              <p>
                <span className="text-green-400">santhosh@kali</span>:~${" "}
                <span className="text-purple-400">cat</span> ./aboutme.txt
              </p>
              <p className="pl-6 text-cyan-300">
                Cybersecurity-Enthusiast and Developer
              </p>

              {/* skills.txt */}
              <p>
                <span className="text-green-400">santhosh@kali</span>:~${" "}
                <span className="text-purple-400">cat</span> ./skills.txt
              </p>
              <ul className="pl-6 list-disc list-inside text-cyan-300">
                <li>Penetration Testing</li>
                <li>Cloud (Azure and AWS)</li>
                <li>Linux & Bash Scripting</li>
                <li>Digital Forensics</li>
                <li>Networking Fundamentals</li>
              </ul>

              {/* echo */}
              <p>
                <span className="text-green-400">santhosh@kali</span>:~${" "}
                <span className="text-purple-400">echo</span> "Always learning
                and adapting"
              </p>
              <p className="pl-6 text-cyan-300">Always learning and adapting</p>

              {/* Blinking cursor */}
              <p>
                <span className="text-green-400">santhosh@kali</span>:~${" "}
                <span className="text-white animate-pulse">█</span>
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
