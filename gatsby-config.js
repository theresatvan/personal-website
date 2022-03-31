module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
    title: "Theresa T Van"
  },
  plugins: [
    {
      resolve: 'gatsby-source-mongodb',
      options: {
        dbName: 'personalSiteDB',
        collection: [
          'enc-articles',
          'enc-sections'
        ],
        connectionString: 'mongodb+srv://admin:xLmsJ9zTzQQM3PZX@cluster0.89nlm.mongodb.net'
      }
    }
  ],
}
