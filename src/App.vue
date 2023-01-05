<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img
        v-for="(image, idx) in images"
        :key="idx"
        class="logo vue"
        :src="`@/assets/portfolio/${image.path}`"
        :alt="image.name"
      />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<!-- Sorry, yo necesito poner el script después del template 😅 -->
<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue';

let images = [
  {
    name: 'El logo de Vue.js',
    path: 'vue.svg',
  },
];
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
