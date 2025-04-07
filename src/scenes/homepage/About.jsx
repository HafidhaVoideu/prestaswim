import AnimatedSection from "@/components/AnimatedSection";
import Image from "next/image";

export default function AboutUs() {
  return (
    <AnimatedSection>
      <section
        id="about"
        className="flex flex-col lg:flex-row items-center justify-between py-16 px-6 lg:px-20 bg-white text-slate-800"
      >
        {/* Left Column */}
        <div className="relative w-full lg:w-1/2 mb-10 lg:mb-0">
          {/* Experience Badge with blue gradient */}
          <div className="absolute -top-6 -left-6 z-10 bg-gradient-to-br from-blue-500 to-blue-700 text-white text-center px-6 py-4 rounded-lg shadow-lg">
            <p className="text-4xl font-bold">35</p>
            <p className="text-sm font-medium leading-tight">
              Ans d'
              <br />
              Expérience
            </p>
          </div>

          {/* Vertical Accents - wider with more spacing */}
          <div className="absolute left-[-20px] top-80 flex flex-col space-y-4">
            {" "}
            {/* Added left-4 for spacing */}
            <div className="w-2 h-16 bg-blue-600 rounded" />{" "}
            {/* Wider stripes */}
            <div className="w-2 h-16 bg-blue-600 rounded" />{" "}
            {/* Wider stripes */}
          </div>

          {/* Image - unchanged */}
          <div className="overflow-hidden rounded-xl shadow-lg ml-6">
            {" "}
            {/* Added ml-6 for spacing */}
            <Image
              src="/assets/images/aboutSwim.jpg"
              alt="Professionnels de piscine"
              width={600}
              height={400}
              className="object-cover w-full h-auto"
            />
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full lg:w-1/2 lg:pl-12">
          <h2 className="text-lg w-[600px] leading-[2.5] md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
            À propos de PrestaSwim
          </h2>
          <p className="text-gray-600 mb-4">
            PrestaSwim, la plateforme innovante conçue pour dynamiser la
            relation entre les piscines professionnelles et les travailleurs
            indépendants dans le domaine aquatique.
          </p>
          <p className="text-gray-600 mb-6">
            Notre mission est de faciliter et optimiser les interactions entre
            les maîtres nageurs sauveteurs et les installations aquatiques,
            assurant une gestion efficace et une collaboration harmonieuse.
          </p>

          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-blue-500 text-xl">✔</span>{" "}
              {/* Blue checkmarks */}
              Pour les Piscines : Coordonnez facilement les horaires et
              optimisez votre espace
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500 text-xl">✔</span>
              Gestion efficace des vacations pour votre établissement
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-900 text-xl">✔</span>
              Pour les prestataires : Choisissez des missions adaptées à votre
              emploi du temps
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500 text-xl">✔</span>
              Visualisez et réservez rapidement les vacations disponibles
            </li>
          </ul>

          {/* Button with blue gradient */}
          <button className="mt-8 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-3 rounded-lg shadow transition-all">
            Contacter-nous
          </button>
        </div>
      </section>
    </AnimatedSection>
  );
}
