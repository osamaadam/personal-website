import React from "react";
import SocialLink from "./SocialLink";
import { useStaticQuery, graphql } from "gatsby";

const LinkedinLink = () => {
  const data = useStaticQuery<{ file: { publicURL: string } }>(
    graphql`
      query {
        file(relativePath: { eq: "linkedin.svg" }) {
          publicURL
        }
      }
    `
  );
  return (
    <SocialLink
      title="Linkedin Profile"
      url="https://linkedin.com/in/osamaadam98/"
      icon={data.file.publicURL}
    />
  );
};

export default LinkedinLink;
