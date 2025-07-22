// components/InternshipTimeline.tsx
'use client';

import { motion } from 'framer-motion';
import {
  FaShieldAlt,
  FaServer,
  FaBug,
} from 'react-icons/fa';
import { MdSecurity } from 'react-icons/md';
import { JSX } from 'react/jsx-runtime';

// Define allowed icon types
type IconTypeKey = 'security' | 'cyber' | 'tech' | 'web';

interface Internship {
  title: string;
  company: string;
  duration: string;
  iconType: IconTypeKey;
  description: string;
}

// Internship data
const internships: Internship[] = [
  {
    title: 'Cybersecurity Intern',
    company: 'Edu-versity',
    duration: 'May 2024 - Jun 2024',
    iconType: 'security',
    description:
      'Completed an internship in cybersecurity at Edu-versity Company, covering network security, ethical hacking, threat analysis, and security protocols. Gained hands-on experience with cybersecurity tools and techniques to strengthen skills in securing information systems and mitigating threats.',
  },
  {
    title: 'Cybersecurity Intern',
    company: 'KGISL',
    duration: 'Jul 2024 - Jan 2025',
    iconType: 'cyber',
    description:
      'Completed a course-cum-internship in Cybersecurity at KGiSL Micro College with a focus on Cisco Networking, Red Hat Linux, and AWS. Gained hands-on experience in network security, cloud computing, and Linux system administration, building practical skills for real-world cybersecurity challenges.',
  },
  {
    title: 'Technical Intern',
    company: 'Bharathidasan University, Tiruchirappalli',
    duration: 'Jan 2024 - Mar 2024',
    iconType: 'tech',
    description:
      'Completed a technical internship focused on core networking concepts and system troubleshooting. Gained hands-on experience in diagnosing and resolving hardware and software issues while strengthening understanding of network configurations and maintenance.',
  },
  {
    title: 'Web Security Intern',
    company: 'Indian Institute of Information Technology, Kottayam',
    duration: 'May 2024 - Jul 2024',
    iconType: 'web',
    description:
      'Completed a web security-focused internship at IIITK, gaining hands-on experience in identifying and mitigating vulnerabilities such as SQL injection, XSS, and command injection. Worked with tools like Burp Suite, SQLMap, and OWASP ZAP to analyze and secure web applications.',
  },
];

// Icon mapping
const iconMapper: Record<IconTypeKey, JSX.Element> = {
  security: <MdSecurity size={30} />,
  cyber: <FaShieldAlt size={28} />,
  tech: <FaServer size={28} />,
  web: <FaBug size={28} />,
};

// Component
export default function InternshipTimeline() {
  return (
    <section id="experience" className="py-20 px-4 max-w-7xl mx-auto flex-col items-center justify-between gap-10 bg-[#0f172a]">
      <h2 className="text-3xl md:text-3xl text-green-400 font-bold text-center mb-16">
        Experience
      </h2>

      <div className="relative border-l-2 border-green-500 max-w-4xl mx-auto space-y-12">
        {internships.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="relative pl-8"
          >
            {/* Timeline dot */}
            <div className="absolute left-[-13px] top-1 w-6 h-6 rounded-full bg-green-500 border-4 border-[#0f172a]" />

            {/* Glassmorphism Card */}
            <div className="border border-white/10 bg-white/5 backdrop-blur-md shadow-lg p-6 rounded-xl shadow-xl hover:bg-white/10 hover:shadow-green-500/30 transition-all duration-300 text-white">
              <div className="flex items-center gap-3 text-green-300 mb-2">
                {iconMapper[item.iconType]}
                <h3 className="text-xl font-semibold">{item.title}</h3>
              </div>
              <p className="text-white font-medium">{item.company}</p>
              <p className="text-sm text-gray-300 mb-3">{item.duration}</p>
              <p className="text-sm text-gray-200">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
