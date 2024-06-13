import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: "./src/index.ts", // 入口文件路径
      name: "toolBox-js", // 包名
      fileName: (format) => `toolBox-js.${format}.js`, // 输出文件命名规则
    },
  },
});