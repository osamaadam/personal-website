import React from "react";
import Img, { FluidObject } from "gatsby-image";
import "../scss/showcase.scss";

interface Props {
  title: string;
  description: string;
  repository: string;
  url?: string;
  icon?: FluidObject;
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
