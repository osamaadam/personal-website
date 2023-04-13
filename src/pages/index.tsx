import { PageProps } from "gatsby";
import { OutboundLink } from "gatsby-plugin-google-gtag";
import React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import "../scss/index.scss";
import { LINKS as L } from "../constants.ts";

const LINKS = [L.GITHUB, L.LINKEDIN];

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
                  <p>Software Engineer</p>
                  <a href={L.EMAIL.href}>osamaadamme@gmail.com</a>
                </div>
              </div>
              <div className="home-bio">
                <div>
                  <p>
                    Hi, my name is Osama, and I'm a Software Engineer at
                    Saloodo!.
                  </p>
                  <br />
                  <div>
                    Find me at:
                    <ul className="links-list">
                      {LINKS.map((link) => (
                        <li key={link.href}>
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
                  </div>
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
