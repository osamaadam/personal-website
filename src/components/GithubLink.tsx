import React from "react";
import SocialLink from "./SocialLink";
import * as github from "../assets/github.svg";

const GithubLink = () => {
  return (
    <SocialLink
      title="GitHub Profile"
      url="https://github.com/osamaadam"
      icon={github}
    />
  );
};

export default GithubLink;
