import beginnerImage from "../assets/beginner.png";
import intermediateImage from "../assets/intermediate.png";
import advancedImage from "../assets/advanced.png";
import beginnerCoach from "../assets/coach-1.jpeg";
import intermediateCoach from "../assets/coach-2.jpeg";
import advancedCoach from "../assets/coach-3.png";

export const courses = {
  lingala: [
    {
      id: 1,
      title: "Débutant",
      level: "Niveau 1",
      description: [
        ". Alphabet et pronnciation",
        ". Salutations et formules de politesse",
        ". Présentation de soi",
        ". Nombres et chiffres",
        ". Jours de la semaine",
        ". Vocabulaire de base",
        ". Construire des prases simples",
        ". Expressions courantes",
        ". Compréhension orale simple",
      ],

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
      description: [
        ". Construction des phrases complexes",
        ". Utilisation des temps verbaux (passé, présent, futur)",
        ". Expressions idiomatiques courantes",
        ". Conversation sur des sujets quotidiens",
        ". Compréhension orale de dialogues simples",
      ],
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
      description: [
        ". Nuances et subtilités grammaticales",
        ". Compréhension de textes et discours complexes",
        ". Expression d’opinions et argumentation",
        ". Vocabulaire spécialisé (affaires, culture, etc.)",
        ". Maîtrise des expressions avancées",
      ],
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
  ],

  swahili: [
    {
      id: 4,
      title: "Kiwango cha Kwanza",
      level: "Niveau 1",
      description: [
        "Msingi wa Kiswahili. Kozi hii ni kwa wale wanaoanza kujifunza Kiswahili. Utajifunza msamiati wa msingi, sarufi na matamshi sahihi.",
      ],
      image: beginnerImage,
      color: "primary",
      coach: {
        image: beginnerCoach,
        firstName: "Amina",
        lastName: "Mokili",
      },
      learningOutcomes: [
        "Msamiati wa kila siku na misemo ya kawaida",
        "Sarufi na uundaji wa sentensi",
        "Matamshi na mazungumzo ya msingi",
        "Utamaduni wa Afrika ya Mashariki",
      ],
    },
    {
      id: 5,
      title: "Kiwango cha Pili",
      level: "Niveau 2",
      description: [
        "Imarisha Kiswahili chako. Kozi hii inakufundisha misingi ya kisarufi ya kati na msamiati mpana kwa mazungumzo yenye ufasaha.",
      ],
      image: intermediateImage,
      color: "secondary",
      coach: {
        image: intermediateCoach,
        firstName: "James",
        lastName: "Mwangi",
      },
      learningOutcomes: [
        "Msamiati mpana wa mazungumzo",
        "Sarufi ngumu na matumizi yake",
        "Majadiliano ya mada tofauti",
        "Maelezo ya desturi na mila",
      ],
    },
    {
      id: 6,
      title: "Kiwango cha Juu",
      level: "Niveau 3",
      description: [
        "Tathmini ya Kiswahili cha kitaalamu. Kozi hii inakusaidia kuelewa mitindo ya lugha, fasihi na muktadha wa kijamii na kitamaduni.",
      ],
      image: advancedImage,
      color: "accent",
      coach: {
        image: advancedCoach,
        firstName: "Fatuma",
        lastName: "Njeri",
      },
      learningOutcomes: [
        "Fasihi ya Kiswahili na matumizi yake",
        "Mazungumzo ya kitaalamu",
        "Tafsiri ya maandiko",
        "Uelewa wa mila na tamaduni",
      ],
    },
  ],
};
