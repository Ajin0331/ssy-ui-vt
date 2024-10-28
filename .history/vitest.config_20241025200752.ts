import { defineConfig } from "vitest/config";
import Unocss from "unocss/vite";

export default defineConfig({
  plugins: [Unocss()],
  test: {
    globals: true,
    environment: "happy-dom",
  },
});
