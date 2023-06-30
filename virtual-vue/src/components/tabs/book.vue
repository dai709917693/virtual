<script setup lang="ts">
defineProps<{ pages: any[] }>()

const pageThickness = 2
const curPage = ref(0)
const endDeg = 180

function next(index: number) {
  curPage.value = index + 1
}

function back(index: number) {
  curPage.value = index
}

function frontStyle(itemIndex: number) {
  // 0~-100
  let zIndex = -itemIndex * 2
  let transform = 'rotateX(10deg)'
  if (itemIndex < curPage.value) {
    const s = itemIndex - curPage.value + 1
    // 0~100
    zIndex = itemIndex * 2
    transform += `translate3d(0,0,${s * pageThickness}px) rotateY(-${endDeg}deg)`
  } else {
    transform += `translate3d(0,0,-${itemIndex * pageThickness}px) `
  }

  return { zIndex, transform }
}

function backStyle(itemIndex: number) {
  let zIndex = -itemIndex * 2 + 1
  let transform = 'rotateX(10deg)'
  let visibility = 'hidden'
  if (itemIndex < curPage.value) {
    const s = itemIndex - curPage.value + 1
    zIndex = itemIndex * 2 + 1
    visibility = 'visible'
    transform += `translate3d(0,0,${s * pageThickness}px) rotateY(-${endDeg}deg)`
  } else {
    transform += `translate3d(0,0,-${itemIndex * pageThickness}px)`
  }

  return {
    zIndex,
    transform,
    backgroundColor: 'transparent',
    visibility,
    borderColor: 'transparent'
  } as any
}
</script>
<template>
  <div class="book">
    <div
      v-for="(item, index) in pages"
      :key="index"
      class="page"
      :style="frontStyle(index)"
      @click="next(index)"
    >
      <component v-if="curPage === index" :is="item"></component>
      <!-- 22222222222
      <div class="bookmark">
        {{ item }}
      </div> -->
    </div>
    <div
      v-for="(item, index) in pages"
      :key="index"
      class="page"
      :style="backStyle(index)"
      @click="back(index)"
    >
      <div
        class="back"
        :style="{ backgroundColor: index < curPage ? '#fafcff' : 'transparent' }"
      ></div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.book {
  perspective: 1200px;
  height: 300px;
  width: 300px;
  margin: auto;
  position: relative;
  transform-style: preserve-3d;
}
.bookmark {
  position: absolute;
  height: 30px;
  width: 50px;
  left: -1px;
  top: -30px;
  border: 1px solid #bbb;
  border-bottom: none;
  background-color: #fafcff;
}
.page {
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background-color: #fafcff;
  position: absolute;
  transform-origin: 0 50%;
  transition: transform 1s;
  border: 1px solid #bbb;
  box-sizing: border-box;
}
.back {
  width: 100%;
  height: 100%;
  transition: all 0s 0.25s;
}
</style>
