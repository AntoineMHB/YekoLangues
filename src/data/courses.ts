import beginnerImage from "../assets/beginner.png";
import intermediateImage from "../assets/intermediate.png";
import advancedImage from "../assets/advanced.png";

export const courses = [
  {
    id: 1,
    title: "Débutant",
    level: "Niveau 1",
    description:
      "Les fondations du lingala. Ce cours est idéal pour ceux qui n'ont aucune connaissance préalable de la langue. Vous apprendrez les bases de la grammaire, du vocabulaire essentiel et de la prononciation.",
    image: beginnerImage,
    color: "primary",
  },
  {
    id: 2,
    title: "Intermédiaire",
    level: "Niveau 2",
    description:
      "Développez votre aisance. Si vous avez déjà quelques notions de lingala, ce niveau vous permettra d'enrichir votre vocabulaire, de maîtriser des structures grammaticales plus complexes.",
    image: intermediateImage,
    color: "secondary",
  },
  {
    id: 3,
    title: "Avancé",
    level: "Niveau 3",
    description:
      "Maîtrisez la nuance et la culture. Ce cours est conçu pour ceux qui souhaitent perfectionner leur lingala, comprendre les subtilités de la langue et explorer des aspects culturels.",
    image: advancedImage,
    color: "accent",
  },
];
