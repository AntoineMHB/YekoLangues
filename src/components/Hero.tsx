import React from "react";
import { Link } from "react-scroll";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-16 bg-hero-pattern bg-cover bg-right before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-r before:from-black before:to-transparent before:bg-opacity-80"
    >
      <div className="container relative z-10 text-white py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl lg:max-w-2xl"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
            <span className="text-accent-400">Parlez</span> la langue,{" "}
            <span className="text-primary-400">vivez</span> la culture!
          </h1>

          <p className="text-xl md:text-2xl mb-6">
            Apprenez le Lingala facilement et à votre rythme, où que vous soyez.
          </p>

          <p className="text-lg md:text-xl mb-12 text-gray-200">
            Des cours en ligne pour tous les niveaux, animés par des enseignants
            passionnés. Rejoignez-nous et ouvrez-vous à la langue et à la
            culture congolaise.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="start-learning"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="btn btn-primary text-lg px-8 py-4 shadow-lg hover:shadow-xl transition-all cursor-pointer"
            >
              <span>Commencer votre apprentissage</span>
              <ChevronRight className="ml-2" size={20} />
            </Link>

            <Link
              to="courses"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="btn bg-white text-gray-800 hover:bg-gray-100 text-lg shadow-lg hover:shadow-xl transition-all cursor-pointer"
            >
              Découvrir nos cours
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 top-[33rem] left-1/2 transform -translate-x-1/2"
        >
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="flex flex-col items-center cursor-pointer"
          >
            <span className="text-base mb-2 font-semibold">En savoir plus</span>
            <div className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-4 h-4 animate-bounce-slow"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </div>
          </Link>
        </motion.div>
      </div>

      <div className="wave-separator wave-primary absolute bottom-0 left-0 right-0"></div>
    </section>
  );
};

export default Hero;
