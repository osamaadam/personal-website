import { OutboundLink } from "gatsby-plugin-google-gtag";
import React from "react";
// @ts-ignore
import LinkedinIcon from "../assets/linkedin.svg";
import { LINKS } from "../constants";

const LinkedinLink = () => {
  return (
    <OutboundLink
      href={LINKS.LINKEDIN.href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <LinkedinIcon height="40" width="40" alt="Linkedin link" />
    </OutboundLink>
  );
};

export default LinkedinLink;
