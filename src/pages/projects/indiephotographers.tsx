import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import Layout from "../../components/Layout";
import NavBar from "../../components/NavBar";
import Seo from "../../components/Seo";
import Showcase from "../../components/Showcase";

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
  const description = `
                Indie Photographers is a hub for well, indie photographers. The
                app is a PWA created through create-react-app. The frontend is a
                React app with Material-UI on top. The backend is mostly a node
                RESTful API with Express on top and MongoDB for a database.
                It's important to mention that this is a concept app not an
                actual commercial product. Nevertheless, this is a perfect
                showcase and reflection of my skills at this point in my career.
            `;

  return (
    <>
      <Seo title={title} description={description} />
      <NavBar />
      <Layout>
        <Showcase
          title={title}
          url="https://indieapp.herokuapp.com"
          repository="https://github.com/osamaadam/indie-photographers"
          icon={data.indieIcon.childImageSharp.fluid}
          description={description}
        />
      </Layout>
    </>
  );
};

export default indiephotographers;
