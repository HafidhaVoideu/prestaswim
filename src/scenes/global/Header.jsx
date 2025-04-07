"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

export default function Header() {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`${
        inter.variable
      } font-sans text-white py-5 shadow-md fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolling
          ? "backdrop-blur-md bg-blue-600/60 border-b border-white/10"
          : "bg-blue-600"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Logo */}
        <Link href="/" className="group">
          <div className="text-3xl font-bold tracking-tight">
            <span className="text-white">presta</span>
            <span className="text-blue-200 group-hover:text-blue-100 transition-colors duration-300">
              Swim
            </span>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8 text-lg font-medium">
            <li>
              <Link
                href="#home"
                className="relative hover:text-blue-200 transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-blue-200 hover:after:w-full after:transition-all after:duration-300"
              >
                Accueil
              </Link>
            </li>

            <li>
              <Link
                href="#services"
                className="relative hover:text-blue-200 transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-blue-200 hover:after:w-full after:transition-all after:duration-300"
              >
                Services
              </Link>
            </li>

            <li>
              <Link
                href="#about"
                className="relative hover:text-blue-200 transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-blue-200 hover:after:w-full after:transition-all after:duration-300"
              >
                À propos
              </Link>
            </li>
            <li>
              <Link
                href="#faq"
                className="relative hover:text-blue-200 transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-blue-200 hover:after:w-full after:transition-all after:duration-300"
              >
                FAQ
              </Link>
            </li>

            <li>
              <Link
                href="#contact"
                className="relative hover:text-blue-200 transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-blue-200 hover:after:w-full after:transition-all after:duration-300"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Login Button */}
        <div className="rounded-lg overflow-hidden">
          <Link
            href="/login"
            className="relative inline-block bg-white/10 backdrop-blur-sm py-2.5 px-6 rounded-lg hover:bg-white/20 transition-all duration-300 font-medium group"
          >
            <span className="relative z-10">Se Connecter</span>
            <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-0"></span>
          </Link>
        </div>
      </div>
    </header>
  );
}
