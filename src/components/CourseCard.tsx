import React from "react";
import { BookOpen } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface CourseCardProps {
  id: number;
  title: string;
  level: string;
  description: string;
  image: string;
  color: string;
  langue: string;
}

const CourseCard: React.FC<CourseCardProps> = ({
  id,
  title,
  level,
  description,
  image,
  color,
  langue,
}) => {
  const navigate = useNavigate();
  let colorClasses = "";

  switch (color) {
    case "primary":
      colorClasses = "from-primary-400 to-primary-600";
      break;
    case "secondary":
      colorClasses = "from-secondary-400 to-secondary-600";
      break;
    case "accent":
      colorClasses = "from-accent-400 to-accent-600";
      break;
    default:
      colorClasses = "from-primary-400 to-primary-600";
  }

  return (
    <div
      className="card h-full group shadow-xl cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
      onClick={() => navigate(`/langues/${langue}/${id}`)}
    >
      <div
        className={`relative h-32 sm:h-40 lg:h-48 overflow-hidden bg-gradient-to-r ${colorClasses}`}
      >
        <div className="absolute inset-0 bg-black/40 z-10" />
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-2 sm:top-3 lg:top-4 left-2 sm:left-3 lg:left-4 bg-white text-gray-800 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium z-20">
          {level}
        </div>
      </div>

      <div className="p-3 sm:p-4 lg:p-6">
        <h3 className="text-base sm:text-lg lg:text-xl font-bold mb-2 sm:mb-3 flex items-center">
          <BookOpen className="mr-2" size={16} />
          <span className="text-sm sm:text-base lg:text-lg">{title}</span>
        </h3>

        <p className="text-gray-600 mb-4 sm:mb-5 lg:mb-6 text-sm lg:text-base line-clamp-3 sm:line-clamp-5">
          {description}
        </p>

        <button className="mt-auto btn btn-outline w-full text-xs sm:text-sm lg:text-base py-2 sm:py-2.5">
          En savoir plus
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
