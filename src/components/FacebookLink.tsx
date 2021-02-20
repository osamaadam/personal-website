import { OutboundLink } from "gatsby-plugin-google-gtag";
import React from "react";
// @ts-ignore
import FacebookIcon from "../assets/facebook.svg";

const FACEBOOK_LINK = "https://facebook.com/osamaadamme";

const FacebookLink = () => {
  return (
    <OutboundLink
      href={FACEBOOK_LINK}
      target="_blank"
      rel="noopener noreferrer"
    >
      <FacebookIcon height="40" width="40" alt="Facebook link" />
    </OutboundLink>
  );
};

export default FacebookLink;
