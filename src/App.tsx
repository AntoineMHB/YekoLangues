import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Courses from './components/Courses';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import CulturalSection from './components/CulturalSection';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Update page title
    document.title = 'YekoLangue - Parlez la langue, vivez la culture!';
    
    // Find elements with data-default attribute and remove it if found
    const elementsWithDefault = document.querySelectorAll('[data-default]');
    elementsWithDefault.forEach(element => {
      element.removeAttribute('data-default');
    });
    
    // Add animation to elements with animate-on-scroll class
    const handleScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll:not(.animated)');
      elements.forEach(element => {
        const position = element.getBoundingClientRect();
        
        // Check if element is in viewport
        if (position.top <= window.innerHeight * 0.8) {
          element.classList.add('animated');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check once on load
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="font-poppins">
      <Navbar />
      <Hero />
      <About />
      <Courses />
      <WhyChooseUs />
      <Testimonials />
      <CulturalSection />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;