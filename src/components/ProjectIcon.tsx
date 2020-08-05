import { Link } from "gatsby";
import Img, { GatsbyImageProps } from "gatsby-image";
import React from "react";
import "../scss/project-icon.scss";

interface Props {
  pathname: string;
  title: string;
  icon?: GatsbyImageProps;
  svg?: string;
}

const ProjectIcon: React.FC<Props> = ({ pathname, title, icon, svg }) => {
  return (
    <li className="project-icon">
      {icon && (
        <Link to={pathname} className="project-icon__img">
          <Img
            fluid={icon?.fluid}
            fixed={icon?.fixed}
            alt={`${title}'s logo`}
          />
        </Link>
      )}
      {svg && (
        <Link to={pathname} className="project-icon__img">
          <img src={svg} alt={`${title}'s logo`} />
        </Link>
      )}
      <Link to={pathname} className="project-icon__text">
        <p>
          <span className="highlight">{title}</span>
        </p>
      </Link>
    </li>
  );
};

export default ProjectIcon;
