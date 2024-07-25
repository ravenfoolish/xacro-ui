import * as components from './components'

import type { App, Plugin } from 'vue'

export * from './components'

export const install = (app: App) => {
  Object.values(components).forEach((component) => {
    app.use(component as unknown as Plugin)
  })
}

export const version = '1.0.0'

export default {
  install,
  version
}
