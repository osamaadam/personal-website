import React from "react";
import Layout from "../../components/Layout";
import NavBar from "../../components/NavBar";
import Seo from "../../components/Seo";
import Showcase from "../../components/Showcase";

const aeschipions: React.FC = () => {
  const title = "AESChipions";
  const description = `AESChipions is a team effort between myself and Mohamed Nour. It was the
                final project of Chipions; which is a student program for digital design
                engineering. The project is basically an AES encryption system (counter mode)
                written entirely in Verilog.`;

  return (
    <>
      <Seo title={title} description={description} />
      <NavBar />
      <Layout>
        <Showcase
          title={title}
          repository="https://github.com/mohamednour98/AESchipions"
          description={description}
        />
      </Layout>
    </>
  );
};

export default aeschipions;
