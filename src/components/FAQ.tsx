import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({
  question,
  answer,
  isOpen,
  onClick,
}) => {
  return (
    <div className="border-b border-gray-200 py-3 sm:py-4">
      <button
        className="flex justify-between items-start w-full text-left font-medium text-base sm:text-lg focus:outline-none gap-3"
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <span className="flex-1 pr-2">{question}</span>
        <div className="flex-shrink-0 mt-0.5">
          {isOpen ? (
            <ChevronUp className="text-primary-500 w-5 h-5 sm:w-6 sm:h-6" />
          ) : (
            <ChevronDown className="text-gray-500 w-5 h-5 sm:w-6 sm:h-6" />
          )}
        </div>
      </button>

      <div
        className={`mt-2 text-gray-600 overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="pb-3 sm:pb-4 text-sm sm:text-base leading-relaxed pr-8">
          {answer}
        </p>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      id: 1,
      question: "Quels sont les différents niveaux de cours proposés ?",
      answer:
        "Nous proposons des cours pour débutants, intermédiaires et avancés. Un test d'évaluation initial nous permet de déterminer votre niveau et de vous orienter vers le cours le plus adapté.",
    },
    {
      id: 2,
      question: "Comment se déroulent les cours en ligne ?",
      answer:
        "Nos cours se déroulent en visioconférence avec des professeurs natifs. Vous bénéficiez d'une interaction directe, de corrections personnalisées et d'une immersion linguistique authentique.",
    },
    {
      id: 3,
      question: "Que faire si mon niveau ne correspond pas au groupe ?",
      answer:
        "Nos professeurs sont attentifs aux besoins de chaque étudiant et adaptent leur enseignement en conséquence. Nous pouvons également proposer des ajustements de niveau si nécessaire.",
    },
    {
      id: 4,
      question: "Y a-t-il un test pour évaluer mon niveau avant de commencer ?",
      answer:
        "Oui, nous proposons un test d'évaluation initial gratuit pour déterminer votre niveau de lingala et vous recommander le cours le plus approprié.",
    },
    {
      id: 5,
      question: "Quelles ressources d'apprentissage sont incluses ?",
      answer:
        "Nos cours comprennent des supports écrits, des exercices interactifs, des évaluations régulières, des ateliers de discussion et d'écriture, ainsi que des explications audio et vidéo pour faciliter votre compréhension.",
    },
    {
      id: 6,
      question: "Comment puis-je m'inscrire à un cours d'essai gratuit ?",
      answer:
        "Vous pouvez vous inscrire à un cours d'essai gratuit en remplissant le formulaire de contact sur notre site web ou en nous contactant directement par email ou par téléphone. Nous vous contacterons ensuite pour organiser votre session d'essai.",
    },
  ];

  return (
    <section
      id="faq"
      className="py-12 sm:py-16 lg:py-20 bg-accent-500 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">
            Questions Fréquemment Posées
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-white">
            Réponses à vos questions sur l'apprentissage du lingala avec
            Yekolangue
          </p>
        </div>

        <div
          ref={ref}
          className={`max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-4 sm:p-6 lg:p-8 ${
            inView ? "animate-on-scroll animated" : "animate-on-scroll"
          }`}
        >
          {faqData.map((faq, index) => (
            <div
              key={faq.id}
              className={`transition-all duration-500 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <FAQItem
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onClick={() => toggleFAQ(index)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
