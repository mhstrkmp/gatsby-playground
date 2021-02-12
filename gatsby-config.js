module.exports = {
  siteMetadata: {
    title: "Matthias Heisterkamp | <mhstrkmp />",
    menuLinks: [
      {
        name: "<mhstrkmp />",
        link: "/",
      },
      {
        name: "work",
        link: "#work",
      },
      {
        name: "blog",
        link: "/blog",
      },
      {
        name: "contact",
        link: "#contact",
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
    `gatsby-transformer-remark`,
    `gatsby-plugin-react-helmet`,
  ],
};
