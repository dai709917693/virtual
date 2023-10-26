<template>
  {{ vocList.length }}
  {{ usedNum.length }}
  <test ref="testRef" :word="word" :title="title" @failed="next" @success="next"></test>
</template>
<script setup lang="ts">
import vocJson from './vocabulary.json'
import Test from './test.vue'
import { getSimilarWords } from './similar'
console.log(getSimilarWords(vocJson))
const testRef = ref()
const vocList = Object.entries(vocJson).slice(0, 3)

const numList: number[] = []
const usedNum = ref<number[]>([])
for (let i = 0; i < vocList.length; i++) {
  numList.push(i)
}
function random() {
  const index = Math.round(Math.random() * (numList.length - 1))
  const num = numList.splice(index, 1)[0]
  return num
}
const index = ref(random())

const word = computed(() => vocList[index.value][0])
const title = computed(() => vocList[index.value][1])


function next() {
  testRef.value.reset()
  usedNum.value.push(index.value)
  if (numList.length !== 0) {
    index.value = random()
  }
}
</script>
