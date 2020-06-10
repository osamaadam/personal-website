import { SwipeableDrawer } from "@material-ui/core";
import { Link } from "gatsby";
import React from "react";
import "../scss/navbar.scss";
import HamburgerMenu from "./HamburgerMenu";

const logo = require("../assets/favicon.svg") as string;

interface Props {
  refs?: Refs;
}

const NavBar: React.FC<Props> = ({ refs }) => {
  const location = typeof window !== "undefined" && window.location.pathname;

  const [scrollPos, setScrollPos] = React.useState<number | false>(
    typeof window !== "undefined" && window.pageYOffset
  );
  const [theme, setTheme] = React.useState<string | undefined>(
    typeof window !== "undefined" && localStorage.getItem("theme")
      ? (localStorage.getItem("theme") as string)
      : "dark"
  );
  const [openDrawer, setOpenDrawer] = React.useState<boolean>(false);

  const isMountedRef = React.useRef(false);
  const navbar = React.useRef<HTMLElement | null>(null);
  let projectsRef: number;
  let contactRef: number;

  const changeTheme = (event: any) => {
    setTheme(event.target.checked ? "light" : "dark");
  };

  React.useLayoutEffect(() => {
    if (theme) {
      typeof window !== "undefined" && localStorage.setItem("theme", theme);
      document.documentElement.setAttribute("data-theme", theme);
    }
  }, [theme]);

  React.useEffect(() => {
    isMountedRef.current = true;

    const scrollListener = () => {
      if (isMountedRef.current)
        setScrollPos((prevPos) => {
          const currentPos = window.pageYOffset;
          if (currentPos > prevPos)
            navbar.current?.classList.add("navbar--hidden");
          else navbar.current?.classList.remove("navbar--hidden");

          return currentPos;
        });
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

    window.addEventListener("scroll", scrollListener);

    return () => {
      window.removeEventListener("scroll", scrollListener);
      isMountedRef.current = false;
    };
  }, []);

  return (
    <>
      <SwipeableDrawer
        className="drawer"
        anchor="left"
        open={openDrawer}
        onOpen={() => setOpenDrawer(true)}
        onClose={() => setOpenDrawer(false)}
        onClick={() => setOpenDrawer(false)}
      >
        <ul className="drawer__list">
          <Link to="/#">
            <li className="drawer__logo">
              <img src={logo} alt="logo" />
            </li>
          </Link>
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
      <nav className="navbar" ref={navbar}>
        <ul className="navlinks">
          <HamburgerMenu handleClick={() => setOpenDrawer(true)} />
          <Link to="/#" className="no-style-link">
            <li className="navlinks__logo">
              <img src={logo} alt="logo" />
            </li>
          </Link>
          <Link to="/#" className="no-style-link">
            <li
              className={`navlinks__link navlinks__home ${
                location === "/" &&
                ((refs &&
                  scrollPos < refs["projects"]?.current?.offsetTop! - 70) ||
                  scrollPos === 0)
                  ? `navlinks__link--highlighted`
                  : ``
              }`}
            >
              Home
            </li>
          </Link>
          <Link to="/#projects" className="no-style-link">
            <li
              className={`navlinks__link ${
                refs &&
                scrollPos >= refs["projects"]?.current?.offsetTop! - 70 &&
                scrollPos < refs["contact"]?.current?.offsetTop! - 70
                  ? `navlinks__link--highlighted`
                  : ``
              }`}
            >
              Projects
            </li>
          </Link>
          <Link to="/#contact" className="no-style-link">
            <li
              className={`navlinks__link ${
                refs && scrollPos >= refs["contact"]?.current?.offsetTop! - 70
                  ? `navlinks__link--highlighted`
                  : ``
              }`}
            >
              Contact
            </li>
          </Link>
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
    </>
  );
};

export default NavBar;
