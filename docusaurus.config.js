module.exports = {
  title: 'Bit Assist | Connect your all support assistant in a single button',
  tagline: 'Communicate With Your Customers Using Different Messaging Apps',
  url: 'https://docs.bit-assist.bitapps.pro/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.svg',
  organizationName: 'Bit-Apps-Pro',
  projectName: 'bit-assist-doc',
  themeConfig: {
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Bit Assist',
      logo: {
        alt: 'Bit Assist Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: '/',
          activeBaseRegex: '^((?!changelog).)*$',
          label: 'Docs',
          position: 'left',
        },
        // { to: 'blog', label: 'Blog', position: 'left' },
        {
          to: '/changelog/bit-assist-changelog-timeline',
          label: 'Changelogs',
          position: 'left',
          activeBasePath: '/changelog'
        },
        // {
        //   href: '/bit-assist-feature-request',
        //   label: 'Integration Request',
        //   position: 'left',
        // },
        {
          href: 'https://tawk.to/chat/60eac4b6d6e7610a49aab375/1faah0r3e',
          label: 'Support',
          position: 'left',
        },
        {
          href: 'https://downloads.wordpress.org/plugin/bit-assist.zip',
          label: 'Free Download',
          position: 'right',
          className: 'download-btn'
        },
        // {
        //   type: 'localeDropdown',
        //   position: 'left',
        // },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Install & Activate',
              to: 'install-activate-bit-assist',
            },
            {
              label: 'Integration Request',
              to: '/bit-assist-feature-request',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Facebook',
              href: 'https://www.facebook.com/groups/bitcommunityusers',
            },
            {
              label: 'YouTube',
              href: 'https://www.youtube.com/channel/UCjUl8UGn-G6zXZ-Wpd7Sc3g',
            }
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Changelog',
              to: 'changelog/bit-assist-changelog-timeline/',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/Bit-Apps-Pro/bit-assist-doc',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Bit Apps.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: 'docs',
          // path: './docs',
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/Bit-Apps-Pro/bit-assist-doc/tree/main',
        },
        blog: false,
        pages: false,
        // changelog: {
        //   path: 'changelog',
        //   sidebarPath: require.resolve('./sidebars.clog.js'),
        //   // routeBasePath: '/wp-bit-form-changelog',
        // },
        // blog: {
        //   showReadingTime: true,
        //   editUrl: 'https://github.com/Bit-Apps/bitform-documentation',
        // },
        theme: {
          customCss: [
            require.resolve('./src/css/custom.css'),
            require.resolve('./src/css/utility.css'),
          ]
        },
      },
    ],
  ],
  plugins: [
    '@docusaurus/plugin-ideal-image',
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        indexPages: true,
        // indexBlog: false,
        docsRouteBasePath: '/',
        highlightSearchTermsOnTargetPage: true,
        // For Docs using Chinese, The `language` is recommended to set to:
        // ```
        // language: ["en", "zh"],
        // ```
        // When applying `zh` in language, please install `nodejieba` in your project.
      },
    ]
  ],
  stylesheets: [
    'https://fonts.googleapis.com/css2?family=Outfit:wght@200;300;400;500;600;700;800&display=swap',
    { href: '/css/lite-yt-embed.css' }
  ],
  scripts: [
    { src: '/scripts/custom.js', defer: true },
    { src: '/scripts/lite-yt-embed.js', defer: true },
    { src: 'https://browser.sentry-cdn.com/6.11.0/bundle.tracing.min.js', defer: true }
  ],
  // i18n: {
  //   defaultLocale: 'en',
  //   locales: ['en', 'fr', 'fa'],
  //   localeConfigs: {
  //     en: {
  //       htmlLang: 'en-GB',
  //     },
  //     // You can omit a locale (e.g. fr) if you don't need to override the defaults
  //     fa: {
  //       direction: 'rtl',
  //     },
  //   },
  // },
}
