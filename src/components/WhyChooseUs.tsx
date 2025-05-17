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
    <div className="bg-primary-50 bg-opacity-10 backdrop-blur-sm rounded-lg p-6 hover:bg-opacity-20 transition-all duration-300">
      <div className="w-14 h-14 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-200">{description}</p>
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
      icon: <Award className="text-primary-50" size={28} />,
      title: "Apprentissage personnalisé",
      description:
        "Nos cours sont adaptés à votre niveau, à votre rythme et à vos objectifs spécifiques.",
    },
    {
      id: 2,
      icon: <Users className="text-white" size={28} />,
      title: "Professeurs natifs",
      description:
        "Apprenez auprès de locuteurs natifs qui maîtrisent la langue et la culture congolaise.",
    },
    {
      id: 3,
      icon: <Globe className="text-white" size={28} />,
      title: "Immersion culturelle",
      description:
        "Au-delà de la langue, découvrez les traditions, les expressions et l'esprit du peuple congolais.",
    },
    {
      id: 4,
      icon: <BookOpen className="text-white" size={28} />,
      title: "Communauté dynamique",
      description:
        "Rejoignez une communauté d'apprenants motivés et échangez avec d'autres passionnés de lingala.",
    },
    {
      id: 5,
      icon: <Clock className="text-white" size={28} />,
      title: "Flexibilité",
      description:
        "Apprenez où et quand vous voulez grâce à nos programmes adaptés à votre emploi du temps.",
    },
  ];

  return (
    <section id="why-us" className="section bg-secondary-500 text-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="section-title text-white">
            Pourquoi choisir Yekolangue ?
          </h2>
        </div>

        <div
          ref={ref}
          className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 ${
            inView ? "animate-on-scroll animated" : "animate-on-scroll"
          }`}
        >
          {features.map((feature) => (
            <Feature
              key={feature.id}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>

      <div className="wave-separator wave-primary absolute bottom-0 left-0 right-0"></div>
    </section>
  );
};

export default WhyChooseUs;
