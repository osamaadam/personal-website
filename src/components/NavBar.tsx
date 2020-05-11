import { navigate } from "gatsby";
import React from "react";
import useScroll from "../hooks/useScroll";
import "../scss/navbar.scss";

const logo = require("../assets/favicon.svg") as string;

interface Props {
  refs?: Refs;
}

const NavBar: React.FC<Props> = ({ refs }) => {
  const [scrollPos, setScrollPos] = React.useState<number>(0);

  const scrollTo = (reference?: React.RefObject<HTMLDivElement>) => {
    if (location.pathname === "/") useScroll(reference);
    else navigate("/");
  };

  React.useEffect(() => {
    if (location.pathname === "/") {
      window.addEventListener("scroll", () => setScrollPos(window.pageYOffset));
    }
    return () =>
      window.removeEventListener("scroll", () =>
        console.log("scroll eventlistener removed.")
      );
  }, [location.pathname]);

  return (
    <nav className="navbar">
      <ul className="navlinks">
        <li className="navlinks__logo" onClick={() => scrollTo()}>
          <img src={logo} alt="logo" />
        </li>
        <li
          className={`navlinks__link ${
            location.pathname === "/" &&
            ((refs && scrollPos < refs["projects"]?.current?.offsetTop! - 70) ||
              scrollPos === 0)
              ? `navlinks__link--highlighted`
              : ``
          }`}
          onClick={() => scrollTo()}
        >
          Home
        </li>
        <li
          className={`navlinks__link ${
            refs && scrollPos >= refs["projects"]?.current?.offsetTop! - 70
              ? `navlinks__link--highlighted`
              : ``
          }`}
          onClick={() => scrollTo(refs && refs["projects"])}
        >
          Projects
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
