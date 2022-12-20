import { PageProps } from "gatsby";
import { OutboundLink } from "gatsby-plugin-google-gtag";
import React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import "../scss/index.scss";

const LINKS = [
  new URL("https://github.com/osamaadam"),
  new URL("https://linkedin.com/in/osamaadamm"),
];

const Home: React.FC<PageProps> = () => {
  return (
    <>
      <Seo title="Osama Adam" />
      <Layout>
        <div className="home-container">
          <section className="home-container__brief" id="home">
            <div className="home-profile-paper">
              <div className="home-info-area">
                <div className="home-info">
                  <h1>Osama Adam</h1>
                  <p>Software Developer</p>
                  <a href="mailto:osamaadamme@gmail.com">
                    osamaadamme@gmail.com
                  </a>
                </div>
              </div>
              <div className="home-bio">
                <div>
                  <p>
                    Hi, I'm a former Software Engineer Intern at Siemens DISW's
                    Calibre. I write blogposts when the stars align (they
                    haven't aligned in forever).
                  </p>
                  <br />
                  <p>
                    Anyways, I'm currently on the look out for new opportunities
                    since I just recently finished my mandatory military
                    service.
                  </p>
                  <br />
                  <p>
                    Find me at:
                    <ul className="links-list">
                      {LINKS.map((link) => (
                        <li>
                          <OutboundLink
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {link.hostname + link.pathname}
                          </OutboundLink>
                        </li>
                      ))}
                    </ul>
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
};

export default Home;
