import React from "react";
import "../scss/navbar.scss";
import useScroll from "../hooks/useScroll";

const logo = require("../assets/favicon.svg") as string;

interface Props {
  refs: Refs;
}

const NavBar: React.FC<Props> = ({ refs }) => {
  const [scrollPos, setScrollPos] = React.useState<number>(0);

  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollPos(window.pageYOffset);
    });

    return () =>
      window.removeEventListener("scroll", () =>
        console.log("scroll eventlistner removed.")
      );
  }, []);

  return (
    <nav className="navbar">
      <ul className="navlinks">
        <li className="navlinks__logo" onClick={() => useScroll()}>
          <img src={logo} alt="logo" />
        </li>
        <li
          className={`navlinks__link ${
            scrollPos < refs["projects"]?.current?.offsetTop! - 70 ||
            scrollPos === 0
              ? `navlinks__link--highlighted`
              : ``
          }`}
          onClick={() => useScroll()}
        >
          Home
        </li>
        <li
          className={`navlinks__link ${
            scrollPos >= refs["projects"]?.current?.offsetTop! - 70
              ? `navlinks__link--highlighted`
              : ``
          }`}
          onClick={() => useScroll(refs["projects"])}
        >
          Projects
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
