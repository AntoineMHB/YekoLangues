import React from "react";
import { useInView } from "react-intersection-observer";
import CourseCard from "./CourseCard";
import { courses } from "../data/courses";

const Courses: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
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
          {courses.map((course) => (
            <CourseCard
              id={course.id}
              key={course.id}
              title={course.title}
              level={course.level}
              description={course.description}
              image={course.image}
              color={course.color} langue={""}            />
          ))}
        </div>

        <div className="mt-12 sm:mt-14 lg:mt-16 text-center px-4">
          <div
            id="start-learning"
            className="inline-block bg-white rounded-xl p-6 sm:p-8 shadow-xl max-w-2xl w-full"
          >
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
  );
};

export default Courses;
