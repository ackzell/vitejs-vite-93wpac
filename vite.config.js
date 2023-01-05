// todo: figure this out: 
// this is a JS file because a TS file would make my env go cray cray trying to make sense of the native modules (like `path`)
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    // this is just the way I have it set up on another project and "it ain't broke"
    alias: [{ find: '@', replacement: resolve('src') }],
  },
});
