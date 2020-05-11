import React from "react";
import Img, { FluidObject } from "gatsby-image";
import "../scss/showcase.scss";
import { Link } from "gatsby";

interface Props {
  title: string;
  description: string;
  repository: string;
  url?: string;
  icon?: FluidObject;
  images?: FluidObject[];
  className?: string;
  elementRef?: React.RefObject<HTMLDivElement>;
}

const Showcase: React.FC<Props> = ({
  title,
  description,
  repository,
  url = repository,
  icon,
  className = "",
  elementRef
}) => {
  const appUrl = url !== repository ? url : undefined;
  return (
    <div className={`card portfolio ${className}`} ref={elementRef}>
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
          <div className="showcase__button-container">
            <a
              href={repository}
              title="Repository"
              target="_blank"
              rel="noopener noreferrer"
              className="button"
            >
              Repository
            </a>
            {appUrl && (
              <a
                href={appUrl}
                title="Deployed application"
                target="_blank"
                rel="noopener noreferrer"
                className="button"
              >
                Visit App
              </a>
            )}
          </div>
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
