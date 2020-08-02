const projects = require("./content/projects.json");
const blogTemplate = require.resolve("./src/templates/blog.template.tsx");
const projectTemplate = require.resolve("./src/templates/project.template.tsx");

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  const blogQuery = await graphql(`
    query {
      allMarkdownRemark {
        nodes {
          id
          frontmatter {
            title
          }
        }
      }
    }
  `);

  blogQuery.data.allMarkdownRemark.nodes.forEach((node) => {
    const { title } = node.frontmatter;
    const { id } = node;
    const slug = title.trim().toLowerCase().replace(/\s/, "-");

    createPage({
      path: `blog/${slug}`,
      component: blogTemplate,
      context: { id }
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
