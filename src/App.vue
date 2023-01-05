<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    
    <a href="https://vuejs.org/" target="_blank">
      <!--! We build the dynamic URL on the script portion, not directly on the template -->
      <!-- Note: Passing the `href` property to `:src` or the linter will complain that this "might be a URL object and not a string"-->
      <img
        v-for="(image, idx) in images"
        :key="idx"
        class="logo vue"
        :src="image.path"
        :alt="image.name"
      />

      <hr>
      <p>control image: </p>
      <!-- this would be the "static" way to define the path to feed to `src` -->
      <img
        class="logo vue"
        src="@/assets/portfolio/vue.svg"
        alt="alt"
      />

    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<!-- Can't get used to put `<script>` first 😬 -->
<script setup lang="ts">
import HelloWorld from '@/components/HelloWorld.vue';

//! THIS WAS THE IMPORTANT LINK I FOUND: see  https://stackoverflow.com/a/71514878/1691580

// 🔸 1. importing "by hand" the imageUrl
import imageUrl from '@/assets/portfolio/vue.svg'

console.log(imageUrl)

// 🔹 we'll use this to build a dynamic path later on
const IMAGES_FOLDER = './assets/portfolio/' 

let images = [
  {
    name: 'Vue.js logo',
    path: imageUrl // 🔸 2. using the imported path
  },
  {
    name: 'Another Vue.js logo',
    // 🔹 building a dynamic URL
    //* see: https://vitejs.dev/guide/assets.html#new-url-url-import-meta-url

    //* Note: as per the docs: 
    // Does not work with SSR
    // This pattern does not work if you are using Vite for Server-Side Rendering, 
    // because import.meta.url have different semantics in browsers vs. Node.js. 
    // The server bundle also cannot determine the client host URL ahead of time.
    path: new window.URL(IMAGES_FOLDER + 'vue.svg', import.meta.url).href
  },

  // TODO: for some reason I need to investigate, there is no way to pass
  // a string literal to the URL constructor... it throws
  // EACCES: permission denied, scandir '/lost+found'
  
  // {
  //   name: 'Vue.js logo',
  //   // 🔹 building a dynamic URL
  //   path: new URL(`${IMAGES_FOLDER}/vue.svg`, import.meta.url)
  // },
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
