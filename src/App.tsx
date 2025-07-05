import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import CourseDetailPage from "./pages/CourseDetailPage";
import CulturalSection from "./pages/CulturalSection";
import About from "./pages/About";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import Blog from "./pages/Blog";
import Courses from "./pages/Courses";
import CreateBlogPage from "./pages/admin/CreateBlogPage";
import BlogPostDetail from "./pages/BlogPostDetail";
import Login from "./pages/login";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const location = useLocation();

  useEffect(() => {
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

    // Handle scroll to section from navigation
    if (
      location.pathname === "/" &&
      location.state &&
      location.state.scrollToSection
    ) {
      const sectionId = location.state.scrollToSection;
      const element = document.getElementById(sectionId);
      if (element) {
        // Small delay to ensure the page is fully loaded
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }

      // Clear the state to prevent scrolling on subsequent renders
      window.history.replaceState({}, document.title);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location]);

  return (
    <div className="font-poppins">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/courses/:id" element={<CourseDetailPage />} />
        <Route path="/culture" element={<CulturalSection />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogPostDetail />} />
        <Route path="/langues/lingala" element={<Courses />} />
        <Route path="*" element={<p>Page non trouvée</p>} />
        <Route
          path="/admin/create-blog"
          element={
            <ProtectedRoute>
              <CreateBlogPage />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
