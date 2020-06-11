import React from "react";
import Layout from "../components/Layout";
import "../scss/blog.scss";

const BlogLayout: React.FC = ({ children }) => {
  return (
    <Layout>
      <div className="blog-card">{children}</div>
    </Layout>
  );
};

export default BlogLayout;
