import { graphql, useStaticQuery } from "gatsby";
import { OutboundLink } from "gatsby-plugin-google-gtag";
import React from "react";
// @ts-ignore
import GithubIcon from "../assets/github.svg";

const GITHUB_LINK = "https://github.com/osamaadam";

const GithubLink = () => {
  const data = useStaticQuery<{ file: { publicURL: string } }>(
    graphql`
      query {
        file(relativePath: { eq: "github.svg" }) {
          publicURL
        }
      }
    `
  );

  return (
    <OutboundLink href={GITHUB_LINK} target="_blank" rel="noopener noreferrer">
      <GithubIcon height="40" width="40" alt="Github link" />
    </OutboundLink>
  );
};

export default GithubLink;
