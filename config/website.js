const tailwind = require('../tailwind')

//gatsby-starter-portfolio-cara
module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'Saiteja Prasadam', // Navigation and Site Title
  siteTitleAlt: 'Saiteja', // Alternative Site title for SEO
  siteTitleShort: 'Saiteja', // short_name for manifest
  siteHeadline: 'DevOps Engineer.', // Headline for schema.org JSONLD
  siteUrl: 'https://www.saitejaprasadam.com', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logo.png', // Used for SEO and manifest
  siteDescription: 'Professional Portfolio',
  author: 'Saiteja Prasadam', // Author for schema.org JSONLD

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '@saitejaprasadam', // Twitter Username
  ogSiteName: 'saitejaprasadam', // Facebook Site Name
  ogLanguage: 'en_US', // Facebook Language
  googleAnalyticsID: 'UA-47519312-5',

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue,
}
