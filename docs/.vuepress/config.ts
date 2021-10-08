import { defineUserConfig } from '@vuepress/cli'
import type { DefaultThemeOptions } from '@vuepress/theme-default'
import { path } from '@vuepress/utils'
import { navbar, sidebar } from './configs'

const isProd = process.env.NODE_ENV === 'production'

export default defineUserConfig<DefaultThemeOptions>({
  base: '/',
  head: [
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: `/images/icons/favicon-16x16.png`,
      },
    ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: `/images/icons/favicon-32x32.png`,
      },
    ],
    ['link', { rel: 'manifest', href: '/manifest.webmanifest' }],
    ['meta', { name: 'application-name', content: 'ZenCTU' }],
    ['meta', { name: 'apple-mobile-web-app-title', content: 'ZenCTU' }],
    [
      'meta',
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
    ],
    [
      'link',
      { rel: 'apple-touch-icon', href: `/images/icons/apple-touch-icon.png` },
    ],
    ['link', { rel: 'mask-icon', href: '/images/icons/safari-pinned-tab.svg' }],
    ['meta', { name: 'msapplication-TileColor', content: '#06bdf8' }],
    ['meta', { name: 'theme-color', content: '#06bdf8' }],
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
    process.env.DOCS_BUNDLER ??
    // use vite in dev, use webpack in prod
    (isProd ? '@vuepress/webpack' : '@vuepress/vite'),

  themeConfig: {
    logo: '/images/hero.png',
    lang: 'vi',
    docsRepo: 'zenfection/zenctu',
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
    themePlugins: { git: isProd },
  },

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
    // ['@vuepress/plugin-debug'],
    [
      '@vuepress/plugin-docsearch',
      {
        appId: '3CJDV2AFXL',
        apiKey: '4f7f93d347463109c3b6fd21d3ac2424',
        indexName: 'ctuvn',
        placeholder: 'Tìm Kiếm...',
      },
    ],
    ['@vuepress/plugin-google-analytics', { id: 'G-1GE3D8ZGM4' }],
    ['@vuepress/plugin-pwa'],
    // [
    //   '@vuepress/plugin-pwa-popup',
    //   {
    //     locales: {
    //       '/': { message: 'Phiên bản mới đã lên', buttonText: 'Update!!!' },
    //     },
    //   },
    // ],
    [
      '@vuepress/plugin-register-components',
      { componentsDir: path.resolve(__dirname, './components') },
    ],
    ['vuepress-plugin-zenlive2d-cat'],
    ['@snippetors/vuepress-plugin-tabs']
  ],
})
