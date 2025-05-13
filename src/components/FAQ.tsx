import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex justify-between items-center w-full text-left font-medium text-lg focus:outline-none"
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <span>{question}</span>
        {isOpen ? (
          <ChevronUp className="text-primary-500" size={20} />
        ) : (
          <ChevronDown className="text-gray-500" size={20} />
        )}
      </button>
      
      <div 
        className={`mt-2 text-gray-600 overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="pb-4">{answer}</p>
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
      answer: "Nous proposons des cours pour débutants, intermédiaires et avancés. Un test d'évaluation initial nous permet de déterminer votre niveau et de vous orienter vers le cours le plus adapté."
    },
    {
      id: 2,
      question: "Comment se déroulent les cours en ligne ?",
      answer: "Nos cours se déroulent en visioconférence avec des professeurs natifs. Vous bénéficiez d'une interaction directe, de corrections personnalisées et d'une immersion linguistique authentique."
    },
    {
      id: 3,
      question: "Que faire si mon niveau ne correspond pas au groupe ?",
      answer: "Nos professeurs sont attentifs aux besoins de chaque étudiant et adaptent leur enseignement en conséquence. Nous pouvons également proposer des ajustements de niveau si nécessaire."
    },
    {
      id: 4,
      question: "Y a-t-il un test pour évaluer mon niveau avant de commencer ?",
      answer: "Oui, nous proposons un test d'évaluation initial gratuit pour déterminer votre niveau de lingala et vous recommander le cours le plus approprié."
    },
    {
      id: 5,
      question: "Quelles ressources d'apprentissage sont incluses ?",
      answer: "Nos cours comprennent des supports écrits, des exercices interactifs, des évaluations régulières, des ateliers de discussion et d'écriture, ainsi que des explications audio et vidéo pour faciliter votre compréhension."
    },
    {
      id: 6,
      question: "Comment puis-je m'inscrire à un cours d'essai gratuit ?",
      answer: "Vous pouvez vous inscrire à un cours d'essai gratuit en remplissant le formulaire de contact sur notre site web ou en nous contactant directement par email ou par téléphone. Nous vous contacterons ensuite pour organiser votre session d'essai."
    }
  ];

  return (
    <section id="faq" className="section bg-accent-500">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="section-title text-white">Questions Fréquemment Posées</h2>
          <p className="text-xl text-white mb-8">
            Réponses à vos questions sur l'apprentissage du lingala avec Yekolangue
          </p>
        </div>

        <div 
          ref={ref}
          className={`max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-6 md:p-8 ${
            inView ? 'animate-on-scroll animated' : 'animate-on-scroll'
          }`}
        >
          {faqData.map((faq, index) => (
            <FAQItem
              key={faq.id}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => toggleFAQ(index)}
            />
          ))}
        </div>
      </div>
      
      <div className="wave-separator wave-secondary absolute bottom-0 left-0 right-0"></div>
    </section>
  );
};

export default FAQ;