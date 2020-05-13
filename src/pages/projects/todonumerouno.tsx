import React from "react";
import Layout from "../../components/Layout";
import NavBar from "../../components/NavBar";
import Seo from "../../components/Seo";
import Showcase from "../../components/Showcase";

const todonumerouno: React.FC = () => {
  const title = "todoNumeroUno";
  return (
    <>
      <Seo title={title} />
      <NavBar />
      <Layout>
        <Showcase
          title={title}
          repository="https://github.com/osamaadam/todoNumeroUno"
          description={`
                The magnum opus, the chef d'oeuvre, the masterpiece, my first ever todo list.
                Sadly this one isn't hosted. If only the world knew what I was withholding!
                So yeah, nothing special about this one, it's a todolist built in React with
                the worst backend known to mankind using Node and Mongodb.
              `}
        />
      </Layout>
    </>
  );
};

export default todonumerouno;
