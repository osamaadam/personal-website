import { OutboundLink } from "gatsby-plugin-google-gtag";
import React from "react";
// @ts-ignore
import TwitterIcon from "../assets/twitter.svg";
import { LINKS } from "../constants";

const TwitterLink = () => {
  return (
    <OutboundLink
      href={LINKS.TWITTER.href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <TwitterIcon height="40" width="40" alt="Twitter link" />
    </OutboundLink>
  );
};

export default TwitterLink;
