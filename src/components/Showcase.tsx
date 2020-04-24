import React from "react";
import Img, { FluidObject } from "gatsby-image";
import "../scss/showcase.scss";

interface Props {
  title: string;
  description: string;
  url: string;
  repository: string;
  icon?: FluidObject;
  className?: string;
}

const Showcase: React.FC<Props> = ({
  title,
  description,
  url,
  repository,
  icon,
  className
}) => {
  return (
    <div className={`card portfolio ${className}`}>
      <div className="showcase">
        <div className="showcase__desc">
          <h4>
            <a
              href={url}
              title={title}
              target="_blank"
              rel="noopener noreferrer"
            >
              {title}
            </a>
          </h4>
          <p>{description}</p>
          <p>
            You may check the{" "}
            <a
              href={repository}
              title="Repository link"
              target="_blank"
              rel="noopener noreferrer"
            >
              project repository here
            </a>
            .
          </p>
        </div>
        {icon && (
          <div className="showcase__logo">
            <a
              href={url}
              title={title}
              target="_blank"
              rel="noopener noreferrer"
              className="showcase__logo__img"
            >
              <Img fluid={icon} alt={`${title}'s logo`} />
            </a>
            <a
              href={url}
              title={title}
              target="_blank"
              rel="noopener noreferrer"
              className="showcase__logo__text"
            >
              <p>
                <span className="highlight">{title}</span>
              </p>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Showcase;
