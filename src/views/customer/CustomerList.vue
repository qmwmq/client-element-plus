<script setup lang="ts">
import { ref } from 'vue'
import QmwDataTable from '@/components/qmw/QmwDataTable.vue'

const data = ref(Array.from({ length: 20 }).fill({ id: '123', name: '医晓蜂' }))
</script>
<template>
  <qmw-data-table :data="data">
    <el-table-column prop="id" label="ID"></el-table-column>
    <el-table-column prop="name" label="名称"></el-table-column>
  </qmw-data-table>
</template>