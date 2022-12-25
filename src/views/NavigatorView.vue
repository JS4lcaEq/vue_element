<template>
  <RouterLink :to="r.path" v-for="r in router.options.routes" :key="r.path">
   <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span>{{r.meta?.head}}</span>
      </div>
    </template>
    {{r.meta?.descr}}
  </el-card>    
  </RouterLink>

</template>
<script setup>

import { RouterLink, RouterView, useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()
</script>

<style scoped>
    .box-card{
        width: 600px;
        margin: 10px;
        /* float: left; */
        display: inline-block;
    }
    .box-card .card-header {
        font-weight: bold;
    }
</style>
