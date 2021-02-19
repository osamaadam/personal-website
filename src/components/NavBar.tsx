import { Link } from "gatsby";
import React from "react";
import "../scss/navbar.scss";
import { useLocation } from "@reach/router";

const logo = require("../assets/favicon.svg") as string;

const NavBar: React.FC = () => {
  const [theme, setTheme] = React.useState<string | undefined>(
    typeof window !== "undefined" && localStorage.getItem("theme")
      ? (localStorage.getItem("theme") as string)
      : "dark"
  );

  const location = useLocation();

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

  return (
    <>
      <nav className="navbar" ref={navbar}>
        <div className="navlinks" id="navbar-links">
          {links.map((link) => (
            <Link
              to={link.anchor}
              className={`no-style-link navlinks__link ${
                link.regex.test(location.pathname)
                  ? "navlinks__link--highlighted"
                  : ""
              }`}
            >
              <li>{link.name}</li>
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

const links = [
  {
    name: "Home",
    anchor: "/",
    regex: new RegExp(/^\/$/),
  },
  {
    name: "Blog",
    anchor: "/blog",
    regex: new RegExp(/^\/blog.*/),
  },
];

export default NavBar;
