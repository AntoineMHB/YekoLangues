import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { Music, BookOpen, RefreshCw, Play, Pause } from "lucide-react";

interface Proverb {
  lingala: string;
  french: string;
  moral: string;
}

const CulturalSection: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });


  const [proverbs, setProverbs] = useState<Proverb[]>([]);
  const [currentProverb, setCurrentProverb] = useState(0);
  const [isPaused, setIsPaused] = useState(false);


  useEffect(() => {
    fetch("/src/data/lingala_proverbs.json")
      .then((res) => res.json())
      .then((data) => {
        setProverbs(data);
      })
      .catch((error) => {
        console.error("Failed to load proverbs:", error);
      });
  }, []);

  // Auto rotateproverbs every 5 seconds
  useEffect(() => {
    if (proverbs.length === 0 || isPaused) return;

    const interval = setInterval(() => {
      setCurrentProverb((prev) => (prev + 1) % proverbs.length);
    }, 15000); // every 5 seconds

    return () => clearInterval(interval); // Clean up
  }, [proverbs, isPaused]);

  const songs = [
    {
      id: 1,
      title: "Indépendance Cha-Cha",
      artist: "Grand Kallé et l'African Jazz",
      info: "Chanson emblématique célébrant l'indépendance du Congo",
      image:
        "https://images.pexels.com/photos/2191013/pexels-photo-2191013.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 2,
      title: "Mario",
      artist: "Franco & le TPOK Jazz",
      info: "Un classique de la rumba congolaise des années 80",
      image:
        "https://images.pexels.com/photos/2147029/pexels-photo-2147029.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 3,
      title: "Nakei Nairobi",
      artist: "Mbilia Bel",
      info: "Hit de la musique congolaise des années 80",
      image:
        "https://images.pexels.com/photos/3388899/pexels-photo-3388899.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
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
            className={`${
              inView ? "animate-on-scroll animated" : "animate-on-scroll"
            }`}
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

              <button 
                  className="absolute top-4 right-14 w-8 h-8 flex items-center justify-center rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 transition-colors"
                  onClick={() => setIsPaused((prev) => !prev)}
                  aria-label={isPaused ? "Play" : "Pause"}
              >
                {isPaused ? <Play size={16} /> : <Pause size={16} />}


              </button>

              {proverbs.length > 0 ? (
                    <div className="mb-4 mt-4">
                    <h3 className="text-xl font-bold mb-2 text-accent-300">
                      {proverbs[currentProverb].lingala}
                    </h3>
                    <p className="text-lg italic mb-4">
                      {proverbs[currentProverb].french}
                    </p>
                    <div className="h-px bg-white bg-opacity-20 my-4"></div>
                    <p className="text-gray-200">
                      {proverbs[currentProverb].moral}
                    </p>
                  </div>
              ) : (
                <p>Chargement des proverbes...</p>
              )}

              <div className="flex justify-center mt-4">
                {proverbs.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 mx-1 rounded-full transition-colors duration-300 ${
                      index === currentProverb
                        ? "bg-white"
                        : "bg-white bg-opacity-40"
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
            className={`${
              inView ? "animate-on-scroll animated" : "animate-on-scroll"
            }`}
            style={{ animationDelay: "0.3s" }}
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
                    <p className="text-xs text-gray-500 mt-1">{song.info}</p>
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
