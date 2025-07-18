import React from "react";
import yekoLogo from "../assets/yekoLanguesLogo.png";

type LogoProps = {
  className?: string;
};

const Logo: React.FC<LogoProps> = ({ className = "h-10 w-auto" }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <img
        src={yekoLogo}
        alt="Yeko Langues Logo"
        className=" w-[180px] h-[180px] object-contain"
      />
    </div>
  );
};

export default Logo;
