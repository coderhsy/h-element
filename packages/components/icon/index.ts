// 导出组件 最终实现直接调用组件

import { withInstall, withType } from '@hsy/utils/withInstall'
import _Icon from './src/icon.vue'
// 导出类型
export * from './src/icon'

const HIcon: withType<typeof _Icon> = withInstall(_Icon) //可通过app.use来使用，也可以单独调用组件来使用
export { HIcon }
export default HIcon

// 定义全局类型以便我们使用模板有类型提示
declare module 'vue' {
  export interface GlobalComponents {
    //会自动合并
    HIcon: typeof HIcon
  }
}
