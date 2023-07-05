<script setup lang="ts">
import DocIcon from '@/components/icon/doc.vue'
import CheckListIcon from '@/components/icon/checkList.vue'
import { plan, businessDocs, other, projectDocsCategories, NodeType, type Node } from './base'
const props = defineProps<{ nodes: Node[] }>()

const otherNode = ref<string[]>([])
const projectDocsNode = ref<string[]>([])
const businessDocsNode = ref<string[]>([])
const planNode = ref<string[]>([])

watch(
  () => props.nodes,
  () => {
    otherNode.value = []
    projectDocsNode.value = []
    businessDocsNode.value = []
    planNode.value = []

    props.nodes?.forEach((node) => {
      switch (node.type) {
        case NodeType.BusinessDoc:
          Object.entries(businessDocs).forEach(([key, value]) => {
            businessDocsNode.value.push(value)
          })
          break
        case NodeType.ProjectDoc:
          node.value?.forEach((item) => {
            projectDocsNode.value.push(item)
          })
          break
        case NodeType.Other:
          node.value?.forEach((item) => {
            otherNode.value.push(item)
          })
          break
        case NodeType.Plan:
          node.value?.forEach((item) => {
            planNode.value.push(item)
          })
          break
      }
    })
  },
  {
    immediate: true
  }
)

function exist(origins: string[], targets: string[]) {
  return origins.some((origin) => {
    return targets.includes(origin)
  })
}
</script>
<template>
  <div class="docs-container">
    <div class="docs" :class="!projectDocsNode.length ? 'docs-hidden' : 'docs-highlight'">
      <div class="left-title">项目文件</div>
      <div class="doc-right second-docs">
        <div
          class="docs"
          v-for="(category, index) in projectDocsCategories"
          :key="index"
          :class="!exist(category.value, projectDocsNode) ? 'docs-hidden' : 'docs-highlight'"
        >
          <div class="left-title">{{ category.label }}</div>
          <el-card class="doc-right" shadow="never">
            <div
              v-for="(item, key) in category.value"
              :key="key"
              class="doc"
              :class="!projectDocsNode.includes(item) && 'doc-hidden'"
            >
              <doc-icon :width="30" class="doc-icon"></doc-icon>
              {{ item }}
            </div>
          </el-card>
        </div>
      </div>
    </div>
    <div class="docs" :class="!businessDocsNode.length ? 'docs-hidden' : 'docs-highlight'">
      <div class="left-title">商业文件</div>
      <el-card class="doc-right" shadow="never">
        <div
          v-for="(item, key) in businessDocs"
          :key="key"
          class="doc"
          :class="!businessDocsNode.includes(item) && 'doc-hidden'"
        >
          <doc-icon :width="30" class="doc-icon"></doc-icon>
          {{ item }}
        </div>
      </el-card>
    </div>
    <div class="docs" :class="!otherNode.length ? 'docs-hidden' : 'docs-highlight'">
      <div class="left-title">其他</div>
      <el-card class="doc-right" shadow="never">
        <div
          v-for="(item, key) in other"
          :key="key"
          class="doc"
          :class="!otherNode.includes(item) && 'doc-hidden'"
        >
          <doc-icon :width="30" class="doc-icon"></doc-icon>
          {{ item }}
        </div>
      </el-card>
    </div>
    <div class="docs" :class="!planNode.length ? 'docs-hidden' : 'docs-highlight'">
      <div class="left-title">项目管理计划</div>
      <el-card class="doc-right" shadow="never">
        <div
          v-for="(item, index) in plan"
          :key="index"
          class="plan"
          :class="!planNode.includes(item) && 'doc-hidden'"
        >
          <check-list-icon :width="30" class="plan-icon"></check-list-icon>
          {{ item }}
        </div>
      </el-card>
    </div>
  </div>
</template>
<style scoped lang="scss">
.docs-container {
  transform: scale(0.7);
  transform-origin: 50% 0;
}
.docs {
  width: 1000px;
  display: flex;
  box-sizing: border-box;
}

.docs-hidden {
  filter: blur(10px);
  opacity: 0.3;

  .doc-hidden,
  .docs-hidden {
    filter: none;
    opacity: 1;
  }
}
.docs-highlight {
  box-shadow: 0px 0px 20px 1px #ffbb766c;
  //   border: 1px solid rgba(255, 255, 255, 0.454);
}
.doc-hidden {
  filter: blur(10px);
  opacity: 0.3;
}
.left-title {
  width: 60px;
  box-sizing: border-box;
  padding: 10px 20px;
  overflow: hidden;
  //   box-shadow: -3px 0px 12px rgba(0, 0, 0, 0.12);
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
  font-size: 18px;
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

.plan {
  float: left;
  margin: 5px;
  width: 80px;
  height: 90px;
  text-align: center;
  color: #333;
  font-size: 18px;
  .plan-icon {
    margin: 0 auto 10px;
  }
}
</style>
