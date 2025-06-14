import React from "react";
import { useInView } from "react-intersection-observer";
import { Award, Users, Globe, BookOpen, Clock } from "lucide-react";

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-primary-50 bg-opacity-10 backdrop-blur-sm rounded-lg p-4 sm:p-6 hover:bg-opacity-20 transition-all duration-300">
      <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-3 sm:mb-4">
        {icon}
      </div>
      <h3 className="text-lg sm:text-xl font-bold mb-2 text-white">{title}</h3>
      <p className="text-sm sm:text-base text-gray-200">{description}</p>
    </div>
  );
};

const WhyChooseUs: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      id: 1,
      icon: <Award className="text-primary-50 w-6 h-6 sm:w-7 sm:h-7" />,
      title: "Apprentissage personnalisé",
      description:
        "Nos cours sont adaptés à votre niveau, à votre rythme et à vos objectifs spécifiques.",
    },
    {
      id: 2,
      icon: <Users className="text-white w-6 h-6 sm:w-7 sm:h-7" />,
      title: "Professeurs natifs",
      description:
        "Apprenez auprès de locuteurs natifs qui maîtrisent la langue et la culture congolaise.",
    },
    {
      id: 3,
      icon: <Globe className="text-white w-6 h-6 sm:w-7 sm:h-7" />,
      title: "Immersion culturelle",
      description:
        "Au-delà de la langue, découvrez les traditions, les expressions et l'esprit du peuple congolais.",
    },
    {
      id: 4,
      icon: <BookOpen className="text-white w-6 h-6 sm:w-7 sm:h-7" />,
      title: "Communauté dynamique",
      description:
        "Rejoignez une communauté d'apprenants motivés et échangez avec d'autres passionnés de lingala.",
    },
    {
      id: 5,
      icon: <Clock className="text-white w-6 h-6 sm:w-7 sm:h-7" />,
      title: "Flexibilité",
      description:
        "Apprenez où et quand vous voulez grâce à nos programmes adaptés à votre emploi du temps.",
    },
  ];

  return (
    <section
      id="why-us"
      className="py-12 sm:py-16 lg:py-20 bg-secondary-500 text-white relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
            Pourquoi choisir Yekolangue ?
          </h2>
        </div>

        <div
          ref={ref}
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 ${
            inView ? "animate-on-scroll animated" : "animate-on-scroll"
          }`}
        >
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className={`transition-all duration-700 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <Feature
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
