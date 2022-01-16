import type {
  Plugin,
  PluginConfig,
  PluginFunction,
  PluginObject,
} from './plugin'

/**
 * Vuepress theme
 *
 * Theme is a special type of plugin, it should be rather:
 * - an object (`ThemeObject`)
 * - a function that returns an object (`ThemeFunction`)
 *
 * A theme package should have a `Theme` as the default export
 */
export type Theme<T extends ThemeConfig = ThemeConfig> = Plugin<T, ThemeObject>

/**
 * Vuepress theme function
 */
export type ThemeFunction<T extends ThemeConfig = ThemeConfig> = PluginFunction<
  T,
  ThemeObject
>

/**
 * Vuepress theme object
 */
export interface ThemeObject extends PluginObject {
  /**
   * Theme plugin should never be multiple
   */
  multiple?: false

  /**
   * Extended parent theme
   */
  extends?: string

  /**
   * Specify the layouts directory or components map
   */
  layouts?: string | Record<string, string>

  /**
   * Allow using plugins in theme
   */
  plugins?: PluginConfig[]

  /**
   * Allow overriding default templateBuild
   */
  templateBuild?: string

  /**
   * Allow overriding default templateDev
   */
  templateDev?: string
}

/**
 * Theme config to be used in user config file
 *
 * It will be used by a theme itself, but not by vuepress.
 *
 * Vuepress will only transfer this config to theme
 *
 * @remark suffix `Config` means this is for user config
 */
export type ThemeConfig = Record<string, any>

/**
 * Resolved theme info
 */
export interface ThemeInfo {
  /**
   * Layout components
   */
  layouts: Record<string, string>

  /**
   * Plugins, including theme itself and plugins used by theme
   */
  plugins: PluginObject[]

  /**
   * Default build template
   */
  templateBuild?: string

  /**
   * Default dev template
   */
  templateDev?: string
}
