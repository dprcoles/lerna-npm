import fs from "fs"
import path from "path"
import { defineConfig } from "tsup"

import baseConfig from "../../tsup.config"

const srcDir = path.resolve(__dirname, "./src")
const packages = fs
  .readdirSync(srcDir)
  .map(pkg => `${srcDir}/${pkg}/src/index.ts`)
  .filter(dir => fs.existsSync(dir))
  .map(dir => dir)

export default defineConfig({
  ...baseConfig,
  entryPoints: ["src/index.ts", ...packages],
})
