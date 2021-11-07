const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");
require("dotenv").config();

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "The Bitcoin Cash Podcast",
  tagline:
    "Following Bitcoin Cash (BCH) on its rise to global reserve currency.",
  url: "https://www.bitcoincashpodcast.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/bch.ico",
  organizationName: "The Bitcoin Cash Podcast", // Usually your GitHub org/user name.
  projectName: "bitcoincashpodcast-v2", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "The Bitcoin Cash Podcast",
      logo: {
        alt: "BCH logo",
        src: "img/bch.png",
      },
      items: [
        { to: "/start", label: "Start Here!", position: "left" },
        { to: "/about", label: "About", position: "left" },
        {
          type: "doc",
          docId: "welcome",
          position: "left",
          label: "Episodes",
        },
        { to: "/music", label: "Music", position: "left" },
        { to: "/faqs", label: "FAQs", position: "left" },
        { to: "/stats", label: "Stats", position: "left" },
        { to: "/code", label: "Code", position: "left" },
        { to: "/recommended", label: "Recommended", position: "left" },
      ],
    },
    footer: {
      style: "light",
      links: [
        {
          title: "Pages",
          items: [
            {
              label: "About",
              to: "/about",
            },
            {
              label: "Episodes",
              to: "/docs/welcome",
            },
            {
              label: "Music",
              to: "/music",
            },
            {
              label: "FAQs",
              to: "/faqs",
            },
            {
              label: "Stats",
              to: "/stats",
            },
            {
              label: "Code",
              to: "/code",
            },
            {
              label: "Recommended",
              to: "/recommended",
            },
          ],
        },
        {
          title: "Listen",
          items: [
            {
              label: "Youtube",
              href: "https://www.youtube.com/channel/UCsrDsJnHFnkMnJhEslofyPQ",
            },
            {
              label: "Apple Podcasts",
              href: "https://podcasts.apple.com/gb/podcast/the-bitcoin-cash-podcast/id1555355070",
            },
            {
              label: "Google Podcasts",
              href: "https://podcasts.google.com/feed/aHR0cHM6Ly9tZWRpYS5yc3MuY29tL2JpdGNvaW5jYXNocG9kY2FzdC9mZWVkLnhtbA",
            },
            {
              label: "Spotify (Podcast)",
              href: "https://open.spotify.com/show/01N17Oi7sRZM4vYGiTO6uk",
            },
            {
              label: "Spotify (Music)",
              href: "https://open.spotify.com/artist/4wyXjYROLQdNvL6qwgCerH",
            },
          ],
        },
        {
          title: "Follow",
          items: [
            {
              label: "Youtube (Clips Channel)",
              href: "https://www.youtube.com/channel/UC22kOwMuIzJCOtAPjoIjkFA",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/TheBCHPodcast",
            },
            {
              label: "Noise.cash",
              href: "https://noise.cash/u/TheBitcoinCashPodcast",
            },
            {
              label: "Telegram",
              href: "https://t.me/thebitcoincashpodcast",
            },
            {
              label: "Cointree",
              href: "https://noise.cash/u/TheBitcoinCashPodcast",
            },
            {
              label: "Instagram",
              href: "https://www.instagram.com/thebitcoincashpodcast/",
            },
            {
              label: "Twitch.tv",
              href: "https://www.twitch.tv/thebitcoincashpodcast",
            },
          ],
        },
      ],
      logo: {
        alt: "bitcoincash:qzfqq29knsypt36lscwmrg38crxrqgn2kufnljzavh",
        src: "img/donationsQR.png",
        href: "https://blockchair.com/bitcoin-cash/address/qzfqq29knsypt36lscwmrg38crxrqgn2kufnljzavh",
      },
      copyright: `Donations - bitcoincash:qzfqq29knsypt36lscwmrg38crxrqgn2kufnljzavh`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
    googleAnalytics: {
      trackingID: process.env.GOOGLE_ANALYTICS_ID,
      // Optional fields.
      anonymizeIP: true, // Should IPs be anonymized?
    },
    gtag: {
      // You can also use your "G-" Measurement ID here.
      trackingID: process.env.GOOGLE_ANALYTICS_ID,
      // Optional fields.
      anonymizeIP: true, // Should IPs be anonymized?
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/JeremyEllingham/bitcoincashpodcast-v2",
        },
        blog: {
          showReadingTime: true,
          editUrl: "https://github.com/JeremyEllingham/bitcoincashpodcast-v2",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "faqs",
        path: "faqs",
        routeBasePath: "faqs",
        sidebarPath: require.resolve("./sidebars.js"), //sidebarsFaqs.js
      },
    ],
    [
      "docusaurus2-dotenv",
      {
        systemvars: true,
      },
    ],
  ],
};
