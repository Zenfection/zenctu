import { loadUserConfigCjs } from '@vuepress/cli'
import { path } from '@vuepress/utils'

const jsCases: [string, any][] = [
  [
    path.resolve(__dirname, '../__fixtures__/config/js/.vuepress/config.js'),
    {
      description: 'hello from .vuepress/config.js',
    },
  ],
  [
    path.resolve(__dirname, '../__fixtures__/config/js/vuepress.config.js'),
    {
      description: 'hello from vuepress.config.js',
    },
  ],
]

const cjsCases: [string, any][] = [
  [
    path.resolve(__dirname, '../__fixtures__/config/cjs/.vuepress/config.cjs'),
    {
      description: 'hello from .vuepress/config.cjs',
    },
  ],
  [
    path.resolve(__dirname, '../__fixtures__/config/cjs/vuepress.config.cjs'),
    {
      description: 'hello from vuepress.config.cjs',
    },
  ],
]

// Notice: ts-jest allows us to require ts files directly,
// and we need to do something similar to make it work in actual use
const tsCases: [string, any][] = [
  [
    path.resolve(__dirname, '../__fixtures__/config/ts/.vuepress/config.ts'),
    {
      description: 'hello from .vuepress/config.ts',
    },
  ],
  [
    path.resolve(__dirname, '../__fixtures__/config/ts/vuepress.config.ts'),
    {
      description: 'hello from vuepress.config.ts',
    },
  ],
]

describe('cli > config > loadUserConfigEs', () => {
  describe('should load js config file correctly', () => {
    jsCases.forEach(([source, expected]) => {
      it(JSON.stringify(source), async () => {
        const config = await loadUserConfigCjs(source)
        expect(config).toEqual(expected)
      })
    })
  })

  describe('should load cjs config file correctly', () => {
    cjsCases.forEach(([source, expected]) => {
      it(JSON.stringify(source), async () => {
        const config = await loadUserConfigCjs(source)
        expect(config).toEqual(expected)
      })
    })
  })

  describe('should load ts config file correctly', () => {
    tsCases.forEach(([source, expected]) => {
      it(JSON.stringify(source), async () => {
        const config = await loadUserConfigCjs(source)
        expect(config).toEqual(expected)
      })
    })
  })
})
