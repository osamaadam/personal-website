import React from "react";

interface Props {
  handleClick: () => void;
}

const HamburgerMenu: React.FC<Props> = ({ handleClick }) => (
  <div className="hamburger-menu" onClick={() => handleClick()}>
    <div className="hamburger-menu__bar"></div>
    <div className="hamburger-menu__bar"></div>
    <div className="hamburger-menu__bar"></div>
  </div>
);

export default HamburgerMenu;
