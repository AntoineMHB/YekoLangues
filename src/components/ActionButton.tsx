import React from "react";
import { useNavigate } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

interface Props {
  isHomePage: boolean;
  onClick: () => void;
}

const ActionButton: React.FC<Props> = ({ isHomePage, onClick }) => {
  const navigate = useNavigate();

  if (isHomePage) {
    return (
      <ScrollLink
        to="start-learning"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        className="btn btn-primary cursor-pointer"
        onClick={onClick}
      >
        Commencer l'apprentissage
      </ScrollLink>
    );
  } else {
    return (
      <button
        className="btn btn-primary cursor-pointer"
        onClick={() => {
          onClick();
          navigate("/", { state: { scrollToSection: "start-learning" } });
        }}
      >
        Commencer l'apprentissage
      </button>
    );
  }
};

export default ActionButton;
