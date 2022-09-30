const path = require('path');

module.exports = {
  siteMetadata: {
    title: 'roemers.io',
    titleTemplate: '%s | roemers.io',
    description:
      'The personal homepage of Bruno Roemers, a software developer, curious human being and web3 citizen',
    url: 'https://roemers.io',
    ens: 'roemers.eth',
    twitterHandle: 'brunoroemers',
    linkedInHandle: 'bruno-roemers',
  },
  plugins: [
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: '296811548',
      },
    },
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
    'gatsby-remark-images',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        defaultLayouts: {
          // the component that will be used to render MDX pages
          default: path.resolve('./src/components/markdown-page.tsx'),
        },
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              // approximately matches .max-w-4xl as used in markdown-page.tsx
              maxWidth: 850,
            },
          },
        ],
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
    'gatsby-plugin-typegen',
  ],
}
