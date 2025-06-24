<script setup lang="ts">
const props = withDefaults(defineProps<{
  data?: any[]
  total?: number
}>(), {
  data: () => [],
  total: 0,
})
</script>
<template>
  <el-space direction="vertical" fill style="width: 100%">
    <el-table :data="data"
              border
    >
      <slot/>
    </el-table>
    <el-pagination :total="total"
                   background
                   layout="prev, pager, next, jumper, ->, sizes, total"
    />
  </el-space>

</template>
