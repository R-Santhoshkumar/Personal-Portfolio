import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "../components/Navbar";
import Footer from "@/components/footer";

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
      <body className={`${inter.className} bg-[#0f172a] text-white`}>
        {/* Page Container */}
        <div className="relative z-10 min-h-screen flex flex-col">
          <Navbar />

          {/* Main Content */}
          <main className="flex-1 pt-16 px-4 w-full max-w-8xl">
            {children}
          </main>

          <Footer />
        </div>
      </body>
    </html>
  );
}
