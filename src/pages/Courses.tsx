import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { courses } from "../data/courses";
import CourseCard from "../components/CourseCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import manLearning from "../assets/manLearning.jpg";
import blackWomanLearning from "../assets/blackWomanLearning.jpg";
import ComingSoon from "../components/ComingSoon";
import { useCourse } from "../hooks/useCourse";
import { useTheCourse } from "../hooks/useTheCourse";
import CourseDetail from "./CourseDetailPage";
import { title } from "framer-motion/client";

const Courses: React.FC = () => {
  const { language, id } = useParams();
  const langue = language?.toLowerCase() ?? "lingala";
  const selectedCourses = courses[langue as keyof typeof courses] ?? [];
  const course = selectedCourses[0];

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const titleMap: Record<string, string> = {
    lingala: "Apprendre le Lingala en ligne",
    swahili: "Apprendre le Swahili en ligne",
  };

  const theCourse = useTheCourse(titleMap[langue]);

  const headerImageMap: Record<string, { src: string }> = {
    lingala: { src: manLearning },
    swahili: { src: blackWomanLearning },
  };

  const languageLabelMap: Record<string, string> = {
    lingala: "Lingala",
    swahili: "Swahili",
  };

  const langLabel = languageLabelMap[language ?? ""] ?? "langue";

  return (
    <div>
      <Navbar />

      <header
        className="relative h-64 sm:h-80 md:h-96 lg:h-[30rem] flex items-center justify-center text-white"
        style={{
          backgroundImage: `linear-gradient(to bottom,rgba(0,0,0,.6),rgba(0,0,0,.6)),url(${headerImageMap[langue].src})`,
          backgroundSize: "cover",
          backgroundPosition: "center 30%",
        }}
      >
        <div className="text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 leading-tight">
            {titleMap[langue] ?? "Nos Cours"}
          </h1>
        </div>
      </header>


      <section id="courses" className="section bg-accent-500">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-[10px] sm:mb-[10px] lg:mb-[10px]">
            {/* <h2 className="section-title text-white text-2xl sm:text-3xl lg:text-4xl mb-3 sm:mb-4">
                Nos offres de cours
              </h2> */}
            <p className="section-subtitle text-white text-base  font-medium sm:text-lg lg:text-xl">
              Apprenez à votre rythme, selon vos besoins.
            </p>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
            <section className="mb-12 sm:mb-16 ">
              <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
                <div className="order-2 lg:order-1 pt-14">
                  <div className="inline-block bg-emerald-700 text-white px-4 sm:px-6 py-2 mb-6">
                    <h2 className="text-sm sm:text-lg font-bold uppercase">
                      NOTRE PROGRAMME
                    </h2>

                  </div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 leading-tight text-white text-justify">
                    Un programme de {langLabel} adapté à tous les niveaux
                  </h3>
                  <h4 className="text-lg sm:text-xl font-medium text-white text-justify mb-4">
                    Notre programme de {langLabel} est adapté à votre niveau,
                    que vous soyez débutant, intermédiaire ou avancé. Avec un
                    abonnement mensuel flexible, vous bénéficierez de cours en
                    ligne interactifs, d’un suivi personnalisé et d’un accès à
                    des ressources pédagogiques complètes.
                  </h4>
                </div>

                <div className="bg-emerald-700 text-white rounded-lg shadow-lg p-4 sm:p-6  order-1 lg:order-2">
                  <div className="flex items-start mb-4 justify-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 mt-1 flex-shrink-0 sm:w-6 sm:h-6"
                    >
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                    </svg>
                    <h3 className="text-xl sm:text-2xl font-bold">
                      Abonnement
                    </h3>
                  </div>

                  <div className="text-left mb-4">
                    <p className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">
                      80€
                      <span className="text-base sm:text-xl font-normal text-white">
                        / mois
                      </span>
                    </p>
                  </div>

                  <div className="mb-6">
                    <p className="text-left mb-4 text-sm sm:text-base">
                      4 cours individuels par mois, de 1h30 chacun, en
                      visioconférence, pour seulement 80 € par mois pendant 5
                      mois.
                    </p>

                    <h4 className="font-semibold mb-2 text-sm sm:text-base">
                      Ressources pédagogiques :
                    </h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-white mr-2 flex-shrink-0">•</span>
                        <span className="text-sm sm:text-base">
                          20 cours individuels en visioconférence avec un coach
                          de langue basé en Afrique.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-white mr-2 flex-shrink-0">•</span>
                        <span className="text-sm sm:text-base">
                          40 cours écrits couvrant conjugaison, grammaire et
                          vocabulaire.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-white mr-2 flex-shrink-0">•</span>
                        <span className="text-sm sm:text-base">
                          100 verbes conjugués au présent, passé et futur, pour
                          maîtriser les bases de la communication.
                        </span>
                      </li>
                    </ul>
                  </div>

                  <Link to={"https://calendly.com/contact-yekolangues"}>
                    <button className="hover:scale-95 w-full bg-white text-gray-700 hover:bg-white hover:bg-opacity-80 py-3 rounded-md transition duration-300 font-medium text-sm sm:text-base">
                      S'abonner maintenant
                    </button>
                  </Link>
                </div>
              </div>
            </section>
          </div>

          <div className="flex justify-center items-center min-w-screen px-4 mb-10">
            <div className="">
              <h3 className="text-center text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 leading-tight text-white">
                Niveaux d'apprentissage
              </h3>

              <h4 className="text-lg sm:text-xl font-light text-white text-center mb-4">
                Que ce soit pour renouer avec la langue de vos racines ou pour
                explorer une nouvelle langue africaine, Soma Langues met à votre
                disposition des cours sur mesure pour vous accompagner dans ce
                voyage culturel et linguistique.
              </h4>
            </div>
          </div>

          <div
            ref={ref}
            className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 ${
              inView ? "animate-on-scroll animated" : "animate-on-scroll"
            }`}
          >
            {selectedCourses.length > 0 ? (
              selectedCourses.map((course) => (
                <CourseCard
                  id={course.id}
                  title={course.title}
                  level={course.level}
                  description={
                    <ul>
                      {course.description.map((item: string, index: number) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  }
                  image={course.image}
                  color={course.color}
                  langue={langue}
                />
              ))
            ) : (
              <p className="text-white col-span-full text-center">
                Aucun cours trouvé pour cette langue.
              </p>
            )}
          </div>


           

          <section className=" text-white py-12 sm:py-16 w-full shadow-2xl pt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 items-center">
                <div className="order-2 lg:order-1">
                  <div className="rounded-lg overflow-hidden h-64 sm:h-80 md:h-96 lg:h-[35rem] w-full max-w-sm mx-auto lg:max-w-none lg:w-[30rem] pt-8 sm:pt-12 lg:pt-16">
                    <img
                      src={course?.coach.image}
                      alt={`Coach de ${langLabel}`}
                      className="w-full h-full object-cover"
                    />

                  </div>
                  <div className="text-center lg:text-center mt-4">
                    <p className="text-sm sm:text-base font-semibold">
                      Coach de {langLabel}
                    </p>
                    <p className="text-xl sm:text-2xl font-bold">
                      {`${
                        course?.coach.firstName
                      } ${course?.coach.lastName.toLocaleUpperCase()}`}
                    </p>
                  </div>
                </div>

                <div className="order-1 lg:order-2">
                  <div className="bg-primary-50 bg-opacity-20 font-bold inline-block text-white px-4 sm:px-6 py-2 mb-4 sm:mb-6">
                    <h2 className="uppercase font-bold text-xs sm:text-sm md:text-base">
                      RÉSERVER UN COURS AVEC UN COACH DE{" "}
                      {langLabel.toUpperCase()}
                    </h2>
                  </div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 leading-tight">
                    Lancez-vous dans l'apprentissage du {langLabel} dès
                    maintenant
                  </h3>

                  <p className="text-primary-50 leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base">
                    Rejoignez Yeko Langues aujourd'hui et commencez votre
                    aventure linguistique avec le {langLabel}. Nos cours sont
                    conçus pour vous offrir une expérience d'apprentissage
                    complète et engageante. Inscrivez-vous dès maintenant pour
                    un cours d'essai gratuit et découvrez la richesse de cette
                    langue africaine.
                  </p>
                  <Link to={"https://calendly.com/contact-yekolangues"}>
                    <button className="bg-white text-primary-600 px-6 sm:px-8 py-3 rounded-md transition duration-300 font-semibold uppercase text-sm sm:text-base w-full sm:w-auto hover:scale-95">
                      ESSAYER UN COURS PARTICULIER GRATUIT
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Courses;
