import { OutboundLink } from "gatsby-plugin-google-gtag";
import React from "react";
// @ts-ignore
import FacebookIcon from "../assets/facebook.svg";
import { LINKS } from "../constants";

const FacebookLink = () => {
  return (
    <OutboundLink
      href={LINKS.FACEBOOK.href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <FacebookIcon height="40" width="40" alt="Facebook link" />
    </OutboundLink>
  );
};

export default FacebookLink;
