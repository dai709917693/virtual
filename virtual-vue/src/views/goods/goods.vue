<script setup lang="ts">
import { RouterView } from 'vue-router'
import router from '@/router'
const panes = [
  {
    label: '商品',
    name: 'skuList'
  }
]

const activeTabName = ref(panes[0].name)
function click() {
  router.push({ name: activeTabName.value })
}
</script>
<template>
  <div class="container">
    <el-tabs v-model="activeTabName" type="card" class="demo-tabs" @tab-click="click">
      <el-tab-pane
        v-for="(item, index) in panes"
        :key="index"
        :label="item.label"
        :name="item.name"
      >
      </el-tab-pane>
    </el-tabs>
    <div class="content">
      <RouterView></RouterView>
    </div>
  </div>
</template>
<style scoped lang="scss">
.container {
  width: 1000px;
  height: 100%;
  padding: 100px 0;
  margin: auto;
}
.content {
  background-color: #fff;
  height: 600px;
  border: 1px solid #eee;
}
</style>
