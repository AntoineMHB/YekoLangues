import { useNavigate } from "react-router-dom";

const CallToAction = () => {
  const navigate = useNavigate();
  return (
    <div className="mt-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl p-8 text-white text-center">
      <h3 className="text-2xl font-bold mb-4">
        Prêt à commencer votre apprentissage ?
      </h3>
      <p className="text-emerald-100 mb-6">
        Découvrez nos cours de Lingala et plongez dans la culture congolaise
      </p>
      <button
        onClick={() => navigate("/langues/lingala")}
        className="bg-white text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
      >
        Voir nos cours
      </button>
    </div>
  );
};

export default CallToAction;
