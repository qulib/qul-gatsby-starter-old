module.exports = {
  siteMetadata: {
    title: 'QUL Gatsby Antd Starter',
    siteUrl: `https://www.example.com`,
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-less',
      options: {
        modifyVars: {
          // andt defaults
          'font-family': '"Open Sans", sans-serif',
          'body-background': 'transparent',
          'border-radius-base': '0px',
          'heading-color': '#002f5e',
          'link-color': '#1d70ad',
          'primary-color': '#002f5e',
          'text-color': '#231f20',
          'btn-default-color': '#fff',
          'btn-default-bg': '#8c8c8c',
          'btn-default-border': '#8c8c8c'
        },
        javascriptEnabled: true,
      },
    },
    {
      resolve: 'gatsby-plugin-antd',
      options: {
        style: true,
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/qul-squares.png',
      },
    },
    'gatsby-plugin-offline',
  ],
}
