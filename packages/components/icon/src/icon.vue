<script setup lang="ts">
import { createNamespace } from "@hsy/utils/create";
import type { IconProps } from "./icon";
import { computed } from "vue";

const bem = createNamespace("icon");

// 定义组件名字
defineOptions({
  name: "h-icon",
});

const { color, size = 16 } = defineProps<IconProps>();

const style = computed(() => {
  if (!size && !color) return {};
  return {
    color: `${color}`,
    fontSize: `${size}px`,
  };
});
</script>

<template>
  <div class="icon">
    <i :class="bem.n()" :style="style">
      <!-- {{ $attrs }} -->
      <slot />
    </i>
  </div>
</template>

<style scoped lang="sass"></style>
