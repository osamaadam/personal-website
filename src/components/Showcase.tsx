import Img, { FluidObject, GatsbyImageProps } from "gatsby-image";
import { OutboundLink } from "gatsby-plugin-google-analytics";
import React from "react";
import "../scss/showcase.scss";

interface Props {
  title: string;
  description: string;
  repository: string;
  url?: string;
  icon?: GatsbyImageProps;
  svg?: string;
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
  svg,
  className = "",
  elementRef,
}) => {
  const appUrl = url !== repository ? url : undefined;
  return (
    <div className={`card portfolio ${className}`} ref={elementRef}>
      <div className="showcase">
        <div className="showcase__desc">
          <h4>
            <OutboundLink
              href={url}
              title={title}
              target="_blank"
              rel="noopener noreferrer"
            >
              {title}
            </OutboundLink>
          </h4>
          <p>{description}</p>
        </div>

        {icon && (
          <div className="showcase__logo">
            <OutboundLink
              href={url}
              title={title}
              target="_blank"
              rel="noopener noreferrer"
              className="showcase__logo__img"
            >
              <Img fluid={icon.fluid} alt={`${title}'s logo`} />
            </OutboundLink>
            <OutboundLink
              href={url}
              title={title}
              target="_blank"
              rel="noopener noreferrer"
              className="showcase__logo__text"
            >
              <p>
                <span className="highlight">{title}</span>
              </p>
            </OutboundLink>
          </div>
        )}

        {svg && (
          <div className="showcase__logo">
            <OutboundLink
              href={url}
              title={title}
              target="_blank"
              rel="noopener noreferrer"
              className="showcase__logo__img"
            >
              <img src={svg} alt={`${title}'s logo`} />
            </OutboundLink>
            <OutboundLink
              href={url}
              title={title}
              target="_blank"
              rel="noopener noreferrer"
              className="showcase__logo__text"
            >
              <p>
                <span className="highlight">{title}</span>
              </p>
            </OutboundLink>
          </div>
        )}
      </div>

      <div className="showcase__button-container">
        <OutboundLink
          href={repository}
          title="Repository"
          target="_blank"
          rel="noopener noreferrer"
          className="button--outline"
        >
          Repository
        </OutboundLink>
        {appUrl && (
          <OutboundLink
            href={appUrl}
            title="Deployed application"
            target="_blank"
            rel="noopener noreferrer"
            className="button--outline"
          >
            Visit App
          </OutboundLink>
        )}
      </div>
    </div>
  );
};

export default Showcase;
