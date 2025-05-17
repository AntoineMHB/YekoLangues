import { useParams, Link, useNavigate } from "react-router-dom";
import { useCourse } from "../hooks/useCourse";
import { ArrowLeft } from "lucide-react";

export default function CourseDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const course = useCourse(Number(id));

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-6">
          <p className="text-xl font-poppins">Cours introuvable.</p>
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

  return (
    <div className="font-poppins">
      {/* Hero Banner - Better positioned image with centered text */}
      <header
        className="relative h-80 flex items-center justify-center text-white"
        style={{
          backgroundImage: `linear-gradient(to bottom,rgba(0,0,0,.6),rgba(0,0,0,.6)),url(${course.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center 30%", // Adjust vertical positioning
        }}
      >
        <div className="text-center px-4">
          <h1 className="text-5xl font-bold mb-2">{course.title}</h1>
          <p className="text-xl">Niveau {course.level}</p>
        </div>
      </header>

      {/* Back link */}
      <div className="max-w-5xl mx-auto px-4 py-6">
        <Link
          to="/"
          className="inline-flex items-center text-gray-600 hover:text-primary-500 transition duration-300"
        >
          <ArrowLeft size={18} className="mr-1" />
          Retour aux cours
        </Link>
      </div>

      {/* Main content */}
      <div className="max-w-5xl mx-auto px-4 pb-20">
        {/* Programme section */}
        <section className="mb-16">
          <div className="inline-block bg-primary-500 text-white px-6 py-2 mb-6">
            <h2 className="text-lg font-bold uppercase">NOTRE PROGRAMME</h2>
          </div>

          <h3 className="text-3xl font-bold mb-6">
            Un programme de Swahili adapté à tous les niveaux
          </h3>

          <p className="text-gray-700 leading-relaxed mb-8">
            Notre programme de Swahili est conçu pour s'adapter à votre niveau,
            que vous soyez débutant, intermédiaire ou avancé. Grâce à un
            abonnement mensuel flexible, vous bénéficierez de cours en ligne
            interactifs, d'un suivi personnalisé et d'un accès à des ressources
            pédagogiques complètes.
          </p>

          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h4 className="text-xl font-semibold mb-4">
                Ce que vous apprendrez
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="bg-primary-500 h-2 w-2 rounded-full mt-2 mr-2"></span>
                  <span>Vocabulaire courant et expressions idiomatiques</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary-500 h-2 w-2 rounded-full mt-2 mr-2"></span>
                  <span>Grammaire et conjugaison swahilie</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary-500 h-2 w-2 rounded-full mt-2 mr-2"></span>
                  <span>Prononciation et conversation fluide</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary-500 h-2 w-2 rounded-full mt-2 mr-2"></span>
                  <span>Culture et traditions d'Afrique de l'Est</span>
                </li>
              </ul>
            </div>

            {/* Pricing card */}
            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-100">
              <div className="flex items-center mb-4 justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2"
                >
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
                <h3 className="text-2xl font-bold">Abonnement</h3>
              </div>

              <div className="text-center mb-4">
                <p className="text-5xl font-bold mb-2">
                  80€
                  <span className="text-xl font-normal text-gray-500">
                    / mois
                  </span>
                </p>
              </div>

              <div className="mb-6">
                <p className="text-center mb-4">
                  4 cours individuels par mois, de 1h30 chacun, en
                  visioconférence, pour seulement 80 € par mois pendant 5 mois.
                </p>

                <h4 className="font-semibold mb-2">
                  Ressources pédagogiques :
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-2">•</span>
                    <span>
                      20 cours individuels en visioconférence avec un coach de
                      langue basé en Afrique.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-2">•</span>
                    <span>
                      40 cours écrits couvrant conjugaison, grammaire et
                      vocabulaire.
                    </span>
                  </li>
                </ul>
              </div>

              <button className="w-full bg-primary-500 hover:bg-primary-600 text-white py-3 rounded-md transition duration-300 font-medium">
                S'abonner maintenant
              </button>
            </div>
          </div>
        </section>

        {/* Coach section - Using colors from design system */}
        <section className="bg-accent-500 text-white -mx-4 px-4 py-16">
          <div className="max-w-5xl mx-auto">
            <div className="bg-primary-500 inline-block text-white px-6 py-2 mb-6">
              <h2 className="uppercase font-bold">
                RÉSERVER UN COURS AVEC UN COACH DE SWAHILI
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-10 items-center">
              {/* Coach image */}
              <div className="rounded-lg overflow-hidden h-96">
                {course.image ? (
                  <img
                    src={course.image}
                    alt="Coach de Swahili"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-primary-800 flex items-center justify-center">
                    <span className="text-2xl">Photo du coach</span>
                  </div>
                )}
              </div>

              <div>
                <h3 className="text-3xl font-bold mb-6">
                  Lancez-vous dans l'apprentissage du Swahili dès maintenant
                </h3>

                <p className="text-primary-50 leading-relaxed mb-8">
                  Rejoignez Soma Langues aujourd'hui et commencez votre aventure
                  linguistique avec le Swahili. Nos cours sont conçus pour vous
                  offrir une expérience d'apprentissage complète et engageante.
                  Inscrivez-vous dès maintenant pour un cours d'essai gratuit et
                  découvrez la richesse de cette langue africaine.
                </p>

                <button className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-3 rounded-md transition duration-300 font-medium uppercase">
                  ESSAYER UN COURS PARTICULIER GRATUIT
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Optional: Home page style highlighted content section with orange accent */}
        <section className="mt-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-2">
                <span className="text-accent-500">Parlez</span> la langue,
              </h2>
              <h2 className="text-4xl font-bold mb-6">
                <span className="text-primary-500">vivez</span> la culture!
              </h2>

              <p className="text-gray-700 leading-relaxed mb-8">
                Apprenez le Swahili facilement et à votre rythme, où que vous
                soyez. Des cours en ligne pour tous les niveaux, animés par des
                enseignants passionnés. Rejoignez-nous et ouvrez-vous à la
                langue et à la culture africaine.
              </p>

              <div className="flex space-x-4">
                <button className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-md transition duration-300">
                  Commencer votre apprentissage
                </button>
                <button className="border border-gray-300 hover:border-primary-500 px-6 py-3 rounded-md transition duration-300">
                  Découvrir nos cours
                </button>
              </div>
            </div>

            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">
                Pourquoi apprendre le Swahili?
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="bg-secondary-500 h-2 w-2 rounded-full mt-2 mr-2"></span>
                  <span>
                    Parlé par plus de 100 millions de personnes en Afrique de
                    l'Est
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="bg-secondary-500 h-2 w-2 rounded-full mt-2 mr-2"></span>
                  <span>
                    Langue officielle de la Communauté d'Afrique de l'Est
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="bg-secondary-500 h-2 w-2 rounded-full mt-2 mr-2"></span>
                  <span>
                    Atout précieux pour les voyages et les affaires en Afrique
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="bg-secondary-500 h-2 w-2 rounded-full mt-2 mr-2"></span>
                  <span>
                    Une des langues africaines les plus accessibles à apprendre
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
