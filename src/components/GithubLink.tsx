import { graphql, useStaticQuery } from "gatsby";
import { OutboundLink } from "gatsby-plugin-google-gtag";
import React from "react";
// @ts-ignore
import GithubIcon from "../assets/github.svg";
import { LINKS } from "../constants";

const GithubLink = () => {
  return (
    <OutboundLink
      href={LINKS.GITHUB.href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <GithubIcon height="40" width="40" alt="Github link" />
    </OutboundLink>
  );
};

export default GithubLink;
