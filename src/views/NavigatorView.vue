<template>
   
   
   <el-card class="box-card" v-for="r in $router.options.routes" :key="r.path">
    <template #header>
      <div class="card-header">
        <span>{{r.meta?.head}}</span>
      </div>
    </template>
    {{r}}
  </el-card>

<!-- {{$router.options.routes}} -->

</template>
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
