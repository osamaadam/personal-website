import moment from "moment";
import React from "react";
import "../scss/blog-header.scss";
import { BlogQueryNode } from "../types";

interface Props {
  frontmatter: BlogQueryNode["frontmatter"];
}

const BlogHeader: React.FC<Props> = ({ frontmatter }) => {
  const date = moment(frontmatter.date).fromNow();
  return (
    <>
      <article className="blog__header">
        <h1>{frontmatter.title}</h1>
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
