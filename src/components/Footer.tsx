import React from "react";
import GithubLink from "./GithubLink";
import LinkedinLink from "./LinkedinLink";


const Footer = () => (
  <footer className="footer">
    <div className="social-links">
      <GithubLink />
      <LinkedinLink />
    </div>
    <p>Created by Osama Adam, {new Date().getFullYear()} &copy;</p>
  </footer>
);

export default Footer;