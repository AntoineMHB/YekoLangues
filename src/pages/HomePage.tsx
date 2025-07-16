import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import CourseOffering from "../components/CourseOffering";

export default function Home() {
  return (
    <div className="font-poppins">
      <Navbar />
      <Hero />
      <WhyChooseUs />
      <CourseOffering />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
}
