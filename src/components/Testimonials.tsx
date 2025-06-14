import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

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
      quote:
        "Grâce à Yekolangue, je peux enfin parler avec mes grands-parents en Lingala. Merci infiniment !",
      image:
        "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 2,
      name: "Tom",
      location: "Londres",
      quote:
        "J'ai découvert non seulement une langue mais toute une culture incroyable. L'enseignement est vivant et motivant !",
      image:
        "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 3,
      name: "Claudine",
      location: "Montréal",
      quote:
        "Ma fille de 8 ans adore ses cours, elle chante en lingala tous les jours à la maison !",
      image:
        "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
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
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <h2 className="section-title text-white text-2xl sm:text-3xl lg:text-4xl">
            Ils nous ont fait confiance
          </h2>
        </div>

        <div
          ref={ref}
          className={`max-w-xs sm:max-w-2xl lg:max-w-4xl mx-auto ${
            inView ? "animate-on-scroll animated" : "animate-on-scroll"
          }`}
        >
          <div className="relative bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-4 sm:p-6 lg:p-8 xl:p-12">
            <Quote
              className="absolute top-3 left-3 sm:top-4 sm:left-4 lg:top-6 lg:left-6 text-white opacity-20"
              size={40}
              style={{
                fontSize: "clamp(40px, 8vw, 60px)",
              }}
            />

            <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8 items-center">
              <div className="lg:col-span-2 flex justify-center order-1 lg:order-1">
                <div className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 xl:w-48 xl:h-48 rounded-full overflow-hidden border-2 sm:border-3 lg:border-4 border-white shadow-xl">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="lg:col-span-3 relative z-10 text-center lg:text-left order-2 lg:order-2 pt-8 sm:pt-4 lg:pt-0">
                <blockquote className="italic text-sm sm:text-base lg:text-lg xl:text-xl mb-4 sm:mb-5 lg:mb-6 leading-relaxed">
                  "{testimonials[currentIndex].quote}"
                </blockquote>
                <div className="font-bold text-base sm:text-lg lg:text-xl">
                  {testimonials[currentIndex].name}
                </div>
                <div className="text-primary-200 text-sm sm:text-base lg:text-base">
                  {testimonials[currentIndex].location}
                </div>
              </div>
            </div>

            <div className="flex justify-center items-center mt-6 sm:mt-7 lg:mt-8 gap-2 sm:gap-3 lg:gap-4">
              <button
                className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 rounded-full bg-white bg-opacity-20 flex items-center justify-center hover:bg-opacity-30 transition-colors duration-300 touch-manipulation"
                onClick={prevTestimonial}
                aria-label="Previous testimonial"
              >
                <ChevronLeft
                  size={16}
                  className="sm:w-5 sm:h-5 lg:w-5 lg:h-5"
                />
              </button>

              <div className="flex gap-1 sm:gap-1.5 lg:gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 sm:w-2.5 sm:h-2.5 lg:w-3 lg:h-3 rounded-full transition-colors duration-300 touch-manipulation ${
                      index === currentIndex
                        ? "bg-white"
                        : "bg-white bg-opacity-40"
                    }`}
                    onClick={() => setCurrentIndex(index)}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 rounded-full bg-white bg-opacity-20 flex items-center justify-center hover:bg-opacity-30 transition-colors duration-300 touch-manipulation"
                onClick={nextTestimonial}
                aria-label="Next testimonial"
              >
                <ChevronRight
                  size={16}
                  className="sm:w-5 sm:h-5 lg:w-5 lg:h-5"
                />
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
