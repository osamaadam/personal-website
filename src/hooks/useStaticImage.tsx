import { graphql, useStaticQuery } from "gatsby";
import { FluidObject } from "gatsby-image";

export type Files =
  | "indiePhotographers.png"
  | "personal-website.png"
  | "npm.png";

const useStaticImage = (fileName?: Files) => {
  const data = useStaticQuery<{
    [key: string]: {
      childImageSharp: {
        fluid: FluidObject;
      };
    };
  }>(graphql`
    query {
      personal: file(relativePath: { eq: "personal-website.png" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      indie: file(relativePath: { eq: "indiePhotographers.png" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      npm: file(relativePath: { eq: "npm.png" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  switch (fileName) {
    case "indiePhotographers.png":
      return data.indie;
    case "personal-website.png":
      return data.personal;
    case "npm.png":
      return data.npm;
    default:
      return null;
  }
};

export default useStaticImage;
