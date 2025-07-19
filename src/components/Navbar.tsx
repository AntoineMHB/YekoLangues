import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
import { ChevronRight, Menu, X } from "lucide-react";
import Logo from "./logo";

interface NavLinkItem {
  name: string;
  to?: string;
  submenu?: { name: string; to: string }[];
}

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";

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

  const navLinks: NavLinkItem[] = [
    { name: "Accueil", to: "/" },
    {
      name: "Langues",
      submenu: [
        { name: "Lingala", to: "/langues/lingala" },
        { name: "Swahili", to: "/langues/swahili" },
      ],
    },
    { name: "Culture", to: "/culture" },
    { name: "Blog", to: "/blog" },
    { name: "À propos", to: "/about" },
    { name: "Contact", to: "/contact" },
  ];

  const NavLink: React.FC<{ link: NavLinkItem }> = ({ link }) => {
    if (link.submenu) {
      return (
        <div className="relative group">
          <span className="nav-link cursor-pointer px-4 py-2 hover:text-primary">
            {link.name}
          </span>
          <div className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded-md hidden group-hover:block z-50">
            {link.submenu.map((sublink) => (
              <RouterLink
                key={sublink.to}
                to={sublink.to}
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                {sublink.name}
              </RouterLink>
            ))}
          </div>
        </div>
      );
    }
    return (
      <RouterLink
        to={link.to || "#"}
        className="nav-link cursor-pointer"
        onClick={() => setIsMenuOpen(false)}
      >
        {link.name}
      </RouterLink>
    );
  };

  const ActionButton = () => {
    if (isHomePage) {
      return (
            <a
                href="https://calendly.com/contact-yekolangues"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 shadow-lg hover:shadow-xl transition-all cursor-pointer flex items-center justify-center"
            >
                 <span>Commencer votre apprentissage</span>
            </a>
      );
    } else {
      return (
            <a
                href="https://calendly.com/contact-yekolangues"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 shadow-lg hover:shadow-xl transition-all cursor-pointer flex items-center justify-center"
            >
                 <span>Commencer votre apprentissage</span>
            </a>
      );
    }
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white text-gray-400 shadow-md py-2"
          : "bg-transparent text-gray-300 py-4"
      }`}
    >
      <div className="container flex justify-between items-center">
        <RouterLink to="/">
          <Logo className="h-10 w-auto" />
        </RouterLink>

        <div className="hidden md:flex items-center space-x-4">
          {navLinks.map((link) => (
            <NavLink key={link.to} link={link} />
          ))}
        </div>

        <div className="hidden md:block">
          <ActionButton />
        </div>

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

      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute w-full py-4 transition-all duration-300 animate-fade-in">
          <div className="container flex flex-col space-y-4">
            {navLinks.map((link) => (
              <NavLink key={link.to} link={link} />
            ))}
            <ActionButton />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
