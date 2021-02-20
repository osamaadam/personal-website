import React from "react";
// @ts-ignore
import LightSVG from "../assets/day.svg";
// @ts-ignore
import NightSVG from "../assets/night.svg";
import "../scss/theme-switch.scss";

const ThemeSwitch = ({
  theme,
  setTheme,
}: {
  theme?: string;
  setTheme: React.Dispatch<React.SetStateAction<string | undefined>>;
}) => {
  const toggleTheme = () => {
    const currentTheme = theme;
    const nextTheme = currentTheme === "dark" ? "light" : "dark";

    typeof window !== "undefined" && localStorage.setItem("theme", nextTheme);

    setTheme(nextTheme);
  };

  return (
    <button className="theme-switch" onClick={toggleTheme}>
      {theme && (theme === "light" ? <NightSVG /> : <LightSVG />)}
    </button>
  );
};

export default ThemeSwitch;
