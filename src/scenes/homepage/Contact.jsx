"use client";
import AnimatedSection from "@/components/AnimatedSection";
import { useState } from "react";
import { FiMail, FiPhone, FiMapPin, FiClock } from "react-icons/fi";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulation d'appel API
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setFormStatus("success");
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <AnimatedSection>
      <section
        id="contact"
        className="min-h-screen flex items-center justify-center px-4 py-12"
      >
        <div className="w-full max-w-6xl flex flex-col lg:flex-row bg-white rounded-xl shadow-xl">
          {/* Partie gauche : Formulaire de contact */}
          <div className="w-full lg:w-1/2 p-8">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Contactez-nous
              </h2>
              <p className="text-gray-500 mb-4">
                Une question ou un projet à réaliser ? Contactez-nous, nous
                serons ravis de vous aider.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-1">
                <label className="text-sm font-medium text-gray-700">Nom</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  placeholder="Votre nom"
                />
              </div>

              <div className="space-y-1">
                <label className="text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  placeholder="votre@email.com"
                />
              </div>

              <div className="space-y-1">
                <label className="text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  placeholder="Comment pouvons-nous vous aider ?"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-blue-600 text-white py-3 font-medium rounded-lg hover:bg-blue-700 transition ${
                  isSubmitting ? "opacity-80 cursor-not-allowed" : ""
                }`}
              >
                {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
              </button>

              {formStatus && (
                <div
                  className={`mt-4 p-3 rounded-lg text-center font-medium transition-all ${
                    formStatus === "success"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {formStatus === "success" ? (
                    <p>Merci ! Votre message a bien été envoyé.</p>
                  ) : (
                    <p>Une erreur est survenue. Veuillez réessayer.</p>
                  )}
                </div>
              )}
            </form>
          </div>

          {/* Partie droite : Informations */}
          <div className="w-full lg:w-1/2 bg-gray-50 p-8">
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Nos coordonnées
              </h3>

              {/* Cartes d'informations */}
              <div className="space-y-6">
                <div className="flex gap-4 items-start p-6 bg-white shadow-md rounded-lg">
                  <FiMail className="text-blue-600 text-2xl" />
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <p className="text-gray-700">contact@prestaswim.com</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start p-6 bg-white shadow-md rounded-lg">
                  <FiPhone className="text-blue-600 text-2xl" />
                  <div>
                    <h4 className="font-semibold">Téléphone</h4>
                    <p className="text-gray-700">+33 4 93 12 34 56</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start p-6 bg-white shadow-md rounded-lg">
                  <FiMapPin className="text-blue-600 text-2xl" />
                  <div>
                    <h4 className="font-semibold">Adresse</h4>
                    <p className="text-gray-700">
                      123 Rue des Piscines, Nice, France
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-start p-6 bg-white shadow-md rounded-lg">
                  <FiClock className="text-blue-600 text-2xl" />
                  <div>
                    <h4 className="font-semibold">Horaires</h4>
                    <p className="text-gray-700">09h00 - 18h00</p>
                  </div>
                </div>
              </div>

              {/* Réseaux sociaux */}
              <div>
                <h4 className="font-medium text-gray-800 mb-4">Suivez-nous</h4>
                <div className="flex gap-4">
                  {["Twitter", "Instagram", "LinkedIn"].map((social) => (
                    <div
                      key={social}
                      className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center hover:bg-blue-500 transition cursor-pointer"
                    >
                      <span className="text-white font-semibold">
                        {social[0]}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
