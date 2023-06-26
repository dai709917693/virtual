<script setup lang="ts">
import { apiAuth } from '@/api'
const form = ref<{
  username?: string
  password?: string
}>({})
function login() {
  const { username, password } = form.value
  if (username && password) {
    apiAuth.login(username, password)
  }
}
</script>
<template>
  <div class="container">
    <el-form class="form" >
      <el-form-item class="username">
        <el-input v-model="form.username" name="username"></el-input>
      </el-form-item>
      <el-form-item class="password">
        <el-input v-model="form.password" name="password" type="password"></el-input>
      </el-form-item>
      <el-button class="button" type="info" plain native-type="submit" @click="login"> 登 </el-button>
    </el-form>
  </div>
</template>
<style lang="scss" scoped>
$width: 400px;
$ratio: 0.8;
.container {
  height: 100%;
  position: relative;
}
.form {
  width: $width;
  margin: auto;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
}
.username {
  width: $width * $ratio;
}
.button {
  width: $width * (1 - $ratio);
}
</style>
