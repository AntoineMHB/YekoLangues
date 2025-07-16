import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
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
            { duration: 5000 }
          );
          setEmail("");
        } else {
          setStatus("error");
          toast.error(
            data.msg || "Une erreur s'est produite. Veuillez réessayer.",
            { duration: 5000 }
          );
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
          </div>

          <div>
            <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4">
              Nos cours
            </h3>
            <ul className="space-y-2">
              <li>
                <RouterLink
                  to="/langues/lingala"
                  className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
                >
                  Lingala
                </RouterLink>
              </li>
              <li>
                <RouterLink
                  to="/langues/swahili"
                  className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
                >
                  Swahili
                </RouterLink>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4">
              Liens rapides
            </h3>
            <ul className="space-y-2">
              <li>
                <ScrollLink
                  to="home"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer text-sm sm:text-base"
                >
                  Accueil
                </ScrollLink>
              </li>
              <li>
                <RouterLink
                  to="/about"
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer text-sm sm:text-base"
                >
                  À propos
                </RouterLink>
              </li>
              <li>
                <RouterLink
                  to="/"
                  state={{ scrollToSection: "courses" }}
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer text-sm sm:text-base"
                >
                  Langues
                </RouterLink>
              </li>
              <li>
                <RouterLink
                  to="/culture"
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer text-sm sm:text-base"
                >
                  Culture
                </RouterLink>
              </li>
              <li>
                <RouterLink
                  to="/blog"
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer text-sm sm:text-base"
                >
                  Blog
                </RouterLink>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4">
              Newsletter
            </h3>
            <p className="text-gray-400 text-xs sm:text-sm mb-4">
              Inscrivez-vous pour recevoir des conseils d'apprentissage et nos
              dernières nouvelles.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row">
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

        <div className="border-t border-gray-800 pt-6 sm:pt-8 mt-6 sm:mt-8 text-gray-400 text-xs sm:text-sm">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>
              &copy; {new Date().getFullYear()} YekoLangues. Tous droits
              réservés.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
