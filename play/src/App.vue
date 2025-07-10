<script setup lang="ts">
// import { Alarm } from '@vicons/ionicons5'
import { ElButton, ElText } from 'element-plus'
import { HButton } from '@hsy/components'
import { Alarm } from '@vicons/ionicons5'

function buttonClick(e: MouseEvent) {
  console.log(e.button)
}
</script>

<template>
  <div class="app">
    <!-- <h-icon :color="'pink'" :size="30">
      <Alarm />
    </h-icon> -->
    <!-- <component :is="Alarm"></component> -->
    <div class="box">
      <h-text :line-clamp="2" :truncated="true">
        The -webkit-line-clamp CSS property allows limiting of the contents of a
        block to the specified number of lines.</h-text
      >
      <el-text type="primary">
        The -webkit-line-clamp CSS property allows limiting of the contents of a
        block to the specified number of lines.</el-text
      >
      <h-button type="primary" size="large" style="margin-bottom: 30px"
        >Hello worldaaaaaaaaaaaaaa</h-button
      >
      <el-button type="primary" size="default">loaaaaaaaaaaaaaaaaaaa</el-button>
      <h-button type="mypink" size="default" style="margin-left: 10px">
        aa
      </h-button>
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
