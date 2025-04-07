"use client";
import AnimatedSection from "@/components/AnimatedSection";
import { useState } from "react";

const faqData = [
  {
    question: `Comment puis-je postuler à une offre d'emploi ? `,
    answer: `Pour postuler à une offre d'emploi, vous devez d'abord créer un compte sur notre plateforme. Une fois connecté, vous pouvez parcourir les offres disponibles et cliquer sur le bouton "Postuler" pour soumettre votre candidature. `,
  },
  {
    question: `Comment puis-je suivre mes paiements ? `,
    answer:
      'Vous pouvez suivre vos paiements dans la section "Paiements" de votre compte. Vous y trouverez un récapitulatif de toutes les missions effectuées, les montants dus et les factures téléchargeables. ',
  },
  {
    question: `Comment fonctionne le système de notation ? `,
    answer: `Après chaque mission, vous aurez la possibilité de noter la piscine sur une échelle de 1 à 5 étoiles et de laisser un commentaire. Ces notes et commentaires seront visibles par les autres prestataires et les piscines. `,
  },
  {
    question: `Comment publier une offre en tant que piscine ? `,
    answer: `Si vous êtes une piscine et que vous souhaitez poster une offre d'emploi, vous devez d'abord créer un compte "Piscine" sur notre plateforme. Une fois connecté, vous pourrez accéder à la section "Poster une offre" et remplir les détails de votre offre. `,
  },
];

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <AnimatedSection>
      <section id="faq" className="py-16 w-full bg-blue-50 text-blue-800">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center mb-12">
            Questions Fréquemment Posées
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className={`bg-white border-l-4 border-blue-500 p-6 rounded-lg shadow-md transition-all duration-300 ${
                  activeIndex === index ? "h-auto" : "h-fit"
                }`}
              >
                <div
                  onClick={() => toggleAnswer(index)}
                  className="flex justify-between items-center cursor-pointer gap-4"
                >
                  <h3 className="text-xl font-medium text-blue-800 flex-1">
                    {faq.question}
                  </h3>
                  <span className="text-blue-500 text-2xl font-bold min-w-[20px] text-right">
                    {activeIndex === index ? "−" : "+"}
                  </span>
                </div>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    activeIndex === index ? "max-h-40 mt-4" : "max-h-0"
                  }`}
                >
                  <p className="text-lg text-blue-600 pb-2">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
