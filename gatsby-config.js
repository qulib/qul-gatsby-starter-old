module.exports = {
  siteMetadata: {
    siteUrl: `https://www.example.com`,
  },
  pathPrefix: `/qul-gatsby-starter`,
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/`,
        name: 'pages',
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 700,
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'QUL Gatsby Starter',
        short_name: 'QUL Gatsby Starter',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#00305e',
        display: 'minimal-ui',
        icon: 'src/images/qul-squares.png',
      },
    },
    'gatsby-plugin-offline',
  ],
}
