import React from "react";
import { BookOpen } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

interface CourseCardProps {
  id: number;
  title: string;
  level: string;
  description: string;
  image: string;
  color: string;
}

const CourseCard: React.FC<CourseCardProps> = ({
  id,
  title,
  level,
  description,
  image,
  color,
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
      className="card h-full group shadow-xl cursor-pointer"
      onClick={() => navigate(`/courses/${id}`)}
    >
      <div
        className={`relative h-48 overflow-hidden bg-gradient-to-r ${colorClasses}`}
      >
        {image && (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover mix-blend-overlay opacity-80 group-hover:scale-105 transition-transform duration-500"
          />
        )}
        <div className="absolute top-4 left-4 bg-white text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
          {level}
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold mb-3 flex items-center">
          <BookOpen className="mr-2" size={20} />
          {title}
        </h3>

        <p className="text-gray-600 mb-6 text-ellipsis h-32">{description}</p>

        <Link to={`/courses/${id}`} className="mt-6 btn btn-outline w-full">
          En savoir plus
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;
