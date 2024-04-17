import { defineConfig } from "tsup"

export default defineConfig({
  entryPoints: ["src/index.ts"],
  outExtension({ format }) {
    return {
      js: `.${format}.js`,
    }
  },
  treeshake: true,
  splitting: true,
  minify: true,
  clean: true,
  format: ["cjs", "esm"],
})
