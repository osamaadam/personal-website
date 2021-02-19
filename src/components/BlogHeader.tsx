import { Link } from "gatsby";
import Img from "gatsby-image";
import { OutboundLink } from "gatsby-plugin-google-analytics";
import React from "react";
import "../scss/blog-header.scss";
import { BlogQueryNode } from "../types";
import Tags from "./Tags";
import moment from "moment";

interface Props {
  frontmatter: BlogQueryNode["frontmatter"];
}
const location = typeof window !== "undefined" && (window.location as Location);

const BlogHeader: React.FC<Props> = ({ frontmatter }) => {
  const url = frontmatter.title
    .trim()
    .toLowerCase()
    .replace(/\s/g, "-")
    .replace(/[^A-Za-z0-9 -]/g, "");

  const date = moment(frontmatter.date).fromNow();
  return (
    <>
      <article className="blog__header">
        {location && location.pathname !== `/blog/${url}` ? (
          <Link to={url}>
            <h1>{frontmatter.title}</h1>
          </Link>
        ) : (
          <h1>{frontmatter.title}</h1>
        )}
        <div className="blog__details-container">
          <div className="blog__extra">
            <i>{date}</i>
          </div>
        </div>
      </article>
    </>
  );
};

export default BlogHeader;
