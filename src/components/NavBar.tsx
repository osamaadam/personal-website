import { Link } from "gatsby";
import React from "react";
import "../scss/navbar.scss";
import { useLocation } from "@reach/router";
import ThemeSwitch from "./ThemeSwitch";
// @ts-ignore
import HomeIcon from "../assets/home.svg";
// @ts-ignore
import BlogIcon from "../assets/blog.svg";

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
              <span className="navlinks__link-icon">
                <link.icon />
              </span>
              <span className="navlinks__link-name">{link.name}</span>
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
    icon: HomeIcon,
  },
  {
    name: "Blog",
    anchor: "/blog",
    regex: new RegExp(/^\/blog.*/),
    icon: BlogIcon,
  },
];

export default NavBar;
