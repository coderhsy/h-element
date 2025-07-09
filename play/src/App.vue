<script setup lang="ts">
// import { Alarm } from '@vicons/ionicons5'
import { ElButton, ElText } from 'element-plus'
import { HButton } from '@hsy/components'
import { Alarm } from '@vicons/ionicons5'
</script>

<template>
  <div class="app">
    <!-- <h-icon :color="'pink'" :size="30">
      <Alarm />
    </h-icon> -->
    <!-- <component :is="Alarm"></component> -->
    <div class="box">
      <h-text>
        The -webkit-line-clamp CSS property allows limiting of the contents of a
        block to the specified number of lines.</h-text
      >
      <el-text type="primary">
        The -webkit-line-clamp CSS property allows limiting of the contents of a
        block to the specified number of lines.</el-text
      >
      <h-button type="primary" style="margin-bottom: 30px"
        >Hello world</h-button
      >
      <el-button type="primary">Hello world</el-button>
      <h-button type="mypink" :loading="true"> </h-button>
      <div class="item"></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.box {
  /* display: flex; */
  margin: 100px auto;
  width: 200px;
  .item {
    background-color: black;
    width: 100px;
    height: 100px;
    margin-top: 0.5333rem;
  }
}
</style>
