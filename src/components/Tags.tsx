import React from "react";
import "../scss/blog-tags.scss";

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

export default Tags;
