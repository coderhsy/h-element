import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// 定义组件的名字 使用插件
import DefineOptions from "unplugin-vue-define-options/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue({
      script: {
        globalTypeFiles: ["../typings/vue-shim.d.ts"],
      },
    }),
    DefineOptions(),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    target: "esnext",
    minify: false,
    rollupOptions: {
      external: ["vue"],
    },
  },
});
