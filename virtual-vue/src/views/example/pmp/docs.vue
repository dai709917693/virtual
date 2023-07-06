<script setup lang="ts">
import DocIcon from '@/components/icon/doc.vue'
import CheckListIcon from '@/components/icon/checkList.vue'
import { plan, businessDocs, other, projectDocsCategories, NodeType, type Node } from './base'
const props = withDefaults(defineProps<{ nodes?: Node[]; interactive?: boolean }>(), {
  interactive: false
})

const showNodeList = ref<string[]>([])

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

function showNode(id: string) {
  showNodeList.value.push(id)
}
</script>
<template>
  <div class="docs-container" :class="[!nodes && 'show-all', interactive && 'interactive']">
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
              :class="[
                !projectDocsNode.includes(item) && 'doc-hidden',
                showNodeList.includes(item + key) && 'doc-show'
              ]"
              @click="showNode(item + key)"
            >
              <div class="doc-cont">
                <doc-icon :width="30" class="doc-icon"></doc-icon>
                {{ item }}
              </div>
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
          :class="[
            !businessDocsNode.includes(item) && 'doc-hidden',
            showNodeList.includes(item + key) && 'doc-show'
          ]"
          @click="showNode(item + key)"
        >
          <div class="doc-cont">
            <doc-icon :width="30" class="doc-icon"></doc-icon>
            {{ item }}
          </div>
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
          :class="[
            !otherNode.includes(item) && 'doc-hidden',
            showNodeList.includes(item + key) && 'doc-show'
          ]"
          @click="showNode(item + key)"
        >
          <div class="doc-cont">
            <doc-icon :width="30" class="doc-icon"></doc-icon>
            {{ item }}
          </div>
        </div>
      </el-card>
    </div>
    <div class="docs" :class="!planNode.length ? 'docs-hidden' : 'docs-highlight'">
      <div class="left-title">项目管理计划</div>
      <el-card class="doc-right" shadow="never">
        <div
          v-for="(item, index) in plan"
          :key="index"
          class="doc"
          :class="[
            !planNode.includes(item) && 'doc-hidden',
            showNodeList.includes(item + index) && 'doc-show'
          ]"
          @click="showNode(item + index)"
        >
          <div class="doc-cont">
            <check-list-icon :width="30" class="doc-icon"></check-list-icon>
            {{ item }}
          </div>
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

.interactive {
  .doc {
    cursor: pointer;
    position: relative;

    .doc-cont {
      padding-top: 5px;
      box-sizing: border-box;
      position: relative;
      background-color: #fff;
      height: 100%;
      transform: rotateY(180deg);
      transition: 0.3s;
      transform-style: preserve-3d;
      &:before {
        box-shadow: 0 8px 14px 0 rgba(0, 0, 0, 0.2);
        z-index: 10;
        content: '';
        display: block;
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background-color: #fff;
        transform: rotateY(180deg);
        backface-visibility: hidden;
      }
    }
    &:hover {
      .doc-cont {
        transform: rotateY(0deg);
      }
    }
  }
  .doc-show {
    .doc-cont {
      transform: rotateY(0deg);
    }
  }
}
.show-all {
  .docs-hidden {
    filter: none;
    opacity: 1;
  }
  .doc-hidden {
    filter: none;
    opacity: 1;
  }
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
  height: 95px;
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
</style>
