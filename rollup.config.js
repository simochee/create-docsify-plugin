import terser from "@rollup/plugin-terser";
import { defineConfig } from "rollup";

export default defineConfig({
  input: "src/index.js",
  output: {
    file: "dist/index.js",
    format: "umd",
    sourcemap: true,
  },
  plugins: [terser()],
});
