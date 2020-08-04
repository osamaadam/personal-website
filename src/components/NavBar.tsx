import { SwipeableDrawer } from "@material-ui/core";
import { Link } from "gatsby";
import React from "react";
import "../scss/navbar.scss";
import HamburgerMenu from "./HamburgerMenu";

const logo = require("../assets/favicon.svg") as string;

const NavBar: React.FC = () => {
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

  const changeTheme = (event: any) => {
    setTheme(event.target.checked ? "light" : "dark");
  };

  React.useLayoutEffect(() => {
    if (theme) {
      typeof window !== "undefined" && localStorage.setItem("theme", theme);
      document.documentElement.setAttribute("data-theme", theme);
      document.dispatchEvent(
        new CustomEvent("theme-change", { detail: theme })
      );
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

    window.addEventListener("scroll", scrollListener);

    return () => {
      window.removeEventListener("scroll", scrollListener);
      isMountedRef.current = false;
    };
  }, []);

  const directories = [
    {
      path: "/",
      name: "Home",
    },
    {
      path: "/#projects",
      name: "Projects",
    },
    {
      path: "/#contact",
      name: "Contact",
    },
  ];

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
          <Link to="/" aria-label="Home">
            <li className="drawer__logo">
              <img src={logo} alt="site-logo" />
            </li>
          </Link>
          {directories.map((directory) => (
            <Link
              to={directory.path}
              key={directory.path}
              data-nav={directory.name.toLowerCase()}
              className="no-style-link drawer__item"
              aria-label={directory.name}
            >
              <li>{directory.name}</li>
            </Link>
          ))}
        </ul>
      </SwipeableDrawer>
      <nav className="navbar" ref={navbar}>
        <div className="navlinks" id="navbar-links">
          <HamburgerMenu handleClick={() => setOpenDrawer(true)} />
          <Link to="/" className="no-style-link" aria-label="Home">
            <li className="navlinks__logo">
              <img src={logo} alt="logo" />
            </li>
          </Link>
          {directories.map((directory) => (
            <Link
              to={directory.path}
              className="no-style-link navlinks__link"
              data-nav={directory.name.toLowerCase()}
              key={directory.path}
            >
              <li>{directory.name}</li>
            </Link>
          ))}
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
        </div>
      </nav>
    </>
  );
};

export default NavBar;
