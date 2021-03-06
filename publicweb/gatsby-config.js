module.exports = {
	siteMetadata: {
		title: `Protect IID`,
		description: `Learn to Protect your Internet Identity.`,
		author: `@protectiid`
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`
			}
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Protect IID`,
				short_name: `Protect IID`,
				start_url: `/`,
				background_color: `#000000`,
				theme_color: `#000000`,
				display: `minimal-ui`,
				icon: `src/images/icon.svg` // This path is relative to the root of the site.
			}
		},
		{
			resolve: "gatsby-plugin-react-svg",
		}
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.app/offline
		// 'gatsby-plugin-offline',
	]
};
