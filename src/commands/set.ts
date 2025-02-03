import { config } from '..'
import { log } from '../log.js'
import {
  get as DynamicConfigGet,
  set as DynamicConfigSet,
  defaultValues,
  DefaultValuesKeys,
} from '../utils/dynamic-config.js'

export const set = (key: string, value?: string) => {
  if (key == 'version') {
    console.log(config.brands[DynamicConfigGet('brand')].release.displayVersion)
    return
  }

  if (!(key in defaultValues)) {
    log.warning(`The key ${key} is not found within the dynamic config options`)
    return
  }

  if (value) {
    DynamicConfigSet(key as DefaultValuesKeys, value)
    log.info(`Set ${key} to ${value}`)
    return
  }

  console.log(DynamicConfigGet(key as DefaultValuesKeys))
}
