import React from "react";
import { FluidObject } from "gatsby-image";
import Showcase from "../../components/Showcase";
import Layout from "../../components/Layout";
import NavBar from "../../components/NavBar";
import Seo from "../../components/Seo";

const unixshell: React.FC = () => {
  const title = "Unix Shell";

  return (
    <>
      <Seo title={title} />
      <NavBar />
      <Layout>
        <Showcase
          title={title}
          repository="http://github.com/osamaadam/unix-shell"
          description={`
                  This is a simple Unix shell written in C++. C++ is the
                  language I mainly use for problem solving, simply because it's
                  very easy to build a performant solution using it. It's also
                  however very easy to miss up if not careful. You may check the
                  project repository by clicking the project title.
              `}
        />
      </Layout>
    </>
  );
};

export default unixshell;
