import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="font-poppins">
      <Navbar />
      <Hero />
      <WhyChooseUs />
      {/* <Testimonials /> */}
      <FAQ />
      <Footer />
    </div>
  );
}
