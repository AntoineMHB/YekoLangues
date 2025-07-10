import React from "react";
import { useInView } from "react-intersection-observer";
// import { Globe, BookOpen, Users, Heart } from "lucide-react";
import AboutImage from "../assets/about-us-image.jpeg";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import aboutImage from "../assets/ylpatterns.png";
import { Heart, Users, Globe, Star, Sparkles, MapPin, BookOpen, Award } from 'lucide-react';
import storyImage from '../assets/storyImage.png';

const About: React.FC = () => {
  // const { ref, inView } = useInView({
  //   triggerOnce: true,
  //   threshold: 0.2,
  // });

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

      <section id="about" className="section bg-white text-white">
      {/* <div className="container px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <h2 className="section-title text-white text-2xl sm:text-3xl lg:text-4xl">
            À propos de YekoLangues
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
                YekoLangues est née d'une passion : celle de transmettre la
                beauté de langues nationales du Congo: Lingala et Swahili et de rapprocher les Congolais de
                leurs racines culturelles.
              </p>

              <p className="text-sm sm:text-base lg:text-lg mb-4 sm:mb-5 lg:mb-6 leading-relaxed">
                Nous croyons que parler sa langue, c'est porter son identité
                avec fierté. Notre mission est aussi d'ouvrir l'apprentissage du
                lingala à toute personne désireuse de mieux comprendre l'âme du
                Congo.
              </p>

              <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
                Chez YekoLangues, nous allions tradition et modernité pour vous
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
      </div> */}

      <div className="min-h-screen bg-white from-amber-50 to-orange-50">
      {/* Hero Section */}
      

      <div className="max-w-6xl mx-auto px-2 py-16">
        {/* Comment tout a commencé */}
        <section className="mb-20 flex flex-col-reverse md:flex-row justify-start items-start gap-6">
          <div className="bg-white md:p-12 max-w-[600px] max-h-[700px]">
            <div className="flex items-center mb-8">
              {/* <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-full p-3 mr-4">
                <Sparkles className="w-8 h-8 text-white" />
              </div> */}
              <h2 className="text-3xl font-bold text-gray-800">Comment tout a commencé ?</h2>
            </div>
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
              <p className="text-lg text-black text-justify">
                YekoLangues est née du désir et surtout la fierté de vouloir partager. De vouloir partager à tout le monde mais surtout à la diaspora congolaise la culture de ce grand pays au cœur de l'Afrique qu'est la République Démocratique du Congo. <br />
                C'est au début de l'année 2025 quand Jacques et Antoine, deux jeunes congolais ayant grandi au Congo mais qui après multiples interactions avec des gens d'autres nationalités se sont rendu compte du fait que, ce qui fait l'identité du congolais pour un étranger, c'est « parler Lingala ». <br />C'est là que naît cette merveilleuse idée. Celle de s'affirmer qu'on est congolais en parlant toujours Lingala et de voir même plus loin: offrir aux congolais, ceux ayant grandi loin de la patrie mère, l'opportunité de se connecter à leur origine. <br />
                Et donc, puisque les deux ont grandi dans la partie Est du Congo où le Swahili est plus parlé, ils ont associé au projet l'apprentissage du Swahili. Une des langues nationales de la RDC.
              </p>
            </div>
          </div>

          <div>
             <img src={storyImage} alt="Yeko Langues Logo" className=" w-[1200px] h-[600px]" />
          </div>
        </section>

        {/* Notre mission */}
        <section className="mb-20">
          <div className="bg-emerald-600 rounded-2xl shadow-xl p-8 md:p-12 text-white">
            <div className="flex items-center mb-8">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 mr-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold">Notre mission</h2>
            </div>
            <div className="space-y-6 text-lg leading-relaxed text-white">
              <p>
                La mission que nous nous sommes fixée est simple mais très cruciale : offrir aux congolais d'origine un moyen efficace de se reconnecter avec leur origine par les langues couramment parlées au Congo.
                Toute langue fait écho d'une certaine culture. Nous y croyons fermement. Apprendre une langue c'est découvrir toute une façon de penser, de communiquer et de vivre, d'un peuple.
                Nous nous engageons donc à proposer un enseignement de haute qualité, ouvert et adapté à tous, préservant l'authenticité de la langue et de la culture tout en promouvant l'inclusivité.
              </p>
            </div>
          </div>
        </section>

        {/* Notre équipe */}
        <section className="mb-20">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-orange-100">
            <div className="flex items-center mb-8">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-full p-3 mr-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800">Notre équipe</h2>
            </div>
            <blockquote className="text-lg text-gray-700 italic leading-relaxed mb-8 border-l-4 border-orange-500 pl-6">
              « Nous vous remercions du fond du cœur d'avoir pris le temps de découvrir YekoLangues. Ce projet nous tient vraiment à cœur. C'est l'expression de notre fierté. La fierté d'être congolais. De faire partie de ce grand peuple. Ça fait chaud au cœur de voir tellement des gens intéressés à l'idée de porter haut notre culture. Ensemble nous faisons la grandeur de ce beau pays et de sa culture aux multiples couleurs. »
            </blockquote>
            <div className="bg-gradient-to-r from-orange-100 to-yellow-100 rounded-lg p-6 text-center">
              <p className="text-gray-600 italic">Photos de la Team</p>
              <div className="mt-4 flex justify-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center">
                  <Heart className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Nos valeurs */}
        <section className="mb-20">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-orange-100">
            <div className="flex items-center mb-12">
              <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full p-3 mr-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800">Nos valeurs</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-8">
                {/* Authenticité culturelle */}
                <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-6 border border-emerald-200">
                  <h3 className="text-xl font-bold text-emerald-700 mb-4">Authenticité culturelle</h3>
                  <p className="text-gray-700">
                    Nous enseignons les langues dans le contexte local et avec de professeurs habitant au pays pour une compréhension respectueuse.
                  </p>
                </div>

                {/* Passion du partage */}
                <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6 border border-orange-200">
                  <h3 className="text-xl font-bold text-orange-700 mb-4">Passion du partage</h3>
                  <p className="text-gray-700">
                    Nous croyons profondément que tout ce qui n'est pas partagé est forcément perdu. Nous sommes animés par l'esprit d'ouvrir la culture congolaise à toute personne désireuse de la connaître.
                  </p>
                </div>
              </div>

              <div className="space-y-8">
                {/* Fierté */}
                <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6 border border-yellow-200">
                  <h3 className="text-xl font-bold text-yellow-700 mb-4">Fierté</h3>
                  <p className="text-gray-700 mb-4">
                    « L'origine est éternelle et brille quand on parle d'elle ». Bien sûr que nous sommes fiers de notre culture.
                  </p>
                  <p className="text-gray-700 italic">
                    Comme on dit chez nous : « on n'a pas choisi de naître congolais, en vérité on a eu juste de la chance ».
                  </p>
                </div>

                {/* Impact et engagement social */}
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200">
                  <h3 className="text-xl font-bold text-purple-700 mb-4">Impact et engagement social</h3>
                  <h4 className="font-semibold text-purple-600 mb-2">Propulser la communauté</h4>
                  <p className="text-gray-700 mb-4">
                    YekoLangues se veut une vitrine de la culture congolaise à l'international.
                  </p>
                  <p className="text-gray-700">
                    Nous ne nous limitons pas qu'à enseigner les langues. Nous offrons par nos réseaux sociaux l'opportunité aux artistes locaux de se faire découvrir à l'international. Le Congo est plein de potentiel artistique. Nous le présentons au monde. Ce qui contribue à accroître le tourisme au pays.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-emerald-600 to-teal-700 rounded-2xl shadow-xl p-8 md:p-12 text-white">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                <Award className="w-12 h-12 text-white" />
              </div>
            </div>
            <h2 className="text-3xl font-bold mb-4">Rejoignez notre communauté</h2>
            <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
              Découvrez la richesse de la culture congolaise à travers l'apprentissage du Lingala et du Swahili.
            </p>
            <button className="bg-white text-emerald-600 font-bold py-4 px-8 rounded-full hover:bg-emerald-50 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              Commencer votre voyage linguistique
            </button>
          </div>
        </section>
      </div>
    </div>

    </section>
    <Footer />
    </div>
  
    
  );
};

export default About;
