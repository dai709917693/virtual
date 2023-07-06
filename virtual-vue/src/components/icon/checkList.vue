<script setup lang="ts">
const props = withDefaults(defineProps<{ width: number }>(), {
  width: 200
})
const style = computed(() => {
  return {
    width: props.width + 'px',
    height: props.width * 1.1 + 'px',
    marginTop: props.width * 0.2 + 'px',
    boxShadow: `0px ${props.width * 0.02}px 0px #476d3b`,
    borderRadius: props.width * 0.1 + 'px'
  }
})
const boardCircleStyle = computed(() => {
  const size = props.width * 0.1 + 'px'
  return {
    width: size,
    height: size,
    borderWidth: props.width * 0.05 + 'px'
  }
})
const paperStyle = computed(() => {
  let boxShadow = '1px 1px 0 rgba(0, 0, 0, 0.1),'
  let paperNum = 4
  let step = props.width * 0.015

  for (let i = 1; i <= paperNum; i++) {
    boxShadow += `${1 + step * i}px ${1 + step * i}px 0 rgba(255, 255, 255, 1),${step * i + 2}px ${
      step * i + 2
    }px 0 rgba(0, 0, 0, ${0.1 + 0.025 * i}),`
  }
  return { boxShadow: boxShadow.substring(0, boxShadow.length - 1) }
})
</script>
<template>
  <div class="board" :style="style">
    <div class="board-top"></div>
    <div class="board-circle" :style="boardCircleStyle"></div>
    <div class="papers" :style="paperStyle">
      <div class="list check"></div>
      <div class="list uncheck"></div>
      <div class="list uncheck"></div>
      <div class="list uncheck"></div>
      <div class="list uncheck"></div>
      <div class="list uncheck"></div>
      <div class="list uncheck"></div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.papers {
  background-color: white;
  transform: scale(0.65);
  transform-origin: 25% 0;
  height: 115%;
  padding: 10%;
  width: 100%;
  margin: 5% auto 10%;
  box-shadow: 1px 1px 0 rgba(0, 0, 0, 0.1), 3px 3px 0 rgba(255, 255, 255, 1),
    4px 4px 0 rgba(0, 0, 0, 0.125), 6px 6px 0 rgba(255, 255, 255, 1), 7px 7px 0 rgba(0, 0, 0, 0.15),
    9px 9px 0 rgba(255, 255, 255, 1), 10px 10px 0 rgba(0, 0, 0, 0.175);
}

.list {
  width: 85%;
  height: 7%;
  background: #d0d6d4;
  margin: 8% 16%;
  position: relative;
}

.check {
  background: #5a8445 !important;
}

.uncheck:before {
  content: '';
  background: #d0d6d4;
  width: 10%;
  height: 110%;
  position: absolute;
  left: -20%;
  top: -25%;
}

.check:before {
  content: '';
  position: absolute;
  top: 0;
  left: -21%;
  width: 5%;
  height: 100%;
  transform: rotate(-45deg);
  background: #5a8445;
}

.check:after {
  content: '';
  position: absolute;
  top: -45%;
  left: -13%;
  width: 5%;
  height: 170%;
  transform: rotate(45deg);
  background: #5a8445;
}

.board {
  position: relative;
  height: auto;
  background: #5a8445;
  padding: 0.5% 0px;
  clear: both;
  overflow: visible;
  position: relative;
}

.board-top {
  width: 65%;
  height: 18%;
  background: #a3aca9;
  position: absolute;
  top: -8%;
  left: 0px;
  right: 0px;
  margin: auto;
  z-index: 5;
  border-radius: 5px;
  box-shadow: 0px 2px 0px #88918e;
}

.board-circle {
  position: absolute;
  border-radius: 100%;
  background: #3498db;
  top: -15%;
  left: 0px;
  right: 0px;
  margin: auto;
  z-index: 9;
  border: 10px solid #a3aca9;
}
</style>
