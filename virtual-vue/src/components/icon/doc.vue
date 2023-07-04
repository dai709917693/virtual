<script setup lang="ts">
const props = withDefaults(defineProps<{ width: number }>(), {
  width: 100
})
const style = computed(() => {
  const radius = props.width * 0.1
  return {
    width: props.width + 'px',
    height: props.width * 1.1 + 'px',
    borderRadius: `${radius}px ${props.width * 0.3}px ${radius}px ${radius}px`
  }
})
</script>
<template>
  <div class="docs-icon" :style="style">
    <div class="fold" :style="{ borderWidth: width * 0.12 + 'px' }"></div>
    <div
      class="fold-shadow"
      :style="{ borderWidth: width * 0.12 + 'px', top: width * 0.24 + 'px' }"
    ></div>
    <span class="line line1"></span>
    <span class="line line2"></span>
    <span class="line line3"></span>
    <span class="line line4"></span>
  </div>
</template>
<style scoped lang="scss">
.docs-icon {
  position: relative;
  background: #2d74ec;
}

.fold {
  border-bottom: 12px solid #a0c3ff;
  border-top: 12px solid #fff;
  border-left: 12px solid #a0c3ff;
  border-right: 12px solid #fff;
  position: absolute;
  top: 0;
  right: 0;
}

.fold-shadow {
  content: '';
  border-bottom: 13px solid transparent;
  border-top: 13px solid rgba(0, 0, 0, 0.3);
  border-left: 13px solid transparent;
  border-right: 13px solid rgba(0, 0, 0, 0.3);
  position: absolute;
  top: 26px;
  right: 0;
}
.line {
  background: #ebf2fe;
  display: block;
  width: 60%;
  height: 8%;
  position: absolute;
  left: 20%;
}

.line1 {
  top: 25%;
}

.line2 {
  top: 40%;
}

.line3 {
  top: 55%;
}
.line4 {
  top: 70%;
  width: 30%;
}
</style>
