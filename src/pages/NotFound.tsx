import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen bg-primary-50 font-poppins">
      <Navbar />

      <main className="flex-grow flex items-center justify-center px-4 py-28">
        <div className="text-center animate-fade-in max-w-md w-full">
          <h1 className="text-[80px] sm:text-[100px] md:text-[120px] font-bold text-primary-500 leading-none">
            404
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-secondary-500 mb-4">
            Page introuvable
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6">
            Oups ! La page que vous cherchez n'existe pas ou a été déplacée.
          </p>
          <Link
            to="/"
            className="inline-block bg-primary-500 hover:bg-primary-600 text-white text-sm sm:text-base px-5 py-2.5 rounded-lg transition duration-300"
          >
            Retour à l'accueil
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
