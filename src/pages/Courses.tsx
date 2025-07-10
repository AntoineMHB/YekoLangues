import React from "react";
import { Link, useParams } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { courses } from "../data/courses";
import CourseCard from "../components/CourseCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import manLearning from "../assets/manLearning.jpg";

const Courses: React.FC = () => {
  const { language } = useParams();
  const langue = language?.toLowerCase() ?? "lingala";
  const selectedCourses = courses[langue as keyof typeof courses] ?? [];

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const titleMap: Record<string, string> = {
    lingala: "Apprendre le Lingala en ligne",
    swahili: "Apprendre le Swahili en ligne",
  };

  return (
    <div>
      <Navbar />

      <header
        className="relative h-64 sm:h-80 md:h-96 lg:h-[30rem] flex items-center justify-center text-white"
        style={{
          backgroundImage: `linear-gradient(to bottom,rgba(0,0,0,.6),rgba(0,0,0,.6)),url(${manLearning})`,
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
        <section className="py-20 bg-accent-500 text-white text-center animate-fade-in">
          <div className="container mx-auto px-4">
            <div className="flex justify-center mb-6">
              <svg
                className="w-24 h-24 text-yellow-300 animate-bounce"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M24 4v4m0 32v4m20-20h-4M8 24H4m31.3 13.3l-2.8-2.8M13.5 13.5l-2.8-2.8m0 28.6l2.8-2.8M34.5 13.5l2.8-2.8M24 14a10 10 0 100 20 10 10 0 000-20z"
                />
              </svg>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Bientôt Disponible!
            </h2>
            <p className="text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-6">
              Les cours de Swahili sont en cours de préparation. Restez
              connectés pour découvrir bientôt notre contenu exclusif.
            </p>
            <div className="inline-block bg-white text-gray-800 rounded-xl px-6 py-4 shadow-lg animate-fade-in-slow">
              <p className="font-medium">✨ Merci pour votre patience ✨</p>
            </div>
          </div>
        </section>
      ) : (
        <section id="courses" className="section bg-accent-500">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-10 lg:mb-12">
              <h2 className="section-title text-white text-2xl sm:text-3xl lg:text-4xl mb-3 sm:mb-4">
                Nos offres de cours
              </h2>
              <p className="section-subtitle text-white text-base sm:text-lg lg:text-xl">
                Apprenez à votre rythme, selon vos besoins.
              </p>
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
                      description={course.description}
                      image={course.image}
                      color={course.color}
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
                <button className="btn btn-primary text-sm sm:text-base px-6 py-3 w-full sm:w-auto">
                  Réserver un cours d'essai gratuit
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default Courses;
