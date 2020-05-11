import React from "react";
import Showcase from "../../components/Showcase";
import Layout from "../../components/Layout";
import NavBar from "../../components/NavBar";
import Seo from "../../components/Seo";
import { useStaticQuery, graphql } from "gatsby";
import { FluidObject } from "gatsby-image";

const indiephotographers: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      indieIcon: file(relativePath: { eq: "indiePhotographers.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const title = "Indie Photographers";

  return (
    <>
      <Seo title={title} />
      <NavBar />
      <Layout>
        <Showcase
          title={title}
          url="https://indieapp.herokuapp.com"
          repository="https://github.com/osamaadam/indie-photographers"
          icon={data.indieIcon.childImageSharp.fluid}
          description={`
                Indie Photographers is a hub for well, indie photographers. The
                app is a PWA created through create-react-app. The frontend is a
                React app with Material-UI on top. The backend is mostly a node
                RESTful API with Express on top and MongoDB for a database.
                It's important to mention that this is a concept app not an
                actual commercial product. Nevertheless, this is a perfect
                showcase and reflection of my skills at this point in my career.
            `}
        />
      </Layout>
    </>
  );
};

export default indiephotographers;
