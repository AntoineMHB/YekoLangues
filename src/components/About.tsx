import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Globe, BookOpen, Users, Heart } from 'lucide-react';

const About: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section id="about" className="section bg-primary-500 text-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="section-title text-white">À propos de Yekolangue</h2>
        </div>

        <div 
          ref={ref}
          className={`grid md:grid-cols-2 gap-12 items-center ${
            inView ? 'animate-on-scroll animated' : 'animate-on-scroll'
          }`}
        >
          <div className="rounded-xl overflow-hidden shadow-xl">
            <img 
              src="https://images.pexels.com/photos/8885024/pexels-photo-8885024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Yekolangue cultural learning" 
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="flex flex-col justify-between">
            <div className="text-center mb-8">
              <p className="text-lg mb-6">
                Yekolangue est née d'une passion : celle de transmettre la beauté de la langue lingala et 
                de rapprocher les Congolais de leurs racines culturelles.
              </p>
              
              <p className="text-lg mb-6">
                Nous croyons que parler sa langue, c'est porter son identité avec fierté.
                Notre mission est aussi d'ouvrir l'apprentissage du lingala à toute personne désireuse de 
                mieux comprendre l'âme du Congo.
              </p>
              
              <p className="text-lg">
                Chez Yekolangue, nous allions tradition et modernité pour vous offrir une expérience 
                d'apprentissage conviviale, efficace et enrichissante.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start">
                <Globe className="mr-3 text-accent-400" size={24} />
                <div>
                  <h3 className="font-bold text-lg mb-1">Culturel</h3>
                  <p>Plus qu'une langue, une identité</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <BookOpen className="mr-3 text-accent-400" size={24} />
                <div>
                  <h3 className="font-bold text-lg mb-1">Pédagogique</h3>
                  <p>Méthodes adaptées et efficaces</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Users className="mr-3 text-accent-400" size={24} />
                <div>
                  <h3 className="font-bold text-lg mb-1">Communautaire</h3>
                  <p>Apprenez au sein d'une communauté</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Heart className="mr-3 text-accent-400" size={24} />
                <div>
                  <h3 className="font-bold text-lg mb-1">Passionné</h3>
                  <p>Un enseignement avec cœur</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="wave-separator wave-accent absolute bottom-0 left-0 right-0"></div>
    </section>
  );
};

export default About;