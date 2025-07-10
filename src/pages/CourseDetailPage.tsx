import { useParams, useNavigate } from "react-router-dom";
import { useCourse } from "../hooks/useCourse";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function CourseDetail() {
  const { language, id } = useParams();
  const navigate = useNavigate();
  const course = useCourse(language, Number(id));

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center space-y-6">
          <p className="text-lg sm:text-xl font-poppins">Cours introuvable.</p>
          <button
            onClick={() => navigate("/")}
            className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-2 rounded-md transition duration-300 font-poppins"
          >
            Retour à l'accueil
          </button>
        </div>
      </div>
    );
  }

  const languageLabelMap: Record<string, string> = {
    lingala: "Lingala",
    swahili: "Swahili",
  };

  const langLabel = languageLabelMap[language ?? ""] ?? "langue";

  return (
    <div className="font-poppins">
      <Navbar />

      <header
        className="relative h-64 sm:h-80 md:h-96 lg:h-[30rem] flex items-center justify-center text-white"
        style={{
          backgroundImage: `linear-gradient(to bottom,rgba(0,0,0,.6),rgba(0,0,0,.6)),url(${course.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center 30%",
        }}
      >
        <div className="text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 leading-tight">
            {course.title}
          </h1>
          <p className="text-base sm:text-lg md:text-xl">{course.level}</p>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <section className="mb-12 sm:mb-16 pt-8 sm:pt-12 lg:pt-16">
          <div className="inline-block bg-secondary-500 text-white px-4 sm:px-6 py-2 mb-6">
            <h2 className="text-sm sm:text-lg font-bold uppercase">
              NOTRE PROGRAMME
            </h2>
          </div>

          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 leading-tight">
            Un programme de {langLabel} adapté à tous les niveaux
          </h3>

          <p className="text-gray-700 leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base">
            {course.description}
          </p>

          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
            <div className="order-2 lg:order-1">
              <h4 className="text-lg sm:text-xl font-semibold mb-4">
                Ce que vous apprendrez
              </h4>

              <ul className="space-y-3">
                {course.learningOutcomes?.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="bg-secondary-500 h-2 w-2 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-sm sm:text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-secondary-500 text-white rounded-lg shadow-lg p-4 sm:p-6 border border-gray-100 order-1 lg:order-2">
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
                <h3 className="text-xl sm:text-2xl font-bold">Abonnement</h3>
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
                  visioconférence, pour seulement 80 € par mois pendant 5 mois.
                </p>

                <h4 className="font-semibold mb-2 text-sm sm:text-base">
                  Ressources pédagogiques :
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-white mr-2 flex-shrink-0">•</span>
                    <span className="text-sm sm:text-base">
                      20 cours individuels en visioconférence avec un coach de
                      langue basé en Afrique.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-white mr-2 flex-shrink-0">•</span>
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

      <section className="bg-accent-500 text-white px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 items-center">
            <div className="order-2 lg:order-1">
              <div className="rounded-lg overflow-hidden h-64 sm:h-80 md:h-96 lg:h-[35rem] w-full max-w-sm mx-auto lg:max-w-none lg:w-[30rem] pt-8 sm:pt-12 lg:pt-16">
                <img
                  src={course.coach.image}
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
                    course.coach.firstName
                  } ${course.coach.lastName.toLocaleUpperCase()}`}
                </p>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="bg-primary-50 bg-opacity-20 font-bold inline-block text-white px-4 sm:px-6 py-2 mb-4 sm:mb-6">
                <h2 className="uppercase font-bold text-xs sm:text-sm md:text-base">
                  RÉSERVER UN COURS AVEC UN COACH DE {langLabel.toUpperCase()}
                </h2>
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 leading-tight">
                Lancez-vous dans l'apprentissage du {langLabel} dès maintenant
              </h3>

              <p className="text-primary-50 leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base">
                Rejoignez Yeko Langues aujourd'hui et commencez votre aventure
                linguistique avec le {langLabel}. Nos cours sont conçus pour
                vous offrir une expérience d'apprentissage complète et
                engageante. Inscrivez-vous dès maintenant pour un cours d'essai
                gratuit et découvrez la richesse de cette langue africaine.
              </p>

              <button className="bg-white text-primary-600 px-6 sm:px-8 py-3 rounded-md transition duration-300 font-semibold uppercase text-sm sm:text-base w-full sm:w-auto">
                ESSAYER UN COURS PARTICULIER GRATUIT
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
