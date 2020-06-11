import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { Helmet } from "react-helmet";

interface Props {
  lang?: string;
  title: string;
  image?: string;
  description?: string;
  meta?: {
    name?: string;
    content?: string;
    property?: string;
  }[];
}

const Seo: React.FC<Props> = ({
  lang = "en-US",
  title = "Osama Adam",
  image,
  description,
  meta = [{}]
}) => {
  const { site, siteImage } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          author
        }
      }
      siteImage: file(relativePath: { eq: "personal-website.png" }) {
        childImageSharp {
          fixed(width: 800) {
            srcWebp
          }
        }
      }
    }
  `);

  const metaDescription = description || site.siteMetadata.description;
  const metaImage = image || siteImage.childImageSharp.fixed.srcWebp;

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
          name: `keywords`,
          content: `portfolio, web developer, Egypt, React, Node, frontend, backend, web`
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
          property: `og:image`,
          content: metaImage
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
        },
        {
          name: `twitter:image`,
          content: metaImage
        }
      ]}
    />
  );
};

export default Seo;
