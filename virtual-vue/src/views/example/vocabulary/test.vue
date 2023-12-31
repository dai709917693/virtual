<template>
  <form class="form">
    {{ title }}
    <div class="inputs">
      <input
        ref="inputRef"
        v-for="item in wordLen"
        :key="item"
        v-model="inputs[item - 1]"
        :class="{
          'input-success': validateRes[item - 1],
          'input-fail': validateRes[item - 1] === false
        }"
        placeholder=""
        maxlength="1"
        @keydown="inputNextFocus($event, item - 1)"
        @keyup="inputBlur"
        @keypress="isAlphaKey"
      />
    </div>
  </form>
</template>
<script setup lang="ts">
const props = defineProps<{ word: string; title: string }>()
const emit = defineEmits<{ (e: 'failed'): void; (e: 'success'): void }>()

const inputRef = ref()
const inputs = ref<string[]>([])
const curIndex = ref()
const wordLen = computed(() => props.word.length)

const validateRes = ref<(boolean | '')[]>([])

let watchHandle: any

function onFailed() {
  emit('failed')
}

function isAlphaKey(event: KeyboardEvent) {
  const res = /[a-zA-Z]/.test(event.key)
  if (!res) {
    event.preventDefault()
  }

  return res
}

function validate() {
  let fail = false
  validateRes.value = inputs.value.map((input, index) => {
    if (input === '') {
      return ''
    } else {
      const res = input === props.word[index]
      !res && (fail = true)
      return res
    }
  })
  fail && onFailed()
}

function inputBlur(e: KeyboardEvent) {
  if (!isAlphaKey(e)) {
    return
  }
  validate()
  watchHandle()
}

function inputNextFocus(e: KeyboardEvent, index: number) {
  if (!isAlphaKey(e)) {
    return
  }
  curIndex.value = index
  inputs.value[index] = ''
  if (index !== wordLen.value - 1) {
    watchHandle = watch(
      () => inputs.value,
      () => {
        inputRef.value[curIndex.value + 1].focus()
      },
      {
        deep: true
      }
    )
  } else {
    emit('success')
  }
}
function reset() {
  inputs.value = []
  validate()
  inputRef.value[0].focus()
}
defineExpose({
  reset
})
</script>
<style lang="scss" scoped>
$success_color: #67c23a;
$fail_color: #f56c6c;

.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  overflow: hidden;
  padding: 20px;
  background: #606c88;
  background: -webkit-linear-gradient(to right, #3f4c6b, #606c88);
  background: linear-gradient(to right, #3f4c6b, #606c88);
  border-radius: 10px;
  box-shadow: 0px 87px 78px -39px rgba(0, 0, 0, 0.4);
}

.form .inputs {
  display: flex;
  justify-content: space-between;
  gap: 10px;
}

.form .inputs input {
  height: 2.5em;
  width: 2.5em;
  outline: none;
  text-align: center;
  font-size: 1.5em;
  color: #fff;
  border-radius: 0.3em;
  border: 1px solid rgba(253, 253, 253, 0.363);
  background-color: rgb(255 255 255 / 0.05);
}

.input {
  &-success {
    border-color: $success_color !important;
  }

  &-fail {
    border-color: $fail_color !important;
  }
}

.form .inputs input:focus {
  border: 1px solid rgb(99 102 241);
}
</style>
