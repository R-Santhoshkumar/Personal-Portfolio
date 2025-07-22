"use client";

const skills = [
  {
    name: "Burp Suite",
    logo: "/icons/burp.png",
  },
  {
    name: "OWASP ZAP",
    logo: "/icons/zap.png",
  },
  {
    name: "Kali Linux",
    logo: "/icons/kalilinux.png",
  },
  {
    name: "Hydra",
    logo: "/icons/hydra.png",
  },
  {
    name: "Wireshark",
    logo: "/icons/wireshark.png",
  },
  {
    name: "John the Ripper",
    logo: "/icons/john-logo.svg",
  },
  {
    name: "Nessus",
    logo: "/icons/Nessus1.png",
  },
  {
    name: "Autopsy",
    logo: "/icons/autopsy.png",
  },
  {
    name: "Nmap",
    logo: "/icons/nmap.png",
  },
  {
    name: "GitHub",
    logo: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
  },
  {
    name: "AWS",
    logo: "/icons/aws.png",
  },
  {
    name: "Azure",
    logo: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flogos-world.net%2Fwp-content%2Fuploads%2F2021%2F05%2FAzure-Logo.png&f=1&nofb=1&ipt=d4aa53f1964f1bd7e3b5c66e4bfafe448c1b8fa25526ba1aff725b595d9139a8",
  },
  {
    name: "HTML",
    logo: "https://cdn-icons-png.flaticon.com/512/732/732212.png",
  },
  {
    name: "CSS",
    logo: "https://cdn-icons-png.flaticon.com/512/732/732190.png",
  },
  {
    name: "JavaScript",
    logo: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
  },
  {
    name: "React",
    logo: "https://cdn-icons-png.flaticon.com/512/1126/1126012.png",
  },
  {
    name: "Node.js",
    logo: "https://cdn-icons-png.flaticon.com/512/5968/5968322.png",
  },
  {
    name: "Python",
    logo: "https://cdn-icons-png.flaticon.com/512/5968/5968350.png",
  },
  {
    name: "Linux",
    logo: "https://cdn-icons-png.flaticon.com/512/6124/6124995.png",
  },
  {
    name: "Tailwind",
    logo: "https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 max-w-7xl mx-auto text-center">
      <h2 className="text-3xl font-bold text-green-400 mb-10">Skills</h2>

      {/* group to detect hover and pause animation */}
      {/* Remove outer group so hover only applies to individual cards */}
      <div className="overflow-hidden relative group">
        {/* Scrolling container */}
        <div className="flex w-max gap-6 marquee-track group-hover:[animation-play-state:paused] px-4 py-6">
          {[...skills, ...skills].map((skill, index) => (
            <div
              key={index}
              className="group w-32 h-32 flex-shrink-0 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-green-500/30 hover:bg-white/10 hover:border-green-400 relative overflow-hidden"
            >
              <div className="absolute inset-0 rounded-xl pointer-events-none transition-all duration-300 group-hover:ring-1 group-hover:ring-green-400" />
              <div className="flex flex-col items-center justify-center h-full p-4 z-10 relative">
                <div className="w-14 h-14 flex items-center justify-center rounded-md overflow-hidden p-1">
                  <img
                    src={skill.logo}
                    alt={skill.name}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <p className="text-slate-100 text-sm font-semibold text-center mt-3">
                  {skill.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .marquee-track {
          animation: scroll 30s linear infinite;
          will-change: transform;
        }

        .group:hover .marquee-track {
          animation-play-state: paused;
        }

        @keyframes scrollLeft {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
