// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer").themes.github;
const darkCodeTheme = require("prism-react-renderer").themes.dracula;

const SITE_CONFIG = {
  NAME: `sagelga's blog`,
  DESCRIPTION: `sagelga's Personal blog`,
};

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: SITE_CONFIG.NAME,
  tagline: SITE_CONFIG.DESCRIPTION,
  favicon: "img/sagelga.png",

  // Set the production url of your site here
  url: "https://blog.sagelga.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "sagelga", // Usually your GitHub org/user name.
  projectName: "blog", // Usually your repo name.

  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
    localeConfigs: {
      en: {
        label: "English",
      },
    },
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: {
          routeBasePath: "/",
          showReadingTime: true,
          readingTime: ({ content, frontMatter, defaultReadingTime }) =>
            defaultReadingTime({
              content,
              options: { wordsPerMinute: 250 },
            }),
          blogTitle: SITE_CONFIG.NAME,
          blogDescription: SITE_CONFIG.DESCRIPTION,
          postsPerPage: "ALL",
          blogSidebarTitle: "All posts",
          blogSidebarCount: "ALL",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/sagelga.jpg",
      navbar: {
        title: SITE_CONFIG.NAME,
        logo: {
          alt: "My Site Logo",
          src: "img/sagelga.png",
        },
        items: [
          { label: "Home", to: "/", position: "left" },
          {
            label: "ByteSide.one",
            to: "/tags/byte-side-one",
            position: "left",
          },
          {
            label: "Generative AI",
            to: "/tags/generative-ai",
            position: "left",
          },
          { label: "Travel", to: "/tags/travel", posistion: "left" },
          {
            label: "Programming",
            to: "/tags/programming",
            position: "left",
          },
          {
            href: "https://github.com/sagelga/blog",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Topics",
            items: [
              {
                label: "ByteSide.one",
                href: "/tags/byte-side-one",
              },
              {
                label: "Generative AI",
                href: "/tags/generative-ai",
              },
              {
                label: "Travel",
                href: "/tags/travel",
              },
              {
                label: "Programming",
                href: "/tags/programming",
              },
            ],
          },
          {
            title: " ",
            items: [
              {
                label: "Home",
                href: "/",
              },
            ],
          },
          {
            title: " ",
            items: [
              {
                label: "Home",
                href: "/",
              },
            ],
          },
          {
            title: "About sagelga",
            items: [
              {
                label: "sagelga's blog",
                href: "https://blog.sagelga.com",
              },
              {
                label: "Learn with sagelga",
                to: "https://learn.sagelga.com/",
              },
              {
                label: "ByteSide.one",
                to: "https://byteside.one/th/",
              },
              {
                label: "Follow sagelga on GitHub",
                href: "https://github.com/sagelga",
              },
              {
                label: "About sagelga",
                href: "https://www.sagelga.com",
              },
            ],
          },
        ],
        copyright: `Copyright © 2019-${new Date().getFullYear()} · Made with ❤️ by <a href="https://sagelga.com">sagelga</a>`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      zoom: {
        selector: ".markdown :not(em) > img",
        config: {
          // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
          background: {
            light: "rgb(255, 255, 255)",
            dark: "rgb(50, 50, 50)",
          },
        },
      },
    }),

  plugins: [require.resolve("docusaurus-plugin-image-zoom")],
};

module.exports = config;
