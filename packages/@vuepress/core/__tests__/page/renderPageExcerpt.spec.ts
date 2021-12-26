import { createBaseApp, renderPageExcerpt } from '@vuepress/core'
import { createMarkdown } from '@vuepress/markdown'
import { path } from '@vuepress/utils'

const app = createBaseApp({
  source: path.resolve(__dirname, 'fake-source'),
  theme: path.resolve(__dirname, '../__fixtures__/themes/empty.js'),
})
app.markdown = createMarkdown()

describe('core > page > renderPageExcerpt', () => {
  it('should render page excerpt correctly', () => {
    const resolved = renderPageExcerpt({
      app,
      excerptRaw: 'foobar',
      frontmatter: {},
      filePath: null,
      filePathRelative: null,
    })

    expect(resolved).toBe('<p>foobar</p>\n')
  })
})
