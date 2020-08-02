const projects = require("./content/projects.json");
const blogTemplate = require.resolve("./src/templates/blog.template.tsx");
const projectTemplate = require.resolve("./src/templates/project.template.tsx");

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  const blogQuery = await graphql(`
    query {
      allMarkdownRemark {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `);

  blogQuery.data.allMarkdownRemark.nodes.forEach((node) => {
    createPage({
      path: node.frontmatter.slug,
      component: blogTemplate,
      context: { slug: node.frontmatter.slug }
    });
  });

  projects.forEach((project) => {
    createPage({
      path: `/projects/${project.path}`,
      component: projectTemplate,
      context: { project, icon: project.icon }
    });
  });
};
