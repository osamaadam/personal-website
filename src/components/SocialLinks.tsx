import React from "react";
import FacebookLink from "./FacebookLink";
import GithubLink from "./GithubLink";
import LinkedinLink from "./LinkedinLink";
import TwitterLink from "./TwitterLink";

const SocialLinks = () => (
  <div className="social-links">
    <FacebookLink />
    <TwitterLink />
    <GithubLink />
    <LinkedinLink />
  </div>
);

export default SocialLinks;
