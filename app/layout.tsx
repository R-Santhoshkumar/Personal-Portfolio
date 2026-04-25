import "./globals.css";
import { Poppins } from "next/font/google";
import Navbar from "../components/Navbar";
import Footer from "@/components/footer";
import ParticlesBackground from "@/components/ParticlesBackground";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
});

export const metadata = {
  title: "Santhoshkumar R | Cybersecurity Portfolio",
  description: "Specialized in Offensive Security, Cloud Infrastructure, and Digital Forensics.",
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${poppins.className} bg-[#0b1120] text-slate-200 selection:bg-cyber-green/30 selection:text-cyber-green`}
      >
        <ParticlesBackground />
        
        {/* Custom Glow Effect */}
        <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-50 overflow-hidden">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-cyber-green/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyber-blue/5 rounded-full blur-[120px]" />
        </div>

        <div className="relative z-10 min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1 w-full">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
