require("dotenv").config({
  path: ".env"
});

module.exports = {
  siteMetadata: {
    title: `Osama Adam`,
    description: `A website showcasing Osama Adam's work projects and contact details.`,
    author: `@osamaadam98`
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GATSBY_ANALYTICS,
        head: false
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Osama Adam's Portfolio`,
        short_name: `Osama Adam`,
        start_url: `/`,
        background_color: `#303030`,
        theme_color: `#ffc107`,
        display: `standalone`,
        icon: `src/assets/favicon.svg`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets`
      }
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-sass`
  ]
};
