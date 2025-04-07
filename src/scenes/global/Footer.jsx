import Link from "next/link";
import { FaFacebook, FaInstagram, FaPinterest } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-12 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start">
          {/* Logo section */}
          <div className="text-center md:text-left mb-8 md:mb-0 w-full md:w-1/3">
            <div className="text-3xl font-bold mb-4">
              <span className="text-white">presta</span>
              <span className="text-blue-300">Swim</span>
            </div>
            <p className="text-blue-200 text-lg max-w-[400px]">
              Facilitons la collaboration entre les piscines et les prestataires
              aquatiques.
            </p>
          </div>

          {/* Grid section */}
          <div className="w-full md:w-2/3">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              <div className="text-center md:text-left">
                <h3 className="text-lg font-semibold mb-4">Navigation</h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/"
                      className="text-blue-200 hover:text-white transition duration-300"
                    >
                      Accueil
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services"
                      className="text-blue-200 hover:text-white transition duration-300"
                    >
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about"
                      className="text-blue-200 hover:text-white transition duration-300"
                    >
                      À propos
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="text-blue-200 hover:text-white transition duration-300"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="text-center md:text-left">
                <h3 className="text-lg font-semibold mb-4">Contact</h3>
                <ul className="space-y-2">
                  <li className="text-blue-200">123 Rue des Piscines</li>
                  <li className="text-blue-200">Nice, France</li>
                  <li className="text-blue-200">contact@prestaswim.com</li>
                  <li className="text-blue-200">+33 4 93 12 34 56</li>
                </ul>
              </div>

              <div className="text-center md:text-left">
                <h3 className="text-lg font-semibold mb-4">Suivez-nous</h3>
                <div className="flex justify-center md:justify-start space-x-6">
                  <a
                    href="https://facebook.com"
                    className="text-blue-200 hover:text-white transition duration-300"
                  >
                    <FaFacebook size={28} />
                  </a>
                  <a
                    href="https://instagram.com"
                    className="text-blue-200 hover:text-white transition duration-300"
                  >
                    <FaInstagram size={28} />
                  </a>
                  <a
                    href="https://pinterest.com"
                    className="text-blue-200 hover:text-white transition duration-300"
                  >
                    <FaPinterest size={28} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional info section */}
        <div className="flex flex-col items-center mt-12 text-blue-200">
          <p className="text-sm mb-4">
            Rejoignez notre communauté de professionnels aquatiques et découvrez
            de nouvelles opportunités.
          </p>
          <p className="text-sm">
            &copy; {new Date().getFullYear()} prestaSwim. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
