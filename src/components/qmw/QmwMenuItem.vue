<script setup lang="ts">
defineProps<{
  menu: any
}>()
</script>
<template>
  <el-sub-menu v-if="menu.children && menu.children.length" :index="String(menu.id)">
    <template #title>
      <!--      <el-icon v-if="item.icon">-->
      <!--        <component :is="item.icon"/>-->
      <!--      </el-icon>-->
      {{ menu.name }}
    </template>
    <qmw-menu-item v-for="child in menu.children"
                   :key="child.id"
                   :menu="child"
    />
  </el-sub-menu>
  <el-menu-item v-else :index="String(menu.id)">
    <!--    <el-icon v-if="item.icon">-->
    <!--      <component :is="item.icon"/>-->
    <!--    </el-icon>-->
    {{ menu.name }}
  </el-menu-item>
</template>

