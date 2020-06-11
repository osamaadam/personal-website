import { MDXProvider } from "@mdx-js/react";
import { graphql, Link } from "gatsby";
import React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import "../scss/blog.scss";

const components = { Link, graphql };

type Frontmatter = {
  title: string;
  author: string;
  publishDate: string;
  tags: string[];
};

interface Props extends React.Component {
  pageContext: {
    frontmatter: Frontmatter;
  };
}

const BlogLayout: React.FC<Props> = (props) => {
  const { frontmatter } = props.pageContext;
  const metadata: ogMetaData[] = [
    {
      property: `article:author`,
      content: frontmatter.author
    },
    {
      property: `article:published_time`,
      content: frontmatter.publishDate
    },
    ...frontmatter.tags.map((tag) => ({
      property: `article:tag`,
      content: tag
    }))
  ];

  console.log(props);

  return (
    <>
      <Seo title={frontmatter.title} meta={[...metadata, ...profile]} />
      <Layout>
        <div className="blog-container">
          <div className="blog-card">
            <MDXProvider components={components}>{props.children}</MDXProvider>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default BlogLayout;

const profile: ogMetaData[] = [
  {
    property: `profile:first_name`,
    content: `Osama`
  },
  {
    property: `profile:last_name`,
    content: `Adam`
  },
  {
    property: `profile:username`,
    content: `osamaadam`
  }
];
