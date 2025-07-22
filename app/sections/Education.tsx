"use client";

import { motion } from "framer-motion";

const education = [
  {
    title: "Secondary Education",
    institution: "Kendriya Vidyalaya",
    year: "2017 - 2018",
    details: "Completed foundational education with a focus on core subjects including Mathematics and Science, laying the groundwork for analytical thinking and problem-solving skills.",
  },
  {
    title: "Higher Secondary Education",
    institution: "Sri Chaitanya Educational Institute",
    year: "2019 - 2020",
    details: "Specialized in Mathematics, Physics, and Chemistry, building a strong base in logical reasoning and technical concepts, which paved the way for pursuing a career in engineering.",
  },
  {
    title: "M.Tech (6yr Integrated) Computer Science, Engineering and Technology",
    institution: "Bharathidasan University",
    year: "2020 - 2026 (Present)",
    details:
      "Currently pursuing a degree in Computer Science Engineering, with continuous engagement in software development, networking, cybersecurity, and real-world technical projects.",
  },
];

export default function EducationTimeline() {
  return (
    <section id="education" className="py-20 text-white px-6">
      <h2 className="text-3xl font-bold text-green-400 text-center mb-16">
        Education
      </h2>

      <div className="relative max-w-6xl mx-auto">
        {/* Vertical Timeline Line */}
        <div className="absolute left-1/2 top-0 h-full w-1 bg-[#00ff9c]/70 transform -translate-x-1/2 z-0" />

        {/* Timeline Cards */}
        <div className="space-y-20 relative z-10">
          {education.map((edu, idx) => {
            const isLeft = idx % 2 === 0;
            const animationDirection = isLeft ? -100 : 100;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: animationDirection }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.3 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row items-center gap-6 relative"
              >
                {/* Dot in center */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-green-400 rounded-full border-4 border-black z-20" />

                {/* Spacer (empty div to align card left/right) */}
                <div
                  className={`w-full md:w-1/2 ${
                    isLeft ? "order-1" : "order-2"
                  }`}
                />

                {/* Education Card */}
                <div
                  className={`w-full md:w-1/2 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md p-6 hover:shadow-2xl transition-all duration-300 ${
                    isLeft ? "order-2 md:ml-auto" : "order-1 md:mr-auto"
                  }`}
                >
                  <h3 className="text-xl font-semibold text-green-300">
                    {edu.title}
                  </h3>
                  <p className="text-sm text-gray-300">{edu.institution}</p>
                  <p className="text-sm text-gray-400 mb-2">{edu.year}</p>
                  <p className="text-gray-200 text-sm">{edu.details}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
