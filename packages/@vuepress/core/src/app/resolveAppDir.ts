import { path } from '@vuepress/utils'
import type { AppDir, AppDirFunction, AppOptions } from '../types'

/**
 * Create directory util function
 */
export const createAppDirFunction = (baseDir: string): AppDirFunction => {
  return (...args: string[]): string => path.resolve(baseDir, ...args)
}

/**
 * Resolve directory utils for vuepress app
 */
export const resolveAppDir = (options: AppOptions): AppDir => {
  const cache = createAppDirFunction(options.cache)
  const temp = createAppDirFunction(options.temp)
  const source = createAppDirFunction(options.source)
  const dest = createAppDirFunction(options.dest)
  const publicDir = createAppDirFunction(options.public)

  // @vuepress/client
  const client = createAppDirFunction(
    path.resolve(require.resolve('@vuepress/client/package.json'), '..')
  )

  return {
    cache,
    temp,
    source,
    dest,
    client,
    public: publicDir,
  }
}
