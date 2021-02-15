module.exports = {
  siteMetadata: {
    title: "Matthias Heisterkamp | <mhstrkmp />",
    siteUrl: "https://www.mhstrkmp.dev",
    menuLinks: [
      {
        name: "work",
        link: "/#work",
      },
      {
        name: "blog",
        link: "/blog",
      },
      {
        name: "contact",
        link: "/#contact",
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog-posts`,
        path: `${__dirname}/src/blog-posts`,
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://www.mhstrkmp.dev",
        sitemap: "https://www.mhstrkmp.dev/sitemap.xml",
        env: {
          development: {
            policy: [{ userAgent: "*", disallow: ["/"] }],
          },
          production: {
            policy: [{ userAgent: "*", disallow: "/" }],
          },
        },
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
  ],
};
