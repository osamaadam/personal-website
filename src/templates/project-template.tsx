import React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import Showcase from "../components/Showcase";
import useStaticImage, { Files } from "../hooks/useStaticImage";

type Project = {
  title: string;
  description: string;
  repository: string;
  url?: string;
  icon?: Files;
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
        image={img?.childImageSharp.fluid.src}
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
