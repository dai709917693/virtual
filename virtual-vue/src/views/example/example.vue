<script setup lang="ts">
import Username from '@/components/input/username.vue'
import Book from '@/components/tabs/book.vue'
import Test from './test.vue'
</script>

<template>
  <username label="用户名"></username>
  <book :pages="[Test, Test]"></book>
</template>
