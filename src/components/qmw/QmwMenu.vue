<script setup lang="tsx">
import type { Menu } from '@/interfaces/menu.ts'
import QmwMenuItem from '@/components/qmw/QmwMenuItem.vue'
import { ArrayUtils } from 'qmwts'

withDefaults(defineProps<{
  value?: any
  menus?: Menu[]
}>(), {
  menus: () => []
})

const emits = defineEmits([ 'update:value' ])
</script>
<template>
  <el-menu :default-active="value"
           text-color="#aaa"
           active-text-color="#fff"
           background-color="#001529"
           @select="emits('update:value', $event)"
  >
    <template v-for="menu in ArrayUtils.treeify(menus)" :key="menu.id">
      <qmw-menu-item :menu="menu"/>
    </template>
  </el-menu>
</template>