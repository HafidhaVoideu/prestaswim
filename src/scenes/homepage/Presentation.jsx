"use client";
import AnimatedSection from "@/components/AnimatedSection";
import Image from "next/image";

export default function Presentation() {
  return (
    <AnimatedSection>
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Title Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#5fa8ff]">
            AquaLink: Votre Pont vers l'Excellence Aquatique
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Connectez professionnels et piscines dans un écosystème fluide et
            efficace
          </p>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {/* First Column */}
          <div className="space-y-6 h-full flex flex-col">
            {/* Text Card */}
            <div className="bg-[#5fa8ff] text-white p-6 rounded-2xl shadow-md">
              <h3 className="text-xl font-semibold mb-3">
                Plongez dans un océan d'opportunités avec notre plateforme
                unique
              </h3>
              <p className="text-blue-50">
                Nous relions les piscines à la recherche de professionnels
                dévoués aux travailleurs indépendants. Rejoignez-nous et
                améliorez votre expérience professionnelle !
              </p>
            </div>

            {/* Image Card */}
            <div className="flex-1 overflow-hidden rounded-2xl shadow-md relative min-h-[350px]">
              <Image
                src="/assets/images/card3.jpg"
                alt="Design"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Second Column - Main Image */}
          <div className="h-full flex flex-col">
            <div className="flex-1 overflow-hidden rounded-2xl shadow-md relative min-h-[350px] md:min-h-[calc(100%-1.5rem)]">
              <Image
                src="/assets/images/card1.jpg"
                alt="Main Product"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Third Column */}
          <div className="space-y-6 h-full flex flex-col">
            {/* Image Card */}
            <div className="flex-1 overflow-hidden rounded-2xl shadow-md relative min-h-[350px]">
              <Image
                src="/assets/images/card2.jpg"
                alt="Quality"
                fill
                className="object-cover"
              />
            </div>

            {/* Text Card */}
            <div className="bg-[#5fa8ff] text-white p-6 rounded-2xl shadow-md">
              <h3 className="text-xl font-semibold mb-3">
                Découvrez le partenaire idéal pour chaque vague de besoin avec
                notre plateforme spécialisée
              </h3>
              <p className="text-blue-50">
                Connectez-vous à un réseau dynamique de travailleurs
                indépendants qualifiés, prêts à plonger dans vos projets et à
                mener à bien le fonctionnement de votre centre aquatique.
                Lancez-vous dès aujourd'hui !
              </p>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
