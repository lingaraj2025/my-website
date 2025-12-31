module.exports = {
  title: 'Technical Writing Portfolio',
  tagline: 'Documentation by Lingraj M',
  url: 'https://lingaraj-tw.github.io',
  baseUrl: '/Technical-Writing-Portfolio/',
  favicon: 'img/favicon.ico',
 
  organizationName: 'lingaraj-tw',
  projectName: 'Technical-Writing-Portfolio',
 
  presets: [
    [
      'classic',
      {
        docs: { sidebarPath: require.resolve('./sidebars.js') },
        theme: { customCss: require.resolve('./src/css/custom.css') },
      },
    ],
  ],
 
  themeConfig: {
    footer: {
      style: 'dark',
      links: [],
      copyright: `© ${new Date().getFullYear()} Lingraj M`,
    },
  },
};
