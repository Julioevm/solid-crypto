/// <reference types="vitest" />
import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";

export default defineConfig({
  test: {
    environment: "jsdom",
    transformMode: {
      web: [/\.[jt]sx$/],
    },
    deps: {
      inline: [/solid-js/],
    },
  },
  plugins: [solidPlugin()],
  build: {
    target: "esnext",
    polyfillDynamicImport: false,
  },
});
