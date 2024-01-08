import terser from "@rollup/plugin-terser";
import { defineConfig } from "rollup";

export default defineConfig(
  [true, false].map(
    (minify) =>
      /** @type {import('rollup').RollupOptions} */
      ({
        input: "src/index.js",
        output: {
          file: `dist/bundle${minify ? ".min.js" : ".js"}`,
          format: "umd",
        },
        plugins: [minify ? terser() : undefined],
      }),
  ),
);
