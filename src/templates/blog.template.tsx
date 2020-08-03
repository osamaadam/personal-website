import React from "react";
import Layout from "../components/Layout";
import BlogCard from "../components/BlogCard";
import { GatsbyImageProps } from "gatsby-image";
import "../scss/blog-main.scss";
import Seo from "../components/Seo";

interface Props {
  pageContext: {
    data: {
      nodes: {
        timeToRead: number;
        excerpt: string;
        frontmatter: {
          author: string;
          title: string;
          date: string;
          authorUrl?: string;
          tags?: string[];
          banner?: {
            childImageSharp: GatsbyImageProps;
          };
          authorImg?: {
            childImageSharp: GatsbyImageProps;
          };
        };
      }[];
    };
  };
}

const Blog: React.FC<Props> = ({ pageContext: { data } }) => {
  return (
    <>
      <Seo title="Blog" />
      <Layout>
        <div className="blog-main__container">
          {data.nodes.map((node: any) => (
            <BlogCard node={node} key={node.id} />
          ))}
        </div>
      </Layout>
    </>
  );
};

export default Blog;
