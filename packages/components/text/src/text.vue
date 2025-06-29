<script setup lang="ts">
import { computed } from 'vue'

import type { ITextProps } from './text'
import { createNamespace } from '@hsy/utils/create'
import { isUndefined } from '@hsy/utils'

defineOptions({
  name: 'h-text',
})

const bem = createNamespace('text')

const {
  type = '',
  size,
  tag = 'span',
  truncated = false,
  lineClamp,
} = defineProps<ITextProps>()

const style = computed(() => {
  return [
    bem.n(),
    bem.m(type),
    bem.m(size),
    bem.is('truncated', truncated),
    bem.is('line-clamp', !isUndefined(lineClamp)),
  ]
})
</script>

<template>
  <component
    :is="tag"
    :class="style"
    :style="{
      '-webkit-line-clamp': lineClamp,
      'font-size': typeof size === 'string' ? size + 'px' : '',
    }"
  >
    <slot />
  </component>
</template>
