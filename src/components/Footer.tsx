import React, { useState } from "react";
import { Link } from "react-scroll";
import toast from "react-hot-toast";
import Logo from "./logo";

const Footer: React.FC = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const MAILCHIMP_USER_ID = import.meta.env.VITE_MAILCHIMP_USER_ID;
  const MAILCHIMP_FORM_ID = import.meta.env.VITE_MAILCHIMP_FORM_ID;
  const MAILCHIMP_URL = `https://app.us2.list-manage.com/subscribe/post?u=${MAILCHIMP_USER_ID}&id=${MAILCHIMP_FORM_ID}`;

  const validateEmail = (email: string) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      toast.error("Veuillez entrer une adresse email.");
      return;
    }

    if (!validateEmail(email)) {
      toast.error("Veuillez entrer une adresse email valide.");
      return;
    }

    if (!MAILCHIMP_USER_ID || !MAILCHIMP_FORM_ID) {
      toast.error(
        "Configuration Mailchimp manquante. Contactez l'administrateur."
      );
      return;
    }

    setStatus("loading");
    toast.loading("Inscription en cours...", { id: "newsletter-subscription" });

    try {
      const script = document.createElement("script");
      const callbackName = `mailchimpCallback_${Date.now()}`;
      (window as any)[callbackName] = (data: any) => {
        toast.dismiss("newsletter-subscription");

        if (data.result === "success") {
          setStatus("success");
          toast.success(
            "Merci ! Vous êtes maintenant inscrit à notre newsletter.",
            {
              duration: 5000,
            }
          );
          setEmail("");
        } else {
          setStatus("error");
          const errorMessage =
            data.msg || "Une erreur s'est produite. Veuillez réessayer.";
          toast.error(errorMessage, {
            duration: 5000,
          });
        }

        setTimeout(() => setStatus("idle"), 3000);
        document.body.removeChild(script);
        delete (window as any)[callbackName];
      };

      const url = `${MAILCHIMP_URL}&EMAIL=${encodeURIComponent(
        email
      )}&c=${callbackName}`;
      script.src = url;

      script.onerror = () => {
        toast.dismiss("newsletter-subscription");
        toast.error("Erreur de connexion. Veuillez réessayer.");
        setStatus("error");
        setTimeout(() => setStatus("idle"), 3000);
        document.body.removeChild(script);
        delete (window as any)[callbackName];
      };

      document.body.appendChild(script);
    } catch (error) {
      toast.dismiss("newsletter-subscription");
      setStatus("error");
      toast.error("Une erreur s'est produite. Veuillez réessayer.");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6 sm:pt-16 sm:pb-8">
      <div className="container px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-12 sm:mb-16">
          <div>
            <Logo className="mb-4" />
            <p className="text-gray-400 mb-4 text-sm sm:text-base">
              Apprenez le Lingala avec des professeurs natifs passionnés. Des
              cours adaptés à tous les niveaux.
            </p>

            <div className="flex space-x-4 mt-4">
              {/* Social icons */}
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <span className="sr-only">Facebook</span>
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <span className="sr-only">Instagram</span>
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <span className="sr-only">YouTube</span>
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4">
              Nos cours
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
                >
                  Débutant
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
                >
                  Intermédiaire
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
                >
                  Avancé
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
                >
                  Cours individuels
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
                >
                  Cours de groupe
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
                >
                  Cours pour enfants
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4">
              Liens rapides
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer text-sm sm:text-base"
                >
                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer text-sm sm:text-base"
                >
                  À propos
                </Link>
              </li>
              {/* <li>
                <Link
                  to="courses"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer text-sm sm:text-base"
                >
                  Nos cours
                </Link>
              </li> */}
              {/* <li>
                <Link
                  to="why-us"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer text-sm sm:text-base"
                >
                  Pourquoi nous choisir
                </Link>
              </li> */}
              <li>
                <Link
                  to="why-us"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer text-sm sm:text-base"
                >
                  Langues
                </Link>
              </li>
              <li>
                <Link
                  to="why-us"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer text-sm sm:text-base"
                >
                  Culture
                </Link>
              </li>
              <li>
                <Link
                  to="why-us"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer text-sm sm:text-base"
                >
                  Blog
                </Link>
              </li>
              {/* <li>
                <Link
                  to="testimonials"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer text-sm sm:text-base"
                >
                  Témoignages
                </Link>
              </li>
              <li>
                <Link
                  to="faq"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer text-sm sm:text-base"
                >
                  FAQ
                </Link>
              </li> */}
            </ul>
          </div>

          <div>
            <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4">
              Contact
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-400 text-sm sm:text-base">
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                contact@yekolangue.com
              </li>
              <li className="flex items-center text-gray-400 text-sm sm:text-base">
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                +243 982 545 563
              </li>
            </ul>

            <div className="mt-6">
              <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4">
                Newsletter
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm mb-4">
                Inscrivez-vous pour recevoir des conseils d'apprentissage et nos
                dernières nouvelles.
              </p>
              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Votre email"
                  className="px-3 py-2 w-full rounded-t-lg sm:rounded-l-lg sm:rounded-tr-none bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-primary-500 text-xs sm:text-sm"
                  disabled={status === "loading"}
                  required
                />
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="bg-primary-500 text-white rounded-b-lg sm:rounded-r-lg sm:rounded-bl-none px-4 py-2 hover:bg-primary-600 transition-colors text-xs sm:text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? "..." : "OK"}
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 sm:pt-8 mt-6 sm:mt-8 text-gray-400 text-xs sm:text-sm">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>
              &copy; {new Date().getFullYear()} YekoLangues. Tous droits
              réservés.
            </p>
            {/* <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6 mt-4 sm:mt-0">
              <a href="#" className="hover:text-white transition-colors">
                Mentions légales
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Politique de confidentialité
              </a>
              <a href="#" className="hover:text-white transition-colors">
                CGV
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
