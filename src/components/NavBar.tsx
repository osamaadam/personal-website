import { Link } from "gatsby";
import React from "react";
import "../scss/navbar.scss";
import { useLocation } from "@reach/router";
import ThemeSwitch from "./ThemeSwitch";

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
              key={link.anchor}
              to={link.anchor}
              className={`no-style-link navlinks__link ${
                link.regex.test(location.pathname)
                  ? "navlinks__link--highlighted"
                  : ""
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
        <ThemeSwitch theme={theme} setTheme={setTheme} />
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
