import React from "react";
import "../scss/index.scss";
import Layout from "../components/Layout";
import Img from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";
import Seo from "../components/Seo";

const github = require("../assets/github.png");
const facebook = require("../assets/facebook.png");
const twitter = require("../assets/twitter.svg");
const linkedin = require("../assets/linkedin.png");

const Home: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      profile: file(relativePath: { eq: "profile.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      indie: file(relativePath: { eq: "indiePhotographers.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <>
      <Seo title="Osama Adam" />
      <Layout>
        <div className="home-container">
          <div className="home-profile-paper card">
            <div className="home-info-area">
              <Img
                fluid={data.profile.childImageSharp.fluid}
                alt="Osama Adam"
                className="profile-picture"
              />
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
                Hello,
                <br />
                <br />
                I'm a student, currently going through my junior year studying
                Electronics and Communication Engineering at the University of
                Alexandria.
                <br />
                Chances are you're here because you're a recruiter looking for a
                web developer.
                <br />
                Check the rest of the page to know more about my abilities.
              </p>
            </div>
          </div>
          <div className="brief">
            <div className="card">
              <h1>Skills</h1>
              <ul className="brief__list">
                <li>Familiarity with Progressive Web Apps (PWAs)</li>
                <p>
                  This one isn't though because it'd be an unnecessary burden.
                  An example project is in the showcase!
                </p>
                <li>Experience with the MERN stack</li>
                <p>
                  MongoDB? Express? React? Node? I've got all bases covered.
                </p>
                <li>Git magician</li>
                <p>99% guarantee of not ruining the git history.</p>
              </ul>
            </div>
            <div className="card">
              <h1>Stack</h1>
              <ul className="stack">
                <li className="stack__li">
                  <h4>frontend</h4>
                  <ul>
                    <li>
                      <span className="highlight">Typescript</span>
                    </li>
                    <li>
                      <span className="highlight">SCSS</span>
                    </li>
                    <li>Javascript</li>
                    <li>HTML</li>
                  </ul>
                </li>
                <li className="stack__li">
                  <h4>backend</h4>
                  <ul>
                    <li>
                      <span className="highlight">Node</span>
                    </li>
                    <li>
                      <span className="highlight">MongoDB</span>
                    </li>
                  </ul>
                </li>
                <li className="stack__li">
                  <h4>libraries</h4>
                  <ul>
                    <li>
                      <span className="highlight">React</span>
                    </li>
                    <li>
                      <span className="highlight">Express</span>
                    </li>
                    <li>Mongoose</li>
                    <li>Bootstrap</li>
                  </ul>
                </li>
                <li className="stack__li">
                  <h4>tools</h4>
                  <ul>
                    <li>
                      <span className="highlight">Git</span>
                    </li>
                    <li>
                      <span className="highlight">VSCode</span>
                    </li>
                    <li>
                      <span className="highlight">Yarn</span>
                    </li>
                    <li>Heroku</li>
                    <li>VIM</li>
                  </ul>
                </li>
                <li className="stack__li">
                  <h4>additional languages</h4>
                  <ul>
                    <li>
                      <span className="highlight">C++</span>
                    </li>
                    <li>
                      <span className="highlight">C</span>
                    </li>
                    <li>Python</li>
                    <li>Java</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <div className="card portfolio">
            <div className="indie">
              <div className="indie__desc">
                <h4>
                  <a
                    href="https://indie.osamaadam.tech"
                    title="Indie Photographers"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Indie Photographers
                  </a>
                </h4>
                <p>
                  Indie Photographers is a hub for well, indie photographers.
                  The app is a PWA created through create-react-app. The
                  frontend is a React app with Material-UI on top. The backend
                  is mostly a node RESTful API with Express on top and MongoDB
                  for a database.
                  <br />
                  It's important to mention that this is a concept app not an
                  actual commercial product. Nevertheless, this is a perfect
                  showcase and reflection of my skills at this point in my
                  career.
                  <br />
                  You may check the{" "}
                  <a
                    href="https://github.com/osamaadam98/indie-photographers"
                    title="Repository link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    project repository here
                  </a>
                  . or check the actual website by pressing its logo.
                </p>
              </div>
              <div className="indie__logo">
                <a
                  href="https://indie.osamaadam.tech"
                  title="Indie Photographers"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="indie__logo__img"
                >
                  <Img
                    fluid={data.indie.childImageSharp.fluid}
                    alt="Indie Photographer's logo"
                  />
                </a>
                <a
                  href="https://indie.osamaadam.tech"
                  title="Indie Photographers"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="indie__logo__text"
                >
                  <p>
                    <span className="highlight">Indie Photographers</span>
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Home;
