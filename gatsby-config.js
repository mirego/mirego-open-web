module.exports = {
  siteMetadata: {
    title: 'Mirego ❤️ Open source',
    description:
      'At Mirego, we build a huge majority of our products using open source technologies maintained by stable, mature and active communities. It’s very important for us to give back to these communities by either contributing directly to their projects or by providing libraries and tools inside their respective ecosystem.',
    siteUrl: 'https://open.mirego.com',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_TRACKER_ID,
      },
    },
  ],
};
