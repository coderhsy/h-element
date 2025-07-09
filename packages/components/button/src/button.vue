<script setup lang="ts">
import { computed, watch } from 'vue'

import HIcon from '@hsy/components/icon'
import { createNamespace } from '@hsy/utils/create'
import LoadingVue from './loading.vue'
import type { IBotton } from './button'

defineOptions({
  name: 'h-button',
})

const bem = createNamespace('button')
const {
  type,
  size,
  round = '5px',
  tag = 'button',
  loading,
  icon,
  iconColor,
  loadingIcon = LoadingVue,
  disabled,
} = defineProps<IBotton>()

const style = computed(() => {
  return [
    bem.n(),
    bem.m(type),
    bem.m(size),
    bem.is('loading', loading),
    bem.is('disables', disabled),
  ]
})

const _props = computed(() => {
  if (tag === 'button') {
    return {
      disabled: disabled || loading,
    }
  }
  return {}
})
</script>

<template>
  <component
    v-bind="_props"
    :is="tag"
    :class="style"
    :style="{ 'border-radius': round }"
  >
    <template v-if="loading">
      <!-- $slots.loading 是否实现了loading插槽 -->
      <slot v-if="$slots.loading" name="loading"></slot>
      <h-icon v-else :color="iconColor">
        <component :is="loadingIcon"></component>
      </h-icon>
    </template>
    <h-icon v-else-if="icon || $slots.icon" :color="iconColor">
      <component :is="icon"></component>
      <slot name="icon"></slot>
    </h-icon>
    <slot></slot>
  </component>
</template>
