<script setup>
import TheWelcome from '../components/TheWelcome.vue'
import { RouterLink, RouterView, useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()
</script>

<template>
    <hr />
    <nav>

        <RouterLink :to="r.path"  v-for="r in router.options.routes" :key="r.path">{{r.meta?.head}}</RouterLink>

    </nav>
</template>
<style scoped>
nav {
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
}

nav a {
    background-color: rgb(255, 255, 255);
    text-decoration: none;
    line-height: 50px;
    font-size: 18px;
    color: #000;
    padding: 0 50px;
}

hr {
    margin: 0;
    padding: 0;
    border: none;
    background-color: #ccc;
    height: 100%;
    width: 1px;
    position: absolute;
    left: 50vw;
    top: 0;
    z-index: -1;
}
</style>