<script lang="ts" setup>
import { ref } from 'vue'
import { Setting } from '@element-plus/icons-vue'
import QmwMenu from '@/components/qmw/QmwMenu.vue'

const item = {
  date: '2016-05-02',
  name: 'Tom',
  address: 'No. 189, Grove St, Los Angeles',
}
const tableData = ref(Array.from({ length: 20 }).fill(item))

const menus = ref([])
import('@/assets/menus.json').then(e => {
  menus.value = e.default as any
})

</script>
<template>
  <el-container class="layout-container-demo" style="height: 100%">
    <el-aside width="200px">
      <el-scrollbar>
        <qmw-menu :menus="menus"/>
      </el-scrollbar>
    </el-aside>

    <el-container>
      <el-header style="text-align: right; font-size: 12px; background-color: #fff">
        <div class="toolbar">
          <el-dropdown>
            <el-icon style="margin-right: 8px; margin-top: 1px">
              <setting/>
            </el-icon>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>View</el-dropdown-item>
                <el-dropdown-item>Add</el-dropdown-item>
                <el-dropdown-item>Delete</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
          <span>Tom</span>
        </div>
      </el-header>

      <el-main>
        <el-scrollbar>
          <el-table :data="tableData">
            <el-table-column prop="date" label="Date" width="140"/>
            <el-table-column prop="name" label="Name" width="120"/>
            <el-table-column prop="address" label="Address"/>
          </el-table>
        </el-scrollbar>
      </el-main>
    </el-container>
  </el-container>
</template>
<style scoped>
.layout-container-demo .el-header {
  position: relative;
  border-bottom: 1px solid #ddd;
}

.layout-container-demo .el-aside {
  color: var(--el-text-color-primary);
  background: var(--el-color-primary-light-8);
}

.layout-container-demo .el-main {
  padding: 12px;
}

.layout-container-demo .toolbar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  right: 20px;
}
</style>