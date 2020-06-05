import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import Layout from "../../components/Layout";
import NavBar from "../../components/NavBar";
import Seo from "../../components/Seo";
import Showcase from "../../components/Showcase";

const personalwebsite: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      personalIcon: file(relativePath: { eq: "personal-website.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const title = "Personal Website";
  const description = `
                  This is the Website you're currently on. It was created using
                  Gatsby and is purely a static website. You may think the
                  design is minimal because I got lazy and I'm not a great web
                  designer. And you'd be partially correct. But, I got better
                  reasoning behind the minimal design. The website is built with
                  speed and performance in mind. The project is stylized purely using
                  SCSS. No external UI libraries were used.
              `;

  return (
    <>
      <Seo title={title} description={description} />
      <NavBar />
      <Layout>
        <Showcase
          title={title}
          url="https://www.osamaadam.tech"
          repository="https://github.com/osamaadam/personal-website"
          icon={data.personalIcon.childImageSharp.fluid}
          description={description}
        />
      </Layout>
    </>
  );
};

export default personalwebsite;
