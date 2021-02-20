import { OutboundLink } from "gatsby-plugin-google-gtag";
import React from "react";
import SocialLinks from "./SocialLinks";

const date = new Date().getFullYear();

const GITHUB_PROFILE = "https://github.com/osamaadam";

const Footer = () => {
  return (
    <footer className="footer">
      <SocialLinks />
      <small>
        Created by{" "}
        <OutboundLink
          href={GITHUB_PROFILE}
          title="Github profile"
          target="_blank"
          rel="noopener noreferrer"
        >
          Osama Adam
        </OutboundLink>
        , {date} &copy;
      </small>
    </footer>
  );
};

export default Footer;
