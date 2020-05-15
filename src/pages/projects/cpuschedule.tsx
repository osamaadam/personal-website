import React from "react";
import Layout from "../../components/Layout";
import NavBar from "../../components/NavBar";
import Seo from "../../components/Seo";
import Showcase from "../../components/Showcase";

const cpuschedule: React.FC = () => {
  const title = "CPU Schedule";

  return (
    <>
      <Seo title={title} />
      <NavBar />
      <Layout>
        <Showcase
          title={title}
          repository="http://github.com/osamaadam/cpu-schedule"
          description={`
                  A simulation for both First Come First Serve (FCFS) and Round Robin
                  CPU scheduling algorithms, written in C++. Built as part of a college course
                  (Operating Systems). Read the repository readme for more details.
              `}
        />
      </Layout>
    </>
  );
};

export default cpuschedule;