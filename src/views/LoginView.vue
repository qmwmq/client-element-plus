<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
const login = () => {
  router.push({ name: 'index' })
}
</script>
<template>
  <el-button @click="login">登 录</el-button>
</template>