import beginnerImage from "../assets/beginner.png";
import intermediateImage from "../assets/intermediate.png";
import advancedImage from "../assets/advanced.png";
import beginnerCoach from "../assets/coach-1.jpeg";
import intermediateCoach from "../assets/coach-2.jpeg";
import advancedCoach from "../assets/coach-3.png";

export const courses = [
  {
    id: 1,
    title: "Débutant",
    level: "Niveau 1",
    description:
      "Les fondations du lingala. Ce cours est idéal pour ceux qui n'ont aucune connaissance préalable de la langue. Vous apprendrez les bases de la grammaire, du vocabulaire essentiel et de la prononciation.",
    image: beginnerImage,
    color: "primary",
    coach: {
      image: beginnerCoach,
      firstName: "Jeanine",
      lastName: "Mabunda",
    },

    learningOutcomes: [
      "Vocabulaire courant et expressions idiomatiques",
      "Grammaire et conjugaison lingala",
      "Prononciation et conversation fluide",
      "Culture et traditions du Congo",
    ],
  },
  {
    id: 2,
    title: "Intermédiaire",
    level: "Niveau 2",
    description:
      "Développez votre aisance. Si vous avez déjà quelques notions de lingala, ce niveau vous permettra d'enrichir votre vocabulaire, de maîtriser des structures grammaticales plus complexes.",
    image: intermediateImage,
    color: "secondary",
    coach: {
      image: intermediateCoach,
      firstName: "Thérèse",
      lastName: "Kayikwamba",
    },

    learningOutcomes: [
      "Vocabulaire courant et expressions idiomatiques",
      "Grammaire et conjugaison lingala",
      "Prononciation et conversation fluide",
      "Culture et traditions du Congo",
    ],
  },
  {
    id: 3,
    title: "Avancé",
    level: "Niveau 3",
    description:
      "Maîtrisez la nuance et la culture. Ce cours est conçu pour ceux qui souhaitent perfectionner leur lingala, comprendre les subtilités de la langue et explorer des aspects culturels.",
    image: advancedImage,
    color: "accent",
    coach: {
      image: advancedCoach,
      firstName: "Thierry",
      lastName: "Kimbudi",
    },

    learningOutcomes: [
      "Vocabulaire courant et expressions idiomatiques",
      "Grammaire et conjugaison lingala",
      "Prononciation et conversation fluide",
      "Culture et traditions du Congo",
    ],
  },
];
