<script setup lang="ts">
import { progress } from './progress'
import Docs from './docs.vue'
import { ProgressGroupName, knowledgeArea, progressGroup } from './base'
import CoverCard from '@/components/card/cover.vue'
/** 都说环境塑造人，那就~改回书房吧 */
/** 编程已不仅是职业 */
/** 不是电脑而是屏幕替代了我的想象力 */

const curKnowledgeIndex = ref(0)
const progressGroupIndex = ref(ProgressGroupName.Startup)
const progressIndex = ref(0)
const curProgress = computed(() => {
  return progress[curKnowledgeIndex.value]?.[progressGroupIndex.value]?.[progressIndex.value]
})

function handleKnowledgeChange() {
  progressGroupIndex.value = Object.entries(progress[curKnowledgeIndex.value])[0][0] as any
  progressIndex.value = 0
}

function handleProgressGroupChange() {
  progressIndex.value = 0
}
</script>
<template>
  <div class="container">
    <cover-card class="menu">
      <template #cover>
        <div class="detail">
          项目{{ knowledgeArea[curKnowledgeIndex] }}管理
          <div>{{ progressGroup[progressGroupIndex] }}过程组</div>
          <div>
            {{ curProgress?.title }}
          </div>
        </div>
      </template>
      <el-form class="form">
        <el-form-item>
          <el-radio-group v-model="curKnowledgeIndex" @change="handleKnowledgeChange">
            <el-radio-button
              v-for="(item, index) in knowledgeArea"
              :key="item"
              :label="index"
              :disabled="index >= progress.length"
              >{{ item }}</el-radio-button
            >
          </el-radio-group>
        </el-form-item>
        <el-form-item>
          <el-radio-group v-model="progressGroupIndex" @change="handleProgressGroupChange">
            <el-radio-button
              v-for="(item, key) in progressGroup"
              :key="item"
              :label="key"
              :disabled="!progress[curKnowledgeIndex][key]"
              >{{ item }}</el-radio-button
            >
          </el-radio-group>
        </el-form-item>
        <el-form-item>
          <el-radio-group v-model="progressIndex">
            <el-radio-button
              v-for="(item, index) in progress[curKnowledgeIndex]?.[progressGroupIndex]"
              :key="item"
              :label="index"
              >{{ item.title }}</el-radio-button
            >
          </el-radio-group>
        </el-form-item>
      </el-form>
    </cover-card>

    <div class="box-container">
      <div class="box">
        <el-card class="box-title">输入</el-card>
        <docs :nodes="curProgress?.input"></docs>
      </div>
      <div class="box">
        <el-card class="box-title">输出</el-card>
        <docs :nodes="curProgress?.output"></docs>
      </div>
    </div>
  </div>
  <docs :interactive="true"></docs>
</template>
<style scoped lang="scss">
.container {
}
.menu {
  width: 800px;
  height: 150px;
  margin: 0 auto 20px;
}
.detail {
  color: #fff;
  text-align: center;
  font-size: 30px;
  font-weight: bold;
  line-height: 1.5;
}
.form {
  padding: 10px;
}
.box-container {
  width: 100%;
  display: flex;
  overflow: hidden;
}
.box-title {
  width: 700px;
  font-size: 20px;
  text-align: center;
}
.box {
  width: 50%;
  height: 800px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
