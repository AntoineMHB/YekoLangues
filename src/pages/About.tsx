import React from "react";
import { useInView } from "react-intersection-observer";
import { Globe, BookOpen, Users, Heart } from "lucide-react";
import AboutImage from "../assets/about-us-image.jpeg";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import aboutImage from "../assets/ylpatterns.png";

const About: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div>
      <Navbar />

            <header
              className="relative h-64 sm:h-80 md:h-96 lg:h-[30rem] flex items-center justify-center text-white"
              style={{
                backgroundImage: `linear-gradient(to bottom,rgba(0,0,0,.6),rgba(0,0,0,.6)),url(${aboutImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center 30%",
              }}
            >
              <div className="text-center px-4 max-w-4xl mx-auto">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 leading-tight">
                  À propos
                </h1>
              </div>
            </header>

      <section id="about" className="section bg-primary-500 text-white">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <h2 className="section-title text-white text-2xl sm:text-3xl lg:text-4xl">
            À propos de Yekolangue
          </h2>
        </div>

        <div
          ref={ref}
          className={`grid md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center ${
            inView ? "animate-on-scroll animated" : "animate-on-scroll"
          }`}
        >
          <div className="rounded-xl overflow-hidden shadow-xl order-2 md:order-1">
            <img
              src={AboutImage}
              alt="Yekolangue cultural learning"
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="flex flex-col justify-between order-1 md:order-2">
            <div className="text-justify md:text-left mb-6 sm:mb-8">
              <p className="text-sm sm:text-base lg:text-lg mb-4 sm:mb-5 lg:mb-6 leading-relaxed">
                Yekolangue est née d'une passion : celle de transmettre la
                beauté de la langue lingala et de rapprocher les Congolais de
                leurs racines culturelles.
              </p>

              <p className="text-sm sm:text-base lg:text-lg mb-4 sm:mb-5 lg:mb-6 leading-relaxed">
                Nous croyons que parler sa langue, c'est porter son identité
                avec fierté. Notre mission est aussi d'ouvrir l'apprentissage du
                lingala à toute personne désireuse de mieux comprendre l'âme du
                Congo.
              </p>

              <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
                Chez Yekolangue, nous allions tradition et modernité pour vous
                offrir une expérience d'apprentissage conviviale, efficace et
                enrichissante.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="flex items-start">
                <Globe
                  className="mr-3 text-accent-400 flex-shrink-0 mt-1"
                  size={20}
                />
                <div>
                  <h3 className="font-bold text-base sm:text-lg mb-1">
                    Culturel
                  </h3>
                  <p className="text-sm sm:text-base">
                    Plus qu'une langue, une identité
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <BookOpen
                  className="mr-3 text-accent-400 flex-shrink-0 mt-1"
                  size={20}
                />
                <div>
                  <h3 className="font-bold text-base sm:text-lg mb-1">
                    Pédagogique
                  </h3>
                  <p className="text-sm sm:text-base">
                    Méthodes adaptées et efficaces
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Users
                  className="mr-3 text-accent-400 flex-shrink-0 mt-1"
                  size={20}
                />
                <div>
                  <h3 className="font-bold text-base sm:text-lg mb-1">
                    Communautaire
                  </h3>
                  <p className="text-sm sm:text-base">
                    Apprenez au sein d'une communauté
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Heart
                  className="mr-3 text-accent-400 flex-shrink-0 mt-1"
                  size={20}
                />
                <div>
                  <h3 className="font-bold text-base sm:text-lg mb-1">
                    Passionné
                  </h3>
                  <p className="text-sm sm:text-base">
                    Un enseignement avec cœur
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer />
    </div>
  
    
  );
};

export default About;
