import React from 'react';
import yekoLogo from '../assets/yekoLogo.png'; // adjust path if needed


type LogoProps = {
  className?: string;
};

const Logo: React.FC<LogoProps> = ({ className = "h-10 w-auto" }) => {
  return (
    // <div className={`flex items-center ${className}`} >
    <div className={`flex items-center ${className}`} >
      {/* <img src={yekoLogo} alt="Yeko Langues Logo" className="w-[200px] h-[200px] object-contain" /> */}
    </div>
  );
};

export default Logo;
