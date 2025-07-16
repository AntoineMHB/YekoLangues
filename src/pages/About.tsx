import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import aboutImage from "../assets/ylpatterns.png";
import storyImage from "../assets/us.jpg";
import teamImage from "../assets/about-us-image.jpeg";
import { Users, Globe, Star, Award, Leaf } from "lucide-react";
import { useNavigate } from "react-router-dom";

const BranchSection = ({
  title,
  icon,
  children,
  image,
  index,
}: {
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  image?: string;
  index: number;
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const isLeft = index % 2 === 0;

  const contentVariants = {
    hidden: { opacity: 0, x: isLeft ? -50 : 50, scale: 0.95 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.2 },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.4 },
    },
  };

  const branchLineVariants = {
    hidden: { width: 0, opacity: 0 },
    visible: {
      width: 80,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      ref={ref}
      className="relative w-full max-w-6xl mx-auto mb-16 flex flex-col lg:flex-row items-center gap-8 px-4"
      style={{ minHeight: 200 }}
    >
      {isLeft ? (
        <>
          <motion.div
            className="w-full lg:w-5/12 bg-white rounded-lg p-6 md:p-8 shadow-xl space-y-6"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={contentVariants}
          >
            <div className="flex items-center mb-4">
              {icon && (
                <div className="bg-emerald-600 p-3 rounded-full text-white mr-4 shadow-md">
                  {icon}
                </div>
              )}
              <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
            </div>
            <div className="text-gray-700 text-justify leading-relaxed text-base">
              {children}
            </div>
          </motion.div>

          <div className="w-full lg:w-1/12 flex justify-center relative my-6 lg:my-0">
            <motion.div
              className="w-6 h-6 bg-emerald-600 rounded-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 shadow-lg"
              initial={{ scale: 0 }}
              animate={inView ? { scale: 1 } : { scale: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            />
            <motion.div
              className="h-1 bg-emerald-600 absolute top-1/2 right-1/2 -translate-y-1/2 origin-right"
              variants={branchLineVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            />
          </div>

          <motion.div
            className="w-full lg:w-5/12 flex justify-center lg:justify-start px-4"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={imageVariants}
          >
            {image && (
              <img
                src={image}
                alt="branch visual"
                className="w-full h-auto rounded-lg shadow-xl object-cover max-h-[300px]"
              />
            )}
          </motion.div>
        </>
      ) : (
        <>
          <motion.div
            className="w-full lg:w-5/12 flex justify-center lg:justify-end px-4"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={imageVariants}
          >
            {image && (
              <img
                src={image}
                alt="branch visual"
                className="w-full h-auto rounded-lg shadow-xl object-cover max-h-[300px]"
              />
            )}
          </motion.div>

          <div className="w-full lg:w-1/12 flex justify-center relative my-6 lg:my-0">
            <motion.div
              className="w-6 h-6 bg-emerald-600 rounded-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 shadow-lg"
              initial={{ scale: 0 }}
              animate={inView ? { scale: 1 } : { scale: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            />
            <motion.div
              className="h-1 bg-emerald-600 absolute top-1/2 left-1/2 -translate-y-1/2 origin-left"
              variants={branchLineVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            />
          </div>

          <motion.div
            className="w-full lg:w-5/12 bg-white rounded-lg p-6 md:p-8 shadow-xl space-y-6 text-left"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={contentVariants}
          >
            <div className="flex items-center mb-4">
              {icon && (
                <div className="bg-emerald-600 p-3 rounded-full text-white mr-4 shadow-md">
                  {icon}
                </div>
              )}
              <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
            </div>
            <div className="text-gray-700 leading-relaxed text-base">
              {children}
            </div>
          </motion.div>
        </>
      )}
    </section>
  );
};

const ValuesFruit = ({
  title,
  description,
  color,
  delay = 0,
}: {
  title: string;
  description: string;
  color: string;
  delay?: number;
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      className="relative group"
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={
        inView
          ? { opacity: 1, y: 0, scale: 1 }
          : { opacity: 0, y: 20, scale: 0.9 }
      }
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      <div
        className={`bg-gradient-to-br ${color} rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105`}
      >
        <div className="flex items-center mb-3">
          <Leaf className="w-6 h-6 text-white mr-3" />
          <h3 className="font-bold text-lg text-white">{title}</h3>
        </div>
        <p className="text-white/90 leading-relaxed">{description}</p>
      </div>

      <motion.div
        className="absolute -top-4 left-1/2 w-0.5 h-8 bg-emerald-400 transform -translate-x-1/2"
        initial={{ height: 0 }}
        animate={inView ? { height: 32 } : { height: 0 }}
        transition={{ duration: 0.4, delay: delay + 0.2 }}
      />
    </motion.div>
  );
};

const ValuesTreeSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const values = [
    {
      title: "Authenticité culturelle",
      description:
        "Nous enseignons les langues dans le contexte local et avec des professeurs habitant au pays pour une compréhension respectueuse.",
      color: "from-emerald-500 to-emerald-700",
    },
    {
      title: "Passion du partage",
      description:
        "Nous croyons profondément que tout ce qui n'est pas partagé est forcément perdu. Nous sommes animés par l'esprit d'ouvrir la culture congolaise à toute personne désireuse de la connaître.",
      color: "from-orange-500 to-orange-700",
    },
    {
      title: "Fierté",
      description:
        "« L'origine est éternelle et brille quand on parle d'elle ». Bien sûr que nous sommes fiers de notre culture. Comme on dit chez nous : « on n'a pas choisi de naître congolais, en vérité on a eu juste de la chance ». ",
      color: "from-yellow-500 to-yellow-700",
    },
    {
      title: "Impact et engagement social",
      description:
        "YekoLangues se veut une vitrine de la culture congolaise à l'international. Nous offrons par nos réseaux sociaux l'opportunité aux artistes locaux de se faire découvrir à l'international.",
      color: "from-purple-500 to-purple-700",
    },
  ];

  return (
    <section
      ref={ref}
      className="relative w-full max-w-6xl mx-auto mb-16 flex flex-col lg:flex-row items-center gap-8 px-4"
      style={{ minHeight: 200 }}
    >
      <div className="w-full lg:w-5/12 flex justify-center lg:justify-end">
        <div className="relative w-[350px] h-[300px] md:w-[450px] md:h-[400px] bg-gradient-to-b from-sky-100 to-emerald-50 rounded-lg shadow-md flex items-end justify-center p-8">
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-12 h-32 bg-gradient-to-t from-amber-800 to-amber-600 rounded-t-full"
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
          <motion.div
            className="absolute bottom-24 left-1/2 transform -translate-x-1/2 w-48 h-48 bg-gradient-to-b from-emerald-400 to-emerald-600 rounded-full opacity-80"
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : { scale: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          />
          <motion.div
            className="absolute top-16 left-20 w-4 h-4 bg-red-500 rounded-full"
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : { scale: 0 }}
            transition={{ duration: 0.3, delay: 0.8 }}
          />
          <motion.div
            className="absolute top-24 right-24 w-4 h-4 bg-orange-500 rounded-full"
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : { scale: 0 }}
            transition={{ duration: 0.3, delay: 1.0 }}
          />
          <motion.div
            className="absolute top-32 left-32 w-4 h-4 bg-yellow-500 rounded-full"
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : { scale: 0 }}
            transition={{ duration: 0.3, delay: 1.2 }}
          />
          <motion.div
            className="absolute top-28 right-16 w-4 h-4 bg-purple-500 rounded-full"
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : { scale: 0 }}
            transition={{ duration: 0.3, delay: 1.4 }}
          />
        </div>
      </div>
      <div className="w-full lg:w-1/12 flex justify-center relative my-6 lg:my-0">
        <motion.div
          className="w-6 h-6 bg-emerald-600 rounded-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : { scale: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        />
        <motion.div
          className="h-1 bg-emerald-600 absolute top-1/2 left-1/2 -translate-y-1/2 origin-left"
          initial={{ width: 0, opacity: 0 }}
          animate={
            inView ? { width: 80, opacity: 1 } : { width: 0, opacity: 0 }
          }
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
      </div>
      <motion.div
        className="w-full lg:w-5/12 bg-white rounded-lg p-6 md:p-8 shadow-xl space-y-6"
        initial={{ opacity: 0, x: 50, scale: 0.9 }}
        animate={
          inView
            ? { opacity: 1, x: 0, scale: 1 }
            : { opacity: 0, x: 50, scale: 0.9 }
        }
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="flex items-center mb-6">
          <div className="bg-emerald-600 p-3 rounded-full text-white mr-4">
            <Star />
          </div>
          <h2 className="text-2xl font-bold text-gray-800">Nos valeurs</h2>
        </div>
        <div className="space-y-6">
          {values.map((value, index) => (
            <ValuesFruit
              key={index}
              title={value.title}
              description={value.description}
              color={value.color}
              delay={index * 0.2}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

const TeamSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative w-full max-w-6xl mx-auto mb-16 flex flex-col lg:flex-row items-center gap-8 px-4"
      style={{ minHeight: 200 }}
    >
      <motion.div
        className="w-full lg:w-5/12 flex justify-center lg:justify-start px-4"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <img
          src={teamImage}
          alt="Notre équipe"
          className="w-full h-auto rounded-lg shadow-xl object-cover max-h-[300px]"
        />
      </motion.div>

      <div className="w-full lg:w-1/12 flex justify-center relative my-6 lg:my-0">
        <motion.div
          className="w-6 h-6 bg-emerald-600 rounded-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 shadow-lg"
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : { scale: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        />
        <motion.div
          className="h-1 bg-emerald-600 absolute top-1/2 left-1/2 -translate-y-1/2 origin-left"
          initial={{ width: 0, opacity: 0 }}
          animate={
            inView ? { width: 80, opacity: 1 } : { width: 0, opacity: 0 }
          }
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
      </div>

      <motion.div
        className="w-full lg:w-5/12 bg-white rounded-lg p-6 md:p-8 shadow-xl space-y-6"
        initial={{ opacity: 0, x: 50, scale: 0.9 }}
        animate={
          inView
            ? { opacity: 1, x: 0, scale: 1 }
            : { opacity: 0, x: 50, scale: 0.9 }
        }
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="flex items-center mb-4">
          <div className="bg-emerald-600 p-3 rounded-full text-white mr-4 shadow-md">
            <Users size={24} />
          </div>
          <h2 className="text-2xl font-bold text-gray-800">Notre équipe</h2>
        </div>
        <p className="text-gray-700 leading-relaxed text-justify">
          Notre équipe est composée de passionnés de la culture congolaise,
          engagés à transmettre la richesse linguistique à travers des cours
          vivants et accessibles. Nous croyons au pouvoir de la langue pour
          rapprocher les peuples et célébrer nos racines communes.
        </p>
      </motion.div>
    </section>
  );
};

const CTASection = () => {
  const navigate = useNavigate();
  return (
    <section className="text-center mt-20 mb-20 px-4">
      <div className="bg-gradient-to-r from-emerald-600 to-teal-700 rounded-2xl shadow-xl p-8 md:p-12 text-white max-w-3xl mx-auto">
        <div className="flex justify-center mb-6">
          <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
            <Award className="w-12 h-12 text-white" />
          </div>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Rejoignez notre communauté
        </h2>
        <p className="text-md md:text-xl text-emerald-100 mb-8">
          Découvrez la richesse de la culture congolaise à travers
          l&apos;apprentissage du Lingala et du Swahili.
        </p>
        <button
          className="bg-white text-emerald-600 font-bold py-3 px-6 md:py-4 md:px-8 rounded-full hover:bg-emerald-50 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          onClick={() =>
            navigate("/", { state: { scrollToSection: "courses" } })
          }
        >
          Commencer votre voyage linguistique
        </button>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <div>
      <Navbar />

      <header
        className="relative h-48 sm:h-64 md:h-80 lg:h-[30rem] flex items-center justify-center text-white px-4"
        style={{
          backgroundImage: `linear-gradient(to bottom,rgba(0,0,0,.6),rgba(0,0,0,.6)),url(${aboutImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center 30%",
        }}
      >
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 leading-tight">
            À propos
          </h1>
        </div>
      </header>

      <div className="relative py-12 sm:py-24">
        <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1.5 bg-emerald-600 rounded-full z-0 h-full" />

        <main className="relative z-10 space-y-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BranchSection
            index={0}
            title="Comment tout a commencé ?"
            image={storyImage}
          >
            <>
              <p className="mb-4">
                C’est au début de l’année 2025 que <strong>Jacques</strong> et{" "}
                <strong>Antoine</strong>, deux jeunes congolais ayant grandi au
                Congo, réalisent une chose surprenante :
                <span className="italic">
                  pour un étranger, parler Lingala, c’est être Congolais
                </span>
                . Une prise de conscience née après de nombreuses interactions
                avec des personnes de différentes nationalités.
              </p>

              <p className="mb-4">
                De là est née une idée merveilleuse : affirmer son identité
                congolaise en parlant Lingala . Et pourquoi ne pas aller plus
                loin ? Offrir à tous les Congolais, notamment ceux ayant grandi
                loin de la patrie,
                <span className="italic">
                  l’opportunité de se reconnecter à leurs origines
                </span>
                .
              </p>

              <p className="mb-4">
                Ayant tous deux grandi dans l’est du Congo — une région où le{" "}
                Swahili est largement parlé —, ils décident naturellement
                d’ajouter cette langue au projet. Le Swahili,{" "}
                <span className="italic">
                  l’une des langues nationales de la RDC
                </span>
                , fait ainsi partie intégrante de l’offre de YekoLangues.
              </p>
            </>
          </BranchSection>

          <BranchSection
            index={1}
            title="Notre mission"
            icon={<Globe size={24} color="white" />}
          >
            <>
              <p>
                Notre mission est d&apos;offrir un enseignement accessible,
                culturellement authentique, pour rapprocher les générations et
                les cultures.
              </p>
              <p>
                À travers nos cours, nous voulons permettre à chacun de
                s&apos;ouvrir à une nouvelle richesse culturelle.
              </p>
            </>
          </BranchSection>

          <TeamSection />

          <ValuesTreeSection />

          <CTASection />
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default About;
