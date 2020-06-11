import React from "react";
import Layout from "../components/Layout";
import NavBar from "../components/NavBar";
import Seo from "../components/Seo";
import Showcase from "../components/Showcase";
import useStaticImage from "../hooks/useStaticImage";

type Project = {
  title: string;
  description: string;
  repository: string;
  url?: string;
  icon?: any;
};

interface Props {
  pageContext: {
    project: Project;
  };
}

const ProjectTemplate: React.FC<Props> = ({ pageContext: { project } }) => {
  const img = useStaticImage(project.icon);

  return (
    <>
      <Seo
        title={project.title}
        description={project.description}
        image={img?.childImageSharp.fluid.srcWebp}
      />
      <Layout>
        <Showcase
          title={project.title}
          url={project.url}
          repository={project.repository}
          description={project.description}
          icon={img?.childImageSharp.fluid}
        />
      </Layout>
    </>
  );
};

export default ProjectTemplate;
