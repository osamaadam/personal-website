import React from "react";
import "../scss/index.scss";
import Layout from "../components/Layout";

const profile = require("../assets/profile.jpg");
const github = require("../assets/github.png");
const facebook = require("../assets/facebook.png");
const twitter = require("../assets/twitter.svg");
const linkedin = require("../assets/linkedin.png");

const Home: React.FC = () => {
  return (
    <Layout>
      <div className="home-container">
        <div className="home-profile-paper card">
          <div className="home-info-area">
            <img src={profile} alt="Osama Adam" className="profile-picture" />
            <div className="home-info">
              <h1>Osama Adam</h1>
              <p>Full Stack Web Developer</p>
              <div className="social-links">
                <a
                  href="https://facebook.com/osamaadam98"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={facebook}
                    alt="Facebook Profile"
                    title="Facebook Profile"
                    width="40"
                    height="40"
                  />
                </a>
                <a
                  href="https://twitter.com/OsamaAdam98"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={twitter}
                    alt="Twitter Profile"
                    title="@osamaadam98"
                    width="40"
                    height="40"
                  />
                </a>
                <a
                  href="https://github.com/OsamaAdam98"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={github}
                    alt="GitHub Profile"
                    title="GitHub Profile"
                    width="40"
                    height="40"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/osamaadam98/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={linkedin}
                    alt="Linkedin Profile"
                    title="Linkedin Profile"
                    width="40"
                    height="40"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="home-bio">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem, adipisci illo. Tempora quod culpa odio hic eveniet
              blanditiis, ex soluta architecto recusandae corrupti earum non
              repudiandae, adipisci doloribus pariatur quo. Lorem, ipsum dolor
              sit amet consectetur adipisicing elit. Vero nobis facilis aperiam
              eligendi quasi sit cumque, nihil laboriosam placeat beatae maiores
              eaque suscipit, exercitationem neque excepturi perferendis eius
              vel nemo.Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem, adipisci illo. Tempora quod culpa odio hic eveniet
              blanditiis, ex soluta architecto recusandae corrupti earum non
              repudiandae, adipisci doloribus pariatur quo. Lorem, ipsum dolor
              sit amet consectetur adipisicing elit. Vero nobis facilis aperiam
              eligendi quasi sit cumque, nihil laboriosam placeat beatae maiores
              eaque suscipit, exercitationem neque excepturi perferendis eius
              vel nemo.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
