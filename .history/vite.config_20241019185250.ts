import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

import { presetUno, presetAttributify, presetIcons } from "unocss";
import Unocss from "./config/unocss";

const rollupOptions = {
  external: ["vue", "vue-router"],
  output: {
    globals: {
      vue: "Vue",
    },
  },
};

export default defineConfig({
  plugins: [vue(), vueJsx(), Unocss()],
  build: {
    rollupOptions,
    minify: false,
    // 添加库模式配置
    lib: {
      entry: "./src/entry.ts",
      name: "BTNUI",
      fileName: "btn-ui",
      // 导出模块格式
      formats: ["es", "umd", "iife"],
    },
  },
});
