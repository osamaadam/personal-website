import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { Helmet } from "react-helmet";

const siteImage = require("../assets/personal-website.png") as string;

interface Props {
  description?: string;
  lang?: string;
  title: string;
  meta?: {
    name?: string;
    content?: string;
    property?: string;
  }[];
}

const Seo: React.FC<Props> = ({
  description,
  lang = "en-US",
  title = "Osama Adam",
  meta = [{}]
}) => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          author
        }
      }
    }
  `);

  const metaDescription = description || site.siteMetadata.description;

  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={title}
      meta={[
        ...meta,
        {
          name: `description`,
          content: metaDescription
        },
        {
          property: `og:title`,
          content: title
        },
        {
          property: `og:description`,
          content: metaDescription
        },
        {
          name: `og:image`,
          content: siteImage
        },
        {
          property: `og:type`,
          content: `website`
        },
        {
          name: `twitter:card`,
          content: `summary`
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author
        },
        {
          name: `twitter:title`,
          content: title
        },
        {
          name: `twitter:description`,
          content: metaDescription
        }
      ]}
    />
  );
};

export default Seo;
