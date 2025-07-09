<template>
  <div class="loading-spinner">
    <svg viewBox="0 0 48 48">
      <circle
        class="loading-circle"
        cx="24"
        cy="24"
        r="20"
        stroke-width="4"
        fill="none"
        stroke-linecap="round"
      />
    </svg>
  </div>
</template>

<script setup>
// 无需props，直接使用
</script>

<style scoped>
.loading-spinner {
  display: inline-block;
  width: 48px;
  height: 48px;
}

svg {
  animation: rotate 1.5s linear infinite;
}

.loading-circle {
  stroke: white; /* 蓝色 */
  stroke-dasharray: 150, 200;
  stroke-dashoffset: 0;
  animation: dash 1.5s ease-in-out infinite;
}

@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}

@keyframes dash {
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 200;
    stroke-dashoffset: -35;
  }
  100% {
    stroke-dasharray: 90, 200;
    stroke-dashoffset: -124;
  }
}
</style>
