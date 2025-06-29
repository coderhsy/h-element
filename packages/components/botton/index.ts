import { withInstall, withType } from '@hsy/utils/withInstall'

export * from './src/button'

import _button from './src/button.vue'

const HButton: withType<typeof _button> = withInstall(_button)

export default HButton

declare module 'vue' {
  export interface GlobalComponents {
    //会自动合并
    HButton: typeof HButton
  }
}
