import { graphql, PageProps } from "gatsby";
import { FluidObject } from "gatsby-image";
import React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import Showcase from "../components/Showcase";

type Project = {
  title: string;
  description: string;
  repository: string;
  url?: string;
  path: string;
};

interface Props extends PageProps {
  pageContext: {
    project: Project;
  };
  data: {
    icon?: {
      childImageSharp: { fluid: FluidObject };
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
      image={data?.icon?.childImageSharp.fluid?.src}
      path={`/projects/${project.path}/`}
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
