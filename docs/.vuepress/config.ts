import { viteBundler } from '@vuepress/bundler-vite'
import { webpackBundler } from '@vuepress/bundler-webpack'
import { defineUserConfig } from '@vuepress/cli'
import { docsearchPlugin } from '@vuepress/plugin-docsearch'
import { live2DCat } from 'vuepress-plugin-zenlive2d-cat'
import { pluginTabs } from '@snippetors/vuepress-plugin-tabs'
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { shikiPlugin } from '@vuepress/plugin-shiki'
import { defaultTheme } from '@vuepress/theme-default'
import { path } from '@vuepress/utils'
import { navbar, sidebar } from './configs'

const isProd = process.env.NODE_ENV === 'production'

export default defineUserConfig({
  base: '/',

  head: [
    ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: `/images/icons/favicon-16x16.png`,},],
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: `/images/icons/favicon-32x32.png`,},],
    ['link', { rel: 'manifest', href: '/manifest.webmanifest' }],
    ['meta', { name: 'application-name', content: 'VuePress' }],
    ['meta', { name: 'apple-mobile-web-app-title', content: 'VuePress' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },],
    ['link', { rel: 'apple-touch-icon', href: `/images/icons/apple-touch-icon.png` },],
    ['link', { rel: 'mask-icon',  href: '/images/icons/safari-pinned-tab.svg',  color: '#3eaf7c',},],
    ['meta', { name: 'msapplication-TileColor', content: '#3eaf7c' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
  ],

  // site-level locales config
  locales: {
    '/': {
      lang: 'vi',
      title: 'Zen Course Guide',
      description:
        'Môi trường học tập lý tưởng cho sinh viên Công Nghệ Thông Tin',
    },
  },

  bundler:
    // specify bundler via environment variable
    process.env.DOCS_BUNDLER === 'webpack' ? webpackBundler() : viteBundler(),

  theme: defaultTheme({
    logo: '/images/hero.png',
    lang: 'vi',
    repo: 'zenfection/zenctu',
    editLink: false,
    docsDir: 'docs',
    theme: 'dark',

    // theme-level locales config
    locales: {
      '/': {
        navbar: navbar.vi,
        sidebar: sidebar.vi,

        // page meta
        lastUpdatedText: 'Cập nhật lúc ',
        contributorsText: 'Tác giả',
      },
    },

    themePlugins: {
      // only enable git plugin in production mode
      git: isProd,
      // use shiki plugin in production mode instead
      prismjs: !isProd,
    },
  }),

  markdown: {
    importCode: {
      handleImportPath: (str) =>
        str.replace(
          /^@vuepress/,
          path.resolve(__dirname, '../../packages/@vuepress')
        ),
    },
  },

  plugins: [
    docsearchPlugin({
      appId: '3CJDV2AFXL',
      apiKey: '4f7f93d347463109c3b6fd21d3ac2424',
      indexName: 'ctuvn',
      placeholder: 'Tìm Kiếm...',
    }),
    googleAnalyticsPlugin({
      id: 'G-1GE3D8ZGM4',
    }),
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, './components'),
      components: {
        Comment: path.resolve(__dirname, './components/Comment.vue'),
      },
    }),
    // pluginTabs(),
    // live2DCat(),
    // pluginTabs(),
    // only enable shiki plugin in production mode
    //isProd ? shikiPlugin({ theme: 'dark-plus' }) : [],
  ],
})
