import React from "react";
import Layout from "../../components/Layout";
import NavBar from "../../components/NavBar";
import Seo from "../../components/Seo";
import Showcase from "../../components/Showcase";

const lyricsgenius: React.FC = () => {
  const title = "Lyrics Genius";

  return (
    <>
      <Seo title={title} />
      <NavBar />
      <Layout>
        <Showcase
          title={title}
          url="https://lyricsgenius.herokuapp.com/"
          repository="https://github.com/osamaadam/LyricsGenius"
          description={`
                Lyrics Genius is tiny little app built using Musixmatch's free developer
                APIs. I built this in a day back when I started learning web development.
                It's built using React and Bootstrap.
              `}
        />
      </Layout>
    </>
  );
};

export default lyricsgenius;
