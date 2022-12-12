<script setup>
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
    <hr />
    <nav>

        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/page1">Page1</RouterLink>
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
    border: none;
    background-color: #ccc;
    height: 90vh;
    width: 1px;
    position: absolute;
    left: 50vw;
    top: 0;
    z-index: -1;
}
</style>