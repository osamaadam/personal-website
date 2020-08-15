module.exports = {
  siteMetadata: {
    title: `Osama Adam's Portfolio`,
    description:
      "Portfolio website for web developer, Osama Adam. " +
      "Browse to see Osama Adam's projects and to contact him.",
    author: `https://github.com/osamadam`,
    siteUrl: `https://osamaadam.tech`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-163711485-1",
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Osama Adam's Portfolio`,
        short_name: `Osama Adam`,
        start_url: `/`,
        background_color: `#222222`,
        theme_color: `#ffc107`,
        display: `standalone`,
        icon: `src/assets/favicon.svg`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/src/blog`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [".md", ".mdx"],
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
            },
          },
        ],
      },
    },
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-sass`,
  ],
};
