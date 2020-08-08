import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { Helmet } from "react-helmet";

interface Props {
  lang?: string;
  title: string;
  path?: string;
  image?: string;
  description?: string;
  cardType?: `summary` | `summary_large_image`;
  article?: {
    author: string;
    publishTime: string;
    modifiedTime?: string;
    tags?: string[];
  };
  meta?: {
    name?: string;
    content?: string;
    property?: string;
  }[];
}

interface Query {
  siteImage: {
    childImageSharp: {
      fixed: {
        src: string;
      };
    };
  };
  site: {
    siteMetadata: {
      title: string;
      description: string;
      author: string;
      siteUrl: string;
    };
  };
}

const Seo: React.FC<Props> = ({
  lang = "en-US",
  title = "Osama Adam",
  path = "/",
  image,
  description,
  cardType = `summary`,
  article,
  meta = [{}],
}) => {
  const { site, siteImage } = useStaticQuery<Query>(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          author
          siteUrl
        }
      }
      siteImage: file(relativePath: { eq: "favicon.png" }) {
        childImageSharp {
          fixed(width: 512) {
            src
          }
        }
      }
    }
  `);

  const metaDescription = description || site.siteMetadata.description;
  const metaUrl = site.siteMetadata.siteUrl + path;
  const metaImage =
    site.siteMetadata.siteUrl + (image || siteImage.childImageSharp.fixed.src);

  const metaTags = article?.tags?.map((tag) => ({
    name: "article:tag",
    content: tag,
  })) || [{}];

  const metaArticle = [
    {
      name: "article:published_time",
      content: article?.publishTime,
    },
    {
      name: "article:modified_time",
      content: article?.modifiedTime || article?.publishTime,
    },
    {
      name: "article:author",
      content: article?.author,
    },
  ];

  const allArticle = article ? [...metaTags, ...metaArticle] : [];

  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={title}
      meta={[
        ...meta,
        ...allArticle,
        {
          name: `google-site-verification`,
          content: `ecpqjxee4mz4eahliyzYMwVjTK74l7EzOksdwcRMSqI`,
        },
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: `keywords`,
          content: `portfolio, web developer, Egypt, React, Node, frontend, backend, web`,
        },
        {
          property: `og:url`,
          content: metaUrl,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:image`,
          content: metaImage,
        },
        {
          property: `og:type`,
          content: article ? "article" : "website",
        },
        {
          property: `fb:app_id`,
          content: `268071231205307`,
        },
        {
          name: `twitter:card`,
          content: cardType,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `twitter:image`,
          content: metaImage,
        },
      ]}
    />
  );
};

export default Seo;
