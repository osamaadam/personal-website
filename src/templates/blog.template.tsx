import { graphql } from "gatsby";
import React from "react";
import "../scss/blog.scss";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Layout from "../components/Layout";

interface Props {
  data: {
    markdownRemark: {
      html: string;
      frontmatter: {
        author: string;
        title: string;
        date: string;
      };
    };
  };
}

const BlogTemplate: React.FC<Props> = ({ data }) => {
  const { html, frontmatter } = data.markdownRemark;
  return (
    <Layout>
      <div className="blog__container">
        <section className="blog__header">
          <h1>{frontmatter.title}</h1>
          <p>
            <i>{frontmatter.author}</i>
            {", "}
            <i>{frontmatter.date}.</i>
          </p>
        </section>
        <section
          className="blog__body"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </Layout>
  );
};

export default BlogTemplate;

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        date(fromNow: true)
        author
      }
    }
  }
`;
