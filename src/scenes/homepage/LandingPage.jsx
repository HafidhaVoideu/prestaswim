"use client";
// components/LandingPage.js
import Link from "next/link";
import { Inter } from "next/font/google";
import Head from "next/head";
import { motion } from "motion/react";
import { fadeIn, staggerContainer, slideIn } from "@/utils/motion";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

export default function LandingPage() {
  return (
    <div
      id="#home"
      className={`${inter.variable} font-sans bg-white text-blue-900`}
    >
      <Head>
        <title>PrestaSwim | Plateforme de gestion aquatique</title>
        <meta
          name="description"
          content="PrestaSwim facilite la collaboration entre piscines professionnelles et maîtres-nageurs sauveteurs indépendants."
        />
      </Head>

      {/* Hero Section with Image and Gradient */}
      <section className="relative h-screen max-h-[900px] w-full overflow-hidden">
        {/* Background Image - Replace with your actual image path */}
        <div
          className="absolute inset-0 bg-blue-900 bg-cover bg-center"
          style={{
            backgroundImage: "url(/assets/images/hero.jpg)", // Suggested: image of pool professionals
            backgroundPosition: "center 30%",
          }}
        >
          {/* Enhanced Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-800/60 to-blue-700/30"></div>
        </div>

        {/* Content with Framer Motion animations */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="container mx-auto h-full flex flex-col justify-center items-center text-center px-6 relative z-10"
        >
          <motion.h1
            variants={fadeIn("up", "spring", 0.4, 1)}
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white leading-tight"
          >
            <span className="block">Optimisez votre gestion</span>
            <span className="text-blue-200">aquatique avec PrestaSwim</span>
          </motion.h1>

          <motion.p
            variants={fadeIn("up", "spring", 0.4, 1)}
            className="text-xl md:text-2xl text-blue-100 mb-12 max-w-2xl"
          >
            La plateforme innovante qui connecte les piscines professionnelles
            et les maîtres-nageurs sauveteurs
          </motion.p>

          <motion.div
            variants={fadeIn("up", "spring", 0.6, 1)}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="#contact"
              className="bg-white text-blue-800 py-3 px-8 rounded-lg text-lg font-semibold hover:bg-blue-100 hover:shadow-lg transition-all duration-300"
            >
              Contacter-nous
            </Link>
            <Link
              href="#about"
              className="bg-transparent border-2 border-white text-white py-3 px-8 rounded-lg text-lg font-semibold hover:bg-white/10 transition-all duration-300"
            >
              En savoir plus
            </Link>
          </motion.div>
        </motion.div>

        {/* Water Reflection Effect at Bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-blue-900 to-transparent"></div>
      </section>

      {/* Add more sections as needed */}
    </div>
  );
}
