import React from "react";
import BlogHeader from "./BlogHeader";
import Img from "gatsby-image";
import "../scss/blog-card.scss";
import { BlogQueryNode } from "../types";
import { Link } from "gatsby";

const BlogCard: React.FC<{
  node: BlogQueryNode;
}> = ({ node }) => {
  const { frontmatter } = node;
  const url = frontmatter.title
    .trim()
    .toLowerCase()
    .replace(/\s/g, "-")
    .replace(/[^A-Za-z0-9 -]/g, "");

  return (
    <Link to={url} className="no-style-link" aria-label={frontmatter.title}>
      <article className="blog-card card">
        {frontmatter.banner && (
          <Img
            fluid={frontmatter.banner.childImageSharp.fluid}
            className="blog-card__image"
            alt="blog banner"
          />
        )}
        <div className="blog-card__details">
          <BlogHeader frontmatter={frontmatter} />
          <p>{node.excerpt}</p>
        </div>
      </article>
    </Link>
  );
};

export default BlogCard;
