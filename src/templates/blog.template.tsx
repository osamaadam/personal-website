import { graphql } from "gatsby";
import Img, { GatsbyImageProps } from "gatsby-image";
import { OutboundLink } from "gatsby-plugin-google-analytics";
import React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import "../scss/blog.scss";

interface Props {
  data: {
    markdownRemark: {
      html: string;
      timeToRead: number;
      excerpt: string;
      frontmatter: {
        author: string;
        title: string;
        date: string;
        authorUrl?: string;
        tags?: string[];
      };
    };
    author?: {
      childImageSharp: GatsbyImageProps;
    };
    banner?: {
      childImageSharp: GatsbyImageProps;
    };
  };
}

const BlogTemplate: React.FC<Props> = ({ data }) => {
  const { author, markdownRemark, banner } = data;
  const { html, frontmatter, excerpt } = markdownRemark;

  return (
    <>
      <Seo
        title={frontmatter.title}
        image={
          // @ts-ignore
          banner?.childImageSharp.fluid.src || author?.childImageSharp.fluid.src
        }
        description={excerpt}
      />
      <Layout>
        {banner && (
          <Img fluid={banner?.childImageSharp.fluid} className="blog__banner" />
        )}
        <div className="blog__container">
          <Tags tags={frontmatter.tags} />
          <section className="blog__header">
            <h1>{frontmatter.title}</h1>
            <div className="blog__details-container">
              <OutboundLink
                href={frontmatter.authorUrl || "#"}
                className="blog__author-url"
                target="_blank"
                rel="noopener noreferrer"
              >
                {author && (
                  <Img
                    fluid={author?.childImageSharp.fluid}
                    className="blog__author-avatar"
                  />
                )}
                <i>{frontmatter.author}</i>
              </OutboundLink>
              <span>{"•"}</span>
              <i>{frontmatter.date}</i>
            </div>
          </section>
          <section
            className="blog__body"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </Layout>
    </>
  );
};

export default BlogTemplate;

export const pageQuery = graphql`
  query($id: String!, $author: String, $banner: String) {
    markdownRemark(id: { eq: $id }) {
      html
      excerpt
      timeToRead
      frontmatter {
        title
        date(fromNow: true)
        author
        authorUrl
        tags
      }
    }
    author: file(relativePath: { regex: $author }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    banner: file(relativePath: { eq: $banner }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

const Tags: React.FC<{ tags?: string[] }> = ({ tags }) => {
  if (!tags)
    return (
      <article className="blog__tags">
        <span className="blog__tag">all</span>
      </article>
    );
  return (
    <article className="blog__tags">
      {tags.map((tag) => (
        <span className="blog__tag" key={tag}>
          {tag}
        </span>
      ))}
    </article>
  );
};
