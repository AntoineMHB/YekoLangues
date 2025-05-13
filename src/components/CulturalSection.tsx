import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Music, BookOpen, RefreshCw } from 'lucide-react';

interface Proverb {
  id: number;
  original: string;
  translation: string;
  meaning: string;
}

const CulturalSection: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [currentProverb, setCurrentProverb] = useState(0);

  const proverbs: Proverb[] = [
    {
      id: 1,
      original: "Mboka na mboka, bizaleli na yango.",
      translation: "À chaque pays ses coutumes.",
      meaning: "Ce proverbe souligne l'importance de respecter les différences culturelles et les traditions de chaque région ou communauté."
    },
    {
      id: 2,
      original: "Moto moko akoki kobongisa libongo te.",
      translation: "Une seule personne ne peut arranger la berge.",
      meaning: "Similaire au proverbe 'L'union fait la force', il met en avant l'importance du travail d'équipe et de la solidarité dans la communauté."
    },
    {
      id: 3,
      original: "Libenga ya mokongo ezalaka na ndenge na yango.",
      translation: "La houe a sa façon de creuser.",
      meaning: "Chacun a sa propre méthode ou approche pour accomplir une tâche. Ce proverbe encourage le respect des différentes façons de faire."
    }
  ];

  const songs = [
    {
      id: 1,
      title: "Indépendance Cha-Cha",
      artist: "Grand Kallé et l'African Jazz",
      info: "Chanson emblématique célébrant l'indépendance du Congo",
      image: "https://images.pexels.com/photos/2191013/pexels-photo-2191013.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 2,
      title: "Mario",
      artist: "Franco & le TPOK Jazz",
      info: "Un classique de la rumba congolaise des années 80",
      image: "https://images.pexels.com/photos/2147029/pexels-photo-2147029.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 3,
      title: "Nakei Nairobi",
      artist: "Mbilia Bel",
      info: "Hit de la musique congolaise des années 80",
      image: "https://images.pexels.com/photos/3388899/pexels-photo-3388899.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ];

  const rotateProverb = () => {
    setCurrentProverb((prev) => (prev + 1) % proverbs.length);
  };

  return (
    <section id="cultural" className="section bg-secondary-500 text-white">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Proverbs Section */}
          <div 
            ref={ref}
            className={`${inView ? 'animate-on-scroll animated' : 'animate-on-scroll'}`}
          >
            <div className="flex items-center mb-6">
              <BookOpen className="mr-3" size={24} />
              <h2 className="text-2xl font-bold">Expressions et Proverbes</h2>
            </div>
            
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 md:p-8 relative overflow-hidden">
              <button 
                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 transition-colors"
                onClick={rotateProverb}
                aria-label="Next proverb"
              >
                <RefreshCw size={16} />
              </button>
              
              <div className="mb-4">
                <h3 className="text-xl font-bold mb-2 text-accent-300">
                  {proverbs[currentProverb].original}
                </h3>
                <p className="text-lg italic mb-4">
                  {proverbs[currentProverb].translation}
                </p>
                <div className="h-px bg-white bg-opacity-20 my-4"></div>
                <p className="text-gray-200">
                  {proverbs[currentProverb].meaning}
                </p>
              </div>
              
              <div className="flex justify-center mt-4">
                {proverbs.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 mx-1 rounded-full transition-colors duration-300 ${
                      index === currentProverb ? 'bg-white' : 'bg-white bg-opacity-40'
                    }`}
                    onClick={() => setCurrentProverb(index)}
                    aria-label={`Go to proverb ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
          
          {/* Music Section */}
          <div 
            className={`${inView ? 'animate-on-scroll animated' : 'animate-on-scroll'}`}
            style={{ animationDelay: '0.3s' }}
          >
            <div className="flex items-center mb-6">
              <Music className="mr-3" size={24} />
              <h2 className="text-2xl font-bold">Playlist Lingala</h2>
            </div>
            
            <div className="space-y-4">
              {songs.map((song) => (
                <div 
                  key={song.id} 
                  className="flex bg-white bg-opacity-10 backdrop-blur-sm rounded-lg overflow-hidden hover:bg-opacity-20 transition-colors cursor-pointer"
                >
                  <div className="w-20 h-20 flex-shrink-0">
                    <img 
                      src={song.image} 
                      alt={song.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold">{song.title}</h3>
                    <p className="text-sm text-gray-300">{song.artist}</p>
                    <p className="text-xs text-gray-400 mt-1">{song.info}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <button className="btn btn-outline border-white text-white hover:bg-white hover:bg-opacity-10 mt-6 w-full">
              Découvrir plus de musique
            </button>
          </div>
        </div>
      </div>
      
      <div className="wave-separator wave-primary absolute bottom-0 left-0 right-0"></div>
    </section>
  );
};

export default CulturalSection;