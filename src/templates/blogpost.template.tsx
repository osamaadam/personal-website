import { graphql, PageProps } from "gatsby";
import Img, { FluidObject } from "gatsby-image";
import React from "react";
import BlogHeader from "../components/BlogHeader";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import "../scss/blog-post.scss";
import moment from "moment";
import { MDXRenderer } from "gatsby-plugin-mdx";

interface Props extends PageProps {
  data: {
    mdx: {
      body: string;
      timeToRead: number;
      excerpt: string;
      frontmatter: {
        author: string;
        title: string;
        date: number;
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
  const { body, frontmatter, excerpt, timeToRead } = data.mdx;

  const slug = frontmatter.title.trim().toLowerCase().replace(/\s/g, "-");

  return (
    <>
      <Seo
        title={`${frontmatter.title} • ${timeToRead} min read`}
        image={
          frontmatter.banner?.childImageSharp.fluid.src ||
          frontmatter.authorImg?.childImageSharp.fluid.src
        }
        path={`/blog/${slug}`}
        description={excerpt}
        cardType="summary_large_image"
        article={{
          author: frontmatter.author,
          publishTime: moment(frontmatter.date).toISOString(),
          tags: frontmatter.tags,
        }}
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
          <article className="blog__body">
            <MDXRenderer>{body}</MDXRenderer>
          </article>
        </article>
      </Layout>
    </>
  );
};

export default BlogTemplate;

export const pageQuery = graphql`
  query($id: String!) {
    mdx(id: { eq: $id }) {
      body
      excerpt
      timeToRead
      frontmatter {
        title
        date
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
