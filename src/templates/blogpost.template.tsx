import { graphql } from "gatsby";
import Img, { GatsbyImageProps, FluidObject } from "gatsby-image";
import React from "react";
import BlogHeader from "../components/BlogHeader";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import "../scss/blog-post.scss";

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
        banner?: {
          childImageSharp: { fluid: FluidObject };
        };
        authorImg?: {
          childImageSharp: { fluid: FluidObject };
        };
      };
    };
  };
}

const BlogTemplate: React.FC<Props> = ({ data }) => {
  const { html, frontmatter, excerpt, timeToRead } = data.markdownRemark;
  return (
    <>
      <Seo
        title={`${frontmatter.title} • ${timeToRead} min read`}
        image={
          // @ts-ignore
          frontmatter.banner?.childImageSharp.fluid.src ||
          // @ts-ignore
          frontmatter.authorImg?.childImageSharp.fluid.src
        }
        description={excerpt}
        cardType="summary_large_image"
      />
      <Layout>
        {frontmatter.banner && (
          <Img
            fluid={frontmatter.banner.childImageSharp.fluid}
            className="blog__banner"
          />
        )}
        <article className="blog__container">
          <BlogHeader frontmatter={frontmatter} />
          <section
            className="blog__body"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </article>
      </Layout>
    </>
  );
};

export default BlogTemplate;

export const pageQuery = graphql`
  query($id: String!) {
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
        banner {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        authorImg {
          childImageSharp {
            fluid(maxWidth: 200) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`;
