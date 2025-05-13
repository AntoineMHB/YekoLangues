import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface TestimonialData {
  id: number;
  name: string;
  location: string;
  quote: string;
  image: string;
}

const Testimonials: React.FC = () => {
  const testimonials: TestimonialData[] = [
    {
      id: 1,
      name: "Marie",
      location: "Paris",
      quote: "Grâce à Yekolangue, je peux enfin parler avec mes grands-parents en Lingala. Merci infiniment !",
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 2,
      name: "Tom",
      location: "Londres",
      quote: "J'ai découvert non seulement une langue mais toute une culture incroyable. L'enseignement est vivant et motivant !",
      image: "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 3,
      name: "Claudine",
      location: "Montréal",
      quote: "Ma fille de 8 ans adore ses cours, elle chante en lingala tous les jours à la maison !",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="testimonials" className="section bg-primary-500 text-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="section-title text-white">Ils nous ont fait confiance</h2>
        </div>

        <div 
          ref={ref}
          className={`max-w-4xl mx-auto ${
            inView ? 'animate-on-scroll animated' : 'animate-on-scroll'
          }`}
        >
          <div className="relative bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 md:p-12">
            <Quote className="absolute top-6 left-6 text-white opacity-20" size={60} />
            
            <div className="grid md:grid-cols-5 gap-8 items-center">
              <div className="md:col-span-2 flex justify-center">
                <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white shadow-xl">
                  <img 
                    src={testimonials[currentIndex].image} 
                    alt={testimonials[currentIndex].name} 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="md:col-span-3 relative z-10">
                <blockquote className="italic text-xl mb-6">
                  "{testimonials[currentIndex].quote}"
                </blockquote>
                <div className="font-bold text-xl">{testimonials[currentIndex].name}</div>
                <div className="text-primary-200">{testimonials[currentIndex].location}</div>
              </div>
            </div>
            
            <div className="flex justify-center mt-8 space-x-4">
              <button 
                className="w-10 h-10 rounded-full bg-white bg-opacity-20 flex items-center justify-center hover:bg-opacity-30 transition-colors duration-300"
                onClick={prevTestimonial}
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} />
              </button>
              
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    index === currentIndex ? 'bg-white' : 'bg-white bg-opacity-40'
                  }`}
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
              
              <button 
                className="w-10 h-10 rounded-full bg-white bg-opacity-20 flex items-center justify-center hover:bg-opacity-30 transition-colors duration-300"
                onClick={nextTestimonial}
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="wave-separator wave-accent absolute bottom-0 left-0 right-0"></div>
    </section>
  );
};

export default Testimonials;