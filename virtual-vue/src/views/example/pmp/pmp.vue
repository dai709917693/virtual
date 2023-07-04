<script setup lang="ts">
import { progress } from './progress'
import DocIcon from '@/components/icon/doc.vue'
import CheckListIcon from '@/components/icon/checkList.vue'
import { projectDocs, plan, businessDocs, other, projectDocsCategories } from './base'
/** 都说环境塑造人，那就~改回书房吧 */
/** 编程已不仅是职业 */
/** 屏幕替代了我的想象力，不是电脑 */

console.log(progress)
</script>
<template>
  <div></div>
  <!-- <div class="docs">
    <div class="left-title">项目文件</div>
    <el-card class="doc-right">
      <div v-for="(item, key) in projectDocs" :key="key" class="doc">
        <doc-icon :width="30" class="doc-icon"></doc-icon>
        {{ item }}
      </div>
    </el-card>
  </div> -->
  <div class="docs">
    <div class="left-title">项目文件</div>
    <div class="doc-right second-docs">
      <div class="docs" v-for="(category, index) in projectDocsCategories" :key="index">
        <div class="left-title">{{ category.label }}</div>
        <el-card class="doc-right">
          <div v-for="(item, key) in category.value" :key="key" class="doc">
            <doc-icon :width="30" class="doc-icon"></doc-icon>
            {{ item }}
          </div>
        </el-card>
      </div>
    </div>
  </div>
  <div class="docs">
    <div class="left-title">商业文件</div>
    <el-card class="doc-right">
      <div v-for="(item, key) in businessDocs" :key="key" class="doc">
        <doc-icon :width="30" class="doc-icon"></doc-icon>
        {{ item }}
      </div>
    </el-card>
  </div>
  <div class="docs">
    <div class="left-title">其他</div>
    <el-card class="doc-right">
      <div v-for="(item, key) in other" :key="key" class="doc">
        <doc-icon :width="30" class="doc-icon"></doc-icon>
        {{ item }}
      </div>
    </el-card>
  </div>
  <div class="docs">
    <div class="left-title">项目管理计划</div>
    <el-card class="doc-right">
      <div v-for="(item, index) in plan" :key="index" class="plan">
        <check-list-icon :width="30" class="plan-icon"></check-list-icon>
        {{ item }}
      </div>
    </el-card>
  </div>
</template>
<style scoped lang="scss">
.left-title {
  width: 60px;
  box-sizing: border-box;
  padding: 10px 20px;
  overflow: hidden;
  box-shadow: -3px 0px 12px rgba(0, 0, 0, 0.12);
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  display: flex;
  align-items: center;
  color: #333;
  font-size: 20px;
  font-weight: bold;
  border: 1px solid #e4e7ed;
  border-right: none;
}
.doc {
  float: left;
  margin: 5px;
  width: 80px;
  height: 80px;
  text-align: center;
  color: #333;
  .doc-icon {
    margin: 0 auto 10px;
  }
}
.second-docs {
  display: flex;
  flex-flow: row wrap;
  .docs {
    width: 50%;
  }
}
.doc-right {
  flex: 1;
  :deep(.el-card__body) {
    padding: 5px;
    &:after {
      content: '';
      display: block;
      height: 0;
      clear: both;
    }
  }
}
.docs {
  width: 80%;
  margin: auto;
  display: flex;
}
.plan {
  float: left;
  margin: 5px;
  width: 80px;
  height: 90px;
  text-align: center;
  color: #333;
  .plan-icon {
    margin: 0 auto 10px;
  }
}
</style>
