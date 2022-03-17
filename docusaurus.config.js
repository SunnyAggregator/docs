// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Sunny Aggregator Docs",
  tagline: "Solana's composable DeFi aggregator",
  url: "https://docs.sunny.ag",
  baseUrl: "/",
  favicon: "img/favicon.ico",
  trailingSlash: false,

  organizationName: "SunnyAggregator",
  projectName: "docs",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "throw",
  onDuplicateRoutes: "throw",

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/SunnyAggregator/docs/tree/master/",
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        gtag: {
          trackingID: "G-RJP5YFT9C3",
        },
      }),
    ],
  ],

  plugins: [require.resolve("./sitePlugin")],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        logo: {
          alt: "Sunny Aggregator Logo",
          src: "logo-docs-light.svg",
          srcDark: "logo-docs.svg",
        },
        items: [
          {
            type: "doc",
            docId: "about/intro",
            position: "left",
            label: "About",
          },
          {
            label: "Discord",
            href: "https://chat.sunny.ag/",
            position: "right",
          },
          {
            href: "https://github.com/SunnyAggregator/docs",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Intro",
                to: "/docs/about/intro",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Discord",
                href: "https://chat.sunny.ag/",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/SunnyAggregator",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Sunny Agg Inc.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        defaultMode: "dark",
      },
      image: "banner.png",
      metadata: [{ name: "twitter:card", content: "summary_large_image" }],
    }),
};

module.exports = config;
