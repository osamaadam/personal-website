import React from "react";
import SocialLink from "./SocialLink";
import * as linkedin from "../assets/linkedin.svg";

const LinkedinLink = () => {
  return (
    <SocialLink
      title="Linkedin Profile"
      url="https://www.linkedin.com/in/osamaadam98/"
      icon={linkedin}
    />
  );
};

export default LinkedinLink;
