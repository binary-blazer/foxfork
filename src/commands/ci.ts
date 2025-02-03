// Code to handle common, complex tasks that our CI servers have to do to get
// ready to build everything

import { inc, ReleaseType } from 'semver'
import { config } from '..'
import { log } from '../log.js'
import { set, get } from '../utils/dynamic-config.js'
import { saveConfig } from '../utils/config.js'

interface Options {
  brand?: string
  bump?: ReleaseType
  displayVersion?: string
}

export const ci = (options: Options) => {
  log.info('Set the build to release')
  set('buildMode', 'release')

  if (options.brand) {
    log.info(`Setting the brand to be '${options.brand}'`)
    set('brand', options.brand)
  }

  if (options.bump) {
    const oldVersion = config.brands[get('brand')].release.displayVersion
    const version = inc(
      config.brands[get('brand')].release.displayVersion,
      options.bump
    )

    config.brands[get('brand')].release.displayVersion =
      version || config.brands[get('brand')].release.displayVersion
    saveConfig()

    log.info(`Bumped the version: ${oldVersion} → ${version}`)
  }

  if (options.displayVersion) {
    config.brands[get('brand')].release.displayVersion =
      options.displayVersion ||
      config.brands[get('brand')].release.displayVersion
    saveConfig()

    log.info(
      `Loaded version: ${
        config.brands[get('brand')].release.displayVersion
      } → ${options.displayVersion}`
    )
  }
}
