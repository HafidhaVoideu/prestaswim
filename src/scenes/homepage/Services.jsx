"use client";
import AnimatedSection from "@/components/AnimatedSection";
import { motion } from "framer-motion";

export default function Services() {
  return (
    <AnimatedSection>
      <section
        id="services"
        className="py-24 bg-gradient-to-b from-white to-blue-50"
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4 shadow-sm">
              Nos Solutions Intégrées
            </span>
            <motion.h2
              className="text-4xl leading-[2] md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              Votre Écosystème Aquatique
            </motion.h2>
            <p className="text-lg text-blue-500/90 max-w-3xl mx-auto leading-relaxed">
              Une plateforme sur mesure pour répondre aux besoins spécifiques
              des prestataires et gestionnaires aquatiques
            </p>
          </div>

          {/* Prestataires Section */}
          <div className="mb-20">
            <div className="flex items-center justify-center mb-8">
              <div className="h-1 w-16 bg-gradient-to-r from-blue-500 via-blue-400 to-transparent mr-4 rounded-full"></div>
              <motion.h3
                className="text-2xl md:text-3xl font-bold text-blue-700"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                Pour les{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-700">
                  Prestataires
                </span>
              </motion.h3>
              <div className="h-1 w-16 bg-gradient-to-r from-transparent via-blue-400 to-blue-500 ml-4 rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Flexibilité",
                  description:
                    "Exploitez la flexibilité avec notre plateforme ! Sélectionnez vos missions et vos horaires selon vos disponibilités et adaptez votre activité professionnelle à votre rythme de vie.",
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.8}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                      />
                    </svg>
                  ),
                },
                {
                  title: "Opportunités",
                  description:
                    "Explorez un monde d'opportunités à travers notre réseau. Accédez à une vaste gamme de projets passionnants et variés dans le domaine aquatique pour enrichir votre parcours professionnel.",
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.8}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                      />
                    </svg>
                  ),
                },
                {
                  title: "Autonomie",
                  description:
                    "Naviguez en toute autonomie avec notre plateforme qui vous met aux commandes. Soyez votre propre patron, gérez votre carrière à votre rythme et selon vos règles. Propulsez-vous vers le succès selon vos termes !",
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.8}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      />
                    </svg>
                  ),
                },
              ].map((feature, index) => (
                <ServiceCard key={index} feature={feature} />
              ))}
            </div>
          </div>

          {/* Professionnels Section */}
          <div>
            <div className="flex items-center justify-center mb-8">
              <div className="h-1 w-16 bg-gradient-to-r from-blue-500 via-blue-400 to-transparent mr-4 rounded-full"></div>
              <motion.h3
                className="text-2xl md:text-3xl font-bold text-blue-700"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                Pour les{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-700">
                  Professionnels
                </span>
              </motion.h3>
              <div className="h-1 w-16 bg-gradient-to-r from-transparent via-blue-400 to-blue-500 ml-4 rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Fiabilité",
                  description:
                    "Garantissez la continuité et la qualité de votre service avec notre plateforme. Connectez-vous à un réseau de professionnels, prêts à répondre à vos besoins spécifiques avec efficacité et expertise.",
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.8}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                      />
                    </svg>
                  ),
                },
                {
                  title: "Simplicité",
                  description:
                    "Simplifiez vos processus de recrutement grâce à notre interface intuitive et facile à utiliser. Gagnez du temps en gérant toutes vos offres et interactions avec les candidats en un seul endroit.",
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.8}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
                      />
                    </svg>
                  ),
                },
                {
                  title: "Diversité",
                  description:
                    "Renforcez votre équipe avec une sélection variée de talents. Profitez de notre réseau pour trouver rapidement des professionnels compétents, assurant flexibilité et expertise adaptée à chaque besoin.",
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.8}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                      />
                    </svg>
                  ),
                },
              ].map((feature, index) => (
                <ServiceCard key={index} feature={feature} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}

function ServiceCard({ feature }) {
  return (
    <motion.div
      className="group relative bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-2 border border-blue-100/30 hover:border-blue-200 overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Gradient accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      <div className="flex justify-center mb-6">
        <div className="p-4 bg-blue-50 rounded-xl text-blue-600 group-hover:bg-gradient-to-br group-hover:from-blue-600 group-hover:to-blue-400 group-hover:text-white transition-all duration-300">
          {feature.icon}
        </div>
      </div>
      <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-blue-600 transition-colors">
        {feature.title}
      </h3>
      <p className="text-gray-500 group-hover:text-gray-700 transition-colors leading-relaxed">
        {feature.description}
      </p>
    </motion.div>
  );
}
