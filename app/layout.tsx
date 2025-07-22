import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "../components/Navbar";
import Footer from "@/components/footer";
import ParticlesBackground from "@/components/ParticlesBackground";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Santhoshkumar Portfolio",
  description: "Cybersecurity Portfolio of R. SanthoshKumar",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#0f172a] text-white overflow-x-hidden`}>
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
