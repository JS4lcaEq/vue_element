<script setup>
import { RouterLink, RouterView, useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

function goBack() {
  router.push('/')
}
</script>

<template>
  
  <el-page-header @back="goBack" title="Navigator">
    <template #content>
      <el-icon><Top /></el-icon>
      <span class="text-large font-600 mr-3"> {{ $route.meta.head }}</span>
    </template>
  </el-page-header>

  <div id="home">
    <RouterLink to="/">Nav</RouterLink>
  </div>

  <!-- <p class="debug">{{$route}}</p> -->
  <!-- <div class="hl"></div> -->
  <RouterView />
</template>

<style scoped>
@media (min-width: 1024px) {}
.el-page-header {
  margin: 0px;
  padding: 5vh 5vw;
  background-color: #fff;
}
.el-page-header__content span{
  font-weight: bold;

}
.hl {
  border: none;
  background-color: #ccc;
  height: 1px;
}

#home {
  border: #ccc 1px solid;
  border-radius: 50px;
  height: 100px;
  width: 100px;
  background-color: rgb(255, 255, 255);
  position: absolute;
  top: 550px;
  left: -50px;
}

#home a {
  margin-left: 50px;
  line-height: 140px;
}
.debug {
  background-color: cornsilk;
  padding: 15px;
  margin: 10px;
}

</style>
