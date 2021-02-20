import { OutboundLink } from "gatsby-plugin-google-gtag";
import React from "react";
import FacebookLink from "./FacebookLink";
import GithubLink from "./GithubLink";
import LinkedinLink from "./LinkedinLink";
import TwitterLink from "./TwitterLink";

const date = new Date().getFullYear();

const GITHUB_PROFILE = "https://github.com/osamaadam";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-links">
        <FacebookLink />
        <TwitterLink />
        <GithubLink />
        <LinkedinLink />
      </div>
      <small>
        Created by{" "}
        <OutboundLink
          href={GITHUB_PROFILE}
          title="Github profile"
          target="_blank"
          rel="noopener noreferrer"
        >
          Osama Adam
        </OutboundLink>
        , {date} &copy;
      </small>
    </footer>
  );
};

export default Footer;
