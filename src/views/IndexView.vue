<script lang="ts" setup>
import { ref } from 'vue'
import QmwMenu from '@/components/qmw/QmwMenu.vue'
import HeaderView from '@/views/layout/HeaderView.vue'
import { addRouters } from '@/plugins/router'
import { useRouter } from 'vue-router'

const router = useRouter()

const activeMenuId = ref('')
const menus = ref([])
import('@/assets/menus.json').then(e => {
  menus.value = e.default as any
  addRouters(menus.value)
})
</script>
<template>
  <el-container class="layout-container-demo" style="height: 100%">
    <el-aside width="200px" style="background-color: #001529">
      <qmw-menu v-model:value="activeMenuId"
                :menus="menus"
                style="height: 100%"
                @update:value="router.push({ name: +$event })"
      />
    </el-aside>
    <el-container style="display: flex; flex-direction: column">
      <header-view/>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </el-container>
</template>
