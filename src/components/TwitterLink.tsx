import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import SocialLink from "./SocialLink";

const TwitterLink = () => {
  const data = useStaticQuery<{ file: { publicURL: string } }>(
    graphql`
      query {
        file(relativePath: { eq: "twitter.svg" }) {
          publicURL
        }
      }
    `
  );

  return (
    <SocialLink
      title="Twitter profile"
      url="https://twitter.com/osamaadamm"
      icon={data.file.publicURL}
    />
  );
};

export default TwitterLink;
