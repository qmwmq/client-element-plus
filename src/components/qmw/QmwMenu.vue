<script setup lang="tsx">
import type { Menu } from '@/interfaces/menu.ts'
import QmwMenuItem from '@/components/qmw/QmwMenuItem.vue'
import { ArrayUtils } from 'qmwts'

withDefaults(defineProps<{
  menus?: Menu[]
}>(), {
  menus: () => []
})
</script>
<template>
  <el-menu text-color="#aaa"
           active-text-color="#fff"
           background-color="#001529"
  >
    <template v-for="menu in ArrayUtils.treeify(menus)" :key="menu.id">
      <qmw-menu-item :menu="menu"/>
    </template>
  </el-menu>
</template>