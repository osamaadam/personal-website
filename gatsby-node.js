const projects = require("./content/projects.json");
const blogTemplate = require.resolve("./src/templates/blog.template.tsx");
const blogpostTemplate = require.resolve(
  "./src/templates/blogpost.template.tsx"
);
const projectTemplate = require.resolve("./src/templates/project.template.tsx");

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  const blogQuery = await graphql(`
    query {
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
        nodes {
          id
          timeToRead
          excerpt
          frontmatter {
            title
            author
            authorUrl
            date
            tags
            banner {
              childImageSharp {
                fluid {
                  aspectRatio
                  base64
                  sizes
                  src
                  srcSet
                  srcSetWebp
                  srcWebp
                }
              }
            }
            authorImg {
              childImageSharp {
                fluid {
                  aspectRatio
                  base64
                  sizes
                  src
                  srcSet
                  srcSetWebp
                  srcWebp
                }
              }
            }
          }
        }
      }
    }
  `);

  createPage({
    path: `/blog/`,
    component: blogTemplate,
    context: { data: blogQuery.data.allMarkdownRemark },
  });

  blogQuery.data.allMarkdownRemark.nodes.forEach((node) => {
    const { id, frontmatter } = node;
    const { title } = frontmatter;

    const slug = title.trim().toLowerCase().replace(/\s/g, "-");

    createPage({
      path: `/blog/${slug}/`,
      component: blogpostTemplate,
      context: { id },
    });
  });

  projects.forEach((project) => {
    createPage({
      path: `/projects/${project.path}/`,
      component: projectTemplate,
      context: { project, icon: project.icon, svg: project.svg },
    });
  });
};
