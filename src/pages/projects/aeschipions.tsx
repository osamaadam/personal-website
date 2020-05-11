import React from "react";
import Showcase from "../../components/Showcase";
import Layout from "../../components/Layout";
import NavBar from "../../components/NavBar";
import Seo from "../../components/Seo";

const aeschipions: React.FC = () => {
  const title = "AESChipions";

  return (
    <>
      <Seo title={title} />
      <NavBar />
      <Layout>
        <Showcase
          title={title}
          repository="https://github.com/mohamednour98/AESchipions"
          description={`
                AESChipions is a team effort between myself and Mohamed Nour. It was the
                final project of Chipions; which is a student program for digital design
                engineering. The project is basically an AES encryption system (counter mode)
                written entirely in Verilog.
              `}
        />
      </Layout>
    </>
  );
};

export default aeschipions;
