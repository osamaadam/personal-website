import { PageProps } from "gatsby";
import { FluidObject } from "gatsby-image";
import React from "react";
import BlogCard from "../components/BlogCard";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import "../scss/blog-main.scss";

interface Props extends PageProps {
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
            childImageSharp: { fluid: FluidObject };
          };
          authorImg?: {
            childImageSharp: { fluid: FluidObject };
          };
        };
      }[];
    };
  };
}

const Blog: React.FC<Props> = ({ pageContext: { data } }) => {
  React.useEffect(() => {
    const blogNav =
      typeof window !== "undefined" &&
      document.querySelector(`[data-nav="blog"]`);

    if (blogNav) blogNav.classList.add("navlinks__link--highlighted");

    return () => {
      if (blogNav) blogNav.classList.remove("navlinks__link--highlighted");
    };
  }, []);

  return (
    <>
      <Seo title="Blog" path="/blog/" />
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
