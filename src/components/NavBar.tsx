import { navigate, Link } from "gatsby";
import React from "react";
import useScroll from "../hooks/useScroll";
import { SwipeableDrawer } from "@material-ui/core";
import "../scss/navbar.scss";
import HamburgerMenu from "./HamburgerMenu";

const logo = require("../assets/favicon.svg") as string;

interface Props {
  refs?: Refs;
}

const NavBar: React.FC<Props> = ({ refs }) => {
  const location = typeof window !== "undefined" && window.location.pathname;

  const [scrollPos, setScrollPos] = React.useState<number>(0);
  const [theme, setTheme] = React.useState<string | undefined>(
    typeof window !== "undefined" && localStorage.getItem("theme")
      ? (localStorage.getItem("theme") as string)
      : "dark"
  );
  const [drawer, setDrawer] = React.useState<boolean>(false);

  const isMountedRef = React.useRef(false);
  let projectsRef: number;
  let contactRef: number;

  const changeTheme = (event: any) => {
    setTheme(event.target.checked ? "light" : "dark");
  };

  const scrollTo = (
    reference?: React.RefObject<HTMLDivElement>,
    pos: number = 0
  ) => {
    if (location === "/") useScroll(reference);
    else {
      navigate("/");
      setTimeout(() => {
        useScroll(reference, pos);
      }, 250);
    }
  };

  React.useLayoutEffect(() => {
    if (theme) {
      typeof window !== "undefined" && localStorage.setItem("theme", theme);
      document.documentElement.setAttribute("data-theme", theme);
    }
  }, [theme]);

  React.useEffect(() => {
    isMountedRef.current = true;

    const mountedListener = () => {
      if (isMountedRef.current) setScrollPos(window.pageYOffset);
    };

    if (!refs) {
      projectsRef =
        JSON.parse(localStorage.getItem("projectsRef") as string) - 70;
      contactRef =
        JSON.parse(localStorage.getItem("contactRef") as string) - 70;
    } else {
      projectsRef = refs["projects"]?.current?.offsetTop! - 70;
      contactRef = refs["contact"]?.current?.offsetTop! - 70;
    }

    if (location === "/") {
      window.addEventListener("scroll", mountedListener);
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
    }

    return () => {
      window.removeEventListener("scroll", mountedListener);
      isMountedRef.current = false;
    };
  }, []);

  return (
    <nav className="navbar">
      <SwipeableDrawer
        className="drawer"
        anchor="left"
        open={drawer}
        onOpen={() => setDrawer(true)}
        onClose={() => setDrawer(false)}
        onClick={() => setDrawer(false)}
      >
        <ul className="drawer__list">
          <Link to="/#">
            <li className="drawer__item">Home</li>
          </Link>
          <Link to="/#projects">
            <li className="drawer__item">Projects</li>
          </Link>
          <Link to="/#contact">
            <li className="drawer__item">Contact</li>
          </Link>
        </ul>
      </SwipeableDrawer>
      <ul className="navlinks">
        <HamburgerMenu handleClick={() => setDrawer(true)} />
        <li className="navlinks__logo" onClick={() => scrollTo()}>
          <img src={logo} alt="logo" />
        </li>
        <li
          className={`navlinks__link navlinks__home ${
            location === "/" &&
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
        <div className="navbar__switch-container">
          <label className="switch">
            <input
              type="checkbox"
              id="theme-toggle"
              name="theme-toggle"
              checked={theme === "light" ? true : false}
              onChange={changeTheme}
              aria-label="theme toggle"
            />
            <span className="slider round" />
          </label>
        </div>
      </ul>
    </nav>
  );
};

export default NavBar;
