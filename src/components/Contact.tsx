import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import { MailIcon, Phone, MapPin } from "lucide-react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

const Contact: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    phone: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID || "";
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "";
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "";

    emailjs
      .send(serviceID, templateID, formState, publicKey)
      .then(() => {
        setIsSubmitted(true);
        setFormState({
          name: "",
          email: "",
          subject: "",
          message: "",
          phone: "",
        });
        toast.success(
          "Message envoyé avec succès ! Nous vous répondrons bientôt."
        );
      })
      .catch(() => {
        toast.error("Erreur lors de l'envoi du message. Veuillez réessayer.");
      });
  };

  return (
    <section id="contact" className="section bg-primary-500 text-white">
      <div className="container px-4">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="section-title text-white text-xl sm:text-3xl md:text-4xl font-bold mb-2">
            Prenez contact avec nous !
          </h2>
          <p className="text-base sm:text-xl max-w-2xl mx-auto">
            Envie d'en savoir plus ? Besoin de conseils pour choisir votre cours
            ? Remplissez ce formulaire ou contactez-nous directement.
          </p>
        </div>

        <div
          ref={ref}
          className={`grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 ${
            inView ? "animate-on-scroll animated" : "animate-on-scroll"
          }`}
        >
          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-xl overflow-hidden">
            <form onSubmit={handleSubmit} className="p-4 sm:p-8 text-gray-800">
              <div className="mb-4 sm:mb-6">
                <label
                  htmlFor="name"
                  className="block text-xs sm:text-sm font-medium mb-2"
                >
                  Nom
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  className="input text-xs sm:text-sm"
                  placeholder="Votre nom"
                />
              </div>

              <div className="mb-4 sm:mb-6">
                <label
                  htmlFor="email"
                  className="block text-xs sm:text-sm font-medium mb-2"
                >
                  Adresse e-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  className="input text-xs sm:text-sm"
                  placeholder="votre@email.com"
                />
              </div>

              <div className="mb-4 sm:mb-6 relative">
                <label
                  htmlFor="subject"
                  className="block text-xs sm:text-sm font-medium mb-2"
                >
                  Sujet
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formState.subject}
                  onChange={handleChange}
                  required
                  className="input appearance-none pr-10 text-xs sm:text-sm"
                >
                  <option value="">Sélectionnez un sujet</option>
                  <option value="course-inquiry">
                    Renseignements sur les cours
                  </option>
                  <option value="free-trial">Cours d'essai gratuit</option>
                  <option value="pricing">Tarifs et forfaits</option>
                  <option value="other">Autre</option>
                </select>

                <div className="pointer-events-none absolute inset-y-0 right-3 top-7 flex items-center text-gray-500">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>

              <div className="mb-4 sm:mb-6">
                <label
                  htmlFor="message"
                  className="block text-xs sm:text-sm font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="input resize-none text-xs sm:text-sm"
                  placeholder="Votre message"
                ></textarea>
              </div>

              <div className="mb-4 sm:mb-6">
                <label
                  htmlFor="phone"
                  className="block text-xs sm:text-sm font-medium mb-2"
                >
                  Téléphone / WhatsApp (optionnel)
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formState.phone}
                  onChange={handleChange}
                  className="input text-xs sm:text-sm"
                  placeholder="+33 6 XX XX XX XX"
                />
              </div>

              <button type="submit" className="btn btn-primary w-full text-xs sm:text-sm">
                Envoyer
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-between mt-8 md:mt-0">
            <div>
              <h3 className="text-lg sm:text-2xl font-bold mb-4 sm:mb-6">
                Informations de contact
              </h3>

              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white bg-opacity-10 flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                    <MailIcon className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-base sm:text-lg">Email</h4>
                    <p className="text-gray-200 text-xs sm:text-base">contact@yekolangue.com</p>
                    <p className="mt-1 text-xs sm:text-sm text-gray-300">
                      Nous répondons généralement dans les 24 heures.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white bg-opacity-10 flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                    <Phone className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-base sm:text-lg">WhatsApp</h4>
                    <p className="text-gray-200 text-xs sm:text-base">+243 982 545 563</p>
                    <p className="mt-1 text-xs sm:text-sm text-gray-300">
                      Disponible tous les jours pour vous 🤗
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white bg-opacity-10 flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                    <MapPin className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-base sm:text-lg">Localisation</h4>
                    <p className="text-gray-200 text-xs sm:text-base">Paris, France</p>
                    <p className="mt-1 text-xs sm:text-sm text-gray-300">
                      Cours en ligne disponibles partout dans le monde.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-white bg-opacity-10 backdrop-blur-sm rounded-xl">
              <h4 className="font-bold text-base sm:text-lg mb-1 sm:mb-2">
                Rejoignez notre communauté
              </h4>
              <p className="text-gray-200 mb-2 sm:mb-4 text-xs sm:text-sm">
                Suivez-nous sur les réseaux sociaux pour des astuces
                linguistiques, des événements culturels et plus encore.
              </p>
              <div className="flex space-x-3 sm:space-x-4">
                {/* Social icons */}
                <a
                  href="#"
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white bg-opacity-20 flex items-center justify-center hover:bg-opacity-30 transition-colors"
                >
                  {/* Facebook */}
                  <svg
                    width="16"
                    height="16"
                    className="sm:w-5 sm:h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white bg-opacity-20 flex items-center justify-center hover:bg-opacity-30 transition-colors"
                >
                  {/* Instagram */}
                  <svg
                    width="16"
                    height="16"
                    className="sm:w-5 sm:h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white bg-opacity-20 flex items-center justify-center hover:bg-opacity-30 transition-colors"
                >
                  {/* Twitter */}
                  <svg
                    width="16"
                    height="16"
                    className="sm:w-5 sm:h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white bg-opacity-20 flex items-center justify-center hover:bg-opacity-30 transition-colors"
                >
                  {/* YouTube */}
                  <svg
                    width="16"
                    height="16"
                    className="sm:w-5 sm:h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Toaster />
    </section>
  );
};

export default Contact;