import React from "react";
import { useInView } from "react-intersection-observer";
import CourseCard from "./CourseCard";

const Courses: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const courseData = [
    {
      id: 1,
      title: "Débutant",
      level: "Niveau 1",
      description:
        "Les fondations du lingala. Ce cours est idéal pour ceux qui n'ont aucune connaissance préalable de la langue. Vous apprendrez les bases de la grammaire, du vocabulaire essentiel et de la prononciation.",
      image: "src/assets/beginner.png",
      color: "primary",
    },
    {
      id: 2,
      title: "Intermédiaire",
      level: "Niveau 2",
      description:
        "Développez votre aisance. Si vous avez déjà quelques notions de lingala, ce niveau vous permettra d'enrichir votre vocabulaire, de maîtriser des structures grammaticales plus complexes.",
      image: "src/assets/intermediate.png",
      color: "secondary",
    },
    {
      id: 3,
      title: "Avancé",
      level: "Niveau 3",
      description:
        "Maîtrisez la nuance et la culture. Ce cours est conçu pour ceux qui souhaitent perfectionner leur lingala, comprendre les subtilités de la langue et explorer des aspects culturels.",
      image: "src/assets/advanced.png",
      color: "accent",
    },
  ];

  return (
    <section id="courses" className="section bg-accent-500">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="section-title text-white">Nos offres de cours</h2>
          <p className="section-subtitle text-white">
            Apprenez à votre rythme, selon vos besoins.
          </p>
        </div>

        <div
          ref={ref}
          className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 ${
            inView ? "animate-on-scroll animated" : "animate-on-scroll"
          }`}
        >
          {courseData.map((course) => (
            <CourseCard
              id={course.id}
              key={course.id}
              title={course.title}
              level={course.level}
              description={course.description}
              image={course.image}
              color={course.color}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <div
            id="start-learning"
            className="inline-block bg-white rounded-xl p-8 shadow-xl"
          >
            <h3 className="text-2xl font-bold mb-4">
              Prêt à commencer votre voyage linguistique?
            </h3>
            <p className="text-gray-600 mb-6">
              Prenez rendez-vous pour un cours d'essai gratuit et découvrez
              notre approche unique.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn btn-primary">
                Réserver un cours d'essai gratuit
              </button>
              <button className="btn btn-outline">Consulter les tarifs</button>
            </div>
          </div>
        </div>
      </div>

      <div className="wave-separator wave-secondary absolute bottom-0 left-0 right-0"></div>
    </section>
  );
};

export default Courses;
