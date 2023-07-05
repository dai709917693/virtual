<script setup lang="ts"></script>
<template>
  <div class="cover-card">
    <div class="cover">
      <slot name="cover"></slot>
    </div>
    <slot></slot>
  </div>
</template>
<style scoped lang="scss">
.cover-card {
  position: relative;
  overflow: hidden;

  &:before,
  &:after {
    position: absolute;
    display: flex;
    align-items: center;
    width: 50%;
    height: 100%;
    transition: 0.25s linear;
    z-index: 1;
  }

  &:before {
    content: '';
    top: 0;
    left: 0;
    justify-content: flex-end;
    background-color: #4d60b6;
  }

  &:after {
    content: '';
    top: 0;
    right: 0;
    justify-content: flex-start;
    background-color: #4453a6;
  }
  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    .cover {
      opacity: 0;
      z-index: -3;
    }
    &:before {
      opacity: 0.5;
      transform: translateY(-100%);
    }

    &:after {
      opacity: 0.5;
      transform: translateY(100%);
    }
  }
}
.cover {
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  position: absolute;
  opacity: 1;
  transition: opacity 0.25s;
  z-index: 2;
}
</style>
