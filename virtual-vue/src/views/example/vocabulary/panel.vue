<template>

  <test ref="testRef" :word="word" :title="title" @failed="onFail"></test>
</template>
<script setup lang="ts">
import vocJson from './vocabulary.json'
import Test from './test.vue'

const testRef = ref()
const vocList = Object.entries(vocJson)
const index = ref(0)
const word = computed(() => vocList[index.value][0])
const title = computed(() => vocList[index.value][1])

function onFail() {
  testRef.value.reset()
  index.value++
}
</script>
