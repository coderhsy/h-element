<script setup lang="ts">
import { computed, useTemplateRef } from 'vue'

import HIcon from '@hsy/components/icon'
import { createNamespace } from '@hsy/utils/create'
import LoadingVue from './loading.vue'
import type { IButton, IButtonEmit } from './button'

defineOptions({
  name: 'h-button',
})

const buttonRef = useTemplateRef('_ref')

const bem = createNamespace('button')
const {
  type,
  size = 'default',
  round = '5px',
  tag = 'button',
  loading,
  icon,
  iconColor,
  loadingIcon = LoadingVue,
  disabled,
} = defineProps<IButton>()

const emit = defineEmits<IButtonEmit>()

const style = computed(() => {
  return [
    bem.n(),
    bem.m(type),
    bem.m(size),
    bem.is('disabled', disabled || loading),
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
function handleClick(e: Event) {
  if (disabled || loading) {
    e.stopPropagation()
    return
  }
  emit('click', e)
}

defineExpose({
  disabled,
  buttonRef,
  loading,
})
</script>

<template>
  <component
    v-bind="_props"
    :is="tag"
    :class="style"
    :style="{ 'border-radius': round }"
    ref="_ref"
    @click="handleClick"
  >
    <template v-if="loading">
      <!-- $slots.loading 是否实现了loading插槽 -->
      <slot v-if="$slots.loading" name="loading"></slot>
      <h-icon v-else :color="iconColor" :class="bem.is('loading', loading)">
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
