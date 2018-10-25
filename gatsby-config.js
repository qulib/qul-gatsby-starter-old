module.exports = {
  siteMetadata: {
    siteUrl: `https://www.example.com`,
  },
  pathPrefix: `/qul-gatsby-starter`,
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
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
