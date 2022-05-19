import avuxiMap from './map.js'
import avuxiLse from './lse.js'

const install = function (Vue, opt = {}) {
  if (install.installed) return

  Vue.component(avuxiMap.name, avuxiMap)
  Vue.component(avuxiLse.name, avuxiLse)
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  avuxiMap,
  avuxiLse,
  install
}