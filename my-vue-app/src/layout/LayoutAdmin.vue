<template>
  <el-container>
    <el-aside
      class="flex h-screen flex-col justify-between border-e bg-white w-300"
    >
      <el-scrollbar>
        <el-menu class="px-4 py-6">
          <el-menu-item index="1">
            <template #title>
              <router-link
                class="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
                to="/product-manager"
                ><el-icon><icon-menu /></el-icon>Products</router-link
              >
            </template>
          </el-menu-item>
        </el-menu>
      </el-scrollbar>
    </el-aside>

    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <Navbar />
      </el-header>

      <el-main class="m-2">
        <el-scrollbar>
          <router-view />
        </el-scrollbar>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
import { Menu as IconMenu } from "@element-plus/icons-vue";
import Navbar from "../components/header/Navbar.vue";
</script>

<style scoped>
.layout-container-demo .el-header {
  position: relative;
  background-color: var(--el-color-primary-light-7);
  color: var(--el-text-color-primary);
}
.layout-container-demo .el-aside {
  color: var(--el-text-color-primary);
  background: var(--el-color-primary-light-8);
}
.layout-container-demo .el-menu {
  border-right: none;
}
.layout-container-demo .el-main {
  padding: 0;
}
.layout-container-demo .toolbar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  right: 20px;
}
</style>
