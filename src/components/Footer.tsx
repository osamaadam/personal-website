import { OutboundLink } from "gatsby-plugin-google-gtag";
import React from "react";
import SocialLinks from "./SocialLinks";
import { LINKS } from "../constants";

const Footer = () => {
  return (
    <footer className="footer">
      <SocialLinks />
      <small>
        Created by{" "}
        <OutboundLink
          href={LINKS.TWITTER.href}
          title="Github profile"
          target="_blank"
          rel="noopener noreferrer"
        >
          Osama Adam
        </OutboundLink>
        , on caffeine.
      </small>
    </footer>
  );
};

export default Footer;
