import { useLocation } from "@reach/router";
import { Link } from "gatsby";
import React from "react";
import "../scss/navbar.scss";
import ThemeSwitch from "./ThemeSwitch";

const NavBar: React.FC = () => {
  const [theme, setTheme] = React.useState(
    typeof window !== "undefined" && localStorage.getItem("theme")
      ? (localStorage.getItem("theme") as string)
      : "dark"
  );

  const location = useLocation();

  const navbar = React.useRef<HTMLElement | null>(null);

  React.useEffect(() => {
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
        <div className="navbar__container">
          <div className="navlinks" id="navbar-links">
            {LINKS.map((link) => (
              <Link
                key={link.anchor}
                to={link.anchor}
                className={`no-style-link navlinks__link ${
                  link.regex.test(location.pathname)
                    ? "navlinks__link--highlighted"
                    : ""
                }`}
              >
                <span className="navlinks__link-name">{link.name}</span>
              </Link>
            ))}
          </div>
          <ThemeSwitch theme={theme} setTheme={setTheme} />
        </div>
      </nav>
    </>
  );
};

const LINKS = [
  {
    name: "/home/adam",
    anchor: "/",
    regex: new RegExp(/^\/$/),
  },
  {
    name: "~/blog",
    anchor: "/blog",
    regex: new RegExp(/^\/blog.*/),
  },
];

export default NavBar;
