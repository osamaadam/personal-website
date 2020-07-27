import React from "react";
import { OutboundLink } from "gatsby-plugin-google-analytics";

interface Props {
  title: string;
  url: string;
  icon: string | typeof import("*.svg");
}

const SocialLink: React.FC<Props> = ({ title, url, icon }) => {
  const [theme, setTheme] = React.useState(
    (typeof window !== "undefined" && localStorage.getItem("theme")) || "dark"
  );

  const changeTheme = (event: any) => setTheme(event.detail);

  React.useEffect(() => {
    document.addEventListener("theme-change", changeTheme);
    return () => document.removeEventListener("theme-change", changeTheme);
  }, []);

  return (
    <OutboundLink href={url} target="_blank" rel="noopener noreferrer">
      <img
        src={icon as string}
        alt={title}
        title={title}
        width="40"
        height="40"
        data-theme={theme}
      />
    </OutboundLink>
  );
};

export default SocialLink;
