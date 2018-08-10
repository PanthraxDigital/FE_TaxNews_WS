module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-mongodb`,
      options: {
        dbName: 'taxnewsbackend',
        collection: [`topstories`],
        server: { address: `localhost`, port: `27017` },
      },
    },
  ],
}
