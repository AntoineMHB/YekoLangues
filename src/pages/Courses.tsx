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

const Courses: React.FC = () => {
  const { language, id } = useParams();
  const langue = language?.toLowerCase() ?? "lingala";
  const selectedCourses = courses[langue as keyof typeof courses] ?? [];
  const course = useCourse(language, Number(id));
  // const course = useTheCourse(language);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const titleMap: Record<string, string> = {
    lingala: "Apprendre le Lingala en ligne",
    swahili: "Apprendre le Swahili en ligne",
  };

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

      {langue === "swahili" ? (
        <ComingSoon />
      ) : (
        <section id="courses" className="section bg-accent-500">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-[10px] sm:mb-[10px] lg:mb-[10px">
              {/* <h2 className="section-title text-white text-2xl sm:text-3xl lg:text-4xl mb-3 sm:mb-4">
                Nos offres de cours
              </h2> */}
              <p className="section-subtitle text-white text-base sm:text-lg lg:text-xl">
                Apprenez à votre rythme, selon vos besoins.
              </p>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
              <section className="mb-12 sm:mb-16 ">
                <div className="inline-block bg-emerald-700 text-white px-4 sm:px-6 py-2 mb-6">
                  <h2 className="text-sm sm:text-lg font-bold uppercase">
                    NOTRE PROGRAMME
                  </h2>
                </div>

                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 leading-tight">
                  Un programme de {langLabel} adapté à tous les niveaux
                </h3>

                <p className="text-gray-700 leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base">
                  {course?.description}
                </p>

                <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
                  <div className="order-2 lg:order-1">
                    <h4 className="text-lg sm:text-xl font-semibold mb-4">
                      Ce que vous apprendrez
                    </h4>

                    <ul className="space-y-3">
                      {course?.learningOutcomes.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <span className="bg-secondary-500 h-2 w-2 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span className="text-sm sm:text-base">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-emerald-700 text-white rounded-lg shadow-lg p-4 sm:p-6 border border-gray-100 order-1 lg:order-2">
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
                          <span className="text-white mr-2 flex-shrink-0">
                            •
                          </span>
                          <span className="text-sm sm:text-base">
                            20 cours individuels en visioconférence avec un
                            coach de langue basé en Afrique.
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-white mr-2 flex-shrink-0">
                            •
                          </span>
                          <span className="text-sm sm:text-base">
                            40 cours écrits couvrant conjugaison, grammaire et
                            vocabulaire.
                          </span>
                        </li>
                      </ul>
                    </div>

                    <button className="w-full bg-white text-gray-700 hover:bg-white hover:bg-opacity-80 py-3 rounded-md transition duration-300 font-medium text-sm sm:text-base">
                      S'abonner maintenant
                    </button>
                  </div>
                </div>
              </section>
            </div>

            <div
              ref={ref}
              className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 ${
                inView ? "animate-on-scroll animated" : "animate-on-scroll"
              }`}
            >
              {selectedCourses.length > 0 ? (
                selectedCourses.map((course) => (
                  <Link key={course.id} to={`/langues/${langue}/${course.id}`}>
                    <CourseCard
                      id={course.id}
                      title={course.title}
                      level={course.level}
                      description={
                        <ul>
                          {course.description.map(
                            (item: string, index: number) => (
                              <li key={index}>{item}</li>
                            )
                          )}
                        </ul>
                      }
                      image={course.image}
                      color={course.color}
                      langue={langue}
                    />
                  </Link>
                ))
              ) : (
                <p className="text-white col-span-full text-center">
                  Aucun cours trouvé pour cette langue.
                </p>
              )}
            </div>

            <div className="mt-12 sm:mt-14 lg:mt-16 text-center px-4">
              <div className="inline-block bg-white rounded-xl p-6 sm:p-8 shadow-xl max-w-2xl w-full">
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 leading-tight">
                  Prêt à commencer votre voyage linguistique?
                </h3>
                <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">
                  Prenez rendez-vous pour un cours d'essai gratuit et découvrez
                  notre approche unique.
                </p>
                <a
                  href="https://calendly.com/contact-yekolangues"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary text-sm sm:text-base px-6 py-3 w-full sm:w-auto"
                >
                  <span>Réserver un cours d'essai gratuit</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      )}

      <CourseDetail />

      <Footer />
    </div>
  );
};

export default Courses;
