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

      <span class="text-large font-600 mr-3"> {{ $route.meta.head }}</span>
    </template>
  </el-page-header>
  <div id="home">
    <RouterLink to="/">Nav</RouterLink>
  </div>

  <!-- <div class="hl"></div> -->
  <RouterView />
</template>

<style scoped>
@media (min-width: 1024px) {}

nav {
  line-height: 80px;
  display: flex;
  justify-content: space-around;
  margin-bottom: -25px;

}

nav a {
  /* margin: 10px; */
  padding: 0 10px;
  background-color: rgb(255, 255, 255);
  text-decoration: none;
  color: #000;
  line-height: 50px;
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
  top: 150px;
  left: -50px;
}

#home a {
  margin-left: 50px;
  line-height: 140px;
}
</style>
