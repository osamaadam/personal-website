import { OutboundLink } from "gatsby-plugin-google-gtag";
import React from "react";
// @ts-ignore
import TwitterIcon from "../assets/twitter.svg";

const TWITTER_LINK = "https://twitter.com/osamaadamm";

const TwitterLink = () => {
  return (
    <OutboundLink href={TWITTER_LINK} target="_blank" rel="noopener noreferrer">
      <TwitterIcon height="40" width="40" alt="Twitter link" />
    </OutboundLink>
  );
};

export default TwitterLink;
