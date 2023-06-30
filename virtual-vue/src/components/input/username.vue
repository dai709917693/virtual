<script lang="ts" setup>
defineProps<{ label?: string }>()
const step = 50
</script>
<template>
  <div class="form-control">
    <input type="value" required />
    <label>
      <span
        v-for="(item, index) in label"
        :key="index"
        :style="{ transitionDelay: index * step + 'ms' }"
        >{{ item }}</span
      >
    </label>
  </div>
</template>
<style scoped lang="scss">
$color_inactive: #aaa;
$color_active: lightblue;
.form-control {
  position: relative;
  margin: 20px 0 40px;
  width: 190px;
}

.form-control input {
  background-color: transparent;
  border: 0;
  border-bottom: 2px $color_inactive solid;
  display: block;
  width: 100%;
  padding: 15px 0;
  font-size: 18px;
  color: #333;
}

.form-control input:focus,
.form-control input:valid {
  outline: 0;
  border-bottom-color: $color_active;
}

.form-control label {
  position: absolute;
  top: 15px;
  left: 0;
  pointer-events: none;
}

.form-control label span {
  display: inline-block;
  font-size: 18px;
  min-width: 5px;
  color: $color_inactive;
  transition: 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.form-control input:focus + label span,
.form-control input:valid + label span {
  color: $color_active;
  transform: translateY(-30px);
}
</style>
