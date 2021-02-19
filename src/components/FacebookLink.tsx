import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import SocialLink from "./SocialLink";

const FacebookLink = () => {
  const data = useStaticQuery<{ file: { publicURL: string } }>(
    graphql`
      query {
        file(relativePath: { eq: "facebook.svg" }) {
          publicURL
        }
      }
    `
  );

  return (
    <SocialLink
      title="Facebook profile"
      url="https://facebook.com/osamaadamme"
      icon={data.file.publicURL}
    />
  );
};

export default FacebookLink;
