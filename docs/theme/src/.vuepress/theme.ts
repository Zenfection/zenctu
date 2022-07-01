import { hopeTheme } from "vuepress-theme-hope";
import { viNavbarConfig } from "./navbar";
import { viSidebarConfig } from "./sidebar";

const hostname =
  process.env.HOSTNAME || "https://ctu.zenfection.com";

export default hopeTheme({
  hostname,

  author: {
    name: "Zenfection",
    url: "https://ctu.zenfection.com",
  },

  iconAssets: "iconfont",
  repo: "zenfection/zenctu",
  docsDir: "docs/theme/src",
  logo: "/logo.svg",
  editLink: false,

  footer: "MIT Licensed | Copyright © 2021-Zenfection",
  copyright: false,
  displayFooter: true,

  pageInfo: ["Category", "Tag", "ReadingTime"],

  blog: {
    name: "VuePress Theme Hope",
  },

  themeColor: {
    blue: "#2196f3",
    red: "#f26d6d",
    green: "#3eaf7c",
    orange: "#fb9b5f",
  },
  fullscreen: true,

  locales: {
    "/": {
      navbar: viNavbarConfig,
      sidebar: viSidebarConfig,
    },
  },

  plugins: {
    blog: true,

    components: ["Badge", "CodePen", "PDF", "StackBlitz", "YouTube"],
    comment: {
      provider: "Giscus",
      repo: "zenfection/ctu",
      repoId: "MDEwOlJlcG9zaXRvcnkzNjU0MDA4MzQ=",
      category: "Announcements",
      categoryId: "DIC_kwDOFceTAs4CP9Wu",
    },

    copyright: true,
    mdEnhance: {
      container: true,
      tabs: true,
      codetabs: true,
      sub: true,
      sup: true,
      attrs: true,
      footnote: true,
      mark: true,
      tasklist: true,
      imageMark: true,
      imageSize: true,
      tex: true,
      demo: true,
    },

    pwa: {
      update: "hint",
      favicon: "/favicon.ico",
      themeColor: "#46bd87",
      appendBase: true,
      apple: {
        icon: "/assets/icon/apple-icon-152.png",
        statusBarColor: "black",
      },
      msTile: {
        image: "/assets/icon/ms-icon-144.png",
        color: "#ffffff",
      },
      manifest: {
        icons: [
          {
            src: "/assets/icon/chrome-mask-512.png",
            sizes: "512x512",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-mask-192.png",
            sizes: "192x192",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-192.png",
            sizes: "192x192",
            type: "image/png",
          },
        ],
        shortcuts: [
          {
            name: "Guide",
            short_name: "Guide",
            url: "/guide/",
            icons: [
              {
                src: "/assets/icon/guide-maskable.png",
                sizes: "192x192",
                purpose: "maskable",
                type: "image/png",
              },
              {
                src: "/assets/icon/guide-monochrome.png",
                sizes: "192x192",
                purpose: "monochrome",
                type: "image/png",
              },
            ],
          },
          {
            name: "Config",
            short_name: "Config",
            url: "/config/",
            icons: [
              {
                src: "/assets/icon/config-maskable.png",
                sizes: "192x192",
                purpose: "maskable",
                type: "image/png",
              },
              {
                src: "/assets/icon/config-monochrome.png",
                sizes: "192x192",
                purpose: "monochrome",
                type: "image/png",
              },
            ],
          },
          {
            name: "Cookbook",
            short_name: "Cookbook",
            url: "/cookbook/",
            icons: [
              {
                src: "/assets/icon/basic-maskable.png",
                sizes: "192x192",
                purpose: "maskable",
                type: "image/png",
              },
              {
                src: "/assets/icon/basic-monochrome.png",
                sizes: "192x192",
                purpose: "monochrome",
                type: "image/png",
              },
            ],
          },
        ],
      },
    },
    // seo:
    //   hostname === "https://vuepress-theme-hope.github.io"
    //     ? {}
    //     : { canonical: "https://vuepress-theme-hope.github.io/v2/" },
  },
});
