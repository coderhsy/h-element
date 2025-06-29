<script setup lang="ts">
// import { Alarm } from '@vicons/ionicons5'
import { ElButton, ElText } from 'element-plus'
import HButton from '@hsy/components/botton'
</script>

<template>
  <div class="app">
    <!-- <h-icon :color="'pink'" :size="30">
      <Alarm />
    </h-icon> -->
    <div class="box">
      <h-text type="primary">
        The -webkit-line-clamp CSS property allows limiting of the contents of a
        block to the specified number of lines.</h-text
      >
      <el-text type="primary">
        The -webkit-line-clamp CSS property allows limiting of the contents of a
        block to the specified number of lines.</el-text
      >
      <h-button type="primary">Hello world</h-button>
      <el-button type="primary">Hello world</el-button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.box {
  width: 200px;
}
</style>
