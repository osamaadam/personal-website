import { graphql } from "gatsby";
import { GatsbyImageProps } from "gatsby-image";
import React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import Showcase from "../components/Showcase";

type Project = {
  title: string;
  description: string;
  repository: string;
  url?: string;
};

interface Props {
  pageContext: {
    project: Project;
  };
  data: {
    icon?: {
      childImageSharp: GatsbyImageProps;
    };
  };
}

const ProjectTemplate: React.FC<Props> = ({
  pageContext: { project },
  data
}) => (
  <>
    <Seo
      title={project.title}
      description={project.description}
      // @ts-ignore
      image={data?.icon?.childImageSharp.fluid?.src}
    />
    <Layout>
      <Showcase
        title={project.title}
        url={project.url}
        repository={project.repository}
        description={project.description}
        icon={data.icon?.childImageSharp}
      />
    </Layout>
  </>
);

export default ProjectTemplate;

export const pageQuery = graphql`
  query($icon: String) {
    icon: file(relativePath: { eq: $icon }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
