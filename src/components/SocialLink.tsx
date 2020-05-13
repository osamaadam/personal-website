import React from "react";

interface Props {
  title: string;
  url: string;
  icon: string | typeof import("*.svg");
}

const SocialLink: React.FC<Props> = ({ title, url, icon }) => (
  <a href={url} target="_blank" rel="noopener noreferrer">
    <img
      src={icon as string}
      alt={title}
      title={title}
      width="40"
      height="40"
    />
  </a>
);

export default SocialLink;
