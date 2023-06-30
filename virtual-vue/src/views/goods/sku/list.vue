<script setup lang="ts">
import router from '@/router'
const colNum = 6
const list = [1, 1, 11]
function toCreate() {
  router.push({ name: 'skuCreate' })
}
</script>
<template>
  <div class="list">
    <div class="create-btn-box" :style="{ width: 100 / 6 + '%' }">
      <div class="create-btn" @click="toCreate">
        <el-icon color="#409eff" size="50"><GoodsFilled /></el-icon>
        <div class="create-btn__text">创建</div>
      </div>
    </div>
    <div
      class="item scale"
      :style="{ width: 100 / 6 + '%' }"
      v-for="(item, index) in list"
      :key="index"
    ></div>
  </div>
</template>
<style scoped lang="scss">
$item_height: 100px;
$create_btn_color: #409eff;

.list {
  &:after {
    content: '';
    height: 0;
    display: block;
    clear: both;
  }
  .item {
    height: $item_height;
    float: left;
    background-color: #fafafa;
    margin: 5px;
    &:nth-child(odd) {
      background-color: #f0f2f5;
    }
  }
  .create-btn-box {
    height: $item_height;
    float: left;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 5px;
  }
  .create-btn {
    position: relative;
    width: 80px;
    height: 80px;
    color: $create_btn_color;
    text-align: center;
    border: 2px solid $create_btn_color;
    border-radius: 50%;

    cursor: pointer;
    overflow: hidden;

    &__text {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      transition: all 0.3s;
      transition-delay: 0.3s;
      z-index: 2;
    }
    &:before {
      content: '';
      position: absolute;
      z-index: 1;
      background: #fff;
      height: 150%;
      width: 150%;
      border-radius: 50%;
      top: -10%;
      left: -10%;
      transition: all 1s;
    }

    &:hover {
      .create-btn__text {
        top: 60px;
        transition-delay: 0s !important;
      }
      &:before {
        top: -150%;
        left: -100%;
      }
    }
  }
}

.scale {
  transition: 0.2s ease-in-out;
  &:hover {
    cursor: pointer;
    scale: 1.1;
    background-color: #cc39a4 !important;
  }
}
</style>
