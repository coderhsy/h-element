import { withInstall, withType } from '@hsy/utils/withInstall'

export * from './src/text'

import _Text from './src/text.vue'

const HText: withType<typeof _Text> = withInstall(_Text)
export default HText

declare module 'vue' {
  export interface GlobalComponents {
    //会自动合并
    HText: typeof HText
  }
}
