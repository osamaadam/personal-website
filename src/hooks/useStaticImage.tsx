import { graphql, useStaticQuery } from "gatsby";

type Files = "indiePhotographers.png" | "personal-website.png";

const useStaticImage = (fileName: Files) => {
  const data = useStaticQuery(graphql`
    query {
      personal: file(relativePath: { eq: "personal-website.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      indie: file(relativePath: { eq: "indiePhotographers.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  switch (fileName) {
    case "indiePhotographers.png": {
      return data.indie;
    }
    case "personal-website.png": {
      return data.personal;
    }
  }
};

export default useStaticImage;
