import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";
import Logo from "../assets/logo";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { name: "Accueil", to: "home" },
    { name: "À propos", to: "about" },
    { name: "Nos cours", to: "courses" },
    { name: "Pourquoi nous", to: "why-us" },
    { name: "Témoignages", to: "testimonials" },
    { name: "FAQ", to: "faq" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white text-gray-400 shadow-md py-2"
          : "bg-transparent text-gray-300 py-4"
      }`}
    >
      <div className="container flex justify-between items-center">
        {/* Logo */}
        <Logo className="h-10 w-auto" />

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-1">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="nav-link cursor-pointer"
              activeClass="active"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Contact button for desktop */}
        <div className="hidden md:block">
          <Link
            to="start-learning"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="btn btn-primary cursor-pointer"
          >
            Commencer l'apprentissage
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X size={24} className="text-gray-700" />
          ) : (
            <Menu size={24} className="text-gray-700" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute w-full py-4 transition-all duration-300 animate-fade-in">
          <div className="container flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="nav-link"
                activeClass="active"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="start-learning"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="btn btn-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Commencer l'apprentissage
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
