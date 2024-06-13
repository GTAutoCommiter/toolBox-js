import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: "./src/index.ts", // 入口文件路径
      name: "jvtools", // 包名
      fileName: (format) => `toolbox.${format}.js`, // 输出文件命名规则
    },
  },
});