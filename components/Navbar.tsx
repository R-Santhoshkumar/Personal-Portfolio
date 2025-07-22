"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = (e: Event) => {
      const targetId = (e.target as HTMLAnchorElement).getAttribute("href");
      if (targetId && targetId.startsWith("#")) {
        e.preventDefault();
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
      setIsMobileMenuOpen(false);
    };

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", handleScroll);
    });

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.removeEventListener("click", handleScroll);
      });
    };
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "auto";
  }, [isMobileMenuOpen]);

  const navItems = ["About", "Experience", "Skills", "Projects", "Education"];

  return (
    <nav className="fixed top-0 w-full bg-black/50 backdrop-blur-md border-b border-[#00ff9c]/30 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link
            href="#home"
            className="text-2xl font-bold text-[#00ff9c] animate-pulse tracking-wide"
          >
            Santhoshkumar R
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="flex space-x-8">
              {["About", "Experience", "Skills", "Projects", "Education"].map(
                (item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="relative text-white hover:text-[#00ff9c] transition duration-300 group"
                  >
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00ff9c] transition-all duration-300 group-hover:w-full" />
                  </a>
                )
              )}
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden z-50 relative">
            <button
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              className="group text-white focus:outline-none"
              aria-label="Toggle Mobile Menu"
            >
              {isMobileMenuOpen ? (
                <FiX className="w-6 h-6 transition-colors duration-300 group-hover:text-[#00ff9c]" />
              ) : (
                <FiMenu className="w-6 h-6 transition-colors duration-300 group-hover:text-[#00ff9c]" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-16 left-0 w-full bg-black/50 backdrop-blur-lg z-40 transition-all duration-500 ease-in-out overflow-hidden ${
          isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col items-center px-4 pb-6 pt-4 hover:bg-white/10 space-y-4">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-white text-lg hover:text-[#00ff9c]  transition duration-200"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
