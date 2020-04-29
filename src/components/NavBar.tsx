import React from "react";
import "../scss/navbar.scss";

const logo = require("../assets/favicon.svg");

interface Props {
  scrollTo: (ref?: React.RefObject<HTMLDivElement>) => void;
  projectsRef: React.RefObject<HTMLDivElement>;
}

const NavBar: React.FC<Props> = ({ scrollTo, projectsRef }) => {
  const [scrollPos, setScrollPos] = React.useState<number>(0);

  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollPos(window.pageYOffset);
    });

    return () =>
      window.removeEventListener("scroll", () => console.log("Removed"));
  }, []);

  return (
    <nav className="navbar">
      <ul className="navlinks">
        <li className="navlinks__logo" onClick={() => scrollTo()}>
          <img src={logo} alt="logo" />
        </li>
        <li
          className={`navlinks__link ${scrollPos <
            projectsRef.current?.offsetTop! - 70 &&
            `navlinks__link--highlighted`}`}
          onClick={() => scrollTo()}
        >
          Home
        </li>
        <li
          className={`navlinks__link ${scrollPos >=
            projectsRef.current?.offsetTop! - 70 &&
            `navlinks__link--highlighted`}`}
          onClick={() => scrollTo(projectsRef)}
        >
          Projects
        </li>
        {/* <li className="navlinks__link">Contact</li> */}
      </ul>
    </nav>
  );
};

export default NavBar;
