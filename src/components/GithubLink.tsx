import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import SocialLink from "./SocialLink";

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
    <SocialLink
      title="GitHub Profile"
      url="https://github.com/osamaadam"
      icon={data.file.publicURL}
    />
  );
};

export default GithubLink;
