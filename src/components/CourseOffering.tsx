import React, { useState } from "react";
import { Globe } from "lucide-react";
import { courses } from "../data/courses";
import CourseCard from "../components/CourseCard";
import ComingSoon from "./ComingSoon";

const CourseOfferings: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"lingala" | "swahili">("lingala");

  return (
    <section className="section bg-accent-500" id="courses">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <h2 className="section-title text-white text-2xl sm:text-3xl lg:text-4xl mb-3 sm:mb-4">
            Nos cours de langues
          </h2>
          <p className="section-subtitle text-white text-base sm:text-lg lg:text-xl">
            Découvrez nos programmes d'apprentissage structurés pour le Lingala
            et le Swahili, adaptés à tous les niveaux avec des instructeurs
            expérimentés.
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-2 shadow-lg border border-white/20">
            <button
              onClick={() => setActiveTab("lingala")}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 flex items-center space-x-2 ${
                activeTab === "lingala"
                  ? "bg-white text-gray-800 shadow-md"
                  : "text-white hover:text-gray-200"
              }`}
            >
              <Globe className="w-5 h-5" />
              <span>Lingala</span>
            </button>
            <button
              onClick={() => setActiveTab("swahili")}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 flex items-center space-x-2 ${
                activeTab === "swahili"
                  ? "bg-white text-gray-800 shadow-md"
                  : "text-white hover:text-gray-200"
              }`}
            >
              <Globe className="w-5 h-5" />
              <span>Swahili</span>
            </button>
          </div>
        </div>

        {activeTab === "swahili" ? (
          <ComingSoon />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {courses[activeTab].map((course) => (
              <CourseCard
                key={course.id}
                id={course.id}
                title={course.title}
                level={course.level}
                description={course.description}
                image={course.image}
                color={course.color}
                langue={activeTab}
              />
            ))}
          </div>
        )}

        {activeTab === "lingala" && (
          <div className="mt-12 sm:mt-14 lg:mt-16 text-center px-4">
            <div className="inline-block bg-white rounded-xl p-6 sm:p-8 shadow-xl max-w-2xl w-full">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 leading-tight">
                Prêt à commencer votre voyage linguistique?
              </h3>
              <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">
                Levez les obstacles. Vos coachs vous attendent pour débuter votre voyage linguistique. En route !
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
                href="https://calendly.com/contact-yekolangues"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 shadow-lg hover:shadow-xl transition-all cursor-pointer flex items-center justify-center"
            >
                 <span>Commencer maintenant</span>
            </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CourseOfferings;
