import { graphql, Link, PageProps, useStaticQuery } from "gatsby";
import Img, { FluidObject } from "gatsby-image";
import { OutboundLink } from "gatsby-plugin-google-gtag";
import React from "react";
import FacebookLink from "../components/FacebookLink";
import GithubLink from "../components/GithubLink";
import Layout from "../components/Layout";
import LinkedinLink from "../components/LinkedinLink";
import Seo from "../components/Seo";
import TwitterLink from "../components/TwitterLink";
import "../scss/index.scss";

const GITHUB_PROFILE = "https://github.com/osamaadam";

const Home: React.FC<PageProps> = () => {
  const data = useStaticQuery<{
    [key: string]: {
      childImageSharp?: {
        fluid: FluidObject;
      };
      publicURL?: string;
    };
  }>(graphql`
    query {
      profile: file(relativePath: { eq: "authors/osama-adam.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
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
          <section className="home-container__brief" id="home">
            <div className="home-profile-paper">
              <div className="home-info-area">
                <OutboundLink
                  href={GITHUB_PROFILE}
                  title="Github profile"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {data.profile.childImageSharp && (
                    <Img
                      fluid={data.profile.childImageSharp.fluid}
                      alt="Osama Adam"
                      className="profile-picture"
                    />
                  )}
                </OutboundLink>
                <div className="home-info">
                  <h1>Osama Adam</h1>
                  <p>Software Developer</p>
                  <a href="mailto:osamaadamme@gmail.com">
                    osamaadamme@gmail.com
                  </a>
                  <div className="social-links">
                    <FacebookLink />
                    <TwitterLink />
                    <GithubLink />
                    <LinkedinLink />
                  </div>
                </div>
              </div>
              <div className="home-bio">
                <p>
                  Hi! I'm Osama, and this is my <Link to="/blog">blog</Link>.
                </p>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
};

export default Home;
