import { defineConfig } from "vitest/config";

export default defineConfig({
    base: "/streak-types_difficult/",
    build: {
      target: "esnext",
      sourcemap: true
    },
    test: {
      environment: 'jsdom',
      include: ['tests/*.{test,spec}.{js,ts}']
    }
  });
  