const projects = require("./content/projects.json");

exports.createPages = ({ actions }) => {
  const { createPage } = actions;

  projects.forEach((project) => {
    createPage({
      path: `/projects/${project.path}`,
      component: require.resolve("./src/templates/project-template.tsx"),
      context: { project }
    });
  });
};
