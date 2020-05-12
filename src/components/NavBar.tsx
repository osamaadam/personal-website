import { navigate } from "gatsby";
import React from "react";
import useScroll from "../hooks/useScroll";
import "../scss/navbar.scss";

const logo = require("../assets/favicon.svg") as string;

interface Props {
  refs?: Refs;
  currentLocation?: string;
}

const NavBar: React.FC<Props> = ({ refs, currentLocation = "nope" }) => {
  const currentTheme =
    typeof window !== "undefined" && localStorage.getItem("theme");

  const [scrollPos, setScrollPos] = React.useState<number>(0);
  const [theme, setTheme] = React.useState<boolean>(
    currentTheme === "light" ? true : false
  );
  const isMountedRef = React.useRef(false);
  let projectsRef: number;
  let contactRef: number;

  const changeTheme = (event: any) => {
    setTheme(event.target.checked);
  };

  const scrollTo = (
    reference?: React.RefObject<HTMLDivElement>,
    pos: number = 0
  ) => {
    if (currentLocation === "/") useScroll(reference);
    else navigate("/");
    if (currentLocation !== "/") {
      navigate("/");
      setTimeout(() => {
        useScroll(reference, pos);
      }, 250);
    }
  };

  React.useEffect(() => {
    localStorage.setItem("theme", theme ? "light" : "dark");
    document.documentElement.setAttribute(
      "data-theme",
      theme ? "light" : "dark"
    );
  }, [theme]);

  React.useEffect(() => {
    isMountedRef.current = true;

    if (!refs) {
      projectsRef =
        JSON.parse(localStorage.getItem("projectsRef") as string) - 70;
      contactRef =
        JSON.parse(localStorage.getItem("contactRef") as string) - 70;
    } else {
      projectsRef = refs["projects"]?.current?.offsetTop! - 70;
      contactRef = refs["contact"]?.current?.offsetTop! - 70;
    }
    if (currentLocation === "/") {
      window.addEventListener("scroll", () => {
        if (isMountedRef.current) setScrollPos(window.pageYOffset);
      });
    }

    if (refs) {
      localStorage.setItem(
        "projectsRef",
        JSON.stringify(refs["projects"]?.current?.offsetTop)
      );
      localStorage.setItem(
        "contactRef",
        JSON.stringify(refs["contact"]?.current?.offsetTop)
      );
    }

    return () => {
      window.removeEventListener("scroll", () =>
        console.log("scroll eventlistener removed.")
      );
      isMountedRef.current = false;
    };
  }, [currentLocation]);

  return (
    <nav className="navbar">
      <ul className="navlinks">
        <li className="navlinks__logo" onClick={() => scrollTo()}>
          <img src={logo} alt="logo" />
        </li>
        <li
          className={`navlinks__link ${
            currentLocation === "/" &&
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
            refs &&
            scrollPos >= refs["projects"]?.current?.offsetTop! - 70 &&
            scrollPos < refs["contact"]?.current?.offsetTop! - 70
              ? `navlinks__link--highlighted`
              : ``
          }`}
          onClick={() => scrollTo(refs && refs["projects"], projectsRef)}
        >
          Projects
        </li>
        <li
          className={`navlinks__link ${
            refs && scrollPos >= refs["contact"]?.current?.offsetTop! - 70
              ? `navlinks__link--highlighted`
              : ``
          }`}
          onClick={() => scrollTo(refs && refs["contact"], contactRef)}
        >
          Contact
        </li>
      </ul>
      <div>
        <label className="switch">
          <input
            type="checkbox"
            id="theme-toggle"
            name="theme-toggle"
            checked={theme}
            onChange={changeTheme}
            aria-label="theme toggle"
          />
          <span className="slider round" />
        </label>
      </div>
    </nav>
  );
};

export default NavBar;
