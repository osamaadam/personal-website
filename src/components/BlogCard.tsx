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
  const url = frontmatter.title.trim().toLowerCase().replace(/\s/, "-");

  return (
    <article className="blog-card card">
      {frontmatter.banner && (
        <Link
          to={`/blog/${url}`}
          className="no-style-link"
          aria-label={frontmatter.title}
        >
          <Img
            fluid={frontmatter.banner.childImageSharp.fluid}
            className="blog-card__image"
            alt="blog banner"
          />
        </Link>
      )}
      <div className="blog-card__details">
        <BlogHeader frontmatter={frontmatter} />
        <Link to={`/blog/${url}`} className="no-style-link">
          <p>{node.excerpt}</p>
        </Link>
      </div>
    </article>
  );
};

export default BlogCard;
