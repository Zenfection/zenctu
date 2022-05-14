import type { App } from '@vuepress/core'
import type * as Config from 'webpack-chain'
import type { WebpackBundlerOptions } from '../types'
import { handleModuleAssets } from './handleModuleAssets'
import { handleModuleJs } from './handleModuleJs'
import { handleModulePug } from './handleModulePug'
import { handleModuleStyles } from './handleModuleStyles'
import { handleModuleTs } from './handleModuleTs'
import { handleModuleVue } from './handleModuleVue'

/**
 * Set webpack module
 */
export const handleModule = ({
  app,
  options,
  config,
  isBuild,
  isServer,
}: {
  app: App
  options: WebpackBundlerOptions
  config: Config
  isBuild: boolean
  isServer: boolean
}): void => {
  // noParse
  config.module.noParse(
    /(^(vue|vue-router|vuex|vuex-router-sync)$)|(^@vue\/[^/]*$)/
  )

  // vue files
  handleModuleVue({ app, options, config, isServer })

  // pug files, for templates
  handleModulePug({ config })

  // images & media & fonts
  handleModuleAssets({ app, config })

  // js files
  handleModuleJs({ options, config, isBuild, isServer })

  // ts files
  handleModuleTs({ app, config })

  // styles files
  handleModuleStyles({ app, options, config, isBuild, isServer })
}
