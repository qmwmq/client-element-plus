<script setup lang="ts">
</script>
<template>
  <el-header class="header">
    <div style="display: flex; gap: 10px">
      <el-select style="width: 200px" placeholder="选择公司"/>
      <el-select style="width: 200px" placeholder="切换系统"/>
    </div>
    <div>
      <el-button text type="primary">退出登录</el-button>
    </div>
  </el-header>
</template>
<style scoped>
.header {
  position: relative;
  border-bottom: 1px solid #ddd;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
