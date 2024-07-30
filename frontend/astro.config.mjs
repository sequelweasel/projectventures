import { defineConfig, envField } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  output: "server",
  adapter: node({
    mode: "standalone",
  }),
  experimental: {
    env: {
      schema: {
        PUBLIC_APP_BASE_URL: envField.string({
          context: "server",
          access: "public",
          default: "http://localhost:4321",
        }),
        DEVELOPMENT_APP_BASE_URL: envField.string({
          context: "server",
          access: "public",
          default: "http://localhost:4321",
        }),
        PB_URL: envField.string({
          context: "server",
          access: "public",
          default: "localhost:42069",
        }),
      },
    },
  },
});
