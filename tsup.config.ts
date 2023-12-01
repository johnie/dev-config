import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/**/*.ts"],
  format: ["cjs"],
  splitting: false,
  sourcemap: false,
  clean: true,
  dts: true,
  target: "es2022",
});
