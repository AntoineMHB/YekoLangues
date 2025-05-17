import { useEffect } from "react";

import { Route, Routes } from "react-router-dom";
import Home from "./pages/HomePage";
import CourseDetailPage from "./pages/CourseDetailPage";
import About from "./components/About";

function App() {
  useEffect(() => {
    // Update page title
    document.title = "YekoLangue - Parlez la langue, vivez la culture!";

    // Find elements with data-default attribute and remove it if found
    const elementsWithDefault = document.querySelectorAll("[data-default]");
    elementsWithDefault.forEach((element) => {
      element.removeAttribute("data-default");
    });

    // Add animation to elements with animate-on-scroll class
    const handleScroll = () => {
      const elements = document.querySelectorAll(
        ".animate-on-scroll:not(.animated)"
      );
      elements.forEach((element) => {
        const position = element.getBoundingClientRect();

        // Check if element is in viewport
        if (position.top <= window.innerHeight * 0.8) {
          element.classList.add("animated");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check once on load

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="font-poppins">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses/:id" element={<CourseDetailPage />} />
        <Route path="*" element={<p>Page non trouvée</p>} />
      </Routes>
    </div>
  );
}

export default App;
