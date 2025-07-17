const ComingSoon = () => {
  return (
    <div className="py-20 bg-accent-500 text-white text-center animate-fade-in">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-6">
          <svg
            className="w-24 h-24 text-yellow-300 animate-bounce"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 48 48"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M24 4v4m0 32v4m20-20h-4M8 24H4m31.3 13.3l-2.8-2.8M13.5 13.5l-2.8-2.8m0 28.6l2.8-2.8M34.5 13.5l2.8-2.8M24 14a10 10 0 100 20 10 10 0 000-20z"
            />
          </svg>
        </div>
        <h3 className="text-3xl sm:text-4xl font-bold mb-4">
          Bientôt Disponible!
        </h3>
        <p className="text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-6">
          Les cours de Swahili sont en cours de préparation. Restez connectés
          pour découvrir bientôt notre contenu exclusif.
        </p>
        <div className="inline-block bg-white text-gray-800 rounded-xl px-6 py-4 shadow-lg animate-fade-in-slow">
          <p className="font-medium">✨ Merci pour votre patience ✨</p>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
