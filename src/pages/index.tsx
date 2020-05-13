import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import React from "react";
import * as github from "../assets/github.svg";
import * as linkedin from "../assets/linkedin.svg";
import ContactForm from "../components/ContactForm";
import Layout from "../components/Layout";
import NavBar from "../components/NavBar";
import ProjectIcon from "../components/ProjectIcon";
import Seo from "../components/Seo";
import SkillsColumn from "../components/SkillsColumn";
import SocialLink from "../components/SocialLink";
import "../scss/index.scss";

const Home: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      profile: file(relativePath: { eq: "profile.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      indie: file(relativePath: { eq: "indiePhotographers.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      personalIcon: file(relativePath: { eq: "personal-website.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      unixShellIcon: file(relativePath: { eq: "unix-shell/cowsay.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      lyricsGeniusIcon: file(relativePath: { eq: "lyricsGenius/home.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      AESChipionsIcon: file(relativePath: { eq: "AESChipions/github.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      todoNumeroUnoIcon: file(relativePath: { eq: "todoNumeroUno/home.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  const projects = React.useRef(null);
  const contact = React.useRef(null);
  const refMap: Refs = { projects, contact };

  return (
    <>
      <Seo title="Osama Adam" />
      <NavBar refs={refMap} currentLocation="/" />
      <Layout>
        <div className="home-container">
          <div className="home-container__brief">
            <div className="home-profile-paper card">
              <div className="home-info-area">
                <Img
                  fluid={data.profile.childImageSharp.fluid}
                  alt="Osama Adam"
                  className="profile-picture"
                />
                <div className="home-info">
                  <h1>Osama Adam</h1>
                  <p>Software Developer</p>
                  <div className="social-links">
                    <SocialLink
                      title="GitHub Profile"
                      url="https://github.com/osamaadam"
                      icon={github}
                    />
                    <SocialLink
                      title="Linkedin Profile"
                      url="https://www.linkedin.com/in/osamaadam98/"
                      icon={linkedin}
                    />
                  </div>
                </div>
              </div>
              <div className="home-bio">
                <p>
                  I'm an Electronics and Communication Engineering student.
                  Currently going through my junior year. I like to create so
                  naturally I started learning web development and this is where
                  we are right now.
                  <br />
                  Throughout this page, I'll be showcasing my most significant
                  projects and accomplishments. I mostly work with React, Node,
                  C++, and their derivatives.
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
                  <SkillsColumn
                    columnTitle="frontend"
                    highlighted={["TypeScript", "SCSS"]}
                    normal={["HTML"]}
                  />
                  <SkillsColumn
                    columnTitle="backend"
                    highlighted={["Node", "MongoDB"]}
                  />
                  <SkillsColumn
                    columnTitle="tech"
                    highlighted={["React", "Express"]}
                    normal={["Mongoose", "Bootstrap"]}
                  />
                  <SkillsColumn
                    columnTitle="tools"
                    highlighted={["Git", "VSCode", "NPM/Yarn"]}
                    normal={["Heroku"]}
                  />
                  <SkillsColumn
                    columnTitle="additional languages"
                    highlighted={["C++", "C"]}
                    normal={["Python", "Java"]}
                  />
                </ul>
              </div>
            </div>
          </div>
          <div className="card projects" ref={refMap["projects"]}>
            <h1>Projects</h1>
            <ul className="projects__list">
              <ProjectIcon
                title="Indie Photographers"
                pathname="/projects/indiephotographers"
                icon={data.indie.childImageSharp.fluid}
              />
              <ProjectIcon
                title="Personal Website"
                pathname="/projects/personalwebsite"
                icon={data.personalIcon.childImageSharp.fluid}
              />
              <ProjectIcon
                title="Unix Shell"
                pathname="/projects/unixshell"
                icon={data.unixShellIcon.childImageSharp.fluid}
              />
              <ProjectIcon
                title="Lyrics Genius"
                pathname="/projects/lyricsgenius"
                icon={data.lyricsGeniusIcon.childImageSharp.fluid}
              />
              <ProjectIcon
                title="AESChipions"
                pathname="/projects/aeschipions"
                icon={data.AESChipionsIcon.childImageSharp.fluid}
              />
              <ProjectIcon
                title="todoNumeroUno"
                pathname="/projects/todonumerouno"
                icon={data.todoNumeroUnoIcon.childImageSharp.fluid}
              />
            </ul>
          </div>
          <ContactForm reference={contact} />
        </div>
      </Layout>
    </>
  );
};

export default Home;
