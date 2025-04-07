import AnimatedSection from "@/components/AnimatedSection";
import Link from "next/link";

export default function Transition() {
  return (
    <AnimatedSection>
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Prêt à Plonger ?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Optimisez la coordination des horaires et la gestion des missions
            pour les piscines et les travailleurs indépendants dans le domaine
            aquatique.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="#contact"
              className="bg-white text-blue-800 py-4 px-8 rounded-lg text-lg font-semibold hover:bg-blue-100 hover:shadow-lg transition-all duration-300"
            >
              Contacter-nous
            </Link>
            <Link
              href="/services"
              className="bg-transparent border-2 border-white text-white py-4 px-8 rounded-lg text-lg font-semibold hover:bg-white/10 transition-all duration-300"
            >
              Voir nos Services
            </Link>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
