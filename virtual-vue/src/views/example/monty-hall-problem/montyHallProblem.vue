<template>
  <div class="container">
    <div class="box">
      <div v-for="item in n[1]" :key="item" class="door">
        {{ item }}
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
var n = [1, 10]
var index = Math.floor(Math.random() * n[1]) + n[0]

function sel(i, change) {
  if (index === i) {
    if (change) {
      return false
    } else {
      return true
    }
  } else {
    if (change) {
      return true
    } else {
      return false
    }
  }
}

function init() {
  index = Math.floor(Math.random() * n[1]) + n[0]
}

function test() {
  let res = 0
  for (let i = 0; i < 100; i++) {
    init()
    const my = Math.floor(Math.random() * n[1]) + n[0]
    sel(my, true) && res++
  }
  console.log(res / 100)
}
</script>
<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  padding: 100px;
}
.box {
  display: flex;
  flex-wrap: wrap;
}
.door {
  width: 50px;
  height: 100px;
  background-color: antiquewhite;
  margin: 5px;
}
</style>
