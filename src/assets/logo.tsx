import React from 'react';

type LogoProps = {
  className?: string;
};

const Logo: React.FC<LogoProps> = ({ className = "h-10 w-auto" }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Stylized drum representation based on the logo */}
        <circle cx="50" cy="30" r="20" fill="#F5B82E" />
        <path d="M30 30 L70 30 L80 90 L20 90 Z" fill="#2D9D78" />
        <path d="M30 30 L50 30 L50 90 L20 90 Z" fill="#F26E38" />
        <path d="M50 30 L70 30 L80 90 L50 90 Z" fill="#2D9D78" />
        <rect x="25" y="70" width="50" height="5" fill="#E63946" />
        <rect x="25" y="80" width="50" height="5" fill="#E63946" />
      </svg>
      <div className="ml-2">
        <span className="text-secondary-500 font-bold text-xl">yeko</span>
        <span className="text-primary-500 font-bold text-xl">langue</span>
      </div>
    </div>
  );
};

export default Logo;