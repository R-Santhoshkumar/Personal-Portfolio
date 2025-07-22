// app/layout.tsx or app/layout.js
import "./globals.css";
import { Titillium_Web, DM_Sans, Exo_2, Prompt, Bebas_Neue, Urbanist, Roboto, Poppins } from "next/font/google";

import Navbar from "../components/Navbar";
import Footer from "@/components/footer";
import ParticlesBackground from "@/components/ParticlesBackground";

const titillium = Titillium_Web({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});
const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
  
});

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  
});
const exo = Exo_2({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  
});

const prompt = Prompt({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  
});
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  
});

export const metadata = {
  title: "Santhoshkumar Portfolio",
  description: "Cybersecurity Portfolio of R. SanthoshKumar",
  icons: {
    icon: '/favicon.svg', // Adjust the path if your favicon is in a different location
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} bg-[#0f172a] text-white overflow-x-hidden`}
      >
        <ParticlesBackground />
        <div className="relative z-10 min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1 pt-16 px-4 w-full max-w-screen-xl mx-auto">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
