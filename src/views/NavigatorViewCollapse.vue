<template>
  <el-collapse accordion id="navigator-menu">
    <el-collapse-item :name="r.path" v-for="r in router.options.routes" :key="r.path">
      <template #title>
        <RouterLink :to="r.path" class="navigator-menu-head">{{ r.meta?.head }}</RouterLink>
      </template>
      <div>
        {{ r.meta?.descr }}
      </div>
    </el-collapse-item>
  </el-collapse>
</template>

<script setup>

import { RouterLink, RouterView, useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()
</script>

<style scoped>
#navigator-menu {
  margin: 25px;
}

.box-card {
  width: 600px;
  margin: 10px;
  /* float: left; */
  display: inline-block;
}

.navigator-menu-head {
  padding: 0 25px;
  font-weight: bold;
  font-size: 16px;  
  text-decoration: none;
}

.navigator-menu-head:hover {
  text-decoration: underline;
}
</style>
