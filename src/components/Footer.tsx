import React from "react";
import GithubLink from "./GithubLink";
import LinkedinLink from "./LinkedinLink";

const date = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-links">
        <GithubLink />
        <LinkedinLink />
      </div>
      <small>Created by Osama Adam, {date} &copy;</small>
    </footer>
  );
};

export default Footer;
