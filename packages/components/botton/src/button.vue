<script setup lang="ts">
import { computed } from 'vue'

import { createNamespace } from '@hsy/utils/create'
import type { IBotton } from './button'

defineOptions({
  name: 'h-button',
})

const bem = createNamespace('button')
const { type, size, round = '5px', tag = 'button' } = defineProps<IBotton>()

const style = computed(() => {
  return [bem.n(), bem.m(type), bem.m(size)]
})
</script>

<template>
  <component :is="tag" :class="style" :style="{ 'border-radius': round }">
    <slot></slot>
  </component>
</template>
