import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Courses from "../components/Courses";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/Testimonials";
import CulturalSection from "../components/CulturalSection";
import FAQ from "../components/FAQ";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
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
