import { OutboundLink } from "gatsby-plugin-google-gtag";
import React from "react";
// @ts-ignore
import LinkedinIcon from "../assets/linkedin.svg";

const LINKEDIN_LINK = "https://linkedin.com/in/osamaadamm/";

const LinkedinLink = () => {
  return (
    <OutboundLink
      href={LINKEDIN_LINK}
      target="_blank"
      rel="noopener noreferrer"
    >
      <LinkedinIcon height="40" width="40" alt="Linkedin link" />
    </OutboundLink>
  );
};

export default LinkedinLink;
